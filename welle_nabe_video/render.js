// Rendert jede Szene als PNG und schreibt den Sprechertext nach out/steps.json
const { chromium } = require('playwright');
const fs = require('fs'); const path = require('path');
const steps = require('./scenes.js');
const out = process.argv[2] || path.join(__dirname, 'out');
fs.mkdirSync(path.join(out, 'frames'), { recursive: true });
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  for (let i = 0; i < steps.length; i++) {
    await p.setContent(steps[i].html); await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(out, 'frames', String(i).padStart(3, '0') + '.png') });
  }
  fs.writeFileSync(path.join(out, 'steps.json'), JSON.stringify(steps.map(s => ({ say: s.say, hold: s.hold })), null, 1));
  await b.close(); console.log(steps.length, 'Szenen');
})();
