# Economia 1 — Claude Project Context

## Qué es este proyecto

App de estudio para el curso **Introducción a la Economía** (Prof. Emanuel Lopez, UNSAM).
Basada en el libro **Acemoglu, Laibson & List**. Sirve como material de repaso interactivo
con resúmenes, conceptos, tips de examen y visualizaciones por capítulo.

## Stack

- React 19 + Vite 8
- Un solo componente: `src/App.jsx` (~1238 líneas)
- Sin backend, sin router, sin CSS framework — estilos inline con objetos JS
- Comandos: `npm run dev` · `npm run build` · `npm run preview`

## Estructura de App.jsx

Todo el contenido vive en el array `CAPITULOS`. Cada capítulo tiene:
- `id`, `numero`, `titulo`, `subtitulo`, `color` (paleta cromática), `emoji`
- `resumen[]` — bullets de resumen
- `conceptos[]` — `{ termino, def }`
- `tips[]` — tips para el examen
- `cuadro[]` / `infografia` — tablas o visualizaciones especiales

### Capítulos implementados

| Cap | Tema | Color |
|-----|------|-------|
| 1 | Principios (Optimización, Equilibrio, Empirismo) | Azul `#1D4ED8` |
| 2 | Oferta y Demanda | Verde `#059669` |
| 3 | Equilibrio de mercado | Teal `#0F766E` |
| 4 | El Consumidor | Violeta `#6D28D9` |
| 5 | El Productor | Naranja `#D97706` |
| 6 | Eficiencia (mano invisible) | Cian `#0891B2` |
| 7 | Externalidades y fallas de mercado | Rojo `#DC2626` |
| 8 | Teoría de Juegos y Oligopolio | Rosa `#BE185D` |
| 9 | Monopolio | Ámbar `#B45309` |
| 10 | Mercados de Factores | Cielo `#0369A1` |
| 11 | GDP y macroeconomía | Índigo `#4338CA` |
| 12 | Crecimiento económico | Esmeralda `#065F46` |

Capítulos implementados: 1-12 (completo). Faltan solo caps de macro (empleo, inflación, ciclos, comercio) si el curso los incluye.

## NotebookLM

- **Notebook:** Introducción a la Economía - UNSAM
- **URL:** `https://notebooklm.google.com/notebook/e745c0d4-d890-4a9b-8c7d-1984b4fba9ec`
- **ID en biblioteca:** `introducción-a-la-economía---unsam` (ya activo)
- **Fuentes:** Slides del Prof. Lopez + libro Acemoglu, Laibson & List completo
- **Skill path:** `/home/fabricio/.claude/skills/notebooklm/`

Consultar notebook:
```bash
cd /home/fabricio/.claude/skills/notebooklm
python3 scripts/run.py ask_question.py --question "..." --notebook-url "https://notebooklm.google.com/notebook/e745c0d4-d890-4a9b-8c7d-1984b4fba9ec"
```

## Repo

- GitHub: `https://github.com/lfcaroprese/Economia_1`
- Local: `/home/fabricio/Economia_1`
- Branch default: `main`

## Convenciones

- Estilos con objetos JS inline (no Tailwind, no CSS externo)
- Paleta cromática fija por capítulo (ver cabecera de App.jsx)
- Mobile-first
- Cada capítulo es un objeto autónomo dentro de `CAPITULOS` — no hay componentes separados por cap
