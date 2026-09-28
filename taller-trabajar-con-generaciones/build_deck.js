// Presentación del taller "Trabajar con distintas generaciones" — Estándar AMMX + diseño gráfico editorial.
// Narrativa: El reto → 1 ¿Cómo reacciono? → 2 ¿Qué impacto tiene? → 3 ¿Qué valora cada generación? → 4 ¿Cómo trabajo mejor? → Cierre
const path = require('path');
const LIB = path.join(__dirname, '..', 'workshop-liderazgo-intergeneracional', 'src');
const AM = require(path.join(LIB, 'am_brand.js'));
const { C, F, T, deck } = AM;
const OUT = path.join(__dirname, 'entregables', '00_Presentacion_Taller_Generaciones_AMMX.pptx');

const GEN = [
  { n: 'Baby Boomers', y: '1946–1964', c: C.amber, from: 1946, to: 1964 },
  { n: 'Generación X', y: '1965–1980', c: C.coral, from: 1965, to: 1980 },
  { n: 'Millennials', y: '1981–1996', c: C.berry, from: 1981, to: 1996 },
  { n: 'Generación Z', y: '1997–2012', c: C.violet, from: 1997, to: 2012 },
];
const MOD = [
  { n: 1, t: '¿Cómo reacciono?', c: C.amber, min: 40 },
  { n: 2, t: '¿Qué impacto tiene?', c: C.coral, min: 30 },
  { n: 3, t: '¿Qué valora cada generación?', c: C.berry, min: 35 },
  { n: 4, t: '¿Cómo trabajo mejor?', c: C.violet, min: 45 },
];

// ── utilidades gráficas
const shape = (s, type, x, y, w, h, fill, o = {}) => s.addShape(type, Object.assign({ x, y, w, h, fill: { color: fill, transparency: o.tr || 0 }, line: o.line ? { color: o.line, width: o.lw || 1 } : { type: 'none' } }, o.extra || {}));
const arrow = (s, x1, y1, x2, y2, color = C.slate2, w = 1.5, dash) => s.addShape('line', { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(x2 - x1) || 0.001, h: Math.abs(y2 - y1) || 0.001, flipH: x2 < x1, flipV: y2 < y1, line: { color, width: w, endArrowType: 'triangle', dashType: dash || 'solid' } });
const txt = (s, t, x, y, w, h, o = {}) => T(s, t, Object.assign({ x, y, w, h, font: F.deck, color: C.navy, fontSize: 12 }, o));
const notes = (s, como, cerrar, tiempo) => s.addNotes(`CÓMO EXPLICARLA\n${tiempo ? 'TIEMPO: ' + tiempo + '\n' : ''}${como}\n\nPUNTOS A CERRAR\n${cerrar}`);
const iconIn = async (s, lib, name, x, y, d, bg, color = 'FFFFFF') => { shape(s, 'ellipse', x, y, d, d, bg); const data = await AM.icon(lib, name, color); s.addImage({ data, x: x + d * 0.25, y: y + d * 0.25, w: d * 0.5, h: d * 0.5 }); };
const modTag = (s, m) => { shape(s, 'roundRect', 10.55, 0.3, 2.2, 0.34, m.c, { extra: { rectRadius: 0.17 } }); txt(s, `MÓDULO ${m.n} · ${m.min} MIN`, 10.55, 0.3, 2.2, 0.34, { fontSize: 8.5, bold: true, color: C.white, align: 'center', valign: 'middle', charSpacing: 1.5 }); };

(async () => {
  const pres = AM.newPres({ title: 'Trabajar con distintas generaciones' });
  let page = 1;
  const S = (o) => deck.slide(pres, Object.assign({ page: ++page }, o));

  // 1 · PORTADA ──────────────────────────────────────────────────────────
  const s1 = deck.cover(pres, {
    eyebrow: 'Taller para líderes · 3 horas',
    title: 'Trabajar entre generaciones',
    subtitle: 'Cómo reacciono, qué impacto tiene, qué valora cada generación y cómo trabajar mejor juntos',
    kpis: [{ value: '4', label: 'generaciones en la misma planta' }, { value: '4', label: 'módulos prácticos' }, { value: '7', label: 'actividades' }, { value: '1', label: 'plan personal de 30 días' }],
    chain: MOD.map((m) => m.t),
    audience: 'Líderes con equipo a cargo · ArcelorMittal México',
    source: 'Gerencia de Capacitación y Desarrollo · Patrocina: CHRO',
  });
  notes(s1, 'Pantalla de bienvenida mientras llegan los participantes. La CHRO abre con 2 minutos: por qué esto importa al negocio (relevo en posiciones críticas, conocimiento que se jubila, retención del talento joven).', 'Que la sala sepa que es un taller práctico, no una clase.', 'Previo y 0:00–0:02');

  // 2 · EL RETO: línea de tiempo ─────────────────────────────────────────
  const s2 = S({ num: 0, section: 'El reto', title: 'Hoy trabajan cuatro generaciones en la misma planta', source: 'Rangos de Pew Research Center (convención; varían por país). Años de entrada al trabajo aproximados.' });
  const X0 = 0.9, X1 = 12.4, yr = (y) => X0 + ((y - 1946) / (2026 - 1946)) * (X1 - X0);
  // eje
  AM.hline(s2, X0, 4.35, X1 - X0, C.rule, 1.5);
  [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020].forEach((y) => { AM.vline(s2, yr(y), 4.3, 0.1, C.slate2, 1); txt(s2, String(y), yr(y) - 0.35, 4.45, 0.7, 0.25, { fontSize: 8.5, color: C.slate2, align: 'center' }); });
  GEN.forEach((g, i) => {
    const x = yr(g.from), w = yr(g.to + 1) - x;
    shape(s2, 'roundRect', x, 3.55 - i * 0.02, w, 0.6, g.c, { extra: { rectRadius: 0.08 } });
    txt(s2, g.n, x, 3.55, w, 0.6, { fontSize: 11, bold: true, color: C.white, align: 'center', valign: 'middle' });
    // entrada al trabajo (≈ +20 años)
    const ex = yr(g.from + 20);
    arrow(s2, x + w / 2, 3.5, ex, 2.35, g.c, 1.25, 'dash');
    shape(s2, 'ellipse', ex - 0.09, 2.18, 0.18, 0.18, g.c);
  });
  const ctxs = [['Entraron con empleo estable', 'Carrera en una sola empresa'], ['Entraron entre crisis', 'Apertura y privatizaciones'], ['Entraron sin garantías', 'Crisis de 2008 y smartphone'], ['Entraron con pandemia e IA', 'Trabajo a distancia']];
  GEN.forEach((g, i) => { const ex = yr(g.from + 20); txt(s2, ctxs[i][0], ex - 1.15, 1.55, 2.3, 0.3, { fontSize: 10, bold: true, color: g.c, align: 'center' }); txt(s2, ctxs[i][1], ex - 1.35, 1.83, 2.7, 0.3, { fontSize: 9, color: C.slate, align: 'center' }); });
  txt(s2, 'NACIMIENTO', X0, 3.05, 2, 0.3, { fontSize: 8.5, bold: true, color: C.slate2, charSpacing: 2 });
  txt(s2, 'ENTRADA AL TRABAJO', X0, 2.12, 2.4, 0.3, { fontSize: 8.5, bold: true, color: C.slate2, charSpacing: 2 });
  shape(s2, 'roundRect', 0.6, 5.2, 12.15, 1.35, C.panel, { extra: { rectRadius: 0.08 } });
  txt(s2, 'Cada generación aprendió a trabajar en un mundo distinto. Por eso a veces nos cuesta entendernos: no es mala voluntad, es contexto.', 0.95, 5.3, 11.5, 1.15, { fontSize: 15, bold: true, valign: 'middle' });
  notes(s2, 'Recorrer la línea de izquierda a derecha: cuándo nacieron y a qué mundo entraron a trabajar. No describir personas; describir contextos.', 'Mensaje: lo que nos separa es el contexto en el que aprendimos a trabajar, no la calidad de las personas.', '0:02–0:04');

  // 3 · LA PREGUNTA ─────────────────────────────────────────────────────
  const s3 = pres.addSlide(); s3.background = { path: AM.asset('bg_navy.png') };
  txt(s3, '00 · EL RETO', 0.6, 0.32, 6, 0.3, { fontSize: 10, bold: true, color: C.amber, charSpacing: 2 });
  shape(s3, 'roundRect', 0.6, 1.5, 5.6, 3.6, C.white, { tr: 92, line: 'FFFFFF', lw: 0.5, extra: { rectRadius: 0.1 } });
  txt(s3, 'LA PREGUNTA DE SIEMPRE', 0.95, 1.8, 5, 0.3, { fontSize: 9, bold: true, color: 'B8BACB', charSpacing: 2 });
  txt(s3, '“¿Qué les pasa a estas nuevas generaciones?”', 0.95, 2.2, 5, 2.4, { fontSize: 26, bold: true, color: 'D6D8EA' });
  shape(s3, 'rightArrow', 6.4, 2.9, 0.75, 0.8, C.amber);
  shape(s3, 'roundRect', 7.35, 1.5, 5.4, 3.6, C.amber, { extra: { rectRadius: 0.1 } });
  txt(s3, 'LA PREGUNTA DE HOY', 7.7, 1.8, 5, 0.3, { fontSize: 9, bold: true, color: C.navy, charSpacing: 2 });
  txt(s3, '“¿Cómo reacciono yo, y cómo puedo trabajar mejor con cada persona?”', 7.7, 2.2, 4.8, 2.6, { fontSize: 24, bold: true, color: C.navy });
  txt(s3, 'Hoy no venimos a cambiar a nadie más. Venimos a ver nuestras reacciones y a llevarnos prácticas que funcionan.', 0.6, 5.55, 12, 0.9, { fontSize: 15, color: C.white });
  AM.logo(s3, { x: 11.55, y: 6.98, w: 0.62, dark: true }); txt(s3, String(++page), 12.3, 7.05, 0.45, 0.2, { font: F.note, fontSize: 7.5, color: 'B8BACB', align: 'right' });
  notes(s3, 'A lee la pregunta de siempre sin juzgarla: "Todos la hemos escuchado; algunos la hemos dicho". Después, la pregunta de hoy.', 'El foco pasa de "ellos" a "yo como líder".', '0:04–0:06');

  // 4 · EL RECORRIDO ────────────────────────────────────────────────────
  const s4 = S({ num: 0, section: 'El recorrido de hoy', title: 'Cuatro preguntas, de lo personal a lo práctico' });
  // camino
  s4.addShape('line', { x: 0.6 + 1.52, y: 2.35, w: 3 * 3.08, h: 0, line: { color: C.rule, width: 8 } });
  MOD.forEach((m, i) => {
    const x = 0.6 + i * 3.08, cx = x + 1.45;
    shape(s4, 'ellipse', cx - 0.5, 1.85, 1.0, 1.0, m.c, { line: 'FFFFFF', lw: 4 });
    txt(s4, String(m.n), cx - 0.5, 1.85, 1.0, 1.0, { fontSize: 26, bold: true, color: C.white, align: 'center', valign: 'middle' });
    shape(s4, 'roundRect', cx - 0.5, 3.0, 1.0, 0.3, m.c, { tr: 85, extra: { rectRadius: 0.15 } });
    txt(s4, `${m.min} min`, cx - 0.5, 3.0, 1.0, 0.3, { fontSize: 9.5, bold: true, color: m.c, align: 'center', valign: 'middle' });
    txt(s4, m.t, x, 3.5, 2.9, 0.75, { fontSize: 15, bold: true, align: 'center', valign: 'top' });
    txt(s4, ['Me doy cuenta de mis reacciones', 'Veo lo que provocan en la persona y en el equipo', 'Entiendo el contexto y lo que nos importa a todos', 'Me llevo prácticas, casos y un plan'][i], x + 0.1, 4.3, 2.7, 0.8, { fontSize: 11, color: C.slate, align: 'center', valign: 'top' });
  });
  shape(s4, 'roundRect', 0.6, 5.5, 12.15, 0.8, C.panel, { extra: { rectRadius: 0.08 } });
  txt(s4, '70 % actividades y conversación · 30 % contenido · Al final: un plan personal para los próximos 30 días', 0.9, 5.5, 11.6, 0.8, { fontSize: 13, bold: true, valign: 'middle', align: 'center' });
  notes(s4, 'El mapa de la sesión: de lo personal (mis reacciones) a lo práctico (qué hago distinto). Mencionar que casi todo es actividad.', 'Tres acuerdos en la siguiente lámina.', '0:06–0:08');

  // 5 · ACUERDOS ────────────────────────────────────────────────────────
  const s5 = S({ num: 0, section: 'Acuerdos', title: 'Tres acuerdos para hablar con confianza' });
  const ac = [['fa', 'FaUserSecret', 'Se usa, no se atribuye', 'Lo que se dice aquí se puede aprovechar, pero nadie lo atribuye a una persona.'], ['fa', 'FaComments', 'Se vale no estar de acuerdo', 'Con los datos, con los facilitadores y entre nosotros.'], ['fa', 'FaHandPaper', 'Puedo pasar', 'Nadie está obligado a compartir. Lo que escribo en mi cuaderno es mío.']];
  for (let i = 0; i < 3; i++) {
    const x = 0.6 + i * 4.1;
    shape(s5, 'roundRect', x, 1.8, 3.85, 3.9, C.panel, { extra: { rectRadius: 0.1 } });
    await iconIn(s5, ac[i][0], ac[i][1], x + 1.42, 2.15, 1.0, AM.SEQ_DECK[i * 3]);
    txt(s5, ac[i][2], x + 0.25, 3.35, 3.35, 0.5, { fontSize: 16, bold: true, align: 'center' });
    txt(s5, ac[i][3], x + 0.3, 3.95, 3.25, 1.2, { fontSize: 12, color: C.slate, align: 'center' });
  }
  txt(s5, 'Aplica a todas las personas en la sala, incluida la dirección.', 0.6, 6.0, 12, 0.5, { fontSize: 13, bold: true, color: C.coral, align: 'center' });
  notes(s5, 'La CHRO confirma con una frase que está de acuerdo. Teléfonos boca abajo.', 'Pasar al Módulo 1.', '0:08–0:10');

  // 6 · DIVISOR M1 ──────────────────────────────────────────────────────
  const divider = (m, title, sub) => {
    const s = pres.addSlide(); s.background = { path: AM.asset('bg_navy.png') };
    shape(s, 'ellipse', 0.6, 1.9, 1.5, 1.5, m.c); txt(s, String(m.n), 0.6, 1.9, 1.5, 1.5, { fontSize: 54, bold: true, color: C.white, align: 'center', valign: 'middle' });
    txt(s, `MÓDULO ${m.n} · ${m.min} MINUTOS`, 2.45, 2.0, 8, 0.35, { fontSize: 12, bold: true, color: C.amber, charSpacing: 2 });
    const tl = title.length > 34 ? 2 : 1;
    txt(s, title, 2.45, 2.4, 10.3, 0.7 * tl, { fontSize: 36, bold: true, color: C.white, valign: 'top' });
    txt(s, sub, 2.45, 2.55 + 0.7 * tl, 9.5, 0.9, { fontSize: 16, color: 'D6D8EA' });
    MOD.forEach((mm, i) => { shape(s, 'roundRect', 0.6 + i * 3.08, 5.6, 2.9, 0.12, mm.n === m.n ? mm.c : '3A3A55'); txt(s, mm.t, 0.6 + i * 3.08, 5.8, 2.9, 0.4, { fontSize: 10, bold: mm.n === m.n, color: mm.n === m.n ? C.white : '8A8CA0' }); });
    AM.logo(s, { x: 11.55, y: 6.98, w: 0.62, dark: true }); txt(s, String(++page), 12.3, 7.05, 0.45, 0.2, { font: F.note, fontSize: 7.5, color: 'B8BACB', align: 'right' });
    return s;
  };
  notes(divider(MOD[0], '¿Cómo reacciono?', 'Antes de hablar de generaciones, miramos nuestras propias reacciones.'), 'Transición al primer módulo. B toma la conducción.', 'Nadie recibe una etiqueta: el resultado es solo para cada quien.');

  // 7 · ACTIVIDAD 1: MI PRIMERA REACCIÓN ────────────────────────────────
  const s7 = S({ num: 1, section: 'Actividad 1 · Mi primera reacción', title: 'Ocho situaciones. Escribe tu primera reacción, no la ideal' });
  modTag(s7, MOD[0]);
  const sit = [['FaUserTie', 'Pide ser jefa de turno a los 14 meses'], ['FaTabletAlt', 'Un experto no quiere usar la tableta'], ['FaQuestion', 'Pregunta “¿por qué?” a cada instrucción'], ['FaHome', 'Pide trabajar desde casa dos días'],
    ['FaHistory', '“Eso ya lo intentamos y no funcionó”'], ['FaMoon', 'No contesta mensajes después de las 7 p.m.'], ['FaChartLine', 'Pregunta “¿cómo voy?” cada semana'], ['FaUserClock', '“Ya nadie me pregunta nada”']];
  for (let i = 0; i < 8; i++) {
    const col = i % 4, row = Math.floor(i / 4), x = 0.6 + col * 2.35, y = 1.75 + row * 2.05;
    shape(s7, 'roundRect', x, y, 2.2, 1.85, C.panel, { extra: { rectRadius: 0.08 } });
    await iconIn(s7, 'fa', sit[i][0], x + 0.2, y + 0.2, 0.6, AM.SEQ_DECK[i]);
    txt(s7, String(i + 1), x + 1.7, y + 0.2, 0.35, 0.35, { fontSize: 14, bold: true, color: C.slate2, align: 'right' });
    txt(s7, sit[i][1], x + 0.2, y + 0.9, 1.85, 0.85, { fontSize: 11, bold: true });
  }
  // escala
  shape(s7, 'roundRect', 10.2, 1.75, 2.55, 3.95, C.navy, { extra: { rectRadius: 0.08 } });
  txt(s7, '¿QUÉ TANTO ME INCOMODA?', 10.4, 1.95, 2.2, 0.5, { fontSize: 9, bold: true, color: C.amber, charSpacing: 1.2 });
  ['Nada', 'Poco', 'Bastante', 'Mucho'].forEach((l, i) => { shape(s7, 'ellipse', 10.45, 2.6 + i * 0.72, 0.5, 0.5, AM.SEQ_DECK[i * 2]); txt(s7, String(i + 1), 10.45, 2.6 + i * 0.72, 0.5, 0.5, { fontSize: 13, bold: true, color: C.white, align: 'center', valign: 'middle' }); txt(s7, l, 11.1, 2.6 + i * 0.72, 1.5, 0.5, { fontSize: 12, color: C.white, valign: 'middle' }); });
  txt(s7, '8 min individual · 5 min en pares: ¿qué descubrí de mí?', 0.6, 6.0, 12.1, 0.5, { fontSize: 13, bold: true, color: C.coral });
  notes(s7, 'B: "Lean las ocho situaciones del cuaderno. Escriban lo primero que harían o pensarían, no lo ideal. Marquen qué tanto les incomoda, de 1 a 4. Nadie va a ver sus respuestas."', 'Después, cada quien encierra las que marcó con 3 o 4: "¿Qué tienen en común?". Pares: "¿Qué descubrí de mí?".', '0:10–0:30');

  // 8 · MI PERFIL (mapa de detonadores) ─────────────────────────────────
  const s8 = S({ num: 1, section: 'Actividad 1 · Mi perfil', title: 'Mis detonadores: lo que más me incomoda dice mucho de mí' });
  modTag(s8, MOD[0]);
  // gradiente de calor
  const heat = [C.steelT, 'F8D4C0', C.amber, C.coral];
  heat.forEach((h, i) => { shape(s8, 'rect', 0.9 + i * 1.6, 2.3, 1.6, 0.55, h); txt(s8, String(i + 1), 0.9 + i * 1.6, 2.3, 1.6, 0.55, { fontSize: 16, bold: true, color: i > 1 ? C.white : C.navy, align: 'center', valign: 'middle' }); });
  txt(s8, 'Me incomoda poco', 0.9, 2.95, 3, 0.3, { fontSize: 10, color: C.slate }); txt(s8, 'Me detona', 4.9, 2.95, 2.3, 0.3, { fontSize: 10, bold: true, color: C.coral, align: 'right' });
  shape(s8, 'roundRect', 4.1, 1.75, 3.2, 0.4, C.coral, { tr: 85, extra: { rectRadius: 0.2 } }); txt(s8, 'Aquí están mis detonadores', 4.1, 1.75, 3.2, 0.4, { fontSize: 10, bold: true, color: C.coral, align: 'center', valign: 'middle' });
  const qs = ['¿Qué tienen en común las situaciones que marqué con 3 o 4?', '¿Me incomoda la conducta… o lo que creo que significa?', '¿Me pasa más con personas mayores, más jóvenes o con ambas?'];
  qs.forEach((q, i) => { shape(s8, 'ellipse', 0.9, 3.65 + i * 0.95, 0.5, 0.5, C.navy); txt(s8, String(i + 1), 0.9, 3.65 + i * 0.95, 0.5, 0.5, { fontSize: 13, bold: true, color: C.white, align: 'center', valign: 'middle' }); txt(s8, q, 1.6, 3.62 + i * 0.95, 5.7, 0.6, { fontSize: 13.5, valign: 'middle' }); });
  const p8 = deck.panel(s8, 7.9, 1.75, 4.85, 4.95, 'Lo que esto no es');
  deck.bullets(s8, 8.2, p8, 4.3, 3.9, ['No es una prueba ni mide personalidad.', 'No tiene relación con tu edad.', 'No se entrega ni se compara con nadie.', 'Es una foto de hoy: sirve para liderar mejor mañana.'], { fontSize: 13 });
  notes(s8, 'Cada líder identifica sus detonadores. Normalizar: "Todos los tenemos; no es bueno ni malo, es información."', 'Conectar con la siguiente actividad: ¿cuánto de lo que nos incomoda viene de lo que creemos de cada generación?');

  // 9 · ACTIVIDAD 2: EL MURO ────────────────────────────────────────────
  const s9 = S({ num: 1, section: 'Actividad 2 · El muro de las generaciones', title: '¿A qué generación pertenece cada frase?' });
  modTag(s9, MOD[0]);
  GEN.forEach((g, i) => {
    const x = 0.6 + i * 2.35;
    shape(s9, 'rect', x, 1.75, 2.15, 3.6, 'EEEFF3', { line: C.rule, lw: 0.75 });
    shape(s9, 'rect', x, 1.75, 2.15, 0.55, g.c);
    txt(s9, g.n, x, 1.75, 2.15, 0.55, { fontSize: 11.5, bold: true, color: C.white, align: 'center', valign: 'middle' });
    [0, 1, 2].slice(0, [3, 2, 3, 3][i]).forEach((k) => shape(s9, 'rect', x + 0.2 + (k % 2) * 0.9, 2.5 + k * 0.9, 1.1, 0.7, C.white, { line: C.rule, extra: { rotate: (k - 1) * 4 } }));
  });
  const p9 = deck.panel(s9, 10.1, 1.75, 2.65, 3.6, 'Las frases');
  txt(s9, '“Quiero estabilidad”\n“Quiero que reconozcan lo que aporto”\n“Quiero crecer”\n“Necesito entender el porqué”\n“Quiero flexibilidad”\n… y 7 más', 10.35, p9, 2.3, 2.8, { fontSize: 10, color: C.navy, lineSpacingMultiple: 1.25 });
  deck.chevrons(s9, 0.6, 5.65, 12.05, ['Colocar en silencio · 5 min', 'Observar el muro · 3 min', 'Revelación · 7 min', 'Conversación · 5 min'], { h: 0.6 });
  notes(s9, 'B: "Coloquen cada frase en la generación a la que ustedes la atribuirían. En silencio." Luego: "¿Dónde se juntaron más tarjetas?".', 'La revelación está en la siguiente lámina; no anticiparla.', '0:30–0:50');

  // 10 · REVELACIÓN: convergencia ───────────────────────────────────────
  const s10 = S({ num: 1, section: 'Actividad 2 · La revelación', title: '¿Estamos describiendo generaciones… o personas?' });
  modTag(s10, MOD[0]);
  GEN.forEach((g, i) => {
    const y = 1.75 + i * 1.2;
    shape(s10, 'roundRect', 0.6, y, 2.6, 0.9, g.c, { extra: { rectRadius: 0.08 } });
    txt(s10, g.n, 0.6, y, 2.6, 0.9, { fontSize: 13, bold: true, color: C.white, align: 'center', valign: 'middle' });
    arrow(s10, 3.3, y + 0.45, 6.05, 3.95, g.c, 2);
  });
  shape(s10, 'ellipse', 6.1, 2.1, 3.7, 3.7, C.navy);
  txt(s10, 'Lo que\nvaloramos\ntodos', 6.1, 2.1, 3.7, 3.7, { fontSize: 24, bold: true, color: C.white, align: 'center', valign: 'middle' });
  const common = ['Estabilidad', 'Reconocimiento', 'Crecimiento', 'Respeto', 'Un buen jefe', 'Sentido'];
  common.forEach((c, i) => { const a = -Math.PI / 2 + (i / common.length) * Math.PI * 2, cx = 7.95 + Math.cos(a) * 2.45, cy = 3.95 + Math.sin(a) * 2.2; shape(s10, 'roundRect', Math.max(cx - 0.9, 6.2) + (cx > 9 ? 1.2 : 0), cy - 0.2, 1.8, 0.4, C.peach, { extra: { rectRadius: 0.2 } }); txt(s10, c, Math.max(cx - 0.9, 6.2) + (cx > 9 ? 1.2 : 0), cy - 0.2, 1.8, 0.4, { fontSize: 10, bold: true, align: 'center', valign: 'middle' }); });
  const p10 = deck.panel(s10, 10.3, 1.75, 2.45, 4.9, 'Pregunta a la sala');
  txt(s10, '“¿Quién en esta sala se identifica con esta frase?”\n\nLas manos se levantan en todas las edades.', 10.55, p10, 2.0, 3.6, { fontSize: 12, bold: true });
  notes(s10, 'B lee cinco frases y pregunta quién se identifica. Luego pasa las tarjetas al póster central. Pregunta clave: "¿Estamos describiendo generaciones o personas?". Pausa de 5 segundos.', 'Mensaje del módulo: mis reacciones dicen tanto de mí como de la otra persona.');

  // 11 · DIVISOR M2 ─────────────────────────────────────────────────────
  notes(divider(MOD[1], '¿Qué impacto tiene mi reacción?', 'Una reacción dura segundos. Su efecto en la persona y en el equipo puede durar meses.'), 'Transición. A toma la conducción.', 'Receso a la 1:20.');

  // 12 · LA CADENA DE LA REACCIÓN ───────────────────────────────────────
  const s12 = S({ num: 2, section: 'Actividad 3 · La cadena de la reacción', title: 'Una reacción de segundos se vuelve un resultado de equipo' });
  modTag(s12, MOD[1]);
  const chain = [['Situación', 'Un colaborador nuevo pregunta “¿por qué?”', 'FaBolt'], ['Mi reacción', '“Porque así se hace aquí.”', 'FaCommentSlash'], ['Lo que entiende', '“Mis preguntas molestan.”', 'FaBrain'], ['Lo que hace', 'Deja de preguntar y de proponer', 'FaVolumeMute'], ['En el equipo', 'Se pierden ideas y errores que nadie advierte', 'FaUsers']];
  for (let i = 0; i < 5; i++) {
    const x = 0.6 + i * 2.4, col = AM.SEQ_DECK[Math.min(i * 2, 7)];
    s12.addShape(i === 0 ? 'homePlate' : 'chevron', { x, y: 1.8, w: 2.47, h: 0.75, fill: { color: col }, line: { type: 'none' } });
    txt(s12, chain[i][0], x + (i ? 0.3 : 0.12), 1.8, 1.95, 0.75, { fontSize: 11.5, bold: true, color: C.white, align: 'center', valign: 'middle' });
    await iconIn(s12, 'fa', chain[i][2], x + 0.86, 2.8, 0.75, C.panel, col);
    txt(s12, chain[i][1], x + 0.1, 3.7, 2.2, 1.0, { fontSize: 12, bold: true, align: 'center' });
  }
  shape(s12, 'roundRect', 0.6, 4.95, 12.15, 1.7, C.panel, { extra: { rectRadius: 0.08 } });
  txt(s12, 'EN PARES · 8 MIN', 0.9, 5.1, 4, 0.3, { fontSize: 9, bold: true, color: C.coral, charSpacing: 2 });
  txt(s12, 'Toma la situación que más te incomodó en la Actividad 1 y llena tu propia cadena en el cuaderno.\n¿En qué eslabón podría haber cambiado el resultado?', 0.9, 5.45, 11.6, 1.1, { fontSize: 14, bold: true });
  notes(s12, 'A recorre el ejemplo de izquierda a derecha (3 min). Después, pares (8 min) y dos o tres voces en plenaria (4 min).', 'La pregunta clave: ¿en qué eslabón podría haber cambiado el resultado? Casi siempre es en "mi reacción".', '0:50–1:05');

  // 13 · EL ICEBERG ─────────────────────────────────────────────────────
  const s13 = S({ num: 2, section: 'Lo que no se ve', title: 'Lo que ves es mi reacción; lo que la provoca está abajo' });
  modTag(s13, MOD[1]);
  shape(s13, 'rect', 0.6, 3.05, 7.1, 3.75, 'DCE6F7');
  shape(s13, 'rect', 0.6, 1.7, 7.1, 1.35, 'F4F7FC');
  s13.addShape('line', { x: 0.6, y: 3.05, w: 7.1, h: 0, line: { color: C.steel, width: 2 } });
  shape(s13, 'triangle', 2.85, 1.85, 2.6, 1.2, C.white, { line: C.steel, lw: 1.5 });
  s13.addShape('trapezoid', { x: 1.35, y: 3.05, w: 5.6, h: 3.55, fill: { color: C.navy }, line: { type: 'none' }, flipV: true });
  txt(s13, 'Mi reacción', 2.85, 2.35, 2.6, 0.6, { fontSize: 12, bold: true, align: 'center', valign: 'middle' });
  ['Mis supuestos: “así son ellos”', 'Mi experiencia: “a mí nadie me explicaba”', 'Mis emociones: sentir que se cuestiona mi autoridad', 'Mis valores: cómo aprendí lo que es “compromiso”'].forEach((t, i) => txt(s13, t, 4.15 - (2.45 - i * 0.3), 3.3 + i * 0.75, 2 * (2.45 - i * 0.3), 0.6, { fontSize: 11.5, bold: i === 0, color: C.white, align: 'center', valign: 'middle' }));
  txt(s13, 'LO QUE SE VE', 0.8, 1.8, 2, 0.3, { fontSize: 8.5, bold: true, color: C.steel, charSpacing: 1.5 });
  txt(s13, 'LO QUE\nNO SE VE', 0.8, 6.2, 1.2, 0.5, { fontSize: 8.5, bold: true, color: C.steel, charSpacing: 1.5 });
  const p13 = deck.panel(s13, 8.1, 1.7, 4.65, 5.1, 'Para liderar mejor');
  deck.bullets(s13, 8.4, p13, 4.1, 3.2, ['Antes de reaccionar, identifica qué supuesto hay debajo.', 'Pregunta: ¿qué sé de esta persona y qué estoy imaginando?', 'Separa la conducta (lo que hizo) de la interpretación (lo que creo que significa).'], { fontSize: 13 });
  deck.takeaway(s13, 8.4, 5.45, 4.1, 'Cambiar lo de abajo cambia lo de arriba.', { h: 0.6 });
  notes(s13, 'Explicar el iceberg en 2 minutos: arriba, la reacción que ve la persona; abajo, lo que la provoca. Usar un ejemplo de la sala.', 'Puente a la siguiente actividad: practicar responder en lugar de reaccionar.');

  // 14 · DOS RESPUESTAS ─────────────────────────────────────────────────
  const s14 = S({ num: 2, section: 'Actividad 4 · Dos respuestas', title: 'Entre lo que pasa y lo que respondo, hay un espacio' });
  modTag(s14, MOD[1]);
  shape(s14, 'roundRect', 0.6, 1.75, 1.9, 1.3, C.panel, { extra: { rectRadius: 0.08 } }); txt(s14, 'Lo que pasa', 0.6, 1.75, 1.9, 1.3, { fontSize: 13, bold: true, align: 'center', valign: 'middle' });
  // ruta de reacción (arriba)
  arrow(s14, 2.6, 2.1, 6.0, 1.95, C.slate2, 2.5);
  shape(s14, 'roundRect', 6.1, 1.6, 3.0, 0.9, 'EEEFF3', { extra: { rectRadius: 0.08 } }); txt(s14, 'Reacciono en automático', 6.1, 1.6, 3.0, 0.9, { fontSize: 12, bold: true, color: C.slate, align: 'center', valign: 'middle' });
  arrow(s14, 9.2, 2.05, 10.0, 2.05, C.slate2, 2); txt(s14, 'La persona se cierra', 10.1, 1.6, 2.65, 0.9, { fontSize: 12, color: C.slate, valign: 'middle' });
  // ruta de respuesta (abajo)
  arrow(s14, 2.6, 2.75, 3.4, 3.65, C.coral, 2.5);
  shape(s14, 'ellipse', 3.45, 3.25, 1.5, 1.5, C.amber); txt(s14, 'Pausa y\npregunta', 3.45, 3.25, 1.5, 1.5, { fontSize: 12, bold: true, color: C.white, align: 'center', valign: 'middle' });
  arrow(s14, 5.0, 4.0, 6.0, 4.0, C.coral, 2.5);
  shape(s14, 'roundRect', 6.1, 3.55, 3.0, 0.9, C.coral, { extra: { rectRadius: 0.08 } }); txt(s14, 'Respondo con intención', 6.1, 3.55, 3.0, 0.9, { fontSize: 12, bold: true, color: C.white, align: 'center', valign: 'middle' });
  arrow(s14, 9.2, 4.0, 10.0, 4.0, C.coral, 2); txt(s14, 'La persona se abre; el estándar se mantiene', 10.1, 3.55, 2.65, 0.9, { fontSize: 12, bold: true, color: C.coral, valign: 'middle' });
  txt(s14, 'Preguntas que abren: “¿Qué te lleva a pedirlo?” · “¿Qué necesitas para lograrlo?” · “¿Qué ves tú que yo no veo?”', 0.6, 5.0, 12.1, 0.5, { fontSize: 12.5, color: C.navy, italic: true });
  deck.chevrons(s14, 0.6, 5.75, 12.05, ['Tríos: líder · colaborador · observador', 'Ronda 1: como siempre', 'Ronda 2: pregunto primero', 'Observador: ¿qué cambió?'], { h: 0.6 });
  notes(s14, 'Tríos con tarjetas de situación. Ronda 1: respuesta habitual (3 min). Ronda 2: la misma situación, preguntando primero (3 min). El observador comenta qué cambió y si se movió el estándar (3 min).', 'A cierra: "Preguntar primero no es ceder. El estándar se queda igual; cambia cómo llegamos a él." Receso de 10 minutos.', '1:05–1:20');

  // 15 · DIVISOR M3 ─────────────────────────────────────────────────────
  notes(divider(MOD[2], '¿Qué valora cada generación?', 'Las generaciones sirven para entender el contexto. No sirven para adivinar cómo es una persona.'), 'Regreso del receso. A conduce.', 'Empezar a la hora con quien esté.');

  // 16 · MITO O REALIDAD ────────────────────────────────────────────────
  const s16 = S({ num: 3, section: 'Actividad 5 · Mito o realidad', title: 'Cuatro frases que escuchamos. ¿Qué dicen los datos?', source: 'BLS 2026 y EBRI 2025 (EE. UU.); Ng y Feldman 2012; Deloitte 2025–2026; Gallup y Workhuman 2022.' });
  modTag(s16, MOD[2]);
  const myths = [['“Los jóvenes no son leales.”', 'FALSO', C.coral, 'Siempre han cambiado más de empleo: es la edad, no la generación.'], ['“Los mayores se resisten a la tecnología.”', 'FALSO', C.coral, 'En 418 estudios, “resistencia al cambio” no se sostiene.'], ['“Los jóvenes no quieren ser jefes.”', 'DEPENDE', C.plum, '6 % lo busca hoy; 76 % de la Generación Z, algún día.'], ['“Necesitan reconocimiento todo el tiempo.”', 'DEPENDE', C.plum, 'Lo quieren más seguido, pero la mitad de los mayores también.']];
  myths.forEach((m, i) => {
    const col = i % 2, row = Math.floor(i / 2), x = 0.6 + col * 6.13, y = 1.75 + row * 2.3;
    shape(s16, 'roundRect', x, y, 5.95, 2.1, C.panel, { extra: { rectRadius: 0.08 } });
    txt(s16, m[0], x + 0.3, y + 0.2, 3.9, 0.9, { fontSize: 15, bold: true });
    shape(s16, 'roundRect', x + 4.3, y + 0.3, 1.4, 0.5, m[2], { extra: { rectRadius: 0.25, rotate: -6 } });
    txt(s16, m[1], x + 4.3, y + 0.3, 1.4, 0.5, { fontSize: 12, bold: true, color: C.white, align: 'center', valign: 'middle', rotate: -6 });
    txt(s16, m[3], x + 0.3, y + 1.15, 5.4, 0.8, { fontSize: 12, color: C.slate });
  });
  txt(s16, 'Voten al mismo tiempo con sus tarjetas: CIERTO · FALSO · DEPENDE', 0.6, 6.4, 12, 0.4, { fontSize: 12, bold: true, color: C.coral });
  notes(s16, 'A lee cada frase; todos votan a la vez; se revela el veredicto. Tip: en PowerPoint, revelar los sellos con animación "aparecer" al hacer clic.', 'Pregunta de cierre: "Si las diferencias son menores de lo que creíamos, ¿qué sí cambia?". Respuesta: el contexto en el que entramos a trabajar.', '1:30–1:40');

  // 17 · GRÁFICA ANTIGÜEDAD ─────────────────────────────────────────────
  const s17 = S({ num: 3, section: 'El dato', title: 'Los jóvenes de hoy duran en su empleo lo mismo que en 1983', source: 'BLS, Employee Tenure (CPS, enero de 2026); EBRI (2025), Trends in Employee Tenure 1983–2024. EE. UU. [Por confirmar la cifra 2026 en bls.gov].' });
  modTag(s17, MOD[2]);
  s17.addChart(pres.charts.BAR, [{ name: 'Años', labels: ['25–34 años · 1983', '25–34 años · 2000', '25–34 años · 2026', '55–64 años · 2026'], values: [3.0, 2.6, 3.0, 9.6] }],
    deck.chartOpts({ x: 0.6, y: 1.6, w: 7.2, h: 5.2, barDir: 'col', valAxisMinVal: 0, valAxisMaxVal: 11, dataLabelPosition: 'inEnd', chartColors: [C.coral, C.coral, C.coral, C.plum], varyColors: true, showTitle: true, title: 'Antigüedad mediana con su empleador (años)', titleFontFace: F.deck, titleFontSize: 11, titleColor: C.navy, dataLabelFontSize: 12 }));
  const p17 = deck.panel(s17, 8.2, 1.6, 4.55, 5.2, 'Lectura');
  deck.bullets(s17, 8.5, p17, 4.0, 3.0, ['A los 25–34 años, casi todos cambiamos más de empleo: pasaba igual hace 40 años.', 'La antigüedad crece con la edad y la etapa de vida.', 'La lealtad responde a cómo se trata a la persona, a cualquier edad.'], { fontSize: 12.5 });
  deck.takeaway(s17, 8.5, 5.5, 4.0, 'No es la generación: es la edad y el trato.', { h: 0.6 });
  notes(s17, 'Una sola idea: el "no son leales" se explica por la edad. Datos de EE. UU. porque México no tiene una serie comparable publicada.', 'Si hay datos internos de AMMX por rango de edad, sustituirlos aquí.');

  // 18 · CUATRO GENERACIONES ────────────────────────────────────────────
  const s18 = S({ num: 3, section: 'Qué valora cada generación', title: 'Cuatro contextos, cuatro formas de pedir lo mismo', source: 'Tendencias generales, no reglas: dentro de cada generación hay personas muy distintas. Fuente: Paquete de evidencia del taller.' });
  modTag(s18, MOD[2]);
  const gdata = [
    ['FaUserTie', 'Estabilidad · Respeto a su experiencia · Compromiso a largo plazo', 'En persona · Reconocimiento formal', 'No quieren aprender herramientas nuevas'],
    ['FaUserCog', 'Autonomía · Resultados · Equilibrio', 'Directa y breve · Poca supervisión', 'Su escepticismo es falta de compromiso'],
    ['FaUserGraduate', 'Desarrollo · Retroalimentación · Propósito', 'Frecuente · Reconocimiento visible', 'Querer crecer rápido es deslealtad'],
    ['FaUserAstronaut', 'Claridad · Aprender rápido · Bienestar', 'Clara y rápida · En persona para lo importante', 'No aguantan la presión'],
  ];
  for (let i = 0; i < 4; i++) {
    const g = GEN[i], x = 0.6 + i * 3.08, d = gdata[i];
    shape(s18, 'roundRect', x, 1.7, 2.9, 5.1, C.panel, { extra: { rectRadius: 0.1 } });
    shape(s18, 'rect', x, 1.7, 2.9, 1.45, g.c);
    await iconIn(s18, 'fa', d[0], x + 0.2, 1.93, 1.0, C.white, g.c);
    txt(s18, g.n, x + 1.3, 1.95, 1.55, 0.5, { fontSize: 13, bold: true, color: C.white, valign: 'middle' });
    txt(s18, g.y, x + 1.3, 2.45, 1.55, 0.35, { fontSize: 10, color: C.white });
    txt(s18, 'SUELEN VALORAR', x + 0.2, 3.3, 2.5, 0.28, { fontSize: 8, bold: true, color: g.c, charSpacing: 1.2 });
    txt(s18, d[1], x + 0.2, 3.58, 2.55, 1.0, { fontSize: 11.5, bold: true });
    txt(s18, 'COMUNICACIÓN', x + 0.2, 4.6, 2.5, 0.28, { fontSize: 8, bold: true, color: g.c, charSpacing: 1.2 });
    txt(s18, d[2], x + 0.2, 4.88, 2.55, 0.7, { fontSize: 10.5, color: C.slate });
    shape(s18, 'roundRect', x + 0.15, 5.65, 2.6, 1.0, C.white, { line: C.rule, extra: { rectRadius: 0.06 } });
    txt(s18, 'NO SUPONER QUE…', x + 0.3, 5.7, 2.4, 0.26, { fontSize: 7.5, bold: true, color: C.coral, charSpacing: 1.2 });
    txt(s18, d[3], x + 0.3, 5.95, 2.35, 0.65, { fontSize: 10, bold: true });
  }
  notes(s18, 'A presenta las cuatro tarjetas en 10 minutos (2 a 3 min cada una). Insistir: son tendencias, no reglas. La fila "No suponer que…" es la más importante.', 'Pregunta a la sala: "¿Quién de aquí no encaja en la tarjeta de su generación?". Siempre hay varios.', '1:40–1:50');

  // 19 · LO QUE VALORAMOS TODOS (círculos) ──────────────────────────────
  const s19 = S({ num: 3, section: 'Lo que nos une', title: 'Todos queremos casi lo mismo; lo pedimos de forma distinta' });
  modTag(s19, MOD[2]);
  shape(s19, 'ellipse', 0.8, 1.7, 5.2, 5.0, C.peach);
  shape(s19, 'ellipse', 1.65, 2.5, 3.5, 3.4, C.coral);
  txt(s19, 'Lo que\nvaloramos\ntodos', 1.65, 2.5, 3.5, 3.4, { fontSize: 20, bold: true, color: C.white, align: 'center', valign: 'middle' });
  txt(s19, 'LA FORMA Y LA FRECUENCIA', 1.3, 1.95, 4.2, 0.35, { fontSize: 9, bold: true, color: C.coral, align: 'center', charSpacing: 1.5 });
  const needs = [['FaMoneyBillWave', 'Salario justo'], ['FaShieldAlt', 'Estabilidad'], ['FaHandshake', 'Respeto'], ['FaSeedling', 'Crecimiento'], ['FaUserFriends', 'Un buen jefe'], ['FaCompass', 'Trabajo con sentido']];
  for (let i = 0; i < 6; i++) { const col = i % 2, row = Math.floor(i / 2), x = 6.6 + col * 3.1, y = 1.8 + row * 1.25; await iconIn(s19, 'fa', needs[i][0], x, y, 0.75, AM.SEQ_DECK[i + 1]); txt(s19, needs[i][1], x + 0.9, y, 2.2, 0.75, { fontSize: 14, bold: true, valign: 'middle' }); }
  shape(s19, 'roundRect', 6.6, 5.6, 6.15, 1.1, C.navy, { extra: { rectRadius: 0.08 } });
  txt(s19, 'Lo que cambia entre generaciones es cómo y cada cuánto lo piden. Eso depende más de la etapa de vida que del año de nacimiento.', 6.85, 5.6, 5.75, 1.1, { fontSize: 12, bold: true, color: C.white, valign: 'middle' });
  notes(s19, 'Centro: necesidades comunes. Anillo exterior: forma y frecuencia. Actividad en mesas (15 min): "Lo que valoramos todos en esta mesa", "Lo que no debo suponer" y "Una persona de mi equipo que no he leído bien (iniciales)".', 'Mensaje del módulo: todos queremos casi lo mismo; lo pedimos de forma distinta.', '1:50–2:05');

  // 20 · DIVISOR M4 ─────────────────────────────────────────────────────
  notes(divider(MOD[3], '¿Cómo trabajo mejor con otras generaciones?', 'Ocho prácticas, cuatro casos de planta y un plan personal.'), 'Transición al módulo práctico.', '—');

  // 21 · OCHO PRÁCTICAS ─────────────────────────────────────────────────
  const s21 = S({ num: 4, section: 'Buenas prácticas', title: 'Ocho prácticas para liderar a varias generaciones' });
  modTag(s21, MOD[3]);
  const pr = [['FaQuestionCircle', 'Pregunta antes de suponer', '“¿Qué te lleva a pedirlo?”'], ['FaLightbulb', 'Explica el porqué', 'La razón de negocio o de seguridad'], ['FaSyncAlt', 'Acuerda la retroalimentación', 'Cada cuánto y de qué forma'], ['FaMedal', 'Reconoce como le importa', 'Público, privado, un encargo'],
    ['FaRoute', 'Muestra la ruta de crecimiento', 'Qué falta, cómo y en qué plazo'], ['FaExchangeAlt', 'Mentoría en ambos sentidos', 'Experiencia ↔ herramientas nuevas'], ['FaComments', 'Acuerda canales y horarios', 'Mensaje, en persona o urgencia'], ['FaBalanceScale', 'Flexibiliza la forma, no el estándar', 'Seguridad y calidad, iguales']];
  for (let i = 0; i < 8; i++) {
    const col = i % 4, row = Math.floor(i / 4), x = 0.6 + col * 3.08, y = 1.75 + row * 2.45;
    shape(s21, 'roundRect', x, y, 2.9, 2.25, i === 7 ? C.navy : C.panel, { extra: { rectRadius: 0.08 } });
    await iconIn(s21, 'fa', pr[i][0], x + 0.2, y + 0.2, 0.7, AM.SEQ_DECK[i]);
    txt(s21, String(i + 1).padStart(2, '0'), x + 2.1, y + 0.2, 0.6, 0.4, { fontSize: 14, bold: true, color: i === 7 ? C.amber : C.slate2, align: 'right' });
    txt(s21, pr[i][1], x + 0.2, y + 1.0, 2.55, 0.7, { fontSize: 13, bold: true, color: i === 7 ? C.white : C.navy });
    txt(s21, pr[i][2], x + 0.2, y + 1.65, 2.55, 0.5, { fontSize: 10.5, color: i === 7 ? 'D6D8EA' : C.slate });
  }
  notes(s21, 'A recorre las ocho en 5 minutos, con un ejemplo de planta en dos o tres. Cada líder marca en su cuaderno las tres que más necesita.', 'La 8 es la que sostiene todo: se adapta la forma, nunca el estándar.', '2:05–2:15');

  // 22 · FORMA VS. ESTÁNDAR (diana) ─────────────────────────────────────
  const s22 = S({ num: 4, section: 'La regla de oro', title: 'Flexible en la forma, firme en el estándar' });
  modTag(s22, MOD[3]);
  shape(s22, 'ellipse', 0.9, 1.65, 5.3, 5.1, C.peach);
  shape(s22, 'ellipse', 2.0, 2.7, 3.1, 3.0, C.navy);
  txt(s22, 'ESTÁNDAR', 2.0, 3.0, 3.1, 0.4, { fontSize: 12, bold: true, color: C.amber, align: 'center', charSpacing: 2 });
  txt(s22, 'Seguridad\nCalidad\nÉtica\nResultados', 2.0, 3.35, 3.1, 1.9, { fontSize: 14, bold: true, color: C.white, align: 'center', valign: 'middle' });
  txt(s22, 'FORMA', 0.9, 1.9, 5.3, 0.4, { fontSize: 12, bold: true, color: C.coral, align: 'center', charSpacing: 2 });
  const ring = ['Comunicación', 'Reconocimiento', 'Retroalimentación', 'Autonomía', 'Desarrollo', 'Horarios'];
  ring.forEach((r, i) => { const a = Math.PI * (0.85 + (i / (ring.length - 1)) * 1.3); const cx = 3.55 + Math.cos(a) * 2.2, cy = 4.2 - Math.sin(a) * -2.05; txt(s22, r, cx - 0.9, cy - 0.17, 1.8, 0.34, { fontSize: 9.5, bold: true, color: C.coral, align: 'center' }); });
  const p22a = deck.panel(s22, 6.8, 1.65, 5.95, 2.35, 'Lo que adapto · la forma');
  txt(s22, 'Cómo me comunico, cómo reconozco, cada cuánto doy retroalimentación, cuánta autonomía doy, cómo desarrollo y qué horarios acuerdo.', 7.1, p22a, 5.4, 1.4, { fontSize: 12.5 });
  const p22b = deck.panel(s22, 6.8, 4.2, 5.95, 2.55, 'Lo que no adapto · el estándar', { fill: C.navy, labelColor: C.amber });
  txt(s22, 'Seguridad, calidad, ética y resultados son iguales para todas las personas, de cualquier edad.', 7.1, p22b, 5.4, 1.4, { fontSize: 13, bold: true, color: C.white });
  notes(s22, 'Explicar la diana: el centro no se mueve; el anillo exterior sí. Esta es la regla que hace aceptable el mensaje para una planta.', '"En una siderúrgica, la seguridad no se adapta. La forma de liderar sí."');

  // 23 · CASOS ──────────────────────────────────────────────────────────
  const s23 = S({ num: 4, section: 'Actividad 6 · Casos de planta', title: 'Cuatro casos: una mesa, un caso, tres preguntas', source: 'Casos ficticios construidos para el taller.' });
  modTag(s23, MOD[3]);
  const cases = [['A', 'Quiere ascender ya', 'Daniela, 27 años, 15 meses en la acería. Pide ser jefa de turno.', 'Lázaro Cárdenas'], ['B', 'El experto y la tableta', 'Rogelio, 58 años, detecta fallas por sonido; no registra en la tableta.', 'Monterrey'], ['C', 'Después de las siete, no', 'Verónica, 41 años, no contesta de noche; viene un paro de alto horno.', 'Monterrey'], ['D', 'Ya nadie me pregunta', 'Jesús, 61 años, metalurgista; un equipo de analítica lo desplazó.', 'Lázaro Cárdenas']];
  for (let i = 0; i < 4; i++) {
    const x = 0.6 + i * 2.35, cs = cases[i];
    shape(s23, 'roundRect', x, 1.7, 2.2, 3.55, C.panel, { extra: { rectRadius: 0.08 } });
    shape(s23, 'ellipse', x + 0.2, 1.9, 0.75, 0.75, AM.SEQ_DECK[i * 2]); txt(s23, cs[0], x + 0.2, 1.9, 0.75, 0.75, { fontSize: 22, bold: true, color: C.white, align: 'center', valign: 'middle' });
    txt(s23, cs[1], x + 0.2, 2.8, 1.85, 0.7, { fontSize: 13, bold: true });
    txt(s23, cs[2], x + 0.2, 3.5, 1.85, 1.2, { fontSize: 10, color: C.slate });
    const pin = await AM.icon('fa', 'FaMapMarkerAlt', C.coral.replace('#', '')); s23.addImage({ data: pin, x: x + 0.2, y: 4.8, w: 0.2, h: 0.25 }); txt(s23, cs[3], x + 0.45, 4.78, 1.7, 0.3, { fontSize: 9, color: C.slate });
  }
  shape(s23, 'roundRect', 10.1, 1.7, 2.65, 3.55, C.navy, { extra: { rectRadius: 0.08 } });
  txt(s23, 'TRES PREGUNTAS', 10.3, 1.9, 2.3, 0.3, { fontSize: 9, bold: true, color: C.amber, charSpacing: 1.5 });
  ['¿Qué podría necesitar la persona?', '¿Qué prácticas usarías?', '¿Qué no vas a negociar?'].forEach((q, i) => txt(s23, `${i + 1}. ${q}`, 10.3, 2.35 + i * 0.95, 2.3, 0.85, { fontSize: 12, bold: true, color: C.white }));
  deck.chevrons(s23, 0.6, 5.6, 12.05, ['Leer el caso · 2 min', 'Trabajo en mesa · 8 min', 'Cada mesa comparte · 1 min', 'Síntesis · 2 min'], { h: 0.6 });
  notes(s23, 'B asigna un caso por mesa. Cada mesa responde las tres preguntas y comparte en un minuto. Respuestas de referencia en la hoja de materiales.', 'Síntesis: "En todos los casos cambió la forma; en ninguno se negoció la seguridad ni el estándar."', '2:15–2:35');

  // 24 · MI PLAN ────────────────────────────────────────────────────────
  const s24 = S({ num: 4, section: 'Actividad 7 · Mi plan', title: 'Una persona, una conversación, tres prácticas' });
  modTag(s24, MOD[3]);
  const plan = [['FaUser', 'Una persona', 'De mi equipo, de otra generación (iniciales)', 'Hoy'], ['FaComment', 'Una conversación', 'Empiezo con una pregunta, no con una conclusión', '7 días'], ['FaTasks', 'Tres prácticas', 'Las que marqué como las que más necesito', '30 días'], ['FaLock', 'Lo que no negocio', 'El estándar que se mantiene igual', 'Siempre']];
  AM.hline(s24, 1.3, 2.4, 10.6, C.rule, 3);
  for (let i = 0; i < 4; i++) {
    const x = 0.6 + i * 3.08;
    await iconIn(s24, 'fa', plan[i][0], x + 0.95, 1.8, 1.2, AM.SEQ_DECK[i * 2]);
    shape(s24, 'roundRect', x + 0.75, 3.15, 1.6, 0.4, C.navy, { extra: { rectRadius: 0.2 } }); txt(s24, plan[i][3], x + 0.75, 3.15, 1.6, 0.4, { fontSize: 10, bold: true, color: C.white, align: 'center', valign: 'middle' });
    txt(s24, plan[i][1], x, 3.75, 3.1, 0.5, { fontSize: 16, bold: true, align: 'center' });
    txt(s24, plan[i][2], x + 0.2, 4.25, 2.7, 0.9, { fontSize: 11.5, color: C.slate, align: 'center' });
  }
  shape(s24, 'roundRect', 0.6, 5.45, 12.15, 1.25, C.panel, { extra: { rectRadius: 0.08 } });
  txt(s24, '10 min individual en el cuaderno · 5 min lo comparto con un par · A los 30 días: sesión de 60 minutos para compartir qué funcionó', 0.9, 5.45, 11.6, 1.25, { fontSize: 13, bold: true, align: 'center', valign: 'middle' });
  notes(s24, 'Cada líder llena su plan de una página. Solo iniciales. Después lo comparte con un par en una frase: "En siete días voy a…".', 'Encuesta QR anónima (2 min) antes del cierre.', '2:35–2:50');

  // 25 · CIERRE ─────────────────────────────────────────────────────────
  const s25 = pres.addSlide(); s25.background = { path: AM.asset('bg_navy.png') };
  txt(s25, 'CIERRE', 0.6, 0.32, 6, 0.3, { fontSize: 10, bold: true, color: C.amber, charSpacing: 2 });
  MOD.forEach((m, i) => { shape(s25, 'ellipse', 0.6 + i * 0.55, 1.35, 0.42, 0.42, m.c); txt(s25, String(m.n), 0.6 + i * 0.55, 1.35, 0.42, 0.42, { fontSize: 11, bold: true, color: C.white, align: 'center', valign: 'middle' }); });
  txt(s25, 'Cada generación puede necesitar un trato distinto.', 0.6, 1.95, 12.1, 1.3, { valign: 'top', fontSize: 34, bold: true, color: C.white });
  txt(s25, 'Todos cumplimos el mismo estándar.', 0.6, 3.45, 12.1, 0.8, { fontSize: 34, bold: true, color: C.amber });
  const recap = ['Me di cuenta de cómo reacciono', 'Vi el impacto en mi equipo', 'Entendí lo que valora cada generación', 'Me llevo prácticas y un plan'];
  recap.forEach((r, i) => { shape(s25, 'roundRect', 0.6 + i * 3.08, 4.8, 2.9, 1.1, C.white, { tr: 90, line: 'FFFFFF', lw: 0.5, extra: { rectRadius: 0.08 } }); txt(s25, r, 0.8 + i * 3.08, 4.8, 2.6, 1.1, { fontSize: 12.5, bold: true, color: C.white, valign: 'middle' }); });
  AM.logo(s25, { x: 11.55, y: 6.98, w: 0.62, dark: true }); txt(s25, String(++page), 12.3, 7.05, 0.45, 0.2, { font: F.note, fontSize: 7.5, color: 'B8BACB', align: 'right' });
  notes(s25, 'La CHRO comparte su propio compromiso (1 min). A cierra con la frase final. Sin aplausos ni dinámica: la frase y un breve silencio.', 'Seguimiento a los 30 días.', '2:50–3:00');

  await pres.writeFile({ fileName: OUT });
  console.log('OK', path.basename(OUT), 'láminas:', pres.slides.length);
})();
