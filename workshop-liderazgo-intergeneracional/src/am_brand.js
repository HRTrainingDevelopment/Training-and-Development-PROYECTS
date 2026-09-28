/**
 * am_brand.js — Librería de componentes del Estándar de Presentaciones AMMX / AMU
 * Gerencia de Capacitación y Desarrollo · ArcelorMittal México
 *
 * Dos modos:
 *   ONE PAGER EJECUTIVO  → Calibri, fondo blanco, alta densidad (6–21 pt)
 *   PRESENTACIÓN COMPLETA → Century Gothic, portada/cierre navy, 10–38 pt
 *
 * Uso:
 *   const AM = require('/ruta/al/skill/scripts/am_brand.js');
 *   const pres = AM.newPres();               // 13.333 x 7.5 in
 *   const s = pres.addSlide();
 *   AM.op.header(s, {...});
 */
const path = require('path');
const fs = require('fs');
const pptxgen = require('pptxgenjs');

const ASSETS = path.join(__dirname, 'assets');
const asset = (f) => path.join(ASSETS, f);

// ─────────────────────────────────────────────────────────────── TOKENS
const C = {
  // Tinta y neutros (one pager)
  ink: '33333A', body: '4A4A54', gray: '78787F', mute: 'A2A2AA',
  line: 'E4E4EA', card: 'F5F5F8', card2: 'FAFAFC', white: 'FFFFFF',
  blue: '0070C0',                       // título del one pager
  // Acentos one pager (secuencia cálida → morada)
  orange: 'F58220', orange2: 'EF6A28', red: 'E74C3F', crimson: 'E14A3C',
  magenta: 'DC1F62', rose: 'C41977', fuchsia: 'BE1682', purple: '7D2E90',
  // Tintes (fondos de tarjetas destacadas)
  tOrange: 'FDF0E4', tRed: 'FCEAE6', tMagenta: 'FCE7EF', tPurple: 'F2EAF5', tPink: 'F4DCEA',
  // Presentación completa
  navy: '1A1A2E', navyInk: '1A1A2E', slate: '5A5A6E', slate2: '8A8CA0',
  panel: 'F4F5F9', rule: 'D6D8EA', coral: 'FA4642', amber: 'FF8C47', coral2: 'FC6A45',
  crim2: 'EA3450', pink: 'DB2259', berry: 'C8136C', plum: 'AA0582', violet: '5B2A86',
  steel: '3F6FD1', steel2: '5B84DA', steelT: 'C9D6F3', peach: 'FFE3CF',
  por: 'FFF4D6', porInk: '8A5A00',       // banda [POR CONFIRMAR]
};

// Secuencias para pasos/fases (usar en orden; no inventar colores fuera de aquí)
const SEQ_OP = [C.orange, C.orange2, C.red, C.magenta, C.fuchsia, C.purple];
const SEQ_DECK = [C.amber, C.coral2, C.coral, C.crim2, C.pink, C.berry, C.plum, C.violet];
// Estados de un flujo (one pager): qué ya existe / qué se mejora / qué es nuevo
const STATUS = {
  hoy: { color: C.mute, label: 'YA OPERA HOY' },
  mejora: { color: C.orange, label: 'SE MEJORA' },
  nuevo: { color: C.rose, label: 'ES NUEVO' },
};
// ILUO (autoridad: RoadMap_Habilitación_Modelo_ILUO)
const ILUO = {
  I: { color: 'A8A29E', name: 'Introducción y Conocimiento', eq: 'Basic' },
  L: { color: 'C8860D', name: 'Aprendizaje y Práctica Supervisada', eq: 'Intermediate' },
  U: { color: 'E8551B', name: 'Ejecución Autónoma y Habilitada', eq: 'Proficient' },
  O: { color: '5B1A6E', name: 'Dominio, Optimización e Instrucción', eq: 'Advanced' },
};

const F = { op: 'Calibri', deck: 'Century Gothic', note: 'Calibri' };
const W = 13.333, H = 7.5;

// ─────────────────────────────────────────────────────────────── BÁSICOS
function newPres({ title = 'ArcelorMittal México', author = 'Gerencia de Capacitación y Desarrollo' } = {}) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_WIDE';          // 13.333 x 7.5 — SIEMPRE antes de addSlide
  pres.author = author; pres.company = 'ArcelorMittal México'; pres.title = title;
  return pres;
}

/** Texto con defaults seguros (isTextBox, margin 0, fuente del modo). */
function T(slide, text, o = {}) {
  const opts = Object.assign({
    isTextBox: true, margin: 0, fontFace: o.font || F.op, color: C.ink, fontSize: 9,
    valign: 'top', fit: 'none',
  }, o);
  delete opts.font;
  slide.addText(text, opts);
}
function rect(slide, x, y, w, h, fill, o = {}) {
  const opts = { x, y, w, h, fill: { color: fill }, line: o.line ? Object.assign({}, o.line) : { type: 'none' } };
  if (o.transparency != null) opts.fill.transparency = o.transparency;
  if (o.round) opts.rectRadius = o.round;
  slide.addShape(o.round ? 'roundRect' : 'rect', opts);
}
function circle(slide, x, y, d, fill, label, o = {}) {
  slide.addShape('ellipse', { x, y, w: d, h: d, fill: { color: fill }, line: o.ring ? { color: o.ring, width: 1.5 } : { type: 'none' } });
  if (label != null) T(slide, String(label), { x, y, w: d, h: d, align: 'center', valign: 'middle', bold: true, color: o.labelColor || C.white, fontSize: o.fontSize || 10, font: o.font });
}
function hline(slide, x, y, w, color = C.line, width = 0.75) {
  slide.addShape('line', { x, y, w, h: 0, line: { color, width } });
}
function vline(slide, x, y, h, color = C.line, width = 1) {
  slide.addShape('line', { x, y, w: 0, h, line: { color, width } });
}
function pill(slide, x, y, w, h, fill, text, o = {}) {
  slide.addShape('roundRect', { x, y, w, h, fill: { color: fill }, line: { type: 'none' }, rectRadius: h / 2 });
  T(slide, text, { x, y, w, h, align: 'center', valign: 'middle', bold: true, color: o.color || C.white, fontSize: o.fontSize || 7.5, charSpacing: o.charSpacing ?? 0.8, font: o.font });
}
function gradientBand(slide, x, y, w, h) {
  slide.addImage({ path: asset('gradient_band.png'), x, y, w, h, sizing: { type: 'cover', w, h } });
}
function logo(slide, { x = 11.85, y = 0.22, w = 1.0, dark = false } = {}) {
  const hgt = w * (197 / 477);
  slide.addImage({ path: asset(dark ? 'am_logo_white.png' : 'am_logo.png'), x, y, w, h: hgt });
}
/** Banda visible [POR CONFIRMAR] — usar solo si el dato es genuinamente incierto. */
function porConfirmar(slide, x, y, w, text, o = {}) {
  const h = o.h || 0.26;
  rect(slide, x, y, w, h, C.por);
  T(slide, [
    { text: 'POR CONFIRMAR  ', options: { bold: true, color: C.porInk, charSpacing: 1 } },
    { text, options: { color: C.porInk } },
  ], { x: x + 0.1, y, w: w - 0.2, h, valign: 'middle', fontSize: o.fontSize || 7.5, font: o.font });
}

// ═══════════════════════════════════════════════════════════════ ONE PAGER
const op = {
  /** Encabezado: eyebrow gris espaciado · título azul · subtítulo opcional · logo. Devuelve y siguiente. */
  header(slide, { eyebrow, title, subtitle, titleColor = C.blue }) {
    let y = 0.26;
    if (eyebrow) { T(slide, eyebrow.toUpperCase(), { x: 0.45, y, w: 10.8, h: 0.17, fontSize: 6.5, bold: true, color: C.gray, charSpacing: 1.2 }); y += 0.2; }
    T(slide, title, { x: 0.45, y, w: 10.9, h: 0.42, fontSize: 21, bold: true, color: titleColor, valign: 'middle' });
    y += 0.44;
    if (subtitle) { T(slide, subtitle, { x: 0.45, y: y - 0.04, w: 10.9, h: 0.28, fontSize: 13, bold: true, color: C.ink, valign: 'middle' }); y += 0.28; }
    logo(slide, { x: 11.85, y: 0.22, w: 1.05 });
    return y + 0.04;
  },

  /** Banda de contexto: mensaje clave + detalle + hasta 4 KPIs a la derecha + fecha de corte. */
  contextBand(slide, y, { lead, detail, kpis = [], asOf }) {
    const h = 0.78;
    rect(slide, 0.45, y, 12.43, h, C.card);
    rect(slide, 0.56, y + 0.1, 0.05, h - 0.2, C.gray);
    const textW = kpis.length ? 8.3 : 11.9;
    T(slide, lead, { x: 0.77, y: y + 0.06, w: textW, h: 0.4, fontSize: 9.8, bold: true, color: C.ink, valign: 'middle' });
    if (detail) T(slide, detail, { x: 0.77, y: y + 0.44, w: textW, h: 0.3, fontSize: 7.7, color: C.gray });
    if (kpis.length) {
      const colW = 1.08, x0 = 12.8 - colW * kpis.length;
      kpis.forEach((k, i) => {
        const x = x0 + i * colW;
        T(slide, k.value, { x, y: y + 0.1, w: colW, h: 0.28, fontSize: 14, bold: true, color: k.color || C.purple, align: 'center', valign: 'middle' });
        T(slide, k.label, { x, y: y + 0.38, w: colW, h: 0.16, fontSize: 6.5, color: C.gray, align: 'center' });
      });
      if (asOf) T(slide, asOf.toUpperCase(), { x: x0 - 0.3, y: y + 0.58, w: colW * kpis.length + 0.3, h: 0.14, fontSize: 6.2, color: C.ink, align: 'center', charSpacing: 1 });
    }
    return y + h + 0.1;
  },

  /** Barra de sección con degradado AM (naranja→magenta→morado) y texto blanco. */
  sectionBar(slide, x, y, w, label, { right, h = 0.24 } = {}) {
    gradientBand(slide, x, y, w, h);
    T(slide, label.toUpperCase(), { x: x + 0.14, y, w: w * 0.6, h, fontSize: 8.2, bold: true, color: C.white, valign: 'middle', charSpacing: 0.8 });
    if (right) T(slide, right, { x: x + w * 0.5, y, w: w * 0.5 - 0.14, h, fontSize: 7, color: C.white, align: 'right', valign: 'middle' });
    return y + h;
  },

  /** Título de bloque numerado (chip de color + título + comentario a la derecha). */
  sectionTitle(slide, x, y, w, num, title, { right, color = C.orange } = {}) {
    rect(slide, x, y, 0.24, 0.2, color);
    T(slide, String(num), { x, y, w: 0.24, h: 0.2, fontSize: 10, bold: true, color: C.white, align: 'center', valign: 'middle' });
    T(slide, title.toUpperCase(), { x: x + 0.34, y, w: w * 0.55, h: 0.2, fontSize: 11.5, bold: true, color: C.ink, valign: 'middle' });
    if (right) T(slide, right, { x: x + w * 0.45, y, w: w * 0.55, h: 0.2, fontSize: 8.5, color: C.gray, align: 'right', valign: 'middle' });
    return y + 0.26;
  },

  /** Leyenda de estados (YA OPERA HOY / SE MEJORA / ES NUEVO). */
  statusLegend(slide, x, y, keys = ['hoy', 'mejora', 'nuevo']) {
    keys.forEach((k, i) => {
      const cx = x + i * 1.58;
      slide.addShape('ellipse', { x: cx, y: y + 0.04, w: 0.1, h: 0.1, fill: { color: STATUS[k].color }, line: { type: 'none' } });
      T(slide, STATUS[k].label, { x: cx + 0.14, y, w: 1.4, h: 0.18, fontSize: 6.9, bold: true, color: C.ink, charSpacing: 1, valign: 'middle' });
    });
  },

  /** Flujo de pasos numerados con conector. steps: [{title, desc, status:'hoy'|'mejora'|'nuevo'|color}] */
  stepFlow(slide, x, y, w, steps) {
    const n = steps.length, colW = w / n, d = 0.36;
    hline(slide, x + colW / 2, y + d / 2, w - colW, C.line, 1);
    steps.forEach((s, i) => {
      const cx = x + i * colW;
      const color = STATUS[s.status] ? STATUS[s.status].color : (s.color || SEQ_OP[i % SEQ_OP.length]);
      circle(slide, cx + colW / 2 - d / 2, y, d, color, i + 1);
      T(slide, s.title.toUpperCase(), { x: cx + 0.04, y: y + 0.42, w: colW - 0.08, h: 0.17, fontSize: 8.4, bold: true, color: C.ink, align: 'center' });
      if (s.desc) T(slide, s.desc, { x: cx + 0.06, y: y + 0.6, w: colW - 0.12, h: 0.46, fontSize: 7, color: C.ink, align: 'center' });
    });
    return y + 1.08;
  },

  /** Tira de fases (MES 1…6 / FASE 1…n): cabecera de color + título + detalle. */
  phaseStrip(slide, x, y, w, phases, { h = 0.76, gap = 0.14 } = {}) {
    const n = phases.length, cw = (w - gap * (n - 1)) / n;
    phases.forEach((p, i) => {
      const cx = x + i * (cw + gap), col = p.color || SEQ_OP[Math.round(i * (SEQ_OP.length - 1) / Math.max(n - 1, 1))];
      rect(slide, cx, y, cw, h, C.card2);
      rect(slide, cx, y, cw, 0.2, col);
      T(slide, p.tag.toUpperCase(), { x: cx + 0.12, y, w: cw - 0.24, h: 0.2, fontSize: 7.5, bold: true, color: C.white, valign: 'middle', charSpacing: 0.8 });
      T(slide, p.title, { x: cx + 0.12, y: y + 0.25, w: cw - 0.24, h: 0.19, fontSize: 11, bold: true, color: C.ink });
      if (p.desc) T(slide, p.desc, { x: cx + 0.12, y: y + 0.45, w: cw - 0.24, h: h - 0.48, fontSize: 8, color: C.body });
    });
    return y + h;
  },

  /** Tarjeta blanca con borde, pill de etiqueta, título y subtítulo. Devuelve y interior para contenido. */
  card(slide, x, y, w, h, { tag, tagColor = C.orange, title, subtitle, fill = C.white } = {}) {
    rect(slide, x, y, w, h, fill, { line: { color: C.line, width: 0.75 } });
    let cy = y + 0.14;
    if (tag) { pill(slide, x + 0.16, cy, Math.min(2.2, 0.3 + tag.length * 0.066), 0.22, tagColor, tag.toUpperCase()); cy += 0.3; }
    if (title) { T(slide, title, { x: x + 0.16, y: cy, w: w - 0.32, h: 0.21, fontSize: 10.5, bold: true, color: C.ink }); cy += 0.22; }
    if (subtitle) { T(slide, subtitle, { x: x + 0.16, y: cy, w: w - 0.32, h: 0.17, fontSize: 7.8, color: C.gray }); cy += 0.22; }
    return cy;
  },

  /** Caja de cifra grande dentro de tarjeta (tinte + número + etiqueta + explicación). */
  statBox(slide, x, y, w, h, { value, label, note, tint = C.tOrange, color = C.orange }) {
    rect(slide, x, y, w, h, tint);
    if (h < 0.75) { // compacto: cifra a la izquierda, etiqueta y nota a la derecha
      const vw = Math.min(0.75, 0.2 + String(value).length * 0.14);
      T(slide, value, { x: x + 0.1, y, w: vw, h, fontSize: 15, bold: true, color, valign: 'middle' });
      T(slide, label || '', { x: x + 0.1 + vw, y: y + (note ? h / 2 - 0.19 : 0), w: w - vw - 0.2, h: note ? 0.18 : h, fontSize: 7.8, bold: true, color: C.ink, valign: note ? 'bottom' : 'middle' });
      if (note) T(slide, note, { x: x + 0.1 + vw, y: y + h / 2 + 0.01, w: w - vw - 0.2, h: 0.17, fontSize: 7, color: C.gray });
      return;
    }
    T(slide, value, { x: x + 0.1, y: y + 0.06, w: w - 0.2, h: 0.3, fontSize: 15, bold: true, color });
    if (label) T(slide, label, { x: x + 0.1, y: y + 0.36, w: w - 0.2, h: 0.17, fontSize: 7.8, bold: true, color: C.ink });
    if (note) T(slide, note, { x: x + 0.1, y: y + 0.54, w: w - 0.2, h: h - 0.58, fontSize: 7, color: C.gray });
  },

  /** Remate de color al pie de una tarjeta (frase “so what”). */
  cardTakeaway(slide, x, y, w, text, color = C.orange) {
    T(slide, text, { x, y, w, h: 0.18, fontSize: 7.5, bold: true, color });
  },

  /** Viñetas compactas. items: string[] */
  bullets(slide, x, y, w, h, items, { fontSize = 7.5, color = C.ink, font = F.op } = {}) {
    T(slide, items.map((t, i) => ({ text: t, options: { bullet: { indent: fontSize * 1.4 }, breakLine: i < items.length - 1 } })),
      { x, y, w, h, fontSize, color, font, paraSpaceAfter: fontSize * 0.6 });
  },

  /** Banda de cierre con degradado a todo lo ancho (mensaje para el CEO). */
  closingBand(slide, text, note) {
    gradientBand(slide, 0, 6.95, W, 0.55);
    T(slide, text, { x: 0.45, y: 6.97, w: note ? 9.4 : 12.4, h: 0.5, fontSize: 9, bold: true, color: C.white, valign: 'middle' });
    if (note) T(slide, note, { x: 9.9, y: 6.97, w: 3.0, h: 0.5, fontSize: 6.5, color: C.white, align: 'right', valign: 'middle' });
  },

  /** Pie estándar (usar si no hay closingBand). */
  footer(slide, text, page = 1) {
    hline(slide, 0.45, 7.07, 12.43, C.line, 0.5);
    T(slide, text, { x: 0.55, y: 7.12, w: 11, h: 0.16, fontSize: 6.5, color: C.gray });
    T(slide, String(page), { x: 12.4, y: 7.12, w: 0.48, h: 0.16, fontSize: 6.5, color: C.gray, align: 'right' });
  },
};

// ═══════════════════════════════════════════════════════ PRESENTACIÓN COMPLETA
const deck = {
  /** Portada navy: eyebrow ámbar · título 38 · subtítulo · KPIs · cadena vertical opcional · audiencia. */
  cover(pres, { eyebrow, title, subtitle, kpis = [], chain = [], audience, source }) {
    const s = pres.addSlide();
    s.background = { path: asset('bg_navy.png') };
    logo(s, { x: 0.6, y: 0.35, w: 1.05, dark: true });
    const tw = chain.length ? 8.8 : 11.6;
    T(s, eyebrow.toUpperCase(), { x: 0.6, y: 1.0, w: tw, h: 0.35, font: F.deck, fontSize: 11, bold: true, color: C.amber, charSpacing: 2 });
    T(s, title, { x: 0.6, y: 1.42, w: tw, h: 1.0, font: F.deck, fontSize: 36, bold: true, color: C.white, valign: 'middle' });
    if (subtitle) T(s, subtitle, { x: 0.6, y: 2.5, w: tw - 0.4, h: 0.95, font: F.deck, fontSize: 15, color: C.white });
    kpis.slice(0, 4).forEach((k, i) => {
      const x = 0.6 + i * 2.2;
      s.addShape('roundRect', { x, y: 3.85, w: 2.0, h: 1.55, fill: { color: C.white, transparency: 90 }, line: { color: C.white, transparency: 75, width: 0.75 }, rectRadius: 0.08 });
      T(s, k.value, { x: x + 0.15, y: 3.95, w: 1.7, h: 0.75, font: F.deck, fontSize: 32, bold: true, color: C.amber, valign: 'middle' });
      T(s, k.label, { x: x + 0.15, y: 4.7, w: 1.75, h: 0.6, font: F.deck, fontSize: 10.5, color: C.white });
    });
    if (chain.length) {
      const step = Math.min(0.85, 4.6 / chain.length);
      vline(s, 10.07, 1.45, step * (chain.length - 1), '8A8CA0', 1);
      chain.forEach((c, i) => {
        const y = 1.25 + i * step;
        circle(s, 9.87, y, 0.4, SEQ_DECK[Math.round(i * (SEQ_DECK.length - 2) / Math.max(chain.length - 1, 1))], i + 1, { font: F.deck, fontSize: 11, ring: '2A2A40' });
        T(s, c, { x: 10.42, y: y - 0.02, w: 2.5, h: 0.44, font: F.deck, fontSize: 11.5, color: C.white, valign: 'middle' });
      });
    }
    if (audience) T(s, 'Para: ' + audience, { x: 0.6, y: 5.85, w: 8.6, h: 0.35, font: F.deck, fontSize: 11, color: C.white });
    if (source) T(s, source, { x: 0.6, y: 7.05, w: 11, h: 0.2, font: F.note, fontSize: 7.5, color: 'B8BACB' });
    T(s, '1', { x: 12.3, y: 7.05, w: 0.45, h: 0.2, font: F.note, fontSize: 7.5, color: 'B8BACB', align: 'right' });
    return s;
  },

  /** Lámina de contenido: eyebrow "NN · SECCIÓN" coral + título-mensaje navy 24 + pie. */
  slide(pres, { num, section, title, source, page, dark = false }) {
    const s = pres.addSlide();
    if (dark) s.background = { path: asset('bg_navy.png') }; else s.background = { color: C.white };
    const eb = (num != null ? String(num).padStart(2, '0') + ' · ' : '') + (section || '').toUpperCase();
    T(s, eb, { x: 0.6, y: 0.32, w: 10.8, h: 0.3, font: F.deck, fontSize: 10, bold: true, color: dark ? C.amber : C.coral, charSpacing: 2 });
    T(s, title, { x: 0.6, y: 0.62, w: 12.15, h: 0.75, font: F.deck, fontSize: 24, bold: true, color: dark ? C.white : C.navy, valign: 'middle' });
    logo(s, { x: 11.55, y: 6.98, w: 0.62, dark });   // logo discreto en el pie, junto al folio
    if (source) T(s, source, { x: 0.6, y: 7.05, w: 10.7, h: 0.2, font: F.note, fontSize: 7.5, color: dark ? 'B8BACB' : C.slate2 });
    if (page != null) T(s, String(page), { x: 12.3, y: 7.05, w: 0.45, h: 0.2, font: F.note, fontSize: 7.5, color: dark ? 'B8BACB' : C.slate2, align: 'right' });
    return s;
  },

  /** Divisor de sección navy (para decks > 15 láminas). */
  divider(pres, { num, section, title, page }) {
    const s = pres.addSlide();
    s.background = { path: asset('bg_navy.png') };
    T(s, String(num).padStart(2, '0'), { x: 0.6, y: 2.2, w: 3, h: 1.2, font: F.deck, fontSize: 72, bold: true, color: C.amber });
    T(s, section.toUpperCase(), { x: 0.6, y: 3.45, w: 11, h: 0.35, font: F.deck, fontSize: 12, bold: true, color: C.amber, charSpacing: 2 });
    T(s, title, { x: 0.6, y: 3.85, w: 11, h: 1.0, font: F.deck, fontSize: 28, bold: true, color: C.white });
    logo(s, { x: 11.75, y: 6.6, w: 1.0, dark: true });
    if (page != null) T(s, String(page), { x: 12.3, y: 7.05, w: 0.45, h: 0.2, font: F.note, fontSize: 7.5, color: 'B8BACB', align: 'right' });
    return s;
  },

  /** Fila icono-circular + título + cuerpo (lista de hallazgos / riesgos). iconData = dataURI png o null. */
  iconRow(slide, x, y, w, { color = C.coral, iconData, num, title, body }) {
    slide.addShape('ellipse', { x, y, w: 0.62, h: 0.62, fill: { color }, line: { type: 'none' } });
    if (iconData) slide.addImage({ data: iconData, x: x + 0.16, y: y + 0.16, w: 0.3, h: 0.3 });
    else if (num != null) T(slide, String(num), { x, y, w: 0.62, h: 0.62, font: F.deck, fontSize: 14, bold: true, color: C.white, align: 'center', valign: 'middle' });
    T(slide, title, { x: x + 0.85, y: y - 0.04, w: w - 0.85, h: 0.38, font: F.deck, fontSize: 13.5, bold: true, color: C.navy, valign: 'middle' });
    if (body) T(slide, body, { x: x + 0.85, y: y + 0.36, w: w - 0.85, h: 0.72, font: F.deck, fontSize: 11, color: C.slate });
  },

  /** Panel gris con etiqueta coral (lectura, principio, pesos). Devuelve y interior. */
  panel(slide, x, y, w, h, label, { fill = C.panel, labelColor = C.coral } = {}) {
    slide.addShape('roundRect', { x, y, w, h, fill: { color: fill }, line: { type: 'none' }, rectRadius: 0.08 });
    if (label) T(slide, label.toUpperCase(), { x: x + 0.3, y: y + 0.2, w: w - 0.6, h: 0.3, font: F.deck, fontSize: 10, bold: true, color: labelColor, charSpacing: 2 });
    return y + (label ? 0.62 : 0.25);
  },

  /** Tarjeta con pill superior (criterio, perfil, opción). */
  card(slide, x, y, w, h, { tag, tagColor = C.coral, title, body, iconData, color }) {
    slide.addShape('roundRect', { x, y, w, h, fill: { color: C.panel }, line: { type: 'none' }, rectRadius: 0.08 });
    let cy = y + 0.2;
    if (iconData || color) {
      slide.addShape('ellipse', { x: x + 0.2, y: cy, w: 0.5, h: 0.5, fill: { color: color || tagColor }, line: { type: 'none' } });
      if (iconData) slide.addImage({ data: iconData, x: x + 0.33, y: cy + 0.13, w: 0.24, h: 0.24 });
    }
    if (tag) T(slide, tag.toUpperCase(), { x: x + (iconData || color ? 0.82 : 0.2), y: cy + 0.1, w: w - 1, h: 0.3, font: F.deck, fontSize: 8, bold: true, color: tagColor, charSpacing: 1.2, valign: 'middle' });
    cy += (iconData || color || tag) ? 0.65 : 0;
    if (title) { T(slide, title, { x: x + 0.2, y: cy, w: w - 0.4, h: 0.5, font: F.deck, fontSize: 12.5, bold: true, color: C.navy }); cy += 0.52; }
    if (body) T(slide, body, { x: x + 0.2, y: cy, w: w - 0.4, h: y + h - cy - 0.15, font: F.deck, fontSize: 10, color: C.slate });
  },

  /** Cadena vertical numerada (principio / proceso) dentro de un panel. */
  chain(slide, x, y, items, { step = 0.54, highlightLast = true } = {}) {
    vline(slide, x + 0.18, y + 0.2, step * (items.length - 1), C.rule, 1);
    items.forEach((t, i) => {
      const cy = y + i * step;
      slide.addShape('ellipse', { x, y: cy, w: 0.36, h: 0.36, fill: { color: SEQ_DECK[Math.round(i * (SEQ_DECK.length - 2) / Math.max(items.length - 1, 1))] }, line: { type: 'none' } });
      T(slide, t, { x: x + 0.52, y: cy - 0.03, w: 4.4, h: 0.42, font: F.deck, fontSize: 12.5, bold: highlightLast && i === items.length - 1, color: C.navy, valign: 'middle' });
    });
    return y + step * items.length;
  },

  /** Flujo horizontal de chevrons (modelo operativo, fases). */
  chevrons(slide, x, y, w, labels, { h = 0.62, descs } = {}) {
    const n = labels.length, cw = w / n;
    labels.forEach((l, i) => {
      const col = SEQ_DECK[Math.round(i * (SEQ_DECK.length - 1) / Math.max(n - 1, 1))];
      slide.addShape(i === 0 ? 'homePlate' : 'chevron', { x: x + i * cw, y, w: cw + 0.08, h, fill: { color: col }, line: { type: 'none' } });
      T(slide, l, { x: x + i * cw + 0.18, y, w: cw - 0.28, h, font: F.deck, fontSize: 9, bold: true, color: C.white, align: 'center', valign: 'middle' });
      if (descs && descs[i]) T(slide, descs[i], { x: x + i * cw + 0.05, y: y + h + 0.12, w: cw - 0.1, h: 0.9, font: F.deck, fontSize: 8.5, color: C.slate, align: 'center' });
    });
  },

  /** Línea de tiempo horizontal (ruta de decisión / próximos pasos). */
  timeline(slide, x, y, w, items, { dark = false } = {}) {
    const n = items.length, cw = w / n;
    hline(slide, x + cw / 2, y + 0.2, w - cw, dark ? '8A8CA0' : C.rule, 1);
    items.forEach((it, i) => {
      const cx = x + i * cw + cw / 2;
      circle(slide, cx - 0.2, y, 0.4, SEQ_DECK[Math.round(i * (SEQ_DECK.length - 1) / Math.max(n - 1, 1))], i + 1, { font: F.deck });
      T(slide, it.label, { x: cx - cw / 2 + 0.05, y: y + 0.5, w: cw - 0.1, h: 0.5, font: F.deck, fontSize: 10, bold: true, color: dark ? C.white : C.navy, align: 'center' });
      if (it.date) T(slide, it.date, { x: cx - cw / 2 + 0.05, y: y + 1.0, w: cw - 0.1, h: 0.3, font: F.deck, fontSize: 9, color: C.amber, align: 'center' });
    });
  },

  /** Frase-conclusión en coral (el “so what” de la lámina). */
  takeaway(slide, x, y, w, text, { h = 0.6, color = C.coral } = {}) {
    T(slide, text, { x, y, w, h, font: F.deck, fontSize: 12, bold: true, color });
  },

  /** Tabla con estilo AM: encabezado navy, filas cebra, Century Gothic. rows[0] = encabezados. */
  table(slide, x, y, w, rows, { colW, fontSize = 9, rowH = 0.3, highlightCol } = {}) {
    const data = rows.map((r, ri) => r.map((cell, ci) => {
      const txt = typeof cell === 'object' && cell !== null ? cell.text : String(cell);
      const extra = typeof cell === 'object' && cell !== null ? cell.options || {} : {};
      return {
        text: txt, options: Object.assign({
          fontFace: F.deck, fontSize: ri === 0 ? fontSize - 0.5 : fontSize, bold: ri === 0 || ci === 0,
          color: ri === 0 ? C.white : C.navy,
          fill: { color: ri === 0 ? C.navy : (highlightCol === ci ? C.peach : (ri % 2 ? C.white : C.panel)) },
          valign: 'middle', margin: [2, 5, 2, 5],
        }, extra),
      };
    }));
    slide.addTable(data, { x, y, w, colW, rowH, border: { type: 'solid', color: C.rule, pt: 0.5 } });
  },

  /** Viñetas en Century Gothic (lectura de gráficas, hallazgos). */
  bullets(slide, x, y, w, h, items, { fontSize = 11, color = C.navy } = {}) {
    op.bullets(slide, x, y, w, h, items, { fontSize, color, font: F.deck });
  },

  /** Opciones por defecto para addChart con paleta AM. */
  chartOpts(extra = {}) {
    return Object.assign({
      chartColors: [C.coral, C.amber, C.plum, C.steel, C.pink, C.violet],
      catAxisLabelColor: C.navy, valAxisLabelColor: C.slate2, catAxisLabelFontFace: F.deck, valAxisLabelFontFace: F.deck,
      catAxisLabelFontSize: 9, valAxisLabelFontSize: 8, valGridLine: { color: 'E6E7F0', size: 0.5 }, catGridLine: { style: 'none' },
      showValue: true, dataLabelFormatCode: '0.0', dataLabelColor: C.white, dataLabelFontFace: F.deck, dataLabelFontSize: 8, dataLabelFontBold: true,
      showLegend: false, legendFontFace: F.deck, legendFontSize: 8.5,
    }, extra);
  },

  /** Cierre navy: decisiones / próximos pasos en tarjetas translúcidas. */
  closing(pres, { num, section = 'Próximos pasos', title, items = [], note, page }) {
    const s = deck.slide(pres, { num, section, title, dark: true, page, source: note });
    items.slice(0, 6).forEach((it, i) => {
      const col = i % 2, row = Math.floor(i / 2), x = 0.6 + col * 6.1, y = 2.0 + row * 1.5;
      s.addShape('roundRect', { x, y, w: 5.9, h: 1.3, fill: { color: C.white, transparency: 90 }, line: { color: C.white, transparency: 80, width: 0.5 }, rectRadius: 0.06 });
      circle(s, x + 0.2, y + 0.22, 0.4, SEQ_DECK[i * 2 % SEQ_DECK.length], i + 1, { font: F.deck });
      T(s, it.title, { x: x + 0.8, y: y + 0.18, w: 4.9, h: 0.45, font: F.deck, fontSize: 12, bold: true, color: C.white, valign: 'middle' });
      if (it.body) T(s, it.body, { x: x + 0.8, y: y + 0.62, w: 4.9, h: 0.6, font: F.deck, fontSize: 9.5, color: 'D6D8EA' });
    });
    return s;
  },
};

// ─────────────────────────────────────────────────────────────── ICONOS
/** Devuelve dataURI PNG de un icono react-icons (p. ej. ('fa','FaUserClock','FFFFFF')). */
async function icon(lib, name, color = 'FFFFFF', size = 256) {
  const React = require('react');
  const RDS = require('react-dom/server');
  const sharp = require('sharp');
  const mod = require('react-icons/' + lib);
  const Comp = mod[name];
  if (!Comp) throw new Error(`Icono no encontrado: react-icons/${lib} ${name}`);
  const svg = RDS.renderToStaticMarkup(React.createElement(Comp, { color: '#' + color, size }));
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  return 'image/png;base64,' + buf.toString('base64');
}

module.exports = { C, F, W, H, SEQ_OP, SEQ_DECK, STATUS, ILUO, asset, newPres, T, rect, circle, hline, vline, pill, gradientBand, logo, porConfirmar, icon, op, deck };
