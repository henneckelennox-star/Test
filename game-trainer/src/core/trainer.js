'use strict';

const fs = require('fs');
const path = require('path');
const { EventEmitter } = require('events');
const { allCheats, findCheat, defaultValues, normalizeValue } = require('./cheats');

// Hält den Zustand aller Spiele (läuft? verbunden? welche Cheats an?)
// und leitet Änderungen an das jeweilige Spielmodul bzw. die Brücke weiter.
//
// Ein Spiel gilt als "läuft", wenn sein Prozess gefunden wurde ODER
// sein Spielskript sich gerade über die Brücke meldet.
//
// Events: 'status' (status), 'value' ({ gameId, cheatId, value }),
//         'values' ({ gameId, values }), 'trigger' ({ gameId, cheatId })
class Trainer extends EventEmitter {
  constructor({ games, bridge, log = console }) {
    super();
    this.games = new Map(games.map((g) => [g.id, g]));
    this.bridge = bridge;
    this.log = log;
    this.state = new Map();
    for (const game of games) {
      this.state.set(game.id, { processRunning: false, connected: false, info: null, values: defaultValues(game) });
    }
  }

  getGame(gameId) {
    const game = this.games.get(gameId);
    if (!game) throw new Error(`Unbekanntes Spiel "${gameId}"`);
    return game;
  }

  isRunning(gameId) {
    const st = this.state.get(gameId);
    return Boolean(st && (st.processRunning || st.connected));
  }

  status(gameId) {
    const st = this.state.get(gameId);
    return { gameId, running: this.isRunning(gameId), processRunning: st.processRunning, connected: st.connected, info: st.info };
  }

  setProcessRunning(gameId, running) {
    this.updateRunning(gameId, () => { this.state.get(gameId).processRunning = running; });
  }

  setConnection(gameId, connected, info) {
    this.updateRunning(gameId, () => {
      const st = this.state.get(gameId);
      st.connected = connected;
      st.info = connected ? info : null;
    });
  }

  updateRunning(gameId, mutate) {
    const game = this.getGame(gameId);
    const wasRunning = this.isRunning(gameId);
    mutate();
    const running = this.isRunning(gameId);

    if (!wasRunning && running) this.attach(game);
    if (wasRunning && !running) this.detach(game);
    this.emit('status', this.status(gameId));
  }

  attach(game) {
    const st = this.state.get(game.id);
    if (game.bridge) this.bridge.channel(game.id).setAll(st.values);
    this.callHook(game, 'onAttach');
  }

  detach(game) {
    // Wie bei WeMod: Spiel zu -> alle Cheats aus.
    const st = this.state.get(game.id);
    st.values = defaultValues(game);
    if (game.bridge) this.bridge.channel(game.id).setAll(st.values);
    this.callHook(game, 'onDetach');
    this.emit('values', { gameId: game.id, values: st.values });
  }

  setValue(gameId, cheatId, raw) {
    const game = this.getGame(gameId);
    const cheat = findCheat(game, cheatId);
    if (!this.isRunning(gameId)) throw new Error(`${game.name} läuft nicht – Cheats sind gesperrt`);

    const st = this.state.get(gameId);
    const value = normalizeValue(cheat, raw);
    if (st.values[cheatId] === value) return value;
    st.values[cheatId] = value;

    if (game.bridge) this.bridge.channel(gameId).set(cheatId, value);
    this.callHook(game, 'onChange', cheat, value);
    this.emit('value', { gameId, cheatId, value });
    return value;
  }

  trigger(gameId, cheatId) {
    const game = this.getGame(gameId);
    const cheat = findCheat(game, cheatId);
    if (cheat.type !== 'button') throw new Error(`Cheat "${cheatId}" ist kein Knopf`);
    if (!this.isRunning(gameId)) throw new Error(`${game.name} läuft nicht – Cheats sind gesperrt`);

    if (game.bridge) this.bridge.channel(gameId).trigger(cheatId);
    this.callHook(game, 'onTrigger', cheat);
    this.emit('trigger', { gameId, cheatId });
  }

  // Tastenkürzel: Schalter umlegen bzw. Knopf auslösen.
  hotkey(gameId, cheatId) {
    const cheat = findCheat(this.getGame(gameId), cheatId);
    if (cheat.type === 'toggle') return this.setValue(gameId, cheatId, !this.state.get(gameId).values[cheatId]);
    if (cheat.type === 'button') return this.trigger(gameId, cheatId);
    return undefined;
  }

  reset(gameId) {
    const game = this.getGame(gameId);
    const defaults = defaultValues(game);
    for (const [cheatId, value] of Object.entries(defaults)) this.setValue(gameId, cheatId, value);
  }

  callHook(game, name, ...args) {
    if (typeof game[name] !== 'function') return;
    const context = {
      game,
      values: { ...this.state.get(game.id).values },
      bridge: game.bridge ? this.bridge.channel(game.id) : null,
      log: (...msg) => this.log.log(`[${game.id}]`, ...msg),
    };
    try {
      game[name](context, ...args);
    } catch (err) {
      this.log.error(`[${game.id}] Fehler in ${name}:`, err);
    }
  }

  // Liest eine Setup-Datei eines Spiels (z. B. das Roblox-Skript) – nur Dateien, die das Modul selbst angibt.
  setupFile(gameId, fileId) {
    const game = this.getGame(gameId);
    const file = game.setup?.files?.find((f) => f.id === fileId);
    if (!file) throw new Error(`Unbekannte Setup-Datei "${fileId}"`);
    const fullPath = path.join(game.dir, file.path);
    return { ...file, fullPath, read: () => fs.readFileSync(fullPath, 'utf8') };
  }

  // Alles, was die Oberfläche braucht – ohne Funktionen, damit es über IPC passt.
  describe() {
    return [...this.games.values()].map((game) => ({
      id: game.id,
      name: game.name,
      subtitle: game.subtitle || '',
      accent: game.accent || '#6c5ce7',
      initials: game.initials || game.name.slice(0, 2).toUpperCase(),
      bridge: Boolean(game.bridge),
      hints: game.hints || {},
      setup: game.setup ? { title: game.setup.title, steps: game.setup.steps || [], files: (game.setup.files || []).map(({ id, label, target }) => ({ id, label, target })) } : null,
      categories: game.categories.map((category) => ({
        name: category.name,
        cheats: category.cheats.map((cheat) => ({ ...cheat })),
      })),
      cheatCount: allCheats(game).length,
      status: this.status(game.id),
      values: { ...this.state.get(game.id).values },
    }));
  }
}

module.exports = { Trainer };
