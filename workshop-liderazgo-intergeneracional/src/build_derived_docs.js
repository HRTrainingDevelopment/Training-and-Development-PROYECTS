// Documentos derivados directamente de las fuentes validadas (sin reescritura manual):
// 06 Evidence Pack · 08 Pre-work · 09 Experimento a 30 días · 04 Run of Show (md para PDF + XLSX)
const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');
const ROOT = path.join(__dirname, '..');
const DOCS = path.join(__dirname, 'docs');
const rd = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const between = (s, a, b) => { const i = s.indexOf(a); if (i < 0) throw new Error('No encuentro: ' + a); const j = b ? s.indexOf(b, i + a.length) : s.length; return s.slice(i, j < 0 ? s.length : j); };
const demote = (md) => md.replace(/^### /gm, '#### ').replace(/^## /gm, '### ');

// ── 06 Evidence Pack
const ev = rd('01_evidence/evidence_pack.md').replace(/^# .*\n/, '');
fs.writeFileSync(path.join(DOCS, '06_Evidence_Pack.md'), `---
title: Evidence Pack
eyebrow: Entregable 06 · Liderar entre generaciones
sub: Qué sabemos, qué creemos saber y qué es mito sobre generaciones en el trabajo. Cada dato con fuente, año, muestra, geografía, URL e interpretación prudente.
meta: <b>Para:</b> Facilitadores, CXO y equipo de Capacitación y Desarrollo<br>Fecha de corte: 28-sep-2026 · Confirmar cada cifra en su URL primaria antes de cada edición
footer: Evidence Pack
file: 06_Evidence_Pack
---
<style>main table{font-size:7.4pt} main td,main th{padding:3pt 4pt} main a{font-size:7pt}</style>
${ev}`);

// ── 08 Pre-work
const inst = rd('04_actividades/instrumentos_psicologicos.md');
const pre = demote(between(inst, '## 1. PRE-WORK (Acto 0)', '## 2. DIAGNÓSTICO').replace('## 1. PRE-WORK (Acto 0)', ''));
fs.writeFileSync(path.join(DOCS, '08_Pre-work.md'), `---
title: Pre-work · 5 minutos
eyebrow: Entregable 08 · Liderar entre generaciones
sub: Siete frases para completar antes de la sesión. Capturan reacciones instintivas sin decir qué se está explorando. El participante las recibe en un sobre cerrado en el Acto 12.
meta: <b>Para:</b> Facilitadores A y B (responsables exclusivos del formulario y de los datos)<br>Enviar T–10 días · Cierre T–2 días · Eliminación de datos ≤ 30 días después de la sesión
footer: Pre-work
file: 08_Pre-work
---
<div class="eyebrow">Acto 0 · Antes de la sala</div>

# Pre-work: especificación, correo y formulario

<div class="panel"><div class="label">Resumen</div>

- **Duración para el participante:** 5 minutos · 7 frases · escala "¿Qué tanto me incomoda?" 1–4.
- **Qué no se dice:** el correo y el formulario no mencionan "generaciones", "edad" ni "estereotipos".
- **Quién ve los datos:** solo los facilitadores. Ni la CXO, ni RH, ni jefes (D-13).
- **Qué regresa al participante:** sus propias respuestas impresas, en sobre cerrado, en el Acto 12.
</div>

${pre}

<div class="por"><b>POR CONFIRMAR</b> · Aviso de privacidad aplicable (LFPDPPP) con el área de Privacidad/Jurídico de AMMX antes del envío.</div>
`);

// ── 09 Experimento a 30 días
const act = rd('04_actividades/actividades_experienciales.md');
const exp = demote(between(act, '## 7. Experimento de Liderazgo a 30 días', '## 8.').replace('## 7. Experimento de Liderazgo a 30 días', ''));
fs.writeFileSync(path.join(DOCS, '09_Experimento_30_dias.md'), `---
title: Experimento de Liderazgo a 30 días
eyebrow: Entregable 09 · Post-workshop
sub: Una persona que me cuesta leer. Leer, adaptar, alinear durante treinta días. Registrar qué supuse, qué pregunté, qué aprendí, qué cambié y qué pasó, y compartir aprendizajes en la siguiente sesión.
meta: <b>Para:</b> Participantes (tarjeta y protocolo) · Facilitadores (recordatorios y sesión de seguimiento)<br>Días 1 · 7 · 14 · 21 · 30 · Sesión de seguimiento entre el día 35 y el 45
footer: Experimento a 30 días
file: 09_Experimento_30_dias
---
<div class="eyebrow">Después de la sala</div>

# De una conversación a un hábito

<p class="lead">El taller termina con una conversación en siete días. El experimento convierte esa conversación en un mes de práctica deliberada con una sola persona, y la sesión de seguimiento convierte los aprendizajes individuales en práctica del equipo directivo.</p>

<div class="panel navy"><div class="label">La regla</div><p>La bitácora es del participante. Nadie la revisa. En la sesión de seguimiento se comparten aprendizajes, no identidades. La seguridad y los estándares no se adaptan.</p></div>

${exp}
`);

// ── 04 Run of Show (PDF + XLSX)
const ROS = require('./run_of_show.js');
const HEAD = ['Inicio', 'Fin', 'Acto', 'Segmento', 'Qué ocurre', 'Facilitador A', 'Facilitador B', 'CXO', 'Láminas', 'Materiales', 'Arco', 'Alerta'];
const esc = (t) => String(t).replace(/\|/g, '/');
fs.writeFileSync(path.join(DOCS, '04_Run_of_Show.md'), `---
title: Run of Show
eyebrow: Entregable 04 · Liderar entre generaciones
sub: Minuto a minuto de la versión de 180 minutos, con responsables, láminas, materiales y alertas. Versión editable en Excel (04_Run_of_Show.xlsx).
meta: <b>Para:</b> Facilitadores A y B · Logística<br>Versiones de 120 y 90 minutos al final del documento
footer: Run of Show
file: 04_Run_of_Show
---
<style>main table{font-size:6.9pt} main td,main th{padding:2.5pt 3.5pt}</style>
<div class="eyebrow">Versión completa · 180 minutos</div>

# Minuto a minuto

| ${HEAD.filter((h, i) => ![7, 10].includes(i)).join(' | ')} |
|${HEAD.filter((h, i) => ![7, 10].includes(i)).map(() => '---').join('|')}|
${ROS.map((r) => '| ' + r.filter((c, i) => ![7, 10].includes(i)).map(esc).join(' | ') + ' |').join('\n')}

### Acordeón de recortes si vamos tarde

| Retraso acumulado | Recorte | Ahorro |
|---|---|---|
${ROS.acordeon.map((r) => '| ' + r.map(esc).join(' | ') + ' |').join('\n')}

### Mapa de láminas por versión (deck de 56 láminas)

| Versión | Láminas | Ocultas |
|---|---|---|
${ROS.mapa.map((r) => '| ' + r.map(esc).join(' | ') + ' |').join('\n')}

### Rol de la CXO por momento

| Inicio | Acto | CXO |
|---|---|---|
${ROS.filter((r) => r[7] && r[7] !== '—').map((r) => `| ${r[0]} | ${esc(r[2])} | ${esc(r[7])} |`).join('\n')}

${demote(between(rd('02_arquitectura/arquitectura_taller.md'), '## Versiones comprimidas', '## Materiales por acto').replace('## Versiones comprimidas', '## Versiones comprimidas'))}
`);

(async () => {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'Gerencia de Capacitación y Desarrollo · AMMX';
  const ws = wb.addWorksheet('Run of Show 180', { views: [{ state: 'frozen', ySplit: 1 }] });
  ws.columns = HEAD.map((h, i) => ({ header: h, key: 'c' + i, width: [8, 8, 18, 26, 60, 28, 28, 26, 10, 26, 16, 34][i] }));
  ROS.forEach((r) => ws.addRow(r));
  ws.getRow(1).eachCell((c) => { c.font = { bold: true, color: { argb: 'FFFFFFFF' }, name: 'Century Gothic', size: 10 }; c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1A1A2E' } }; c.alignment = { vertical: 'middle', wrapText: true }; });
  ws.eachRow((row, i) => { if (i > 1) row.eachCell((c) => { c.alignment = { vertical: 'top', wrapText: true }; c.font = { name: 'Century Gothic', size: 9 }; if (i % 2 === 0) c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF4F5F9' } }; }); });
  ws.autoFilter = { from: 'A1', to: 'L1' };
  const wa = wb.addWorksheet('Acordeón y mapa');
  wa.columns = [{ header: 'Cuándo / versión', width: 26 }, { header: 'Recorte / láminas', width: 70 }, { header: 'Ahorro / ocultas', width: 60 }];
  ROS.acordeon.forEach((r) => wa.addRow(r)); wa.addRow([]); ROS.mapa.forEach((r) => wa.addRow(r));
  wa.getRow(1).eachCell((c) => { c.font = { bold: true, color: { argb: 'FFFFFFFF' } }; c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1A1A2E' } }; });
  wa.eachRow((row) => row.eachCell((c) => { c.alignment = { wrapText: true, vertical: 'top' }; }));
  const arch = rd('02_arquitectura/arquitectura_taller.md');
  for (const v of ['120 minutos', '90 minutos']) {
    const sec = between(arch, `### ${v}`, v === '120 minutos' ? '### 90 minutos' : 'Los Actos 3 y 11');
    const rows = sec.split('\n').filter((l) => /^\| \d/.test(l)).map((l) => l.split('|').slice(1, -1).map((c) => c.trim()));
    const w = wb.addWorksheet('Versión ' + v.replace(' minutos', ''));
    w.columns = [{ header: 'Inicio', width: 9 }, { header: 'Dur.', width: 7 }, { header: 'Acto', width: 26 }, { header: 'Ajuste', width: 70 }];
    rows.forEach((r) => w.addRow(r));
    w.getRow(1).eachCell((c) => { c.font = { bold: true, color: { argb: 'FFFFFFFF' } }; c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1A1A2E' } }; });
  }
  await wb.xlsx.writeFile(path.join(ROOT, 'entregables', '04_Run_of_Show.xlsx'));
  console.log('Derivados OK');
})();
