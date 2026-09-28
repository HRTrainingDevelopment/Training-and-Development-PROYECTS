# QUALITY GATE 4 — Auditoría de evidencia

**Taller:** *Liderar entre generaciones — de los estereotipos al liderazgo adaptativo* (ArcelorMittal México)
**Auditor:** Evidence Auditor (Gate 4)
**Fecha:** 28-sep-2026
**Materiales auditados:**
- Deck `entregables/01_Deck_Liderar_entre_Generaciones_AMMX.pptx`: 56 láminas, incluidas las ocultas 18, 19, 49, 53 y 56, con sus notas y tablas. Para revisarlo se extrajo el texto a `/tmp/claude-0/deck_dump_g4.txt`.
- Workbook `src/build_workbook.js` (texto del HTML 02).
- Activity Pack `src/build_activity_pack.js`, en particular la "Hoja resumen: Mito vs. Dato".
- Líneas de revelación del Muro en `04_actividades/actividades_experienciales.md` §1.2.
- CXO Brief `src/docs/07_CXO_Executive_Brief.html`.
- Referencia: `01_evidence/evidence_pack.md`.

**Método de re-verificación:** se buscaron las cifras en la web el 28-sep-2026. Desde el entorno de trabajo no se pudieron abrir bls.gov, deloitte.com, news.microsoft.com, news.gallup.com, cnbc.com ni happily.ai (bloqueo de salida del proxy). En esos casos el dato se confirmó con el resumen que da el propio sitio primario en el buscador o con coberturas secundarias reputadas. Cada fila lo indica.

---

## 1. Resumen

- **Trazabilidad general: buena.** Casi todas las cifras visibles están en el Evidence Pack con fuente y año. El deck aplica bien varias salvaguardas: aclara que el 70 % de Gallup "no causa", cita la geografía de EE. UU. en la antigüedad laboral, presenta a Sinek como "una opinión, no evidencia" y advierte "No decir 'las generaciones no existen'".
- **Cifras de alto riesgo confirmadas:** Gallup SOGW 2026 (20 %; gerentes 27 %→22 %, 31 % en 2022); Deloitte 2026 (6 % / 76 % / 67 %; ≈22,500; 44 países); Deloitte 2025 (48 % / 46 %; 23,482; 44 países); OCDE (México 2,207 h frente a un promedio de 1,683, 2023); Microsoft WTI 2024 (73 % Boomers+ = 58+); Ng y Feldman 2012 (418 estudios; N = 208,204; 1 de 6); Costanza 2012 (20 estudios; N = 19,961); McKinsey (85 %/15 %; 70 %); Randstad 2025 (el equilibrio supera al salario por primera vez en 22 años); PIB 2020 (−8.5 %, la mayor caída desde 1932); privatización de SICARTSA en 1991; cierre de Fundidora en mayo de 1986; desarrollo estabilizador (6.8 % en 1958–70; $12.50).
- **Hallazgos nuevos relevantes:**
  1. **El BLS publicó el 24-sep-2026 "Employee Tenure" con datos de enero de 2026:** mediana general de 4.1 años; 25–34 años: **3.0**; 55–64 años: 9.6. El deck, el workbook y la hoja resumen usan 2024. Las cifras de 2024 siguen siendo correctas para ese año, pero ya no son las más recientes. El dato nuevo refuerza el argumento: los jóvenes de hoy tienen más antigüedad que los de 2000.
  2. **Error en el Evidence Pack:** EBRI reporta **3.0 años en 1983** para 25–34, no "~2.5" (E-A7 y M1). No aparece en el material de participantes, pero debe corregirse en el pack.
  3. **La afirmación de que quiet quitting es "no de edad" contradice a Gallup**, que ubicó la caída de 2022 en los menores de 35.
  4. **La cronología de SICARTSA y ArcelorMittal está incompleta** para una audiencia de Lázaro Cárdenas. El grupo Mittal (Ispat Mexicana, SICARTSA II) opera allí desde 1992. ArcelorMittal se formó en 2006 y compró SICARTSA I a Villacero en 2006–07.
  5. **La base muestral del 70 % de Gallup no está confirmada.** El deck dice "2.7 millones de empleados, ≈100,000 equipos". Gallup describe su base como "27 millones de empleados y 2.5 millones de unidades de trabajo". Las fuentes secundarias no coinciden.
- **Datos NO VERIFICADOS presentados como hecho:** el desglose de Randstad por generación ("en todas las edades") aparece en la tarjeta 6 del Muro y en las notas de la lámina 35. La línea de la tarjeta 5 del Muro no tiene fuente.
- **Veredictos MITO / DEPENDE:** en general son defendibles y no hay sobrecorrección del tipo "las generaciones no existen". Dos matices: (a) "Boomers y tecnología = MITO" es defendible solo si se aclara que el único estereotipo que se sostiene es *menor disposición a capacitarse*, y la lámina 17 presenta la explicación de "oportunidad" como hecho; (b) "Cohorte: la más pequeña" (lámina 26 y workbook) afirma un orden de magnitud que la evidencia no establece.

**Conteo de hallazgos:** CRITICAL 0 · MAJOR 7 · MINOR 18.

---

## 2. Registro de afirmaciones

Estatus posibles: **OK** · **IMPRECISO** · **NO RASTREABLE** · **INCORRECTO** · **CAUSALIDAD INDEBIDA** · **GEOGRAFÍA OMITIDA** · **DESACTUALIZADO**. Las abreviaturas son: L = lámina del deck (N = notas), WB = workbook, HR = hoja resumen del Activity Pack, M# = tarjeta del Muro (§1.2), CXO = Executive Brief.

| ID | Afirmación | Dónde aparece | Fuente citada | Ítem del pack | Estatus | Corrección / hallazgo |
|---|---|---|---|---|---|---|
| R-01 | Antigüedad mediana de 25–34 años: 2.7 años (EE. UU., 2024) | L15, L15N, HR | BLS 2024; EBRI 2025 | E-A7, §6 #3 | OK / DESACTUALIZADO | G4-01 |
| R-02 | "En 2000 era 2.6" | L15, HR | EBRI 2025 | E-A7, §6 #4 | OK (EBRI, vía resumen de búsqueda) | — |
| R-03 | 55–64 años: 9.6 años | L15, L15N | BLS 2024 | E-A7 | OK (sin cambio en 2026) | — |
| R-04 | "llevan **en promedio** menos de tres años" | L15N | — | E-A7 (mediana) | IMPRECISO | G4-16 |
| R-05 | La lealtad sigue a la reciprocidad; si hay incumplimiento baja la confianza y el compromiso "a cualquier edad" | L15, L34, M11, HR | Zhao 2007 | E-A8 | OK (lenguaje asociativo; "a cualquier edad" es una inferencia razonable) | Nota menor en G4-22 |
| R-06 | "No tenemos el dato mexicano comparable" | L15 | — | §10 | OK (respeta NO VERIFICADO) | — |
| R-07 | 1 de 6 estereotipos; 418 estudios; 208,204 personas | L17, L17N, HR | Ng y Feldman 2012 | E-A5, §6 #2 | OK (verificado) | — |
| R-08 | "El único que sí: participan menos en capacitación" / "suele reflejar que se les ofrece menos" | L17, L17N, HR | Ng y Feldman 2012 | E-A5 ("puede reflejar") | IMPRECISO (interpretación inflada) | G4-05 |
| R-09 | 73 % de 58+ usuarios de IA la llevan al trabajo (Gen Z 85 %) | L17, HR | Microsoft/LinkedIn WTI 2024 | E-A15, §6 #10 | OK / GEOGRAFÍA-POBLACIÓN OMITIDA en HR | G4-19 |
| R-10 | La edad se asocia con mejor desempeño en seguridad | L17, L17N | Ng y Feldman 2008 | E-A6 | OK | — |
| R-11 | Titular "La brecha es de oportunidad y de sentido, no de capacidad" | L17 | — | E-A5, E-A15 | IMPRECISO (la parte de "sentido" no tiene fuente en el pack) | G4-05 |
| R-12 | 2,207 h/año México, máximo OCDE (promedio 1,683), 2023 | L19, L19N, HR | OCDE | E-A14, §6 #9 | OK (verificado) | — |
| R-13 | "Tasa de empleo de 25–54 en su nivel más alto desde 2001" / "máximos de 25 años" | L19, L19N | S&P Global 2026 | E-A14 | IMPRECISO (S&P reporta la **participación**, 84.1 % en ene-2026; el EPOP 80.9 % es un dato de 2024) | G4-12 |
| R-14 | 20 % de empleados comprometidos en el mundo "(Gallup, 2025), en todas las edades" | L19, L19N, HR | Gallup SOGW 2026 | E-A12, §6 #6 | IMPRECISO ("en todas las edades" no está en la fuente) | G4-13 |
| R-15 | "Quiet quitting describe al grupo no comprometido: un fenómeno de gestión, **no de edad**" | L19 | Gallup 2022 (implícito) | M5, E-A13 | INCORRECTO respecto de la fuente (la caída se concentró en menores de 35) | G4-02 |
| R-16 | 6 % Gen Z con el liderazgo como meta principal; 76 % Gen Z y 67 % millennials interesados en liderazgo senior | L21, L21N, HR | Deloitte 2026 | E-B4, §6 #8 | OK con matiz de atribución | G4-14 |
| R-17 | Barreras: estrés/burnout, exceso de responsabilidad, equilibrio | L21 | Deloitte | E-B4 | OK | — |
| R-18 | "Los gerentes actuales son **el grupo más desgastado**: compromiso 27 %→22 % en un año" | L21, L21N, L36N, L37N, HR | Gallup SOGW 2026 | E-A12 | Cifra OK (verificada); "más desgastado/estresado" es IMPRECISO (Gallup mide engagement) | G4-11 |
| R-19 | Encuestas de "conscious unbossing" con metodología débil | L21 | Robert Walters | E-B4 (BAJA) | OK | — |
| R-20 | ≈50 % de Gen X y Boomers quieren reconocimiento al menos algunas veces al mes; en los más jóvenes, ~8 de cada 10 | L23, L23N, HR | Gallup/Workhuman 2022 | E-B3 | OK ("about half" verificado; "~8 de 10" apoyado en el 78 % del pack) | — |
| R-21 | 72 % de menores de 30 quiere feedback diario o semanal; total 60 % | L23, M8 | Gallup | E-B3 | OK (verificado, secundario) | — |
| R-22 | "Es probable efecto de etapa" | L23 | — | M3 | OK (lenguaje prudente) | — |
| R-23 | 48 % de Gen Z no se siente financieramente segura (Deloitte 2025, 23,482, 44 países, incl. México) | L25, L25N, HR | Deloitte 2025 | E-B8 | OK (verificado) | — |
| R-24 | "Motivos de crecimiento más altos al inicio y bajan con la edad. **También fue así para quienes hoy dirigimos**" / "en cualquier época" | L25, M4, HR | Kooij 2011 | E-B2 | IMPRECISO / sobreinterpretación (un meta-análisis transversal no prueba "en cualquier época") | G4-15 |
| R-25 | "La urgencia coincide con inseguridad financiera: vivienda, inflación, informalidad" | L25 | Deloitte 2025 | E-B8 | OK ("coincide"); la informalidad es contexto mexicano y el 48 % es global | Nota en G4-15 |
| R-26 | "Cohorte: existe, pero es **la más pequeña** y la más difícil de probar" | L26, WB | NASEM; Costanza | E-A1–A3 | IMPRECISO (orden de magnitud no establecido) | G4-06 |
| R-27 | "Hay más diferencia dentro de cada generación que entre ellas" | L26 | NASEM; Costanza | §1 punto 1 | OK | — |
| R-28 | NASEM 2020: gestionar por generación no está respaldado | L26N, HR | NASEM | E-A2 | OK | — |
| R-29 | "No es que las generaciones no existan" | L26N | — | Gate 1 R12 | OK (evita la sobrecorrección) | — |
| R-30 | Desarrollo estabilizador: "crecimiento cercano a 7 % anual" y tipo de cambio fijo | L29, WB | Evidence Pack §8 | B65, B66 | OK (6.8 % en 1958–70 verificado) | — |
| R-31 | SICARTSA inicia operación en 1976 | L29 | §8 | B55 | OK (primera etapa, 1976) | — |
| R-32 | Devaluación de 1976 y crisis de 1982 | L29, WB | §8 | B66 | OK | — |
| R-33 | Cierre de Fundidora Monterrey en 1986 | L29, L33, WB | §8 | B56 | OK (quiebra 9–10 de mayo de 1986, verificado) | — |
| R-34 | GATT 1986; SICARTSA se privatiza en 1991 | L30, WB | §8 | B57 | OK (Villacero, 1991) con matiz | G4-04 |
| R-35 | "PIB cayó 6.2 % en 1995" | L30 | §8 | B67 | OK, depende de la serie (la preliminar de SHCP fue −6.9 %; INEGI base 1993: −6.2 %) | G4-17 |
| R-36 | "En 2006 llega ArcelorMittal" / "ArcelorMittal 2006" | L30, L33 | §8 | B57 | IMPRECISO (el grupo Mittal está desde 1992 vía Ispat/SICARTSA II) | G4-04 |
| R-37 | "La economía mexicana cayó más de 5 % en 2009" | L31 | §8 | B67 (6.5 %, cifra de 2010) | OK con cautela (serie vigente ≈ −5.3 %; algunas series internacionales dan menos) | G4-17 |
| R-38 | Reforma laboral de 2012 y subcontratación | L31, WB | §8 | B68 | OK (general) | — |
| R-39 | Pandemia 2020: la mayor caída del PIB desde 1932 | L32, WB | §8 | B69 | OK (−8.5 %, verificado) | — |
| R-40 | Reforma de subcontratación de 2021 | L32, WB | §8 | B70 | OK | — |
| R-41 | IED récord en 2023 | L32 | §8 | B71 | OK con cautela (récord anunciado con cifras preliminares) | Nota en G4-17 |
| R-42 | Informalidad cercana a 55 % | L32, WB | §8 | B35 (55.1 %, 2T-2026) | OK (no re-verificado; INEGI bloqueado) | — |
| R-43 | "Que no aguantan el trabajo de planta: no hay evidencia comparativa que lo sostenga" | L32, WB | — | M10 | OK (describe bien la ausencia de evidencia) | — |
| R-44 | El contrato psicológico cambió "empezando por las empresas"; "desde los ochenta, las empresas **en todo el mundo**…" | L33, L33N | Rousseau; Cappelli | E-A9 | GEOGRAFÍA (Cappelli estudia EE. UU.) | G4-20 |
| R-45 | Justicia en reestructuras (37 muestras, N = 11,256); a quienes se quedan les importa más el proceso | L34, L34N | van Dierendonck y Jacobs 2012 | E-A10 | OK | — |
| R-46 | Necesidades comunes "aparecen entre las prioridades de todas las edades" (7 necesidades) | L35 | Gallup 2022; Randstad; McKinsey | E-A16, §7 | IMPRECISO (Gallup comparte solo el top 4 entre generaciones) | G4-21 |
| R-47 | Equilibrio por encima del salario "por primera vez en 22 años… **en todas las edades, no en una**" | L35N, M6 | Randstad 2025 | E-B5 (por generación: BAJA / verificar) | NO VERIFICADO mostrado como hecho | G4-03 |
| R-48 | 85 % frente a 15 % de propósito (ejecutivos vs. primera línea) | L35, L35N | McKinsey 2021 | E-B7, §6 #12 | OK (verificado) | — |
| R-49 | 70 % de empleados: su propósito se define por su trabajo | M12 | McKinsey 2021 | E-B7 | OK (verificado) | — |
| R-50 | Tabla L36: "Los jóvenes piden **más** mentoría; a los mayores se les ofrece menos" | L36, WB | Deloitte 2025; Ng y Feldman | §7 | IMPRECISO (Deloitte no encuesta a mayores y no permite decir "más"; "se les ofrece menos" es hipótesis) | G4-05 / G4-18 |
| R-51 | Autonomía: "Rol y personalidad" / "pesa más el rol" | L36, WB | — | §7 (DD, diferencia pequeña) | NO RASTREABLE | G4-18 |
| R-52 | "Más estrés reportado en menores de 35 y en gerentes" | L36, WB | Gallup | §7 Bienestar | OK | — |
| R-53 | 70 % de la varianza del engagement entre equipos "se asocia con el gerente" | L37, L36N | Gallup 2015 | E-A11, §6 #5 | OK en redacción (Gallup: "at least 70%") | — |
| R-54 | Base: "2.7 millones de empleados, ≈100,000 equipos (2015)" | L37, L36N | Gallup 2015 | E-A11 | NO CONFIRMADO (Gallup describe 27 M empleados y 2.5 M unidades de trabajo) | G4-07 |
| R-55 | 22 % de gerentes en el mundo comprometidos (27 % un año antes), datos 2025 | L37 | Gallup SOGW 2026 | E-A12 | OK (verificado) | — |
| R-56 | "Los jefes, en todo el mundo, estamos más desgastados que hace un año" | L37N | Gallup | E-A12 | IMPRECISO (el dato mide engagement, no desgaste) | G4-11 |
| R-57 | "Casi todo lo que la gente pide son conductas del jefe" | L37, WB | Gallup | E-A13, §7 | OK (inferencia prudente de los ítems Q12) | — |
| R-58 | Hersey y Blanchard (1969); validación limitada (Thompson y Vecchio, 2009) | L5N, WB | — | No está en el pack | NO RASTREABLE (fuente real, falta en la bibliografía) | G4-23 |
| R-59 | Sinek: fragmento "≈10:00–14:30" | L8 (visible) | Inside Quest 2016 | §9.1 (tiempos aproximados / NO VERIFICADOS) | OK con cautela (dice "confirmar"), pero visible para participantes | G4-24 |
| R-60 | Sinek presentado como "Una opinión, no evidencia" | L8, CXO | — | §9 | OK | — |
| R-61 | "We gave them no loyalty…" (NBF 2025) como alternativa | L8N | NBF 2025 | §9.3 (timestamp NO VERIFICADO) | OK (solo en notas, marcado por confirmar) | — |
| R-62 | Tarjeta 1: la estabilidad está entre las prioridades de todas las edades | M1 | Gallup 2022 | E-A16 | OK | — |
| R-63 | Tarjeta 2: "Pedir contexto es típico de quien empieza, a cualquier edad…" | M2 | — | — | NO RASTREABLE | G4-10 |
| R-64 | Tarjeta 5: "la conversación en persona se prefiere en todas las edades" | M5 | — | — | NO RASTREABLE | G4-10 |
| R-65 | Tarjeta 7: "en expertos senior se vuelve crítica cuando la tecnología cambia su rol" | M7 | — | — | NO RASTREABLE (opinión plausible) | G4-10 |
| R-66 | Tarjeta 9: "Resistencia al cambio" no se sostiene; "pesa la utilidad percibida" | M9 | Ng y Feldman 2012 | E-A5 | OK / la segunda mitad no tiene fuente | G4-10 |
| R-67 | Tarjeta 10: la autonomía es valorada en todas las edades; diferencias de pocos puntos | M10 | (Randstad 2025) | §7 | OK (falta la fuente en la tarjeta) | G4-10 |
| R-68 | Tarjeta 14: "La edad no predice el desempeño en capacitación" como revelación de "Me motiva aprender algo nuevo" | M14 | Ng y Feldman 2008 | E-A6, E-A5 | IMPRECISO (responde a desempeño, no a motivación; el único estereotipo que se sostiene es la *menor disposición* a capacitarse) | G4-05 |
| R-69 | Tarjeta 15: el salario es la prioridad número uno para casi todos | M15, WB, L36 | Gallup 2022 (64 %) | E-A16 | OK | — |
| R-70 | CXO: "el jefe directo es la palanca de compromiso más grande **que se conoce**" | CXO §01 | — | E-A11 ("en datos de Gallup", MEDIA) | IMPRECISO / inflado | G4-08 |
| R-71 | CXO: las diferencias entre generaciones son pequeñas y se explican mejor por edad, etapa y época | CXO §01 | — | E-A1, E-A2 | OK | — |
| R-72 | CXO: expertos que se jubilan en los próximos años, nearshoring | CXO §01 | — (dato interno AMMX) | — | Fuera del pack; es una afirmación de negocio | Confirmar con datos internos (nota en G4-08) |
| R-73 | Numeración de afirmaciones: "Cinco" (L13) vs. "Seis afirmaciones" (L12N); notas "afirmación 3/4/5/6"; Activity Pack "1 DE 6" | L12N–L24N, AP §2.3 | — | — | Inconsistencia para facilitadores | G4-25 |
| R-74 | Evidence Pack: 25–34 ≈2.5 años en 1983 | Pack E-A7, M1 | EBRI | — | INCORRECTO (EBRI: 3.0 en 1983) | G4-09 |

---

## 3. Re-verificaciones en la web

| Cifra | Resultado | Cómo se verificó / URL |
|---|---|---|
| BLS ene-2024: general 3.9; 25–34 = 2.7; 55–64 = 9.6 | **Confirmado.** **Pero hay publicación nueva: BLS 24-sep-2026 (datos de ene-2026): general 4.1; 25–34 = 3.0; 55–64 = 9.6** | bls.gov bloqueado. Resumen EBRI: https://www.ebri.org/content/trends-in-employee-tenure--1983-2024 · Página BLS (título de búsqueda): https://www.bls.gov/news.release/tenure.nr0.htm · Cobertura secundaria de la versión 2026: https://finchannel.com/u-s-employee-tenure-rises-to-4-1-years-in-2026-as-fewer-workers-have-short-term-jobs/136273/america/2026/09/ (**confianza MEDIA; confirmar en la URL primaria**) |
| EBRI 25–34 en 2000 ≈ 2.6 | **Confirmado** (secundario: "2.7 en 2024, más que en 2000 (2.6)"). **1983 = 3.0**, no ~2.5 como dice el pack | https://www.ebri.org/content/trends-in-employee-tenure--1983-2024 · https://www.ebri.org/content/trends-in-employee-tenure-1983-2022 · Pew 2022: https://www.pewresearch.org/short-reads/2022/12/02/for-todays-young-workers-in-the-u-s-job-tenure-is-similar-to-that-of-young-workers-in-the-past/ |
| Gallup SOGW 2026: 20 % global; gerentes 27 %→22 %; 31 % en 2022 | **Confirmado** (secundario y resumen del sitio) | https://www.gallup.com/workplace/349484/state-of-the-global-workplace.aspx · https://www.unleash.ai/strategy-and-leadership/analysis/gallups-state-of-the-global-workplace-2026-report-three-key-decisions-for-hr-leaders · https://instituteforpr.org/gallup-global-workplace-2026/ |
| Gallup 70 % de la varianza | **Confirmado** el "at least 70% of the variance… across business units" (State of the American Manager, 2015). **La base muestral del deck (2.7 M / ~100,000 equipos) no se confirma**: Gallup cita "27 millones de empleados y 2.5 millones de unidades de trabajo" | https://news.gallup.com/businessjournal/182792/managers-account-variance-employee-engagement.aspx (bloqueado; vía resumen) · https://mindsetonline.com/gallup-tracked-2-7-million-workers-manager-quality-70-percent-engagement/ |
| Deloitte 2026: 6 % liderazgo como meta principal; 76 % Gen Z / 67 % millennials, liderazgo senior | **Confirmado.** En 2026 el 6 % se reporta para "Gen Zs **y** millennials"; en 2025, "solo 6 % de Gen Z" | deloitte.com bloqueado. https://www.deloitte.com/global/en/about/press-room/deloitte-2026-gen-z-and-millennial-survey.html (resumen) · https://www.peoplematters.in/article/strategic-hr/deloitte-survey-gen-z-and-millennials-are-forcing-hr-to-rethink-leadership-49873 · 2025: https://www.prnewswire.com/news-releases/deloitte-globals-2025-gen-z-and-millennial-survey-finds-these-generations-focused-on-growth-as-they-seek-money-meaning-and-well-being-302452096.html |
| Deloitte 2025: 48 % Gen Z / 46 % millennials no se sienten financieramente seguros; 23,482; 44 países | **Confirmado** | https://www.deloitte.com/us/en/insights/topics/talent/2025-gen-z-millennial-survey.html (resumen) · https://www.crowdfundinsider.com/2025/06/241765-deloitte-gen-z-millennial-survey-reveals-how-younger-generations-balance-financial-stability-with-personal-wellbeing/ |
| OCDE: México 2,207 h (2023) vs. promedio 1,683 | **Confirmado** | https://www.oecd.org/en/data/indicators/hours-worked.html · https://www.visualcapitalist.com/annual-working-hours-in-countries-2023/ |
| Microsoft WTI 2024: BYOAI 85/78/76/73 %; Boomers+ = 58+ | **Confirmado** (definición de edades: Gen Z 18–28, Millennials 29–43, Gen X 44–57, Boomers+ 58+) | news.microsoft.com bloqueado. https://marketingassets.microsoft.com/gdc/gdc39Dwp8/original · https://fortune.com/2024/05/10/employees-secretly-bringing-ai-tools-work-microsoft-report/ |
| Ng y Feldman 2012: 418 estudios, N = 208,204, 1 de 6 | **Confirmado.** Precisión: el estereotipo que se sostiene es "**less willing** to participate in training and career development" | https://onlinelibrary.wiley.com/doi/abs/10.1111/peps.12003 · https://www.semanticscholar.org/paper/Evaluating-Six-Common-Stereotypes-About-Older-with-Ng-Feldman/6b8d14cbeb30d0b94f0e4bf79a06fffdea813963 |
| McKinsey: 85 % vs. 15 %; 70 % | **Confirmado** (abr-2021) | https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/help-your-employees-find-purpose-or-watch-them-leave |
| Randstad 2025: el equilibrio supera al salario por primera vez en 22 años | **Confirmado.** Las cifras varían según la nota de prensa (83 % vs. 82 %; otra nota: 85 % / 83 % / 79 %). Una nota reporta Gen Z 74 % equilibrio vs. 68 % salario; **no hay desglose verificado para todas las edades** | https://www.randstad.com/press/2025/work-life-balance-tops-pay-randstads-workmonitor-reveals/ · https://www.staffingindustry.com/news/global-daily-news/work-life-balance-overtakes-pay-as-a-top-priority-for-workforce |
| Costanza 2012: 20 estudios, N = 19,961 | **Confirmado** | https://psycnet.apa.org/record/2012-30193-001 · https://www.semanticscholar.org/paper/Generational-Differences-in-Work-Related-Attitudes:-Costanza-Badger/fefee6303cda28a79025964cce6101d864d757b6 |
| México PIB 1995 −6.2 % | **Confirmado con matiz de serie:** INEGI/Informador reporta −6.2 %; la estimación preliminar de SHCP (feb-1996) fue −6.9 % | https://www.informador.mx/Economia/La-economia-mexicana-cayo-6.5-en-2009-dice-el-Inegi-20100223-0224.html · https://ipsnoticias.net/1996/02/mexico-pib-cayo-69-por-ciento-en-1995/ |
| México PIB 2020 −8.5 %, la mayor caída desde 1932 | **Confirmado** | https://animalpolitico.com/2021/01/economia-pib-mexico-cayo-8-5-peor-caida-88-anos-inegi · https://www.elfinanciero.com.mx/economia/el-recuento-de-los-danos-pib-de-mexico-se-desplomo-8-5-en-2020/ |
| 2009: "más de 5 %" | **Probable.** La estimación de 2010 fue −6.5 %; las series revisadas rondan −5.3 %, y alguna serie internacional da menos (≈ −4.6 %). No se pudo abrir INEGI | https://expansion.mx/economia/2010/02/22/mexico-se-contrae-65-en-2009 · https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG?locations=MX |
| SICARTSA privatizada en 1991; ArcelorMittal 2006 | **Confirmado con matiz:** SICARTSA I pasó a Villacero (1991) y SICARTSA II a Ispat (Mittal) en 1992 como Ispat Mexicana; ArcelorMittal se formó en jun-2006 y compró SICARTSA I a Villacero (≈US$1,400 M) a fines de 2006–2007 | https://timonel.mx/2022/02/07/a-mas-de-tres-decadas-de-la-privatizacion-de-sicartsa-vendida-dos-veces-en-lazaro-cardenas/ · https://www.redalyc.org/journal/510/51058252004/html/ · https://www.reliableplant.com/Read/3951/arcelor-mittal-acquires-mexico's-sicartsa-in-$14b-deal · https://mexico.arcelormittal.com/quienes-somos/nuestra-historia/ |
| Fundidora Monterrey 1986 | **Confirmado** (quiebra 9-may-1986; cierre 10-may-1986) | https://revistabloch.uanl.mx/index.php/b/article/view/188 · https://www.milenio.com/politica/fundidora-tras-su-cierre-nacio-la-leyenda |
| Desarrollo estabilizador ≈7 % | **Confirmado** (6.8 % en 1958–70; $12.50 por dólar) | https://cefp.gob.mx/transp/CEFP-CEFP-70-41-C-Estudio0002-0418.pdf · https://blogs.acatlan.unam.mx/clioeconomia/2025/08/06/desarrollo-estabilizador/ |
| Gallup/Workhuman: 73 % más probable; "about half" de Gen X y Boomers | **Confirmado** | https://www.gallup.com/workplace/396470/bridge-generational-gap-recognition.aspx (resumen) |
| Gallup feedback 60 % / 72 % menores de 30 | **Confirmado** (secundario) | https://www.gallup.com/workplace/651812/organizations-redefine-feedback-including-recognition.aspx |
| Gallup 2022 quiet quitting: la caída se concentró en menores de 35 | **Confirmado.** Contradice la L19 | https://fortune.com/2022/09/07/quiet-quitting-us-workers-employee-engagement-gallup · https://www.gallup.com/workplace/398306/quiet-quitting-real.aspx |
| S&P Global 2026: prime-age en máximo de 25 años | **Confirmado, pero es la participación laboral** (84.1 %, ene-2026), no la tasa de empleo | https://www.spglobal.com/market-intelligence/en/news-insights/articles/2026/2/prime-age-americans-in-workforce-rise-to-25-year-high-as-jobs-picture-darkens-98551735 |

---

## 4. Hallazgos

### MAJOR

**G4-01 · Antigüedad laboral BLS: hay dato más reciente (ene-2026)**
- *Ubicación:* L15 (cuerpo y notas), HR fila 1, L56 (tabla de fuentes).
- *Problema:* el BLS publicó el 24-sep-2026 "Employee Tenure" con datos de enero de 2026: 25–34 = **3.0**; 55–64 = 9.6; general 4.1. El taller es en octubre de 2026 y un participante que busque el dato encontrará 3.0. Las cifras de 2024 no son falsas, pero el año debe quedar explícito, y conviene actualizarlas porque el dato nuevo refuerza el mensaje.
- *Corrección exacta (L15, cifra y pie), una vez confirmada la versión 2026 en bls.gov:* "**3.0 años** · Antigüedad mediana con su empleador de las personas de 25 a 34 años (EE. UU., enero de 2026). En 2000 era 2.6." / "Personas de 55 a 64 años: 9.6 años. La antigüedad se acumula con la edad." / Fuente: "BLS, Employee Tenure 2026 (CPS, EE. UU.); EBRI (2025), Trends in Employee Tenure 1983–2024; Zhao et al. (2007), meta-análisis."
- *Si no se confirma:* dejar 2.7, pero escribir "(EE. UU., enero de 2024)".
- *HR fila 1:* "…la antigüedad mediana de 25–34 años era 2.6 años en 2000 y 3.0 en 2026 (EE. UU.)…" (o "2.7 en ene-2024").
- *Evidence Pack:* actualizar E-A7 y §6 #3.

**G4-02 · "Quiet quitting… no de edad" contradice la fuente**
- *Ubicación:* L19, oculta y de reserva. Se usa si surge la objeción.
- *Problema:* Gallup (2022) encontró que la caída de engagement se concentró en menores de 35: bajaron en claridad, desarrollo y "alguien se preocupa por mí". Decir "no de edad" es incorrecto y además desperdicia el mejor argumento, que la caída se explica por conductas del jefe.
- *Corrección exacta:* "'Quiet quitting' describe al grupo no comprometido. En 2022 afectó más a los menores de 35, y lo que bajó fue la claridad, el desarrollo y el cuidado del jefe: un fenómeno de gestión más que de voluntad."

**G4-03 · Randstad "en todas las edades": dato NO VERIFICADO presentado como hecho**
- *Ubicación:* tarjeta 6 del Muro (línea de revelación) y guion de L35N.
- *Problema:* el pack marca el desglose por generación de Randstad como **BAJA / contradictorio / verificar**. Randstad reporta el resultado de la muestra global, no que ocurra "en todas las edades".
- *Corrección M6:* "En la muestra global de Randstad (26,000+ personas de todas las edades, 35 mercados), el equilibrio superó al salario por primera vez en 22 años. Es una prioridad de la muestra completa, no de una generación (Randstad 2025)."
- *Corrección L35N:* sustituir "y eso es en todas las edades, no en una" por "y es el resultado de toda la muestra, de todas las edades juntas, no de una generación".

**G4-04 · Cronología SICARTSA / ArcelorMittal incompleta ante una audiencia de AMMX**
- *Ubicación:* L30 ("SICARTSA se privatiza en 1991", "en 2006 llega ArcelorMittal"), L33 ("SICARTSA 1991, ArcelorMittal 2006"), WB (contexto Gen X).
- *Problema:* en 1991–92 el complejo se dividió. SICARTSA I pasó a Villacero; SICARTSA II pasó a Ispat (grupo Mittal) en 1992 como Ispat Mexicana. ArcelorMittal se formó en 2006 y compró SICARTSA I en 2006–07, con lo que reunió ambas plantas. Decir que ArcelorMittal "llega" en 2006 será corregido en sala por quienes vivieron Ispat, y el taller perdería credibilidad.
- *Corrección L30:* "Privatización del acero: SICARTSA pasa a manos privadas en 1991–92 (Villacero e Ispat)." / "Muchos vivieron cambios de dueño; en 2006–07 ArcelorMittal integra ambas plantas."
- *Corrección L33:* "En nuestra industria lo vivimos: Fundidora 1986, privatización de SICARTSA 1991–92, integración en ArcelorMittal 2006–07."
- *Evidence Pack:* ajustar E-A9 y §8 (Gen X) con la URL de Redalyc y la historia de ArcelorMittal México.
- *Validar con Comunicación AMMX* la versión oficial de la historia de la empresa.

**G4-05 · Boomers y capacitación: la hipótesis de la "oportunidad" presentada como hecho**
- *Ubicación:* L17 (cuerpo y titular), L17N, HR fila 2, tabla L36 y WB (Desarrollo), tarjeta 14 del Muro.
- *Problema:* Ng y Feldman (2012) encontraron que el único estereotipo consistente es que los trabajadores mayores están **menos dispuestos** a participar en capacitación y desarrollo de carrera. El pack interpreta que "**puede** reflejar menos oportunidades". El deck lo convierte en "**suele** reflejar que se les ofrece menos" y el HR en "a menudo porque se les ofrece menos". Eso infla la interpretación y oculta el único hallazgo que da la razón al estereotipo, lo cual debilita el "sin sobrecorregir". El veredicto MITO sigue siendo defendible para "resistencia a la tecnología", siempre que el matiz se diga con precisión.
- *Corrección L17 (línea 2 del cuerpo):* "'Más resistentes al cambio' y 'menos motivados' no se sostienen. El único que sí: participan menos, y muestran menos disposición, en capacitación."
- *Corrección L17 (evidencia, línea 1):* "Eso puede reflejar que se les ofrece menos o que ven menos retorno a esa edad; lo que sí sabemos es que la edad no predice el desempeño en capacitación."
- *Corrección del titular L17:* "La brecha es de oportunidad y de uso, no de capacidad" (o eliminar "y de sentido", que no tiene fuente en el pack).
- *Corrección L17N:* "Y eso **puede** deberse a que se les ofrece menos."
- *Corrección HR fila 2:* "(participan menos en capacitación; puede reflejar que se les ofrece menos)".
- *Corrección tabla L36 / WB (Desarrollo):* "Los jóvenes piden mentoría (86 % de Gen Z, Deloitte); los mayores participan menos en capacitación, a veces porque se les ofrece menos".
- *Corrección M14:* "La edad no predice el desempeño en capacitación (Ng y Feldman, 2008). Los mayores participan algo menos, a menudo por falta de oferta o de utilidad percibida: vale la pena preguntar."

**G4-10 · Líneas de revelación del Muro sin fuente presentadas como evidencia**
- *Ubicación:* tarjetas 5 (principal), 2, 7 y 9 (segunda mitad) de §1.2, en la columna "Lo que la evidencia sugiere".
- *Problema:* la tarjeta 5 afirma un hallazgo empírico ("la conversación en persona se prefiere en todas las edades") que no está en el pack. Las tarjetas 2, 7 y 9 dan como evidencia interpretaciones sin fuente.
- *Corrección M5:* "Necesidad de todos: no encontramos evidencia sólida de que la preferencia por hablar en persona dependa de la generación; depende más del tema y de la relación."
- *Corrección M2:* "Necesidad de todos, sobre todo ante decisiones que se sienten arbitrarias (lectura del equipo; no es un dato)."
- *Corrección M7:* "Necesidad de todos. En expertos senior pesa más cuando la tecnología cambia su rol (hipótesis a verificar con la persona)."
- *Corrección M9:* "'Resistencia al cambio' no se sostiene en meta-análisis (Ng y Feldman, 2012)." Eliminar "pesa la utilidad percibida" o marcarlo como hipótesis.
- *M10:* añadir "(Randstad 2025)".

**G4-07 · Base muestral del 70 % de Gallup no confirmada**
- *Ubicación:* L37 (pie de la cifra), L36N, pack E-A11 y §6 #5.
- *Problema:* "2.7 millones de empleados, ≈100,000 equipos" no coincide con la descripción de Gallup ("27 millones de empleados y 2.5 millones de unidades de trabajo"). Las fuentes secundarias difieren entre sí. Un número de muestra mal citado en una lámina "big number" invita a ser cuestionado.
- *Corrección L37:* "Gallup, State of the American Manager (2015), base de datos de engagement Q12 con millones de empleados, principalmente en EE. UU."
- *Corrección L36N:* "(Gallup 2015, base Q12; análisis propietario, no 'causa 70 %')".
- *Evidence Pack:* marcar la base como "verificar en el PDF de State of the American Manager".

### MINOR

**G4-06 · "Cohorte… la más pequeña"**
- *Ubicación:* L26, WB (panel Cohorte).
- *Corrección:* "Puede existir, pero suele ser pequeña y es la más difícil de probar." (La evidencia dice que las diferencias son pequeñas y no separables; no establece que el efecto cohorte sea el menor de los tres.)

**G4-08 · CXO Brief: "la palanca de compromiso más grande que se conoce"**
- *Ubicación:* CXO §01.
- *Corrección:* "…y, en los datos de Gallup, el jefe directo es la variable que más distingue el compromiso de un equipo a otro."
- *Nota:* confirmar con datos internos las afirmaciones de negocio (jubilación de expertos, retención temprana) antes de enviar.

**G4-09 · Evidence Pack: dato de 1983 incorrecto**
- *Ubicación:* pack E-A7 y M1 (no se muestra a participantes).
- *Corrección:* "La mediana de 25–34 años era 3.0 años en 1983, 2.6 en 2000, 2.7 en 2024 y 3.0 en 2026 (BLS/EBRI)". En M1: "≈2.6–3.0 años entre 1983 y 2026".

**G4-11 · "Gerentes: el grupo más desgastado / estresado"**
- *Ubicación:* L21, L21N, L36N, L37N; HR fila 3.
- *Problema:* la cifra (27 %→22 %) es de engagement, no de desgaste.
- *Corrección L21:* "Los gerentes actuales son el grupo cuyo compromiso más cayó: de 27 % a 22 % en un año (mundo, Gallup)."
- *Corrección L36N:* "…fíjense en quién perdió más compromiso: los gerentes."
- *Corrección L37N:* "…los jefes, en todo el mundo, estamos menos comprometidos que hace un año."

**G4-12 · L19: "tasa de empleo" vs. "participación"**
- *Corrección L19:* "En EE. UU., la participación laboral de 25 a 54 años alcanzó a inicios de 2026 su nivel más alto desde 2001."
- *Corrección L19N:* "…la participación laboral en edad productiva está en máximos de 25 años."

**G4-13 · "20 %… en todas las edades"**
- *Ubicación:* L19, L19N, HR fila 6.
- *Corrección:* "Lo que sí es bajo es el compromiso: 20 % de los empleados en el mundo (Gallup, datos 2025); no es un problema de una sola generación."

**G4-14 · Atribución del 6 %**
- *Ubicación:* L21, HR fila 3.
- *Corrección del pie de L21:* "Deloitte, Gen Z and Millennial Survey 2025 y 2026 (≈22,500–23,500 personas, 44 países)."
- *Corrección de la etiqueta L21:* "Gen Z y millennials: liderazgo como meta principal hoy (6 %)". Mantener "Gen Z: 76 % interesados en liderazgo senior algún día".

**G4-15 · Kooij: "en cualquier época" / "También fue así para quienes hoy dirigimos"**
- *Ubicación:* L25, M4, HR fila 5.
- *Problema:* un meta-análisis de relaciones edad-motivo no demuestra que el patrón se repita en todas las épocas. La frase es plausible, pero afirma un efecto de cohorte que el mismo taller dice que no se puede probar.
- *Corrección L25:* "Los motivos de crecimiento son más altos en las personas jóvenes y bajan con la edad: un patrón consistente con la etapa de vida."
- *Corrección M4 / HR:* sustituir "en cualquier época" por "(patrón asociado a la edad)".
- *Opcional en L25:* "La urgencia coincide con inseguridad financiera (dato global); en México se suman vivienda e informalidad."

**G4-16 · "En promedio" por "mediana"**
- *Ubicación:* L15N.
- *Corrección:* "…la mitad de las personas de 25 a 34 años lleva menos de tres años con su empleador…"

**G4-17 · Cifras macro que dependen de la serie estadística**
- *Ubicación:* L30 (−6.2 %), L31 ("más de 5 %"), L32 (IED "récord" 2023).
- *Corrección L30:* "…el PIB cayó alrededor de 6 % en 1995."
- *L31:* mantener "más de 5 %" solo si INEGI (serie vigente) lo confirma. Si no, usar "cayó entre 5 % y 6 %, según la serie". Nota para el facilitador: la cifra de 2010 fue −6.5 % y se revisó después.
- *Corrección L32:* "inversión extranjera en niveles récord (2023, cifras preliminares)".

**G4-18 · Autonomía "rol y personalidad" / "pesa más el rol" sin fuente**
- *Ubicación:* tabla L36, WB.
- *Corrección:* columna "Qué lo explica mejor" → "Rol y contexto (sin evidencia generacional robusta)". En WB: "Diferencias de pocos puntos entre edades (Randstad)".

**G4-19 · Microsoft WTI: falta la población medida**
- *Ubicación:* L17, HR fila 2.
- *Corrección:* "Entre trabajadores del conocimiento que usan IA (31 países), 73 % de las personas de 58 años o más la lleva por su cuenta al trabajo (Gen Z: 85 %)."

**G4-20 · "Empresas en todo el mundo"**
- *Ubicación:* L33N.
- *Corrección:* "Desde los ochenta, muchas empresas —documentado sobre todo en EE. UU., y la siderurgia mexicana no fue excepción— pasaron a reestructuras…"

**G4-21 · "Aparecen entre las prioridades de todas las edades"**
- *Ubicación:* L35.
- *Corrección:* "Salario, bienestar, hacer lo que hago bien y estabilidad son las prioridades principales en todas las generaciones (Gallup 2022); las demás son necesidades comunes según la evidencia revisada."

**G4-22 · "A cualquier edad" (Zhao)**
- *Ubicación:* L15, L34.
- *Estatus:* aceptable como inferencia (el meta-análisis incluye muestras de todas las edades y no reporta moderación por edad).
- *Opcional:* "…en estudios con trabajadores de todas las edades."

**G4-23 · Thompson y Vecchio (2009) fuera del pack**
- *Ubicación:* L5N, WB.
- *Corrección:* añadir al Evidence Pack: Thompson, G., y Vecchio, R. P. (2009). Situational leadership theory: A test of three versions. *The Leadership Quarterly, 20*(5), 837–848. https://doi.org/10.1016/j.leaqua.2009.06.014. También Hersey y Blanchard (1969).

**G4-24 · Tiempos del video de Sinek visibles para participantes**
- *Ubicación:* L8 (pie).
- *Corrección:* dejar en lámina solo "Sinek, S. (2016). Entrevista en Inside Quest con Tom Bilyeu ('The Millennial Question'). Fragmento." y mover "≈10:00–14:30; confirmar…" a las notas. El pack marca los tiempos como aproximados.

**G4-25 · Numeración de afirmaciones inconsistente (para facilitadores)**
- *Ubicación:* L12N ("Seis afirmaciones"), L13N ("Versiones 120/90: afirmaciones 1, 2, 4 y 6"), notas L14–L24 ("afirmación 3…6"), Activity Pack §2.3 ("1 DE 6").
- *Corrección L12N:* "Cinco afirmaciones."
- *Corrección L13N:* "Versiones 120/90: afirmaciones 1, 2, 3 y 5 (en pantalla)."
- *Notas L14–L24:* renumerar según el contador visible (1/5…5/5; la reserva queda "R").
- *AP §2.3:* "1 DE 5".

*(Nota: G4-01 a G4-05, G4-07 y G4-10 son los MAJOR; el resto son MINOR.)*

### Comprobaciones específicas solicitadas

- **Correlación → causalidad:** el deck usa "se asocia", "coincide" y "la evidencia sugiere". L37 aclara "No significa que 'cause' el 70 %" y las notas dicen "NO DECIR '70 % del engagement lo causa el jefe'". No se encontró "70 % causa" en ningún material. El único punto débil es el CXO Brief (G4-08).
- **Sinek:** siempre aparece como opinión (L8: "Una opinión, no evidencia"; CXO: "encuadrado como opinión"). Ninguna cita de Sinek se presenta como dato. El marco anti-Boomer de *Leaders Eat Last* está explícitamente vetado (L33N).
- **Sobrecorrección:** no hay afirmaciones de que "las generaciones no existen". L26N lo prohíbe expresamente, y el bloque incluye veredictos DEPENDE / "en parte cierto" (L21, L23, L25). Los únicos riesgos de sobrecorrección son G4-05 (explicación de "oportunidad") y G4-06 ("la más pequeña").
- **Veredictos:**
  - Lealtad = MITO: defendible como rasgo generacional. La cifra de 2026 lo refuerza.
  - Boomers y tecnología = MITO: defendible con el matiz de G4-05.
  - Jefes = DEPENDE: correcto.
  - Reconocimiento = DEPENDE (en parte cierto): correcto y alineado con "PARCIALMENTE CIERTO" del pack.
  - "Lo quieren todo ya" = DEPENDE: correcto.
  - "Ya no quieren trabajar" = MITO: defendible con los ajustes de G4-02, G4-12 y G4-13.
- **Datos NO VERIFICADOS del pack:**
  - ENOE por edad: respetado (L15).
  - Gallup México: no se usa.
  - Deloitte México: no se citan porcentajes, solo "incluido México".
  - Edelman por edad: no se usa.
  - Workhuman 79/43 y "1 de 3": no se usan.
  - Tiempos de Sinek: marcados "confirmar" (G4-24).
  - M10 "no aguantan planta": presentado como falta de evidencia (correcto).
  - **Randstad por generación: violado** (G4-03).

---

## 5. Veredicto

### **GATE 4 — CHANGES REQUIRED**

No hay hallazgos críticos: ninguna cifra central es falsa y las salvaguardas de causalidad, geografía y opinión frente a evidencia están bien diseñadas. Hay 7 MAJOR que deben corregirse antes de imprimir o proyectar.

**Correcciones obligatorias (MAJOR):**
1. **G4-01:** actualizar o fechar la antigüedad laboral BLS (ene-2026: 25–34 = 3.0; 55–64 = 9.6), después de confirmarla en bls.gov.
2. **G4-02:** corregir "quiet quitting… no de edad" en L19.
3. **G4-03:** quitar "en todas las edades" de Randstad (tarjeta 6 del Muro y L35N).
4. **G4-04:** corregir la cronología SICARTSA / Ispat / ArcelorMittal (L30, L33, WB) y validarla con AMMX.
5. **G4-05:** decir "puede reflejar", no "suele", sobre capacitación de mayores (L17, HR, L36/WB, tarjeta 14).
6. **G4-07:** corregir la base muestral del 70 % de Gallup (L37, L36N).
7. **G4-10:** quitar o marcar como hipótesis las líneas de revelación del Muro sin fuente (tarjetas 5, 2, 7 y 9).

Los MINOR (G4-06, G4-08, G4-09 y G4-11 a G4-25) se recomiendan en la misma ronda de edición; ninguno bloquea por sí solo. Una vez aplicadas las correcciones MAJOR y confirmada en la URL primaria la cifra BLS 2026, el Gate 4 puede re-evaluarse como **APPROVED**.
