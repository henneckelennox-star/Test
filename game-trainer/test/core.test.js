'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');
const fs = require('fs');

const { loadGames } = require('../src/core/game-loader');
const { normalizeValue, validateGame, allCheats } = require('../src/core/cheats');
const { ProcessWatcher, normalizeProcessName } = require('../src/core/process-watcher');
const { Bridge } = require('../src/core/bridge');
const { Trainer } = require('../src/core/trainer');

const quietLog = { log() {}, error() {} };
const games = loadGames(path.join(__dirname, '..', 'src', 'games'), quietLog);
const roblox = games.find((g) => g.id === 'roblox-studio');

test('lädt das Roblox-Studio-Modul, aber nicht die Vorlage', () => {
  assert.ok(roblox);
  assert.equal(games.some((g) => g.id === 'mein-spiel'), false);
});

test('Vorlage ist ein gültiges Spielmodul', () => {
  assert.deepEqual(validateGame(require('../src/games/_vorlage')), []);
});

test('jede Roblox-Cheat-id kommt in den Luau-Skripten vor', () => {
  const dir = path.join(roblox.dir, 'roblox');
  const lua = fs.readdirSync(dir).map((f) => fs.readFileSync(path.join(dir, f), 'utf8')).join('\n');
  for (const cheat of allCheats(roblox)) assert.ok(lua.includes(cheat.id), `${cheat.id} fehlt im Luau-Code`);
});

test('Tastenkürzel sind eindeutig', () => {
  const keys = allCheats(roblox).map((c) => c.hotkey).filter(Boolean);
  assert.equal(new Set(keys).size, keys.length);
});

test('normalizeValue begrenzt und rastet Regler ein', () => {
  const slider = { id: 's', type: 'slider', min: 1, max: 10, step: 0.5, default: 1 };
  assert.equal(normalizeValue(slider, 99), 10);
  assert.equal(normalizeValue(slider, -3), 1);
  assert.equal(normalizeValue(slider, 2.3), 2.5);
  assert.equal(normalizeValue(slider, 'kaputt'), 1);
  assert.equal(normalizeValue({ id: 't', type: 'toggle' }, 1), true);
});

test('Prozessnamen werden plattformunabhängig verglichen', () => {
  assert.equal(normalizeProcessName('C:\\Programme\\Roblox\\RobloxStudioBeta.exe'), 'robloxstudiobeta');
  assert.equal(normalizeProcessName('/Applications/RobloxStudio.app/Contents/MacOS/RobloxStudio'), 'robloxstudio');
});

test('ProcessWatcher meldet Start und Ende eines Spiels', async () => {
  let processes = ['explorer.exe'];
  const watcher = new ProcessWatcher({ games, lister: async () => processes });
  const events = [];
  watcher.on('change', (id, running) => events.push([id, running]));

  await watcher.tick();
  processes = ['explorer.exe', 'RobloxStudioBeta.exe'];
  await watcher.tick();
  await watcher.tick();
  processes = [];
  await watcher.tick();

  assert.deepEqual(events, [['roblox-studio', false], ['roblox-studio', true], ['roblox-studio', false]]);
});

test('Trainer sperrt Cheats, bis das Spiel läuft, und setzt beim Beenden zurück', () => {
  const bridge = new Bridge();
  const trainer = new Trainer({ games, bridge, log: quietLog });

  assert.throws(() => trainer.setValue('roblox-studio', 'fly', true), /gesperrt/);

  trainer.setProcessRunning('roblox-studio', true);
  trainer.setValue('roblox-studio', 'fly', true);
  trainer.setValue('roblox-studio', 'speed', 3.2);
  trainer.hotkey('roblox-studio', 'noclip');
  trainer.hotkey('roblox-studio', 'heal');

  const channel = bridge.channel('roblox-studio');
  assert.equal(channel.values.fly, true);
  assert.equal(channel.values.speed, 3);
  assert.equal(channel.values.noclip, true);
  assert.equal(channel.actions.heal, 1);

  trainer.setProcessRunning('roblox-studio', false);
  assert.equal(channel.values.fly, false);
  assert.equal(channel.values.speed, 1);
  assert.equal(channel.actions.heal, 1, 'Aktionszähler bleiben erhalten');
});

test('Brücke liefert den Zustand per HTTP und meldet die Verbindung', async () => {
  const bridge = new Bridge({ port: 0 });
  const trainer = new Trainer({ games, bridge, log: quietLog });
  bridge.on('connection', (id, connected, info) => trainer.setConnection(id, connected, info));
  bridge.channel('roblox-studio');
  const port = await bridge.start();

  try {
    const res = await fetch(`http://127.0.0.1:${port}/v1/roblox-studio/state?place=Obby`);
    const data = await res.json();
    assert.equal(data.values.godMode, false);

    // Verbindung über die Brücke zählt auch als "läuft" (falls der Prozessname nicht passt).
    const status = trainer.status('roblox-studio');
    assert.equal(status.running, true);
    assert.equal(status.connected, true);
    assert.deepEqual(status.info, { place: 'Obby' });

    trainer.setValue('roblox-studio', 'godMode', true);
    const after = await (await fetch(`http://127.0.0.1:${port}/v1/roblox-studio/state`)).json();
    assert.equal(after.values.godMode, true);
    assert.ok(after.version > data.version);

    const missing = await fetch(`http://127.0.0.1:${port}/v1/gibtsnicht/state`);
    assert.equal(missing.status, 404);
  } finally {
    await bridge.stop();
  }
});
