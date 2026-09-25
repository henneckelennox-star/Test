'use strict';

// Gemeinsame Helfer rund um Cheat-Definitionen.
// Ein Cheat hat immer: id, name, type ('toggle' | 'slider' | 'button').

const CHEAT_TYPES = new Set(['toggle', 'slider', 'button']);

function allCheats(game) {
  return game.categories.flatMap((category) => category.cheats);
}

function findCheat(game, cheatId) {
  const cheat = allCheats(game).find((c) => c.id === cheatId);
  if (!cheat) throw new Error(`Unbekannter Cheat "${cheatId}" in ${game.id}`);
  return cheat;
}

function defaultValue(cheat) {
  if (cheat.type === 'toggle') return Boolean(cheat.default);
  if (cheat.type === 'slider') return cheat.default ?? cheat.min;
  return null;
}

function defaultValues(game) {
  const values = {};
  for (const cheat of allCheats(game)) {
    if (cheat.type !== 'button') values[cheat.id] = defaultValue(cheat);
  }
  return values;
}

// Bringt einen Wert aus der Oberfläche in eine gültige Form (Typ, Grenzen, Schrittweite).
function normalizeValue(cheat, raw) {
  if (cheat.type === 'toggle') return Boolean(raw);
  if (cheat.type === 'slider') {
    let value = Number(raw);
    if (!Number.isFinite(value)) return defaultValue(cheat);
    value = Math.min(cheat.max, Math.max(cheat.min, value));
    const step = cheat.step || 1;
    value = cheat.min + Math.round((value - cheat.min) / step) * step;
    return Number(value.toFixed(6));
  }
  throw new Error(`Cheat "${cheat.id}" hat keinen Wert (Typ ${cheat.type})`);
}

function validateGame(game) {
  const problems = [];
  if (!game || typeof game !== 'object') return ['Modul exportiert kein Objekt'];
  if (typeof game.id !== 'string' || !/^[a-z0-9-]+$/.test(game.id)) problems.push('id fehlt oder enthält ungültige Zeichen (erlaubt: a-z, 0-9, -)');
  if (typeof game.name !== 'string' || !game.name) problems.push('name fehlt');
  if (!Array.isArray(game.processNames) || game.processNames.length === 0) problems.push('processNames muss mindestens einen Prozessnamen enthalten');
  if (!Array.isArray(game.categories)) {
    problems.push('categories muss ein Array sein');
    return problems;
  }

  const seen = new Set();
  for (const category of game.categories) {
    if (!Array.isArray(category.cheats)) {
      problems.push(`Kategorie "${category.name}" hat kein cheats-Array`);
      continue;
    }
    for (const cheat of category.cheats) {
      if (!cheat.id) problems.push('Cheat ohne id');
      if (seen.has(cheat.id)) problems.push(`Cheat-id "${cheat.id}" doppelt`);
      seen.add(cheat.id);
      if (!CHEAT_TYPES.has(cheat.type)) problems.push(`Cheat "${cheat.id}": unbekannter Typ "${cheat.type}"`);
      if (cheat.type === 'slider' && !(cheat.min < cheat.max)) problems.push(`Cheat "${cheat.id}": min muss kleiner als max sein`);
    }
  }
  return problems;
}

module.exports = { allCheats, findCheat, defaultValue, defaultValues, normalizeValue, validateGame };
