'use strict';

const { contextBridge, ipcRenderer } = require('electron');

function subscribe(channel, callback) {
  const listener = (_event, payload) => callback(payload);
  ipcRenderer.on(channel, listener);
  return () => ipcRenderer.removeListener(channel, listener);
}

// Die einzige Schnittstelle, die die Oberfläche sieht (kein Node-Zugriff im Renderer).
contextBridge.exposeInMainWorld('trainer', {
  info: () => ipcRenderer.invoke('app:info'),
  listGames: () => ipcRenderer.invoke('games:list'),
  setValue: (gameId, cheatId, value) => ipcRenderer.invoke('cheat:set', gameId, cheatId, value),
  trigger: (gameId, cheatId) => ipcRenderer.invoke('cheat:trigger', gameId, cheatId),
  reset: (gameId) => ipcRenderer.invoke('cheats:reset', gameId),
  copySetupFile: (gameId, fileId) => ipcRenderer.invoke('setup:copy', gameId, fileId),
  revealSetupFile: (gameId, fileId) => ipcRenderer.invoke('setup:reveal', gameId, fileId),
  onStatus: (cb) => subscribe('game:status', cb),
  onValue: (cb) => subscribe('cheat:value', cb),
  onValues: (cb) => subscribe('cheat:values', cb),
  onTrigger: (cb) => subscribe('cheat:trigger', cb),
});
