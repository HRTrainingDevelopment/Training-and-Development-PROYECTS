# Taller para líderes · Trabajar entre generaciones

Taller práctico de 3 horas para líderes con equipo a cargo. Responde cuatro preguntas:

1. **¿Cómo reacciono?** (40 min): Mi primera reacción · El muro de las generaciones
2. **¿Qué impacto tiene mi reacción?** (30 min): La cadena de la reacción · Dos respuestas
3. **¿Qué valora cada generación?** (35 min): Mito o realidad · Mapa de las generaciones
4. **¿Cómo trabajo mejor con otras generaciones?** (45 min): 8 prácticas · Casos de planta · Mi plan

Idea central: *Cada generación puede necesitar un trato distinto. Todos cumplimos el mismo estándar.*

## Entregables (`entregables/`)

| Archivo | Para qué sirve |
|---|---|
| `00_Presentacion_Taller_Generaciones_AMMX.pptx` / `.pdf` | Deck de 25 láminas con notas del orador |
| `01_Diseno_del_Taller.pdf` | Diseño completo, agenda minuto a minuto y guía de actividades |
| `02_Cuaderno_del_Participante.pdf` | Cuaderno de trabajo para cada líder |
| `03_Materiales_Imprimibles.pdf` | Tarjetas recortables, pósters y respuestas de referencia |

## Regenerar

```bash
NODE_PATH=../workshop-liderazgo-intergeneracional/src/node_modules node build_deck.js
DOCS_DIR=$PWD/docs OUT_DIR=$PWD/entregables node ../workshop-liderazgo-intergeneracional/src/build_pdfs.js
```
