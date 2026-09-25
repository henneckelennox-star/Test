'use strict';

// Oberfläche: Bibliothek links, Trainer des gewählten Spiels rechts.
// Kommuniziert nur über window.trainer (siehe preload.js).

const api = window.trainer;
const state = { games: [], selectedId: null, info: null };

const ICONS = {
  locked: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  waiting: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  connected: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>',
};

// ---------- Hilfsfunktionen ----------

function h(tag, props = {}, ...children) {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(props)) {
    if (value === undefined || value === null || value === false) continue;
    if (key === 'class') el.className = value;
    else if (key === 'style') el.style.cssText = value;
    else if (key.startsWith('on')) el.addEventListener(key.slice(2), value);
    else if (key in el && key !== 'list') el[key] = value;
    else el.setAttribute(key, value === true ? '' : value);
  }
  for (const child of children.flat()) {
    if (child === null || child === undefined || child === false) continue;
    el.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
  return el;
}

function icon(name) {
  const span = document.createElement('span');
  span.innerHTML = ICONS[name]; // feste, eigene SVGs – keine fremden Daten
  return span.firstChild;
}

function toast(message, isError = false) {
  const el = h('div', { class: `toast${isError ? ' error' : ''}` }, message);
  document.getElementById('toasts').append(el);
  setTimeout(() => el.remove(), 3500);
}

function errorText(err) {
  return String(err?.message || err).replace(/^Error invoking remote method '[^']+': (Error: )?/, '');
}

async function call(promise) {
  try {
    return await promise;
  } catch (err) {
    toast(errorText(err), true);
    return undefined;
  }
}

function currentGame() {
  return state.games.find((g) => g.id === state.selectedId);
}

function accentStyle(game) {
  return `--game-accent: ${game.accent}`;
}

function statusOf(game) {
  const s = game.status;
  if (!s.running) return { kind: 'locked', dot: '', label: 'Nicht gestartet' };
  if (game.bridge && !s.connected) return { kind: 'waiting', dot: 'running', label: 'Erkannt · wartet' };
  if (game.bridge) return { kind: 'connected', dot: 'connected', label: s.info?.place ? `Verbunden · ${s.info.place}` : 'Verbunden' };
  return { kind: 'connected', dot: 'connected', label: 'Läuft' };
}

function formatValue(cheat, value) {
  const text = Number(value).toLocaleString('de-DE', { maximumFractionDigits: 2 });
  return cheat.unit ? (cheat.unit === '%' ? `${text} %` : `${text}${cheat.unit}`) : text;
}

// ---------- Sidebar ----------

function renderSidebar() {
  const list = document.getElementById('game-list');
  list.replaceChildren(...state.games.map((game) => {
    const status = statusOf(game);
    return h('button', {
      class: `game-item${game.id === state.selectedId ? ' active' : ''}`,
      style: accentStyle(game),
      onclick: () => select(game.id),
    },
    h('div', { class: 'game-icon' }, game.initials),
    h('div', { class: 'game-meta' },
      h('div', { class: 'game-name' }, game.name),
      h('div', { class: 'game-state' }, h('span', { class: `dot ${status.dot}` }), status.label)));
  }));

  const foot = document.getElementById('bridge-info');
  if (state.info?.bridgeError) {
    foot.className = 'bridge-info error';
    foot.textContent = state.info.bridgeError;
  } else if (state.info) {
    foot.className = 'bridge-info';
    foot.textContent = `v${state.info.version} · Brücke 127.0.0.1:${state.info.bridgePort}`;
  }
}

// ---------- Hauptbereich ----------

function renderNotice(game, status) {
  const hints = game.hints || {};
  let text;
  if (status.kind === 'locked') text = hints.locked || `Starte ${game.name}, dann werden die Cheats freigeschaltet.`;
  else if (status.kind === 'waiting') text = hints.waiting || 'Spiel erkannt – warte auf Verbindung …';
  else if (game.bridge) {
    const place = game.status.info?.place;
    text = [h('strong', {}, 'Cheats aktiv. '), place ? `${hints.connected || 'Verbunden mit'} „${place}“.` : 'Verbunden.'];
  } else text = [h('strong', {}, 'Cheats aktiv. '), `${game.name} läuft.`];

  return h('div', { class: `notice ${status.kind}` }, icon(status.kind), h('div', {}, text));
}

function renderSetup(game) {
  if (!game.setup) return null;
  return h('details', { class: 'setup', open: !game.status.connected },
    h('summary', {}, game.setup.title || 'Einrichtung'),
    h('div', { class: 'setup-body' },
      h('ol', {}, game.setup.steps.map((step) => h('li', {}, step))),
      h('div', { class: 'setup-files' }, game.setup.files.map((file) =>
        h('div', { class: 'setup-file' },
          h('div', { class: 'file-meta' },
            h('div', {}, file.label),
            h('div', { class: 'file-target' }, file.target)),
          h('button', { class: 'btn primary', onclick: async () => {
            if (await call(api.copySetupFile(game.id, file.id))) toast(`${file.label} kopiert – jetzt in Studio einfügen (Strg+V).`);
          } }, 'Kopieren'),
          h('button', { class: 'btn ghost', onclick: () => call(api.revealSetupFile(game.id, file.id)) }, 'Im Ordner zeigen'))))));
}

function renderHotkey(cheat) {
  if (!cheat.hotkey) return h('div', { class: 'hotkey' });
  return h('div', { class: 'hotkey', title: 'Globales Tastenkürzel' }, cheat.hotkey.split('+').map((key) => h('kbd', {}, key)));
}

function renderControl(game, cheat, locked) {
  const value = game.values[cheat.id];

  if (cheat.type === 'toggle') {
    return h('button', {
      class: 'switch',
      role: 'switch',
      'aria-checked': String(Boolean(value)),
      'aria-label': cheat.name,
      'data-cheat': cheat.id,
      disabled: locked,
      onclick: () => call(api.setValue(game.id, cheat.id, !game.values[cheat.id])),
    });
  }

  if (cheat.type === 'slider') {
    const output = h('output', {}, formatValue(cheat, value));
    const input = h('input', {
      type: 'range',
      min: cheat.min,
      max: cheat.max,
      step: cheat.step || 1,
      value,
      'aria-label': cheat.name,
      'data-cheat': cheat.id,
      disabled: locked,
      oninput: () => {
        output.textContent = formatValue(cheat, input.value);
        call(api.setValue(game.id, cheat.id, Number(input.value)));
      },
      ondblclick: () => call(api.setValue(game.id, cheat.id, cheat.default ?? cheat.min)),
    });
    return h('div', { class: 'slider', title: 'Doppelklick = Standard' }, input, output);
  }

  return h('button', {
    class: 'btn',
    'data-cheat': cheat.id,
    disabled: locked,
    onclick: () => call(api.trigger(game.id, cheat.id)),
  }, 'Ausführen');
}

function renderMain() {
  const main = document.getElementById('main');
  const game = currentGame();
  if (!game) {
    main.replaceChildren(h('div', { class: 'empty' }, 'Keine Spiele gefunden. Lege ein Modul in src/games an.'));
    return;
  }

  const status = statusOf(game);
  const locked = !game.status.running;

  main.replaceChildren(
    h('header', { class: 'hero', style: accentStyle(game) },
      h('div', { class: 'game-icon' }, game.initials),
      h('div', { class: 'hero-text' },
        h('h1', {}, game.name),
        h('p', {}, game.subtitle)),
      h('div', { class: 'status-pill' }, h('span', { class: `dot ${status.dot}` }), status.label)),

    h('div', { class: `content${locked ? ' locked' : ''}`, style: accentStyle(game) },
      renderNotice(game, status),
      renderSetup(game),
      h('div', { class: 'toolbar' },
        h('h2', {}, `Cheats (${game.cheatCount})`),
        h('button', { class: 'btn ghost', disabled: locked, onclick: () => call(api.reset(game.id)) }, 'Alle zurücksetzen')),
      game.categories.map((category) =>
        h('section', { class: 'category' },
          h('h3', {}, category.name),
          h('div', { class: 'cheat-list' }, category.cheats.map((cheat) =>
            h('div', { class: 'cheat', 'data-row': cheat.id },
              h('div', {},
                h('div', { class: 'cheat-name' }, cheat.name),
                cheat.description ? h('div', { class: 'cheat-desc' }, cheat.description) : null),
              renderHotkey(cheat),
              h('div', { class: 'control' }, renderControl(game, cheat, locked)))))))),
  );
}

// Aktualisiert nur das eine Bedienelement (damit ein gezogener Regler nicht springt).
function updateControl(gameId, cheatId) {
  if (gameId !== state.selectedId) return;
  const game = currentGame();
  const cheat = game.categories.flatMap((c) => c.cheats).find((c) => c.id === cheatId);
  const el = document.querySelector(`[data-cheat="${CSS.escape(cheatId)}"]`);
  if (!cheat || !el) return;

  const value = game.values[cheatId];
  if (cheat.type === 'toggle') el.setAttribute('aria-checked', String(Boolean(value)));
  if (cheat.type === 'slider' && document.activeElement !== el) {
    el.value = value;
    el.nextElementSibling.textContent = formatValue(cheat, value);
  }
}

function flashRow(gameId, cheatId) {
  if (gameId !== state.selectedId) return;
  const row = document.querySelector(`[data-row="${CSS.escape(cheatId)}"]`);
  if (!row) return;
  row.classList.remove('fired');
  void row.offsetWidth; // Animation neu starten
  row.classList.add('fired');
}

function select(gameId) {
  state.selectedId = gameId;
  try { localStorage.setItem('selectedGame', gameId); } catch { /* egal */ }
  renderSidebar();
  renderMain();
}

// ---------- Events aus dem Hauptprozess ----------

api.onStatus((status) => {
  const game = state.games.find((g) => g.id === status.gameId);
  if (!game) return;
  const wasRunning = game.status.running;
  game.status = status;
  renderSidebar();
  if (status.gameId === state.selectedId) renderMain();
  if (!wasRunning && status.running) toast(`${game.name} erkannt – Cheats freigeschaltet.`);
});

api.onValue(({ gameId, cheatId, value }) => {
  const game = state.games.find((g) => g.id === gameId);
  if (!game) return;
  game.values[cheatId] = value;
  updateControl(gameId, cheatId);
});

api.onValues(({ gameId, values }) => {
  const game = state.games.find((g) => g.id === gameId);
  if (!game) return;
  game.values = values;
  if (gameId === state.selectedId) renderMain();
});

api.onTrigger(({ gameId, cheatId }) => flashRow(gameId, cheatId));

// ---------- Start ----------

(async function init() {
  const [info, games] = await Promise.all([api.info(), api.listGames()]);
  state.info = info;
  state.games = games;

  let saved = null;
  try { saved = localStorage.getItem('selectedGame'); } catch { /* egal */ }
  state.selectedId = games.some((g) => g.id === saved) ? saved : games[0]?.id ?? null;

  renderSidebar();
  renderMain();
})();
