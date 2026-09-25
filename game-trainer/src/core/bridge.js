'use strict';

const http = require('http');
const { EventEmitter } = require('events');

// Lokale Brücke zwischen App und Spiel.
// Das Spiel (z. B. ein Skript in Roblox Studio) fragt regelmäßig
//   GET http://127.0.0.1:<port>/v1/<gameId>/state
// ab und bekommt den aktuellen Cheat-Stand als JSON:
//   { "version": 7, "values": { "fly": true, ... }, "actions": { "heal": 3 } }
// "actions" zählt pro Knopf hoch, wie oft er gedrückt wurde.
//
// Events: 'connection' (gameId, connected, info), 'error' (err)

const CONNECTION_TIMEOUT_MS = 2500;

class Channel {
  constructor(id) {
    this.id = id;
    this.version = 0;
    this.values = {};
    this.actions = {};
    this.lastSeen = 0;
    this.info = null;
  }

  set(key, value) {
    this.values[key] = value;
    this.version++;
  }

  setAll(values) {
    this.values = { ...values };
    this.version++;
  }

  trigger(key) {
    // Zähler werden nie zurückgesetzt, damit das Spiel jeden Druck als neu erkennt.
    this.actions[key] = (this.actions[key] || 0) + 1;
    this.version++;
  }

  isConnected(now = Date.now()) {
    return now - this.lastSeen < CONNECTION_TIMEOUT_MS;
  }

  snapshot() {
    return { version: this.version, values: this.values, actions: this.actions };
  }
}

class Bridge extends EventEmitter {
  constructor({ port = 34873, host = '127.0.0.1' } = {}) {
    super();
    this.port = port;
    this.host = host;
    this.channels = new Map();
    this.reported = new Map();
    this.server = null;
    this.timer = null;
  }

  channel(id) {
    if (!this.channels.has(id)) this.channels.set(id, new Channel(id));
    return this.channels.get(id);
  }

  start() {
    return new Promise((resolve, reject) => {
      this.server = http.createServer((req, res) => this.handle(req, res));
      this.server.once('error', (err) => {
        this.emit('error', err);
        reject(err);
      });
      this.server.listen(this.port, this.host, () => {
        this.port = this.server.address().port;
        this.timer = setInterval(() => this.checkConnections(), 500);
        resolve(this.port);
      });
    });
  }

  stop() {
    clearInterval(this.timer);
    return new Promise((resolve) => (this.server ? this.server.close(() => resolve()) : resolve()));
  }

  handle(req, res) {
    const url = new URL(req.url, `http://${this.host}`);
    const match = url.pathname.match(/^\/v1\/([a-z0-9-]+)\/state$/);
    if (req.method !== 'GET' || !match || !this.channels.has(match[1])) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end('{"error":"not found"}');
      return;
    }

    const channel = this.channels.get(match[1]);
    channel.lastSeen = Date.now();
    const place = url.searchParams.get('place');
    channel.info = place ? { place: place.slice(0, 100) } : null;
    this.setConnected(channel, true);

    res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
    res.end(JSON.stringify(channel.snapshot()));
  }

  checkConnections() {
    const now = Date.now();
    for (const channel of this.channels.values()) {
      if (!channel.isConnected(now)) this.setConnected(channel, false);
    }
  }

  // Meldet nur echte Änderungen (verbunden/getrennt oder anderer Ortsname).
  setConnected(channel, connected) {
    const report = connected ? JSON.stringify(channel.info) : null;
    if ((this.reported.get(channel.id) ?? null) === report) return;
    this.reported.set(channel.id, report);
    this.emit('connection', channel.id, connected, connected ? channel.info : null);
  }
}

module.exports = { Bridge, Channel, CONNECTION_TIMEOUT_MS };
