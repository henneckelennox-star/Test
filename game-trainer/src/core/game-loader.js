'use strict';

const fs = require('fs');
const path = require('path');
const { validateGame } = require('./cheats');

// Lädt jedes Unterverzeichnis von src/games als Spielmodul.
// Ordner, die mit "_" beginnen (z. B. _vorlage), werden übersprungen.
function loadGames(gamesDir, log = console) {
  const games = [];
  for (const entry of fs.readdirSync(gamesDir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('_')) continue;
    const dir = path.join(gamesDir, entry.name);

    let game;
    try {
      game = require(dir);
    } catch (err) {
      log.error(`[Spiele] ${entry.name} konnte nicht geladen werden:`, err.message);
      continue;
    }

    const problems = validateGame(game);
    if (problems.length) {
      log.error(`[Spiele] ${entry.name} übersprungen:\n  - ${problems.join('\n  - ')}`);
      continue;
    }
    if (games.some((g) => g.id === game.id)) {
      log.error(`[Spiele] ${entry.name} übersprungen: id "${game.id}" gibt es schon`);
      continue;
    }
    games.push({ ...game, dir });
  }
  return games.sort((a, b) => a.name.localeCompare(b.name, 'de'));
}

module.exports = { loadGames };
