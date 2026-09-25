'use strict';

// Tut so, als wäre das DevTrainer-Skript in Roblox Studio verbunden:
// fragt die Brücke ab und zeigt jede Änderung an.
//
//   npm run fake-studio              (App muss laufen)
//   npm run fake-studio -- MeinSpiel (eigener Ortsname)

const PORT = process.env.TRAINER_PORT || 34873;
const place = process.argv[2] || 'Testort';
const url = `http://127.0.0.1:${PORT}/v1/roblox-studio/state?place=${encodeURIComponent(place)}`;

let lastVersion = -1;
let lastActions = null;
let online = null;

async function poll() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (online !== true) console.log(`Verbunden als „${place}“.`);
    online = true;

    if (data.version !== lastVersion) {
      lastVersion = data.version;
      const on = Object.entries(data.values).map(([k, v]) => `${k}=${v}`).join('  ');
      console.log(`[v${data.version}] ${on}`);
      for (const [id, count] of Object.entries(data.actions)) {
        if (lastActions && count !== (lastActions[id] || 0)) console.log(`  -> Aktion ausgelöst: ${id}`);
      }
      lastActions = { ...data.actions };
    }
  } catch {
    if (online !== false) console.log('Keine Verbindung – läuft die App?');
    online = false;
  }
}

setInterval(poll, 300);
poll();
