// Lernvideo „Welle-Nabe-Verbindungen im Überblick“ – Szenen + Sprechertext
// Jede Szene = ein Standbild (1920x1080) + ein gesprochener Text.

const CH = ['Start', 'Prinzipien', 'Passfeder', 'Keilwelle', 'Kerbzahn', 'Pressverband', 'Spannsatz', 'Polygon', 'Vergleich', 'Quiz', 'Merksätze'];

const C = {
  shaft: '#5b7db1', hub: '#a9b4c6', line: '#0b1220', key: '#f59e0b',
  form: '#38bdf8', kraft: '#f472b6', good: '#4ade80', mid: '#fbbf24', bad: '#f87171',
};
const ACC = { Passfeder: '#f59e0b', Keilwelle: '#38bdf8', Kerbzahnprofil: '#a78bfa', Pressverband: '#f472b6', Spannsatz: '#34d399', Polygon: '#fb923c' };

// ---------- Grafiken (Querschnitte) ----------
const pts = a => a.map(p => p.map(v => v.toFixed(1)).join(',')).join(' ');
function torqueArrow(r = 190, col = '#fde68a') {
  return `<path d="M ${200 + r * Math.cos(-2.2)} ${200 + r * Math.sin(-2.2)} A ${r} ${r} 0 0 1 ${200 + r * Math.cos(-0.9)} ${200 + r * Math.sin(-0.9)}" fill="none" stroke="${col}" stroke-width="7" marker-end="url(#ah)"/>
  <text x="${200 + (r + 10) * Math.cos(-1.55)}" y="${200 + (r + 10) * Math.sin(-1.55) - 6}" fill="${col}" font-size="30" font-weight="700" text-anchor="middle">M</text>`;
}
const defs = `<defs><marker id="ah" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#fde68a"/></marker>
<marker id="ar" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#f87171"/></marker>
<marker id="ag" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#4ade80"/></marker></defs>`;
const svg = (inner, vb = '-40 -40 480 480') => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" font-family="Inter">${defs}${inner}</svg>`;
const hub = `<circle cx="200" cy="200" r="170" fill="${C.hub}" stroke="${C.line}" stroke-width="3"/>`;
const lbl = (x, y, t, col = '#e8eef8', anchor = 'middle', size = 24) => `<text x="${x}" y="${y}" fill="${col}" font-size="${size}" font-weight="600" text-anchor="${anchor}">${t}</text>`;
const tag = (x, y, t) => `<rect x="${x - 50}" y="${y - 22}" width="100" height="32" rx="8" fill="#0f1724cc"/>${lbl(x, y, t, '#fff', 'middle', 20)}`;

const SVG = {
  Passfeder: svg(`${hub}<circle cx="200" cy="200" r="100" fill="${C.shaft}" stroke="${C.line}" stroke-width="3"/>
    <rect x="178" y="80" width="44" height="44" fill="${C.key}" stroke="${C.line}" stroke-width="3"/>
    ${torqueArrow()}${tag(200, 300, 'Welle')}${tag(200, 350, 'Nabe')}
    <line x1="222" y1="95" x2="300" y2="20" stroke="${C.key}" stroke-width="3"/>${lbl(305, 15, 'Passfeder', C.key, 'start')}`),
  Keilwelle: (() => {
    let t = '';
    for (let i = 0; i < 6; i++) t += `<rect x="186" y="96" width="28" height="40" fill="${C.shaft}" stroke="${C.line}" stroke-width="3" transform="rotate(${i * 60} 200 200)"/>`;
    return svg(`${hub}${t}<circle cx="200" cy="200" r="78" fill="${C.shaft}"/>
      <circle cx="200" cy="200" r="78" fill="none" stroke="${C.line}" stroke-width="3" stroke-dasharray="0"/>
      ${torqueArrow()}${tag(200, 215, 'Welle')}${tag(200, 345, 'Nabe')}
      <line x1="214" y1="100" x2="290" y2="20" stroke="#38bdf8" stroke-width="3"/>${lbl(295, 15, 'Längszahn', '#38bdf8', 'start')}`);
  })(),
  Kerbzahnprofil: (() => {
    const a = []; const n = 36;
    for (let i = 0; i < 2 * n; i++) { const r = i % 2 ? 86 : 102; const th = i * Math.PI / n; a.push([200 + r * Math.cos(th), 200 + r * Math.sin(th)]); }
    return svg(`${hub}<polygon points="${pts(a)}" fill="${C.shaft}" stroke="${C.line}" stroke-width="2.5" stroke-linejoin="round"/>
      ${torqueArrow()}${tag(200, 215, 'Welle')}${tag(200, 345, 'Nabe')}
      ${lbl(200, 425, 'viele kleine Zähne', '#a78bfa')}`);
  })(),
  Pressverband: (() => {
    let ar = '';
    for (let i = 0; i < 8; i++) {
      const th = i * Math.PI / 4 + Math.PI / 8, c = Math.cos(th), s = Math.sin(th);
      ar += `<line x1="${200 + 150 * c}" y1="${200 + 150 * s}" x2="${200 + 112 * c}" y2="${200 + 112 * s}" stroke="#f87171" stroke-width="6" marker-end="url(#ar)"/>`;
      ar += `<line x1="${200 + 60 * c}" y1="${200 + 60 * s}" x2="${200 + 88 * c}" y2="${200 + 88 * s}" stroke="#f87171" stroke-width="6" marker-end="url(#ar)"/>`;
    }
    return svg(`${hub}<circle cx="200" cy="200" r="100" fill="${C.shaft}" stroke="${C.line}" stroke-width="3"/>
      <circle cx="200" cy="200" r="100" fill="none" stroke="#f87171" stroke-width="5"/>${ar}
      ${tag(200, 210, 'Welle')}${tag(200, 345, 'Nabe')}${lbl(200, -10, 'Flächenpressung p', '#f87171', 'middle', 26)}`);
  })(),
  Spannsatz: svg(`
    <rect x="0" y="170" width="400" height="60" fill="${C.shaft}" stroke="${C.line}" stroke-width="3"/>
    <rect x="130" y="50" width="200" height="80" fill="${C.hub}" stroke="${C.line}" stroke-width="3"/>
    <rect x="130" y="270" width="200" height="80" fill="${C.hub}" stroke="${C.line}" stroke-width="3"/>
    <polygon points="140,130 300,130 300,140 140,160" fill="#34d399" stroke="${C.line}" stroke-width="2.5"/>
    <polygon points="140,160 300,140 300,170 140,170" fill="#10b981" stroke="${C.line}" stroke-width="2.5"/>
    <polygon points="140,270 300,270 300,260 140,240" fill="#34d399" stroke="${C.line}" stroke-width="2.5"/>
    <polygon points="140,240 300,260 300,230 140,230" fill="#10b981" stroke="${C.line}" stroke-width="2.5"/>
    <rect x="300" y="138" width="60" height="10" fill="#cbd5e1" stroke="${C.line}" stroke-width="2"/><rect x="360" y="128" width="16" height="30" fill="#cbd5e1" stroke="${C.line}" stroke-width="2"/>
    <rect x="300" y="252" width="60" height="10" fill="#cbd5e1" stroke="${C.line}" stroke-width="2"/><rect x="360" y="242" width="16" height="30" fill="#cbd5e1" stroke="${C.line}" stroke-width="2"/>
    <line x1="400" y1="40" x2="378" y2="118" stroke="#4ade80" stroke-width="5" marker-end="url(#ag)"/>${lbl(420, 25, 'Schrauben anziehen', '#4ade80', 'end', 22)}
    ${lbl(20, 205, 'Welle', '#fff', 'start', 22)}${lbl(230, 100, 'Nabe', C.line, 'middle', 22)}${lbl(230, 320, 'Nabe', C.line, 'middle', 22)}
    ${lbl(60, 130, 'Kegelringe', '#34d399', 'middle', 22)}<line x1="80" y1="138" x2="140" y2="150" stroke="#34d399" stroke-width="3"/>${lbl(200, 410, 'Längsschnitt', '#93a4c0', 'middle', 20)}`),
  Polygon: (() => {
    const a = [];
    for (let i = 0; i < 240; i++) { const th = i * 2 * Math.PI / 240; const r = 96 + 12 * Math.cos(3 * th); a.push([200 + r * Math.cos(th - Math.PI / 2), 200 + r * Math.sin(th - Math.PI / 2)]); }
    return svg(`${hub}<polygon points="${pts(a)}" fill="${C.shaft}" stroke="${C.line}" stroke-width="3"/>
      ${torqueArrow()}${tag(200, 210, 'Welle')}${tag(200, 345, 'Nabe')}${lbl(200, 425, 'unrund, aber ohne Ecken', '#fb923c', 'middle', 26)}`);
  })(),
};

const SVG_INTRO = svg(`
  <rect x="-30" y="180" width="460" height="40" rx="6" fill="${C.shaft}" stroke="${C.line}" stroke-width="3"/>
  <rect x="160" y="60" width="90" height="280" fill="${C.hub}" stroke="${C.line}" stroke-width="3"/>
  ${Array.from({ length: 7 }, (_, i) => `<rect x="160" y="${66 + i * 40}" width="90" height="18" fill="#7c8799"/>`).join('')}
  <rect x="160" y="180" width="90" height="40" fill="${C.shaft}" stroke="${C.line}" stroke-width="3"/>
  <rect x="190" y="166" width="30" height="14" fill="${C.key}" stroke="${C.line}" stroke-width="2"/>
  ${lbl(-20, 165, 'Welle', '#cfe0ff', 'start', 26)}${lbl(205, 40, 'Nabe (Zahnrad)', '#e2e8f0', 'middle', 26)}
  <path d="M 360 150 A 22 50 0 1 1 360 250" fill="none" stroke="#fde68a" stroke-width="6" marker-end="url(#ah)"/>${lbl(400, 130, 'M', '#fde68a', 'middle', 34)}
  ${lbl(205, 395, 'Verbindung = hier!', C.key, 'middle', 26)}`);

const SVG_FORM = svg(`
  <rect x="20" y="210" width="360" height="110" fill="${C.hub}" stroke="${C.line}" stroke-width="3"/>
  <rect x="160" y="170" width="80" height="45" fill="${C.hub}" stroke="none"/>
  <path d="M 20 60 H 380 V 160 H 250 V 212 H 150 V 160 H 20 Z" fill="${C.shaft}" stroke="${C.line}" stroke-width="3"/>
  <line x1="40" y1="110" x2="130" y2="110" stroke="#fde68a" stroke-width="7" marker-end="url(#ah)"/>${lbl(85, 95, 'F', '#fde68a', 'middle', 28)}
  ${lbl(200, 370, 'Form greift in Form', C.form, 'middle', 30)}`);
const SVG_KRAFT = svg(`
  <rect x="20" y="210" width="360" height="110" fill="${C.hub}" stroke="${C.line}" stroke-width="3"/>
  <rect x="20" y="90" width="360" height="118" fill="${C.shaft}" stroke="${C.line}" stroke-width="3"/>
  <line x1="200" y1="0" x2="200" y2="80" stroke="#f87171" stroke-width="7" marker-end="url(#ar)"/>${lbl(225, 40, 'Anpressen', '#f87171', 'start', 24)}
  <line x1="40" y1="150" x2="130" y2="150" stroke="#fde68a" stroke-width="7" marker-end="url(#ah)"/>${lbl(85, 135, 'F', '#fde68a', 'middle', 28)}
  <line x1="360" y1="209" x2="270" y2="209" stroke="#4ade80" stroke-width="7" marker-end="url(#ag)"/>${lbl(315, 262, 'Reibung', '#166534', 'middle', 26)}
  ${lbl(200, 370, 'Reibung hält fest', C.kraft, 'middle', 30)}`);

// ---------- Seitengerüst ----------
function page(ch, body) {
  const nav = CH.map((c, i) => `<div class="nav ${i === ch ? 'on' : i < ch ? 'done' : ''}">${c}</div>`).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{width:1920px;height:1080px;background:radial-gradient(1200px 700px at 75% 20%,#1b2a48 0%,#0f1724 60%);color:#e8eef8;font-family:Inter,sans-serif;overflow:hidden;position:relative}
  .top{position:absolute;top:0;left:0;right:0;height:84px;display:flex;align-items:center;gap:8px;padding:0 48px;background:#0b1220cc;border-bottom:1px solid #24324d}
  .brand{font-weight:800;font-size:22px;color:#93a4c0;margin-right:24px;white-space:nowrap}
  .nav{font-size:18px;padding:8px 14px;border-radius:999px;color:#5d6e8c;font-weight:600}
  .nav.done{color:#93a4c0}.nav.on{background:#f59e0b;color:#111;font-weight:800}
  .main{position:absolute;top:84px;left:0;right:0;bottom:0;padding:48px 72px}
  h1{font-size:76px;font-weight:800;letter-spacing:-1px;line-height:1.05}
  h2{font-size:58px;font-weight:800;letter-spacing:-.5px}
  .muted{color:#93a4c0}
  .chip{display:inline-block;padding:8px 20px;border-radius:999px;font-weight:800;font-size:26px}
  .form{background:#38bdf222;color:#38bdf8;border:2px solid #38bdf8}.kraft{background:#f472b622;color:#f472b6;border:2px solid #f472b6}
  .hide{opacity:0}.dim{opacity:.35}
  .card{background:#17223acc;border:1px solid #2a3a5a;border-radius:24px;padding:28px 34px}
  ul{list-style:none}
  li{font-size:33px;line-height:1.3;margin:10px 0;padding-left:46px;position:relative}
  li .s{position:absolute;left:0;top:0;font-weight:900}
  .pro .s{color:#4ade80}.con .s{color:#f87171}
  .merk{border-left:10px solid var(--a);background:#0b1220;border-radius:16px;padding:22px 30px;font-size:34px;line-height:1.35}
  .merk b{color:var(--a)}
  .big{font-size:40px;line-height:1.4}
  table{border-collapse:separate;border-spacing:0;width:100%;font-size:25px}
  th{background:#0b1220;color:#cbd5e1;padding:14px 12px;text-align:left;font-size:24px}
  td{padding:13px 12px;border-top:1px solid #24324d;font-weight:600}
  tr.hl td{background:#f59e0b22;border-top:2px solid #f59e0b;border-bottom:2px solid #f59e0b}
  tr.dimr td{opacity:.3}
  .g{color:#4ade80}.m{color:#fbbf24}.b{color:#f87171}.f{color:#38bdf8}.k{color:#f472b6}
  </style></head><body><div class="top"><div class="brand">Welle-Nabe-Verbindungen</div>${nav}</div><div class="main">${body}</div></body></html>`;
}

const steps = [];
const add = (ch, body, say, hold = 0.8) => steps.push({ html: page(ch, body), say, hold });

// ---------- 0: Start ----------
add(0, `<div style="display:flex;gap:60px;align-items:center;height:100%">
  <div style="flex:1.1"><div class="muted" style="font-size:30px;font-weight:700;margin-bottom:18px">BG Q3 Mechatronik · Lernvideo</div>
  <h1>Welle-Nabe-<br>Verbindungen<br><span style="color:#f59e0b">im Überblick</span></h1>
  <p class="big muted" style="margin-top:36px">6 Verbindungen · Vorteile & Nachteile · Vergleich · Quiz</p></div>
  <div style="flex:.9">${SVG_INTRO}</div></div>`,
  'Hallo! In diesem Lernvideo gehen wir dein Arbeitsblatt zu den Welle-Nabe-Verbindungen Schritt für Schritt durch. Am Ende kennst du alle sechs Verbindungen, ihre Vor- und Nachteile, und du kannst sie in der Vergleichstabelle sicher einordnen. Zum Schluss gibt es ein kleines Quiz.', 1.2);

add(0, `<div style="display:flex;gap:60px;align-items:center;height:100%">
  <div style="flex:1.1"><h2>Worum geht es?</h2>
  <div class="card big" style="margin-top:30px">Eine <b style="color:#5b9bff">Welle</b> dreht sich und überträgt ein <b style="color:#fde68a">Drehmoment M</b>.<br><br>
  Auf der Welle sitzt eine <b>Nabe</b> – zum Beispiel ein Zahnrad, eine Riemenscheibe oder eine Kupplung.<br><br>
  Die <b style="color:#f59e0b">Welle-Nabe-Verbindung</b> sorgt dafür, dass Welle und Nabe sich <u>gemeinsam</u> drehen.</div></div>
  <div style="flex:.9">${SVG_INTRO}</div></div>`,
  'Worum geht es überhaupt? Eine Welle dreht sich und überträgt ein Drehmoment. Auf der Welle sitzt eine Nabe, zum Beispiel ein Zahnrad, eine Riemenscheibe oder eine Kupplung. Die Welle-Nabe-Verbindung sorgt dafür, dass sich Welle und Nabe gemeinsam drehen, ohne dass die Nabe auf der Welle durchrutscht.');

// ---------- 1: Prinzipien ----------
const prinz = (showK, note) => `<h2>Zwei Wirkprinzipien</h2>
  <div style="display:flex;gap:40px;margin-top:30px">
   <div class="card" style="flex:1;border-color:#38bdf8"><span class="chip form">Formschluss</span>
     <div style="display:flex;gap:20px;align-items:center;margin-top:10px"><div style="width:440px;flex:none">${SVG_FORM}</div>
     <div class="big" style="font-size:32px">Die <b class="f">Form</b> der Bauteile greift ineinander – wie ein <b>Puzzle</b> oder Schlüssel und Schloss.</div></div>
     <div style="font-size:28px;margin-top:8px" class="muted">Passfeder · Keilwelle · Kerbzahnprofil · Polygon</div></div>
   <div class="card ${showK ? '' : 'hide'}" style="flex:1;border-color:#f472b6"><span class="chip kraft">Kraftschluss</span>
     <div style="display:flex;gap:20px;align-items:center;margin-top:10px"><div style="width:440px;flex:none">${SVG_KRAFT}</div>
     <div class="big" style="font-size:32px">Teile werden <b class="k">zusammengepresst</b>. Die <b>Reibung</b> überträgt das Moment.</div></div>
     <div style="font-size:28px;margin-top:8px" class="muted">Pressverband / Schrumpfen · Spannsatz</div></div>
  </div>${note ? `<div class="merk" style="--a:#f59e0b;margin-top:34px">${note}</div>` : ''}`;
add(1, prinz(false), 'Bevor wir die einzelnen Verbindungen anschauen, brauchst du zwei Begriffe: Formschluss und Kraftschluss. Beim Formschluss greift die Form der Bauteile ineinander, so wie bei einem Puzzle oder bei Schlüssel und Schloss. Das Drehmoment wird über Flächen übertragen, die gegeneinander drücken. Formschlüssig sind auf deinem Blatt die Passfeder, die Keilwelle, das Kerbzahnprofil und das Polygonprofil.');
add(1, prinz(true), 'Beim Kraftschluss, man sagt auch Reibschluss, werden die Teile fest zusammengepresst. Dadurch entsteht eine Flächenpressung, und die Reibung hält Welle und Nabe zusammen. Kraftschlüssig sind nur zwei Verbindungen: der Pressverband beziehungsweise das Aufschrumpfen, und der Spannsatz.');
add(1, prinz(true, '<b>Eselsbrücke:</b> Nur die zwei mit <b>Druck</b> sind kraftschlüssig: <b>Pressen</b> und <b>Spannen</b>. Alle anderen sind Formschluss.'),
  'Merk dir dazu die Eselsbrücke: Nur die zwei mit Druck sind kraftschlüssig, nämlich Pressen und Spannen. Alle anderen vier sind Formschluss.', 1.2);

// ---------- 2–7: Verbindungen ----------
function conn(ch, d) {
  const a = ACC[d.key];
  const view = (stage) => `<div style="display:flex;gap:56px;height:100%">
    <div style="width:640px;display:flex;flex-direction:column;justify-content:center"><div class="card" style="padding:24px">${SVG[d.key]}</div></div>
    <div style="flex:1;display:flex;flex-direction:column;gap:18px">
      <div style="display:flex;align-items:center;gap:24px"><h2 style="color:${a}">${d.title}</h2><span class="chip ${d.kraft ? 'kraft' : 'form'}">${d.kraft ? 'Kraftschluss' : 'Formschluss'}</span></div>
      <div style="font-size:31px;line-height:1.35" class="muted">${d.prinzip}</div>
      <div style="display:flex;gap:28px">
        <div class="card ${stage >= 1 ? '' : 'hide'}" style="flex:1;padding:20px 26px"><div style="font-size:26px;font-weight:800;color:#4ade80">Vorteile</div>
          <ul class="pro">${d.pro.map(t => `<li style="font-size:29px"><span class="s">+</span>${t}</li>`).join('')}</ul></div>
        <div class="card ${stage >= 2 ? '' : 'hide'}" style="flex:1;padding:20px 26px"><div style="font-size:26px;font-weight:800;color:#f87171">Nachteile</div>
          <ul class="con">${d.con.map(t => `<li style="font-size:29px"><span class="s">−</span>${t}</li>`).join('')}</ul></div>
      </div>
      <div class="merk ${stage >= 3 ? '' : 'hide'}" style="--a:${a};font-size:31px"><b>Merksatz:</b> ${d.merk}${d.esel ? `<div style="margin-top:10px;font-size:28px;color:#cbd5e1"><b>Merkhilfe:</b> ${d.esel}</div>` : ''}</div>
    </div></div>`;
  d.say.forEach((s, i) => add(ch, view(i), s, i === 3 ? 1.2 : 0.8));
}

conn(2, {
  key: 'Passfeder', title: 'Passfeder',
  prinzip: 'Eine Passfeder liegt in den <b style="color:#e8eef8">Nuten von Welle und Nabe</b>.',
  pro: ['Einfach, preiswert und genormt', 'Gut montierbar und lösbar', 'Axial verschiebbar bei geeigneter Ausführung'],
  con: ['Nut schwächt die Welle → Kerbwirkung', 'Ungleichmäßige Lastverteilung', 'Spiel/Verschleiß bei schlagartigen Lastwechseln'],
  merk: 'Einfach und preiswert, aber die Nut schwächt die Welle – <b>keine</b> schlagartigen, wechselnden Belastungen.',
  esel: 'Die Passfeder ist der <b>„Standard-Klassiker“</b>: billig, aber mit Schwachstelle Nut.',
  say: [
    'Die erste Verbindung ist die Passfeder. Sie ist formschlüssig. In die Welle und in die Nabe wird jeweils eine Nut gefräst. Die Passfeder ist ein kleines, rechteckiges Stahlstück, das in beiden Nuten gleichzeitig liegt. Dreht die Welle, drückt die Passfeder seitlich gegen die Nabe und nimmt sie mit.',
    'Die Vorteile: Die Passfeder ist einfach, preiswert und genormt, du kannst sie also fertig kaufen. Sie ist gut zu montieren und wieder zu lösen. Und bei passender Ausführung kann die Nabe sogar axial, also entlang der Welle, verschoben werden.',
    'Die Nachteile: Die Nut schwächt die Welle. An den Ecken der Nut konzentrieren sich die Spannungen, das nennt man Kerbwirkung. Außerdem wird die Last ungleichmäßig verteilt, denn das ganze Moment geht über eine einzige kleine Feder. Bei häufigen und schlagartigen Lastwechseln können deshalb Spiel und Verschleiß entstehen.',
    'Der Merksatz: Die Passfeder ist einfach und preiswert, aber die Nut schwächt die Welle. Sie ist nicht für schlagartige, wechselnde Belastungen geeignet.',
  ],
});

conn(3, {
  key: 'Keilwelle', title: 'Keilwelle',
  prinzip: 'Mehrere <b style="color:#e8eef8">Längszähne</b> der Welle greifen in passende Nuten der Nabe.',
  pro: ['Hohe Drehmomente', 'Last auf mehrere Zähne verteilt', 'Axial verschiebbare Ausführung möglich'],
  con: ['Aufwendige, teurere Fertigung', 'Kerbwirkung durch Profilierung', 'Verschleiß bei Verschiebebewegung'],
  merk: 'Hohe Drehmomente übertragbar, auch <b>wechselnde</b> Belastungen.',
  esel: 'Keilwelle = <b>viele Passfedern</b> direkt an die Welle angeformt.',
  say: [
    'Weiter geht es mit der Keilwelle, ebenfalls formschlüssig. Hier sind mehrere Längszähne direkt an die Welle angeformt, meistens sechs bis zehn. Diese Zähne greifen in passende Nuten in der Nabe. Du kannst sie dir vorstellen wie viele Passfedern, die fest zur Welle gehören.',
    'Vorteile: Weil das Moment auf mehrere Zähne verteilt wird, kann die Keilwelle hohe Drehmomente übertragen. Und auch hier ist eine axial verschiebbare Ausführung möglich. Das nutzt man zum Beispiel bei Schaltgetrieben.',
    'Nachteile: Die Fertigung ist aufwendiger und teurer als bei der Passfeder. Durch das Profil entsteht ebenfalls Kerbwirkung. Und wenn die Nabe oft verschoben wird, verschleißen die Zahnflanken.',
    'Der Merksatz: Mit der Keilwelle kann man hohe Drehmomente übertragen, auch bei wechselnden Belastungen.',
  ],
});

conn(4, {
  key: 'Kerbzahnprofil', title: 'Kerbzahnprofil',
  prinzip: '<b style="color:#e8eef8">Viele</b>, meist <b style="color:#e8eef8">evolventenförmige</b> Zähne greifen in die Innenverzahnung der Nabe.',
  pro: ['Hohe Drehmomente und schlagartige Belastungen', 'Gute Zentrierung', 'Axiale Verschiebung möglich'],
  con: ['Aufwendige, präzise Verzahnungsfertigung', 'Kerbwirkung an den Zahnfüßen', 'Spiel und Verschleiß bei ungünstiger Passung'],
  merk: 'Viele Zähne ermöglichen <b>schlagartige und wechselnde</b> hohe Drehmomente; die Fertigung ist aufwendig.',
  esel: 'Kerb<b>zahn</b> = viele kleine <b>Zähne</b> – wie ein Zahnrad innen und außen.',
  say: [
    'Das Kerbzahnprofil ist auch formschlüssig. Hier hat die Welle sehr viele kleine Zähne rundherum, meistens mit Evolventenform, also der gleichen Form wie bei Zahnrädern. Die Nabe hat eine passende Innenverzahnung.',
    'Vorteile: Weil es so viele Zähne sind, verteilt sich die Last sehr gut. Deshalb hält das Kerbzahnprofil hohe Drehmomente und sogar schlagartige Belastungen aus. Die vielen Zähne zentrieren die Nabe gut, und eine axiale Verschiebung ist möglich.',
    'Nachteile: Die Verzahnung muss aufwendig und präzise gefertigt werden. An den Zahnfüßen gibt es Kerbwirkung. Und wenn die Passung ungünstig gewählt ist, können Spiel und Verschleiß entstehen.',
    'Der Merksatz: Viele Zähne ermöglichen schlagartige und wechselnde hohe Drehmomente, aber die Fertigung ist aufwendig.',
  ],
});

conn(5, {
  key: 'Pressverband', title: 'Pressverband / Schrumpfen', kraft: true,
  prinzip: '<b style="color:#e8eef8">Übermaß</b> erzeugt Flächenpressung. Beim Schrumpfen wird die Nabe vor der Montage <b style="color:#e8eef8">erwärmt</b>.',
  pro: ['Hohe Drehmomente', 'Spielfrei, gut für hohe Drehzahlen', 'Keine Passfedernut; axial belastbar'],
  con: ['Hohe Maßgenauigkeit erforderlich', 'Montage/Demontage aufwendig', 'Hohe Bauteilspannungen'],
  merk: 'Spielfrei und hoch belastbar, aber <b>schwer zu lösen</b>.',
  esel: 'Warm drauf, kalt fest: Nabe <b>dehnt sich</b> beim Erwärmen, <b>schrumpft</b> beim Abkühlen auf die Welle.',
  say: [
    'Jetzt kommt die erste kraftschlüssige Verbindung: der Pressverband, auch Pressitz genannt. Die Welle ist dabei ein kleines bisschen dicker als die Bohrung der Nabe. Das nennt man Übermaß. Presst man beide zusammen, entsteht eine hohe Flächenpressung, und die Reibung überträgt das Moment. Beim Aufschrumpfen wird die Nabe vorher erwärmt. Sie dehnt sich aus, wird über die Welle geschoben, kühlt ab und schrumpft dann fest auf die Welle.',
    'Vorteile: Der Pressverband überträgt hohe Drehmomente. Er ist spielfrei und deshalb gut für hohe Drehzahlen. Es gibt keine Passfedernut, also auch keine Kerbwirkung durch eine Nut, und die Verbindung kann auch in axialer Richtung belastet werden.',
    'Nachteile: Die Teile müssen sehr maßgenau gefertigt werden, damit das Übermaß stimmt. Montage und Demontage sind aufwendig. Und durch die Pressung entstehen hohe Spannungen in den Bauteilen.',
    'Der Merksatz: Press- und Schrumpfsitz sind spielfrei und hoch belastbar, aber schwer zu lösen. Und die Merkhilfe: warm drauf, kalt fest.',
  ],
});

conn(6, {
  key: 'Spannsatz', title: 'Spannsatz', kraft: true,
  prinzip: 'Spannelemente (Kegelringe) erzeugen durch <b style="color:#e8eef8">Schraubenanzug</b> Flächenpressung.',
  pro: ['Spielfrei und ohne Wellennut', 'Einfach lösbar und neu positionierbar', 'Hohe Drehmomente möglich'],
  con: ['Zusatzkosten und Einbauraum', 'Korrektes Anzugsmoment nötig', 'Von Reibbedingungen abhängig'],
  merk: 'Spielfrei, <b>ohne Nut</b> in der Welle und <b>gut demontierbar</b>.',
  esel: 'Spannsatz = <b>Schrauben + Kegel</b>: festdrehen = Klemmen, lösen = frei.',
  say: [
    'Die zweite kraftschlüssige Verbindung ist der Spannsatz. Hier siehst du einen Längsschnitt. Zwischen Welle und Nabe sitzen Spannelemente, meistens kegelförmige Ringe. Zieht man die Schrauben an, schieben sich die Kegelringe ineinander. Dabei drückt der innere Ring auf die Welle und der äußere Ring auf die Nabe. So entsteht Flächenpressung, und die Reibung überträgt das Moment.',
    'Vorteile: Der Spannsatz ist spielfrei und braucht keine Nut in der Welle. Er ist einfach lösbar, und die Nabe kann neu positioniert werden, zum Beispiel in einem anderen Winkel. Auch hohe Drehmomente sind möglich.',
    'Nachteile: Der Spannsatz ist ein zusätzliches Kaufteil, das kostet Geld und braucht Einbauraum. Die Schrauben müssen mit dem korrekten Anzugsmoment angezogen werden. Und weil er über Reibung arbeitet, hängt er von den Reibbedingungen ab. Ist zum Beispiel Öl auf den Flächen, sinkt das übertragbare Moment.',
    'Der Merksatz: Der Spannsatz ist spielfrei, kommt ohne Nut in der Welle aus und ist gut demontierbar.',
  ],
});

conn(7, {
  key: 'Polygon', title: 'Polygonprofil',
  prinzip: 'Passende <b style="color:#e8eef8">unrunde</b> Wellen- und Nabenprofile.',
  pro: ['Hohe Drehmomente', 'Günstige Spannungsverteilung', 'Gute Zentrierung; ggf. axial verschiebbar'],
  con: ['Spezielle, aufwendige Herstellung', 'Höhere Fertigungskosten', 'Für hochwertige Anwendungen, z. B. Fahrzeuggetriebe'],
  merk: 'Schlagartige und wechselnde hohe Drehmomente übertragbar, sehr <b>günstige Kraftverteilung</b> – teure Fertigung.',
  esel: '<b>Keine Ecken = keine Kerben</b>: das runde „Dreieck“ verteilt die Kraft gleichmäßig.',
  say: [
    'Die letzte Verbindung ist das Polygonprofil, wieder formschlüssig. Die Welle ist hier nicht rund, sondern hat ein unrundes Profil, oft wie ein abgerundetes Dreieck. Die Nabe hat genau das gleiche Profil als Bohrung. Weil die Form nicht rund ist, kann sich die Nabe nicht auf der Welle drehen.',
    'Vorteile: Das Polygonprofil überträgt hohe Drehmomente. Weil es keine scharfen Ecken und Nuten hat, ist die Spannungsverteilung sehr günstig, es gibt also kaum Kerbwirkung. Die Nabe wird gut zentriert und kann gegebenenfalls axial verschoben werden.',
    'Nachteile: Die Herstellung ist speziell und aufwendig, deshalb sind die Fertigungskosten höher. Man verwendet das Polygonprofil daher eher für hochwertige Anwendungen, zum Beispiel in Fahrzeuggetrieben.',
    'Der Merksatz: Das Polygonprofil überträgt schlagartige und wechselnde hohe Drehmomente mit sehr günstiger Kraftverteilung, aber die Fertigung ist teuer. Merkhilfe: keine Ecken, keine Kerben.',
  ],
});

// ---------- 8: Vergleichstabelle ----------
const COLS = ['Passfeder', 'Keilwelle', 'Kerbzahn', 'Press-/Schrumpf', 'Spannsatz', 'Polygon'];
const ROWS = [
  ['Wirkprinzip', [['Formschluss', 'f'], ['Formschluss', 'f'], ['Formschluss', 'f'], ['Kraftschluss', 'k'], ['Kraftschluss', 'k'], ['Formschluss', 'f']]],
  ['Drehmoment', [['Mittel', 'm'], ['Hoch', 'g'], ['Hoch', 'g'], ['Hoch bis sehr hoch', 'g'], ['Hoch', 'g'], ['Hoch', 'g']]],
  ['Fertigungsaufwand', [['Gering', 'g'], ['Hoch', 'b'], ['Hoch', 'b'], ['Mittel bis hoch', 'm'], ['Gering bis mittel*', 'g'], ['Hoch', 'b']]],
  ['Montage / Demontage', [['Einfach', 'g'], ['Einfach bis mittel', 'm'], ['Einfach bis mittel', 'm'], ['Aufwendig', 'b'], ['Einfach', 'g'], ['Einfach bis mittel', 'm']]],
  ['Spielfreiheit', [['Nicht grundsätzlich', 'b'], ['Je nach Passung', 'm'], ['Je nach Passung', 'm'], ['Ja', 'g'], ['Ja', 'g'], ['Je nach Passung', 'm']]],
  ['Axiale Verschiebbarkeit', [['Möglich', 'g'], ['Möglich', 'g'], ['Möglich', 'g'], ['Nein', 'b'], ['Im gespannten Zustand: nein', 'm'], ['Möglich', 'g']]],
  ['Häufige Demontage', [['Gut', 'g'], ['Gut', 'g'], ['Gut', 'g'], ['Schlecht', 'b'], ['Sehr gut', 'g'], ['Gut', 'g']]],
];
function table(hl, note) {
  return `<div style="display:flex;justify-content:space-between;align-items:baseline"><h2>Vergleich wichtiger Eigenschaften</h2>
    <div style="font-size:24px"><span class="g">● gut</span> &nbsp; <span class="m">● mittel</span> &nbsp; <span class="b">● ungünstig</span></div></div>
    <div class="card" style="margin-top:22px;padding:14px 18px"><table><tr><th>Eigenschaft</th>${COLS.map(c => `<th>${c}</th>`).join('')}</tr>
    ${ROWS.map((r, i) => `<tr class="${hl < 0 ? '' : i === hl ? 'hl' : 'dimr'}"><td style="color:#cbd5e1">${r[0]}</td>${r[1].map(([t, c]) => `<td class="${c}">${t}</td>`).join('')}</tr>`).join('')}
    </table></div>${note ? `<div class="merk" style="--a:#f59e0b;margin-top:22px;font-size:30px">${note}</div>` : ''}`;
}
add(8, table(-1, 'Lies die Tabelle <b>zeilenweise</b>: Wer ist bei dieser Eigenschaft am besten – und wer fällt auf?'),
  'Jetzt fassen wir alles in der Vergleichstabelle zusammen. Lies sie am besten zeilenweise. Frag dich bei jeder Eigenschaft: Wer ist hier am besten, und wer fällt aus der Reihe?');
const tsay = [
  ['Wirkprinzip: Vier Verbindungen sind formschlüssig. Nur Press- und Schrumpfsitz sowie der Spannsatz sind kraftschlüssig. Pressen und Spannen, du erinnerst dich.', 'Formschluss: Passfeder, Keilwelle, Kerbzahn, Polygon · Kraftschluss: <b>Pressen & Spannen</b>'],
  ['Drehmoment: Die Passfeder schafft nur ein mittleres Drehmoment. Alle anderen schaffen hohe Drehmomente, der Press- und Schrumpfsitz sogar hoch bis sehr hoch.', 'Passfeder nur <b>mittel</b> · Pressverband <b>hoch bis sehr hoch</b>'],
  ['Fertigungsaufwand: Die Passfeder ist günstig zu fertigen. Hoch ist der Aufwand bei Keilwelle, Kerbzahnprofil und Polygon, weil hier Profile oder Verzahnungen hergestellt werden müssen. Beim Spannsatz ist er gering bis mittel, denn Welle und Nabe bleiben einfach glatt, und den Spannsatz kauft man fertig dazu.', 'Profile & Verzahnungen = <b>teuer</b> · Passfeder = <b>günstig</b>'],
  ['Montage und Demontage: Einfach sind Passfeder und Spannsatz. Aufwendig ist nur der Pressverband, denn man braucht hohe Presskräfte oder muss die Nabe erwärmen.', 'Nur der Pressverband ist <b>aufwendig</b>'],
  ['Spielfreiheit: Wirklich spielfrei sind die beiden kraftschlüssigen Verbindungen, also Pressverband und Spannsatz. Bei der Passfeder ist Spielfreiheit nicht grundsätzlich gegeben. Bei Keilwelle, Kerbzahn und Polygon hängt es von der Passung ab.', 'Kraftschluss = <b>spielfrei</b> · Passfeder = nicht grundsätzlich'],
  ['Axiale Verschiebbarkeit: Die formschlüssigen Verbindungen können axial verschiebbar ausgeführt werden. Der Pressverband dagegen nicht, und der Spannsatz im gespannten Zustand auch nicht. Logisch, denn was festgeklemmt ist, rutscht nicht.', 'Festgeklemmt = <b>nicht verschiebbar</b>'],
  ['Häufige Demontage: Am besten ist der Spannsatz, nämlich sehr gut. Passfeder, Keilwelle, Kerbzahn und Polygon sind gut. Schlecht ist nur der Pressverband.', 'Sehr gut: <b>Spannsatz</b> · Schlecht: <b>Pressverband</b>'],
];
tsay.forEach(([s, n], i) => add(8, table(i, n), s, 1.0));
add(8, table(-1, '<b>Gegenspieler-Paar:</b> Pressverband ↔ Spannsatz – beide spielfrei, aber der Spannsatz ist leicht lösbar, der Pressverband nicht.'),
  'Ein Tipp für die Prüfung: Pressverband und Spannsatz sind ein Gegenspieler-Paar. Beide sind kraftschlüssig und spielfrei. Aber der Spannsatz lässt sich sehr gut lösen, der Pressverband nur schlecht.', 1.2);

// ---------- 9: Quiz ----------
const Q = [
  ['Welche Verbindung ist einfach, billig und genormt – schwächt aber die Welle durch eine Nut?', 'Passfeder', 'Die Passfeder. Einfach und preiswert, aber die Nut erzeugt Kerbwirkung.'],
  ['Bei welcher Verbindung wird die Nabe vor der Montage erwärmt?', 'Schrumpfverbindung (Pressverband)', 'Beim Aufschrumpfen. Warm drauf, kalt fest.'],
  ['Welche zwei Verbindungen sind kraftschlüssig?', 'Pressverband & Spannsatz', 'Pressverband und Spannsatz. Pressen und Spannen.'],
  ['Spielfrei, ohne Wellennut, leicht lösbar und neu positionierbar – welche Verbindung?', 'Spannsatz', 'Der Spannsatz.'],
  ['Viele evolventenförmige Zähne, gute Zentrierung, hält Schläge aus – welche Verbindung?', 'Kerbzahnprofil', 'Das Kerbzahnprofil.'],
  ['Unrundes Profil ohne Ecken, sehr günstige Spannungsverteilung, z. B. im Fahrzeuggetriebe?', 'Polygonprofil', 'Das Polygonprofil. Keine Ecken, keine Kerben.'],
  ['Welche Verbindung lässt sich NICHT axial verschieben und schlecht demontieren?', 'Pressverband', 'Der Pressverband.'],
];
const qv = (i, ans) => `<div style="display:flex;flex-direction:column;justify-content:center;height:100%;gap:40px">
  <div class="muted" style="font-size:34px;font-weight:800">Quizfrage ${i + 1} von ${Q.length}</div>
  <div style="font-size:60px;font-weight:800;line-height:1.2;max-width:1600px">${Q[i][0]}</div>
  ${ans ? `<div class="card" style="border-color:#4ade80;font-size:56px;font-weight:800;color:#4ade80;align-self:flex-start">✓ ${Q[i][1]}</div>`
    : `<div class="card" style="font-size:38px;color:#fbbf24;align-self:flex-start;font-weight:700">⏸ Überleg kurz – oder drück Pause!</div>`}</div>`;
add(9, `<div style="display:flex;flex-direction:column;justify-content:center;height:100%"><h1>Quiz-Zeit!</h1>
  <p class="big muted" style="margin-top:30px">7 Fragen · Nach jeder Frage hast du ein paar Sekunden Zeit.<br>Sag deine Antwort laut – das hilft beim Merken.</p></div>`,
  'Quiz-Zeit! Ich stelle dir sieben Fragen. Nach jeder Frage hast du ein paar Sekunden Zeit. Sag deine Antwort am besten laut, das hilft beim Merken.');
Q.forEach((q, i) => { add(9, qv(i, false), q[0].replace(/z\. B\./g, 'zum Beispiel').replace('NICHT', 'nicht') + ' Überleg kurz.', 4.5); add(9, qv(i, true), q[2], 1.0); });

// ---------- 10: Merksätze ----------
const M = [
  ['Passfeder', 'einfach und preiswert, aber die Nut schwächt die Welle – keine schlagartigen, wechselnden Belastungen.', 'Passfeder: einfach und preiswert, aber die Nut schwächt die Welle. Keine schlagartigen, wechselnden Belastungen.'],
  ['Keilwelle', 'hohe Drehmomente übertragbar, auch wechselnde Belastungen.', 'Keilwelle: hohe Drehmomente übertragbar, auch wechselnde Belastungen.'],
  ['Kerbzahnprofil', 'viele Zähne ermöglichen schlagartige und wechselnde hohe Drehmomente, die Fertigung ist aufwendig.', 'Kerbzahnprofil: viele Zähne ermöglichen schlagartige und wechselnde hohe Drehmomente, die Fertigung ist aufwendig.'],
  ['Press-/Schrumpfsitz', 'spielfrei und hoch belastbar, schwer zu lösen.', 'Press- und Schrumpfsitz: spielfrei und hoch belastbar, aber schwer zu lösen.'],
  ['Spannsatz', 'spielfrei, ohne Nut in der Welle und gut demontierbar.', 'Spannsatz: spielfrei, ohne Nut in der Welle und gut demontierbar.'],
  ['Polygon', 'schlagartige und wechselnde hohe Drehmomente übertragbar, sehr günstige Kraftverteilung, teure Fertigung.', 'Polygon: schlagartige und wechselnde hohe Drehmomente übertragbar, sehr günstige Kraftverteilung, teure Fertigung.'],
];
const mv = n => `<h2>Die 6 Merksätze</h2><div style="display:flex;flex-direction:column;gap:16px;margin-top:28px">
  ${M.map(([k, t], i) => `<div class="merk ${i < n ? '' : 'hide'} ${i < n - 1 ? 'dim' : ''}" style="--a:${ACC[k === 'Press-/Schrumpfsitz' ? 'Pressverband' : k]};font-size:32px;padding:16px 28px"><b>${k}:</b> ${t}</div>`).join('')}</div>`;
add(10, mv(0), 'Zum Schluss wiederholen wir die sechs Merksätze von deinem Arbeitsblatt. Sprich sie ruhig mit.', 0.5);
M.forEach((m, i) => add(10, mv(i + 1), m[2], 0.9));
add(10, `<div style="display:flex;flex-direction:column;justify-content:center;height:100%;gap:34px"><h1>Das Wichtigste<br>in 3 Sätzen</h1>
  <div class="merk big" style="--a:#38bdf8"><b>Formschluss</b> (Form greift ineinander): Passfeder · Keilwelle · Kerbzahn · Polygon</div>
  <div class="merk big" style="--a:#f472b6"><b>Kraftschluss</b> (Reibung durch Pressung): Pressverband · Spannsatz – beide <b>spielfrei</b></div>
  <div class="merk big" style="--a:#f59e0b"><b>Billig</b> = Passfeder · <b>Leicht lösbar</b> = Spannsatz · <b>Schwer lösbar</b> = Pressverband · <b>Keine Kerben</b> = Polygon</div></div>`,
  'Das Wichtigste in drei Sätzen. Erstens: Formschlüssig sind Passfeder, Keilwelle, Kerbzahnprofil und Polygon. Zweitens: Kraftschlüssig sind Pressverband und Spannsatz, und beide sind spielfrei. Drittens: Die Passfeder ist am billigsten, der Spannsatz am leichtesten lösbar, der Pressverband am schwersten lösbar, und das Polygon hat keine Kerben. Viel Erfolg beim Lernen!', 2.5);

module.exports = steps;
