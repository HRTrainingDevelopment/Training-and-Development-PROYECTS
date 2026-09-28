// Genera docs/02_Workbook_Participante.html a partir de los instrumentos del psicólogo (fuente única).
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const inst = fs.readFileSync(path.join(ROOT, '04_actividades', 'instrumentos_psicologicos.md'), 'utf8');

// ── Situaciones del Diagnóstico (§2.3)
const sec = inst.split('### 2.3 Las 10 situaciones')[1].split('### 2.4')[0];
const sits = [];
sec.split(/\*\*Situación (\d+) · ([^*]+)\*\*\n/).slice(1).reduce((acc, cur, i, arr) => {
  if (i % 3 === 0) {
    const body = arr[i + 2];
    const lines = body.trim().split('\n').filter(Boolean);
    const text = lines[0];
    const opts = lines.filter((l) => /^- [A-D]\. /.test(l)).map((l) => ({ k: l[2], t: l.slice(5) }));
    sits.push({ n: +cur, area: arr[i + 1].trim(), text, opts });
  }
  return acc;
}, null);
if (sits.length !== 10) throw new Error('Esperaba 10 situaciones, obtuve ' + sits.length);

// ── Clave (§2.5)
const KEY = { 1: 'CADB', 2: 'ADBC', 3: 'BCAD', 4: 'DBCA', 5: 'CDAB', 6: 'BADC', 7: 'DCBA', 8: 'ABCD', 9: 'CABD', 10: 'BDCA' }; // orden: DIRIGIR, EXPLICAR, ACOMPAÑAR, EXPLORAR
const keyCheck = inst.match(/\| 1 \| C \| A \| D \| B \|/); if (!keyCheck) throw new Error('La clave del psicólogo cambió: revisar KEY');

const vmatrix = (adapt, keep, h = '0.46in') => `<table class="vflex"><tr><th style="width:21%">Dimensión</th><th style="width:31%">Pregunta guía</th><th>Mi persona: ____</th><th style="width:22%">Caso: ____</th></tr>
<tr><td colspan="4" class="grp a">LO QUE ADAPTO · el cómo</td></tr>${adapt.map((c) => `<tr style="height:${h}"><td>${c[0]}</td><td class="q">${c[1]}</td><td></td><td></td></tr>`).join('')}
<tr><td colspan="4" class="grp n">LO QUE NO ADAPTO · el qué</td></tr>${keep.map((c) => `<tr style="height:${h}"><td>${c[0]}</td><td class="q">${c[1]}</td><td class="nn"></td><td class="nn"></td></tr>`).join('')}</table>`;
const lines = (n) => `<div class="lines">${'<span></span>'.repeat(n)}</div>`;
const box = (k, h, n = 3, extra = '') => `<div class="box"${extra}><div class="k">${k}</div>${h ? `<div class="h">${h}</div>` : ''}${lines(n)}</div>`;
const scale = '<div class="scale">¿Qué tanto me incomoda? <i>1</i><i>2</i><i>3</i><i>4</i></div>';
const head = (eyebrow, title, lead) => `<div class="eyebrow">${eyebrow}</div><h1>${title}</h1>${lead ? `<p class="lead">${lead}</p>` : ''}`;

const sitHtml = (s) => `<div class="sit avoid"><h3><span class="sn">${s.n}</span> ${s.area}</h3><p>${s.text}</p>${s.opts.map((o) => `<div class="opt"><i>${o.k}</i><span>${o.t}</span></div>`).join('')}${scale}</div>`;

const css = `<style>
.sit{ border-top:0.6pt solid var(--rule); padding:5pt 0 5pt; }
.sit .opt{ font-size:8.4pt; margin:2pt 0; }
.sit h3{ margin:0 0 3pt; font-size:9.5pt; }
.sit p{ font-size:8.4pt; margin-bottom:3pt; line-height:1.4; }
.sn{ display:inline-block; width:15pt; height:15pt; border-radius:50%; background:var(--navy); color:#fff; text-align:center; line-height:15pt; font-size:7.5pt; margin-right:4pt; }
.sit .scale{ margin-top:4pt; }
.page{ page-break-before:always; }
.keytbl td, .keytbl th{ text-align:center; } .keytbl td:first-child{ text-align:left; }
.keytbl td{ font-size:9.5pt; padding:3pt 6pt; }
.result .box{ min-height:0.6in; }
.result{ display:grid; grid-template-columns:1fr 1fr; gap:8pt 12pt; }
.four{ display:grid; grid-template-columns:1fr 1fr; gap:10pt 14pt; }
.four .panel{ margin:0; }
.four h3{ margin-top:0; }
.mv td{ height:0.36in; font-size:8pt; }
.ctx{ display:grid; grid-template-columns:1fr 1fr; gap:9pt 12pt; }
.ctx .panel{ margin:0; font-size:8.4pt; }
.ctx .panel b{ display:block; font-size:9.6pt; margin-bottom:2pt; }
.model3{ display:grid; grid-template-columns:1fr 1fr 1fr; gap:10pt; }
.model3 .col{ border-top:4pt solid var(--amber); padding-top:6pt; }
.model3 .col:nth-child(2){ border-color:var(--coral); } .model3 .col:nth-child(3){ border-color:var(--plum); }
.model3 .big{ font-size:19pt; font-weight:700; line-height:1.1; }
@page wide{ size:Letter landscape; margin:0.5in 0.55in 0.6in; }
.wide{ page:wide; page-break-before:always; }
.vflex{ width:100%; border-collapse:collapse; font-size:8.4pt; }
.vflex th{ font-size:7.8pt; }
.vflex td{ border:0.6pt solid var(--rule); vertical-align:top; background:#fff !important; padding:4pt 6pt; }
.vflex td.q{ color:var(--slate2); font-weight:400; font-size:7.6pt; }
.vflex td.nn{ background:#F4F5F9 !important; }
.vflex td.grp{ color:#fff; font-weight:600; letter-spacing:.14em; font-size:7.6pt; padding:3pt 6pt; }
.vflex td.grp.a{ background:var(--coral) !important; } .vflex td.grp.n{ background:var(--navy) !important; }
.flex{ width:100%; border-collapse:collapse; table-layout:fixed; font-size:7.4pt; }
.flex th{ font-size:7.2pt; padding:4pt; vertical-align:bottom; }
.flex th.a{ background:var(--coral); } .flex th.n{ background:var(--navy); }
.flex td{ border:0.6pt solid var(--rule); height:1.55in; vertical-align:top; color:var(--slate2); font-weight:400; font-size:6.8pt; padding:4pt; background:#fff !important; }
.flex td.row{ color:var(--navy); font-weight:600; font-size:8pt; background:var(--panel) !important; }
.flex td.nn{ background:#F7F7FA !important; }
.flex .sep{ border-left:3pt solid var(--navy); }
.cols5{ display:grid; grid-template-columns:repeat(5,1fr); gap:6pt; }
.cols5 .box{ min-height:1.25in; margin:0; }
.small-lines .lines span{ height:0.2in; }
.cols5 .box{ min-height:0.95in !important; }
</style>`;

const needs = [
  ['Salario justo', 'Prioridad número uno para casi todos.', 'Urgencia (inseguridad financiera, etapa de vida).'],
  ['Estabilidad', 'Entre las principales prioridades de todas las edades.', 'Cómo se expresa según el contexto económico.'],
  ['Crecimiento', 'Todos quieren avanzar.', 'Más urgencia al inicio de la carrera (efecto edad).'],
  ['Reconocimiento', 'Se asocia con compromiso a cualquier edad.', 'Frecuencia y forma: pública, privada, un encargo.'],
  ['Desarrollo', 'Aprender en el puesto.', 'A los mayores se les ofrece menos; los jóvenes piden más mentoría.'],
  ['Autonomía', 'Valorada en todas las edades.', 'Diferencias de pocos puntos; pesa más el rol.'],
  ['Relación con el jefe', 'La palanca más grande de compromiso.', 'Qué conductas del jefe necesita cada persona.'],
  ['Bienestar y equilibrio', 'Prioridad transversal.', 'Más estrés reportado en menores de 35 y en gerentes.'],
  ['Sentido y pertenencia', 'Necesidad compartida.', 'La brecha más grande es jerárquica, no generacional.'],
];

const ctx = [
  ['Baby Boomers · entraron ≈1964–1985', 'Desarrollo estabilizador; acero nacional y empleo paraestatal; crisis de 1976 y 1982; cierre de Fundidora Monterrey (1986).', 'Que no quieren o no pueden aprender herramientas nuevas.'],
  ['Generación X · entraron ≈1983–2000', 'Inflación y “década perdida”; GATT y privatizaciones (SICARTSA, 1991); TLCAN y crisis de 1994–95; cambios de dueño.', 'Que su escepticismo es falta de compromiso.'],
  ['Millennials · entraron ≈2000–2018', 'Crisis de 2008–09; smartphone e internet; reforma laboral de 2012 y subcontratación. Hoy muchos ya son jefes y directores.', 'Que querer crecer rápido es falta de compromiso.'],
  ['Generación Z · entraron ≈2015–hoy', 'Pandemia 2020; reforma de subcontratación 2021; T-MEC y nearshoring; IA generativa; informalidad cercana a 55 %.', 'Que no aguantan el trabajo de planta.'],
];

const myths = ['La Generación Z no tiene lealtad.', 'Los Boomers se resisten a la tecnología.', 'Los jóvenes no quieren ser jefes.', 'Los jóvenes necesitan reconocimiento constante.', 'Lo quieren todo ya.'];

const flexCols = [['Comunicación', '¿Canal y tono en que me escucha mejor?'], ['Contexto (el porqué)', '¿Qué parte del porqué no le he explicado?'], ['Feedback', '¿Qué tan seguido y qué tan directo?'], ['Reconocimiento', '¿Qué reconocimiento le importa de verdad?'], ['Autonomía', '¿Dónde más margen? ¿Dónde más estructura?'], ['Desarrollo', '¿Qué quiere aprender? ¿Qué conversación de carrera debo?'], ['Frecuencia', '¿Cada cuánto necesita contacto conmigo?']];
const flexKeep = [['Estándares', '¿Qué estándar le aplica igual que a todos?'], ['Ética', '¿Qué tema de integridad dejo claro?'], ['Seguridad', '¿Qué regla es innegociable en su puesto?'], ['Accountability', '¿De qué resultado responde y cómo doy seguimiento?'], ['Desempeño', '¿Qué espero, para cuándo y cómo se mide?']];

const html = `---
title: Cuaderno del participante
eyebrow: Entregable 02 · Liderar entre generaciones
sub: Una herramienta de trabajo para esta sesión y para los 30 días siguientes. Lo que escribas aquí es tuyo: no se recoge, no se revisa, no se comparte.
meta: <b>Nombre (opcional):</b> ______________________________<br><br>Taller ejecutivo · Dirección AMMX · Gerencia de Capacitación y Desarrollo
footer: Cuaderno del participante
file: 02_Workbook_Participante
---
${css}
<section>
${head('Antes de empezar', 'Cómo usar este cuaderno', 'Este cuaderno no repite las láminas. Es donde vas a pensar, decidir y registrar. Tres reglas:')}
<div class="grid3">
<div class="panel"><div class="label">Es tuyo</div><p>Nada de lo que escribas se recoge ni se comparte, tampoco con la dirección. Compartes solo lo que quieras.</p></div>
<div class="panel"><div class="label">Solo iniciales</div><p>Cuando pienses en personas concretas de tu equipo, escribe solo sus iniciales. Nunca nombres completos.</p></div>
<div class="panel"><div class="label">Puedes pasar</div><p>En cualquier ejercicio puedes decir “paso”, sin explicar por qué.</p></div>
</div>
<h2>El hilo de la sesión: una persona</h2>
<p>A lo largo de la sesión vas a trabajar con <strong>una persona real de tu equipo</strong> a quien te cuesta leer. La eliges en el Espejo del líder y la llevas hasta el final:</p>
<table class="plain"><tr><th>Momento</th><th>Qué haces con tu persona</th><th>Página</th></tr>
<tr><td>El espejo del líder</td><td>La eliges (iniciales)</td><td>12</td></tr>
<tr><td>Matriz de Flexibilidad</td><td>Decides qué adaptas y qué no adaptas con ella</td><td>15</td></tr>
<tr><td>Compromiso</td><td>Una conversación distinta en los próximos 7 días</td><td>17</td></tr>
<tr><td>Experimento a 30 días</td><td>Lees, adaptas y alineas durante un mes</td><td>18–19</td></tr></table>
<div class="panel navy"><div class="label">La frase de esta sesión</div><p style="font-size:14pt;font-weight:600;line-height:1.35">Personas distintas no necesitan estándares distintos. Pueden necesitar un liderazgo distinto.</p></div>
</section>

<section class="page">
${head('Acto 1 · El espejo', 'Diagnóstico de Reacción del Líder', 'Elige <strong>una</strong> opción por situación: lo que <strong>realmente harías primero</strong>, un martes con la agenda llena, no lo que crees que es correcto. Marca después qué tanto te incomoda la situación (1 = nada · 4 = mucho). Ocho minutos. No regreses a cambiar respuestas.')}
<div class="por" style="background:var(--panel);color:var(--navy)"><b>No es una prueba.</b> No mide personalidad ni tiene relación con la edad. Las cuatro opciones son respuestas que buenos líderes usan todos los días.</div>
${sits.slice(0, 2).map(sitHtml).join('')}
</section>
<section class="page">${sits.slice(2, 5).map(sitHtml).join('')}</section>
<section class="page">${sits.slice(5, 8).map(sitHtml).join('')}</section>
<section class="page">${sits.slice(8).map(sitHtml).join('')}
<p class="tiny" style="margin-top:10pt">No voltees la página hasta que el facilitador lo indique.</p></section>

<section class="page">
${head('Acto 1 · El espejo', 'Hoja de puntuación', 'Encierra en cada fila la letra que elegiste. La columna donde cae es tu respuesta. Suma cada columna (el total es 10) y copia tu nivel de incomodidad.')}
<table class="keytbl"><tr><th>Situación</th><th>DIRIGIR</th><th>EXPLICAR</th><th>ACOMPAÑAR</th><th>EXPLORAR</th><th>Incomodidad (1–4)</th></tr>
${Object.entries(KEY).map(([n, k]) => `<tr><td>${n}</td>${k.split('').map((l) => `<td>${l}</td>`).join('')}<td></td></tr>`).join('')}
<tr><td><b>Total</b></td><td></td><td></td><td></td><td></td><td></td></tr></table>
<div class="result">
${box('Mi respuesta por defecto', 'La columna con el total más alto (si empatan dos, ambas cuentan).', 1)}
${box('Mi rango', 'Cuántas columnas tienen 2 o más: ___ de 4.', 1)}
${box('Mis detonadores', 'Situaciones que marqué con incomodidad 3 o 4.', 1)}
${box('En mis detonadores respondí sobre todo…', '¿Cambio de respuesta cuando algo me incomoda?', 1)}
</div>

${box('En pares: ¿dónde en mi trabajo real reconozco esta respuesta por defecto?', '', 1)}
</section>

<section class="page">
${head('Acto 1 · El espejo', 'Cuatro respuestas. Ninguna sobra', 'Todas son útiles en alguna situación. El riesgo es tener solo una.')}
<div class="four">
<div class="panel"><div class="label">Dirigir</div><h3>Defino, decido, fijo la regla</h3><p><b>Útil:</b> seguridad, urgencia, estándar no negociable, personas nuevas sin referentes.</p><p><b>Si es la única:</b> cumplimiento sin compromiso; la gente deja de traerte información.</p><p><b>Para ampliar el rango:</b> “¿Qué información me estaría perdiendo si decido ahora?”</p></div>
<div class="panel"><div class="label">Explicar</div><h3>Doy el porqué y el contexto</h3><p><b>Útil:</b> cambios de política o proceso, decisiones que se sienten arbitrarias.</p><p><b>Si es la única:</b> el porqué se vuelve monólogo; convencer en vez de escuchar.</p><p><b>Para ampliar el rango:</b> “¿Qué ves tú que yo no estoy viendo?”</p></div>
<div class="panel"><div class="label">Acompañar</div><h3>Desarrollo, doy feedback, hago coaching</h3><p><b>Útil:</b> aspiración de crecer a cualquier edad, brechas con disposición, transiciones de rol.</p><p><b>Si es la única:</b> paternalismo; lentitud cuando se necesita una decisión.</p><p><b>Para ampliar el rango:</b> “¿Qué necesitas de mí en esto?”</p></div>
<div class="panel"><div class="label">Explorar</div><h3>Pregunto, escucho, suspendo el juicio</h3><p><b>Útil:</b> ambigüedad, conductas que no entiendo, cuando noto que me estoy enojando.</p><p><b>Si es la única:</b> no cerrar; en seguridad, la regla parece opcional.</p><p><b>Para ampliar el rango:</b> “¿Qué decidí y lo dije en voz alta?”</p></div>
</div>
${box('La respuesta que menos uso y en qué situación me haría falta', '', 2)}
<div class="panel"><div class="label">Lo que este resultado no dice</div><p>No dice qué tipo de persona o de líder eres, no predice tu desempeño, no se relaciona con tu edad ni con tu generación, no es comparable con el de otra persona y puede cambiar mañana. Es una foto de cómo leíste diez situaciones hoy.</p></div>
<p class="tiny">Precedente: el liderazgo situacional (Hersey y Blanchard, 1969) propuso adaptar el estilo a la situación; su validación empírica como modelo prescriptivo es limitada. Esta es una herramienta de reflexión, no una prueba psicométrica.</p>
</section>

<section class="page">
${head('Actos 2 a 4 · Provocación, Muro y evidencia', 'Lo que creía y lo que dice la evidencia', 'Anota tu voto antes de ver la evidencia y, después, lo que te llevas.')}
<table class="mv"><tr><th style="width:34%">Afirmación</th><th style="width:10%">Mi voto (C / F / D)</th><th style="width:30%">Lo que dice la evidencia (lo anoto yo)</th><th>Lo que me llevo</th></tr>
${myths.map((m) => `<tr><td>“${m}”</td><td></td><td></td><td></td></tr>`).join('')}</table>
<p class="tiny">En versiones cortas se usan cuatro afirmaciones. La hoja resumen con los veredictos y sus fuentes se entrega al final de la sesión.</p>
<h2>La generación es un lente, no un diagnóstico</h2>
<div class="grid3">
<div class="panel"><div class="label">Edad</div><p>La etapa de vida. A los 25 casi todos queremos crecer rápido y cambiar de empleo.</p></div>
<div class="panel"><div class="label">Época</div><p>Lo que vivimos todos a la vez: pandemia, inflación, IA, nearshoring.</p></div>
<div class="panel"><div class="label">Cohorte</div><p>Lo que marcaría a una generación. Existe, pero es la más pequeña y la más difícil de probar.</p></div>
</div>
<div class="grid2">${box('Del video: una idea con la que estuve de acuerdo y una que no', '', 2)}${box('Una creencia que hoy reviso', '', 2)}</div>
</section>

<section class="page">
${head('Acto 5 · Cuatro contextos de entrada al trabajo', '¿A qué mundo entramos a trabajar?', 'Esto describe el entorno, no a las personas. Los rangos de años son convenciones y varían por país.')}
<div class="ctx">${ctx.map((c) => `<div class="panel"><b>${c[0]}</b>${c[1]}<p style="margin-top:5pt;color:var(--coral);font-weight:600">No suponer: ${c[2]}</p></div>`).join('')}</div>
<h2>El contrato cambió</h2>
<table class="plain"><tr><th>Contrato anterior</th><th>Contrato contemporáneo</th></tr>
<tr><td>Trabaja duro → sé leal → acumula antigüedad → la empresa te protege → tu carrera avanza</td><td>Crea valor ↔ desarrolla habilidades ↔ mantén tu empleabilidad ↔ busca sentido ↔ revisa si el intercambio sigue valiendo</td></tr></table>
<div class="grid2">
${box('El contexto en el que yo entré a trabajar me enseñó que…', '', 3)}
${box('El contexto en el que entró mi persona probablemente le enseñó que…', 'Hipótesis: hay que verificarla con ella.', 3)}
</div>
${box('La lealtad se gana, en ambas direcciones. ¿Qué depende de mí para que la relación sea creíble?', '', 2)}
</section>

<section class="page">
${head('Acto 6 · Lo que la gente realmente quiere', 'Mapa de motivadores', 'Organizado por necesidad, no por generación. Lo que casi todos quieren es lo mismo; lo que varía es la frecuencia, la forma y la urgencia.')}
<table><tr><th style="width:22%">Necesidad</th><th style="width:30%">Lo que es común</th><th style="width:30%">Lo que varía</th><th>Con quién la atiendo peor (iniciales)</th></tr>
${needs.map((n) => `<tr><td>${n[0]}</td><td style="font-weight:400">${n[1]}</td><td style="font-weight:400">${n[2]}</td><td></td></tr>`).join('')}</table>
<div class="panel"><div class="label">Un dato para planta</div><p>El jefe directo es la variable que más distingue a un equipo de otro en compromiso (Gallup). Casi todo lo que la gente pide —claridad, feedback, desarrollo, cuidado— son conductas del jefe.</p></div>
${box('La necesidad común que estoy atendiendo peor, y con quién', '', 2)}
</section>

<section class="page">
${head('Acto 7 · El espejo del líder', 'Cinco minutos en silencio', 'Contesta con honestidad, no con elegancia. Solo iniciales.')}
${box('1 · ¿A quién me resulta más fácil liderar? ¿Qué tiene en común conmigo?', '', 1)}
${box('2 · ¿Quién me frustra, o a quién me cuesta leer?', '', 1)}
${box('3 · ¿Qué conductas me detonan?', 'Como conductas observables (“llega a las 7:05”), no como rasgos (“es irresponsable”).', 1)}
${box('4 · ¿Qué supongo sobre esa persona? ¿Cómo lo sé?', '', 1)}
${box('5 · Cuando alguien trabaja distinto a mí, ¿lo interpreto como diferente o como incorrecto? Un ejemplo reciente.', '', 1)}
${box('6 · ¿Qué parte de mi forma de liderar se formó en condiciones que cambiaron, y qué parte sigue siendo valiosa?', '', 1)}
<div class="panel navy"><div class="label">Mi persona</div><p style="font-size:12pt">La persona que voy a llevar al resto del taller es: <b>______</b> (solo iniciales)</p></div>
</section>

<section class="page">
${head('Acto 8 · Laboratorio de Colisiones', 'Notas del caso', 'Caso: ____ · Mesa: ____. Las respuestas de la mesa van en la hoja A3; aquí van tus notas.')}
<div class="grid2">
${box('1 · Mi primera reacción, tal como salió', '', 3)}
${box('2 · Lo que estoy suponiendo sin saberlo', '', 3)}
${box('3 · Lo que la persona podría necesitar (detrás de lo que pide)', '', 3)}
${box('4 · El resultado de negocio en juego', '', 3)}
${box('5 · La respuesta de liderazgo que usaría: el primer paso', '', 3)}
${box('6 · Lo que NO voy a negociar', '', 3)}
</div>
${box('De otra mesa: una respuesta que sí usaría y un supuesto que cuestionaría', '', 2)}
</section>

<section class="page">
${head('Acto 9 · Liderazgo adaptable', 'Leer, adaptar, alinear', 'Un modelo para recordar sin consultar materiales. De la respuesta rígida a la respuesta adaptable.')}
<div class="model3">
<div class="col"><div class="big">LEER</div><p><b>Entender a la persona y el contexto.</b></p><ul><li>¿Qué observo? ¿Qué supongo?</li><li>¿Qué podría necesitar, detrás de lo que pide?</li><li>¿Qué no sé todavía?</li></ul><p class="muted"><em>Pregunto antes de concluir.</em></p></div>
<div class="col"><div class="big">ADAPTAR</div><p><b>Ajustar cómo lidero.</b></p><ul><li>Comunicación y contexto</li><li>Feedback, reconocimiento, autonomía</li><li>Desarrollo y frecuencia</li></ul><p class="muted"><em>Cambio el cómo.</em></p></div>
<div class="col"><div class="big">ALINEAR</div><p><b>Sostener expectativas y resultados.</b></p><ul><li>Estándares, seguridad, ética</li><li>Accountability y desempeño</li><li>Lo digo de forma explícita</li></ul><p class="muted"><em>No muevo el qué.</em></p></div>
</div>
<h2>El caso de mi mesa, releído</h2>
<div class="grid3">${box('Leer', '¿Qué no preguntamos?', 4)}${box('Adaptar', '¿Qué ajustaríamos?', 4)}${box('Alinear', '¿Qué dejamos explícito?', 4)}</div>
<div class="panel"><div class="label">Cómo se conecta con mi diagnóstico</div><p>EXPLORAR alimenta LEER · EXPLICAR y ACOMPAÑAR son formas de ADAPTAR · DIRIGIR es indispensable para ALINEAR. Ninguna respuesta sobra: el rango es usarlas cuando la situación lo pide.</p></div>
</section>

<section class="page">
<div class="eyebrow">Acto 10 · Matriz de Flexibilidad del Liderazgo</div>
<h1>Adapto el cómo. No adapto el qué.</h1>
<p class="small muted">Llena primero la columna de tu persona: al menos tres filas de “lo que adapto” y <b>todas</b> las de “lo que no adapto”. Una celda vacía abajo es una alerta. La columna del caso es opcional.</p>
${vmatrix(flexCols, flexKeep)}
<div class="panel" style="margin-top:8pt"><div class="label">Las dos preguntas del par</div><p class="small">1. ¿Qué de lo que vas a adaptar le cambiaría la experiencia a esa persona desde mañana? · 2. ¿Qué de lo que no vas a adaptar ya se lo dijiste de forma explícita? — La seguridad es innegociable.</p></div>
</section>

<section class="page">
${head('Acto 11 · Invertir el lente', 'Desde otro lugar', 'Con alguien que empezó a trabajar en un contexto distinto al tuyo. Habla desde tu experiencia, no en nombre de nadie más.')}
${box('Algo que los líderes malinterpretan de las personas en mi etapa de carrera es…', '', 2)}
${box('Algo que las personas en mi etapa podríamos aprender de las de la tuya es…', '', 2)}
${box('Algo que las personas en tu etapa podrían aprender de la mía es…', '', 2)}
${box('Algo que probablemente ambos queremos es…', '', 2)}
${box('Lo que me llevo de lo que escuché', '', 2)}
</section>

<section class="page">
${head('Acto 12 · Compromiso', 'Una decisión, no una intención', 'Relee tu sobre del pre-work y tu hoja de puntuación. ¿Responderías hoy lo mismo? ¿Qué respuesta necesitas usar más con tu persona?')}
${box('Respondería hoy lo mismo / lo matizaría / lo respondería distinto — porque…', '', 2)}
<div class="grid3">${box('Dejar', 'Algo que dejaré de hacer (una conducta, no un rasgo)', 4)}${box('Empezar', 'Algo que empezaré a hacer (observable por mi equipo)', 4)}${box('Mantener', 'Algo que ya hago bien y voy a sostener', 4)}</div>
<div class="panel navy"><div class="label">Una persona · una conversación</div><p style="font-size:11.5pt;line-height:1.9">En los próximos 7 días tendré una conversación distinta con <b>______</b> (iniciales) sobre ____________________________________ .<br>Sabré que fue distinta porque ______________________________________________ .<br>Lo que no voy a negociar en esa conversación: ______________________________ .</p></div>
</section>

<section class="page">
${head('Después de la sesión', 'Experimento de Liderazgo a 30 días', 'Una persona que te cueste leer —la misma de hoy, salvo que haya una buena razón para cambiar—, con quien tengas interacción al menos semanal.')}
<table class="plain"><tr><th>Cuándo</th><th>Qué haces</th></tr>
<tr><td><b>Día 1</b></td><td>Eliges a la persona y escribes lo que hoy supones de ella.</td></tr>
<tr><td><b>Semana 1 · LEER</b></td><td>Una conversación donde tu principal tarea es preguntar. Mínimo tres preguntas abiertas; ninguna recomendación.</td></tr>
<tr><td><b>Semanas 2–3 · ADAPTAR</b></td><td>Cambias una o dos variables de la Matriz, no todas, y sostienes el cambio al menos dos semanas.</td></tr>
<tr><td><b>Semana 4 · ALINEAR</b></td><td>Conversación explícita sobre el resultado esperado y el estándar que no cambia.</td></tr>
<tr><td><b>Día 35–45</b></td><td>Sesión de seguimiento: compartimos aprendizajes, no identidades.</td></tr></table>
<p class="small">Mi persona: ______ · Inicio: ________ · Cierre: ________ · Sesión de seguimiento: ________</p>
<h2>Bitácora (cinco minutos por semana)</h2>
<div class="cols5 small-lines">${['Lo que supuse', 'Lo que pregunté', 'Lo que aprendí', 'Lo que cambié', 'Lo que pasó'].map((k) => box(k, 'Semana 1', 2)).join('')}</div>
<div class="cols5 small-lines" style="margin-top:6pt">${['Lo que supuse', 'Lo que pregunté', 'Lo que aprendí', 'Lo que cambié', 'Lo que pasó'].map((k) => box(k, 'Semana 2', 2)).join('')}</div>
</section>

<section class="page">
<div class="cols5 small-lines">${['Lo que supuse', 'Lo que pregunté', 'Lo que aprendí', 'Lo que cambié', 'Lo que pasó'].map((k) => box(k, 'Semana 3', 2)).join('')}</div>
<div class="cols5 small-lines" style="margin-top:6pt">${['Lo que supuse', 'Lo que pregunté', 'Lo que aprendí', 'Lo que cambié', 'Lo que pasó'].map((k) => box(k, 'Semana 4', 2)).join('')}</div>
<h2>Cierre del experimento (día 30)</h2>
${box('¿Qué supuesto tenía sobre esta persona que resultó incorrecto o incompleto?', '', 2)}
${box('¿Qué cambio en mi liderazgo tuvo más efecto?', '', 2)}
${box('¿Qué voy a mantener y con quién más lo voy a probar?', '', 2)}
<p class="tiny">La bitácora es tuya. Nadie la revisa. En la sesión de seguimiento se comparten aprendizajes, no identidades.</p>
<p class="tiny">Fuentes de la evidencia citada en la sesión: Evidence Pack (entregable 06), con muestras, geografía, URL y nivel de confianza.</p>


</section>

`;
fs.writeFileSync(path.join(__dirname, 'docs', '02_Workbook_Participante.html'), html);
console.log('Workbook HTML ok; situaciones:', sits.length);
