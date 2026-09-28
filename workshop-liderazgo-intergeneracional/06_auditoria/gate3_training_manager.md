# GATE 3 — Revisión del Training Manager

**Taller:** *Liderar entre generaciones — De los estereotipos al liderazgo adaptativo* (180 min; versiones de 120 y 90 min)
**Revisor:** Agent 5 — Training Manager (L&D, ArcelorMittal México)
**Fecha:** 28-sep-2026
**Pregunta rectora:** ¿Pueden dos facilitadores internos, que reportan a la CXO, impartir esto en una sala con directores y con su jefa presente?

**Fuentes revisadas:** `00_decisiones/registro_decisiones.md` (D-01 a D-19) · `02_arquitectura/arquitectura_taller.md` · `03_contenido/deck_texto_y_notas.md` (54 láminas y notas) · `04_actividades/actividades_experienciales.md` · `04_actividades/instrumentos_psicologicos.md` · `src/run_of_show.js` · `src/docs/10_Plan_de_Medicion.md`. También revisé `src/docs/02_Workbook_Participante.html` porque es material impreso y afecta dos hallazgos (G3-05 y G3-12).

---

## 1. Resumen

**Veredicto: GATE 3 — CHANGES REQUIRED.**

El diseño se puede impartir. La secuencia es sólida y el hilo "Una persona" es fácil de seguir. Los guiones de las notas del deck son de buena calidad, lo que ayuda mucho a facilitadores internos. Los cambios del Gate 1 (D-13 a D-19) sí entraron al deck. **No llegaron a las piezas operativas:** el Run of Show, el Activity Pack y el Plan de Medición. Los facilitadores trabajan con esas piezas el día de la sesión y la imprenta imprime desde ellas. Hoy el Run of Show dice que se forme una fila por años de experiencia (contradice D-15) y que se tome foto del Muro (contradice D-14). El Activity Pack manda a imprimir las 16 tarjetas antiguas en tercera persona. El Plan de Medición usa el resultado del diagnóstico como métrica (contradice D-16).

Ninguno de estos problemas es de diseño: son de consistencia documental, y todos se corrigen en uno o dos días de trabajo. Sin esas correcciones, el riesgo de que el día de la sesión se haga lo que el Gate 1 prohibió es alto. La causa es simple: la hoja de tiempos que el facilitador tiene en la mano dice lo contrario que el deck.

**Resultados principales**

| Tema | Diagnóstico |
|---|---|
| Consistencia entre piezas | Baja. El deck es la versión más actualizada. Run of Show, Activity Pack y Plan de Medición son anteriores al Gate 1 en varios puntos |
| Duración del deck (54 láminas) | No es un problema de carga cognitiva: 12 son pares de voto y veredicto de ≈40–60 s. Sí se puede depurar a 49 visibles en 180 min y hacen falta mapas de láminas ocultas para 120 y 90 min (sección 3) |
| Tiempos | Holgura cero en 180 min. Las transiciones físicas (Muro, galería, parejas) y la encuesta QR no tienen tiempo asignado. El Acto 12 está sobrecargado. Riesgo realista de exceder de 8 a 15 min |
| Versiones 120 / 90 | No son operables todavía: falta la lámina síntesis de contextos, no hay mapa de láminas ocultas, y en 90 min la "persona" se elige después de la Matriz |
| Logística | Lo más exigente es la pared: el Muro ocupa ≥ 5 m y además se necesitan galería A3 y 2 rotafolios. Faltan plano de sala y lista maestra (sección 4) |
| Facilitadores | Carga alta para A (evidencia frente a directores escépticos) y dinámica de poder con la CXO. Hace falta la guía del facilitador (`05_facilitacion/` está vacío), un ensayo general y la firma de D-13 **antes** de enviar el pre-work |
| Medición | Aprovechable como marco, pero no es operable tal como está: usa el diagnóstico como métrica, el dato del Nivel 2 no se puede capturar, el Experimento no tiene instrumento de día 30 y las fechas no coinciden con el Activity Pack |
| Privacidad (LFPDPPP) | Buena intención (confidencialidad, retención de 30 días, sin edad). Falta el aviso de privacidad en el punto de recolección, una regla de identificación para los pulsos y una limitación explícita a la segmentación "por director" |

**Los 8 cambios que más importan (orden de prioridad)**
1. Quitar del Plan de Medición "uso del rango (más de una respuesta por defecto)" (D-16).
2. Corregir en Run of Show y Activity Pack la fila por años (D-15) y la foto del Muro (D-14).
3. Reemplazar en el Activity Pack las 16 tarjetas del Muro por las de primera persona (D-14) y volver a mapear las bandas de revelación.
4. Quitar del workbook los veredictos preimpresos de Mito vs. Dato.
5. Regenerar el Run of Show con la numeración real del deck (54 láminas) y con holgura explícita. La encuesta QR va antes del cierre de la CXO, dentro del horario.
6. Construir las versiones de 120 y 90 min: mapa de láminas ocultas, lámina síntesis de contextos y reordenar "mi persona" en 90 min.
7. Hacer operable el Plan de Medición: ítem pre/post en la encuesta anónima, pulso del día 30, fechas alineadas y sección de tratamiento de datos (LFPDPPP).
8. Preparar a los facilitadores con la agenda T-21 a T-0: reunión D-13 firmada en T-14, antes del envío del pre-work; ensayo general en T-7.

---

## 2. Tabla de hallazgos

Severidad: **CRITICAL** = bloquea la impartición o viola una decisión de Gate 1 · **MAJOR** = afecta de forma material la experiencia, la operación o la medición · **MINOR** = mejora recomendable.

| ID | Sev. | Ubicación | Problema | Corrección concreta |
|---|---|---|---|---|
| G3-01 | CRITICAL | `10_Plan_de_Medicion.md`, tabla de 4 niveles, Nivel 3, columna "Qué medimos" | Incluye "uso del rango (más de una respuesta por defecto)". Eso es el resultado del Diagnóstico de Reacción del Líder usado como métrica. Viola D-16, instrumentos §4.3 ("Resultados del diagnóstico, en ninguna forma") y la promesa del guion §2.1 ("no se entrega, no se recoge, no se compara") | Eliminar ese texto. Si se quiere un indicador de conducta, agregar al pulso del día 30 este autorreporte sin referencia al diagnóstico: "En estos 30 días, ¿probé con mi persona una forma de liderar distinta a la que uso normalmente? Sí / Parcialmente / No". Agregar en "Tres reglas de interpretación" una regla 4: *El Diagnóstico de Reacción del Líder y el pre-work no son métricas: no se recogen, no se agregan y no se reportan (D-16).* |
| G3-02 | CRITICAL | `run_of_show.js`, fila 2:39–2:41 ("Fila por años de experiencia; plegado"); `actividades_experienciales.md` §5.2 (regla 1), §5.4 (0:00–0:02), §8 (fila "Invertir el lente") y la última nota abierta | Contradice D-15. La fila por años es la dinámica que el Gate 1 eliminó por exponer la edad de forma indirecta. El Run of Show es la hoja que el facilitador B tendrá en la mano | Reemplazar por el texto de D-15 y de la lámina 48: "Busca a alguien que haya empezado a trabajar en un contexto distinto al tuyo (otra década, otra empresa, otra área, otro país)". Columna B: "Lidera; ajusta discretamente parejas jefe–colaborador". Borrar la nota abierta sobre la fila |
| G3-03 | CRITICAL | `run_of_show.js`, fila 0:47–0:50 ("foto del muro", B "Toma foto", materiales "Cámara"); `actividades_experienciales.md` §1.3, fila "Fotografía" | Contradice D-14 ("No se fotografía el Muro armado") e instrumentos §4.3. Además, la foto del Muro sería el único registro que asocia colocaciones con mesas | Borrar la foto en ambas piezas. Materiales: "—". Si se quiere reforzar en el Acto 12, se hace de forma verbal ("¿se acuerdan de dónde pusimos 'Quiero crecer'?") |
| G3-04 | CRITICAL | `actividades_experienciales.md` §1.2 (tabla de 16 tarjetas) y §1.4 (frases de B al mover tarjetas) | El Activity Pack sigue con las 16 tarjetas en tercera persona ("Busca estabilidad", "Se resiste al cambio"…) que D-14 sustituyó por las 16 de primera persona del psicólogo (§5.3). El deck (lámina 12) ya usa las nuevas. Si la imprenta trabaja desde el Activity Pack, se imprime el material equivocado | Sustituir la tabla §1.2 por las 16 frases de instrumentos §5.3 y reasignar a cada una su banda (Necesidades humanas / Etapa / Contexto) con la evidencia del `evidence_pack.md`. Ajustar las "líneas de B" de §1.4 a las frases nuevas. Añadir la revelación en 3 pasos de D-14 (paso 2: "¿Quién en esta sala se reconoce…?") y el póster central **NECESIDADES HUMANAS** con su subtítulo. Congelar el archivo de impresión en T-14 |
| G3-05 | CRITICAL | `src/docs/02_Workbook_Participante.html`, página "Actos 2 a 4 · Lo que creía y lo que dice la evidencia" | El workbook trae impresos los seis veredictos (MITO, DEPENDE, PARCIALMENTE CIERTO…). Los directores hojean el cuaderno en cuanto lo reciben y el voto simultáneo pierde su sentido. Además, el veredicto 3 del workbook ("México trabaja más horas que cualquier país de la OCDE") no coincide con la lámina 19 (tasa de empleo de EE. UU. y compromiso de Gallup) | Dejar en blanco la columna "Lo que dice la evidencia" (el participante la llena). Entregar los veredictos con fuentes en una hoja resumen al final, o en PDF junto con el recordatorio del día 1. Alinear la frase del veredicto 3 con la lámina 19 |
| G3-06 | MAJOR | `actividades_experienciales.md` §2.2 frente a láminas 14–25 | Las afirmaciones 5 y 6 no coinciden. Activity Pack: "Las generaciones mayores son más leales" y "Ya nadie quiere quedarse 20 años". Deck: "Los jóvenes necesitan reconocimiento constante" y "Lo quieren todo ya". Los veredictos del pack siguen como `[VEREDICTO: ver evidence_pack.md]`. Las versiones cortas usan "1, 2, 4 y 6", y la afirmación 6 cambia según el documento | Declarar el deck como fuente. Actualizar §2.2 con las seis afirmaciones y los veredictos del deck. Confirmar que al menos una proviene del video de Sinek (D-18): "Lo quieren todo ya" cumple. Borrar los marcadores de veredicto pendiente |
| G3-07 | MAJOR | `run_of_show.js`, columna "láminas" | La numeración no coincide con el deck de 54 láminas. Llega hasta la 57, cita láminas 55–57 inexistentes (compromiso de la CXO, cierre), Mito vs. Dato aparece como 15–26 (en el deck son 14–25) y el Acto 5 como 29–33 (en el deck son 28–32). Además dice "6 casos (1 por mesa)" con 4 mesas y "80 tarjetas" (con 4 mesas son 64 + repuesto) | Regenerar el Run of Show desde el deck final (numeración real) y agregar las columnas "holgura acumulada" y "recorte si vamos tarde" (ver G3-09). Con 4 mesas: casos A, B, D y E; tarjetas del Muro: 64 + 16 de repuesto |
| G3-08 | MAJOR | Lámina 1 (notas), `run_of_show.js` fila de montaje, Activity Pack §6.3 ("en su mesa… desde el inicio") frente a instrumentos §1.5 ("entregado en mano… al inicio del Acto 12"); lámina 51 ("En su sobre está la tarjeta del Experimento") | Hay dos protocolos contradictorios para el sobre del pre-work. Si está en la mesa desde el inicio, se abre antes de tiempo, se queda olvidado en el receso y tiene el nombre visible durante 3 h. Además, instrumentos §1.5 da a quien no respondió "2 minutos al inicio del Acto 12" para contestar P1, P2 y P4, pero ese tramo dura 2 min en total | Un solo protocolo: B entrega los sobres en mano durante el Acto 11 (las parejas ya están en movimiento), cerrados y con la tarjeta del Experimento dentro. En 120 min se entregan durante la Matriz. Quien no respondió encuentra una hoja con **una sola** frase (P4) para contestar en 1 min. Al terminar, B hace un barrido de sala, y los sobres olvidados se destruyen el mismo día. Actualizar notas de las láminas 1 y 49, Run of Show, Activity Pack §6.3 e instrumentos §1.5 |
| G3-09 | MAJOR | Arquitectura (run of show resumido), `run_of_show.js` | La holgura es cero en 180 min. No hay tiempo para transiciones físicas: 24 directores que se levantan y caminan al Muro, galería A3, formación de parejas. El receso de 10 min con directores y teléfonos suele durar de 13 a 15. La encuesta QR queda **después** de las 3:00, lo que baja la tasa de respuesta. Desviación esperada: de +8 a +15 min | (1) Diseñar el contenido para 170 min y anunciar 3 h. (2) Agregar al Run of Show un "acordeón" de recortes predefinidos (sección 6.2). (3) La encuesta QR se hace a las 2:55, **antes** del compromiso de la CXO y del cierre de A, para que la sesión termine en la frase ancla y no en un formulario. (4) Retomar tras el receso a la hora con quien esté presente; A abre el Acto 5 con una pregunta que no requiere que la sala esté completa |
| G3-10 | MAJOR | Láminas 49–53; Activity Pack §6.4 | El Acto 12 junta 8 momentos en 11 min: diagnóstico, sobre, tarjeta, voz al vecino, CXO, Experimento, "la otra pregunta", frase ancla y QR. Las láminas 51 y 52 caen ambas a las 2:58 | Secuencia propuesta (11 min): 2:49 sobre y diagnóstico (2) → 2:51 compromiso en workbook (4) → 2:55 QR en silencio (2) → 2:57 frase al vecino (1) → 2:58 CXO (1) → 2:59 lámina 52 y lámina 53 (1). La lámina 51 (Experimento) se oculta; A lo menciona en una frase y la tarjeta ya está en el sobre |
| G3-11 | MAJOR | Arquitectura, "Versiones comprimidas"; deck | Las versiones de 120 y 90 min no se pueden impartir con el deck actual: (a) falta la "lámina síntesis de 4 generaciones + contrato" que ambas requieren; (b) no hay un mapa de láminas ocultas; (c) la lámina 9 muestra 4 preguntas y en 90 min se usa una sola; (d) **en 90 min la Matriz (1:07) se aplica "a una persona real" antes del silencio del Acto 7, que la arquitectura mueve al Acto 12 (1:17)**, así que la persona se elige después de usarla | Crear la lámina 32b "Cuatro contextos en una lámina" (solo para versiones cortas) y la variante 9b (pregunta única). Publicar el mapa de ocultas de la sección 3. En 90 min, mover los 2 min de silencio del Espejo (preguntas 2 y 5 y "Mi persona") al **inicio del Acto 10**. Corregir arquitectura e instrumentos §3.3 |
| G3-12 | MAJOR | Plan de Medición, Nivel 2 ("Solo se captura el conteo agregado de esa marca"); workbook p. Acto 12; notas de la lámina 49 ("no se recogen") | La marca "respondería lo mismo / lo matizaría / distinto" se escribe en el workbook o en la tarjeta, que no se recogen. No hay forma de contar el agregado, así que la meta "≥ 70 % identifica al menos una creencia que revisó" no se puede medir | Agregar ese ítem a la encuesta QR anónima: "Al releer mi pre-work: respondería lo mismo / lo matizaría / respondería distinto". Es un autorreporte anónimo y no se vincula con el contenido del sobre. Ajustar el texto del Nivel 2 |
| G3-13 | MAJOR | Plan de Medición (calendario, Nivel 3); instrumentos §1.2 y §1.5; Activity Pack §7.3 y §7.4; lámina 13 | Inconsistencias que impiden operar el plan: cierre del pre-work en T-3 (plan) frente a "48 horas antes" (correo); umbral de temas ≥ 4 personas (instrumentos) frente a grupos ≥ 5 (plan); sesión de seguimiento en T+30 (plan) frente a días 35–45 (pack y workbook); recordatorios en días 7, 14 y 21 (plan) frente a 1, 7, 14, 21 y 30 (pack); meta "≥ 60 % completa el Experimento" sin instrumento, porque la bitácora es privada y no existe pulso del día 30; la lámina 13 y el pack §2.5 piden a B contar votos de Mito vs. Dato "para el plan de medición", pero el plan no los usa | Alinear: cierre del pre-work en T-3 (72 h, para dar margen de impresión) y corregir el correo; un solo umbral de ≥ 5 personas para temas y agregados; recordatorios en días 1, 7, 14, 21 y 30; pulso de 3 preguntas en día 7 **y** día 30 (el del día 30 mide "completé el Experimento" y el ítem de G3-01); sesión de seguimiento entre los días 35 y 45. Eliminar el conteo de votos de Mito vs. Dato: B necesita esos segundos para el ritmo y el dato no alimenta ninguna decisión |
| G3-14 | MAJOR | Instrumentos §1.2 y §1.5; Plan de Medición completo | Faltan medidas prácticas de la LFPDPPP (la ley vigente desde marzo de 2025): (a) el correo y el formulario no incluyen ni enlazan el **aviso de privacidad** en el punto de recolección; (b) el formulario pide el nombre dos veces ("Registrar nombre" + P0); (c) las respuestas abiertas pueden contener datos de terceros (colaboradores) y no se pide usar solo iniciales; (d) no se define si la encuesta de salida y los pulsos son anónimos o nominales, ni cuánto tiempo se conservan; (e) el Nivel 4 propone segmentar la rotación "por director", lo que produce datos individuales sobre participantes, algo que D-13.1 excluye; (f) el pulso ascendente del día 90 es un tratamiento nuevo de datos del equipo de cada director, sin aviso previsto ni regla de quién ve qué; (g) no hay evidencia de borrado | Agregar al Plan una sección "Tratamiento de datos" validada por Privacidad/Jurídico antes de T-10: aviso de privacidad simplificado en el correo y en el encabezado del formulario, con su finalidad única (devolver las respuestas al participante); desactivar "Registrar nombre" y conservar solo P0; instrucción en el formulario: "si mencionas a alguien, usa iniciales". Encuesta de salida y pulsos: **anónimos** (Forms sin registro de nombre; recordatorios a todos por igual), conservación de 12 meses en forma agregada. Nivel 4: solo a nivel de cohorte (≥ 5 directores), nunca por director hacia la CXO. Pulso ascendente: el resultado individual lo ve solo el director (y solo con ≥ 5 respuestas); la CXO recibe el agregado de cohorte. Registro de eliminación firmado por ambos facilitadores en T+30 |
| G3-15 | MAJOR | D-13.4, instrumentos §4.2, lámina 1 (notas) | La regla "la CXO en una mesa sin reportes directos" supone que existe esa mesa. En un taller para directores que ella encargó, es probable que la mayoría le reporte. Los facilitadores también le reportan, así que "declinar citando el acuerdo" no basta como protección | En T-14, revisar el organigrama de los confirmados. Si no hay mesa sin reportes directos, sentarla en la mesa con menos reportes directos, y B vigila las señales de autocensura de §4.2. En las actividades en pares, la CXO forma trío con dos personas que no le reportan. Agregar a D-13 un punto 8: *custodio de datos*: cualquier solicitud de información individual se turna a la jefatura de RH o a Privacidad, no la resuelven los facilitadores. Firmar D-13 en T-14, **antes** del envío del pre-work, porque el correo ya promete confidencialidad frente a la CXO |
| G3-16 | MAJOR | Acto 11 (lámina 48, Activity Pack §5) | En una sala de directores es probable que casi todos tengan más de 20 años de trayectoria, lo que activa la alternativa §5.5. Hoy esa alternativa es un plan B sin lámina ni página de workbook. Además, el Acto 11 es la quinta conversación en pares de la sesión (Actos 1, 7, 10, 11 y 12), lo que genera fatiga de formato | Decidir en T-7, con la lista de confirmados y el criterio de los facilitadores (sin consultar edad), qué variante se usa. Preparar la lámina 48b y el texto en el workbook para §5.5 ("Invertir el lente con mi persona"). En 180 min, si el acordeón se activa, el Acto 11 baja a 8 min (2 frases por persona: la 1 y la 4) |
| G3-17 | MAJOR | `05_facilitacion/` (vacío); D-12 | No existe todavía la Guía del facilitador. Las notas del deck son buenas, pero no bastan para el día: falta un documento de bolsillo con cues, handoffs, preguntas difíciles y la evidencia de respaldo. A lleva cerca del 60 % del tiempo al frente y todo el contenido de evidencia (Mito vs. Dato, contextos, contrato) frente a directores técnicos que van a cuestionar los datos | Producir antes de T-10: (a) la guía del facilitador por acto; (b) una "tarjeta de evidencia" de una página por veredicto (fuente, N, alcance, qué **no** afirma el dato, respuesta a "¿y en México?"); (c) una lista de 12 preguntas hostiles con su respuesta ensayada (sección 5.3) |
| G3-18 | MAJOR | Activity Pack §1.3 y §3.2; Run of Show | Falta el plan de pared: el Muro necesita ≥ 5.2 m (4 pósters de 90 cm + 1.2 m al centro); la galería A3, otros 2 m; el rotafolio "Lo que escuchamos" tiene que verse del Acto 2 al 5. Muchas salas corporativas y de hotel no permiten cinta en muros. No se define si el Muro se desmonta al terminar | Plano de sala obligatorio en T-7. Muro en 2 paneles móviles de 2.4 m (o 5 caballetes, según la alternativa §1.3), que se retiran o voltean en el receso. Galería en otra pared o en los mismos paneles volteados. Confirmar con el recinto el permiso de cinta azul. Ver la sección 4.3 |
| G3-19 | MAJOR | Lámina 8 (notas `[POR CONFIRMAR]`), D-01, D-18, Run of Show (subtítulos) | El fragmento de Sinek no está confirmado. Pedir "subtítulos en español activados" no funciona sin conexión: los subtítulos automáticos de YouTube no se descargan con el video. Descargar desde YouTube puede contravenir sus términos de uso | Congelar el fragmento en T-14 contra la copia de la CXO (propuesta: ≈10:00–14:30). Usar un archivo local con licencia o la copia que dio la CXO, con subtítulos incrustados (archivo .srt revisado). Respaldo: streaming por la red del recinto y, como tercera opción, la transcripción del fragmento en una lámina oculta |
| G3-20 | MINOR | Activity Pack §2 (Acto 2), §5.3, §6.2, §7.1 y §4.6; arquitectura "Materiales por acto" | Hay piezas impresas redundantes: las 4 tarjetas-pregunta por mesa repiten la lámina 9; la tarjeta "Invertir el lente" repite la página del workbook; la tarjeta de compromiso autocopiable repite la página del workbook (y el formato autocopiable exige producción especial); la tarjeta de bolsillo y la del Experimento son dos tarjetas de 10 × 15 que se pueden unir | Eliminar las tarjetas-pregunta (basta 1 tarjeta de mesa con las 4 preguntas), la tarjeta "Invertir el lente" y la tarjeta autocopiable (el compromiso queda en el workbook; quien quiera, lo fotografía). Unir la tarjeta de bolsillo y la del Experimento: frente LEER → ADAPTAR → ALINEAR con los encabezados de la Matriz; reverso, el Experimento. Son 3 piezas menos que producir |
| G3-21 | MINOR | Activity Pack §1.2 ("número de mesa (M1–M5)… para poder leer después qué mesa colocó qué") | Con mesas de 6 personas, y una de ellas la de la CXO, atribuir por mesa es casi atribuir por persona. Contradice el espíritu de D-14 | Sin número de mesa en las tarjetas; los sets se distinguen solo por el sobre de mesa |
| G3-22 | MINOR | Lámina 23 | El veredicto "PARCIALMENTE CIERTO" no es una de las tres opciones de voto (CIERTO / FALSO / DEPENDE) | Usar "DEPENDE" como veredicto, con el subtítulo "Varía la frecuencia; la necesidad es de todos" |
| G3-23 | MINOR | Acto 1: instrumentos §2.7 (pares 4 min + plenaria 5 min) frente al deck y el Run of Show (pares 5 + plenaria 2) | Duraciones distintas entre documentos | Tomar el deck como fuente (5 + 2). Corregir instrumentos §2.7 |
| G3-24 | MINOR | Arquitectura (Acto 8: "6 casos… 5 preguntas"; 120 min: casos A, B, D) frente a Activity Pack (6 preguntas; 4 mesas = A, B, D, E) | Asignación de casos y número de preguntas inconsistentes | 6 preguntas en todos los documentos. 4 mesas: A, B, D, E. 5 mesas: + C. 120 min (3 casos, 2 mesas por caso): A, B, D. 90 min: A y B |
| G3-25 | MINOR | Plan de Medición, Nivel 1 | La tabla habla de "Net Promoter interno", pero la encuesta no lo incluye. La meta "≤ 10 % tono aleccionador" no dice cómo se calcula. La pregunta 4 lista momentos que no existen en 120/90 min | Quitar NPS o agregarlo como ítem 6. Definir la meta como "% con respuesta 1–2 en la pregunta 2". Hacer una variante de la pregunta 4 por versión. La encuesta queda en 9 ítems, unos 3 min |
| G3-26 | MINOR | D-13.1 ("ni quién participó o no") | Choca con la lista de asistencia que C&D necesita para el registro de capacitación (LMS o constancias) | Precisar en D-13: la asistencia se registra solo con fines administrativos de capacitación, no se usa como dato de evaluación y la CXO no la solicita para ese fin |
| G3-27 | MINOR | Run of Show, montaje ("La CXO llega 10 min antes") | 10 min no alcanzan para confirmar su minuto de apertura, el acomodo y la regla de sala | La CXO llega 20 min antes, con 5 min privados con A |

---

## 3. Duración del deck: ¿54 láminas son un problema?

**Diagnóstico.** El brief pedía unas 25–35 láminas. El deck tiene 54, pero la cifra engaña:

| Tipo | Láminas | Tiempo en pantalla |
|---|---|---|
| Voto de Mito vs. Dato (14, 16, 18, 20, 22, 24) | 6 | ≈ 40 s cada una |
| Veredicto de Mito vs. Dato (15, 17, 19, 21, 23, 25) | 6 | ≈ 60 s cada una |
| Portada, receso y anexo (1, 27, 54) | 3 | Fondo o no se proyecta |
| Instrucción o fondo de dinámica (5, 9, 10, 38, 39, 40, 41, 42, 47, 48) | 10 | Se quedan en pantalla durante el trabajo |
| Contenido que se presenta | 29 | 1–3 min cada una |

Las láminas que de verdad se "exponen" son unas 29, dentro del rango del brief. **Los pares de voto y veredicto no se deben fusionar:** separar el voto de la revelación es lo que protege el voto simultáneo, y sin animaciones en pptxgenjs la lámina doble es la forma más limpia. **Claridad antes que recorte.**

**Recomendación concreta para 180 min: 49 láminas visibles.**

| Acción | Láminas | Motivo |
|---|---|---|
| Ocultar (respaldo) | 54 · Anexo de fuentes | Solo se usa si alguien pregunta; A lo tiene en la tarjeta de evidencia |
| Fusionar y ocultar | 28 → 29 | La portadilla "¿A qué mundo entramos?" pasa como pregunta en la parte alta de la 29. La leyenda "Esto describe el entorno, no a las personas" ya está en cada lámina de contexto (D-17) |
| Ocultar como comodín | 18–19 · "La gente ya no quiere trabajar" | Es la afirmación con dato menos mexicano (tasa de empleo de EE. UU.) y la única que no es generacional. Se proyecta solo si a las 0:57 vamos a tiempo. Libera 1 min 40 s de holgura |
| Ocultar | 51 · Experimento a 30 días | La tarjeta está en el sobre y A lo explica en una frase; así se descongestiona el Acto 12 (G3-10) |
| Se mantienen | Todas las demás | 37 (el jefe como palanca) y 46 (ejemplo de Rogelio) son las que dan credibilidad ante directores; no se tocan |

**Mapa para 120 min (≈ 40 visibles):** ocultar además 18–19 y 22–23 (se usan las afirmaciones 1, 2, 4 y 6), 29–32 (se muestra la nueva 32b "Cuatro contextos en una lámina"), 36–37 (en el Acto 6 solo va la 35), 48 (Acto 11 omitido) y la 7 (sin plenaria; A dice la Idea 1 en una frase al cerrar los pares).

**Mapa para 90 min (≈ 34 visibles):** además de lo anterior, ocultar 10–12 (el Muro se elimina y no se menciona, D-14), 34, 38–39 (el silencio del Espejo pasa al inicio del Acto 10, G3-11), 26 (la síntesis edad/época/cohorte la dice A en voz) y cambiar la 9 por la 9b (pregunta única).

Ocultar láminas desde PowerPoint ("Ocultar diapositiva") y guardar tres archivos: `…_180.pptx`, `…_120.pptx` y `…_90.pptx`. **Nunca se salta láminas en vivo frente a directores:** se nota y resta credibilidad.

---

## 4. Lista maestra de materiales

Base: **24 participantes (incluida la CXO) en 4 mesas de 6**. La columna de la derecha cubre **30 participantes en 5 mesas**. Se imprime un 10 % extra en piezas individuales. Las piezas marcadas con ✂ se eliminan si se acepta G3-20.

### 4.1 Impresos por participante

| # | Material | Especificación | 24 / 4 mesas | 30 / 5 mesas |
|---|---|---|---|---|
| 1 | Cuaderno del participante (workbook) | Carta, color, engargolado o grapa; Matriz en horizontal (tabloide si es posible); versión 180/120/90 según corresponda; **sin veredictos preimpresos** (G3-05) | 27 + 2 facilitadores = 29 | 33 + 2 = 35 |
| 2 | Hoja personal del pre-work | 1 hoja Carta por persona (combinación de correspondencia); impresora con retención de trabajo | 24 (+ 3 hojas en blanco) | 30 (+ 3) |
| 3 | Sobre del pre-work | Sobre Carta blanco, opaco, cerrado, con nombre por fuera; contiene la hoja personal y la tarjeta de bolsillo/Experimento | 24 + 3 en blanco | 30 + 3 |
| 4 | Tarjetas de voto CIERTO / FALSO / DEPENDE | Media carta, cartulina ≥ 240 g; navy / blanco con borde / gris | 27 juegos = 81 | 33 juegos = 99 |
| 5 | Tarjeta de bolsillo unificada (modelo + Matriz / Experimento) | 10 × 15 cm, dos caras, cartulina | 27 | 33 |
| 6 | ✂ Tarjeta de compromiso autocopiable | 14 × 21 cm, papel autocopiable | (0) · si se mantiene: 27 | (0) · 33 |
| 7 | ✂ Tarjeta "Invertir el lente" | 10 × 15 cm | (0) · si se mantiene: 27 | (0) · 33 |
| 8 | Tarjeta de caso del Laboratorio | Carta, 1 por persona de la mesa (la lectura es individual) | 4 casos × 7 = 28 (A, B, D, E) | 5 casos × 7 = 35 (+ C) |
| 9 | Hoja resumen de evidencia (se entrega al final o en PDF) | 1 hoja Carta con los 6 veredictos y fuentes | 27 (o PDF) | 33 (o PDF) |
| 10 | Tent card con nombre de pila | Cartulina doblada | 24 + 3 | 30 + 3 |

### 4.2 Impresos y materiales por mesa

| # | Material | 24 / 4 mesas | 30 / 5 mesas |
|---|---|---|---|
| 11 | Tarjetas del Muro (16 frases en primera persona, 10 × 15 cm, cartulina blanca mate, **sin número de mesa**) | 4 sets × 16 = 64 + 1 set de repuesto = **80** | 5 × 16 = 80 + 16 = **96** |
| 12 | Sobre de mesa para el set del Muro | 5 | 6 |
| 13 | Tarjeta de mesa con las 4 preguntas del Acto 2 (sustituye 4 tarjetas-pregunta) | 4 (+1) | 5 (+1) |
| 14 | Tarjeta de mesa con QR de la encuesta de salida | 4 (+1) | 5 (+1) |
| 15 | Hoja de respuesta A3 del Laboratorio | 4 + 4 de repuesto = 8 | 5 + 5 = 10 |
| 16 | Marcadores punta gruesa (negro y azul) | 2 por mesa + 4 = 12 | 14 |
| 17 | Plumas | 30 | 36 |
| 18 | Cinta azul de pintor (precortada en tiras de 4 cm el día previo) | 1 rollo por mesa + 2 = 6 | 7 |
| 19 | Puntos adhesivos color 1 ("la respuesta que yo sí usaría"), 2 por persona | 1 plancha de ≥ 60 | 1 plancha de ≥ 70 |
| 20 | Puntos adhesivos color 2 ("?" · "el supuesto que cuestionaría"), 1 por persona; se marca "?" con plumón | 1 plancha de ≥ 30 | ≥ 36 |

### 4.3 Sala, pared y gran formato

| # | Material | Cantidad (igual para 24 y 30, salvo nota) |
|---|---|---|
| 21 | Pósters de zona del Muro, 90 × 120 cm, mismo gris neutro, con años (D-11) y pie "Rangos convencionales. Varían por país." | 4 |
| 22 | Póster de revelación, 90 × 180 cm: **NECESIDADES HUMANAS** + subtítulo (D-14) + bandas Etapa / Contexto; enrollado con cinta | 1 |
| 23 | Paneles móviles de ≥ 2.4 m de ancho (si no hay pared de ≥ 5.2 m o no se permite cinta) | 2 (o 5 caballetes de póster) |
| 24 | Rotafolio con caballete: "Lo que escuchamos" (Acto 2, visible hasta el Acto 5) + estacionamiento de preguntas | 2 caballetes + 2 blocks |
| 25 | Superficie de galería para A3 (2 m lineales) | Pared libre o los paneles volteados |
| 26 | Mesas redondas o pods de 6 | 4 (+1 auxiliar para materiales) · 5 (+1) |
| 27 | Sala | ≥ 90 m² para 24 · ≥ 110 m² para 30; luz natural deseable; sin columnas entre mesas y pantalla |

### 4.4 Tecnología

| # | Material | Cantidad |
|---|---|---|
| 28 | Laptop principal con deck 180/120/90 (PPTX y PDF) y video local con subtítulos incrustados | 1 |
| 29 | Laptop de respaldo con los mismos archivos + USB con copia | 1 + 1 USB |
| 30 | Proyector o pantalla ≥ 75", HDMI y adaptador USB-C | 1 + adaptadores |
| 31 | Audio de sala probado con el video | 1 |
| 32 | Micrófono inalámbrico de solapa (A y B), obligatorio para 30 personas o salas > 90 m² | 2 |
| 33 | Presentador (clicker) con pilas de repuesto | 1 + 1 |
| 34 | Temporizador visible para la sala (tablet o segunda pantalla) + temporizador de bolsillo para B | 1 + 1 |
| 35 | Encuesta de salida (Forms anónimo) probada con la red del recinto; 10 impresas de respaldo | 1 enlace + 10 hojas |

### 4.5 Kit de facilitación y cierre

| # | Material | Cantidad |
|---|---|---|
| 36 | Guía del facilitador y Run of Show impresos (uno por facilitador, con cues y recortes) | 2 |
| 37 | Tarjetas de evidencia (una por veredicto) + lista de preguntas hostiles | 1 juego para A |
| 38 | Plano de mesas confidencial (CXO sin reportes directos; ningún jefe con su colaborador en la misma mesa) | 2 (solo facilitadores) |
| 39 | Acuerdos D-13 firmados (copia) | 1 |
| 40 | Tijeras, clips, grapadora, notas adhesivas, pañuelos | 1 kit |
| 41 | Sobre de seguridad para destruir material olvidado (sobres, hojas) + acceso a trituradora el mismo día | 1 |
| 42 | Lista de asistencia administrativa (G3-26) | 1 |
| 43 | Café del receso y agua en mesas | 24 + 2 + CXO · 30 + 3 |

**Ajustes para 30 participantes y 5 mesas:** agregar el caso C; subir el Laboratorio de 26 a 28 min (galería +1, plenaria +1, compensando en el Acto 6); en el Muro, cada persona coloca 3 tarjetas (la mesa 5 recibe su propio set de 16); considerar un tercer rotafolio. Con **16 participantes y 3 mesas**, en el Muro cada persona coloca 3 y el sobrante lo coloca B; casos A, B y D.

**Costo y esfuerzo (orden de magnitud).** Lo más caro y lo que más tiempo de producción requiere son los pósters de gran formato (5 piezas) y, si se mantiene, la tarjeta autocopiable. Si se acepta G3-20, se eliminan 3 piezas. Esfuerzo interno estimado por facilitador: preparación y ensayos ≈ 20 h; pre-work, impresión y sobres ≈ 6 h (un solo facilitador); logística y montaje ≈ 6 h; día de la sesión ≈ 5 h; seguimiento (recordatorios, pulsos, sesión de días 35–45 y reporte) ≈ 12 h. Total ≈ 45–50 h por facilitador. Es realista si C&D lo protege en la agenda de ambos durante 3 semanas.

---

## 5. Plan de preparación de facilitadores (T-21 a T-0)

**Principio:** dos facilitadores internos frente a directores y frente a su jefa ganan credibilidad por **dominio** (de los datos, de los tiempos y de las preguntas difíciles), no por carisma. Cada ensayo tiene un producto verificable.

### 5.1 Calendario

| Momento | Actividad | Responsable | Producto / criterio de salida |
|---|---|---|---|
| **T-21** | Arranque: confirmar fecha, sala, lista de invitados y versión (180/120/90). Asignar roles A/B definitivos (D-08). Correcciones G3-01 a G3-08 asignadas | C&D + A + B | Checklist de correcciones con responsable y fecha |
| **T-21** | Reservar sala con pared o paneles y confirmar el permiso de cinta; cotizar impresión | B | Sala confirmada con plano |
| **T-18** | Estudio individual: A domina Mito vs. Dato, contextos y contrato con el `evidence_pack.md`; B domina diagnóstico, Muro, Laboratorio y Matriz | A, B | Cada uno explica su bloque sin láminas en 5 min |
| **T-16** | **Ensayo de mesa 1 (3 h):** lectura del deck completo en voz alta con cronómetro; marcar dónde se exceden los tiempos; practicar los handoffs A↔B (siempre con una pregunta u observación, D-08) | A + B | Tiempos reales por acto registrados; lista de ajustes |
| **T-14** | **Reunión de acuerdos con la CXO (D-13), 45 min, con firma.** Agenda: (1) propósito y arco; (2) los 7 acuerdos + punto 8 (custodio de datos, G3-15); (3) su apertura de 2 min y su cierre de 1 min, ensayados en voz alta ahí mismo; (4) aviso explícito de que el taller cuestionará afirmaciones del video que ella aportó (D-13.6); (5) acomodo en mesa según organigrama; (6) qué hacer si tiene que salir antes (sección 6); (7) no solicitar datos individuales después de la sesión | A (conduce) + B + CXO | Acuerdos firmados; minuto de apertura y cierre validados; compromiso de agenda de 3 h 20 min |
| **T-14** | Congelar: fragmento del video, 16 tarjetas del Muro, 6 afirmaciones y veredictos, workbook. Enviar archivos a imprenta | A + B | Archivos finales versionados |
| **T-12** | Validar con Privacidad/Jurídico el aviso de privacidad del pre-work, la encuesta y los pulsos (G3-14) | B | Visto bueno por escrito |
| **T-10** | Envío del pre-work (formulario probado con 2 colegas) | A | Correo enviado; formulario sin "Registrar nombre" |
| **T-10** | Guía del facilitador, tarjetas de evidencia y lista de preguntas hostiles terminadas (G3-17) | A + B | Documentos en `05_facilitacion/` |
| **T-9** | **Ensayo de mesa 2 (2 h):** los 5 momentos difíciles (sección 5.2), con un colega de C&D que hace de director escéptico | A + B + 1 colega | Cada momento se ejecuta dentro de su tiempo con dos objeciones distintas |
| **T-7** | **Ensayo general (3 h 30 min), en la sala real si es posible.** 6 a 8 colegas de C&D o de RH que **no** sean reportes de los participantes, con materiales impresos de prueba, video, QR y montaje del Muro. Se corre la versión completa con cronómetro y un observador que anota tiempos y huecos | A + B + observador | Duración real ≤ 175 min; lista de ajustes cerrada en 48 h; decisión sobre la variante del Acto 11 (G3-16) y activación del acordeón |
| **T-7** | Plano de sala y de mesas (organigrama, CXO, parejas jefe–colaborador) | B | Plano confidencial final |
| **T-5** | Recordatorio a participantes del pre-work (sin presionar) | A | — |
| **T-3** | Cierre del pre-work (72 h). Lectura del conjunto y extracción de 3 a 5 temas (solo los que aparezcan en ≥ 5 personas, parafraseados) | A | Temas agregados en una lámina oculta para el Acto 12 (opcional) |
| **T-2** | Impresión segura de las hojas del pre-work, armado y cierre de sobres (hoja + tarjeta), revisión cruzada de nombres | A + B juntos | 24 sobres + 3 en blanco, verificados por dos personas |
| **T-2** | Recepción y revisión de impresos contra la lista maestra | B | Lista maestra con cada renglón palomeado |
| **T-1** | **Ensayo técnico en sala (1 h 30 min):** montaje del Muro, prueba de video y audio, QR con la red del recinto, temporizador, clicker; recorrido de los 5 momentos físicos (Muro, galería, parejas) midiendo distancias | A + B | Sala lista; fotos del **montaje vacío** para el plano (sin personas ni tarjetas) |
| **T-1** | Mensaje breve a la CXO: hora de llegada (T-20 min) y recordatorio de sus dos momentos | A | Confirmación |
| **T-0 -60 min** | Montaje final: materiales por mesa, sobres guardados con B (no en las mesas), póster de revelación enrollado, rotafolios, video cargado | A + B | Checklist de montaje completo a T-15 |
| **T-0 -20 min** | Llega la CXO: 5 min privados con A (apertura, regla de sala, cierre) | A + CXO | — |
| **T-0** | Sesión | A + B + CXO | — |
| **T-0 +30 min** | Desmontaje, barrido de sala, destrucción de sobres olvidados y de los de ausentes; *debrief* de facilitadores de 20 min (qué funcionó, qué ajustar, señales de autocensura) | A + B | Notas de *debrief*; registro de destrucción |
| **T+1** | Recordatorio del día 1 del Experimento + PDF de evidencia | A + B | — |

### 5.2 Los 5 momentos difíciles que se ensayan por separado

| Momento | Quién | Riesgo | Qué se practica |
|---|---|---|---|
| Revelación del Muro (Acto 3) | B | Que suene a "los atrapamos" o que un director diga "esto está manipulado" | Pausa de 5 s tras la pregunta; mover tarjetas con una sola línea cada una; respuesta al escéptico ("Exacto. Y aun así, ¿dónde la colocamos?") |
| Mito vs. Dato (Acto 4) | A | Que un director técnico cuestione una fuente y A pierda el ritmo o la credibilidad | Ritmo de 100 s por afirmación con cronómetro; responder "¿y en México?" con la tarjeta de evidencia; admitir los límites del dato sin retroceder |
| Contextos y contrato (Acto 5) | A | Que se vuelva una exposición o una crítica a la empresa | Máximo 2 min por contexto; la pregunta a la sala va antes que el dato; retomar el rotafolio del Acto 2 |
| Plenaria del Laboratorio (Acto 8) | B | Discusión entre directores que escala; un director dominante | Hablar siempre de la pared; resumir dos posiciones y preguntar "¿qué haría falta saber para decidir?" |
| Presencia de la CXO | A y B | Autocensura; la CXO que cierra o evalúa | Señales de §4.2; mover la conversación a pares o a escritura; cómo redirigir a la CXO con respeto si evalúa ("Gracias; ¿qué opinan en la mesa?") |

### 5.3 Preguntas hostiles que se ensayan (mínimo)

1. "¿Esto es otro curso de RH para decirnos que consintamos a los jóvenes?"
2. "Esos datos son de Estados Unidos. ¿Qué tiene que ver con Lázaro Cárdenas o Monterrey?"
3. "Si las generaciones no existen, ¿para qué es el taller?" (no decir "no existen", D-17 y Gate 1 R12)
4. "Yo sí he visto que los jóvenes renuncian más."
5. "¿Quién va a ver mis respuestas del pre-work?"
6. "¿La CXO va a saber lo que dije?"
7. "El diagnóstico dice que soy DIRIGIR. En planta eso me ha salvado vidas."
8. "Sinek tiene razón; ustedes solo lo quieren desacreditar."
9. "¿Esto va a mi evaluación de desempeño?"
10. "¿Por qué no hablamos del problema real, que es el salario?"
11. "Adaptar es bajar la vara."
12. "¿Ustedes (facilitadores) qué experiencia tienen liderando una planta?" (respuesta: "Ninguna comparable a la de ustedes; por eso el taller es de conversación entre ustedes, no de exposición nuestra.")

---

## 6. Plan de contingencias

### 6.1 Riesgos del día

| Riesgo | Señal | Respuesta preparada | Responsable |
|---|---|---|---|
| **Llegadas tarde** (≤ 10 min) | Menos del 80 % de la sala a la hora | Empezar a la hora con la apertura de la CXO (no esperar). A quien llegue durante el Acto 1, B le entrega el workbook y le pide responder solo las situaciones 1–5; en pares va con quien esté solo | B |
| **Inicio retrasado** (> 10 min) | CXO o mayoría ausentes | Activar el acordeón (6.2) desde el inicio, sin anunciarlo | A |
| **La CXO se va antes** | Aviso previo o salida imprevista | Si avisa: su compromiso se mueve a las 2:20 (antes del Acto 9) como "compromiso adelantado", en 1 min. Si sale sin avisar: no se menciona; A dice en el cierre "la CXO compartirá su propio experimento en la sesión de seguimiento". Nunca se lee un mensaje suyo ni se proyecta un video grabado (sería una evaluación en diferido) | A |
| **La CXO evalúa, cierra mesas o habla primero** | Mesas que la miran antes de hablar | B se acerca a la mesa con una pregunta a otra persona; en plenaria, A cede la palabra a otra mesa. En el receso, A le recuerda el acuerdo D-13.3 en privado | A / B |
| **Teléfonos** | Pantallas activas en el Muro o en los silencios | Acuerdo en la apertura: "Teléfonos boca abajo; los veremos en el receso a la 1:10". La CXO lo modela. No se recogen. Si alguien tiene que salir a atender, sale sin comentario | A |
| **Director dominante** | Monopoliza plenarias o la mesa | Invitaciones abiertas a "alguien que no haya hablado"; en la mesa, B asigna el rol de relator a otra persona; si persiste, A conversa con él en el receso ("me ayudas si dejas que otros entren primero") | B → A |
| **Director abiertamente hostil o defensivo** | "Esto es cuento de RH" | Protocolo §4.4: pedir un caso concreto; reconocer la competencia antes de cuestionar la creencia; nunca refutar en plenaria | A |
| **Discusión que escala entre dos directores** | Tono elevado | Resumir ambas posiciones como válidas → "¿qué haría falta saber para decidir?" → siguiente actividad | A |
| **Menos participantes de lo previsto** (12–18) | Confirmados < 20 en T-2 | 3 mesas (casos A, B, D); Muro con 3 sets; se retiran los sets sobrantes. Con < 12: 2 mesas; en el Muro cada persona coloca 4 tarjetas; el Laboratorio con 2 casos; la galería se vuelve una comparación directa entre las dos hojas | B |
| **Más participantes** (hasta 30) | Confirmados > 26 | 5 mesas (ver 4.3); micrófonos de solapa obligatorios; Laboratorio de 28 min | B |
| **No hay pared o no se permite cinta** | Detectado en T-7 o T-1 | Alternativa §1.3: 4 mesas auxiliares con póster en caballete + póster de revelación en caballete central cubierto con tela; galería A3 sobre mesas | B |
| **Falla de video o audio** | El video no reproduce en 30 s | Laptop de respaldo → streaming → A lee en voz alta 4 citas textuales del fragmento (lámina oculta 8b). Máximo 2 min perdidos | B |
| **Falla del proyector** | Sin imagen | Deck impreso en PDF para A y B; el workbook sostiene la mayoría de las dinámicas. Mito vs. Dato: A lee las afirmaciones y los veredictos | A |
| **Falla de la encuesta QR** (sin red) | QR no carga | 10 encuestas impresas; si faltan, enlace por correo el mismo día, con un recordatorio | B |
| **Sobre olvidado, perdido o con el nombre equivocado** | Participante sin sobre | B tiene 3 sobres en blanco; nunca se reimprime en sitio. Los sobres olvidados se destruyen el mismo día | B |
| **Alguien se emociona o comparte algo sensible** | Salud, familia, duelo | Agradecer sin profundizar; recordar la regla "se usa, no se atribuye"; B lo busca en el receso; no se registra | B |
| **Sala homogénea para el Acto 11** | Decisión en T-7 | Variante §5.5 con lámina 48b | B |

### 6.2 Acordeón de recortes si vamos tarde (acumulables, en este orden)

| Retraso acumulado | Recorte | Ahorro |
|---|---|---|
| +2 min a las 0:43 | Plenaria del Acto 1 reducida a una voz | 1 min |
| +3 min a las 0:57 | Mito vs. Dato sin la afirmación 3 (láminas 18–19 ocultas, ya previsto) | 1 min 40 s |
| +5 min al regresar del receso | Contextos del Acto 5 a 90 s cada uno | 2 min |
| +5 min a la 1:40 | Pregunta a mesas del Acto 6 de 4 a 2 min (una sola voz) | 2 min |
| +5 min a la 1:54 | Galería del Laboratorio de 4 a 3 min; plenaria de 5 a 4 | 2 min |
| +5 min a las 2:39 | Acto 11 a 8 min (frases 1 y 4) | 2 min |
| **Nunca se recortan** | El silencio del Acto 7, la columna "no adapto" de la Matriz, el compromiso escrito, el minuto de la CXO, la frase ancla y la seguridad | — |

---

## 7. Operabilidad del Plan de Medición

**Qué funciona.** El principio "contribución, no atribución", la línea base de 6 meses, el ítem 3 del pulso ascendente (control de "adaptar sin bajar estándares") y el tablero de una página son adecuados para una CXO y para una audiencia escéptica.

**Qué hace falta para que sea operable (resumen de G3-01, G3-12, G3-13, G3-14 y G3-25).**

| Nivel | Instrumento operable | Quién | Cuándo | Anonimato |
|---|---|---|---|---|
| 1 | Encuesta QR de 9 ítems (5 actuales + marca pre/post + 3 de comprensión), durante la sesión a las 2:55 | B | T0 | Anónima |
| 2 | Ítem "Al releer mi pre-work: lo mismo / lo matizaría / distinto" dentro de la encuesta de salida | B | T0 | Anónima |
| 3 | Pulso del día 7 (3 preguntas) y pulso del día 30 (completé el Experimento: sí / parcial / no; ¿probé una forma distinta a la habitual?; ¿qué pasó?) | A | T+7 y T+30 | Anónimos; recordatorios iguales para todos |
| 3 | Cosecha de patrones en la sesión de seguimiento (días 35–45) | A + B | T+35–45 | Sin identidades |
| 3 (opcional) | Pulso ascendente de 3 ítems | Analítica de RH | T+90 | ≥ 5 respuestas; el individual lo ve solo el director; la CXO ve el agregado de cohorte |
| 4 | Clima + HRIS a nivel de cohorte frente a línea base y cohortes aún no capacitadas | Analítica de RH | T+6 y T+12 meses | Solo la cohorte (≥ 5 directores); nunca por director |

**Consistencia con los instrumentos del pre-work.** Instrumentos §1.1 define el pre-work como "instrumento de autoconfrontación, no de medición". El plan lo respeta en el texto ("solo se captura el conteo agregado de esa marca, no el contenido"), pero no tiene cómo capturarlo. La corrección de G3-12 (autorreporte anónimo en la encuesta) cumple ambas reglas. El único uso que el plan hace del contenido del pre-work son los "temas agregados" en T-3, y debe llevar el mismo umbral (≥ 5) que los instrumentos. **La infracción real a D-16 es la de G3-01, y tiene que salir del plan antes de enviarlo a la CXO.**

---

## 8. Veredicto

### GATE 3 — CHANGES REQUIRED

**Condiciones para APROBAR** (se verifican en una revisión documental breve, sin volver a auditar todo):

1. G3-01 a G3-05 (CRITICAL) corregidos en Plan de Medición, Run of Show, Activity Pack y workbook.
2. G3-06 a G3-14 (MAJOR de contenido y operación) corregidos, con el deck como fuente única de numeración y contenido.
3. Mapas de láminas ocultas y archivos 180/120/90 generados (sección 3), con la lámina 32b y la 9b creadas.
4. Guía del facilitador en `05_facilitacion/` con tarjetas de evidencia y preguntas hostiles (G3-17).
5. Fechas comprometidas para la reunión D-13 firmada (T-14), el ensayo general (T-7) y la validación de Privacidad/Jurídico (T-12).

G3-15, G3-16, G3-18 y G3-19 se resuelven dentro del plan de preparación (sección 5) y no bloquean la aprobación documental, pero sí deben estar cerrados en T-7. Los MINOR (G3-20 a G3-27) son recomendables. G3-20 en particular reduce el costo y la carga de producción.

**Respuesta a la pregunta rectora:** sí, esto se puede impartir en una sala con directores, y bien. El contenido y la secuencia ya están a la altura. Lo que falta es que las piezas que los facilitadores tienen en la mano digan lo mismo que el deck, y que ambos lleguen ensayados frente a su jefa.
