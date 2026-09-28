// Deck ejecutivo — Liderar entre generaciones (versión 180 min)
// Estándar AMMX (am_brand.js) + componentes editoriales (deck_components.js)
// Fuente de verdad: 00_decisiones/registro_decisiones.md · Evidencia: 01_evidence/evidence_pack.md
const path = require('path');
const K = require('./deck_components.js');
const { AM } = K;
const { C, F, T, rect, hline, deck } = AM;

const V = process.argv[2] || '180';                       // '180' | '120' | '90'
const OUT = path.join(__dirname, '..', 'entregables', V === '180' ? '01_Deck_Liderar_entre_Generaciones_AMMX.pptx' : `01_Deck_Liderar_entre_Generaciones_AMMX_${V}min.pptx`);
const SHORT = V !== '180';
// Oculta la lámina en las versiones indicadas (mapa de Gate 3 §3, ajustado por el orquestador). Nunca se saltan láminas en vivo.
const hideIn = (s, ...vs) => { if (vs.includes(V)) s.hidden = true; return s; };
const HIDE_ALL = ['180', '120', '90'];
const ANCHOR1 = 'Personas distintas no necesitan estándares distintos.';
const ANCHOR2 = 'Pueden necesitar un liderazgo distinto.';

(async () => {
  const pres = AM.newPres({ title: 'Liderar entre generaciones — De los estereotipos al liderazgo adaptativo' });
  let p = 1;
  const pg = () => ++p;

  // ───────────────────────────────────────────── 1 · PORTADA
  const cover = deck.cover(pres, {
    eyebrow: 'Taller ejecutivo · Dirección AMMX',
    title: 'Liderar entre generaciones',
    subtitle: (V === '180' ? '' : `Versión de ${V} minutos. `) + 'De los estereotipos al liderazgo adaptativo. Una conversación entre directores sobre cómo leemos a las personas y cómo ampliamos nuestro rango de liderazgo sin mover el estándar.',
    kpis: [{ value: { '180': '3 h', '120': '2 h', '90': '90′' }[V], label: 'de conversación, no de exposición' }, { value: { '180': '12', '120': '11', '90': '9' }[V], label: 'momentos de trabajo' }, { value: '1', label: 'persona, una conversación en 7 días' }],
    chain: ['Experiencia', 'Reflexión', 'Evidencia', 'Práctica', 'Compromiso'],
    audience: 'Directores y líderes senior · ArcelorMittal México',
    source: 'Gerencia de Capacitación y Desarrollo · Versión 1.0 · Octubre 2026',
  });
  K.notes(cover, {
    purpose: 'Recibir a la sala. La lámina está en pantalla mientras los participantes llegan; no se presenta.',
    time: 'Previo al inicio y 0:00–0:02 (palabras de la CHRO).',
    script: 'Sin guion. Los facilitadores saludan en la puerta y dirigen a cada persona a su mesa asignada (la CHRO en una mesa sin reportes directos, D-13). Cada lugar tiene el cuaderno cerrado y el sobre del trabajo previo cerrado.',
    question: '—', expected: '—',
    transition: 'La CHRO abre con 2 minutos (D-09): por qué esta conversación importa al negocio y que participará como una directora más. Facilitador A la presenta en una línea.',
    extra: 'LIDERA: CHRO (2 min) → Facilitador A.\nPRINCIPIO RECTOR: Personas distintas no necesitan estándares distintos. Pueden necesitar un liderazgo distinto.\nGUÍA PARA LA CHRO (D-21): como titular de RH, el riesgo es que la sala lo lea como "otro programa de RH". Hablar de negocio (sucesión en posiciones críticas de turno, conocimiento que se jubila, seguridad, retención de talento temprano) y de su propio interés en la conversación; no anticipar conclusiones ni hablar de "las nuevas generaciones".\n[POR CONFIRMAR] Propuesta para aprobación de la CHRO: que un director de Operaciones respetado co-abra 1 minuto con ella.',
  });

  // ───────────────────────────────────────────── APERTURA
  K.question(pres, {
    num: 0, section: 'Apertura', page: pg(),
    q: '“¿Qué les pasa a estas nuevas generaciones?”',
    sub: 'La escuchamos en pasillos, en juntas y en planta. Al final de estas tres horas les vamos a proponer otra pregunta.',
    notes: {
      purpose: 'Nombrar la frase de pasillo sin juzgarla y abrir curiosidad. El taller empieza donde está la sala, no donde RH quisiera que estuviera.',
      time: '0:02–0:04 (2 min).',
      script: 'A: "Seguramente todos la hemos escuchado. Algunos la hemos dicho. Probablemente también la dijeron de nosotros cuando teníamos 25 años. No venimos a decir que la pregunta está mal. Venimos a ver si es la pregunta que más nos sirve para liderar. Al final de la sesión les vamos a proponer otra."',
      question: 'Pregunta retórica; no se abre a respuesta.',
      expected: 'Sonrisas de reconocimiento; algún comentario tipo "la hacemos diario". No se discute todavía.',
      transition: '"Para llegar a esa otra pregunta vamos a trabajar de una forma particular."',
      extra: 'LIDERA: A.\nNO DECIR: "Hoy vamos a aprender…", "Como líderes debemos entender…". El tono es de pares.',
    },
  });

  const s3 = K.base(pres, {
    num: 0, section: 'Apertura', page: pg(),
    title: 'Primero ustedes; después la evidencia; al final una decisión',
    notes: {
      purpose: 'Dar el mapa de la sesión y el tipo de experiencia: más conversación que exposición.',
      time: '0:04–0:06 (2 min).',
      script: 'A: "Tres horas. Pocas láminas de contenido y muchas preguntas. Vamos a empezar con ustedes, no con las generaciones. Luego veremos qué dice la evidencia —y les adelanto que algunas cosas que creemos no se sostienen, en ninguna dirección—. Después vamos a practicar con casos de planta. Y vamos a terminar con una decisión concreta: una persona, una conversación, en siete días."',
      question: '—',
      expected: 'Atención; algunos escépticos esperando "el curso de RH". El mensaje "en ninguna dirección" reduce la sospecha de que el taller defiende a los jóvenes.',
      transition: '"Para que funcione necesitamos tres acuerdos."',
      extra: 'LIDERA: A.',
    },
  });
  deck.chevrons(s3, 0.6, 1.95, 12.1, ['EXPERIENCIA', 'REFLEXIÓN', 'EVIDENCIA', 'PRÁCTICA', 'COMPROMISO'], {
    h: 0.72, descs: ['Cómo reacciono yo', 'Qué supongo', 'Qué dicen los datos', 'Casos de planta', 'Una persona, una conversación'],
  });
  const outs = [['Una creencia', 'revisada con evidencia'], ['Una persona', 'leída de otra manera'], ['Una herramienta', 'la Matriz de Flexibilidad'], ['Una conversación', 'en los próximos 7 días']];
  outs.forEach((o, i) => {
    const x = 0.6 + i * 3.08;
    rect(s3, x, 4.2, 2.85, 0.06, [C.amber, C.coral, C.pink, C.plum][i]);
    T(s3, o[0], { x, y: 4.4, w: 2.85, h: 0.5, font: F.deck, fontSize: 18, bold: true, color: C.navy });
    T(s3, o[1], { x, y: 4.9, w: 2.85, h: 0.6, font: F.deck, fontSize: 12, color: C.slate });
  });
  T(s3, 'Lo que cada director se lleva', { x: 0.6, y: 3.75, w: 6, h: 0.35, font: F.deck, fontSize: 10, bold: true, color: C.coral, charSpacing: 2 });

  const s4 = K.base(pres, {
    num: 0, section: 'Apertura', page: pg(),
    title: 'Tres acuerdos para una conversación entre pares',
    notes: {
      purpose: 'Crear seguridad psicológica, especialmente con la CHRO en la sala y con facilitadores que le reportan (D-13).',
      time: '0:06–0:08 (2 min).',
      script: 'A (con la CHRO asintiendo): "Primero: lo que se dice aquí se puede usar, pero no se atribuye. Nadie sale con una opinión sobre lo que dijo otra persona. Segundo: se vale disentir, también de nosotros y de los datos. Tercero: cualquiera puede decir \'paso\', sin explicar por qué. Nada de lo que escriban en su cuaderno se recoge ni se comparte; tampoco con [CHRO], y ella está de acuerdo. Y una petición práctica: teléfonos boca abajo; los vemos en el receso." (La CHRO lo modela.)',
      question: '"¿Alguien quiere agregar un acuerdo?"',
      expected: 'Normalmente nadie agrega. Si alguien pide "que no sea teoría", aceptarlo como acuerdo.',
      transition: 'Relevo A → B con una observación: "Empecemos por lo más cercano: cómo reaccionamos nosotros."',
      extra: 'LIDERA: A. La CHRO confirma verbalmente el acuerdo de confidencialidad (una frase).',
    },
  });
  [['Se usa, no se atribuye', 'Lo que se dice aquí se puede usar afuera, pero nadie lo atribuye a una persona.'],
    ['Se vale disentir', 'De los datos, del video, de los facilitadores y entre ustedes.'],
    ['Puedo pasar', 'Cualquier persona puede no compartir, sin explicar por qué. Nada de lo escrito se recoge.']].forEach((a, i) => {
    const x = 0.6 + i * 4.1;
    deck.card(s4, x, 1.85, 3.85, 2.6, { tag: `Acuerdo ${i + 1}`, title: a[0], body: a[1] });
  });
  K.AM.T(s4, 'Aplica a todas las personas en la sala, incluida la dirección.', { x: 0.6, y: 4.8, w: 12, h: 0.5, font: F.deck, fontSize: 14, bold: true, color: C.coral });

  // ───────────────────────────────────────────── ACTO 1 · EL ESPEJO
  K.divider(pres, { num: 1, section: 'Sección 1 · Experiencia · Acto 1', title: 'Primero, cómo reaccionamos nosotros', page: pg(),
    notes: { purpose: 'Abrir la sección de experiencia: el taller empieza por los directores, no por las generaciones.', time: 'Transición (sin tiempo propio).', script: 'Sin guion: la lámina se muestra mientras el facilitador que lidera la sección toma su lugar.', question: '—', expected: '—', transition: 'Siguiente lámina.', extra: 'Divisor de sección del Estándar AMMX (decks de más de 15 láminas).' } });
  K.activity(pres, {
    num: 1, section: 'El espejo', page: pg(),
    title: SHORT ? 'Ocho situaciones. Su primera reacción, no la ideal' : 'Diez situaciones. Su primera reacción, no la ideal',
    steps: ['Lean cada situación del cuaderno y elijan lo que realmente harían primero, un martes con la agenda llena.', 'Marquen qué tanto les incomoda la situación, de 1 a 4.', 'No regresen a cambiar respuestas.'],
    time: SHORT ? '6' : '8', format: 'Individual y en silencio', materials: 'Cuaderno · Diagnóstico de Reacción del Líder\n\nNo es una prueba. No mide personalidad ni tiene relación con la edad.',
    question: 'Las cuatro opciones son respuestas que buenos líderes usan todos los días.',
    notes: {
      purpose: 'Que cada director vea su respuesta por defecto antes de hablar de generaciones (Idea 1).',
      time: SHORT ? 'Versión corta: 1 min instrucción + 6 min respuesta (8 situaciones: se omiten la 5 y la 9).' : '0:08–0:18 (2 min instrucción + 8 min respuesta).',
      script: 'B (guion obligatorio, D-16): "Esto no es una prueba y no mide personalidad. Tampoco tiene nada que ver con edad. Son diez situaciones que ustedes conocen. Elijan lo que realmente harían primero, un martes con la agenda llena, no lo que creen que es correcto. Las cuatro opciones son respuestas que buenos líderes usan todos los días. El resultado es suyo: no se entrega, no se recoge, no se compara." A los 6 minutos: "Dos minutos más."',
      question: '—',
      expected: 'Silencio y concentración. Algunas personas preguntan "¿y si haría dos cosas?": "Elijan la primera."',
      transition: '"Vamos a ver qué dice su hoja de puntuación."',
      extra: 'LIDERA: B. A observa ritmo de la sala.\nPRECEDENTE: el liderazgo situacional (Hersey y Blanchard, 1969) propuso adaptar el estilo a la situación; su validación empírica como modelo prescriptivo es limitada (Thompson y Vecchio, 2009). Tomamos la idea de adaptar, no la promesa de medir.',
    },
  });

  const s6 = K.base(pres, {
    num: 1, section: 'El espejo', page: pg(),
    title: 'Mi respuesta por defecto, mi rango y mis detonadores',
    notes: {
      purpose: 'Autopuntuación rápida y lectura no evaluativa del resultado.',
      time: '0:18–0:21 (3 min).',
      script: 'B: "Abran la solapa de puntuación. Encierren la letra que eligieron en cada fila; la columna les dice qué respuesta fue. Sumen. Su respuesta por defecto es la columna más alta. Su rango es cuántas columnas tienen dos o más. Sus detonadores son las situaciones que marcaron con 3 o 4." Y al terminar: "Lo que obtienen es una foto de cómo leyeron diez situaciones hoy. No es quiénes son. Sirve para una pregunta: ¿tengo más de una respuesta disponible cuando la situación lo pide?"',
      question: '—',
      expected: 'Sorpresa en algunos ("salí muy DIRIGIR", "casi no EXPLORO"). Prohibido pedir manos por estilo o hacer conteos de sala (D-16).',
      transition: '"Compártanlo con la persona de al lado. Solo lo que quieran."',
      extra: 'LIDERA: B.\nCLAVE DE PUNTUACIÓN: está en el cuaderno (solapa). Versión corta: 8 situaciones (se omiten 5 y 9).',
    },
  });
  const styles = [['DIRIGIR', 'Defino, decido, fijo la regla', 'Seguridad, urgencia, estándar'], ['EXPLICAR', 'Doy el porqué y el contexto', 'Cambios, decisiones que no se entienden'], ['ACOMPAÑAR', 'Desarrollo, doy retroalimentación, hago acompañamiento', 'Crecimiento, desempeño, aspiración'], ['EXPLORAR', 'Pregunto, escucho, suspendo el juicio', 'Ambigüedad, conducta que no entiendo']];
  styles.forEach((st, i) => {
    const x = 0.6 + i * 3.08;
    rect(s6, x, 1.8, 2.85, 0.08, [C.amber, C.coral, C.pink, C.plum][i]);
    T(s6, st[0], { x, y: 1.98, w: 2.85, h: 0.45, font: F.deck, fontSize: 18, bold: true, color: C.navy });
    T(s6, st[1], { x, y: 2.45, w: 2.85, h: 0.6, font: F.deck, fontSize: 11.5, color: C.navy });
    T(s6, 'Útil cuando: ' + st[2], { x, y: 3.1, w: 2.85, h: 0.6, font: F.deck, fontSize: 10, color: C.slate });
  });
  [['Mi respuesta por defecto', 'La columna con más respuestas. A la que llego sin pensar.'], ['Mi rango', 'Cuántas columnas tienen 2 o más. Cuántas respuestas tengo disponibles.'], ['Mis detonadores', 'Situaciones con incomodidad 3 o 4. ¿Qué tienen en común?']].forEach((r, i) => {
    const x = 0.6 + i * 4.1;
    s6.addShape('roundRect', { x, y: 4.1, w: 3.85, h: 1.75, fill: { color: C.panel }, line: { type: 'none' }, rectRadius: 0.08 });
    T(s6, r[0].toUpperCase(), { x: x + 0.25, y: 4.28, w: 3.4, h: 0.3, font: F.deck, fontSize: 9.5, bold: true, color: C.coral, charSpacing: 1.5 });
    T(s6, r[1], { x: x + 0.25, y: 4.65, w: 3.4, h: 1.1, font: F.deck, fontSize: 12, color: C.navy });
  });
  T(s6, 'Ninguna respuesta es mejor que otra. El riesgo es usar solo una.', { x: 0.6, y: 6.15, w: 12, h: 0.5, font: F.deck, fontSize: 14, bold: true, color: C.coral });

  const s7 = K.base(pres, {
    num: 1, section: 'El espejo', page: pg(),
    title: 'Vemos a las personas desde nuestro propio sistema operativo',
    notes: {
      purpose: 'Conversación en pares y plenaria breve; instalar la Idea 1: las mismas palabras significan cosas distintas según dónde y cuándo aprendimos a trabajar.',
      time: '0:21–0:28 (5 min pares + 2 min plenaria).',
      script: 'B: "En pares, cinco minutos: ¿qué les sorprendió de su resultado? ¿Qué situación los incomodó más y por qué?" Plenaria (2 min, dos o tres voces, voluntaria): A pregunta "¿Qué significa para ustedes \'compromiso\'? ¿Y qué creen que significa para la persona más nueva de su equipo?" y cierra: "Cada uno de nosotros aprendió qué significa trabajo duro, respeto o compromiso en un lugar y en un momento. Eso es nuestro sistema operativo. Funciona. El riesgo es creer que es el único que existe. Por ejemplo, para alguien \'respeto\' es no cuestionar al jefe en público; para otra persona es que el jefe le explique el porqué."',
      question: '"¿Qué significa para ustedes \'compromiso\'? ¿Y qué creen que significa para la persona más nueva de su equipo?" (única pregunta de plenaria; "¿qué les sorprendió?" se queda en pares).',
      expected: '"Compromiso es estar cuando se necesita / quedarse hasta que salga." Contraste: "entregar lo acordado con calidad". Ambas son legítimas.',
      transition: 'A: "Ahora vamos a escuchar a alguien que tiene una opinión muy clara sobre esto."',
      extra: 'LIDERA: B (pares) → A (cierre de Idea 1).\nRELEVO: B comparte una observación de sala ("En varias mesas escuché que…") y A la conecta con la idea.',
    },
  });
  hideIn(s7, '90');
  const words = ['Trabajo duro', 'Respeto', 'Autoridad', 'Compromiso', 'Estabilidad', 'Reconocimiento', 'Crecimiento', 'Balance', 'Lealtad', 'Comunicación', 'Éxito'];
  words.forEach((w, i) => {
    const col = i % 4, row = Math.floor(i / 4);
    T(s7, w, { x: 0.6 + col * 3.05, y: 1.85 + row * 0.95, w: 2.95, h: 0.8, font: F.deck, fontSize: 21, bold: true, color: i === 3 ? C.coral : C.navy, valign: 'middle' });
  });
  hline(s7, 0.6, 4.85, 12.1, C.rule, 0.75);
  T(s7, 'Las mismas palabras. Distinto significado según dónde y cuándo aprendimos a trabajar.', { x: 0.6, y: 5.0, w: 12, h: 0.5, font: F.deck, fontSize: 15, bold: true, color: C.navy });
  T(s7, 'Nuestra interpretación es real para nosotros. No necesariamente describe la realidad de la otra persona.', { x: 0.6, y: 5.55, w: 12, h: 0.5, font: F.deck, fontSize: 13, color: C.slate });

  // ───────────────────────────────────────────── ACTO 2 · LA PROVOCACIÓN
  K.divider(pres, { num: 2, section: 'Sección 2 · Provocación y evidencia · Actos 2 a 4', title: 'Lo que creemos, frente a lo que dicen los datos', page: pg(),
    notes: { purpose: 'Abrir la sección de provocación y evidencia.', time: 'Transición (sin tiempo propio).', script: 'Sin guion: la lámina se muestra mientras el facilitador que lidera la sección toma su lugar.', question: '—', expected: '—', transition: 'Siguiente lámina.', extra: 'Divisor de sección del Estándar AMMX (decks de más de 15 láminas).' } });
  const s8 = K.base(pres, {
    num: 2, section: 'La provocación', page: pg(),
    title: 'Una opinión, no evidencia. Úsenla para pensar',
    source: 'Sinek, S. (2016). Entrevista en Inside Quest con Tom Bilyeu ("The Millennial Question"). Fragmento. Opinión de un divulgador, no evidencia.',
    notes: {
      purpose: 'Encuadrar el video como provocación y no como evidencia (D-18), antes de proyectarlo.',
      time: '0:28–0:34 (1 min encuadre + ≤5 min video).',
      script: 'A: "Vamos a ver un fragmento de Simon Sinek, un divulgador muy escuchado en temas de liderazgo. Es una opinión popular; algunas cosas les van a resonar y otras no tienen respaldo. No se los vamos a explicar. Después queremos saber qué piensan ustedes." Se proyecta el fragmento. Al terminar, silencio de 3 segundos.',
      question: '—',
      expected: 'Asentimientos en las partes sobre empresas y liderazgo; posibles risas o incomodidad en las partes sobre jóvenes y celulares.',
      transition: 'B: "Cuatro preguntas para sus mesas."',
      extra: 'LIDERA: A (encuadre) · B opera el video.\n[POR CONFIRMAR] Fragmento exacto contra el video que proporcionó la CHRO (D-01); tiempos sugeridos ≈10:00–14:30 de la entrevista de 2016 (aproximados). Recomendación del equipo de evidencia: usar el segmento donde Sinek pone la responsabilidad en las empresas y los líderes (≈10:00–final de la entrevista de 2016), no los segmentos de crianza y dopamina, que generalizan de forma negativa sobre una generación sin evidencia. Alternativa si la CHRO proporcionó otra pieza: Nordic Business Forum 2025 ("We gave them no loyalty…") — acceso por membresía.\nCOMPROMISO CON LA CHRO (D-13): sabe de antemano que el taller cuestionará algunas afirmaciones del video.\nArchivo local con licencia o la copia de la CHRO, con subtítulos en español incrustados (.srt revisado); los subtítulos automáticos de YouTube no funcionan sin conexión. Fragmento congelado en T–14. Respaldo: laptop 2 → streaming por la red del recinto → A resume el argumento en voz (máx. 2 min).',
    },
  });
  T(s8, '≤ 5', { x: 0.6, y: 1.9, w: 3, h: 1.4, font: F.deck, fontSize: 88, bold: true, color: C.coral });
  T(s8, 'minutos de video', { x: 0.6, y: 3.3, w: 3.5, h: 0.4, font: F.deck, fontSize: 14, bold: true, color: C.navy });
  const iy8 = deck.panel(s8, 5.2, 1.8, 7.53, 4.6, 'Mientras lo ven, noten');
  deck.bullets(s8, 5.5, iy8, 6.9, 3.6, ['Con qué están de acuerdo.', 'Qué los incomoda.', 'Qué creen que no ve.', 'Si lo que describe es de una generación… o de una época, de una etapa de vida, de una empresa.'], { fontSize: 15 });

  K.questionList(pres, {
    num: 2, section: 'La provocación', page: pg(),
    title: V === '90' ? 'Una pregunta para la mesa' : 'Cuatro preguntas para la mesa',
    questions: V === '90' ? ['¿Qué cambió: la gente o el trato?'] : ['¿Con qué estuvieron de acuerdo?', '¿Qué los incomodó?', '¿Qué creen que no ve?', '¿Qué cambió: la gente o el trato?'],
    size: V === '90' ? 30 : 22,
    aside: 'Seis minutos en mesa.\n\nUna frase por mesa al rotafolio “Lo que escuchamos”.\n\nNo hay respuestas correctas. Tampoco vamos a defender ni a refutar al autor.',
    asideLabel: 'Dinámica',
    notes: {
      purpose: 'Que la sala formule sus propias reacciones. Los facilitadores permanecen neutrales y hacen visibles las respuestas.',
      time: '0:34–0:43 (6 min mesa + 3 min captura).',
      script: 'B: "Seis minutos. Una persona de cada mesa escribe una frase por pregunta en su tarjeta." Luego, en plenaria, B recoge una frase por mesa y la escribe textual en el rotafolio "Lo que escuchamos". A solo agradece. Pregunta de seguimiento en plenaria (D-18): "¿Qué de lo que dice aplica a cualquier persona, de cualquier edad?"',
      question: '¿Qué cambió: la gente o el trato?',
      expected: 'Acuerdo: "las empresas también cambiaron", "los jefes no desarrollamos". Incomodidad: "no todos los jóvenes son así", "nosotros también pasamos por eso". Lo que no ve: "la realidad de México / de planta", "que el mercado laboral cambió".',
      transition: 'A: "No vamos a responder hoy quién tiene razón. Vamos a regresar a este rotafolio en una hora." B: "Mientras tanto, pongamos a prueba lo que creemos."',
      extra: 'LIDERA: B (mesas y captura) · A (cierre neutral).\nNO DECIR: "Sinek tiene razón" ni "Sinek se equivoca". NO explicar el video.\nSi alguien dice "esto es puro cuento": "Probablemente algo de eso hay. ¿Qué parte sí te resonó?"',
    },
  });

  // ───────────────────────────────────────────── ACTO 3 · EL MURO
  const m10 = K.activity(pres, {
    num: 3, section: 'El Muro Generacional', page: pg(),
    title: 'Coloquen cada frase donde la verían primero',
    steps: ['Cada persona toma 3 tarjetas del sobre de su mesa.', 'En silencio, colóquenlas en la zona de la generación a la que la atribuirían. Sin negociar.', 'Recorran el muro completo: ¿dónde se amontonan las tarjetas?'],
    time: '7', format: 'De pie, en silencio', materials: 'Un solo muro para toda la sala\n4 zonas · ' + (V === '120' ? '12' : '16') + ' frases por mesa · cinta azul\n\nLos rangos de años son convenciones y varían por país.',
    question: 'No hay respuestas correctas.',
    notes: {
      purpose: 'Hacer visible, sin sermón, que atribuimos necesidades humanas a una sola generación (Idea 2). La incomodidad la produce la propia sala.',
      time: '0:43–0:50 (1 min instrucción, 3 min colocar, 3 min recorrer).',
      script: 'B: "Cada mesa tiene 16 frases que escuchamos todos los días. Colóquenlas en la generación a la que ustedes, con su experiencia, la atribuirían. Una frase, una zona. En silencio, para no negociar la respuesta: si dos personas no coinciden, la coloca quien la tenga en la mano." Si preguntan "¿y si aplica a todas?": "Colócala donde la verías primero." Si alguien la deja en el espacio central vacío, se permite sin comentar.',
      question: '"Antes de sentarse, recorran el muro: ¿qué generación se ve más cargada? ¿Qué frase aparece en varias zonas?"',
      expected: 'Acumulación de "Quiero crecer…", "Quiero retroalimentación…" y "Estoy dispuesto a cambiar de empresa…" en Millennials/Z; "Valoro la seguridad económica…" y "Me importa que mi experiencia…" en Boomers/X.',
      transition: 'B, frente al muro con la sala en semicírculo: "¿Qué ven?"',
      extra: 'COLOCACIÓN EN DOS OLEADAS de 90 s (mesas 1–2, luego 3–4/5) para no amontonarse; superficie ≥ 6 m o dos paneles (G2-28). Tarjetas con adhesivo removible, sin número de mesa.\nLIDERA: B. A observa qué frases generan duda (personas que caminan entre dos zonas) para usarlas en el cierre reflexivo.\nTARJETAS (D-14, en primera persona): 16 necesidades del Paquete de actividades. En 120 min, las primeras 12. En 90 min el Muro se elimina.\nNO FOTOGRAFIAR el muro armado (D-14).',
    },
  });

  hideIn(m10, '90');
  const m11 = K.question(pres, {
    num: 3, section: 'El Muro Generacional', page: pg(), dark: true,
    q: '¿Estamos describiendo generaciones… o seres humanos?',
    sub: '¿Quién en esta sala se reconoce en alguna de estas frases?',
    notes: {
      purpose: 'Momento pedagógico central del Acto 3. Revelación en 3 pasos (D-14).',
      time: '0:50–0:55 (5 min).',
      script: 'Paso 1 · B: "¿Qué ven? ¿Qué patrón aparece?" (2–3 observaciones, sin juicio). Paso 2 · B lee cinco frases, una por una, y pregunta: "¿Quién en esta sala se reconoce en esta frase?" (mano alzada; nadie dice su edad). Las manos se levantan en todas las edades. Paso 3 · Pausa larga. Proyectar la pregunta. Silencio de 5 segundos. No contestar por la sala.',
      question: '¿Estamos describiendo generaciones… o seres humanos?',
      expected: '"Todos queremos eso." "Lo que cambia es cómo lo pedimos." Algún escéptico: "Es obvio, todos quieren reconocimiento." Validar: "Exacto. Y aun así, ¿dónde la colocamos?"',
      transition: 'B desenrolla el póster central NECESIDADES HUMANAS y, con A, mueve las tarjetas fuera de las zonas.',
      extra: 'LIDERA: B · A lee en voz alta.\nNUNCA atribuir tarjetas a personas o mesas. Normalizar: "No es un error de esta sala. Así funciona el cerebro: agrupa para ahorrar energía."',
    },
  });

  hideIn(m11, '90');
  const s12 = K.base(pres, {
    num: 3, section: 'El Muro Generacional', page: pg(),
    title: 'Las necesidades son humanas; cambia la forma de expresarlas',
    source: 'Costanza et al. (2012), meta-análisis, N = 19,961; National Academies of Sciences, Engineering, and Medicine (2020); Kooij et al. (2011).',
    notes: {
      purpose: 'Cierre físico y conceptual del Muro: las tarjetas salen de las zonas generacionales y van a una sola columna.',
      time: '0:55–0:57 (2 min).',
      script: 'B y A sacan las tarjetas de las zonas generacionales y las pegan en el póster central NECESIDADES HUMANAS. Una línea por tarjeta, nunca más: "Saber que mi trabajo tiene futuro. Lo queremos todos, sobre todo cuando hay incertidumbre." "Crecer y saber mi siguiente paso. Así queríamos crecer nosotros a los 27." "Adoptar una herramienta si veo para qué sirve. Depende mucho de cómo presentamos el cambio." "Que mi experiencia se tome en cuenta. Esa también es de todos." A cierra: "Lo que acabamos de hacer no es un error de esta sala. La pregunta es si queremos liderar con ese atajo. Veamos qué dicen los datos."',
      question: 'Opcional, si hay tiempo: "¿Qué decisiones de liderazgo tomamos en planta con base en la zona donde pusimos una tarjeta?"',
      expected: 'Reconocimiento; algo de humor. Un director puede decir "la forma sí cambia". Validar: es exactamente el punto.',
      transition: 'A: "Veamos qué dicen los datos. Cinco afirmaciones."',
      extra: 'LIDERA: B (tarjetas) → A (frase de salida y relevo).',
    },
  });
  hideIn(s12, '90');
  // Solo tarjetas 1–12 para que coincidan con el set de la versión de 120 (G2-26)
  const needs = ['Quiero saber que mi trabajo tiene futuro', 'Quiero que reconozcan lo que aporto', 'Quiero crecer y saber mi siguiente paso', 'Me importa que mi experiencia se tome en cuenta', 'Necesito entender el porqué', 'Quiero que mi trabajo tenga sentido', 'Necesito flexibilidad para mi vida fuera del trabajo', 'Quiero un jefe que confíe en mí'];
  needs.forEach((n, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.6 + col * 3.6, y = 1.85 + row * 0.95;
    rect(s12, x, y + 0.12, 0.08, 0.5, C.coral);
    T(s12, '“' + n + '”', { x: x + 0.25, y, w: 3.25, h: 0.8, font: F.deck, fontSize: 12, bold: true, color: C.navy, valign: 'middle' });
  });
  const iy12 = deck.panel(s12, 8.1, 1.8, 4.63, 4.85, 'Lo que varía');
  deck.bullets(s12, 8.4, iy12, 4.1, 3.9, ['La frecuencia: quien empieza necesita más señales de si va bien.', 'La forma: público o privado, en persona o por mensaje.', 'La urgencia: depende de la etapa de vida (hipoteca, hijos, retiro).', 'Todo eso cambia más con la edad y el contexto que con el año de nacimiento.'], { fontSize: 12 });

  // ───────────────────────────────────────────── ACTO 4 · MITO VS. DATO
  K.activity(pres, {
    num: 4, section: 'Mito vs. Dato', page: pg(),
    title: (SHORT ? 'Cuatro' : 'Cinco') + ' afirmaciones. Tres segundos para decidir',
    steps: ['Leemos la afirmación en voz alta.', 'Al contar tres, todos levantan su tarjeta al mismo tiempo: CIERTO, FALSO o DEPENDE.', 'Escuchamos a alguien que votó distinto a la mayoría.', 'Vemos qué dice la evidencia.'],
    time: SHORT ? '10' : '13', format: 'Voto simultáneo', materials: '3 tarjetas por persona\n\nVotamos todos, incluida la dirección. Nadie mira al vecino antes.',
    notes: {
      purpose: 'Desmontar estereotipos con evidencia antes de explicar contextos (D-03, Idea 2). El voto simultáneo evita la conformidad con el rango.',
      time: '0:57–0:58 (1 min de instrucción; el bloque completo dura 13 min).',
      script: 'A: "' + (SHORT ? 'Cuatro' : 'Cinco') + ' afirmaciones que escuchamos en la industria. Tienen tres segundos para decidir. Cuando cuente tres, todos levantan su tarjeta al mismo tiempo. Nadie mira al vecino antes. Una advertencia: los datos no le dan la razón a nadie en todo. Tampoco a los jóvenes."',
      question: '—',
      expected: 'Energía alta; competencia sana.',
      transition: '"Primera afirmación."',
      extra: 'LIDERA: A · B anuncia la distribución a ojo (no se registra: el dato no alimenta ninguna decisión, G3-13).\nRITMO: ≈2 min por afirmación (voto ≈60 s: lectura, voto, distribución y una voz disidente · revelación ≈40–60 s).\nREGLA DE CORTE (180): si a la 1:05 no ha iniciado la afirmación 4 (reconocimiento), A la resume en una frase y pasa a la 5, que es obligatoria por D-18.\nRESERVA: "La gente ya no quiere trabajar" queda como lámina oculta (comodín) en todas las versiones; su evidencia está en la guía para responder la objeción.\nLa CHRO vota como cualquier participante y no se le pregunta en plenaria (D-13).\nVersiones 120/90: cuatro afirmaciones en pantalla (lealtad, tecnología, jefes y la del video).',
    },
  });

  const myths = [
    {
      claim: 'La Generación Z no tiene lealtad.', verdict: 'MITO', title: 'Cambiar más de empleo a los 25 es de edad, no de generación',
      expected2: 'Asentimientos de reconocimiento ("yo también me moví a los 25"). Alguien: "pero antes no se iban por 15 %". Validar y preguntar: "¿Qué más se ofrecía antes para quedarse?"',
      value: '3.0 años', valueLabel: 'Antigüedad mediana con su empleador de las personas de 25 a 34 años (EE. UU., enero de 2026). En 1983 también era 3.0; en 2000, 2.6.',
      valueDetail: 'Personas de 55 a 64 años: 9.6 años. La antigüedad se acumula con la edad.',
      points: ['Es un efecto de edad y etapa de vida: a los 30 también cambiábamos más de empleo.', 'La lealtad responde a la reciprocidad percibida. Cuando la persona siente que la empresa no cumplió, bajan la confianza y el compromiso (estudios con trabajadores de todas las edades).', 'No tenemos el dato mexicano comparable; el de AMMX por rango de edad sería el mejor espejo.'],
      takeaway: 'La pregunta útil no es si son leales, sino qué les ofrecemos para quedarse.',
      source: 'BLS, Employee Tenure (CPS, enero de 2026, EE. UU.); EBRI (2025), Trends in Employee Tenure 1983–2024; Zhao et al. (2007), meta-análisis.',
      expected: 'Mayoría CIERTO o DEPENDE. Voz disidente típica: "Los de antes también se iban."',
      script: 'A: "El dato de Estados Unidos, que es el que tiene series largas, muestra que la mitad de las personas de 25 a 34 años lleva tres años o menos con su empleador… exactamente igual que en 1983. Los que hoy tienen 55 a 64 llevan casi diez. Es la edad, no la generación. Y la lealtad, según la investigación sobre contrato psicológico, sigue a la reciprocidad."',
    },
    {
      claim: 'Los Boomers se resisten a la tecnología.', verdict: 'MITO',
      expected2: 'Directores mayores sonríen; alguien puede citar un caso de rechazo a SAP. Preguntar: "¿Se le explicó para qué le servía a él?"', title: 'La brecha es de oportunidad y de uso, no de capacidad',
      value: '1 de 6', valueLabel: 'estereotipos sobre trabajadores mayores que se sostienen en un meta-análisis de 418 estudios (208,204 personas).',
      valueDetail: '"Más resistentes al cambio" y "menos motivados" no se sostienen. El único que sí: participan menos, y muestran menos disposición, en capacitación.',
      points: ['Eso puede reflejar que se les ofrece menos o que ven menos retorno a esa edad; lo que sí sabemos es que la edad no predice el desempeño en capacitación.', 'Entre trabajadores del conocimiento que usan IA (31 países), 73 % de las personas de 58 años o más la lleva por su cuenta al trabajo (Generación Z: 85 %).', 'La edad se asocia con mejor desempeño en seguridad.'],
      takeaway: 'Cuando un experto no adopta una herramienta, pregunten primero para qué le sirve a él.',
      source: 'Ng y Feldman (2012; 2008), meta-análisis; Microsoft y LinkedIn, Work Trend Index 2024 (31,000 personas, 31 países).',
      expected: 'Muchos votos DEPENDE; risas de reconocimiento entre directores mayores que usan tecnología intensivamente.',
      script: 'A: "Un meta-análisis con más de 200 mil personas revisó seis estereotipos sobre trabajadores mayores. Solo uno se sostiene: participan menos en capacitación. Y eso puede deberse a que se les ofrece menos. Resistencia al cambio: no se sostiene. Y un dato para planta: la edad se asocia con mejor desempeño en seguridad."',
    },
    {
      claim: 'La gente ya no quiere trabajar.', verdict: 'MITO', reserve: true,
      expected2: 'Alguien: "en planta no cubrimos turnos". Separar disponibilidad para el trabajo de condiciones del trabajo.', title: 'El problema no es la disposición a trabajar, es el compromiso',
      value: '2,207', valueLabel: 'horas trabajadas al año por trabajador en México: el más alto de la OCDE (promedio 1,683). Dato 2023.',
      points: ['En EE. UU., la participación laboral de 25 a 54 años alcanzó a inicios de 2026 su nivel más alto desde 2001.', 'Lo que sí es bajo es el compromiso: 20 % de los empleados en el mundo (Gallup, datos 2025); no es un problema de una sola generación.', 'La llamada "renuncia silenciosa" describe al grupo no comprometido. En 2022 afectó más a menores de 35, y lo que bajó fue la claridad, el desarrollo y el cuidado del jefe: un fenómeno de gestión más que de voluntad.'],
      takeaway: 'La conversación útil no es sobre ganas de trabajar, sino sobre compromiso.',
      source: 'OCDE, Hours worked (2023); Gallup, State of the Global Workplace 2026 (datos 2025); S&P Global (2026) con datos BLS.',
      expected: 'Voto dividido. Un director puede decir "en planta cuesta mucho cubrir turnos": validar el dato local y separar disposición de condiciones.',
      script: 'A: "México es el país de la OCDE donde más horas se trabajan al año. En Estados Unidos, la participación laboral en edad productiva está en máximos de 25 años. Lo que sí está bajo en todo el mundo es el compromiso: uno de cada cinco, y no es cosa de una sola generación. Esa es una conversación de liderazgo."',
    },
    {
      claim: 'Los jóvenes no quieren ser jefes.', verdict: 'DEPENDE',
      expected2: 'Silencio. Algún director: "es que el puesto de jefe sí es pesado". Validar: "Exacto. Eso es lo que ven." No llenar la pausa.', title: 'No rechazan liderar; rechazan el liderazgo que ven de cerca',
      value: '6 % · 76 %', valueLabel: 'Generación Z y millennials: liderazgo como meta principal hoy (6 %). Generación Z: interés en liderazgo senior algún día (76 %).',
      valueDetail: 'Millennials: 67 % interesados en liderazgo senior en algún momento.',
      points: ['Las barreras que citan: estrés y desgaste, exceso de responsabilidad, equilibrio con la vida personal.', 'Los gerentes actuales son el grupo cuyo compromiso más cayó: de 27 % a 22 % en un año (mundo, Gallup).', 'Las encuestas de "rechazo consciente a ser jefe" que circulan tienen metodología débil.'],
      takeaway: '¿Qué ven cuando nos ven liderar?',
      source: 'Deloitte, Gen Z and Millennial Survey 2025 y 2026 (≈22,500–23,500 personas, 44 países); Gallup, State of the Global Workplace 2026.',
      expected: 'Mayoría CIERTO. La pregunta final suele producir silencio: es el momento más fuerte del bloque. No llenarlo.',
      script: 'A: "Depende de cómo se pregunte. Si la pregunta es si su meta principal hoy es ser jefe, solo 6 %. Si la pregunta es si les interesa llegar a liderazgo senior algún día, tres de cada cuatro. Lo que rechazan es el costo que ven. Y los datos dicen que el compromiso de los jefes de hoy es el que más cayó." Pausa. Leer la pregunta final.',
    },
    {
      claim: 'Los jóvenes necesitan reconocimiento constante.', verdict: 'DEPENDE', shortHide: true, title: 'En parte cierto: varía la frecuencia; la necesidad es de todos',
      expected2: 'La sala acierta en parte; decirlo en voz alta aumenta la credibilidad del bloque: "Aquí tenían razón a medias."',
      value: '≈ 50 %', valueLabel: 'de las personas de Generación X y Boomers también quiere reconocimiento al menos algunas veces al mes.',
      valueDetail: 'En los más jóvenes, alrededor de 8 de cada 10.',
      points: ['Los más jóvenes lo prefieren con más frecuencia: quien empieza necesita más señales de si va bien. Es probable efecto de etapa.', 'El 72 % de los menores de 30 quiere retroalimentación diaria o semanal; en el total, 60 %.', 'El reconocimiento se asocia con más compromiso y menos desgaste en todas las edades.'],
      takeaway: 'Lo que cambia es la frecuencia y la forma, no la necesidad.',
      source: 'Gallup y Workhuman (2022), EE. UU.; Gallup, datos de preferencia de retroalimentación. Cifras de reportes de Gallup: verificar en fuente primaria antes de cada edición.',
      expected: 'Mayoría CIERTO. Aquí la sala acierta en parte: reconocerlo aumenta la credibilidad del bloque.',
      script: 'A: "Aquí la sala tiene algo de razón. Los más jóvenes quieren reconocimiento con más frecuencia. Pero la mitad de Generación X y Boomers también lo quiere varias veces al mes. Y el efecto del reconocimiento aparece en todas las edades. Lo que cambia es cada cuánto y de qué forma."',
    },
    {
      claim: 'Lo quieren todo ya.', verdict: 'DEPENDE',
      expected2: '"Yo a los 25 también quería todo ya." Validar y preguntar: "¿Tenía una ruta visible?"', title: '¿Impaciencia, o una ruta que no se ve?',
      value: '48 %', valueLabel: 'de Generación Z no se siente financieramente segura (Deloitte 2025, 44 países, incluido México).',
      valueDetail: 'Idea tomada del video: la impaciencia como rasgo de una generación.',
      points: ['Los motivos de crecimiento son más altos en las personas jóvenes y bajan con la edad: un patrón consistente con la etapa de vida.', 'La urgencia coincide con inseguridad financiera (dato global); en México se suman vivienda e informalidad.', 'La prisa se vuelve problema cuando no hay una ruta visible, con criterios y plazos.'],
      takeaway: 'Antes de pedir paciencia, pregunten si la ruta es visible.',
      source: 'Kooij et al. (2011), meta-análisis; Deloitte, Gen Z and Millennial Survey 2025 (23,482 personas, 44 países).',
      expected: 'Mayoría CIERTO. Contraejemplos de la sala: "yo a los 25 también quería todo ya".',
      script: 'A: "Esta idea viene del video. Hay algo real: a los 25, casi todos queríamos crecer rápido; los motivos de crecimiento bajan con la edad. Y hay contexto: casi la mitad de la Generación Z no se siente financieramente segura. La prisa se vuelve problema cuando no le mostramos una ruta."',
    },
  ];
  const visibleMyths = myths.filter((m) => !m.reserve && !(SHORT && m.shortHide));
  myths.forEach((m, i) => {
    const hidden = m.reserve || (SHORT && m.shortHide);
    const k = visibleMyths.indexOf(m), last = k === visibleMyths.length - 1;
    const sv = K.vote(pres, {
      num: 4, section: 'Mito vs. Dato', page: pg(), counter: hidden ? 'RESERVA' : `${k + 1} / ${visibleMyths.length}`, claim: m.claim,
      notes: {
        purpose: hidden ? 'Lámina de reserva (oculta): voto sobre una objeción frecuente.' : `Voto simultáneo sobre la afirmación ${k + 1} de ${visibleMyths.length}.`,
        time: '≈60 s (lectura, voto, distribución y una voz disidente).',
        script: `A lee en voz alta: "${m.claim}". "Uno, dos, tres." B anuncia la distribución aproximada ("mayoría ___, unos ___"). A pregunta a una persona que votó distinto a la mayoría: "¿Qué viste tú?"`,
        question: '"¿Qué viste tú?" (a alguien de la minoría; nunca a la CHRO; nunca dos veces seguidas a la misma mesa).',
        expected: m.expected,
        transition: '"Veamos qué dice la evidencia."',
        extra: 'LIDERA: A · B anuncia la distribución.' + (hidden ? '\nLÁMINA OCULTA (reserva): se usa solo si un participante plantea esta objeción y hay tiempo.' : ''),
      },
    });
    const sr = K.verdict(pres, {
      num: 4, section: 'Mito vs. Dato', page: pg(), title: m.title, verdict: m.verdict, value: m.value, valueLabel: m.valueLabel, valueDetail: m.valueDetail, points: m.points, takeaway: m.takeaway, source: m.source,
      notes: {
        purpose: `Revelar la evidencia sobre "${m.claim}" con prudencia, sin sobrecorregir.`,
        time: '≈40–60 s (revelación + una frase de A).',
        script: m.script,
        question: m.takeaway.endsWith('?') ? m.takeaway : '—',
        expected: m.expected2,
        transition: last ? 'A: "Un minuto antes de cerrar este bloque."' : '"Siguiente afirmación."',
        extra: (m.claim === 'Lo quieren todo ya.' ? 'AFIRMACIÓN TOMADA DEL VIDEO (D-18): obligatoria en todas las versiones.\n' : '') + (m.claim === 'La Generación Z no tiene lealtad.' ? '[POR CONFIRMAR] Cifra BLS de enero de 2026 (publicada el 24-sep-2026) confirmada vía resumen de bls.gov en buscador y nota de prensa; abrir bls.gov/news.release/tenure.nr0.htm antes de imprimir. Si no se confirma: usar 2.7 (enero de 2024).\n' : '') + 'LIDERA: A.\nCITAR SIEMPRE qué mide el dato, geografía y año (ver Paquete de evidencia). Datos de EE. UU. = patrón con series largas; decirlo en voz alta.\nNO DECIR "los datos demuestran". Decir "se asocia", "coincide", "la evidencia sugiere".',
      },
    });
    if (hidden) { sv.hidden = true; sr.hidden = true; }
  });

  const s27 = K.model(pres, {
    num: 4, section: 'Mito vs. Dato', page: pg(),
    title: 'La generación es un lente, no un diagnóstico',
    source: 'National Academies of Sciences, Engineering, and Medicine (2020); Costanza et al. (2012); Rudolph, Rauvola y Zacher (2018); Pew Research Center (2023).',
    blocks: [
      { name: 'EDAD', verb: 'La etapa de vida', items: ['A los 25 casi todos queremos crecer rápido y cambiar de empleo.', 'A los 55 pesan más la estabilidad y el legado.'], question: '¿Yo a los 25 era tan distinto?' },
      { name: 'ÉPOCA', verb: 'Lo que vivimos todos a la vez', items: ['Pandemia, inflación, IA, relocalización industrial.', 'Nos afecta a todos; se nota más en quien empieza.'], question: '¿Qué nos está pasando a todos?' },
      { name: 'COHORTE', verb: 'Lo que marcaría a una generación', items: ['Puede existir, pero suele ser pequeña y es la más difícil de probar.', 'Con una encuesta de un solo momento no se puede separar de la edad.'], question: '¿Qué sé de esta persona, no de su generación?' },
    ],
    takeaway: 'Generación ≠ personalidad. Hay más diferencia dentro de cada generación que entre ellas.',
    notes: {
      purpose: 'Cierre conceptual del Acto 4 (Idea 2): distinguir efecto edad, época y cohorte en lenguaje de directores.',
      time: '1:08–1:10 (1 min escritura + ≈45 s de A).',
      script: 'A: "En su cuaderno, en silencio, un minuto: una creencia que traían hoy y que ahora revisarían. ¿Qué decisión de planta tomaron con ella?" Después: "Cuando vemos que alguien joven piensa distinto, puede ser por tres cosas: su edad, la época que todos vivimos, o su generación. Como el año de nacimiento es igual al año de hoy menos la edad, si comparo hoy a alguien de 25 con alguien de 60, matemáticamente no puedo saber si la diferencia es por la edad o por la generación. Es como querer saber si un platillo sabe distinto por la receta o por el horno cuando cambiaste las dos cosas a la vez. Por eso las Academias Nacionales de Estados Unidos concluyeron en 2020 que gestionar por generación no está respaldado por la investigación. No es que las generaciones no existan: explican mucho menos de lo que creemos." Cierre: "Si los datos no confirman la mayoría de lo que creemos, la pregunta no es qué les pasa a los jóvenes. Es qué cambió alrededor de todos."',
      question: 'En silencio (1 min): una creencia que traía hoy y que ahora revisaría. ¿Qué decisión de planta tomé con ella?',
      expected: 'Escritura concentrada. Si alguien comenta: "Todas eran generalizaciones." "Casi todo era edad." Algún ingeniero puede preguntar por Twenge (2010): "Sí hay estudios que encuentran algunas diferencias, sobre todo en el valor del tiempo libre; aun ahí el tamaño es moderado y no dice nada de la persona que tienes enfrente."',
      transition: 'A: "Diez minutos de receso. Al regresar: qué cambió en el mundo al que cada uno entró a trabajar."',
      extra: 'LIDERA: A.\nNO DECIR "las generaciones no existen" (sobrecorrección; Gate 1, R12).',
    },
  });

  const rec = K.question(pres, {
    num: 0, section: 'Receso · 10 minutos', page: pg(), dark: true,
    q: '¿Qué ha cambiado más en estos años: la gente, o el trato entre la gente y las empresas?',
    size: 32,
    sub: 'Regresamos puntuales.',
    notes: {
      purpose: 'Receso con una pregunta que prepara el Acto 5.',
      time: '1:10–1:20 (10 min).',
      script: 'A: "Diez minutos. Les dejamos una pregunta para el café." Los facilitadores escuchan conversaciones sin intervenir y recogen frases para el Acto 5.',
      question: 'La de la lámina.', expected: 'Conversaciones informales sobre recortes, cambios de dueño y crisis vividas.',
      transition: 'A reinicia puntual con la lámina de contextos.',
      extra: 'LIDERA: A · B reacomoda la sala y verifica el rotafolio del Acto 2 visible.',
    },
  });

  hideIn(rec, '120', '90');
  // ───────────────────────────────────────────── ACTO 5 · CONTEXTOS
  K.divider(pres, { num: 3, section: 'Sección 3 · Contexto · Actos 5 y 6', title: 'Cambió el entorno y cambió el trato', page: pg(),
    notes: { purpose: 'Abrir la sección de contexto y necesidades.', time: 'Transición (sin tiempo propio).', script: 'Sin guion: la lámina se muestra mientras el facilitador que lidera la sección toma su lugar.', question: '—', expected: '—', transition: 'Siguiente lámina.', extra: 'Divisor de sección del Estándar AMMX (decks de más de 15 láminas).' } });
  const q28 = K.question(pres, {
    num: 5, section: 'Cuatro contextos de entrada al trabajo', page: pg(),
    q: '¿A qué mundo entramos a trabajar?',
    sub: 'Cuatro contextos de entrada al trabajo en México. Esto describe el entorno, no a las personas. Los rangos de años son convenciones y varían por país.',
    subY: 3.9,
    notes: {
      purpose: 'Reencuadrar las generaciones como contextos (D-17): entender experiencias formativas sin etiquetar a personas.',
      time: SHORT ? 'Versión corta: 30 s; las cuatro láminas de contexto están ocultas y A enuncia en una frase que cada generación entró a un mundo distinto.' : '1:20:00–1:20:30 (30 s).',
      script: 'A: "Ahora sí vamos a hablar de generaciones, pero de otra forma: no de cómo son, sino del mundo que encontraron cuando entraron a trabajar. Esto describe el entorno, no a las personas. Mientras vemos cada uno, ubíquense: ¿cuál fue el suyo? ¿Y el de la persona más nueva de su equipo?"',
      question: '—', expected: 'Curiosidad; directores ubicando su propia historia.',
      transition: '"Empecemos por quienes entraron a trabajar entre los sesenta y mediados de los ochenta."',
      extra: 'LIDERA: A. Máximo 2 minutos por contexto.\nPrincipio (Gate 1, R11): "Lo que digamos de quien no está en esta sala es una hipótesis que hay que verificar con esa persona."',
    },
  });

  hideIn(q28, '90');
  const gens = [
    {
      title: 'Entraron cuando el empleo prometía estabilidad', years: 'BABY BOOMERS · NACIDOS ≈1946–1964 · ENTRARON ≈1964–1985',
      world: ['Desarrollo estabilizador: crecimiento cercano a 7 % anual y tipo de cambio fijo.', 'Acero nacional y empleo paraestatal: SICARTSA inicia operación en 1976.', 'Devaluación de 1976 y crisis de la deuda de 1982.', 'Reconversión industrial: cierre de Fundidora Monterrey en 1986.'],
      work: 'Seguridad, pertenencia y ascenso por antigüedad: una estrategia racional en un mundo de empleo estable… hasta que dejó de serlo.',
      expect: 'Reciprocidad de largo plazo, respeto a la experiencia, aprender en el puesto.',
      friction: 'Leer el “¿por qué?” como falta de respeto; sentir que su experiencia pierde valor frente a lo digital.',
      dontAssume: 'Que no quieren o no pueden aprender herramientas nuevas.',
    },
    {
      title: 'Entraron entre crisis, apertura y privatización', years: 'GENERACIÓN X · NACIDOS ≈1965–1980 · ENTRARON ≈1983–2000',
      world: ['Inflación alta y la “década perdida” de los ochenta.', 'Entrada al GATT (1986) y privatizaciones: SICARTSA pasa a manos privadas en 1991–92 (Villacero e Ispat).', 'TLCAN (1994) y crisis de 1994–95: el PIB cayó alrededor de 6 % en 1995.', 'Muchos vivieron cambios de dueño; en 2006–07 ArcelorMittal integra ambas plantas.'],
      work: 'Un medio para construir autonomía y seguridad propia en entornos inestables.',
      expect: 'Autonomía, resultados por encima de la forma, poca supervisión cercana.',
      friction: 'Impaciencia con la supervisión cercana y con procesos lentos; escepticismo ante promesas corporativas.',
      dontAssume: 'Que su escepticismo es falta de compromiso. Tiene historia.',
    },
    {
      title: 'Entraron cuando la estabilidad ya no estaba garantizada', years: 'MILLENNIALS · NACIDOS ≈1981–1996 · ENTRARON ≈2000–2018',
      world: ['Crisis financiera global: la economía mexicana cayó más de 5 % en 2009.', 'Smartphone e internet llegaron con su entrada al trabajo.', 'Reforma laboral de 2012 y expansión de la subcontratación.', 'Hoy muchos ya son jefes de turno, gerentes y directores.'],
      work: 'Aprendizaje y empleabilidad: el desarrollo como seguro ante la incertidumbre.',
      expect: 'Desarrollo visible, retroalimentación, sentido, flexibilidad.',
      friction: 'Pedir crecimiento y retroalimentación más rápido de lo que el sistema ofrece; ser leídos como impacientes.',
      dontAssume: 'Que querer crecer rápido es falta de compromiso.',
    },
    {
      title: 'Entraron entre pandemia, relocalización industrial e IA', years: 'GENERACIÓN Z · NACIDOS ≈1997–2012 · ENTRARON ≈2015–HOY',
      world: ['Pandemia 2020: la mayor caída del PIB desde 1932; muchos empezaron a distancia.', 'Reforma de subcontratación de 2021.', 'T-MEC y relocalización industrial: inversión extranjera en niveles récord (2023, cifras preliminares).', 'IA generativa, y una informalidad cercana a 55 % como alternativa real.'],
      work: 'Un intercambio que se revisa: salario, aprendizaje, bienestar y trato.',
      expect: 'Claridad, reciprocidad visible, desarrollo concreto, límites entre trabajo y vida.',
      friction: 'Preguntar el porqué y poner límites de horario; ser leídos como falta de compromiso.',
      dontAssume: 'Que no aguantan el trabajo de planta: no hay evidencia comparativa que lo sostenga.',
    },
  ];
  gens.forEach((g, i) => {
    const gs = K.generation(pres, {
      num: 5, section: 'Cuatro contextos de entrada al trabajo', page: pg(), ...g,
      source: 'Esto describe el entorno, no a las personas. Fuentes: Paquete de evidencia §8 (Banxico, INEGI, historia de SICARTSA y Fundidora Monterrey). Cortes generacionales: convención de Pew Research.',
      notes: {
        purpose: `Contexto de entrada al trabajo ${i + 1} de 4. Generar comprensión de experiencias formativas, no etiquetas.`,
        time: i < 3 ? `${['1:20:30', '1:21:50', '1:23:10'][i]} (≈1:20).` : '1:24:30–1:28 (1 min lámina + 2 min en pares).',
        script: `A lee solo tres hitos de "El mundo al que entraron", con una historia local si la sala la conoce (Fundidora, SICARTSA, cambios de dueño). Luego lee solo el recuadro "Lo que un líder no debería suponer". ${i === 2 ? 'Subrayar: "Muchos Millennials ya son jefes y directores: en esta sala hay algunos."' : ''}${i === 3 ? 'Subrayar: "Son los que menos están en esta sala. Todo lo que digamos de ellos es hipótesis que hay que verificar con la persona."' : ''}`,
        question: i === 3 ? 'En pares, 2 minutos: "¿A cuál de estos mundos entraron ustedes a trabajar y qué les enseñó sobre la lealtad? ¿A cuál entró la persona más nueva de su equipo, y qué sabemos realmente de ella?"' : '(Opcional, solo si sobra tiempo) ' + (i === 0 ? '"¿Quién entró a trabajar en este contexto? ¿Qué aprendió de él sobre la lealtad?"' : i === 1 ? '"¿Quién vivió un cambio de dueño? ¿Qué le enseñó sobre las promesas de la empresa?"' : '"¿Qué le pasó a su primer empleo en 2008–2009?"'),
        expected: 'Historias personales breves. Si alguien empieza a generalizar ("los de ahora…"), A pregunta: "¿Qué conducta concreta observaste? ¿Qué más podría explicarla?"',
        transition: i < 3 ? '"Siguiente contexto."' : 'A: "Cuatro contextos. Y un hilo común: el trato entre las personas y las empresas cambió."',
        extra: 'LIDERA: A (B toma el tiempo de los pares de la última lámina).\nNO USAR: "los chavos", "generación de cristal", "la vieja guardia", "nativos digitales" (glosario §4.6 de instrumentos psicológicos).\nCifras: verificar en fuente primaria antes de cada edición (Paquete de evidencia §8).',
      },
    });
    hideIn(gs, '120', '90');
  });

  K.contrast(pres, {
    num: 5, section: 'El contrato cambió', page: pg(),
    title: 'El contrato psicológico cambió, empezando por las empresas',
    flow: true,
    left: { label: 'Contrato anterior', items: ['Trabaja duro', 'Sé leal', 'Acumula antigüedad', 'La empresa te protege', 'Tu carrera avanza'] },
    right: { label: 'Contrato contemporáneo', items: ['Crea valor', 'Desarrolla habilidades', 'Mantén tu empleabilidad', 'Busca experiencias con sentido', 'Revisa si el intercambio sigue valiendo'] },
    takeaway: 'Lo vivimos: Fundidora 1986, privatización de SICARTSA 1991–92, ArcelorMittal 2006–07.',
    source: 'Rousseau (1989; 1995); Cappelli (1999), The New Deal at Work; Paquete de evidencia E-A9.',
    notes: {
      purpose: 'Idea 3: el contrato laboral cambió de forma documentada, desde las empresas, antes que la gente.',
      time: SHORT ? 'Versión corta: 2 min.' : '1:28–1:31 (3 min).',
      script: 'A: "Durante décadas el trato implícito fue el de la izquierda. Muchos en esta sala lo cumplieron y les funcionó. Desde los ochenta, muchas empresas —documentado sobre todo en EE. UU., y la siderurgia mexicana no fue excepción— pasaron a reestructuras, subcontratación y relaciones más de mercado. Quienes entraron después aprendieron el contrato de la derecha. No es mejor ni peor: es una respuesta racional al entorno que encontraron." B lee dos frases del rotafolio "Lo que escuchamos" del Acto 2 que hablen de cambio.',
      question: '"Regresemos a su rotafolio: ¿qué frase de las que escribimos después del video leerían hoy distinto?"',
      expected: '"Cambió el trato." Algunos: "cambiaron las dos cosas". Validar: ambas son ciertas; lo que está en nuestras manos es el trato.',
      transition: '"Si el trato cambió, ¿qué pasa con la lealtad?"',
      extra: 'LIDERA: A · B lee del rotafolio.\nNO CONVERTIRLO en crítica a AMMX ni en nostalgia. El mensaje es de reciprocidad, no de culpa (Gate 1, R9).\nNO usar el marco de Sinek (Leaders Eat Last) que culpa a los Boomers de los despidos masivos: "el contrato cambió", no "una generación lo rompió".',
    },
  });

  K.question(pres, {
    num: 5, section: 'La lealtad se gana, en ambas direcciones', page: pg(), dark: true,
    q: '¿Por qué esperamos una relación que algunas empresas dejaron de garantizar hace décadas?',
    size: 30,
    sub: 'Cuando una persona percibe que la empresa no cumplió lo que esperaba, bajan la confianza, el compromiso y el esfuerzo extra, a cualquier edad. La lealtad de quienes llevan décadas aquí también es un activo que la empresa tiene que seguir ganando.',
    subY: 4.3,
    source: 'Zhao et al. (2007), meta-análisis sobre incumplimiento del contrato psicológico; van Dierendonck y Jacobs (2012), meta-análisis sobre justicia en reestructuras (37 muestras, N = 11,256).',
    notes: {
      purpose: 'Idea 4: explorar críticamente "la lealtad se gana" como conversación sobre confianza, reciprocidad y relación jefe–colaborador, no como crítica a la empresa.',
      time: SHORT ? 'Versión corta: 2 min + 3 min en pares con esta pregunta.' : '1:31–1:34 (3 min).',
      script: 'A: "Hay una frase que se escucha mucho: la lealtad se gana. Queremos agregarle algo: en ambas direcciones. La investigación sobre contrato psicológico muestra que cuando alguien siente que no se cumplió lo que esperaba, baja su confianza y su compromiso, tenga 25 o 60 años. Y en reestructuras, a quienes se quedan les importa más cómo se hizo que el resultado. Esto no es una crítica a la empresa: es una pregunta sobre lo que cada uno de nosotros, como jefe directo, hace creíble o no."',
      question: '¿Por qué esperamos de nuestros colaboradores una relación que algunas empresas dejaron de garantizar hace décadas? ¿Qué depende de mí, como jefe directo, para que esa relación sea creíble?',
      expected: 'Silencio reflexivo. Algún director: "la lealtad es un valor, no un intercambio". Validar: "Para muchos lo es, y es valioso. La pregunta es qué hacemos para merecerla de quien no la trae de casa."',
      transition: 'A: "Si la lealtad sigue a la relación, veamos qué busca la gente en esa relación."',
      extra: 'LIDERA: A.\nRESISTENCIA POSIBLE: "Si no quieren trabajar aquí, que se vayan." Respuesta: "Algunos lo harán, y a veces está bien. ¿Cuánto nos cuesta reemplazar a alguien de alto potencial o a un experto? ¿Y a quién sí queremos retener?"',
    },
  });

  // ───────────────────────────────────────────── ACTO 6 · MOTIVADORES
  const s37 = K.base(pres, {
    num: 6, section: 'Lo que la gente realmente quiere', page: pg(),
    title: 'Lo que casi todos quieren es lo mismo',
    source: 'Gallup (2022), 13,085 empleados, EE. UU.; Randstad Workmonitor 2025–2026 (26,000+ personas, 35 mercados); McKinsey (2021); Paquete de evidencia §7.',
    notes: {
      purpose: 'Acto 6: necesidades humanas comunes, organizadas por necesidad y no por generación (D-17), para evitar el tribalismo generacional.',
      time: '1:34–1:36 (2 min).',
      script: 'A: "Si juntamos los estudios más grandes sobre qué busca la gente en un trabajo, las prioridades principales se repiten en todas las edades: salario justo, estabilidad, bienestar, hacer lo que uno hace bien, un buen jefe. Por primera vez en 22 años, en la encuesta global de Randstad el equilibrio vida–trabajo quedó por encima del salario, y es el resultado de toda la muestra, de todas las edades juntas, no de una generación. Un dato que para una siderúrgica importa: la brecha de propósito más grande no es entre generaciones, es entre ejecutivos y primera línea."',
      question: '—',
      expected: 'Reconocimiento: "es lo mismo que yo quiero".',
      transition: '"¿Y dónde sí hay diferencias?"',
      extra: 'LIDERA: A.\nDATO McKINSEY (2021, EE. UU.): 85 % de ejecutivos dice vivir su propósito en el trabajo vs. 15 % de mandos y primera línea.',
    },
  });
  const common = ['Salario justo', 'Estabilidad', 'Bienestar', 'Relación con el jefe', 'Pertenencia', 'Trabajo con sentido', 'Usar mis fortalezas'];
  common.forEach((c, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    T(s37, c, { x: 0.6 + col * 3.7, y: 1.8 + row * 0.9, w: 3.6, h: 0.75, font: F.deck, fontSize: 20, bold: true, color: C.navy, valign: 'middle' });
  });
  T(s37, 'NECESIDADES HUMANAS COMUNES', { x: 0.6, y: 5.55, w: 7, h: 0.35, font: F.deck, fontSize: 10, bold: true, color: C.coral, charSpacing: 2 });
  T(s37, 'Las cuatro primeras son prioridades en todas las generaciones (Gallup 2022).', { x: 0.6, y: 5.9, w: 7, h: 0.4, font: F.deck, fontSize: 13, color: C.slate });
  const iy37 = deck.panel(s37, 8.1, 1.8, 4.63, 4.85, 'Un dato para planta');
  T(s37, '85 % · 15 %', { x: 8.4, y: iy37, w: 4.1, h: 0.9, font: F.deck, fontSize: 36, bold: true, color: C.coral });
  T(s37, 'Ejecutivos vs. mandos y primera línea que dicen vivir su propósito en el trabajo (McKinsey, 2021, EE. UU.).', { x: 8.4, y: iy37 + 1.0, w: 4.1, h: 1.3, font: F.deck, fontSize: 12, color: C.navy });
  T(s37, 'La brecha de propósito más grande es jerárquica, no generacional.', { x: 8.4, y: iy37 + 2.5, w: 4.1, h: 1.0, font: F.deck, fontSize: 13, bold: true, color: C.navy });

  const t36 = K.tableSlide(pres, {
    num: 6, section: 'Lo que la gente realmente quiere', page: pg(),
    title: 'Donde sí hay diferencias, son de frecuencia, forma y urgencia',
    source: 'Kooij et al. (2011), meta-análisis; Gallup/Workhuman (2022); Deloitte 2025; Randstad 2025. Diferencias promedio con alta variación individual.',
    rows: [
      ['Necesidad', 'Lo que es común', 'Lo que varía', 'Qué lo explica mejor'],
      ['Crecimiento', 'Todos quieren avanzar', 'Más urgencia al inicio de la carrera', 'Edad y etapa de vida'],
      ['Reconocimiento', 'Se asocia con compromiso a cualquier edad', 'Frecuencia y forma (pública o privada)', 'Etapa: quien empieza necesita más señales'],
      ['Desarrollo', 'Aprender en el puesto', 'Los jóvenes piden más mentoría; los mayores participan menos, a veces porque se les ofrece menos', 'Oportunidad y etapa'],
      ['Compensación', 'Prioridad número uno para casi todos', 'Urgencia por inseguridad financiera', 'Época y etapa de vida'],
      ['Autonomía', 'Valorada en todas las edades', 'Diferencias de pocos puntos', 'Rol y contexto'],
      ['Bienestar', 'Prioridad transversal', 'Más estrés reportado en menores de 35 y en gerentes', 'Época y rol'],
    ],
    colW: [2.2, 3.4, 3.6, 2.93], fontSize: 10.5, rowH: 0.56,
    takeaway: 'Eso depende más de la etapa de vida y del jefe que del año de nacimiento.',
    notes: {
      purpose: 'Mostrar diferencias reales sin exagerarlas: son de frecuencia, forma y urgencia, y se explican mejor por edad, etapa y época.',
      time: '1:36–1:38 (2 min).',
      script: 'A: "Sí hay diferencias. Pero miren la última columna: casi todas se explican mejor por la etapa de vida, el rol o la época que por la generación. Y fíjense en quién aparece como el grupo más estresado: los gerentes."',
      question: '(Retórica, 5 s de pausa) "¿Cuál de estas diferencias han visto en su equipo, y qué la explicaría mejor: la edad, la etapa o el jefe?"',
      expected: '"Desarrollo con los expertos senior." "Reconocimiento con los jóvenes." "Claridad de expectativas con todos." Aparece que los expertos senior también tienen necesidades desatendidas: es un hallazgo valioso.',
      transition: 'A: "Si casi todo pasa por el jefe, veamos qué dicen los datos sobre nosotros."',
      extra: 'LIDERA: A.\nDATO DE APOYO: Gallup atribuye al gerente al menos 70 % de la varianza del compromiso entre equipos (Gallup 2015, base Q12; análisis propietario, no "causa 70 %"). Compromiso de gerentes: 27 % → 22 % (2024→2025).',
    },
  });

  hideIn(t36, '120', '90');
  const b37 = K.bigNumbers(pres, {
    num: 6, section: 'Lo que la gente realmente quiere', page: pg(),
    title: 'El jefe es la palanca más grande, y también está desgastado',
    stats: [
      { value: '70 %', label: 'de la varianza del compromiso entre equipos se asocia con el gerente', detail: 'Gallup, State of the American Manager (2015): base de compromiso con millones de empleados, principalmente EE. UU.' },
      { value: '22 %', label: 'de los gerentes en el mundo está comprometido (27 % un año antes)', detail: 'Gallup, State of the Global Workplace 2026, datos 2025.', color: C.plum },
    ],
    reading: 'El jefe es la variable que más distingue a un equipo de otro en estos datos. No significa que “cause” el 70 %.\n\nLa buena noticia es que casi todo lo que la gente pide —claridad, retroalimentación, desarrollo, cuidado— son conductas del jefe, no políticas corporativas.',
    source: 'Gallup, State of the American Manager (2015); Gallup, State of the Global Workplace 2026. Análisis propietario, no revisado por pares.',
    notes: {
      purpose: 'Conectar las necesidades con la palanca que está en manos de los directores: el liderazgo directo. Reconocer que también ellos están desgastados (sin tono paternalista).',
      time: '1:38–1:44 (30 s de A + 90 s de escritura individual + 4 min en mesa).',
      script: 'A: "Dos datos. El jefe es la variable que más distingue a un equipo de otro. Y los jefes, en todo el mundo, estamos menos comprometidos que hace un año. Eso no es un reproche: es parte del problema que queremos resolver." B: "En su mapa de motivadores, marquen en silencio la necesidad común que peor están atendiendo, y con quién. Noventa segundos." Después, 4 min en mesa.',
      question: '"¿Qué necesidad común estamos atendiendo peor, y con quién?"',
      expected: 'Conversación de mesa; se reconoce el propio desgaste.',
      transition: 'B: "Hasta aquí hemos hablado de otros. Los próximos cinco minutos son sobre ustedes."',
      extra: 'LIDERA: A → B. Versión 120: solo 2 min en mesa, sin escritura.\nNO DECIR "70 % del compromiso lo causa el jefe".',
    },
  });

  hideIn(b37, '90');
  // ───────────────────────────────────────────── ACTO 7 · ESPEJO DEL LÍDER
  K.divider(pres, { num: 4, section: 'Sección 4 · Práctica · Actos 7 a 10', title: 'Del espejo a la práctica: una persona real', page: pg(),
    notes: { purpose: 'Abrir la sección de práctica.', time: 'Transición (sin tiempo propio).', script: 'Sin guion: la lámina se muestra mientras el facilitador que lidera la sección toma su lugar.', question: '—', expected: '—', transition: 'Siguiente lámina.', extra: 'Divisor de sección del Estándar AMMX (decks de más de 15 láminas).' } });
  K.questionList(pres, {
    num: 7, section: 'El espejo del líder', page: pg(),
    title: 'Cinco minutos en silencio',
    questions: ['¿A quién me resulta más fácil liderar? ¿Qué tiene en común conmigo?', '¿Quién me frustra, o a quién me cuesta leer?', '¿Qué conductas me detonan?', '¿Qué supongo sobre esa persona? ¿Cómo lo sé?', 'Cuando alguien trabaja distinto a mí, ¿lo interpreto como diferente o como incorrecto?', '¿Qué parte de mi forma de liderar se formó en condiciones que hoy cambiaron, y qué parte sigue siendo igual de valiosa?'],
    size: 14.5,
    aside: 'Nadie va a leer lo que escriban.\n\nCuando piensen en personas concretas, escriban solo iniciales.\n\nAl final, elijan a “mi persona”: la llevaremos al resto de la sesión.',
    asideLabel: 'Instrucción',
    notes: {
      purpose: 'Introspección fuerte (arco: comprensión). Elegir a "mi persona", el hilo que conecta con la Matriz, el compromiso y el Experimento (D-06).',
      time: V === '90' ? 'Versión 90: 2 min de silencio antes del Laboratorio, solo preguntas 2 y 5 y "mi persona" (G2-11).' : V === '120' ? 'Versión 120: 3 min de silencio (preguntas 2, 3, 5 y "mi persona").' : '1:44–1:49 (5 min de silencio).',
      script: 'B: "Los próximos cinco minutos son en silencio. Nadie va a leer lo que escriban. Contesten con honestidad, no con elegancia. Cuando piensen en personas concretas, escriban solo iniciales. Al final, elijan a una persona: la vamos a llevar al resto del taller." Después: silencio completo. NO llenar el silencio. Los facilitadores se sientan o se quedan quietos.',
      question: 'Las seis de la lámina (cuaderno).',
      expected: 'Silencio incómodo los primeros 60–90 segundos; luego escritura concentrada.',
      transition: 'B: "En pares, cinco minutos. Uno habla, el otro solo escucha."',
      extra: 'LIDERA: B.\nPREGUNTA 6: versión balanceada del psicólogo (D-19). Si la sala tiene alto nivel de confianza, A puede leer la versión original como provocación: "¿Qué parte de mi estilo fue construida para un mundo que tal vez ya no existe?"',
    },
  });

  const s42 = K.base(pres, {
    num: 7, section: 'El espejo del líder', page: pg(),
    title: 'El que escucha tiene el trabajo más difícil: no ayudar',
    notes: {
      purpose: 'Conversación en pares con protocolo de escucha: sin consejos, sin juicio.',
      time: '1:49–1:54 (5 min).',
      script: 'B: "Con la persona de al lado; nadie con alguien que le reporte. Dos minutos cada uno. El que escucha puede hacer máximo una pregunta: \'¿Qué más?\' o \'¿Cómo lo sabes?\'. Si sienten la tentación de dar un consejo, guárdenlo: probablemente es lo mismo que harían con su equipo. Al final, cada uno dice en una frase lo que escuchó."',
      question: '"¿Qué más?" · "¿Cómo lo sabes?"',
      expected: 'Algunos pares se ríen al notar que querían aconsejar. Es el aprendizaje.',
      transition: 'B: "Llevemos esto a situaciones reales de planta."',
      extra: 'LIDERA: B.\nOPCIÓN DE PASAR: "Prefiero solo escuchar esta vez" se respeta sin preguntar.',
    },
  });
  hideIn(s42, '90');
  [['2 min', 'Habla A', 'Comparte solo lo que quiera. Sugerencia: empezar por la pregunta 5 o 6.'], ['2 min', 'Habla B', 'Se invierten los papeles.'], ['1 min', 'Lo que te escuché decir es…', 'Una frase cada uno.']].forEach((r, i) => {
    const x = 0.6 + i * 4.1;
    T(s42, r[0], { x, y: 1.85, w: 3.8, h: 0.8, font: F.deck, fontSize: 36, bold: true, color: C.coral });
    T(s42, r[1], { x, y: 2.7, w: 3.8, h: 0.45, font: F.deck, fontSize: 16, bold: true, color: C.navy });
    T(s42, r[2], { x, y: 3.2, w: 3.8, h: 0.8, font: F.deck, fontSize: 12, color: C.slate });
  });
  const iy42 = deck.panel(s42, 0.6, 4.3, 12.13, 2.25, 'Quien escucha no…');
  T(s42, 'da consejos  ·  evalúa ni tranquiliza  ·  cuenta su propia historia  ·  lleva al otro a una conclusión  ·  repite fuera lo que escuchó', { x: 0.9, y: iy42, w: 11.5, h: 0.9, font: F.deck, fontSize: 15, bold: true, color: C.navy });

  // ───────────────────────────────────────────── ACTO 8 · LABORATORIO
  K.activity(pres, {
    num: 8, section: 'Laboratorio de Colisiones', page: pg(),
    title: 'Seis casos de planta. Respondan como lo harían hoy',
    steps: ['Lectura individual del caso de su mesa. Subrayen la frase que más les hizo ruido.', 'En mesa, respondan las seis preguntas en la hoja A3. Escribe alguien que no sea el de mayor rango.', 'Galería: lean dos hojas de otras mesas. Punto en la respuesta que sí usarían; “?” en el supuesto que cuestionarían.'],
    time: '26', format: 'Un caso por mesa · hoja A3', materials: 'A · Quince meses y ya quiere la jefatura\nB · Una tableta para saber cómo suena un motor\nC · Siempre se ha hecho así\nD · Después de las siete, no\nE · Ya nadie me pregunta nada\nF · Quiero ver más, y pronto',
    question: 'Una sola respuesta de liderazgo por mesa. “Depende” no vale sin decir de qué.',
    notes: {
      purpose: 'Practicar con situaciones reales antes de ver el modelo: los directores responden como lo harían hoy (arquitectura, decisión 5).',
      time: '1:54–1:57 (3 min lectura) · 1:57–2:09 (12 min mesa).',
      script: 'B: "Cada mesa tiene un caso distinto. Son ficticios, pero seguramente les van a sonar. Tres minutos de lectura individual; subrayen la frase que más les hizo ruido. Después, doce minutos para las seis preguntas. Una sola respuesta de liderazgo por mesa: si hay desacuerdo, anótenlo en la esquina." A los 6 min: "Mitad del tiempo; si no han llegado a la pregunta 4, vayan a ella." A los 10 min: "Dos minutos: completen la pregunta 6."',
      question: 'Preguntas de reto de B por caso (Paquete de actividades §3.6). Ejemplos: Caso A: "Si Daniela tuviera 45 años y la misma trayectoria, ¿le habrían contestado igual?" Caso D: "¿Cuál de nuestras costumbres estamos defendiendo como si fuera un estándar?" Caso E: "¿Qué diferencia hay entre reconocer a alguien y necesitarlo?"',
      expected: 'Primeras reacciones de juicio o de DIRIGIR; al escribir supuestos, las respuestas se matizan. Casi ninguna mesa negocia la seguridad.',
      transition: 'B: "Peguen sus hojas en la pared. Galería."',
      extra: 'LIDERA: B · A observa y anota qué mesa confundió "adaptar" con "conceder" y qué mesa confundió "firmeza" con "no escuchar" (se usa en el Acto 9).\nCON 4 MESAS: casos A, B, D y E. CON 5: omitir C o F según el perfil de la sala.\nLa CHRO trabaja en su mesa como par; no es la relatora.',
    },
  });

  K.questionList(pres, {
    num: 8, section: 'Laboratorio de Colisiones', page: pg(),
    title: 'Seis preguntas para cada caso',
    questions: ['¿Cuál es nuestra primera reacción? Tal como salió.', '¿Qué estamos suponiendo que no sabemos con certeza?', '¿Qué podría necesitar la persona? No lo que pide: lo que hay detrás.', '¿Qué resultado de negocio está en juego?', '¿Qué respuesta de liderazgo usaríamos? El primer paso concreto.', '¿Qué NO vamos a negociar?'],
    size: 16,
    notes: {
      purpose: 'Lámina de referencia en pantalla durante el trabajo de mesa.',
      time: 'En pantalla 1:57–2:09.',
      script: 'Sin guion; B recorre mesas. La pregunta 6 lleva la distinción de D-04 al caso.',
      question: 'Las seis de la lámina.',
      expected: 'La pregunta 2 (supuestos) es la que más cuesta y la que más cambia la respuesta.',
      transition: 'Galería.',
      extra: 'LIDERA: B.',
    },
  });

  K.questionList(pres, {
    num: 8, section: 'Laboratorio de Colisiones', page: pg(),
    title: 'Miremos la pared, no a las personas',
    questions: ['¿Qué patrón ven en las primeras reacciones?', '¿En qué casos cambió la respuesta cuando la mesa escribió sus supuestos?', 'Miren las respuestas a la pregunta 6: ¿en qué caso estuvimos más cerca de ceder algo que no se negocia, y qué nos llevó ahí?'],
    size: 20,
    aside: 'Galería: 4 minutos.\nPlenaria: 5 minutos.\n\nPunto adhesivo: la respuesta que yo sí usaría.\n\n“?”: el supuesto que yo cuestionaría.',
    asideLabel: 'Dinámica',
    notes: {
      purpose: 'Comparar respuestas entre mesas y mostrar que adaptarse no fue bajar la vara en ningún caso.',
      time: '2:09–2:20 (4 min galería · 5 min plenaria · 2 min síntesis).',
      script: 'B conduce las tres preguntas siempre sobre la pared. Conectar con el Acto 1: "¿Las primeras reacciones se parecen a su respuesta por defecto?" Síntesis de B: "Casi todas las mesas coincidieron en lo que no se negocia. Donde diferimos fue en el cómo. Ese cómo tiene un nombre." Relevo a A.',
      question: '¿En qué caso estuvimos más cerca de ceder algo que no se negocia, y qué nos llevó ahí?',
      expected: 'Casi nunca ocurre. Mensaje: adaptarse no fue bajar la vara.',
      transition: 'A recibe: "Ese cómo tiene un nombre."',
      extra: 'LIDERA: B → A.',
    },
  });

  // ───────────────────────────────────────────── ACTO 9 · LIDERAZGO ADAPTABLE
  K.contrast(pres, {
    num: 9, section: 'Liderazgo adaptable', page: pg(),
    title: 'De la respuesta rígida a la respuesta adaptable',
    left: { label: 'Respuesta rígida', title: 'Una misma respuesta para todos', items: ['Interpreta lo distinto como incorrecto', 'Decide antes de preguntar', 'Confunde la costumbre con el estándar', 'Mide el compromiso por disponibilidad', 'Espera lealtad sin revisar el trato'] },
    right: { label: 'Respuesta adaptable', title: 'Rango para leer a cada persona', items: ['Distingue lo distinto de lo incorrecto', 'Pregunta antes de concluir', 'Separa costumbre de estándar, y lo sostiene', 'Mide por resultados acordados', 'Revisa qué ofrece para merecer lealtad'] },
    takeaway: 'En seguridad, la respuesta firme es la adaptable: la regla no cambia; cambia cómo la explico.',
    notes: {
      purpose: 'Idea 5: el reto es la adaptabilidad (rango), no un tipo de líder. Lenguaje de respuestas, no de personas (D-19).',
      time: '2:20–2:22 (2 min).',
      script: 'A: "No estamos hablando de líderes rígidos y líderes flexibles: todos tenemos respuestas rígidas en algunas situaciones. Y a veces la firmeza es exactamente lo correcto: en seguridad la regla no se mueve. Lo que sí podemos ampliar es el rango: cuántas formas tengo de llegar al mismo estándar con personas distintas." A usa una observación del laboratorio: "En una mesa vimos…".',
      question: '"¿En cuál de los casos vieron una respuesta rígida que parecía firmeza?"',
      expected: 'Referencias al Caso D (disponibilidad como compromiso) y al Caso B (capacitación sin preguntar).',
      transition: '"Para ampliar ese rango proponemos algo muy simple: tres verbos."',
      extra: 'LIDERA: A.\n[POR CONFIRMAR] PUNTO DE INTEGRACIÓN SPEED ABSORBENT (D-01): los materiales no estuvieron disponibles al producir esta versión. Si se reciben, evaluar si su lenguaje reemplaza, enriquece o se omite en esta lámina y en la siguiente, sin inventar conceptos.',
    },
  });

  K.model(pres, {
    num: 9, section: 'Liderazgo adaptable', page: pg(),
    title: 'Leer, adaptar, alinear',
    blocks: [
      { name: 'LEER', verb: 'Entender a la persona y el contexto', items: ['¿Qué observo? ¿Qué supongo?', '¿Qué podría necesitar, detrás de lo que pide?', '¿Qué no sé todavía?'], question: 'Pregunto antes de concluir.' },
      { name: 'ADAPTAR', verb: 'Ajustar cómo lidero', items: ['Comunicación y contexto (el porqué)', 'Retroalimentación, reconocimiento, autonomía', 'Desarrollo y frecuencia'], question: 'Cambio el cómo.' },
      { name: 'ALINEAR', verb: 'Sostener expectativas y resultados', items: ['Estándares, seguridad, ética', 'Rendición de cuentas y desempeño', 'Lo digo de forma explícita'], question: 'No muevo el qué.' },
    ],
    takeaway: ANCHOR1 + ' ' + ANCHOR2,
    notes: {
      purpose: 'Modelo simple y memorable que se pueda recordar semanas después sin materiales.',
      time: '2:22–2:27 (5 min, incluye re-lectura de un caso).',
      script: 'A (2 min): "Leer: entender a la persona y el contexto antes de concluir. Adaptar: ajustar cómo lidero. Alinear: sostener lo que no cambia y decirlo en voz alta." Ejemplo en una línea (Rogelio): "el registro no está a discusión; cómo lo hacemos, sí." Después, en mesa (2 min): "Relean su propio caso con los tres verbos: ¿cuál se saltaron?" Cierre (1 min): dos voces.',
      question: '"¿Cuál de los tres verbos se saltaron más en su caso?"',
      expected: 'Casi siempre LEER: se pasa directo a la respuesta.',
      transition: 'B: "Llevemos los tres verbos a su persona."',
      extra: 'LIDERA: A.\nRELACIÓN CON EL DIAGNÓSTICO: EXPLORAR alimenta LEER; EXPLICAR y ACOMPAÑAR son formas de ADAPTAR; DIRIGIR es indispensable para ALINEAR. Ninguna respuesta sobra; el rango es usarlas cuando la situación lo pide.\n[POR CONFIRMAR] Integración Speed Absorbent (D-01).',
    },
  });

  // ───────────────────────────────────────────── ACTO 10 · MATRIZ
  const s49 = K.base(pres, {
    num: 10, section: 'Matriz de Flexibilidad del Liderazgo', page: pg(),
    title: 'Adapto el cómo. No adapto el qué',
    notes: {
      purpose: 'Presentar el artefacto central del taller: separa explícitamente lo que se adapta de lo que no (D-04).',
      time: '2:27–2:28 (1 min).',
      script: 'B: "Una columna para su persona del Espejo: iniciales, no nombre. Arriba, lo que pueden ajustar. Abajo, lo que no se mueve. El bloque de lo que no se adapta nunca se queda vacío: si lo está, es una alerta."',
      question: '—',
      expected: 'Asentimientos: la columna derecha es la que hace aceptable el mensaje para una audiencia operativa.',
      transition: '"Así se ve llena."',
      extra: 'LIDERA: B.',
    },
  });
  const adapt = ['Comunicación', 'Contexto (el porqué)', 'Retroalimentación', 'Reconocimiento', 'Autonomía', 'Desarrollo', 'Frecuencia'];
  const keep = ['Estándares', 'Ética', 'Seguridad', 'Rendición de cuentas', 'Desempeño'];
  s49.addShape('roundRect', { x: 0.6, y: 1.8, w: 7.3, h: 0.5, fill: { color: C.coral }, line: { type: 'none' }, rectRadius: 0.05 });
  T(s49, 'LO QUE ADAPTO · el cómo', { x: 0.8, y: 1.8, w: 7, h: 0.5, font: F.deck, fontSize: 12, bold: true, color: C.white, valign: 'middle', charSpacing: 1.5 });
  s49.addShape('roundRect', { x: 8.15, y: 1.8, w: 4.58, h: 0.5, fill: { color: C.navy }, line: { type: 'none' }, rectRadius: 0.05 });
  T(s49, 'LO QUE NO ADAPTO · el qué', { x: 8.35, y: 1.8, w: 4.3, h: 0.5, font: F.deck, fontSize: 12, bold: true, color: C.white, valign: 'middle', charSpacing: 1.5 });
  adapt.forEach((a, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    T(s49, a, { x: 0.8 + col * 3.6, y: 2.55 + row * 0.72, w: 3.4, h: 0.6, font: F.deck, fontSize: 18, bold: true, color: C.navy, valign: 'middle' });
  });
  AM.vline(s49, 8.02, 1.8, 4.3, C.navy, 3);
  keep.forEach((k, i) => {
    T(s49, k, { x: 8.35, y: 2.55 + i * 0.72, w: 4.3, h: 0.6, font: F.deck, fontSize: 18, bold: true, color: C.navy, valign: 'middle' });
  });
  T(s49, 'En su cuaderno: una columna para su persona (iniciales) y otra, opcional, para un caso.  La seguridad es innegociable.', { x: 0.6, y: 6.3, w: 12.1, h: 0.45, font: F.deck, fontSize: 13, bold: true, color: C.coral, valign: 'middle' });

  K.tableSlide(pres, {
    num: 10, section: 'Matriz de Flexibilidad del Liderazgo', page: pg(),
    title: 'Ejemplo: Rogelio, 31 años en laminación en frío',
    rows: [
      ['Lo que adapto', 'Cómo', 'Lo que no adapto', 'Qué se mantiene'],
      ['Comunicación', 'En persona, en el taller; nunca corregirlo frente al equipo', 'Estándares', '100 % de órdenes registradas en SAP PM en seis semanas'],
      ['Contexto', 'Mostrarle su propio historial de fallas y para qué sirven los datos', 'Ética', 'Los registros reflejan lo que realmente se hizo'],
      ['Retroalimentación', 'Semanal, 10 minutos, avance contra la meta', 'Seguridad', 'Bloqueos y permisos se registran y cumplen sin excepción'],
      ['Reconocimiento', 'Su criterio define qué variables se registran', 'Rendición de cuentas', 'El registro de su área es su responsabilidad'],
      ['Desarrollo', 'Formaliza su rol como formador en diagnóstico', 'Desempeño', 'Se mantiene la meta de disponibilidad de equipo'],
    ],
    colW: [1.9, 4.2, 1.9, 4.13], fontSize: 10.5, rowH: 0.62,
    takeaway: '“Tu experiencia es lo que más necesito en este sistema. El registro no está a discusión; cómo lo hacemos, sí.”',
    notes: {
      purpose: 'Ejemplo resuelto del Caso B para que el llenado individual sea concreto.',
      time: '2:28 (30 s; se deja en pantalla).',
      script: 'B lee dos filas: una de cada lado. Luego lee la frase final en voz alta. "Esa frase es la Matriz en una línea."',
      question: '—',
      expected: 'Reconocimiento: "así sí".',
      transition: 'B: "Ahora con su persona. Seis minutos en silencio."',
      extra: 'LIDERA: B.\nNota AMMX: confirmar que "SAP PM" es la denominación interna correcta.',
    },
  });

  K.activity(pres, {
    num: 10, section: 'Matriz de Flexibilidad del Liderazgo', page: pg(),
    title: 'Su persona, en la Matriz',
    steps: ['Arriba, una cosa que no saben de su persona (LEER). Después, su columna: al menos tres filas de “lo que adapto” y todas las de “lo que no adapto”.', 'Con un par (no el del Acto 7): 2½ minutos cada uno.', 'El par solo hace dos preguntas; no aconseja ni opina sobre la persona.'],
    time: '12', format: '6 min individual · 5 min en par', materials: 'Las dos preguntas del par:\n\n1. ¿Qué de lo que vas a adaptar le cambiaría la experiencia a esa persona desde mañana?\n\n2. ¿Qué de lo que no vas a adaptar ya se lo dijiste de forma explícita?',
    question: 'Un espacio vacío en “lo que no adapto” es una alerta.',
    notes: {
      purpose: 'Aplicar la herramienta a una persona real (hilo D-06) y validar concreción y claridad del estándar con un par.',
      time: V === '90' ? 'Versión 90: 6 min individual + 4 min en par.' : '2:28–2:39 (6 min individual + 5 min en par).',
      script: 'B: "Antes de llenar la fila, escriban arriba una cosa que no saben de esa persona. Ese es su LEER. Seis minutos en silencio." A los 4 minutos: "Revisen que la columna de la derecha no esté vacía." Después: "Con un par distinto al del Acto 7. El par solo hace dos preguntas, impresas en su hoja."',
      question: 'Las dos preguntas del par.',
      expected: 'La pregunta 2 del par suele revelar que el estándar nunca se dijo explícitamente: aprendizaje central.',
      transition: 'B: "Última conversación antes de cerrar, y es distinta a las demás."',
      extra: 'LIDERA: B.',
    },
  });

  // ───────────────────────────────────────────── ACTO 11 · INVERTIR EL LENTE
  K.divider(pres, { num: 5, section: 'Sección 5 · Compromiso · Actos 11 y 12', title: 'Una persona, una conversación, treinta días', page: pg(),
    notes: { purpose: 'Abrir la sección de compromiso.', time: 'Transición (sin tiempo propio).', script: 'Sin guion: la lámina se muestra mientras el facilitador que lidera la sección toma su lugar.', question: '—', expected: '—', transition: 'Siguiente lámina.', extra: 'Divisor de sección del Estándar AMMX (decks de más de 15 láminas).' } });
  const s48 = K.questionList(pres, {
    num: 11, section: 'Invertir el lente', page: pg(),
    title: 'Busquen a alguien que empezó a trabajar en otro contexto',
    questions: ['Algo que los líderes malinterpretan de las personas en mi etapa de carrera es…', 'Algo que las personas en mi etapa podríamos aprender de las de la tuya es…', 'Algo que las personas en tu etapa podrían aprender de la mía es…', 'Algo que probablemente ambos queremos es…'],
    size: 17,
    aside: 'Otra década, otra empresa, otra área u otro país.\n\n3 min cada uno. Quien escucha no interrumpe.\n\nAl final: “Lo que me llevo de lo que dijiste es…”\n\nHablen desde su experiencia, no en nombre de nadie más.',
    asideLabel: 'Cómo',
    notes: {
      purpose: 'Conversación humana, no debate (arco: apropiación). Nadie representa a una generación (D-15).',
      time: '2:39–2:49 (2 min parejas · 3+3 min · 1 min cierre · 1 min plenaria).',
      script: 'B: "Busquen a alguien que haya empezado a trabajar en un contexto distinto al suyo: otra década, otra empresa, otra área, otro país. No tienen que decir su edad. Hablen desde su experiencia, no en nombre de nadie más." Mientras las parejas conversan, B entrega en mano los sobres del trabajo previo, cerrados (D-20). Al final, B pide a dos voluntarios compartir solo la respuesta a la frase 4. Relevo a A: "Parece que lo que queremos se parece más de lo que el Muro sugería."',
      question: 'Frase 4: "Algo que probablemente ambos queremos es…"',
      expected: 'Respuestas como "que nos tomen en cuenta", "hacer un buen trabajo", "que el jefe sea claro". Emoción contenida; buen clima.',
      transition: 'A: "Cerremos donde empezamos."',
      extra: 'LIDERA: B → A.\nSALA HOMOGÉNEA (decidir en T–7 sin consultar edades): ocultar esta lámina y mostrar la variante siguiente ("Invertir el lente con mi persona").\nACORDEÓN: si vamos tarde, 8 min (solo frases 1 y 4).\nEvitar parejas jefe–colaborador directo. La CHRO forma pareja o trío con personas que no le reportan.',
    },
  });
  hideIn(s48, '120', '90');

  const s48b = K.questionList(pres, {
    num: 11, section: 'Invertir el lente · variante', page: pg(),
    title: 'Invertir el lente con mi persona',
    questions: ['Algo que los líderes malinterpretan de las personas en su etapa de carrera es…', 'Algo que yo podría aprender de su etapa es…', 'Algo que probablemente ambos queremos es…'],
    size: 19,
    aside: 'Respondan como creen que respondería su persona. Iniciales, no nombre.\n\nEl par pregunta: “¿Qué tan seguro estás de que diría eso? ¿Cuándo se lo preguntaste por última vez?”\n\nHoy imaginamos sus respuestas. La única forma de saber si acertamos es preguntar.',
    asideLabel: 'Cómo',
    notes: {
      purpose: 'Variante para sala homogénea en trayectoria (G3-16): invertir el lente hacia "mi persona" sin forzar a nadie a representar un grupo.',
      time: '2:39–2:49 (1 min instrucción · 3+3 min · 3 min: cada uno escribe la pregunta que le hará a su persona).',
      script: 'B: "Piensen en su persona. Respondan como creen que ella respondería. El par solo pregunta: ¿qué tan seguro estás?, ¿cuándo se lo preguntaste por última vez?" Al final: "Escriban la pregunta que le van a hacer. Esa pregunta es su LEER de la semana 1."',
      question: '"¿Cuándo se lo preguntaste por última vez?"',
      expected: 'Reconocimiento de que "nunca se lo he preguntado". Es el aprendizaje.',
      transition: 'A: "Cerremos donde empezamos."',
      extra: 'LÁMINA OCULTA POR DEFECTO. Se muestra solo si en T–7 se decide la variante; entonces se oculta la lámina anterior.',
    },
  });
  s48b.hidden = true;

  // ───────────────────────────────────────────── ACTO 12 · COMPROMISO
  K.question(pres, {
    num: 12, section: 'Compromiso', page: pg(),
    q: '¿Responderían hoy lo mismo?',
    sub: 'Abran el sobre con sus respuestas del trabajo previo. Léanlas en silencio. Miren también su resultado del diagnóstico: ¿qué respuesta necesitan usar más con su persona?',
    subY: 3.4,
    notes: {
      purpose: 'Cerrar el círculo con el diagnóstico y el trabajo previo: comparar la mirada de entrada con la de salida.',
      time: V === '180' ? '2:49–2:51 (2 min).' : 'Versión corta: 2 min (el sobre se entregó durante la Matriz).',
      script: 'A: "Abran su sobre. Es lo que ustedes escribieron antes de entrar. No lo compartan. Léanlo y marquen una frase: ¿la escribirían igual hoy? Si sí, ¿por qué? Si no, ¿qué cambió?" Y: "Miren su respuesta por defecto y su rango. Después de los casos, ¿cuál de las cuatro respuestas necesitan usar más con su persona?"',
      question: '¿Responderían hoy lo mismo?',
      expected: 'Sonrisas, algún "yo escribí eso…". Silencio.',
      transition: '"Convirtamos esto en una decisión."',
      extra: 'LIDERA: A.\nEl sobre y su contenido son del participante; no se recogen. Quien no respondió el trabajo previo encuentra una sola frase (P4) para contestar en 1 minuto. B hace barrido de sala al final; los sobres olvidados se destruyen el mismo día.',
    },
  });

  K.model(pres, {
    num: 12, section: 'Compromiso', page: pg(),
    title: 'Una decisión, no una intención',
    blocks: [
      { name: 'DEJAR', verb: 'Algo que dejaré de hacer', items: ['Una conducta concreta, no un rasgo.', 'Ejemplo: responder “todavía te falta piso” sin decir qué falta.'] },
      { name: 'EMPEZAR', verb: 'Algo que empezaré a hacer', items: ['Observable por mi equipo.', 'Ejemplo: preguntar antes de concluir.'] },
      { name: 'MANTENER', verb: 'Algo que ya hago bien', items: ['Lo que sí funciona y voy a sostener.', 'Ejemplo: ser claro con el estándar de seguridad.'] },
    ],
    takeaway: 'Una persona, una conversación: en los próximos 7 días tendré una conversación distinta con ___ sobre ___.',
    notes: {
      purpose: 'Compromiso personal concreto (DEJAR / EMPEZAR / MANTENER + una persona, una conversación). Nada de compromisos abstractos.',
      time: V === '180' ? '2:51–2:55 (4 min individual, en el cuaderno).' : 'Versión corta: 4 min individual.',
      script: 'A: "Cuatro minutos en silencio, en su cuaderno. Empiecen por abajo: una persona, una conversación. Es la misma persona que llevan desde el Espejo, salvo que haya una buena razón para cambiarla. Esa conversación es la semana 1 del Experimento: una conversación para preguntar. Iniciales, no nombre. Y un campo que no queremos que se salten: qué no van a negociar en esa conversación."',
      question: '"¿Cómo vas a saber que fue una conversación distinta?"',
      expected: 'Compromisos concretos; algunos genéricos ("escuchar más"). B recorre y pregunta en privado: "¿Con quién, cuándo y sobre qué?"',
      transition: 'A: "Antes de cerrar, dos minutos para ustedes."',
      extra: 'LIDERA: A.\nEl compromiso vive en el cuaderno (G3-20). Quien quiera, lo fotografía con su propio teléfono. Nada se recoge.',
    },
  });

  const sQR = K.base(pres, {
    num: 12, section: 'Antes de cerrar', page: pg(),
    title: 'Dos minutos en silencio para la encuesta',
    notes: {
      purpose: 'Encuesta de salida dentro del horario (Nivel 1 y 2 del plan de medición), antes del compromiso de la CHRO, para que la sesión termine en la frase ancla (G3-09, G3-10).',
      time: V === '180' ? '2:55–2:58 (2 min encuesta + 1 min en voz baja con el vecino).' : 'Versión corta: 2 min encuesta + 1 min con el vecino.',
      script: 'A: "Dos minutos, en silencio: la encuesta del código de su mesa. Es anónima." Al terminar: "Díganle a la persona de al lado, en una frase: en siete días voy a…" Sin comentarios. A menciona en una frase la tarjeta del Experimento que está en su sobre.',
      question: '—',
      expected: 'Silencio operativo; teléfonos en uso por 2 minutos.',
      transition: 'A cede la palabra a la CHRO: 1 minuto.',
      extra: 'LIDERA: A · B verifica que el QR cargue en la red del recinto; 10 encuestas impresas de respaldo.\nCHRO (2:58–2:59, D-13): comparte su propio compromiso, idealmente reconociendo una respuesta por defecto suya. No resume el taller ni evalúa a la sala. Esta lámina se queda en pantalla mientras habla.',
    },
  });
  sQR.addShape('roundRect', { x: 0.6, y: 1.85, w: 3.2, h: 3.2, fill: { color: C.white }, line: { color: C.navy, width: 2 }, rectRadius: 0.08 });
  T(sQR, 'Código QR de la encuesta institucional', { x: 0.8, y: 2.9, w: 2.8, h: 1.0, font: F.deck, fontSize: 11, color: C.slate, align: 'center', valign: 'middle' });
  AM.porConfirmar(sQR, 0.6, 5.25, 3.2, 'Insertar QR en T–3', { font: F.deck });
  T(sQR, 'Anónima. Tres minutos.', { x: 4.4, y: 1.9, w: 8, h: 0.6, font: F.deck, fontSize: 22, bold: true, color: C.navy });
  deck.bullets(sQR, 4.4, 2.7, 8.2, 2.2, ['Relevancia para los retos reales de su equipo.', 'Si el taller respetó su experiencia.', 'Si al releer su trabajo previo respondería lo mismo.', 'Qué cambiaría para la siguiente cohorte.'], { fontSize: 15 });
  const iyQR = deck.panel(sQR, 4.4, 5.0, 8.33, 1.6, 'En su sobre');
  T(sQR, 'La tarjeta del Experimento de Liderazgo a 30 días: una persona que les cueste leer; leer, adaptar, alinear.', { x: 4.7, y: iyQR - 0.05, w: 7.8, h: 0.7, font: F.deck, fontSize: 12.5, color: C.navy });

  const s56 = K.base(pres, {
    num: 12, section: 'Experimento de Liderazgo a 30 días', page: pg(),
    title: 'Una persona que me cuesta leer. Treinta días',
    notes: {
      purpose: 'Lámina de respaldo del Experimento a 30 días (oculta por defecto para descongestionar el Acto 12, G3-10). Se usa en la sesión de seguimiento o si la sala pregunta.',
      time: 'Oculta. Si se muestra: 1 min.',
      script: 'A: "En su sobre está la tarjeta del Experimento. Una persona que les cueste leer. Leer, adaptar, alinear, durante treinta días. Cinco minutos a la semana para anotar qué supusieron, qué preguntaron, qué aprendieron, qué cambiaron y qué pasó. La bitácora es suya; nadie la va a revisar. En la siguiente sesión compartimos aprendizajes, no identidades."',
      question: '—',
      expected: 'Alguien puede preguntar si es obligatorio: "Es una invitación. Los aprendizajes de la sala dependen de quién lo haga."',
      transition: '—',
      extra: 'RECORDATORIOS de los facilitadores: días 1, 7, 14, 21 y 30. Pulsos anónimos en días 7 y 30. Sesión de seguimiento de 60–90 min entre el día 35 y el 45.',
    },
  });
  deck.timeline(s56, 0.6, 1.95, 12.1, [{ label: 'Elegir a la persona', date: 'Día 1' }, { label: 'LEER: conversación para preguntar', date: 'Semana 1' }, { label: 'ADAPTAR: una o dos variables', date: 'Semanas 2–3' }, { label: 'ALINEAR: resultado y estándar', date: 'Semana 4' }, { label: 'Compartir aprendizajes', date: 'Día 35–45' }]);
  const logCols = ['Lo que supuse', 'Lo que pregunté', 'Lo que aprendí', 'Lo que cambié', 'Lo que pasó'];
  logCols.forEach((l, i) => {
    const x = 0.6 + i * 2.44;
    s56.addShape('roundRect', { x, y: 4.1, w: 2.3, h: 1.5, fill: { color: C.panel }, line: { type: 'none' }, rectRadius: 0.06 });
    T(s56, l, { x: x + 0.15, y: 4.25, w: 2.0, h: 0.8, font: F.deck, fontSize: 14, bold: true, color: C.navy });
  });
  T(s56, 'Bitácora personal: cinco minutos por semana. Nadie la revisa.', { x: 0.6, y: 5.85, w: 12, h: 0.45, font: F.deck, fontSize: 13, bold: true, color: C.coral });
  s56.hidden = true;

  K.question(pres, {
    num: 12, section: 'La otra pregunta', page: pg(),
    q: '¿Qué está ocurriendo en el entorno, qué necesita esta persona y cómo adapto mi liderazgo sin bajar el estándar?',
    size: 30,
    sub: 'La pregunta que proponemos llevar de vuelta a la planta, en lugar de “¿qué les pasa a estas nuevas generaciones?”.',
    subY: 4.6,
    notes: {
      purpose: 'Cerrar el círculo con la pregunta de apertura: reemplazar la frase de pasillo por una pregunta de liderazgo.',
      time: V === '180' ? '2:59:00–2:59:30 (30 s).' : '30 s.',
      script: 'A: "Al inicio les dijimos que al final les propondríamos otra pregunta. Es esta. No es más cómoda. Pero es la que sí depende de nosotros."',
      question: 'La de la lámina.',
      expected: 'Silencio; asentimientos.',
      transition: 'Última lámina.',
      extra: 'LIDERA: A.',
    },
  });

  K.anchor(pres, {
    num: 12, section: 'Cierre', page: pg(),
    line1: ANCHOR1, line2: ANCHOR2,
    sub: 'En una siderúrgica, la seguridad no se adapta. El liderazgo sí.',
    notes: {
      purpose: 'Cierre con la frase ancla y la regla de seguridad. Sin aplausos ni dinámica final.',
      time: V === '180' ? '2:59:30–3:00 (30 s).' : '30 s.',
      script: 'A lee las dos líneas y la frase de seguridad. Silencio breve. "Gracias."',
      question: '—',
      expected: 'Cierre sobrio.',
      transition: 'Fin. B hace barrido de sala (sobres olvidados) y desmontaje del Muro.',
      extra: 'LIDERA: A.\nCRITERIO DE ÉXITO: "Entré pensando que tenía un problema con una generación. Salgo entendiendo que tengo que leer mejor a las personas y adaptar mejor mi liderazgo."',
    },
  });

  // ───────────────────────────────────────────── ANEXO (oculto)
  const anx = K.tableSlide(pres, {
    num: null, section: 'Anexo · Fuentes principales', page: pg(),
    title: 'Fuentes de la evidencia presentada',
    rows: [
      ['Fuente', 'Qué aporta', 'Alcance'],
      ['Costanza et al. (2012); Ravid et al. (2025)', 'Diferencias generacionales pequeñas e inconsistentes', 'Meta-análisis · N = 19,961'],
      ['National Academies (2020); Pew Research (2023)', 'Gestionar por generación no está respaldado', 'EE. UU. · revisión de consenso'],
      ['Ng y Feldman (2008, 2010, 2012)', 'Estereotipos sobre trabajadores mayores; edad y seguridad', 'Meta-análisis · 418 estudios'],
      ['Rousseau (1989, 1995); Zhao et al. (2007)', 'Contrato psicológico y lealtad', 'Teoría y meta-análisis'],
      ['BLS (2024); EBRI (2025)', 'Antigüedad por edad, 1983–2024', 'EE. UU. · CPS'],
      ['Gallup SOGW 2026; Deloitte 2025–2026', 'Compromiso, gerentes, aspiraciones de liderazgo', 'Global · 44–100+ países'],
      ['OCDE (2023); McKinsey (2021); Kooij et al. (2011)', 'Horas trabajadas; propósito; motivos por edad', 'México / EE. UU. / meta-análisis'],
    ],
    colW: [4.3, 4.8, 3.03], fontSize: 10, rowH: 0.52,
    takeaway: 'Referencias completas, muestras, URL y nivel de confianza: Paquete de evidencia (entregable 06).',
    notes: {
      purpose: 'Respaldo de fuentes para consulta; oculta.',
      time: 'No se proyecta salvo pregunta.',
      script: 'Si un participante pregunta por una fuente: "Está en el Paquete de evidencia, con la muestra y la URL. Se lo compartimos."',
      question: '—', expected: '—', transition: '—',
      extra: 'Antes de cada edición, abrir las URL primarias y confirmar cifras (Paquete de evidencia, nota de método).',
    },
  });
  anx.hidden = true;

  await pres.writeFile({ fileName: OUT });
  const nHidden = pres.slides.filter((x) => x.hidden).length;
  console.log('Deck', V, '→', path.basename(OUT), '· láminas:', pres.slides.length, '· visibles:', pres.slides.length - nHidden);
})();
