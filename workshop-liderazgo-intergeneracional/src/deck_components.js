// Componentes editoriales para el deck del taller, construidos sobre el estándar AMMX (am_brand.js).
// Criterio: una idea por lámina, preguntas grandes, cifras grandes, espacio en blanco, sin iconografía decorativa.
const AM = require('./am_brand.js');
const { C, F, T, rect, hline, vline, circle, gradientBand, logo, deck, SEQ_DECK } = AM;

const NOTE_KEYS = ['PROPÓSITO', 'TIEMPO', 'GUION DEL FACILITADOR', 'PREGUNTA', 'RESPUESTA ESPERADA', 'TRANSICIÓN'];

/** Notas del orador con la estructura obligatoria del brief (+ extras opcionales). */
function notes(s, n) {
  if (!n) return;
  const map = {
    'PROPÓSITO': n.purpose, 'TIEMPO': n.time, 'GUION DEL FACILITADOR': n.script, 'PREGUNTA': n.question,
    'RESPUESTA ESPERADA': n.expected, 'TRANSICIÓN': n.transition,
  };
  let txt = NOTE_KEYS.map((k) => `${k}\n${map[k] || '—'}`).join('\n\n');
  if (n.extra) txt += `\n\n${n.extra}`;
  s.addNotes(txt);
}

/** Lámina estándar AMMX (eyebrow + título-conclusión + pie). */
function base(pres, o) {
  const s = deck.slide(pres, { num: o.num, section: o.section, title: o.title || '', source: o.source, page: o.page, dark: o.dark });
  notes(s, o.notes);
  return s;
}

/** Eyebrow sin título (láminas de pregunta / afirmación). */
function eyebrowOnly(s, o, dark) {
  const eb = (o.num != null ? String(o.num).padStart(2, '0') + ' · ' : '') + (o.section || '').toUpperCase();
  T(s, eb, { x: 0.6, y: 0.32, w: 10.8, h: 0.3, font: F.deck, fontSize: 10, bold: true, color: dark ? C.amber : C.coral, charSpacing: 2 });
}
function footer(s, o, dark) {
  logo(s, { x: 11.55, y: 6.98, w: 0.62, dark });
  if (o.source) T(s, o.source, { x: 0.6, y: 7.05, w: 10.7, h: 0.2, font: F.note, fontSize: 7.5, color: dark ? 'B8BACB' : C.slate2 });
  if (o.page != null) T(s, String(o.page), { x: 12.3, y: 7.05, w: 0.45, h: 0.2, font: F.note, fontSize: 7.5, color: dark ? 'B8BACB' : C.slate2, align: 'right' });
}

/** Pregunta grande (el formato editorial central del taller). */
function question(pres, o) {
  const s = pres.addSlide();
  const dark = !!o.dark;
  s.background = dark ? { path: AM.asset('bg_navy.png') } : { color: C.white };
  eyebrowOnly(s, o, dark);
  gradientBand(s, 0.6, 1.55, 1.1, 0.06);
  T(s, o.q, { x: 0.6, y: 1.8, w: o.w || 11.2, h: o.h || 2.9, font: F.deck, fontSize: o.size || 36, bold: true, color: dark ? C.white : C.navy, valign: 'top', lineSpacingMultiple: 1.05 });
  if (o.sub) T(s, o.sub, { x: 0.6, y: o.subY || 5.05, w: 10.5, h: 1.2, font: F.deck, fontSize: 15, color: dark ? 'D6D8EA' : C.slate, valign: 'top' });
  if (o.tag) { AM.pill(s, 0.6, 6.25, Math.max(1.6, 0.35 + o.tag.length * 0.085), 0.36, dark ? C.amber : C.coral, o.tag.toUpperCase(), { font: F.deck, fontSize: 9, charSpacing: 1.5 }); }
  footer(s, o, dark);
  notes(s, o.notes);
  return s;
}

/** Cifras grandes (1–3) con lectura prudente. stats: [{value, label, detail}] */
function bigNumbers(pres, o) {
  const s = base(pres, o);
  const n = o.stats.length;
  const colW = n === 1 ? 6.2 : (o.reading ? 7.0 : 12.1) / n;
  o.stats.forEach((st, i) => {
    const x = 0.6 + i * colW;
    T(s, st.value, { x, y: 1.85, w: colW - 0.3, h: 1.35, font: F.deck, fontSize: n === 1 ? 88 : 60, bold: true, color: st.color || C.coral, valign: 'bottom' });
    hline(s, x, 3.35, colW - 0.4, C.rule, 0.75);
    T(s, st.label, { x, y: 3.5, w: colW - 0.4, h: 1.3, font: F.deck, fontSize: n === 1 ? 17 : 14, bold: true, color: C.navy });
    if (st.detail) T(s, st.detail, { x, y: 4.85, w: colW - 0.4, h: 1.5, font: F.deck, fontSize: 10.5, color: C.slate });
  });
  if (o.reading) {
    const px = n === 1 ? 7.3 : 7.8, pw = 12.73 - px;
    const iy = deck.panel(s, px, 1.75, pw, 4.9, o.readingLabel || 'Lectura prudente');
    T(s, o.reading, { x: px + 0.3, y: iy, w: pw - 0.6, h: 4.0, font: F.deck, fontSize: 12.5, color: C.navy });
  }
  return s;
}

/** Actividad: pasos numerados + panel de tiempo/materiales + pregunta guía. */
function activity(pres, o) {
  const s = base(pres, o);
  const steps = o.steps || [];
  const step = Math.min(0.92, 4.4 / Math.max(steps.length, 1));
  steps.forEach((st, i) => {
    const y = 1.8 + i * step;
    circle(s, 0.6, y, 0.46, SEQ_DECK[Math.round(i * 5 / Math.max(steps.length - 1, 1))], i + 1, { font: F.deck, fontSize: 13 });
    T(s, st, { x: 1.28, y: y - 0.04, w: 6.5, h: step - 0.05, font: F.deck, fontSize: 14, color: C.navy, valign: 'top' });
  });
  const iy = deck.panel(s, 8.25, 1.75, 4.48, 4.9, o.panelLabel || 'Dinámica');
  let y = iy;
  if (o.time) { T(s, o.time, { x: 8.55, y, w: 3.9, h: 0.8, font: F.deck, fontSize: 40, bold: true, color: C.coral }); y += 0.85; T(s, 'minutos', { x: 8.55, y: y - 0.12, w: 3.9, h: 0.3, font: F.deck, fontSize: 11, color: C.slate }); y += 0.35; }
  if (o.format) { T(s, o.format, { x: 8.55, y, w: 3.9, h: 0.6, font: F.deck, fontSize: 12, bold: true, color: C.navy }); y += 0.65; }
  if (o.materials) { T(s, o.materials, { x: 8.55, y, w: 3.9, h: 6.4 - y, font: F.deck, fontSize: 11, color: C.slate }); }
  if (o.question) T(s, o.question, { x: 0.6, y: 6.25, w: 7.4, h: 0.6, font: F.deck, fontSize: 14, bold: true, color: C.coral, valign: 'middle' });
  return s;
}

/** Contraste de dos columnas (antes → ahora; contrato viejo vs. nuevo; líder rígido vs. adaptable). */
function contrast(pres, o) {
  const s = base(pres, o);
  const cols = [o.left, o.right];
  cols.forEach((c, ci) => {
    const x = ci === 0 ? 0.6 : 6.95, w = 5.75;
    const dark = ci === 1 && o.emphasizeRight !== false;
    s.addShape('roundRect', { x, y: 1.75, w, h: 4.45, fill: { color: dark ? C.navy : C.panel }, line: { type: 'none' }, rectRadius: 0.08 });
    T(s, c.label.toUpperCase(), { x: x + 0.35, y: 1.98, w: w - 0.7, h: 0.3, font: F.deck, fontSize: 10, bold: true, color: dark ? C.amber : C.coral, charSpacing: 2 });
    if (c.title) T(s, c.title, { x: x + 0.35, y: 2.3, w: w - 0.7, h: 0.5, font: F.deck, fontSize: 17, bold: true, color: dark ? C.white : C.navy });
    const items = c.items || [];
    const y0 = c.title ? 3.0 : 2.5, stp = Math.min(0.58, 3.1 / Math.max(items.length, 1));
    items.forEach((it, i) => {
      const y = y0 + i * stp;
      if (o.flow) {
        if (i < items.length - 1) T(s, c.connector || (ci === 0 ? '↓' : '↕'), { x: x + 0.35, y: y + 0.3, w: 0.3, h: 0.3, font: F.deck, fontSize: 10, color: dark ? C.amber : C.slate2 });
      } else {
        rect(s, x + 0.38, y + 0.14, 0.09, 0.09, dark ? C.amber : C.coral);
      }
      T(s, it, { x: x + (o.flow ? 0.7 : 0.65), y, w: w - (o.flow ? 1.05 : 1.0), h: 0.38, font: F.deck, fontSize: 13.5, bold: o.flow, color: dark ? C.white : C.navy, valign: 'middle' });
    });
  });
  if (o.takeaway) T(s, o.takeaway, { x: 0.6, y: 6.33, w: 12.1, h: 0.55, font: F.deck, fontSize: 14, bold: true, color: C.coral, valign: 'middle' });
  return s;
}

/** Contexto generacional: una lámina por generación, 5 bloques fijos, mismo color para todas (D-10). */
function generation(pres, o) {
  const s = base(pres, o);
  // Columna izquierda: el mundo al que entraron
  T(s, o.years, { x: 0.6, y: 1.55, w: 4, h: 0.35, font: F.deck, fontSize: 12, bold: true, color: C.slate2, charSpacing: 1.5 });
  const iy = deck.panel(s, 0.6, 1.95, 5.3, 4.75, 'El mundo al que entraron');
  AM.op.bullets(s, 0.9, iy, 4.75, 3.95, o.world, { fontSize: 11.5, color: C.navy, font: F.deck });
  const blocks = [
    ['Qué solía representar el trabajo', o.work],
    ['Expectativas frecuentes', o.expect],
    ['Posibles fricciones de liderazgo', o.friction],
  ];
  blocks.forEach((b, i) => {
    const y = 1.95 + i * 1.18;
    T(s, b[0].toUpperCase(), { x: 6.3, y, w: 6.4, h: 0.28, font: F.deck, fontSize: 9, bold: true, color: C.coral, charSpacing: 1.5 });
    T(s, b[1], { x: 6.3, y: y + 0.3, w: 6.4, h: 0.82, font: F.deck, fontSize: 12, color: C.navy });
    hline(s, 6.3, y + 1.1, 6.4, C.rule, 0.5);
  });
  s.addShape('roundRect', { x: 6.3, y: 5.55, w: 6.43, h: 1.15, fill: { color: C.navy }, line: { type: 'none' }, rectRadius: 0.06 });
  T(s, 'LO QUE UN LÍDER NO DEBERÍA SUPONER', { x: 6.55, y: 5.65, w: 6, h: 0.28, font: F.deck, fontSize: 9, bold: true, color: C.amber, charSpacing: 1.5 });
  T(s, o.dontAssume, { x: 6.55, y: 5.93, w: 6.0, h: 0.72, font: F.deck, fontSize: 12, bold: true, color: C.white, valign: 'top' });
  return s;
}

/** Afirmación para votar (Mito vs. Dato). */
function vote(pres, o) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  eyebrowOnly(s, o, false);
  T(s, o.counter || '', { x: 0.6, y: 1.35, w: 3, h: 0.4, font: F.deck, fontSize: 12, bold: true, color: C.slate2, charSpacing: 1.5 });
  T(s, `“${o.claim}”`, { x: 0.6, y: 1.9, w: 11.5, h: 2.4, font: F.deck, fontSize: 40, bold: true, color: C.navy, valign: 'middle' });
  ['CIERTO', 'FALSO', 'DEPENDE'].forEach((l, i) => {
    const x = 0.6 + i * 2.75;
    s.addShape('roundRect', { x, y: 4.95, w: 2.45, h: 0.8, fill: { color: C.white }, line: { color: [C.navy, C.coral, C.plum][i], width: 2 }, rectRadius: 0.4 });
    T(s, l, { x, y: 4.95, w: 2.45, h: 0.8, font: F.deck, fontSize: 15, bold: true, color: [C.navy, C.coral, C.plum][i], align: 'center', valign: 'middle', charSpacing: 2 });
  });
  T(s, 'Voten al mismo tiempo. Sin discutir todavía.', { x: 0.6, y: 6.05, w: 8, h: 0.4, font: F.deck, fontSize: 12, color: C.slate });
  footer(s, o, false);
  notes(s, o.notes);
  return s;
}

/** Revelación de evidencia para una afirmación. */
function verdict(pres, o) {
  const s = base(pres, o);
  const col = { MITO: C.coral, 'MATIZADO': C.plum, 'DEPENDE': C.plum, 'PARCIALMENTE CIERTO': C.plum, 'RESPALDADO': C.steel }[o.verdict] || C.coral;
  AM.pill(s, 0.6, 1.62, Math.max(1.6, 0.4 + o.verdict.length * 0.12), 0.42, col, o.verdict, { font: F.deck, fontSize: 11, charSpacing: 2 });
  T(s, o.value || '', { x: 0.6, y: 2.25, w: 5.6, h: 1.4, font: F.deck, fontSize: 64, bold: true, color: col, valign: 'bottom' });
  T(s, o.valueLabel || '', { x: 0.6, y: 3.75, w: 5.6, h: 1.3, font: F.deck, fontSize: 13.5, bold: true, color: C.navy });
  if (o.valueDetail) T(s, o.valueDetail, { x: 0.6, y: 5.05, w: 5.6, h: 1.4, font: F.deck, fontSize: 10.5, color: C.slate });
  const iy = deck.panel(s, 6.75, 1.62, 5.98, 5.05, 'Lo que dice la evidencia');
  AM.op.bullets(s, 7.05, iy, 5.4, 3.2, o.points, { fontSize: 12, color: C.navy, font: F.deck });
  if (o.takeaway) T(s, o.takeaway, { x: 7.05, y: 5.55, w: 5.4, h: 0.95, font: F.deck, fontSize: 13, bold: true, color: C.coral, valign: 'bottom' });
  return s;
}

/** Modelo en N bloques horizontales (LEER → ADAPTAR → ALINEAR). */
function model(pres, o) {
  const s = base(pres, o);
  const n = o.blocks.length, gap = 0.3, w = (12.13 - gap * (n - 1)) / n;
  o.blocks.forEach((b, i) => {
    const x = 0.6 + i * (w + gap);
    const col = [C.amber, C.coral, C.plum, C.violet][i];
    rect(s, x, 1.8, w, 0.12, col);
    T(s, b.name, { x, y: 2.05, w, h: 0.85, font: F.deck, fontSize: 34, bold: true, color: C.navy, valign: 'middle' });
    T(s, b.verb, { x, y: 2.9, w, h: 0.5, font: F.deck, fontSize: 14, bold: true, color: col });
    AM.op.bullets(s, x, 3.5, w - 0.1, 2.3, b.items, { fontSize: 12, color: C.navy, font: F.deck });
    if (b.question) T(s, b.question, { x, y: 5.8, w: w - 0.1, h: 0.75, font: F.deck, fontSize: 12, bold: true, color: C.slate, valign: 'top' });
  });
  if (o.takeaway) T(s, o.takeaway, { x: 0.6, y: 6.45, w: 12.1, h: 0.45, font: F.deck, fontSize: 13, bold: true, color: C.coral, valign: 'middle' });
  return s;
}

/** Tabla editorial (matriz de motivadores, Matriz de Flexibilidad). */
function tableSlide(pres, o) {
  const s = base(pres, o);
  deck.table(s, 0.6, o.y || 1.7, o.w || 12.13, o.rows, { colW: o.colW, fontSize: o.fontSize || 10, rowH: o.rowH || 0.36, highlightCol: o.highlightCol });
  if (o.takeaway) T(s, o.takeaway, { x: 0.6, y: 6.35, w: 12.1, h: 0.5, font: F.deck, fontSize: 13, bold: true, color: C.coral, valign: 'middle' });
  return s;
}

/** Lista de preguntas (reflexión, debrief). */
function questionList(pres, o) {
  const s = base(pres, o);
  const qs = o.questions, stp = Math.min(0.78, 4.6 / qs.length);
  qs.forEach((q, i) => {
    const y = 1.8 + i * stp;
    T(s, String(i + 1).padStart(2, '0'), { x: 0.6, y, w: 0.7, h: stp - 0.05, font: F.deck, fontSize: 16, bold: true, color: C.coral, valign: 'top' });
    T(s, q, { x: 1.35, y, w: o.aside ? 6.6 : 11.2, h: stp - 0.05, font: F.deck, fontSize: o.size || 17, bold: false, color: C.navy, valign: 'top' });
  });
  if (o.aside) {
    const iy = deck.panel(s, 8.4, 1.75, 4.33, 4.9, o.asideLabel || 'Cómo');
    T(s, o.aside, { x: 8.7, y: iy, w: 3.75, h: 4.1, font: F.deck, fontSize: 12, color: C.navy });
  }
  return s;
}

/** Cierre navy con frase ancla. */
function anchor(pres, o) {
  const s = pres.addSlide();
  s.background = { path: AM.asset('bg_navy.png') };
  eyebrowOnly(s, o, true);
  T(s, o.line1, { x: 0.6, y: 1.9, w: 12, h: 1.4, font: F.deck, fontSize: 38, bold: true, color: C.white, valign: 'bottom' });
  T(s, o.line2, { x: 0.6, y: 3.35, w: 12, h: 1.4, font: F.deck, fontSize: 38, bold: true, color: C.amber, valign: 'top' });
  gradientBand(s, 0.6, 5.0, 3.0, 0.07);
  if (o.sub) T(s, o.sub, { x: 0.6, y: 5.25, w: 11, h: 1.0, font: F.deck, fontSize: 15, color: 'D6D8EA' });
  footer(s, o, true);
  notes(s, o.notes);
  return s;
}

module.exports = { AM, notes, base, question, bigNumbers, activity, contrast, generation, vote, verdict, model, tableSlide, questionList, anchor };
