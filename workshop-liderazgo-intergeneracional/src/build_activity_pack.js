// Genera docs/05_Paquete_de_Actividades.html (materiales imprimibles). Fuentes: actividades_experienciales.md e instrumentos_psicologicos.md.
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const act = fs.readFileSync(path.join(ROOT, '04_actividades', 'actividades_experienciales.md'), 'utf8');
const inst = fs.readFileSync(path.join(ROOT, '04_actividades', 'instrumentos_psicologicos.md'), 'utf8');
const materials = fs.existsSync(path.join(__dirname, 'materiales.json')) ? JSON.parse(fs.readFileSync(path.join(__dirname, 'materiales.json'), 'utf8')) : null;

// Casos A–F (Paquete de actividades §3.5)
const casesSec = act.split('### 3.5')[1].split('### 3.6')[0];
const cases = casesSec.split(/#### Caso ([A-F]) · "([^"]+)"\n/).slice(1);
const CASES = [];
for (let i = 0; i < cases.length; i += 3) {
  const body = cases[i + 2].trim().split('\n').filter((l) => l && l !== '---');
  CASES.push({
    id: cases[i], title: cases[i + 1],
    place: body[0].replace(/\*\*/g, ''),
    story: body[1],
    twist: body.find((l) => l.startsWith('**Complicación:**')).replace('**Complicación:** ', ''),
    stake: body.find((l) => l.startsWith('**Lo que está en juego:**')).replace('**Lo que está en juego:** ', ''),
  });
}
if (CASES.length !== 6) throw new Error('Casos: ' + CASES.length);

// Tarjetas del Muro (psicólogo §5.3, D-14)
const wall = inst.split('### 5.3')[1].split('### 5.4')[0].match(/^\d+\. "([^"]+)"/gm).map((l) => l.replace(/^\d+\. "|"$/g, ''));
if (wall.length !== 16) throw new Error('Muro: ' + wall.length);

const vmatrix = (adapt, keep, h = '0.46in') => `<table class="vflex"><tr><th style="width:21%">Dimensión</th><th style="width:31%">Pregunta guía</th><th>Mi persona: ____</th><th style="width:22%">Caso: ____</th></tr>
<tr><td colspan="4" class="grp a">LO QUE ADAPTO · el cómo</td></tr>${adapt.map((c) => `<tr style="height:${h}"><td>${c[0]}</td><td class="q">${c[1]}</td><td></td><td></td></tr>`).join('')}
<tr><td colspan="4" class="grp n">LO QUE NO ADAPTO · el qué</td></tr>${keep.map((c) => `<tr style="height:${h}"><td>${c[0]}</td><td class="q">${c[1]}</td><td class="nn"></td><td class="nn"></td></tr>`).join('')}</table>`;
const card = (k, big, foot, cls = '') => `<div class="card ${cls}"><div class="k">${k}</div><div class="big">${big}</div><div class="foot">${foot}</div></div>`;
const L = (n) => `<div class="lines">${'<span></span>'.repeat(n)}</div>`;
const page = (inner, cls = 'page') => `<section class="${cls}">${inner}</section>`;
const head = (eb, t, lead) => `<div class="eyebrow">${eb}</div><h1>${t}</h1>${lead ? `<p class="lead">${lead}</p>` : ''}`;

const css = `<style>
.page{ page-break-before:always; }
@page wide{ size:Letter landscape; margin:0.45in 0.5in 0.55in; }
.wide{ page:wide; page-break-before:always; }
.c2x2 .card{ height:3.85in; } .c2x2 .card .big{ font-size:21pt; line-height:1.25; }
.c3v .card{ height:2.55in; } .c3v .card .big{ font-size:44pt; letter-spacing:.08em; text-align:center; }
.card.grey{ background:#D9DAE3; }
.card.bord{ border:4pt solid var(--navy) !important; }
.poster{ height:9.2in; border:1.2pt solid var(--rule); display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; background:#EEEFF3; }
.poster .g{ font-size:44pt; font-weight:700; line-height:1.05; color:var(--navy); }
.poster .y{ font-size:18pt; color:var(--slate); margin-top:10pt; }
.poster .n{ position:relative; top:2.8in; font-size:10pt; color:var(--slate2); }
.casecard{ height:9.3in; display:flex; flex-direction:column; }
.casecard .id{ font-size:60pt; font-weight:700; color:var(--coral); line-height:1; }
.casecard h1{ font-size:22pt; margin-top:4pt; }
.casecard .story{ font-size:11.4pt; line-height:1.6; }
.casecard .twist{ margin-top:auto; }
.a3 td{ height:2.7in; border:0.8pt solid var(--rule); vertical-align:top; width:50%; background:#fff !important; font-weight:400; }
.a3 td b{ color:var(--coral); font-size:8pt; letter-spacing:.12em; text-transform:uppercase; display:block; }
.a3 td span{ color:var(--slate2); font-size:8pt; }
.vflex{ width:100%; border-collapse:collapse; font-size:8.4pt; }
.vflex th{ font-size:7.8pt; }
.vflex td{ border:0.6pt solid var(--rule); vertical-align:top; background:#fff !important; padding:4pt 6pt; }
.vflex td.q{ color:var(--slate2); font-weight:400; font-size:7.6pt; }
.vflex td.nn{ background:#F4F5F9 !important; }
.vflex td.grp{ color:#fff; font-weight:600; letter-spacing:.14em; font-size:7.6pt; padding:3pt 6pt; }
.vflex td.grp.a{ background:var(--coral) !important; } .vflex td.grp.n{ background:var(--navy) !important; }
.flex{ width:100%; border-collapse:collapse; table-layout:fixed; font-size:7.4pt; }
.flex th{ font-size:7.4pt; padding:4pt; } .flex th.a{ background:var(--coral); } .flex th.n{ background:var(--navy); }
.flex td{ border:0.6pt solid var(--rule); height:2.3in; vertical-align:top; font-weight:400; color:var(--slate2); font-size:6.9pt; padding:4pt; background:#fff !important; }
.flex td.row{ color:var(--navy); font-weight:600; font-size:8pt; background:var(--panel) !important; }
.flex .sep{ border-left:3pt solid var(--navy); }
.commit{ height:4.05in; border:0.5pt dashed #B8BACB; padding:14pt 16pt; page-break-inside:avoid; }
.commit h3{ margin:0 0 6pt; } .commit .row{ display:grid; grid-template-columns:1fr 1fr 1fr; gap:10pt; }
.commit .k{ font-size:7.5pt; font-weight:600; letter-spacing:.14em; color:var(--coral); text-transform:uppercase; }
.pocket{ display:grid; grid-template-columns:1fr 1fr; border:0.5pt dashed #B8BACB; }
.pocket > div{ height:2.3in; padding:12pt; border-right:0.5pt dashed #B8BACB; }
.qr{ width:1.6in; height:1.6in; border:1.5pt solid var(--navy); display:flex; align-items:center; justify-content:center; text-align:center; font-size:8pt; color:var(--slate); }
svg text{ font-family:Poppins, sans-serif; }
</style>`;

// ── Diagrama de sala (SVG)
const room = `<svg viewBox="0 0 1000 620" width="100%" style="border:0.8pt solid var(--rule);border-radius:6pt;background:#fff">
<rect x="20" y="20" width="960" height="580" fill="none" stroke="#1A1A2E" stroke-width="3"/>
<rect x="380" y="28" width="240" height="14" fill="#1A1A2E"/><text x="500" y="62" text-anchor="middle" font-size="15" fill="#1A1A2E" font-weight="600">PANTALLA PRINCIPAL</text>
<rect x="36" y="200" width="12" height="120" fill="#5A5A6E"/><text x="60" y="265" font-size="12" fill="#5A5A6E">Pantalla de apoyo</text>
<rect x="960" y="150" width="14" height="360" fill="#FA4642"/><text x="945" y="330" text-anchor="end" font-size="14" fill="#FA4642" font-weight="600">MURO GENERACIONAL</text>
<text x="945" y="348" text-anchor="end" font-size="11" fill="#5A5A6E">4 zonas + póster central de revelación</text>
<text x="945" y="364" text-anchor="end" font-size="11" fill="#5A5A6E">(≥ 4 m libres; galería del Acto 8)</text>
${[[250, 200], [500, 180], [750, 200], [320, 420], [680, 420]].map((p, i) => `<circle cx="${p[0]}" cy="${p[1]}" r="62" fill="#F4F5F9" stroke="#D6D8EA" stroke-width="2"/>${Array.from({ length: 6 }, (_, k) => { const a = (k / 6) * 2 * Math.PI; return `<circle cx="${p[0] + 82 * Math.cos(a)}" cy="${p[1] + 82 * Math.sin(a)}" r="11" fill="#fff" stroke="#8A8CA0"/>`; }).join('')}<text x="${p[0]}" y="${p[1] + 5}" text-anchor="middle" font-size="16" font-weight="700" fill="#1A1A2E">Mesa ${i + 1}</text>${i === 4 ? `<text x="${p[0]}" y="${p[1] + 22}" text-anchor="middle" font-size="10" fill="#5A5A6E">(solo con 30 personas)</text>` : ''}`).join('')}
<circle cx="440" cy="95" r="16" fill="#5B2A86"/><text x="440" y="100" text-anchor="middle" font-size="13" fill="#fff" font-weight="700">A</text>
<circle cx="560" cy="95" r="16" fill="#FC6A45"/><text x="560" y="100" text-anchor="middle" font-size="13" fill="#fff" font-weight="700">B</text>
<text x="500" y="128" text-anchor="middle" font-size="11" fill="#5A5A6E">Facilitadores: A al frente (narrativa) · B en movimiento entre mesas</text>
<rect x="60" y="470" width="90" height="60" fill="#FFE3CF" stroke="#FF8C47"/><text x="105" y="496" text-anchor="middle" font-size="11" fill="#1A1A2E">Rotafolio</text><text x="105" y="512" text-anchor="middle" font-size="10" fill="#1A1A2E">“Lo que escuchamos”</text>
<rect x="160" y="470" width="90" height="60" fill="#FFE3CF" stroke="#FF8C47"/><text x="205" y="496" text-anchor="middle" font-size="11" fill="#1A1A2E">Rotafolio</text><text x="205" y="512" text-anchor="middle" font-size="10" fill="#1A1A2E">votos Mito vs. Dato</text>
<rect x="820" y="540" width="120" height="44" fill="#F4F5F9" stroke="#D6D8EA"/><text x="880" y="567" text-anchor="middle" font-size="11" fill="#1A1A2E">Mesa de materiales</text>
<rect x="420" y="585" width="160" height="15" fill="#fff" stroke="#1A1A2E"/><text x="500" y="578" text-anchor="middle" font-size="11" fill="#5A5A6E">Acceso · café en receso fuera de sala</text>
<path d="M 250 300 Q 500 330 750 300" stroke="#8A8CA0" stroke-dasharray="6 6" fill="none"/><text x="500" y="345" text-anchor="middle" font-size="11" fill="#8A8CA0">Circulación libre ≥ 1.2 m hacia el Muro</text>
</svg>`;

const flexCols = ['Comunicación', 'Contexto (el porqué)', 'Retroalimentación', 'Reconocimiento', 'Autonomía', 'Desarrollo', 'Frecuencia'];
const flexKeep = ['Estándares', 'Ética', 'Seguridad', 'Rendición de cuentas', 'Desempeño'];

const matList = materials ? `<table class="compact"><tr><th>Material</th><th>Cantidad (24 personas · 4 mesas)</th><th>Ajuste 30 personas · 5 mesas</th><th>Acto</th><th>✓</th></tr>${materials.map((m) => `<tr><td>${m[0]}</td><td style="font-weight:400">${m[1]}</td><td style="font-weight:400">${m[2]}</td><td style="font-weight:400">${m[3]}</td><td style="width:0.3in"></td></tr>`).join('')}</table>` : '<p>[Lista pendiente de Gate 3]</p>';

const flexQ = [['Comunicación', '¿Canal y tono en que me escucha mejor?'], ['Contexto (el porqué)', '¿Qué parte del porqué no le he explicado?'], ['Retroalimentación', '¿Qué tan seguido y qué tan directo?'], ['Reconocimiento', '¿Qué reconocimiento le importa de verdad?'], ['Autonomía', '¿Dónde más margen? ¿Dónde más estructura?'], ['Desarrollo', '¿Qué quiere aprender? ¿Qué conversación de carrera debo?'], ['Frecuencia', '¿Cada cuánto necesita contacto conmigo?']];
const keepQ = [['Estándares', '¿Qué estándar le aplica igual que a todos?'], ['Ética', '¿Qué tema de integridad dejo claro?'], ['Seguridad', '¿Qué regla es innegociable en su puesto?'], ['Rendición de cuentas', '¿De qué resultado responde y cómo doy seguimiento?'], ['Desempeño', '¿Qué espero, para cuándo y cómo se mide?']];
const html = `---
title: Paquete de actividades
eyebrow: Entregable 05 · Liderar entre generaciones
sub: Todos los materiales imprimibles de la sesión: diseño de sala, lista de materiales, tarjetas, casos, hojas de trabajo y encuesta de salida.
meta: <b>Para:</b> Facilitadores A y B · Logística de Capacitación y Desarrollo<br>Imprimir en tamaño Carta salvo indicación. Líneas punteadas = corte.
footer: Paquete de actividades
file: 05_Paquete_de_Actividades
---
${css}
<section>
${head('Contenido', 'Qué hay en este paquete', '')}
<table class="plain"><tr><th>#</th><th>Material</th><th>Acto</th><th>Impresión</th></tr>
<tr><td>1</td><td>Diseño de sala</td><td>Todos</td><td>Referencia</td></tr>
<tr><td>2</td><td>Lista maestra de materiales</td><td>Todos</td><td>Referencia</td></tr>
<tr><td>3</td><td>Tarjeta de mesa con las 4 preguntas del video</td><td>2</td><td>1 por mesa, cartulina</td></tr>
<tr><td>4</td><td>Pósters de zona del Muro y póster de revelación</td><td>3</td><td>Plotter 90 × 120 cm (aquí en Carta como prueba de diseño)</td></tr>
<tr><td>5</td><td>16 tarjetas del Muro</td><td>3</td><td>1 juego por mesa + 1 repuesto, cartulina blanca mate</td></tr>
<tr><td>6</td><td>Tarjetas de voto CIERTO / FALSO / DEPENDE</td><td>4</td><td>1 juego por persona, cartulina gruesa</td></tr>
<tr><td>7</td><td>Seis casos del Laboratorio</td><td>8</td><td>1 caso por persona de la mesa asignada</td></tr>
<tr><td>8</td><td>Hoja de respuesta del Laboratorio</td><td>8</td><td>1 por mesa, tabloide/A3 horizontal</td></tr>
<tr><td>9</td><td>Hoja de reflexión (Espejo del líder)</td><td>7</td><td>Respaldo del cuaderno</td></tr>
<tr><td>10</td><td>Matriz de Flexibilidad del Liderazgo</td><td>10</td><td>Respaldo del cuaderno; tabloide recomendado</td></tr>
<tr><td>11</td><td>Tarjeta de bolsillo unificada (modelo + Matriz / Experimento)</td><td>12</td><td>1 por persona, dentro del sobre del trabajo previo</td></tr>
<tr><td>12</td><td>Encuesta de salida (QR)</td><td>12</td><td>1 tarjeta por mesa + 10 impresas de respaldo</td></tr>
<tr><td>13</td><td>Hoja resumen: Mito vs. Dato con fuentes</td><td>Cierre</td><td>1 por persona al final, o PDF con el recordatorio del día 1</td></tr></table>
<p class="small muted">Eliminados en v1.1 (Gate 3, G3-20): tarjetas-pregunta individuales, tarjeta “Invertir el lente” y tarjeta de compromiso autocopiable. El compromiso y el lente viven en el cuaderno.</p>
<div class="panel"><div class="label">Reglas de impresión y confidencialidad</div><ul><li>Las 4 zonas del Muro usan el <b>mismo gris neutro</b>: no hay colores por generación (D-10).</li><li>Las tarjetas no llevan nombres ni número de mesa: los sets se distinguen solo por su sobre (G3-21).</li><li>Los sobres de trabajo previo se imprimen en impresora con retención de trabajo; nunca en equipos compartidos sin supervisión.</li><li>Los casos son ficticios; cualquier parecido con personas de AMMX es coincidencia.</li></ul></div>
</section>

${page(`${head('1 · Diseño de sala', 'Mesas redondas, no auditorio', 'Cinco mesas redondas para 6 personas (4 si son 24 participantes), en semicírculo abierto hacia la pantalla. El Muro en una pared lateral libre, visible desde todas las mesas.')}
${room}
<div class="grid3" style="margin-top:10pt">
<div class="panel"><div class="label">Mesas</div><p>Asignadas previamente: mezcla de áreas y trayectorias; nadie en la mesa de su jefe directo; la CHRO en una mesa sin reportes directos (D-13).</p></div>
<div class="panel"><div class="label">Pantallas</div><p>Principal al frente. Apoyo lateral si la sala supera 12 m de fondo. Audio de sala probado con el video (subtítulos activos).</p></div>
<div class="panel"><div class="label">Facilitadores</div><p>A al frente para encuadres; B se mueve entre mesas, cuida tiempos y opera video y rotafolios. Nunca los dos al frente a la vez salvo en relevos.</p></div>
</div>
<div class="panel"><div class="label">Alternativa sin pared libre</div><p>Cuatro caballetes o mesas auxiliares como zonas del Muro; el póster de revelación en un caballete central cubierto con tela.</p></div>`)}

${page(`${head('2 · Lista maestra de materiales', 'Checklist de preparación', 'Revisar T–3 días y montar T–45 minutos.')}${matList}`)}

${page(`${head('3 · Acto 2 · Tarjeta de mesa', 'Cuatro preguntas para la mesa', 'Una por mesa, impresa en cartulina y doblada como tent card. La mesa escribe una frase por pregunta en la parte inferior.')}
<div class="cards" style="grid-template-columns:1fr">${card('Acto 2 · La provocación', '1. ¿Con qué estuvieron de acuerdo?<br>2. ¿Qué los incomodó?<br>3. ¿Qué creen que no ve?<br>4. ¿Qué cambió: la gente o el trato?', 'Una frase por pregunta · al final, una frase de la mesa al rotafolio “Lo que escuchamos”', '').replace('class="card "', 'class="card" style="height:4.2in"')}</div>
<div class="box" style="margin-top:10pt"><div class="k">Nuestras frases</div>${L(5)}</div>`)}

${['Baby Boomers|1946–1964', 'Generación X|1965–1980', 'Millennials|1981–1996', 'Generación Z|1997–2012'].map((g) => { const [n, y] = g.split('|'); return page(`<div class="poster"><div class="g">${n}</div><div class="y">Nacidos ${y}</div><div class="n">Rangos convencionales. Varían por país.</div></div>`); }).join('')}
${page(`<div class="poster" style="background:#fff;border:3pt solid var(--coral)"><div class="g" style="color:var(--coral)">NECESIDADES<br>HUMANAS</div><div class="y">que se expresan distinto según la etapa de vida,<br>el contexto y la experiencia</div><div class="n">Póster de revelación · se mantiene enrollado hasta el paso 3 del Acto 3</div></div>`)}

${[0, 4, 8, 12].map((s) => page(`${s === 0 ? head('5 · Acto 3 · Tarjetas del Muro', '16 frases en primera persona', 'Un juego por mesa (sobre con número de mesa). En la versión de 120 minutos usar solo las tarjetas 1 a 12.') : ''}<div class="cards c2 c2x2">${wall.slice(s, s + 4).map((w, i) => card(`Tarjeta ${s + i + 1}`, `“${w}”`, 'Muro Generacional')).join('')}</div>`)).join('')}

${page(`${head('6 · Acto 4 · Tarjetas de voto', 'Tres tarjetas por persona', 'Navy, blanco con borde y gris: sin rojo ni verde, para que no evoque un examen (Paquete de actividades §2.4).')}
<div class="cards c3v" style="grid-template-columns:1fr">${card('Mito vs. Dato', 'CIERTO', 'La afirmación describe a la mayoría', 'dark')}${card('Mito vs. Dato', 'FALSO', 'La afirmación no se sostiene con datos', 'bord')}${card('Mito vs. Dato', 'DEPENDE', 'Depende de etapa de vida, contexto o de cómo se mide', 'grey')}</div>`)}

${CASES.map((c) => page(`<div class="casecard"><div class="eyebrow">7 · Acto 8 · Laboratorio de Colisiones</div><div class="id">${c.id}</div><h1>“${c.title}”</h1><p class="muted"><b>${c.place}</b></p><p class="story">${c.story}</p>
<div class="panel peach"><div class="label">La complicación</div><p>${c.twist}</p></div>
<div class="panel navy twist"><div class="label">Lo que está en juego</div><p>${c.stake}</p></div>
<p class="tiny">Caso ficticio construido para el taller. Subraya la frase que más te hizo ruido.</p></div>`)).join('')}

${page(`<div class="eyebrow">8 · Acto 8 · Hoja de respuesta (imprimir ampliada a tabloide)</div><h1 style="font-size:16pt">Laboratorio de Colisiones · Caso ____ · Mesa ____</h1>
<table class="a3"><tr><td><b>1 · Reacción inicial</b><span>¿Qué pensamos o sentimos en los primeros diez segundos? Tal como salió.</span></td><td><b>2 · Supuestos</b><span>¿Qué suponemos sobre esta persona que no sabemos con certeza?</span></td></tr><tr><td><b>3 · Qué podría necesitar</b><span>No lo que pide: lo que podría estar detrás.</span></td><td><b>4 · Resultado de negocio</b><span>Seguridad, productividad, retención, conocimiento, costo. ¿Cuál y cuánto?</span></td></tr><tr><td><b>5 · Respuesta de liderazgo</b><span>Qué haríamos y diríamos en la próxima conversación. Primer paso concreto.</span></td><td><b>6 · Qué NO vamos a negociar</b><span>Estándares, ética, seguridad, rendición de cuentas, desempeño.</span></td></tr></table>
<p class="small muted">Disenso de la mesa (opcional): ________________________________________ · Personas distintas no necesitan estándares distintos. Pueden necesitar un liderazgo distinto.</p>`)}

${page(`${head('9 · Acto 7 · Hoja de reflexión', 'El espejo del líder', 'Cinco minutos en silencio. Nadie va a leer lo que escribas. Solo iniciales.')}
${['¿A quién me resulta más fácil liderar? ¿Qué tiene en común conmigo?', '¿Quién me frustra, o a quién me cuesta leer?', '¿Qué conductas me detonan? (conductas observables, no rasgos)', '¿Qué supongo sobre esa persona? ¿Cómo lo sé?', 'Cuando alguien trabaja distinto a mí, ¿lo interpreto como diferente o como incorrecto?', '¿Qué parte de mi forma de liderar se formó en condiciones que cambiaron, y qué parte sigue siendo valiosa?'].map((q, i) => `<div class="box"><div class="k">${i + 1}</div><div class="h" style="color:var(--navy);font-size:9pt">${q}</div>${L(1)}</div>`).join('')}
<div class="panel navy"><div class="label">Mi persona</div><p>La persona que voy a llevar al resto del taller es: ______ (solo iniciales)</p></div>`)}

${page(`${head('10 · Acto 10 · Matriz de Flexibilidad del Liderazgo', 'Adapto el cómo. No adapto el qué.', 'Respaldo del cuaderno. Una celda vacía en “lo que no adapto” es una alerta. La seguridad es innegociable.')}${vmatrix(flexQ, keepQ, '0.5in')}`)}

${page(`${head('11 · Tarjeta de bolsillo unificada', 'Va dentro del sobre del trabajo previo', 'Una sola tarjeta de 10 × 15 cm a doble cara (G3-20): frente con el modelo y la Matriz; reverso con el Experimento a 30 días. Abajo, los cuatro paneles tal como se imprimen (dos frentes y dos reversos por hoja).')}
<div class="pocket"><div><div class="k" style="color:var(--coral);font-weight:600;font-size:7.5pt;letter-spacing:.14em">EXPERIMENTO DE LIDERAZGO A 30 DÍAS</div><p class="small">Una persona que me cuesta leer: ____ · Inicio: ____ · Cierre: ____</p><p class="small"><b>LEER</b> — ¿Qué no sé de esta persona? ¿Qué voy a preguntar antes de concluir?<br><b>ADAPTAR</b> — ¿Qué cambiaré en cómo me comunico, reconozco, doy retroalimentación o autonomía?<br><b>ALINEAR</b> — ¿Qué estándar y qué resultado mantengo igual, y cómo se lo digo?</p></div>
<div><div class="k" style="color:var(--coral);font-weight:600;font-size:7.5pt;letter-spacing:.14em">REVERSO · BITÁCORA</div><p class="small">Lo que supuse · Lo que pregunté · Lo que aprendí · Lo que cambié · Lo que pasó</p><p class="small">Recordatorios: días 1, 7, 14, 21 y 30. Sesión de seguimiento: día 35–45.</p><p class="small"><b>La seguridad y los estándares no se adaptan.</b></p></div>
<div style="background:var(--navy);color:#fff"><div style="color:var(--amber);font-weight:600;font-size:7.5pt;letter-spacing:.14em">TARJETA DE BOLSILLO</div><p style="font-size:17pt;font-weight:700;line-height:1.25;margin:10pt 0">LEER<br>ADAPTAR<br>ALINEAR</p><p class="small">Pregunto antes de concluir · Cambio el cómo · No muevo el qué</p></div>
<div><div class="k" style="color:var(--coral);font-weight:600;font-size:7.5pt;letter-spacing:.14em">REVERSO · MATRIZ</div><p class="small"><b>Adapto:</b> comunicación · contexto · retroalimentación · reconocimiento · autonomía · desarrollo · frecuencia</p><p class="small"><b>No adapto:</b> estándares · ética · seguridad · rendición de cuentas · desempeño</p><p class="small"><em>Personas distintas no necesitan estándares distintos. Pueden necesitar un liderazgo distinto.</em></p></div></div>`)}

${page(`${head('12 · Encuesta de salida', 'Dos minutos, a las 2:55', 'Una tarjeta por mesa con el código QR del formulario (Microsoft Forms institucional, sin registro de nombre). Anónima. Se responde dentro del horario, antes del compromiso de la CHRO.')}
<div style="display:flex;gap:18pt;align-items:center"><div class="qr">Insertar aquí el QR del formulario institucional</div><div><p><b>Encuesta de salida · Liderar entre generaciones</b></p><p class="small muted">Anónima. Resultados solo agregados (Plan de medición, Niveles 1 y 2).</p></div></div>
<table><tr><th>#</th><th>Pregunta</th><th>Escala</th></tr>
<tr><td>1</td><td style="font-weight:400">La conversación fue relevante para los retos reales de mi equipo.</td><td style="font-weight:400">1–5</td></tr>
<tr><td>2</td><td style="font-weight:400">El taller respetó mi experiencia y no fue aleccionador.</td><td style="font-weight:400">1–5</td></tr>
<tr><td>3</td><td style="font-weight:400">Salgo con algo concreto que voy a hacer en los próximos 7 días.</td><td style="font-weight:400">1–5</td></tr>
<tr><td>4</td><td style="font-weight:400">Al releer mi trabajo previo: respondería lo mismo / lo matizaría / respondería distinto.</td><td style="font-weight:400">Selección</td></tr>
<tr><td>5</td><td style="font-weight:400">¿Qué momento fue el más valioso? (opciones según la versión)</td><td style="font-weight:400">Selección</td></tr>
<tr><td>6</td><td style="font-weight:400">¿Qué cambiarías para la siguiente cohorte?</td><td style="font-weight:400">Abierta</td></tr>
<tr><td>7</td><td style="font-weight:400">“Si una persona joven cambia de empleo con frecuencia, eso prueba que su generación es menos leal.”</td><td style="font-weight:400">Acuerdo 1–5</td></tr>
<tr><td>8</td><td style="font-weight:400">“Adaptar mi liderazgo implica bajar el estándar para algunas personas.”</td><td style="font-weight:400">Acuerdo 1–5</td></tr>
<tr><td>9</td><td style="font-weight:400">“Las necesidades de fondo aparecen en todas las generaciones.”</td><td style="font-weight:400">Acuerdo 1–5</td></tr></table>
<div class="por"><b>POR CONFIRMAR</b> · Crear el formulario en la cuenta institucional (sin “Registrar nombre”) y generar el QR antes de imprimir (T–3 días). Aviso de privacidad validado por Privacidad/Jurídico.</div>`)}

${page(`${head('13 · Hoja resumen para participantes', 'Mito vs. Dato: lo que dice la evidencia', 'Se entrega al final de la sesión o en PDF con el recordatorio del día 1. Nunca antes del voto.')}
<table><tr><th style="width:30%">Afirmación</th><th style="width:14%">Veredicto</th><th>Lo que dice la evidencia</th><th style="width:22%">Fuente</th></tr>
<tr><td>“La Generación Z no tiene lealtad.”</td><td>MITO</td><td style="font-weight:400">Los jóvenes siempre han cambiado más de empleo: la antigüedad mediana de 25–34 años era 3.0 años en 1983, 2.6 en 2000 y 3.0 en 2026 (EE. UU.). La lealtad sigue a la reciprocidad percibida (estudios con trabajadores de todas las edades).</td><td style="font-weight:400">BLS 2026; EBRI 2025; Zhao et al. 2007</td></tr>
<tr><td>“Los Boomers se resisten a la tecnología.”</td><td>MITO</td><td style="font-weight:400">Solo 1 de 6 estereotipos sobre trabajadores mayores se sostiene (participan menos en capacitación; puede reflejar que se les ofrece menos). Entre trabajadores del conocimiento que usan IA (31 países), 73 % de 58+ la lleva por su cuenta al trabajo.</td><td style="font-weight:400">Ng y Feldman 2012; Microsoft/LinkedIn 2024</td></tr>
<tr><td>“Los jóvenes no quieren ser jefes.”</td><td>DEPENDE</td><td style="font-weight:400">6 % de la Generación Z y los millennials tiene el liderazgo como meta principal hoy; 76 % de la Generación Z se interesa en liderazgo senior algún día. Rechazan el costo que ven; el compromiso de los gerentes bajó de 27 % a 22 % en un año.</td><td style="font-weight:400">Deloitte 2026; Gallup 2026</td></tr>
<tr><td>“Los jóvenes necesitan reconocimiento constante.”</td><td>DEPENDE (en parte cierto)</td><td style="font-weight:400">Lo prefieren con más frecuencia, pero cerca de la mitad de Generación X y Boomers también lo quiere varias veces al mes. El reconocimiento se asocia con compromiso en todas las edades.</td><td style="font-weight:400">Gallup/Workhuman 2022</td></tr>
<tr><td>“Lo quieren todo ya.” (del video)</td><td>DEPENDE</td><td style="font-weight:400">Los motivos de crecimiento son más altos en las personas jóvenes (patrón asociado a la edad). 48 % de la Generación Z no se siente financieramente segura. La prisa se vuelve problema cuando no hay ruta visible.</td><td style="font-weight:400">Kooij et al. 2011; Deloitte 2025</td></tr>
<tr><td>“La gente ya no quiere trabajar.”</td><td>MITO</td><td style="font-weight:400">México trabaja 2,207 horas al año por trabajador, el máximo de la OCDE. Lo bajo es el compromiso: 20 % en el mundo; no es un problema de una sola generación.</td><td style="font-weight:400">OCDE 2023; Gallup 2026</td></tr></table>
<div class="panel"><div class="label">La idea de fondo</div><p>La generación es un lente, no un diagnóstico: las diferencias son pequeñas y se explican mejor por edad, etapa de vida y época (National Academies, 2020; Costanza et al., 2012). Referencias completas: Paquete de evidencia.</p></div>`)}
`;
fs.writeFileSync(path.join(__dirname, 'docs', '05_Paquete_de_Actividades.html'), html);
console.log('Paquete de actividades HTML ok · casos', CASES.length, '· muro', wall.length);
