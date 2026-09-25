'use strict';

const path = require('path');
const { app, BrowserWindow, ipcMain, globalShortcut, clipboard, shell } = require('electron');
const { loadGames } = require('./src/core/game-loader');
const { allCheats } = require('./src/core/cheats');
const { ProcessWatcher } = require('./src/core/process-watcher');
const { Bridge } = require('./src/core/bridge');
const { Trainer } = require('./src/core/trainer');

const BRIDGE_PORT = 34873;

if (!app.requestSingleInstanceLock()) {
  app.quit();
  return;
}

const games = loadGames(path.join(__dirname, 'src', 'games'));
const bridge = new Bridge({ port: BRIDGE_PORT });
const trainer = new Trainer({ games, bridge });
const watcher = new ProcessWatcher({ games, simulate: process.env.TRAINER_SIMULATE });
let bridgeError = null;
let win = null;

function send(channel, payload) {
  if (win && !win.isDestroyed()) win.webContents.send(channel, payload);
}

// ---------- Tastenkürzel: nur aktiv, solange das Spiel läuft ----------

function setHotkeys(gameId, enabled) {
  const game = trainer.getGame(gameId);
  for (const cheat of allCheats(game)) {
    if (!cheat.hotkey) continue;
    if (!enabled) {
      if (globalShortcut.isRegistered(cheat.hotkey)) globalShortcut.unregister(cheat.hotkey);
      continue;
    }
    const ok = globalShortcut.register(cheat.hotkey, () => {
      try {
        trainer.hotkey(gameId, cheat.id);
      } catch (err) {
        console.warn(err.message);
      }
    });
    if (!ok) console.warn(`[Tasten] ${cheat.hotkey} für "${cheat.name}" ist schon belegt.`);
  }
}

// ---------- Verdrahtung ----------

const hotkeysActive = new Set();
trainer.on('status', (status) => {
  if (status.running !== hotkeysActive.has(status.gameId)) {
    setHotkeys(status.gameId, status.running);
    status.running ? hotkeysActive.add(status.gameId) : hotkeysActive.delete(status.gameId);
  }
  send('game:status', status);
});
trainer.on('value', (payload) => send('cheat:value', payload));
trainer.on('values', (payload) => send('cheat:values', payload));
trainer.on('trigger', (payload) => send('cheat:trigger', payload));

watcher.on('change', (gameId, running) => trainer.setProcessRunning(gameId, running));
bridge.on('connection', (gameId, connected, info) => trainer.setConnection(gameId, connected, info));

// ---------- IPC (Oberfläche -> Hauptprozess) ----------

ipcMain.handle('app:info', () => ({ version: app.getVersion(), bridgePort: bridge.port, bridgeError }));
ipcMain.handle('games:list', () => trainer.describe());
ipcMain.handle('cheat:set', (_e, gameId, cheatId, value) => trainer.setValue(gameId, cheatId, value));
ipcMain.handle('cheat:trigger', (_e, gameId, cheatId) => trainer.trigger(gameId, cheatId));
ipcMain.handle('cheats:reset', (_e, gameId) => trainer.reset(gameId));
ipcMain.handle('setup:copy', (_e, gameId, fileId) => {
  clipboard.writeText(trainer.setupFile(gameId, fileId).read());
  return true;
});
ipcMain.handle('setup:reveal', (_e, gameId, fileId) => {
  shell.showItemInFolder(trainer.setupFile(gameId, fileId).fullPath);
  return true;
});

// ---------- Fenster ----------

function createWindow() {
  win = new BrowserWindow({
    width: 1180,
    height: 760,
    minWidth: 900,
    minHeight: 600,
    title: 'Game Trainer',
    backgroundColor: '#0d0f16',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });
  win.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  // Links nie im App-Fenster öffnen.
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.webContents.on('will-navigate', (event) => event.preventDefault());
}

app.on('second-instance', () => {
  if (!win) return;
  if (win.isMinimized()) win.restore();
  win.focus();
});

app.whenReady().then(async () => {
  try {
    await bridge.start();
  } catch (err) {
    bridgeError = err.code === 'EADDRINUSE'
      ? `Port ${BRIDGE_PORT} ist schon belegt – läuft der Trainer bereits?`
      : err.message;
    console.error('[Brücke]', bridgeError);
  }
  watcher.start();
  createWindow();
});

app.on('window-all-closed', () => app.quit());

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
  watcher.stop();
  bridge.stop();
});
