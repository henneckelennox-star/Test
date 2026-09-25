'use strict';

// VORLAGE für ein neues Spiel.
//
// So fügst du ein Spiel hinzu:
//   1. Diesen Ordner kopieren, z. B. nach src/games/mein-spiel
//      (Ordner mit "_" am Anfang werden nicht geladen – deshalb erscheint die Vorlage nicht in der App).
//   2. id, name und processNames anpassen. processNames = Name der .exe im Task-Manager.
//   3. Cheats in categories eintragen.
//   4. Festlegen, WIE die Cheats ins Spiel kommen:
//        a) bridge: true  -> das Spiel (ein Mod/Skript darin) fragt die Werte über
//                           http://127.0.0.1:34873/v1/<id>/state ab (so macht es Roblox Studio).
//        b) Hooks         -> onChange/onTrigger bekommen jede Änderung und können z. B.
//                           eine Konfigdatei schreiben oder ein Mod-Tool aufrufen.
//   5. App neu starten.
//
// Bitte nur Einzelspieler-Spiele oder eigene Projekte – keine Online-Multiplayer-Spiele.

module.exports = {
  id: 'mein-spiel',
  name: 'Mein Spiel',
  subtitle: 'Einzelspieler',
  initials: 'MS',
  accent: '#f39c12',
  processNames: ['MeinSpiel.exe'],
  bridge: false,

  hints: {
    locked: 'Starte „Mein Spiel“, dann werden die Cheats freigeschaltet.',
  },

  // Optional: Anleitung und Dateien, die in der App angezeigt/kopiert werden können.
  // setup: { title: '...', steps: ['...'], files: [{ id: 'mod', label: 'Mod-Datei', target: '...', path: 'mod/datei.txt' }] },

  categories: [
    {
      name: 'Spieler',
      cheats: [
        // Schalter: an/aus, optional mit globalem Tastenkürzel (Electron-Accelerator-Schreibweise)
        { id: 'unendlichGeld', name: 'Unendlich Geld', description: 'Geld bleibt voll.', type: 'toggle', hotkey: 'Alt+Shift+1' },
        // Schieberegler
        { id: 'tempo', name: 'Spieltempo', type: 'slider', min: 0.5, max: 3, step: 0.1, default: 1, unit: '×' },
        // Knopf: löst einmalig etwas aus
        { id: 'heilen', name: 'Heilen', type: 'button', hotkey: 'Alt+Shift+2' },
      ],
    },
  ],

  // Hooks (alle optional). ctx = { game, values, bridge, log }
  onAttach(ctx) {
    ctx.log('Spiel gestartet');
  },
  onDetach(ctx) {
    ctx.log('Spiel beendet');
  },
  onChange(ctx, cheat, value) {
    ctx.log(`${cheat.name} = ${value}`);
  },
  onTrigger(ctx, cheat) {
    ctx.log(`${cheat.name} ausgelöst`);
  },
};
