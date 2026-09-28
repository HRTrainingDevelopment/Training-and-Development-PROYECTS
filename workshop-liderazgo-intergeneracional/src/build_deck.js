// Deck ejecutivo — Liderar entre generaciones (versión 180 min)
// Estándar AMMX (am_brand.js) + componentes editoriales (deck_components.js)
// Fuente de verdad: 00_decisiones/registro_decisiones.md · Evidencia: 01_evidence/evidence_pack.md
const path = require('path');
const K = require('./deck_components.js');
const { AM } = K;
const { C, F, T, rect, hline, deck } = AM;

const OUT = path.join(__dirname, '..', 'entregables', '01_Deck_Liderar_entre_Generaciones_AMMX.pptx');
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
    subtitle: 'De los estereotipos al liderazgo adaptativo. Una conversación entre directores sobre cómo leemos a las personas y cómo ampliamos nuestro rango de liderazgo sin mover el estándar.',
    kpis: [{ value: '3 h', label: 'de conversación, no de exposición' }, { value: '12', label: 'momentos de trabajo' }, { value: '1', label: 'persona, una conversación en 7 días' }],
    chain: ['Experiencia', 'Reflexión', 'Evidencia', 'Práctica', 'Compromiso'],
    audience: 'Directores y líderes senior · ArcelorMittal México',
    source: 'Gerencia de Capacitación y Desarrollo · Versión 1.0 · Octubre 2026',
  });
  K.notes(cover, {
    purpose: 'Recibir a la sala. La lámina está en pantalla mientras los participantes llegan; no se presenta.',
    time: 'Previo al inicio.',
    script: 'Sin guion. Los facilitadores saludan en la puerta y dirigen a cada persona a su mesa asignada (la CXO en una mesa sin reportes directos, D-13). Cada lugar tiene el workbook cerrado y el sobre del pre-work cerrado.',
    question: '—', expected: '—',
    transition: 'La CXO abre con 2 minutos (D-09): por qué esta conversación importa al negocio y que participará como una directora más. Facilitador A la presenta en una línea.',
    extra: 'LIDERA: CXO (2 min) → Facilitador A.\nPRINCIPIO RECTOR: Personas distintas no necesitan estándares distintos. Pueden necesitar un liderazgo distinto.\nGUIA PARA LA CXO: no anticipar conclusiones ni hablar de "las nuevas generaciones"; hablar del negocio (sucesión, conocimiento crítico, seguridad, retención) y de su propio interés en la conversación.',
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
      purpose: 'Crear seguridad psicológica, especialmente con la CXO en la sala y con facilitadores que le reportan (D-13).',
      time: '0:06–0:08 (2 min).',
      script: 'A (con la CXO asintiendo): "Primero: lo que se dice aquí se puede usar, pero no se atribuye. Nadie sale con una opinión sobre lo que dijo otra persona. Segundo: se vale disentir, también de nosotros y de los datos. Tercero: cualquiera puede decir \'paso\', sin explicar por qué. Nada de lo que escriban en su workbook se recoge ni se comparte; tampoco con [CXO], y ella está de acuerdo."',
      question: '"¿Alguien quiere agregar un acuerdo?"',
      expected: 'Normalmente nadie agrega. Si alguien pide "que no sea teoría", aceptarlo como acuerdo.',
      transition: 'Handoff A → B con una observación: "Empecemos por lo más cercano: cómo reaccionamos nosotros."',
      extra: 'LIDERA: A. La CXO confirma verbalmente el acuerdo de confidencialidad (una frase).',
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
  K.activity(pres, {
    num: 1, section: 'El espejo', page: pg(),
    title: 'Diez situaciones. Su primera reacción, no la ideal',
    steps: ['Lean cada situación del workbook y elijan lo que realmente harían primero, un martes con la agenda llena.', 'Marquen qué tanto les incomoda la situación, de 1 a 4.', 'No regresen a cambiar respuestas.'],
    time: '8', format: 'Individual y en silencio', materials: 'Workbook · Diagnóstico de Reacción del Líder\n\nNo es una prueba. No mide personalidad ni tiene relación con la edad.',
    question: 'Las cuatro opciones son respuestas que buenos líderes usan todos los días.',
    notes: {
      purpose: 'Que cada director vea su respuesta por defecto antes de hablar de generaciones (Idea 1).',
      time: '0:08–0:18 (2 min instrucción + 8 min respuesta).',
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
      extra: 'LIDERA: B.\nCLAVE DE PUNTUACIÓN: está en el workbook (solapa). Versión corta: 8 situaciones (se omiten 5 y 9).',
    },
  });
  const styles = [['DIRIGIR', 'Defino, decido, fijo la regla', 'Seguridad, urgencia, estándar'], ['EXPLICAR', 'Doy el porqué y el contexto', 'Cambios, decisiones que no se entienden'], ['ACOMPAÑAR', 'Desarrollo, doy feedback, hago coaching', 'Crecimiento, desempeño, aspiración'], ['EXPLORAR', 'Pregunto, escucho, suspendo el juicio', 'Ambigüedad, conducta que no entiendo']];
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
      script: 'B: "En pares, cinco minutos: ¿qué les sorprendió de su resultado? ¿Qué situación los incomodó más y por qué?" Plenaria, pregunta única y voluntaria: "¿Qué les sorprendió?" A cierra: "Cada uno de nosotros aprendió qué significa trabajo duro, respeto o compromiso en un lugar y en un momento. Eso es nuestro sistema operativo. Funciona. El riesgo es creer que es el único que existe. Por ejemplo, para alguien \'respeto\' es no cuestionar al jefe en público; para otra persona es que el jefe le explique el porqué."',
      question: '"¿Qué significa para ustedes \'compromiso\'? ¿Y qué creen que significa para la persona más nueva de su equipo?"',
      expected: '"Compromiso es estar cuando se necesita / quedarse hasta que salga." Contraste: "entregar lo acordado con calidad". Ambas son legítimas.',
      transition: 'A: "Ahora vamos a escuchar a alguien que tiene una opinión muy clara sobre esto."',
      extra: 'LIDERA: B (pares) → A (cierre de Idea 1).\nHANDOFF: B comparte una observación de sala ("En varias mesas escuché que…") y A la conecta con la idea.',
    },
  });
  const words = ['Trabajo duro', 'Respeto', 'Autoridad', 'Compromiso', 'Estabilidad', 'Reconocimiento', 'Crecimiento', 'Balance', 'Lealtad', 'Comunicación', 'Éxito'];
  words.forEach((w, i) => {
    const col = i % 4, row = Math.floor(i / 4);
    T(s7, w, { x: 0.6 + col * 3.05, y: 1.85 + row * 0.95, w: 2.95, h: 0.8, font: F.deck, fontSize: 21, bold: true, color: i === 3 ? C.coral : C.navy, valign: 'middle' });
  });
  hline(s7, 0.6, 4.85, 12.1, C.rule, 0.75);
  T(s7, 'Las mismas palabras. Distinto significado según dónde y cuándo aprendimos a trabajar.', { x: 0.6, y: 5.0, w: 12, h: 0.5, font: F.deck, fontSize: 15, bold: true, color: C.navy });
  T(s7, 'Nuestra interpretación es real para nosotros. No necesariamente describe la realidad de la otra persona.', { x: 0.6, y: 5.55, w: 12, h: 0.5, font: F.deck, fontSize: 13, color: C.slate });

  // ───────────────────────────────────────────── ACTO 2 · LA PROVOCACIÓN
  const s8 = K.base(pres, {
    num: 2, section: 'La provocación', page: pg(),
    title: 'Una opinión, no evidencia. Úsenla para pensar',
    source: 'Sinek, S. (2016). Entrevista en Inside Quest con Tom Bilyeu ("The Millennial Question"). Fragmento sugerido: segmento final sobre el entorno corporativo (≈10:00–14:30; confirmar en la copia proporcionada).',
    notes: {
      purpose: 'Encuadrar el video como provocación y no como evidencia (D-18), antes de proyectarlo.',
      time: '0:28–0:34 (1 min encuadre + ≤5 min video).',
      script: 'A: "Vamos a ver un fragmento de Simon Sinek, un divulgador muy escuchado en temas de liderazgo. Es una opinión popular; algunas cosas les van a resonar y otras no tienen respaldo. No se los vamos a explicar. Después queremos saber qué piensan ustedes." Se proyecta el fragmento. Al terminar, silencio de 3 segundos.',
      question: '—',
      expected: 'Asentimientos en las partes sobre empresas y liderazgo; posibles risas o incomodidad en las partes sobre jóvenes y celulares.',
      transition: 'B: "Cuatro preguntas para sus mesas."',
      extra: 'LIDERA: A (encuadre) · B opera el video.\n[POR CONFIRMAR] Fragmento exacto contra el video que proporcionó la CXO (D-01). Recomendación del equipo de evidencia: usar el segmento donde Sinek pone la responsabilidad en las empresas y los líderes (≈10:00–final de la entrevista de 2016), no los segmentos de crianza y dopamina, que generalizan de forma negativa sobre una generación sin evidencia. Alternativa si la CXO proporcionó otra pieza: Nordic Business Forum 2025 ("We gave them no loyalty…") — acceso por membresía.\nCOMPROMISO CON LA CXO (D-13): sabe de antemano que el taller cuestionará algunas afirmaciones del video.\nSubtítulos en español activados; video descargado localmente.',
    },
  });
  T(s8, '≤ 5', { x: 0.6, y: 1.9, w: 3, h: 1.4, font: F.deck, fontSize: 88, bold: true, color: C.coral });
  T(s8, 'minutos de video', { x: 0.6, y: 3.3, w: 3.5, h: 0.4, font: F.deck, fontSize: 14, bold: true, color: C.navy });
  const iy8 = deck.panel(s8, 5.2, 1.8, 7.53, 4.6, 'Mientras lo ven, noten');
  deck.bullets(s8, 5.5, iy8, 6.9, 3.6, ['Con qué están de acuerdo.', 'Qué los incomoda.', 'Qué creen que no ve.', 'Si lo que describe es de una generación… o de una época, de una etapa de vida, de una empresa.'], { fontSize: 15 });

  K.questionList(pres, {
    num: 2, section: 'La provocación', page: pg(),
    title: 'Cuatro preguntas para la mesa',
    questions: ['¿Con qué estuvieron de acuerdo?', '¿Qué los incomodó?', '¿Qué creen que no ve?', '¿Qué cambió: la gente o el trato?'],
    size: 22,
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
  K.activity(pres, {
    num: 3, section: 'El Muro Generacional', page: pg(),
    title: 'Coloquen cada frase donde la verían primero',
    steps: ['Cada persona toma 3 tarjetas del sobre de su mesa.', 'En silencio, colóquenlas en la zona de la generación a la que la atribuirían. Sin negociar.', 'Recorran el muro completo: ¿dónde se amontonan las tarjetas?'],
    time: '7', format: 'De pie, en silencio', materials: 'Un solo muro para toda la sala\n4 zonas · 16 frases por mesa · cinta azul\n\nLos rangos de años son convenciones y varían por país.',
    question: 'No hay respuestas correctas.',
    notes: {
      purpose: 'Hacer visible, sin sermón, que atribuimos necesidades humanas a una sola generación (Idea 2). La incomodidad la produce la propia sala.',
      time: '0:43–0:50 (1 min instrucción, 3 min colocar, 3 min recorrer).',
      script: 'B: "Cada mesa tiene 16 frases que escuchamos todos los días. Colóquenlas en la generación a la que ustedes, con su experiencia, la atribuirían. Una frase, una zona. En silencio, para no negociar la respuesta: si dos personas no coinciden, la coloca quien la tenga en la mano." Si preguntan "¿y si aplica a todas?": "Colócala donde la verías primero." Si alguien la deja en el espacio central vacío, se permite sin comentar.',
      question: '"Antes de sentarse, recorran el muro: ¿qué generación se ve más cargada? ¿Qué frase aparece en varias zonas?"',
      expected: 'Acumulación de "Quiero crecer…", "Quiero retroalimentación…" y "Estoy dispuesto a cambiar de empresa…" en Millennials/Z; "Valoro la seguridad económica…" y "Me importa que mi experiencia…" en Boomers/X.',
      transition: 'B, frente al muro con la sala en semicírculo: "¿Qué ven?"',
      extra: 'LIDERA: B. A observa qué frases generan duda (personas que caminan entre dos zonas) para usarlas en el debrief.\nTARJETAS (D-14, en primera persona): 16 necesidades del Activity Pack. En 120 min, las primeras 12. En 90 min el Muro se elimina.\nNO FOTOGRAFIAR el muro armado (D-14).',
    },
  });

  K.question(pres, {
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

  const s12 = K.base(pres, {
    num: 3, section: 'El Muro Generacional', page: pg(),
    title: 'Las necesidades son humanas; cambia la forma de expresarlas',
    source: 'Costanza et al. (2012), meta-análisis, N = 19,961; National Academies of Sciences, Engineering, and Medicine (2020); Kooij et al. (2011).',
    notes: {
      purpose: 'Cierre físico y conceptual del Muro: las tarjetas salen de las zonas generacionales y van a una sola columna.',
      time: '0:55–0:57 (2 min).',
      script: 'B y A mueven, sin prisa, una tarjeta de cada frase al póster central. Una línea por tarjeta, nunca más: "Seguridad económica. La queremos todos, sobre todo cuando hay incertidumbre." "Crecer y saber mi siguiente paso. Así queríamos crecer nosotros a los 27." "Una herramienta nueva si no veo para qué sirve. Depende mucho de cómo presentamos el cambio." A cierra: "Lo que acabamos de hacer no es un error de esta sala. La pregunta es si queremos liderar con ese atajo. Veamos qué dicen los datos."',
      question: 'Opcional, si hay tiempo: "¿Qué decisiones de liderazgo tomamos en planta con base en la zona donde pusimos una tarjeta?"',
      expected: 'Reconocimiento; algo de humor. Un director puede decir "la forma sí cambia". Validar: es exactamente el punto.',
      transition: 'A: "Veamos qué dicen los datos. Seis afirmaciones."',
      extra: 'LIDERA: B (tarjetas) → A (frase de salida y handoff).',
    },
  });
  const needs = ['Quiero saber que mi trabajo tiene futuro', 'Quiero que reconozcan lo que aporto', 'Quiero crecer y saber mi siguiente paso', 'Me importa que mi experiencia se tome en cuenta', 'Necesito entender el porqué', 'Quiero que mi trabajo tenga sentido', 'Valoro la seguridad económica para mi familia', 'Quiero ser tratado con respeto'];
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
    title: 'Seis afirmaciones. Tres segundos para decidir',
    steps: ['Leemos la afirmación en voz alta.', 'Al contar tres, todos levantan su tarjeta al mismo tiempo: CIERTO, FALSO o DEPENDE.', 'Escuchamos a alguien que votó distinto a la mayoría.', 'Vemos qué dice la evidencia.'],
    time: '13', format: 'Voto simultáneo', materials: '3 tarjetas por persona\n\nVotamos todos, incluida la dirección. Nadie mira al vecino antes.',
    notes: {
      purpose: 'Desmontar estereotipos con evidencia antes de explicar contextos (D-03, Idea 2). El voto simultáneo evita la conformidad con el rango.',
      time: '0:57–0:58 (1 min de instrucción; el bloque completo dura 13 min).',
      script: 'A: "Seis afirmaciones que escuchamos en la industria. Tienen tres segundos para decidir. Cuando cuente tres, todos levantan su tarjeta al mismo tiempo. Nadie mira al vecino antes. Una advertencia: los datos no le dan la razón a nadie en todo. Tampoco a los jóvenes."',
      question: '—',
      expected: 'Energía alta; competencia sana.',
      transition: '"Primera afirmación."',
      extra: 'LIDERA: A · B cuenta votos a ojo y los anota en rotafolio (C / F / D) para el plan de medición.\nRITMO: ≈1:40 por afirmación (lectura 10 s · voto 10 s · distribución 10 s · una voz disidente 30 s · revelación 30 s).\nLa CXO vota como cualquier participante y no se le pregunta en plenaria (D-13).\nVersiones 120/90: afirmaciones 1, 2, 4 y 6.',
    },
  });

  const myths = [
    {
      claim: 'La Generación Z no tiene lealtad.', verdict: 'MITO', title: 'Los jóvenes siempre han cambiado más de empleo',
      value: '2.7 años', valueLabel: 'Antigüedad mediana con su empleador de las personas de 25 a 34 años (EE. UU., 2024). En 2000 era 2.6.',
      valueDetail: 'Personas de 55 a 64 años: 9.6 años. La antigüedad se acumula con la edad.',
      points: ['Es un efecto de edad y etapa de vida: a los 30 también cambiábamos más de empleo.', 'La lealtad responde a la reciprocidad percibida. Cuando la persona siente que la empresa no cumplió, bajan la confianza y el compromiso, a cualquier edad.', 'No tenemos el dato mexicano comparable; el de AMMX por rango de edad sería el mejor espejo.'],
      takeaway: 'La pregunta útil no es si son leales, sino qué les ofrecemos para quedarse.',
      source: 'BLS, Employee Tenure 2024 (CPS, EE. UU.); EBRI (2025), Trends in Employee Tenure 1983–2024; Zhao et al. (2007), meta-análisis.',
      expected: 'Mayoría CIERTO o DEPENDE. Voz disidente típica: "Los de antes también se iban."',
      script: 'A: "El dato de Estados Unidos, que es el que tiene series largas, muestra que las personas de 25 a 34 años llevan en promedio menos de tres años con su empleador… y que era prácticamente igual en el año 2000. Los que hoy tienen 55 a 64 llevan casi diez. Es la edad, no la generación. Y la lealtad, según la investigación sobre contrato psicológico, sigue a la reciprocidad."',
    },
    {
      claim: 'Los Boomers se resisten a la tecnología.', verdict: 'MITO', title: 'La brecha es de oportunidad y de sentido, no de capacidad',
      value: '1 de 6', valueLabel: 'estereotipos sobre trabajadores mayores que se sostienen en un meta-análisis de 418 estudios (208,204 personas).',
      valueDetail: '"Más resistentes al cambio" y "menos motivados" no se sostienen. El único que sí: participan menos en capacitación.',
      points: ['Participar menos en capacitación suele reflejar que se les ofrece menos, no que aprendan menos: la edad no predice el desempeño en capacitación.', 'Entre usuarios de IA, 73 % de las personas de 58 años o más la lleva por su cuenta al trabajo (Gen Z: 85 %).', 'La edad se asocia con mejor desempeño en seguridad.'],
      takeaway: 'Cuando un experto no adopta una herramienta, pregunten primero para qué le sirve a él.',
      source: 'Ng y Feldman (2012; 2008), meta-análisis; Microsoft y LinkedIn, Work Trend Index 2024 (31,000 personas, 31 países).',
      expected: 'Muchos votos DEPENDE; risas de reconocimiento entre directores mayores que usan tecnología intensivamente.',
      script: 'A: "Un meta-análisis con más de 200 mil personas revisó seis estereotipos sobre trabajadores mayores. Solo uno se sostiene: participan menos en capacitación. Y eso puede deberse a que se les ofrece menos. Resistencia al cambio: no se sostiene. Y un dato para planta: la edad se asocia con mejor desempeño en seguridad."',
    },
    {
      claim: 'La gente ya no quiere trabajar.', verdict: 'MITO', title: 'El problema no es la disposición a trabajar, es el compromiso',
      value: '2,207', valueLabel: 'horas trabajadas al año por trabajador en México: el más alto de la OCDE (promedio 1,683). Dato 2023.',
      points: ['En EE. UU., la tasa de empleo de 25 a 54 años está en su nivel más alto desde 2001.', 'Lo que sí es bajo es el compromiso: 20 % de los empleados en el mundo está comprometido (Gallup, 2025), en todas las edades.', '"Quiet quitting" describe al grupo no comprometido: un fenómeno de gestión, no de edad.'],
      takeaway: 'La conversación útil no es sobre ganas de trabajar, sino sobre compromiso.',
      source: 'OCDE, Hours worked (2023); Gallup, State of the Global Workplace 2026 (datos 2025); S&P Global (2026) con datos BLS.',
      expected: 'Voto dividido. Un director puede decir "en planta cuesta mucho cubrir turnos": validar el dato local y separar disposición de condiciones.',
      script: 'A: "México es el país de la OCDE donde más horas se trabajan al año. En Estados Unidos, el empleo en edad productiva está en máximos de 25 años. Lo que sí está bajo, en todo el mundo y en todas las edades, es el compromiso: uno de cada cinco. Esa es una conversación de liderazgo."',
    },
    {
      claim: 'Los jóvenes no quieren ser jefes.', verdict: 'DEPENDE', title: 'No rechazan liderar; rechazan el liderazgo que ven de cerca',
      value: '6 % · 76 %', valueLabel: 'Gen Z: tener liderazgo como meta principal hoy (6 %) vs. interés en liderazgo senior en algún momento (76 %).',
      valueDetail: 'Millennials: 67 % interesados en liderazgo senior en algún momento.',
      points: ['Las barreras que citan: estrés y burnout, exceso de responsabilidad, equilibrio con la vida personal.', 'Los gerentes actuales son el grupo más desgastado: su compromiso bajó de 27 % a 22 % en un año.', 'Las encuestas de "conscious unbossing" que circulan tienen metodología débil.'],
      takeaway: '¿Qué ven cuando nos ven liderar?',
      source: 'Deloitte, Gen Z and Millennial Survey 2026 (≈22,500 personas, 44 países); Gallup, State of the Global Workplace 2026.',
      expected: 'Mayoría CIERTO. La pregunta final suele producir silencio: es el momento más fuerte del bloque. No llenarlo.',
      script: 'A: "Depende de cómo se pregunte. Si la pregunta es si su meta principal hoy es ser jefe, solo 6 %. Si la pregunta es si les interesa llegar a liderazgo senior algún día, tres de cada cuatro. Lo que rechazan es el costo que ven. Y los datos dicen que los jefes de hoy sí estamos desgastados." Pausa. Leer la pregunta final.',
    },
    {
      claim: 'Los jóvenes necesitan reconocimiento constante.', verdict: 'PARCIALMENTE CIERTO', title: 'Varía la frecuencia; la necesidad es de todos',
      value: '≈ 50 %', valueLabel: 'de las personas de Gen X y Boomers también quiere reconocimiento al menos algunas veces al mes.',
      valueDetail: 'En los más jóvenes, alrededor de 8 de cada 10.',
      points: ['Los más jóvenes lo prefieren con más frecuencia: quien empieza necesita más señales de si va bien. Es probable efecto de etapa.', 'El 72 % de los menores de 30 quiere feedback diario o semanal; en el total, 60 %.', 'El reconocimiento se asocia con más compromiso y menos desgaste en todas las edades.'],
      takeaway: 'Lo que cambia es la frecuencia y la forma, no la necesidad.',
      source: 'Gallup y Workhuman (2022), EE. UU.; Gallup, datos de preferencia de feedback. Cifras de reportes de Gallup: verificar en fuente primaria antes de cada edición.',
      expected: 'Mayoría CIERTO. Aquí la sala acierta en parte: reconocerlo aumenta la credibilidad del bloque.',
      script: 'A: "Aquí la sala tiene algo de razón. Los más jóvenes quieren reconocimiento con más frecuencia. Pero la mitad de Gen X y Boomers también lo quiere varias veces al mes. Y el efecto del reconocimiento aparece en todas las edades. Lo que cambia es cada cuánto y de qué forma."',
    },
    {
      claim: 'Lo quieren todo ya.', verdict: 'DEPENDE', title: '¿Impaciencia, o una ruta que no se ve?',
      value: '48 %', valueLabel: 'de Gen Z no se siente financieramente segura (Deloitte 2025, 44 países, incluido México).',
      valueDetail: 'Idea tomada del video: la impaciencia como rasgo de una generación.',
      points: ['Los motivos de crecimiento son más altos al inicio de la carrera y bajan con la edad. También fue así para quienes hoy dirigimos.', 'La urgencia coincide con inseguridad financiera: vivienda, inflación, informalidad.', 'La prisa se vuelve problema cuando no hay una ruta visible, con criterios y plazos.'],
      takeaway: 'Antes de pedir paciencia, pregunten si la ruta es visible.',
      source: 'Kooij et al. (2011), meta-análisis; Deloitte, Gen Z and Millennial Survey 2025 (23,482 personas, 44 países).',
      expected: 'Mayoría CIERTO. Contraejemplos de la sala: "yo a los 25 también quería todo ya".',
      script: 'A: "Esta idea viene del video. Hay algo real: a los 25, casi todos queríamos crecer rápido; los motivos de crecimiento bajan con la edad. Y hay contexto: casi la mitad de la Gen Z no se siente financieramente segura. La prisa se vuelve problema cuando no le mostramos una ruta."',
    },
  ];
  myths.forEach((m, i) => {
    K.vote(pres, {
      num: 4, section: 'Mito vs. Dato', page: pg(), counter: `${i + 1} / 6`, claim: m.claim,
      notes: {
        purpose: `Voto simultáneo sobre la afirmación ${i + 1}.`,
        time: '≈40 s (lectura, voto y distribución).',
        script: `A lee en voz alta: "${m.claim}". "Uno, dos, tres." B anuncia la distribución aproximada ("mayoría ___, unos ___"). A pregunta a una persona que votó distinto a la mayoría: "¿Qué viste tú?"`,
        question: '"¿Qué viste tú?" (a alguien de la minoría; nunca a la CXO; nunca dos veces seguidas a la misma mesa).',
        expected: m.expected,
        transition: '"Veamos qué dice la evidencia."',
        extra: 'LIDERA: A · B cuenta y registra.',
      },
    });
    K.verdict(pres, {
      num: 4, section: 'Mito vs. Dato', page: pg(), title: m.title, verdict: m.verdict, value: m.value, valueLabel: m.valueLabel, valueDetail: m.valueDetail, points: m.points, takeaway: m.takeaway, source: m.source,
      notes: {
        purpose: `Revelar la evidencia sobre "${m.claim}" con prudencia, sin sobrecorregir.`,
        time: '≈60 s.',
        script: m.script,
        question: m.takeaway.endsWith('?') ? m.takeaway : '—',
        expected: 'Asentimientos; algún "depende del contexto". Validar: casi todo depende, y esa es la lección.',
        transition: i < 5 ? '"Siguiente afirmación."' : 'A: "¿En cuántas acertamos como sala? ¿Qué tienen en común las que fallamos?"',
        extra: 'LIDERA: A.\nCITAR SIEMPRE qué mide el dato, geografía y año (ver Evidence Pack). Datos de EE. UU. = patrón con series largas; decirlo en voz alta.\nNO DECIR "los datos demuestran". Decir "se asocia", "coincide", "la evidencia sugiere".',
      },
    });
  });

  const s27 = K.model(pres, {
    num: 4, section: 'Mito vs. Dato', page: pg(),
    title: 'La generación es un lente, no un diagnóstico',
    source: 'National Academies of Sciences, Engineering, and Medicine (2020); Costanza et al. (2012); Rudolph, Rauvola y Zacher (2018); Pew Research Center (2023).',
    blocks: [
      { name: 'EDAD', verb: 'La etapa de vida', items: ['A los 25 casi todos queremos crecer rápido y cambiar de empleo.', 'A los 55 pesan más la estabilidad y el legado.'], question: '¿Yo a los 25 era tan distinto?' },
      { name: 'ÉPOCA', verb: 'Lo que vivimos todos a la vez', items: ['Pandemia, inflación, IA, nearshoring.', 'Nos afecta a todos; se nota más en quien empieza.'], question: '¿Qué nos está pasando a todos?' },
      { name: 'COHORTE', verb: 'Lo que marcaría a una generación', items: ['Existe, pero es la más pequeña y la más difícil de probar.', 'Con una encuesta de un solo momento no se puede separar de la edad.'], question: '¿Qué sé de esta persona, no de su generación?' },
    ],
    takeaway: 'Generación ≠ personalidad. Hay más diferencia dentro de cada generación que entre ellas.',
    notes: {
      purpose: 'Cierre conceptual del Acto 4 (Idea 2): distinguir efecto edad, época y cohorte en lenguaje de directores.',
      time: '1:08–1:10 (2 min).',
      script: 'A: "Cuando vemos que alguien joven piensa distinto, puede ser por tres cosas: su edad, la época que todos vivimos, o su generación. Como el año de nacimiento es igual al año de hoy menos la edad, si comparo hoy a alguien de 25 con alguien de 60, matemáticamente no puedo saber si la diferencia es por la edad o por la generación. Es como querer saber si un platillo sabe distinto por la receta o por el horno cuando cambiaste las dos cosas a la vez. Por eso las Academias Nacionales de Estados Unidos concluyeron en 2020 que gestionar por generación no está respaldado por la investigación. No es que las generaciones no existan: explican mucho menos de lo que creemos." Cierre: "Si los datos no confirman la mayoría de lo que creemos, la pregunta no es qué les pasa a los jóvenes. Es qué cambió alrededor de todos."',
      question: '"¿En cuántas acertamos como sala? ¿Qué tienen en común las que fallamos?"',
      expected: '"Todas eran generalizaciones." "Casi todo era edad." Algún ingeniero puede preguntar por Twenge (2010): "Sí hay estudios que encuentran algunas diferencias, sobre todo en el valor del tiempo libre; aun ahí el tamaño es moderado y no dice nada de la persona que tienes enfrente."',
      transition: 'A: "Diez minutos de receso. Al regresar: qué cambió en el mundo al que cada uno entró a trabajar."',
      extra: 'LIDERA: A.\nNO DECIR "las generaciones no existen" (sobrecorrección; Gate 1, R12).',
    },
  });

  K.question(pres, {
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

  // ───────────────────────────────────────────── ACTO 5 · CONTEXTOS
  K.question(pres, {
    num: 5, section: 'Cuatro contextos de entrada al trabajo', page: pg(),
    q: '¿A qué mundo entramos a trabajar?',
    sub: 'Cuatro contextos de entrada al trabajo en México. Esto describe el entorno, no a las personas. Los rangos de años son convenciones y varían por país.',
    subY: 3.9,
    notes: {
      purpose: 'Reencuadrar las generaciones como contextos (D-17): entender experiencias formativas sin etiquetar a personas.',
      time: '1:20 (30 s).',
      script: 'A: "Ahora sí vamos a hablar de generaciones, pero de otra forma: no de cómo son, sino del mundo que encontraron cuando entraron a trabajar. Esto describe el entorno, no a las personas. Mientras vemos cada uno, ubíquense: ¿cuál fue el suyo? ¿Y el de la persona más nueva de su equipo?"',
      question: '—', expected: 'Curiosidad; directores ubicando su propia historia.',
      transition: '"Empecemos por quienes entraron a trabajar entre los sesenta y mediados de los ochenta."',
      extra: 'LIDERA: A. Máximo 2 minutos por contexto.\nPrincipio (Gate 1, R11): "Lo que digamos de quien no está en esta sala es una hipótesis que hay que verificar con esa persona."',
    },
  });

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
      world: ['Inflación alta y la “década perdida” de los ochenta.', 'Entrada al GATT (1986) y privatizaciones: SICARTSA se privatiza en 1991.', 'TLCAN (1994) y crisis de 1994–95: el PIB cayó 6.2 % en 1995.', 'Muchos vivieron cambios de dueño; en 2006 llega ArcelorMittal.'],
      work: 'Un medio para construir autonomía y seguridad propia en entornos inestables.',
      expect: 'Autonomía, resultados por encima de la forma, poca supervisión cercana.',
      friction: 'Impaciencia con la supervisión cercana y con procesos lentos; escepticismo ante promesas corporativas.',
      dontAssume: 'Que su escepticismo es falta de compromiso. Tiene historia.',
    },
    {
      title: 'Entraron cuando la estabilidad ya no estaba garantizada', years: 'MILLENNIALS · NACIDOS ≈1981–1996 · ENTRARON ≈2000–2018',
      world: ['Crisis financiera global: la economía mexicana cayó más de 5 % en 2009.', 'Smartphone e internet llegaron con su entrada al trabajo.', 'Reforma laboral de 2012 y expansión de la subcontratación.', 'Hoy muchos ya son jefes de turno, gerentes y directores.'],
      work: 'Aprendizaje y empleabilidad: el desarrollo como seguro ante la incertidumbre.',
      expect: 'Desarrollo visible, feedback, sentido, flexibilidad.',
      friction: 'Pedir crecimiento y feedback más rápido de lo que el sistema ofrece; ser leídos como impacientes.',
      dontAssume: 'Que querer crecer rápido es falta de compromiso.',
    },
    {
      title: 'Entraron entre pandemia, nearshoring e IA', years: 'GENERACIÓN Z · NACIDOS ≈1997–2012 · ENTRARON ≈2015–HOY',
      world: ['Pandemia 2020: la mayor caída del PIB desde 1932; muchos empezaron a distancia.', 'Reforma de subcontratación de 2021.', 'T-MEC y nearshoring: inversión extranjera récord en 2023.', 'IA generativa, y una informalidad cercana a 55 % como alternativa real.'],
      work: 'Un intercambio que se revisa: salario, aprendizaje, bienestar y trato.',
      expect: 'Claridad, reciprocidad visible, desarrollo concreto, límites entre trabajo y vida.',
      friction: 'Preguntar el porqué y poner límites de horario; ser leídos como falta de compromiso.',
      dontAssume: 'Que no aguantan el trabajo de planta: no hay evidencia comparativa que lo sostenga.',
    },
  ];
  gens.forEach((g, i) => {
    K.generation(pres, {
      num: 5, section: 'Cuatro contextos de entrada al trabajo', page: pg(), ...g,
      source: 'Esto describe el entorno, no a las personas. Fuentes: Evidence Pack §8 (Banxico, INEGI, historia de SICARTSA y Fundidora Monterrey). Cortes generacionales: convención de Pew Research.',
      notes: {
        purpose: `Contexto de entrada al trabajo ${i + 1} de 4. Generar comprensión de experiencias formativas, no etiquetas.`,
        time: `${['1:20', '1:22', '1:24', '1:26'][i]} (2 min).`,
        script: `A recorre la columna "El mundo al que entraron" en voz alta, con una historia local si la sala la conoce (Fundidora, SICARTSA, cambios de dueño). Luego lee solo el recuadro "Lo que un líder no debería suponer". ${i === 2 ? 'Subrayar: "Muchos Millennials ya son jefes y directores: en esta sala hay algunos."' : ''}${i === 3 ? 'Subrayar: "Son los que menos están en esta sala. Todo lo que digamos de ellos es hipótesis que hay que verificar con la persona."' : ''}`,
        question: i === 0 ? '"¿Quién entró a trabajar en este contexto? ¿Qué aprendió de él sobre la lealtad?"' : i === 1 ? '"¿Quién vivió un cambio de dueño? ¿Qué le enseñó sobre las promesas de la empresa?"' : i === 2 ? '"¿Qué le pasó a su primer empleo en 2008–2009?"' : '"¿Qué sabemos realmente de la persona más nueva de nuestro equipo… y qué suponemos?"',
        expected: 'Historias personales breves. Si alguien empieza a generalizar ("los de ahora…"), A pregunta: "¿Qué conducta concreta observaste? ¿Qué más podría explicarla?"',
        transition: i < 3 ? '"Siguiente contexto."' : 'A: "Cuatro contextos. Y un hilo común: el trato entre las personas y las empresas cambió."',
        extra: 'LIDERA: A.\nNO USAR: "los chavos", "generación de cristal", "la vieja guardia", "nativos digitales" (glosario §4.6 de instrumentos psicológicos).\nCifras: verificar en fuente primaria antes de cada edición (Evidence Pack §8).',
      },
    });
  });

  K.contrast(pres, {
    num: 5, section: 'El contrato cambió', page: pg(),
    title: 'El contrato psicológico cambió, empezando por las empresas',
    flow: true,
    left: { label: 'Contrato anterior', items: ['Trabaja duro', 'Sé leal', 'Acumula antigüedad', 'La empresa te protege', 'Tu carrera avanza'] },
    right: { label: 'Contrato contemporáneo', items: ['Crea valor', 'Desarrolla habilidades', 'Mantén tu empleabilidad', 'Busca experiencias con sentido', 'Revisa si el intercambio sigue valiendo'] },
    takeaway: 'En nuestra industria lo vivimos: Fundidora 1986, SICARTSA 1991, ArcelorMittal 2006.',
    source: 'Rousseau (1989; 1995); Cappelli (1999), The New Deal at Work; Evidence Pack E-A9.',
    notes: {
      purpose: 'Idea 3: el contrato laboral cambió de forma documentada, desde las empresas, antes que la gente.',
      time: '1:28–1:31 (3 min).',
      script: 'A: "Durante décadas el trato implícito fue el de la izquierda. Muchos en esta sala lo cumplieron y les funcionó. Desde los ochenta, las empresas en todo el mundo —y la siderurgia mexicana no fue excepción— pasaron a reestructuras, outsourcing y relaciones más de mercado. Quienes entraron después aprendieron el contrato de la derecha. No es mejor ni peor: es una respuesta racional al entorno que encontraron." B lee dos frases del rotafolio "Lo que escuchamos" del Acto 2 que hablen de cambio.',
      question: '"Regresemos a su rotafolio: ¿cambió la gente o cambió el trato?"',
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
      time: '1:31–1:34 (3 min).',
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
    source: 'Gallup (2022), 13,085 empleados, EE. UU.; Randstad Workmonitor 2025–2026 (26,000+ personas, 35 mercados); McKinsey (2021); Evidence Pack §7.',
    notes: {
      purpose: 'Acto 6: necesidades humanas comunes, organizadas por necesidad y no por generación (D-17), para evitar el tribalismo generacional.',
      time: '1:34–1:37 (3 min).',
      script: 'A: "Si juntamos los estudios más grandes sobre qué busca la gente en un trabajo, las prioridades principales se repiten en todas las edades: salario justo, estabilidad, bienestar, hacer lo que uno hace bien, un buen jefe. Por primera vez en 22 años, en la encuesta global de Randstad el equilibrio vida–trabajo quedó por encima del salario, y eso es en todas las edades, no en una. Un dato que para una siderúrgica importa: la brecha de propósito más grande no es entre generaciones, es entre ejecutivos y primera línea."',
      question: '—',
      expected: 'Reconocimiento: "es lo mismo que yo quiero".',
      transition: '"¿Y dónde sí hay diferencias?"',
      extra: 'LIDERA: A.\nDATO McKINSEY (2021, EE. UU.): 85 % de ejecutivos dice vivir su propósito en el trabajo vs. 15 % de mandos y primera línea.',
    },
  });
  const common = ['Salario justo', 'Estabilidad', 'Bienestar', 'Relación con el jefe', 'Pertenencia', 'Trabajo con sentido', 'Hacer lo que hago bien'];
  common.forEach((c, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    T(s37, c, { x: 0.6 + col * 3.7, y: 1.8 + row * 0.9, w: 3.6, h: 0.75, font: F.deck, fontSize: 20, bold: true, color: C.navy, valign: 'middle' });
  });
  T(s37, 'NECESIDADES HUMANAS COMUNES', { x: 0.6, y: 5.55, w: 7, h: 0.35, font: F.deck, fontSize: 10, bold: true, color: C.coral, charSpacing: 2 });
  T(s37, 'Aparecen entre las prioridades de todas las edades.', { x: 0.6, y: 5.9, w: 7, h: 0.4, font: F.deck, fontSize: 13, color: C.slate });
  const iy37 = deck.panel(s37, 8.1, 1.8, 4.63, 4.85, 'Un dato para planta');
  T(s37, '85 % · 15 %', { x: 8.4, y: iy37, w: 4.1, h: 0.9, font: F.deck, fontSize: 36, bold: true, color: C.coral });
  T(s37, 'Ejecutivos vs. mandos y primera línea que dicen vivir su propósito en el trabajo (McKinsey, 2021, EE. UU.).', { x: 8.4, y: iy37 + 1.0, w: 4.1, h: 1.3, font: F.deck, fontSize: 12, color: C.navy });
  T(s37, 'La brecha de propósito más grande es jerárquica, no generacional.', { x: 8.4, y: iy37 + 2.5, w: 4.1, h: 1.0, font: F.deck, fontSize: 13, bold: true, color: C.navy });

  K.tableSlide(pres, {
    num: 6, section: 'Lo que la gente realmente quiere', page: pg(),
    title: 'Donde sí hay diferencias, son de frecuencia, forma y urgencia',
    source: 'Kooij et al. (2011), meta-análisis; Gallup/Workhuman (2022); Deloitte 2025; Randstad 2025. Diferencias promedio con alta variación individual.',
    rows: [
      ['Necesidad', 'Lo que es común', 'Lo que varía', 'Qué lo explica mejor'],
      ['Crecimiento', 'Todos quieren avanzar', 'Más urgencia al inicio de la carrera', 'Edad y etapa de vida'],
      ['Reconocimiento', 'Se asocia con compromiso a cualquier edad', 'Frecuencia y forma (pública o privada)', 'Etapa: quien empieza necesita más señales'],
      ['Desarrollo', 'Aprender en el puesto', 'Los jóvenes piden más mentoría; a los mayores se les ofrece menos', 'Oportunidad y etapa'],
      ['Compensación', 'Prioridad número uno para casi todos', 'Urgencia por inseguridad financiera', 'Época y etapa de vida'],
      ['Autonomía', 'Valorada en todas las edades', 'Diferencias de pocos puntos', 'Rol y personalidad'],
      ['Bienestar', 'Prioridad transversal', 'Más estrés reportado en menores de 35 y en gerentes', 'Época y rol'],
    ],
    colW: [2.2, 3.4, 3.6, 2.93], fontSize: 10.5, rowH: 0.56,
    takeaway: 'Eso depende más de la etapa de vida y del jefe que del año de nacimiento.',
    notes: {
      purpose: 'Mostrar diferencias reales sin exagerarlas: son de frecuencia, forma y urgencia, y se explican mejor por edad, etapa y época.',
      time: '1:37–1:40 (3 min).',
      script: 'A: "Sí hay diferencias. Pero miren la última columna: casi todas se explican mejor por la etapa de vida, el rol o la época que por la generación. Y fíjense en quién aparece como el grupo más estresado: los gerentes." Handoff a B.',
      question: 'B a las mesas (4 min): "¿Qué necesidad común estamos atendiendo peor, y con quién?"',
      expected: '"Desarrollo con los expertos senior." "Reconocimiento con los jóvenes." "Claridad de expectativas con todos." Aparece que los expertos senior también tienen necesidades desatendidas: es un hallazgo valioso.',
      transition: 'B: "Hasta aquí hemos hablado de otros. Los próximos cinco minutos son sobre ustedes."',
      extra: 'LIDERA: A (lámina) → B (pregunta a mesas, 1:40–1:44).\nDATO DE APOYO: Gallup atribuye al gerente al menos 70 % de la varianza del engagement entre equipos (2015, 2.7 millones de empleados; análisis propietario, no "causa 70 %"). Engagement de gerentes: 27 % → 22 % (2024→2025).',
    },
  });

  K.bigNumbers(pres, {
    num: 6, section: 'Lo que la gente realmente quiere', page: pg(),
    title: 'El jefe es la palanca más grande, y también está desgastado',
    stats: [
      { value: '70 %', label: 'de la varianza del engagement entre equipos se asocia con el gerente', detail: 'Gallup, 2.7 millones de empleados, ≈100,000 equipos (2015).' },
      { value: '22 %', label: 'de los gerentes en el mundo está comprometido (27 % un año antes)', detail: 'Gallup, State of the Global Workplace 2026, datos 2025.', color: C.plum },
    ],
    reading: 'El jefe es la variable que más distingue a un equipo de otro en estos datos. No significa que “cause” el 70 %.\n\nLa buena noticia es que casi todo lo que la gente pide —claridad, feedback, desarrollo, cuidado— son conductas del jefe, no políticas corporativas.',
    source: 'Gallup, State of the American Manager (2015); Gallup, State of the Global Workplace 2026. Análisis propietario, no revisado por pares.',
    notes: {
      purpose: 'Conectar las necesidades con la palanca que está en manos de los directores: el liderazgo directo. Reconocer que también ellos están desgastados (sin tono paternalista).',
      time: '1:40 (30 s, antes de la pregunta a mesas) — lámina de fondo durante la conversación.',
      script: 'A: "Dos datos. El jefe es la variable que más distingue a un equipo de otro. Y los jefes, en todo el mundo, estamos más desgastados que hace un año. Eso no es un reproche: es parte del problema que queremos resolver." B lanza la pregunta a mesas.',
      question: '"¿Qué necesidad común estamos atendiendo peor, y con quién?"',
      expected: 'Conversación de mesa; se reconoce el propio desgaste.',
      transition: 'B: "Ahora, cinco minutos de silencio."',
      extra: 'LIDERA: A → B.\nNO DECIR "70 % del engagement lo causa el jefe".',
    },
  });

  // ───────────────────────────────────────────── ACTO 7 · ESPEJO DEL LÍDER
  K.questionList(pres, {
    num: 7, section: 'El espejo del líder', page: pg(),
    title: 'Cinco minutos en silencio',
    questions: ['¿A quién me resulta más fácil liderar? ¿Qué tiene en común conmigo?', '¿Quién me frustra, o a quién me cuesta leer?', '¿Qué conductas me detonan?', '¿Qué supongo sobre esa persona? ¿Cómo lo sé?', 'Cuando alguien trabaja distinto a mí, ¿lo interpreto como diferente o como incorrecto?', '¿Qué parte de mi forma de liderar se formó en condiciones que cambiaron, y qué parte sigue siendo valiosa?'],
    size: 14.5,
    aside: 'Nadie va a leer lo que escriban.\n\nCuando piensen en personas concretas, escriban solo iniciales.\n\nAl final, elijan a “mi persona”: la llevaremos al resto de la sesión.',
    asideLabel: 'Instrucción',
    notes: {
      purpose: 'Introspección fuerte (arco: comprensión). Elegir a "mi persona", el hilo que conecta con la Matriz, el compromiso y el Experimento (D-06).',
      time: '1:44–1:49 (5 min de silencio).',
      script: 'B: "Los próximos cinco minutos son en silencio. Nadie va a leer lo que escriban. Contesten con honestidad, no con elegancia. Cuando piensen en personas concretas, escriban solo iniciales. Al final, elijan a una persona: la vamos a llevar al resto del taller." Después: silencio completo. NO llenar el silencio. Los facilitadores se sientan o se quedan quietos.',
      question: 'Las seis de la lámina (workbook).',
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
      question: 'Preguntas de reto de B por caso (Activity Pack §3.6). Ejemplos: Caso A: "Si Daniela tuviera 45 años y la misma trayectoria, ¿le habrían contestado igual?" Caso D: "¿Cuál de nuestras costumbres estamos defendiendo como si fuera un estándar?" Caso E: "¿Qué diferencia hay entre reconocer a alguien y necesitarlo?"',
      expected: 'Primeras reacciones de juicio o de DIRIGIR; al escribir supuestos, las respuestas se matizan. Casi ninguna mesa negocia la seguridad.',
      transition: 'B: "Peguen sus hojas en la pared. Galería."',
      extra: 'LIDERA: B · A observa y anota qué mesa confundió "adaptar" con "conceder" y qué mesa confundió "firmeza" con "no escuchar" (se usa en el Acto 9).\nCON 4 MESAS: casos A, B, D y E. CON 5: omitir C o F según el perfil de la sala.\nLa CXO trabaja en su mesa como par; no es la relatora.',
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
    questions: ['¿Qué patrón ven en las primeras reacciones?', '¿En qué casos cambió la respuesta cuando la mesa escribió sus supuestos?', 'Miren todas las respuestas a la pregunta 6: ¿alguna mesa negoció la seguridad o el estándar?'],
    size: 20,
    aside: 'Galería: 4 minutos.\nPlenaria: 5 minutos.\n\nPunto adhesivo: la respuesta que yo sí usaría.\n\n“?”: el supuesto que yo cuestionaría.',
    asideLabel: 'Dinámica',
    notes: {
      purpose: 'Comparar respuestas entre mesas y mostrar que adaptarse no fue bajar la vara en ningún caso.',
      time: '2:09–2:20 (4 min galería · 5 min plenaria · 2 min síntesis).',
      script: 'B conduce las tres preguntas siempre sobre la pared. Conectar con el Acto 1: "¿Las primeras reacciones se parecen a su respuesta por defecto?" Síntesis de B: "Casi todas las mesas coincidieron en lo que no se negocia. Donde diferimos fue en el cómo. Ese cómo tiene un nombre." Handoff a A.',
      question: '¿Alguna mesa negoció la seguridad o el estándar?',
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
    right: { label: 'Respuesta adaptable', title: 'Rango para leer a cada persona', items: ['Pregunta antes de concluir', 'Ajusta el cómo: canal, feedback, autonomía', 'Separa costumbre de estándar', 'Mide por resultados acordados', 'Sostiene el estándar con claridad'] },
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
      { name: 'ADAPTAR', verb: 'Ajustar cómo lidero', items: ['Comunicación y contexto (el porqué)', 'Feedback, reconocimiento, autonomía', 'Desarrollo y frecuencia'], question: 'Cambio el cómo.' },
      { name: 'ALINEAR', verb: 'Sostener expectativas y resultados', items: ['Estándares, seguridad, ética', 'Accountability y desempeño', 'Lo digo de forma explícita'], question: 'No muevo el qué.' },
    ],
    takeaway: ANCHOR1 + ' ' + ANCHOR2,
    notes: {
      purpose: 'Modelo simple y memorable que se pueda recordar semanas después sin materiales.',
      time: '2:22–2:27 (5 min, incluye re-lectura de un caso).',
      script: 'A: "Leer: entender a la persona y el contexto antes de concluir. Adaptar: ajustar cómo lidero. Alinear: sostener lo que no cambia y decirlo en voz alta." Re-lectura de un caso con la sala (recomendado Caso B · Rogelio): "Leer: ¿qué le preocupa del sistema? Adaptar: que él defina qué se registra y enseñe diagnóstico. Alinear: el registro no está a discusión; cómo lo hacemos, sí."',
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
      script: 'B: "Una fila para su persona del Acto 7: iniciales, no nombre. A la izquierda, lo que pueden ajustar. A la derecha, lo que no se mueve. La columna de la derecha nunca se queda vacía: si lo está, es una alerta."',
      question: '—',
      expected: 'Asentimientos: la columna derecha es la que hace aceptable el mensaje para una audiencia operativa.',
      transition: '"Así se ve llena."',
      extra: 'LIDERA: B.',
    },
  });
  const adapt = ['Comunicación', 'Contexto (el porqué)', 'Feedback', 'Reconocimiento', 'Autonomía', 'Desarrollo', 'Frecuencia'];
  const keep = ['Estándares', 'Ética', 'Seguridad', 'Accountability', 'Desempeño'];
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
  T(s49, 'Filas: mi persona (iniciales) · un caso del laboratorio.  La seguridad es innegociable.', { x: 0.6, y: 6.3, w: 12.1, h: 0.45, font: F.deck, fontSize: 13, bold: true, color: C.coral, valign: 'middle' });

  K.tableSlide(pres, {
    num: 10, section: 'Matriz de Flexibilidad del Liderazgo', page: pg(),
    title: 'Ejemplo: Rogelio, 31 años en laminación en frío',
    rows: [
      ['Lo que adapto', 'Cómo', 'Lo que no adapto', 'Qué se mantiene'],
      ['Comunicación', 'En persona, en el taller; nunca corregirlo frente al equipo', 'Estándares', '100 % de órdenes registradas en SAP PM en seis semanas'],
      ['Contexto', 'Mostrarle su propio historial de fallas y para qué sirven los datos', 'Ética', 'Los registros reflejan lo que realmente se hizo'],
      ['Feedback', 'Semanal, 10 minutos, avance contra la meta', 'Seguridad', 'Bloqueos y permisos se registran y cumplen sin excepción'],
      ['Reconocimiento', 'Su criterio define qué variables se registran', 'Accountability', 'El registro de su área es su responsabilidad'],
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
      transition: 'B: "Ahora con su persona. Siete minutos en silencio."',
      extra: 'LIDERA: B.\nNota AMMX: confirmar que "SAP PM" es la denominación interna correcta.',
    },
  });

  K.activity(pres, {
    num: 10, section: 'Matriz de Flexibilidad del Liderazgo', page: pg(),
    title: 'Su persona, en la Matriz',
    steps: ['Individual: llenen la fila de su persona. Al menos tres celdas de la izquierda y todas las de la derecha.', 'Con un par (no el del Acto 7): 2½ minutos cada uno.', 'El par solo hace dos preguntas; no aconseja ni opina sobre la persona.'],
    time: '12', format: '7 min individual · 5 min en par', materials: 'Las dos preguntas del par:\n\n1. ¿Qué de lo que vas a adaptar le cambiaría la experiencia a esa persona desde mañana?\n\n2. ¿Qué de lo que no vas a adaptar ya se lo dijiste de forma explícita?',
    question: 'Una celda vacía en “lo que no adapto” es una alerta.',
    notes: {
      purpose: 'Aplicar la herramienta a una persona real (hilo D-06) y validar concreción y claridad del estándar con un par.',
      time: '2:28–2:39 (7 min individual + 5 min par).',
      script: 'B: "Siete minutos en silencio." A los 4 minutos: "Revisen que la columna de la derecha no esté vacía." Después: "Con un par distinto al del Acto 7. El par solo hace dos preguntas, impresas en su hoja."',
      question: 'Las dos preguntas del par.',
      expected: 'La pregunta 2 del par suele revelar que el estándar nunca se dijo explícitamente: aprendizaje central.',
      transition: 'B: "Última conversación antes de cerrar, y es distinta a las demás."',
      extra: 'LIDERA: B.',
    },
  });

  // ───────────────────────────────────────────── ACTO 11 · INVERTIR EL LENTE
  K.questionList(pres, {
    num: 11, section: 'Invertir el lente', page: pg(),
    title: 'Busquen a alguien que empezó a trabajar en otro contexto',
    questions: ['Algo que los líderes malinterpretan de las personas en mi etapa de carrera es…', 'Algo que las personas en mi etapa podríamos aprender de las de la tuya es…', 'Algo que las personas en tu etapa podrían aprender de la mía es…', 'Algo que probablemente ambos queremos es…'],
    size: 17,
    aside: 'Otra década, otra empresa, otra área u otro país.\n\n3 min cada uno. Quien escucha no interrumpe.\n\nAl final: “Lo que me llevo de lo que dijiste es…”\n\nHablen desde su experiencia, no en nombre de nadie más.',
    asideLabel: 'Cómo',
    notes: {
      purpose: 'Conversación humana, no debate (arco: apropiación). Nadie representa a una generación (D-15).',
      time: '2:39–2:49 (2 min parejas · 3+3 min · 1 min cierre · 1 min plenaria).',
      script: 'B: "Busquen a alguien que haya empezado a trabajar en un contexto distinto al suyo: otra década, otra empresa, otra área, otro país. No tienen que decir su edad. Hablen desde su experiencia, no en nombre de nadie más." Al final, B pide a dos voluntarios compartir solo la respuesta a la frase 4. Handoff a A: "Parece que lo que queremos se parece más de lo que el Muro sugería."',
      question: 'Frase 4: "Algo que probablemente ambos queremos es…"',
      expected: 'Respuestas como "que nos tomen en cuenta", "hacer un buen trabajo", "que el jefe sea claro". Emoción contenida; buen clima.',
      transition: 'A: "Cerremos donde empezamos."',
      extra: 'LIDERA: B → A.\nSALA HOMOGÉNEA: cada persona responde frases 1, 3 y 4 como cree que respondería "su persona"; el par pregunta "¿Qué tan seguro estás de que diría eso? ¿Cuándo se lo preguntaste por última vez?" (Activity Pack §5.5).\nEvitar parejas jefe–colaborador directo. La CXO se empareja como cualquier participante.',
    },
  });

  // ───────────────────────────────────────────── ACTO 12 · COMPROMISO
  K.question(pres, {
    num: 12, section: 'Compromiso', page: pg(),
    q: '¿Responderían hoy lo mismo?',
    sub: 'Abran el sobre con sus respuestas del pre-work. Léanlas en silencio. Miren también su resultado del diagnóstico: ¿qué respuesta necesitan usar más con su persona?',
    subY: 3.4,
    notes: {
      purpose: 'Cerrar el círculo con el diagnóstico y el pre-work: comparar la mirada de entrada con la de salida.',
      time: '2:49–2:51 (2 min).',
      script: 'A: "Abran su sobre. Es lo que ustedes escribieron antes de entrar. No lo compartan. Léanlo y marquen una frase: ¿la escribirían igual hoy? Si sí, ¿por qué? Si no, ¿qué cambió?" Y: "Miren su respuesta por defecto y su rango. Después de los casos, ¿cuál de las cuatro respuestas necesitan usar más con su persona?"',
      question: '¿Responderían hoy lo mismo?',
      expected: 'Sonrisas, algún "yo escribí eso…". Silencio.',
      transition: '"Convirtamos esto en una decisión."',
      extra: 'LIDERA: A.\nEl sobre y su contenido son del participante; no se recogen. Quien no respondió el pre-work tiene en su sobre las frases en blanco.',
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
      purpose: 'Compromiso personal concreto (STOP / START / CONTINUE + una persona, una conversación). Nada de compromisos abstractos.',
      time: '2:51–2:57 (5 min individual + 1 min en voz baja con el vecino).',
      script: 'A: "Cinco minutos en silencio. Empiecen por abajo: una persona, una conversación. Es la misma persona que llevan desde el Acto 7, salvo que haya una buena razón para cambiarla. Iniciales, no nombre. Y un campo que no queremos que se salten: qué no vas a negociar en esa conversación." Después: "Díganle a la persona de al lado, en una frase: en siete días voy a…" Sin comentarios.',
      question: '"¿Cómo vas a saber que fue una conversación distinta?"',
      expected: 'Compromisos concretos; algunos genéricos ("escuchar más"). B recorre y pregunta en privado: "¿Con quién, cuándo y sobre qué?"',
      transition: 'A cede la palabra a la CXO: 1 minuto.',
      extra: 'LIDERA: A.\nCXO (2:57–2:58, D-13): comparte su propio compromiso, idealmente reconociendo una respuesta por defecto suya. No resume el taller ni evalúa a la sala.\nTarjeta: la fotografía solo su autor o se usa el formato autocopiable; la copia queda en poder del participante.',
    },
  });

  const s56 = K.base(pres, {
    num: 12, section: 'Experimento de Liderazgo a 30 días', page: pg(),
    title: 'Una persona que me cuesta leer. Treinta días',
    notes: {
      purpose: 'Entregar el seguimiento: el Experimento a 30 días y la sesión de aprendizaje compartido.',
      time: '2:58 (1 min).',
      script: 'A: "En su sobre está la tarjeta del Experimento. Una persona que les cueste leer. Leer, adaptar, alinear, durante treinta días. Cinco minutos a la semana para anotar qué supusieron, qué preguntaron, qué aprendieron, qué cambiaron y qué pasó. La bitácora es suya; nadie la va a revisar. En la siguiente sesión compartimos aprendizajes, no identidades."',
      question: '—',
      expected: 'Aceptación. Alguien puede preguntar si es obligatorio: "Es una invitación. Los aprendizajes de la sala dependen de quién lo haga."',
      transition: 'A: cierre con la frase ancla.',
      extra: 'LIDERA: A.\nRECORDATORIOS de los facilitadores: días 1, 7, 14, 21 y 30 (texto en el documento del Experimento). Sesión de seguimiento de 60–90 min entre el día 35 y el 45.',
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

  K.question(pres, {
    num: 12, section: 'La otra pregunta', page: pg(),
    q: '¿Qué está ocurriendo en el entorno, qué necesita esta persona y cómo adapto mi liderazgo sin bajar el estándar?',
    size: 30,
    sub: 'La pregunta que proponemos llevar de vuelta a la planta, en lugar de “¿qué les pasa a estas nuevas generaciones?”.',
    subY: 4.6,
    notes: {
      purpose: 'Cerrar el círculo con la pregunta de apertura: reemplazar la frase de pasillo por una pregunta de liderazgo.',
      time: '2:58–2:59 (1 min).',
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
      time: '2:59–3:00 (1 min).',
      script: 'A lee las dos líneas y la frase de seguridad. Silencio breve. "Gracias. Antes de salir, les pedimos dos minutos para la encuesta del código QR de su mesa."',
      question: '—',
      expected: 'Cierre sobrio.',
      transition: 'Fin. B muestra el QR de la encuesta de salida (Nivel 1 del plan de medición).',
      extra: 'LIDERA: A.\nCRITERIO DE ÉXITO: "Entré pensando que tenía un problema con una generación. Salgo entendiendo que tengo que leer mejor a las personas y adaptar mejor mi liderazgo."',
    },
  });

  // ───────────────────────────────────────────── ANEXO
  K.tableSlide(pres, {
    num: null, section: 'Anexo · Fuentes principales', page: pg(),
    title: 'Fuentes de la evidencia presentada',
    rows: [
      ['Fuente', 'Qué aporta', 'Alcance'],
      ['Costanza et al. (2012); Ravid et al. (2025)', 'Diferencias generacionales pequeñas e inconsistentes', 'Meta-análisis · N = 19,961'],
      ['National Academies (2020); Pew Research (2023)', 'Gestionar por generación no está respaldado', 'EE. UU. · revisión de consenso'],
      ['Ng y Feldman (2008, 2010, 2012)', 'Estereotipos sobre trabajadores mayores; edad y seguridad', 'Meta-análisis · 418 estudios'],
      ['Rousseau (1989, 1995); Zhao et al. (2007)', 'Contrato psicológico y lealtad', 'Teoría y meta-análisis'],
      ['BLS (2024); EBRI (2025)', 'Antigüedad por edad, 1983–2024', 'EE. UU. · CPS'],
      ['Gallup SOGW 2026; Deloitte 2025–2026', 'Engagement, gerentes, aspiraciones de liderazgo', 'Global · 44–100+ países'],
      ['OCDE (2023); McKinsey (2021); Kooij et al. (2011)', 'Horas trabajadas; propósito; motivos por edad', 'México / EE. UU. / meta-análisis'],
    ],
    colW: [4.3, 4.8, 3.03], fontSize: 10, rowH: 0.52,
    takeaway: 'Referencias completas, muestras, URL y nivel de confianza: Evidence Pack (entregable 06).',
    notes: {
      purpose: 'Respaldo de fuentes para consulta; no se presenta en sala.',
      time: 'No se proyecta salvo pregunta.',
      script: 'Si un participante pregunta por una fuente: "Está en el Evidence Pack, con la muestra y la URL. Se lo compartimos."',
      question: '—', expected: '—', transition: '—',
      extra: 'Antes de cada edición, abrir las URL primarias y confirmar cifras (Evidence Pack, nota de método).',
    },
  });

  await pres.writeFile({ fileName: OUT });
  console.log('Deck:', OUT, 'láminas:', p);
})();
