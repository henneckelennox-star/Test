'use strict';

// Roblox Studio – Cheats zum Testen DEINER EIGENEN Spiele.
//
// Die App setzt nur Werte auf der lokalen Brücke (bridge: true).
// Die eigentlichen Cheats laufen in zwei Luau-Skripten, die du einmal in dein
// Spiel einfügst (Ordner ./roblox). Die Skripte beenden sich sofort, wenn sie
// nicht in Studio laufen – im veröffentlichten Spiel passiert also nichts.
//
// Online-Roblox (RobloxPlayerBeta.exe) wird absichtlich NICHT unterstützt:
// Cheats in Multiplayer-Spielen verstoßen gegen die Roblox-Regeln und
// verderben anderen den Spaß (WeMod macht das aus demselben Grund nicht).

module.exports = {
  id: 'roblox-studio',
  name: 'Roblox Studio',
  subtitle: 'Cheats zum Testen deiner eigenen Spiele',
  initials: 'RS',
  accent: '#1f8fff',
  processNames: ['RobloxStudioBeta.exe', 'RobloxStudio'],
  bridge: true,

  hints: {
    locked: 'Starte Roblox Studio, dann werden die Cheats freigeschaltet.',
    waiting: 'Studio erkannt – starte den Spieltest (F5), damit die Cheats wirken.',
    connected: 'Verbunden mit',
  },

  setup: {
    title: 'Einmalige Einrichtung in deinem Spiel',
    steps: [
      'Öffne dein Spiel in Roblox Studio.',
      'Home → Game Settings → Security → „Allow HTTP Requests“ einschalten und speichern.',
      'In ServerScriptService ein neues Script „DevTrainer“ anlegen und das Server-Skript hineinkopieren.',
      'In StarterPlayer → StarterPlayerScripts ein LocalScript „DevTrainerClient“ anlegen und das Client-Skript hineinkopieren.',
      'Spieltest starten (F5). Oben zeigt die App dann „Verbunden“.',
    ],
    files: [
      { id: 'server', label: 'Server-Skript', target: 'ServerScriptService → Script', path: 'roblox/DevTrainer.server.lua' },
      { id: 'client', label: 'Client-Skript', target: 'StarterPlayerScripts → LocalScript', path: 'roblox/DevTrainerClient.client.lua' },
    ],
  },

  // Die ids müssen zu den Namen in den Luau-Skripten passen.
  categories: [
    {
      name: 'Spieler',
      cheats: [
        { id: 'godMode', name: 'Gottmodus', description: 'Kein Schaden, kein Tod.', type: 'toggle', hotkey: 'Alt+Shift+1' },
        { id: 'speed', name: 'Laufgeschwindigkeit', description: 'Vielfaches der normalen WalkSpeed.', type: 'slider', min: 1, max: 10, step: 0.5, default: 1, unit: '×' },
        { id: 'jump', name: 'Sprungkraft', description: 'Vielfaches der normalen Sprungkraft.', type: 'slider', min: 1, max: 5, step: 0.25, default: 1, unit: '×' },
        { id: 'infiniteJump', name: 'Unendlich springen', description: 'Auch in der Luft erneut springen.', type: 'toggle', hotkey: 'Alt+Shift+2' },
      ],
    },
    {
      name: 'Bewegung',
      cheats: [
        { id: 'fly', name: 'Fliegen', description: 'WASD + Leertaste/E hoch, Strg/Q runter.', type: 'toggle', hotkey: 'Alt+Shift+3' },
        { id: 'flySpeed', name: 'Fluggeschwindigkeit', description: 'Studs pro Sekunde beim Fliegen.', type: 'slider', min: 10, max: 300, step: 10, default: 60 },
        { id: 'noclip', name: 'Durch Wände gehen', description: 'Keine Kollision für deinen Charakter.', type: 'toggle', hotkey: 'Alt+Shift+4' },
      ],
    },
    {
      name: 'Welt',
      cheats: [
        { id: 'gravity', name: 'Schwerkraft', description: 'Prozent der normalen Schwerkraft.', type: 'slider', min: 0, max: 200, step: 10, default: 100, unit: '%' },
        { id: 'fullbright', name: 'Immer hell', description: 'Tag, kein Nebel, keine Schatten.', type: 'toggle', hotkey: 'Alt+Shift+5' },
      ],
    },
    {
      name: 'Aktionen',
      cheats: [
        { id: 'heal', name: 'Heilen', description: 'Leben sofort auffüllen.', type: 'button', hotkey: 'Alt+Shift+6' },
        { id: 'toSpawn', name: 'Zum Spawn', description: 'Zurück zum Spawnpunkt teleportieren.', type: 'button', hotkey: 'Alt+Shift+7' },
        { id: 'toMouse', name: 'Zur Mausposition', description: 'Dorthin teleportieren, wo die Maus im Spiel zeigt.', type: 'button', hotkey: 'Alt+Shift+8' },
        { id: 'respawn', name: 'Neu spawnen', description: 'Charakter neu laden.', type: 'button', hotkey: 'Alt+Shift+9' },
      ],
    },
  ],
};
