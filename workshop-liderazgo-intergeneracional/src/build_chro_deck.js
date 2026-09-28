// Presentación ejecutiva para la CHRO (validación del taller) — Estándar AMMX /presentacion.
// Librería oficial: am_brand.js (copia local del skill ammx-presentaciones). Salida: entregables/00_Presentacion_CHRO_Liderar_entre_Generaciones_AMMX.pptx
const path = require('path');
const AM = require('./am_brand.js');
const { C, F, T, deck } = AM;
const GATES = require('./gates_status.json');

const OUT = path.join(__dirname, '..', 'entregables', '00_Presentacion_CHRO_Liderar_entre_Generaciones_AMMX.pptx');
const SRC_EV = 'Fuentes: Paquete de evidencia (entregable 06), corte 28-sep-2026. Datos de EE. UU. donde México no tiene serie comparable.';

// Notas del orador del estándar: CÓMO EXPLICARLA · PUNTOS A CERRAR · [POR CONFIRMAR]
const notes = (s, como, cerrar, por) => s.addNotes(`CÓMO EXPLICARLA\n${como}\n\nPUNTOS A CERRAR\n${cerrar}` + (por ? `\n\n[POR CONFIRMAR]\n${por}` : ''));

(async () => {
  const pres = AM.newPres({ title: 'Liderar entre generaciones — Propuesta para la CHRO' });
  let page = 1;

  // 1 · Portada
  const cover = deck.cover(pres, {
    eyebrow: 'Propuesta para validación · Octubre 2026',
    title: 'Liderar entre generaciones',
    subtitle: 'Taller ejecutivo para directores: de la pregunta generacional a la capacidad de liderar a personas distintas con el mismo estándar',
    kpis: [{ value: '3 h', label: 'taller ejecutivo (versiones de 2 h y 90 min)' }, { value: '12', label: 'momentos de trabajo en sala' }, { value: '30', label: 'días de experimento de liderazgo posterior' }, { value: '4', label: 'niveles de medición' }],
    chain: ['Experiencia', 'Reflexión', 'Evidencia', 'Práctica', 'Compromiso'],
    audience: 'CHRO · Recursos Humanos · ArcelorMittal México',
    source: 'Gerencia de Capacitación y Desarrollo. Documentos de soporte: entregables 01 a 10.',
  });
  notes(cover, 'Objetivo: validar con la CHRO la narrativa, el tono y el contenido del taller antes de producirlo e impartirlo. Principio rector: personas distintas no necesitan estándares distintos; pueden necesitar un liderazgo distinto.',
    'Que la CHRO conozca el porqué, la experiencia, los puntos sensibles y las propuestas que requieren su aprobación.');

  // 2 · Resumen ejecutivo
  const s2 = deck.slide(pres, { num: 1, section: 'Resumen ejecutivo', title: 'Mismo estándar para todos; más rango para liderar', page: ++page, source: SRC_EV });
  [['La pregunta generacional no ayuda a decidir', 'Las diferencias entre generaciones en el trabajo son pequeñas y se explican mejor por edad, etapa de vida y época.'],
    ['El jefe directo es la palanca más grande', 'Casi todo lo que la gente pide —claridad, retroalimentación, desarrollo, trato— son conductas del jefe.'],
    ['Adaptar el cómo, nunca el qué', 'Se ajusta la comunicación, el contexto y el acompañamiento; no se tocan estándares, ética ni seguridad.'],
    ['Termina en una conducta, no en una intención', 'Cada director sale con una persona, una conversación en 7 días y un experimento de 30 días.']].forEach(([t, b], i) => {
    deck.iconRow(s2, 0.6, 1.75 + i * 1.22, 6.3, { color: AM.SEQ_DECK[i * 2], num: i + 1, title: t, body: b });
  });
  const r2 = deck.panel(s2, 7.35, 1.6, 5.4, 5.2, 'Recomendación');
  T(s2, 'Validar el taller de 3 horas como primera cohorte con el equipo directivo, con la CHRO como participante y patrocinadora, y una sesión de seguimiento entre los días 35 y 45.', { x: 7.65, y: r2, w: 4.8, h: 1.9, font: F.deck, fontSize: 13, bold: true, color: C.navy });
  deck.takeaway(s2, 7.65, r2 + 2.1, 4.8, 'Pasa por siete revisiones de calidad antes de llegar a la sala: psicología, diseño instruccional, operación, evidencia, red team, CHRO y facilitadores.', { h: 1.2 });
  notes(s2, 'Cuatro mensajes en orden. La recomendación se presenta como propuesta para aprobación, no como decisión tomada.', 'Confirmar que la tesis (mismo estándar, más rango) es la conversación que la CHRO quiere tener con los directores.');

  // 3 · Necesidad de negocio
  const s3 = deck.slide(pres, { num: 2, section: 'Necesidad de negocio', title: 'El reto no es generacional: es de liderazgo directo', page: ++page, source: 'Necesidades de negocio planteadas para el diseño; sin cifras internas de AMMX en esta versión.' });
  const icons = await Promise.all([AM.icon('fa', 'FaUserClock'), AM.icon('fa', 'FaUserGraduate'), AM.icon('fa', 'FaTabletAlt'), AM.icon('fa', 'FaDoorOpen')]);
  [[C.coral, 'Sucesión en posiciones críticas de turno', 'Talento temprano que pide crecer más rápido de lo que el proceso ofrece, en puestos donde se decide seguridad en tiempo real.'],
    [C.pink, 'Conocimiento crítico que se jubila', 'Expertos con décadas en planta cuyo criterio no está documentado y que necesitan un rol claro en el nuevo modelo.'],
    [C.plum, 'Adopción de herramientas digitales', 'Mantenimiento y calidad adoptan sistemas cuando la herramienta tiene sentido para quien la usa, no por edad.'],
    [C.steel, 'Retención de talento temprano', 'Un mercado con relocalización industrial e informalidad alta ofrece alternativas reales a quien no ve una ruta.']].forEach(([color, t, b], i) => deck.iconRow(s3, 0.6, 1.7 + i * 1.28, 6.3, { color, iconData: icons[i], title: t, body: b }));
  const p3 = deck.panel(s3, 7.35, 1.6, 5.4, 5.2, 'Principio del taller');
  const e3 = deck.chain(s3, 7.7, p3 + 0.05, ['Leer a la persona', 'Adaptar cómo lidero', 'Alinear el estándar', 'Mismo resultado, más compromiso']);
  deck.takeaway(s3, 7.65, e3 + 0.2, 4.8, 'Personas distintas no necesitan estándares distintos. Pueden necesitar un liderazgo distinto.', { h: 0.9 });
  notes(s3, 'Los cuatro retos son de negocio y dependen del liderazgo directo. Así lo debe abrir la CHRO: no es un programa de RH, es una conversación sobre cómo lideramos.', 'Confirmar que estos cuatro retos reflejan la realidad de AMMX y si hay datos internos (rotación temprana, jubilaciones próximas) que convenga incorporar.', 'Datos internos de AMMX por rango de antigüedad para sustituir los ejemplos de EE. UU.');

  // 4 · Evidencia 1: antigüedad (gráfica nativa)
  const s4 = deck.slide(pres, { num: 3, section: 'Evidencia', title: 'Los jóvenes siempre han cambiado más de empleo: es edad', page: ++page, source: 'BLS, Employee Tenure (CPS, enero de 2026); EBRI (2025), Trends in Employee Tenure 1983–2024. EE. UU.' });
  s4.addChart(pres.charts.BAR, [{ name: 'Años', labels: ['25–34 años · 1983', '25–34 años · 2000', '25–34 años · 2026', 'Todos · 2026', '55–64 años · 2026'], values: [3.0, 2.6, 3.0, 4.1, 9.6] }],
    deck.chartOpts({ x: 0.6, y: 1.6, w: 6.8, h: 5.2, barDir: 'col', valAxisMinVal: 0, valAxisMaxVal: 11, dataLabelPosition: 'inEnd', chartColors: [C.coral, C.coral, C.coral, C.slate2, C.plum], varyColors: true, showTitle: true, title: 'Antigüedad mediana con el empleador (años)', titleFontFace: F.deck, titleFontSize: 11, titleColor: C.navy }));
  const l4 = deck.panel(s4, 7.8, 1.6, 4.95, 5.2, 'Lectura');
  deck.bullets(s4, 8.1, l4, 4.4, 3.2, ['Las personas de 25 a 34 años tienen hoy la misma antigüedad mediana que en 1983: rotar más a esa edad no es nuevo.', 'La antigüedad se acumula con la edad y la etapa de vida.', 'La lealtad sigue a la reciprocidad percibida, a cualquier edad (meta-análisis de contrato psicológico).'], { fontSize: 11 });
  AM.porConfirmar(s4, 8.1, 6.05, 4.4, 'Confirmar cifra 2026 en bls.gov y sumar datos de AMMX.', { font: F.deck, h: 0.45, fontSize: 9 });
  notes(s4, 'Una sola idea: el estereotipo de "no tienen lealtad" se explica por edad. Datos de EE. UU. porque México no tiene una serie comparable publicada.', 'La cifra que más convence a los directores será la de AMMX; proponer pedirla a Analítica de RH solo a nivel de cohorte.', 'Cifra BLS de enero de 2026 (confirmar en bls.gov) y serie de antigüedad por rango de edad de AMMX.');

  // 5 · Evidencia 2: gerentes (gráfica nativa)
  const s5 = deck.slide(pres, { num: 3, section: 'Evidencia', title: 'El jefe es la palanca más grande, y está desgastado', page: ++page, source: 'Gallup, State of the Global Workplace 2025 y 2026 (encuesta mundial, 100+ países); Gallup, State of the American Manager (2015).' });
  s5.addChart(pres.charts.LINE, [{ name: 'Gerentes comprometidos (%)', labels: ['2022', '2023', '2024', '2025'], values: [31, 30, 27, 22] }],
    deck.chartOpts({ x: 0.6, y: 1.6, w: 6.8, h: 5.2, valAxisMinVal: 0, valAxisMaxVal: 40, dataLabelPosition: 't', dataLabelColor: C.navy, dataLabelFormatCode: '0', lineSize: 3, lineDataSymbolSize: 9, chartColors: [C.coral], showTitle: true, title: 'Gerentes comprometidos en el mundo (%)', titleFontFace: F.deck, titleFontSize: 11, titleColor: C.navy }));
  const l5 = deck.panel(s5, 7.8, 1.6, 4.95, 5.2, 'Lectura');
  deck.bullets(s5, 8.1, l5, 4.4, 3.4, ['Gallup asocia al gerente con al menos 70 % de la varianza del compromiso entre equipos (base Q12, principalmente EE. UU.): es la variable que más distingue a un equipo de otro, no una causa directa.', 'El compromiso global es de 20 %, en todas las edades.', 'Por eso el taller trabaja con los directores, no sobre "los jóvenes".'], { fontSize: 11 });
  notes(s5, 'Dos datos: el jefe como palanca y el desgaste de los propios jefes. No es un reproche: es parte del problema a resolver.', 'Evitar decir que "el jefe causa el 70 %". Es análisis propietario de Gallup, no revisado por pares.');

  // 6 · Mitos
  const s6 = deck.slide(pres, { num: 3, section: 'Evidencia', title: 'Cinco creencias frecuentes, contrastadas con datos', page: ++page, source: SRC_EV });
  deck.table(s6, 0.6, 1.65, 12.15, [
    ['Afirmación', 'Veredicto', 'Lo que dice la evidencia', 'Fuente'],
    ['“La Generación Z no tiene lealtad”', 'MITO', 'Rotar más a los 25 es de edad; la lealtad sigue a la reciprocidad', 'BLS 2024; Zhao et al. 2007'],
    ['“Los Boomers se resisten a la tecnología”', 'MITO', 'Solo 1 de 6 estereotipos se sostiene: participan menos en capacitación', 'Ng y Feldman 2012'],
    ['“Los jóvenes no quieren ser jefes”', 'DEPENDE', '6 % lo tiene como meta hoy; 76 % de la Generación Z se interesa algún día', 'Deloitte 2025–2026'],
    ['“Necesitan reconocimiento constante”', 'DEPENDE', 'Varía la frecuencia; la mitad de Generación X y Boomers también lo quiere', 'Gallup/Workhuman 2022'],
    ['“Lo quieren todo ya” (del video)', 'DEPENDE', 'Los motivos de crecimiento son más altos en las personas jóvenes (patrón de edad)', 'Kooij et al. 2011'],
  ], { colW: [3.4, 1.4, 4.95, 2.4], fontSize: 10, rowH: 0.62, highlightCol: 2 });
  deck.takeaway(s6, 0.6, 5.65, 12.1, 'La evidencia no le da la razón a nadie en todo: el taller evita sobrecorregir en cualquier dirección.', { h: 0.5 });
  notes(s6, 'Mostrar que el bloque Mito vs. Dato está equilibrado: varios veredictos son "depende". Una afirmación proviene del video de Simon Sinek, que se presenta como opinión.', 'Validar el fragmento del video y su encuadre como opinión, no como evidencia.', 'Fragmento exacto del video proporcionado.');

  // 7 · Modelo
  const s7 = deck.slide(pres, { num: 4, section: 'Modelo', title: 'Leer, adaptar, alinear: tres verbos para recordar', page: ++page, source: 'Modelo del taller (registro de decisiones D-04 y D-05).' });
  deck.chevrons(s7, 0.6, 1.75, 12.15, ['LEER', 'ADAPTAR', 'ALINEAR'], { h: 0.8, descs: ['Entender a la persona y el contexto antes de concluir', 'Ajustar cómo lidero: comunicación, contexto, retroalimentación, reconocimiento, autonomía, desarrollo, frecuencia', 'Sostener y decir en voz alta lo que no cambia: estándares, ética, seguridad, rendición de cuentas, desempeño'] });
  const p7a = deck.panel(s7, 0.6, 3.95, 5.95, 2.75, 'Lo que se adapta · el cómo');
  deck.bullets(s7, 0.9, p7a, 5.4, 2.0, ['Comunicación y contexto (el porqué)', 'Retroalimentación, reconocimiento y autonomía', 'Desarrollo, frecuencia y conversaciones de carrera'], { fontSize: 11.5 });
  const p7b = deck.panel(s7, 6.8, 3.95, 5.95, 2.75, 'Lo que no se adapta · el qué', { fill: C.peach });
  deck.bullets(s7, 7.1, p7b, 5.4, 2.0, ['Estándares de desempeño y calidad', 'Ética y seguridad: innegociables en una siderúrgica', 'Rendición de cuentas por resultados'], { fontSize: 11.5 });
  notes(s7, 'El modelo es la herramienta que los directores se llevan (Matriz de Flexibilidad y tarjeta de bolsillo). La columna "no se adapta" es la que hace aceptable el mensaje para una audiencia operativa.', 'Validar el lenguaje del modelo.', 'Materiales de Speed Absorbent no disponibles al producir esta versión: si se reciben, evaluar su integración sin inventar conceptos.');

  // 8 · Experiencia
  const s8 = deck.slide(pres, { num: 5, section: 'Experiencia', title: 'Primero los directores; al final, una decisión', page: ++page, source: 'Arquitectura del taller y guion minuto a minuto (entregables 03 y 04).' });
  deck.table(s8, 0.6, 1.65, 7.2, [
    ['Sección', 'Actos', 'Qué viven los directores'],
    ['Experiencia', '1', 'Diagnóstico de 10 situaciones de planta: su respuesta por defecto'],
    ['Provocación y evidencia', '2–4', 'Video como opinión, Muro de necesidades, cinco creencias contra datos'],
    ['Contexto', '5–6', 'Cuatro contextos de entrada al trabajo en México; el contrato cambió'],
    ['Práctica', '7–10', 'Espejo del líder, seis casos industriales, modelo y Matriz'],
    ['Compromiso', '11–12', 'Invertir el lente; una persona, una conversación en 7 días'],
  ], { colW: [2.0, 0.8, 4.4], fontSize: 10, rowH: 0.62 });
  const p8 = deck.panel(s8, 8.15, 1.6, 4.6, 5.2, 'Proporción en sala');
  [['≈ 27 %', 'contenido'], ['≈ 21 %', 'reflexión individual'], ['≈ 32 %', 'conversación'], ['≈ 20 %', 'práctica']].forEach(([v, l], i) => {
    T(s8, v, { x: 8.45, y: p8 + i * 0.95, w: 1.7, h: 0.6, font: F.deck, fontSize: 24, bold: true, color: AM.SEQ_DECK[i * 2], valign: 'middle' });
    T(s8, l, { x: 10.2, y: p8 + i * 0.95, w: 2.4, h: 0.6, font: F.deck, fontSize: 12, color: C.navy, valign: 'middle' });
  });
  T(s8, 'Ningún bloque conceptual supera 8 minutos.', { x: 8.45, y: p8 + 3.85, w: 4.1, h: 0.45, font: F.deck, fontSize: 10.5, color: C.slate });
  notes(s8, 'La secuencia es deliberada: no se empieza enseñando generaciones. La proporción fue calculada por la revisión de diseño instruccional sobre el guion minuto a minuto; la reflexión se completa fuera de la sala con el trabajo previo y la bitácora.', 'Arco emocional: curiosidad, incomodidad, reconocimiento, comprensión, práctica, apropiación.');

  // 9 · Casos
  const s9 = deck.slide(pres, { num: 5, section: 'Experiencia', title: 'Seis casos de planta donde ambas partes tienen algo de razón', page: ++page, source: 'Casos ficticios construidos para el taller (paquete de actividades, entregable 05).' });
  [['A', 'Quince meses y ya quiere la jefatura', 'Retención y seguridad en turno'], ['B', 'Una tableta para saber cómo suena un motor', 'Trazabilidad y conocimiento experto'], ['C', 'Siempre se ha hecho así', 'Mejora continua y bloqueo y etiquetado'],
    ['D', 'Después de las siete, no', 'Continuidad en paro de alto horno'], ['E', 'Ya nadie me pregunta nada', 'Conocimiento que se jubila'], ['F', 'Quiero ver más, y pronto', 'Talento de alto potencial']].forEach(([id, t, b], i) => {
    const col = i % 3, row = Math.floor(i / 3);
    deck.card(s9, 0.6 + col * 4.1, 1.65 + row * 2.55, 3.85, 2.35, { tag: `Caso ${id}`, title: `“${t}”`, body: b, color: AM.SEQ_DECK[i] });
  });
  notes(s9, 'Los casos se ambientan en Lázaro Cárdenas, Monterrey y Celaya. Cada uno tiene un giro que da razón parcial a ambos lados; en el caso D, quien pone límites tiene 41 años y lo hace por cuidado familiar.', 'Confirmar denominaciones internas (SAP PM, programa de ingenieros en formación).', 'Denominaciones internas de sistemas y programas.');

  // 10 · Entregables
  const s10 = deck.slide(pres, { num: 6, section: 'Entregables', title: 'Diez piezas con una sola fuente de verdad', page: ++page, source: 'Carpeta entregables/ del proyecto; registro de decisiones D-01 a D-21.' });
  deck.table(s10, 0.6, 1.65, 12.15, [
    ['#', 'Entregable', 'Para quién', 'Formato'],
    ['01', 'Deck del taller (180, 120 y 90 min) con notas del orador', 'Facilitadores', 'PPTX + PDF'],
    ['02 · 03', 'Cuaderno del participante · Guía del facilitador', 'Participantes · Facilitadores', 'PDF'],
    ['04 · 05', 'Guion minuto a minuto · Paquete de actividades', 'Facilitadores · Logística', 'XLSX + PDF · PDF'],
    ['06 · 07', 'Paquete de evidencia · Resumen ejecutivo para la CHRO', 'Facilitadores · CHRO', 'PDF'],
    ['08 · 09', 'Trabajo previo · Experimento de liderazgo a 30 días', 'Participantes', 'PDF + formulario'],
    ['10', 'Plan de medición (4 niveles, tratamiento de datos)', 'CHRO · Analítica de RH', 'PDF'],
  ], { colW: [1.1, 6.0, 2.85, 2.2], fontSize: 10.5, rowH: 0.6 });
  notes(s10, 'Todas las piezas se generan desde las mismas fuentes (decisiones, evidencia, actividades), de modo que no se contradicen.', 'Esta presentación resume; los detalles están en cada entregable.');

  // 11 · Versiones
  const s11 = deck.slide(pres, { num: 6, section: 'Entregables', title: 'Tres versiones; el seguimiento se mantiene en todas', page: ++page, source: 'Arquitectura del taller, versiones comprimidas.' });
  deck.table(s11, 0.6, 1.65, 12.15, [
    ['', '180 minutos', '120 minutos', '90 minutos'],
    ['Láminas visibles', '56', '47', '40'],
    ['Qué se conserva', 'Los 12 momentos', 'Secuencia completa, 3 casos', 'Activación: evidencia, 2 casos, Matriz'],
    ['Qué se pierde', '—', 'Invertir el lente, contextos por separado, receso', 'El Muro, el Espejo formal, Invertir el lente'],
    ['Trabajo previo y experimento', 'Sí', 'Sí', 'Sí (sostienen el cambio de conducta)'],
    ['Recomendación', 'Primera cohorte directiva', 'Cohortes siguientes', 'Solo como activación'],
  ], { colW: [2.6, 3.0, 3.25, 3.3], fontSize: 10.5, rowH: 0.62, highlightCol: 1 });
  notes(s11, 'La versión de 90 minutos cambia conciencia e intención, pero depende casi por completo del trabajo previo y del experimento a 30 días para cambiar conducta.', 'Propuesta: impartir la versión completa en la primera cohorte directiva.');

  // 12 · Puntos sensibles
  const s12 = deck.slide(pres, { num: 7, section: 'Puntos sensibles', title: 'Lo que puede salir mal, y cómo está resuelto', page: ++page, source: 'Revisiones de psicología organizacional, diseño instruccional y operación (Gates 1 a 3).' });
  deck.table(s12, 0.6, 1.65, 12.15, [
    ['Riesgo', 'Cómo lo resuelve el diseño'],
    ['Que se lea como “otro programa de RH”', 'La CHRO abre con el problema de negocio; propuesta de co-apertura con un director de Operaciones'],
    ['Que se sienta como “nos dicen que lideramos mal”', 'Los directores descubren sus propios patrones; la experiencia se reconoce como activo'],
    ['Sesgo contra la experiencia o defensa de la Generación Z', 'Veredictos equilibrados; lenguaje de “respuesta rígida”, nunca “líder rígido”'],
    ['El video de Sinek', 'Fragmento seleccionado y encuadrado como opinión; una idea se contrasta con datos'],
    ['Presencia de la CHRO y confidencialidad', 'Participa como par; acuerdos firmados; datos individuales solo a Privacidad/Jurídico'],
    ['Estandarización insuficiente', 'Tres archivos de deck y acordeón de recortes: nunca se saltan láminas en vivo'],
  ], { colW: [4.4, 7.75], fontSize: 10.5, rowH: 0.6 });
  notes(s12, 'El punto más delicado es que la patrocinadora sea la titular de RH: el diseño lo mitiga con encuadre de negocio y la propuesta de co-apertura.', 'Validar la co-apertura y los acuerdos de confidencialidad.', 'Nombre del director de Operaciones para la co-apertura.');

  // 13 · Medición
  const s13 = deck.slide(pres, { num: 8, section: 'Medición', title: 'Medimos conducta, sin atribuirle al taller lo que no es suyo', page: ++page, source: 'Plan de medición (entregable 10). Resultados solo agregados, cohortes ≥ 5.' });
  [['1 · Experiencia', 'Relevancia, respeto por la experiencia y acción concreta (encuesta anónima en sala)'], ['2 · Aprendizaje', 'Creencias revisadas: pregunta anónima sobre el trabajo previo e ítems de comprensión'],
    ['3 · Conducta', 'Conversación de 7 días, experimento de 30 días, pulso ascendente a 90 días'], ['4 · Organización', 'Compromiso con el jefe, rotación temprana y de expertos, movilidad interna: tendencias de cohorte']].forEach(([t, b], i) => {
    deck.card(s13, 0.6 + i * 3.08, 1.65, 2.9, 3.2, { tag: 'Nivel', title: t, body: b, color: AM.SEQ_DECK[i * 2] });
  });
  const p13 = deck.panel(s13, 0.6, 5.05, 12.15, 1.7, 'Reglas');
  T(s13, 'Contribución, no atribución · Línea base de 6 meses antes de comparar · El diagnóstico y el trabajo previo no son métricas · Datos individuales nunca llegan a la CHRO: solo agregados de cohorte', { x: 0.9, y: p13, w: 11.6, h: 0.8, font: F.deck, fontSize: 12, bold: true, color: C.navy });
  notes(s13, 'La evaluación no se limita a satisfacción. El nivel 4 se reporta como tendencia contextualizada, nunca como retorno atribuido al taller.', 'Confirmar disponibilidad de la encuesta de clima y del HRIS a nivel de cohorte.', 'Periodicidad de la encuesta de clima; segmentación por antigüedad en HRIS.');

  // 14 · Calidad
  const s14 = deck.slide(pres, { num: 9, section: 'Aseguramiento de calidad', title: 'Siete revisiones antes de llegar a la sala', page: ++page, source: 'Reportes de auditoría en la carpeta 06_auditoria del proyecto.' });
  deck.table(s14, 0.6, 1.65, 12.15, [['Revisión', 'Enfoque', 'Resultado', 'Cambios principales'], ...GATES.map((g) => [g.gate, g.focus, g.result, g.changes])], { colW: [2.6, 3.0, 2.3, 4.25], fontSize: 9.5, rowH: 0.56 });
  notes(s14, 'Cada revisión produjo "aprobado" o "cambios requeridos"; los cambios se aplicaron antes de la siguiente. Ningún hallazgo crítico quedó abierto.', 'Los reportes completos están disponibles si la CHRO quiere revisar alguno.');

  // 15 · Cierre
  deck.closing(pres, { num: 10, title: 'Propuestas para su aprobación', page: ++page,
    note: 'Propuestas para aprobación; no implican compromiso presupuestal.',
    items: [
      { title: 'Narrativa, tono y mensajes clave', body: 'Mismo estándar, más rango de liderazgo; la generación como lente, no como diagnóstico.' },
      { title: 'Fragmento del video y su encuadre', body: 'Como opinión de un divulgador, contrastada con datos.' },
      { title: 'Acuerdos de rol y confidencialidad', body: 'Firmados en T–14, antes de enviar el trabajo previo.' },
      { title: 'Apertura de negocio y co-apertura', body: 'Sus 2 minutos, más 1 minuto de un director de Operaciones. [POR CONFIRMAR]' },
      { title: 'Primera cohorte de 3 horas', body: 'Con el equipo directivo; fecha, sala y lista de participantes.' },
      { title: 'Sesión de seguimiento', body: 'Entre los días 35 y 45, para compartir aprendizajes del experimento.' },
    ] });

  // 16 · Anexo
  const s16 = deck.slide(pres, { num: null, section: 'Anexo · Fuentes', title: 'Fuentes principales de la evidencia', page: ++page, source: 'Referencias completas, muestras, geografía, URL y nivel de confianza: Paquete de evidencia (entregable 06).' });
  deck.table(s16, 0.6, 1.65, 12.15, [
    ['Fuente', 'Qué aporta', 'Alcance'],
    ['Costanza et al. (2012); National Academies (2020)', 'Diferencias generacionales pequeñas; no gestionar por generación', 'Meta-análisis · consenso'],
    ['Ng y Feldman (2008, 2012)', 'Estereotipos sobre trabajadores mayores; edad y seguridad', 'Meta-análisis · 418 estudios'],
    ['Rousseau (1995); Zhao et al. (2007)', 'Contrato psicológico y lealtad', 'Teoría · meta-análisis'],
    ['BLS (2026); EBRI (2025)', 'Antigüedad por edad, 1983–2026', 'EE. UU.'],
    ['Gallup (2015, 2025, 2026); Deloitte (2025, 2026)', 'Compromiso, gerentes, aspiraciones de liderazgo', 'Global · 44–100+ países'],
    ['Kooij et al. (2011); OCDE (2023); McKinsey (2021)', 'Motivos por edad; horas trabajadas; propósito', 'Meta-análisis · México · EE. UU.'],
  ], { colW: [4.4, 4.95, 2.8], fontSize: 10, rowH: 0.56 });
  notes(s16, 'Respaldo; no se presenta salvo pregunta.', 'Antes de cada edición, confirmar cifras en las URL primarias.');

  await pres.writeFile({ fileName: OUT });
  console.log('Presentación CHRO:', path.basename(OUT), '· láminas:', page);
})();
