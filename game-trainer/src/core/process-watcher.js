'use strict';

const { execFile } = require('child_process');
const path = require('path');
const { EventEmitter } = require('events');

// "C:\\...\\RobloxStudioBeta.exe" -> "robloxstudiobeta"
function normalizeProcessName(name) {
  return path.basename(String(name).trim().replace(/\\/g, '/')).toLowerCase().replace(/\.exe$/, '');
}

function listProcesses() {
  return new Promise((resolve) => {
    const options = { windowsHide: true, maxBuffer: 16 * 1024 * 1024 };
    if (process.platform === 'win32') {
      execFile('tasklist', ['/FO', 'CSV', '/NH'], options, (err, stdout) => {
        if (err) return resolve([]);
        // Jede Zeile: "Name.exe","PID","Sitzung",...
        const names = stdout.split(/\r?\n/).map((line) => line.match(/^"([^"]+)"/)).filter(Boolean).map((m) => m[1]);
        resolve(names);
      });
    } else {
      execFile('ps', ['-A', '-o', 'comm='], options, (err, stdout) => {
        if (err) return resolve([]);
        resolve(stdout.split('\n').map((line) => line.trim()).filter(Boolean));
      });
    }
  });
}

// Fragt regelmäßig die Prozessliste ab und meldet, wenn ein Spiel startet oder beendet wird.
// Event: 'change' (gameId, running)
class ProcessWatcher extends EventEmitter {
  constructor({ games, interval = 2000, simulate = '', lister = listProcesses }) {
    super();
    this.games = games;
    this.interval = interval;
    this.lister = lister;
    // Zum Ausprobieren ohne Spiel: TRAINER_SIMULATE="RobloxStudioBeta.exe"
    this.simulated = String(simulate || '').split(',').map((s) => s.trim()).filter(Boolean).map(normalizeProcessName);
    this.running = new Map();
    this.timer = null;
    this.busy = false;
  }

  start() {
    this.tick();
    this.timer = setInterval(() => this.tick(), this.interval);
  }

  stop() {
    clearInterval(this.timer);
    this.timer = null;
  }

  async tick() {
    if (this.busy) return;
    this.busy = true;
    try {
      const names = new Set((await this.lister()).map(normalizeProcessName));
      for (const name of this.simulated) names.add(name);

      for (const game of this.games) {
        const running = game.processNames.some((p) => names.has(normalizeProcessName(p)));
        if (this.running.get(game.id) !== running) {
          this.running.set(game.id, running);
          this.emit('change', game.id, running);
        }
      }
    } finally {
      this.busy = false;
    }
  }
}

module.exports = { ProcessWatcher, listProcesses, normalizeProcessName };
