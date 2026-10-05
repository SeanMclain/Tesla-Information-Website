# Tesla Atlas — master project brief

Research date: 2026-10-05. Owner: Sean McClain.
Purpose: turn the original static template into a credible vehicle archive, without throwing away the data model already in the repo.

This file replaces the Sony FE 50mm F1.8 Blender brief. There is no lens, hood, cap, or `.blend` deliverable.

## 1. Intended result

Tesla Atlas should feel like a designed archive, not a first HTML template with panels bolted on.

A visitor landing on the 2026 Cybertruck (the current default) should immediately see:

- A wordmark and navigation that stay readable while scrolling.
- A headline with real typographic hierarchy, not Arial at a modest size.
- Model choices that look like controls, not a row of underlined text.
- Year choices that stay usable on a phone.
- A photograph that is sharp, credited, and not upscaled mush.
- Prices and trims that stay tied to the existing sourced tables.

Desired deliverables:

- `atlas.css` loaded after `style.css`, owning the new visual system.
- `index.html` updated only for type, theme color, the mark, and the stylesheet link.
- This Codex pack committed under `codex/` so the next session does not start from the Sony template.
- No change to `data.js` unless a cited correction is in scope.
- A local preview note and a Pages check after push.

## 2. Exact product identity

| Piece | Value |
| --- | --- |
| Site | Tesla Atlas |
| Repo | SeanMclain/Tesla-Information-Website |
| Branch | main |
| Baseline commit | 05fae45fe6f715254b56157f2cea5a173b4d9bdd |
| Live URL | https://seanmclain.github.io/Tesla-Information-Website/ |
| Edition | 2019–2026 / US |
| Models | Cybertruck `ct`, Model X `mx`, Model Y `my`, Model S `ms`, Model 3 `m3`, Cybercab `cc` |

Do not mix in Roadster, Semi, or a fictional “Platinum” trim. Platinum is already called out in the trim guide as not a factory name.

## 3. File map

| File | Owns |
| --- | --- |
| index.html | Document outline, nav, section ids, disclosure copy |
| style.css | Original template plus the 2026-10-05 panel polish |
| atlas.css | New type, color, pills, hero, cards |
| app.js | Model/year selection and comparison |
| data.js | Specs, years, trims, source keys |
| gallery.js / galleries-data.js | Photo stages and filters |
| research.js / research-data.js | Robotics, architecture, design notes |
| assets/ | Hero stills and gallery WebPs |

## 4. What the last commit already fixed

`05fae45` polished layout without changing data or behavior, kept the header in view, grouped facts and comparison controls into panels, let the year row scroll on narrow screens, and replaced soft gallery files with sharper WebPs from the same credited originals. Cybercab frames had been only a few hundred pixels wide. Do not revert those assets.

## 5. Remaining visual gaps

The page still reads as the original template:

- UI face is Arial. Headlines do not have a display face.
- Accent `#f15343` is a soft coral. The archive wants a deeper red, `#e82127`, on the same dark ground.
- Model tabs are text with a bottom border. They should be pills, with the active model inverted.
- Year buttons are tiny rectangles. Active year should be the red chip, not a white block fighting the model pill.
- The hero gradient is heavy and the type sits in a generic overlay.
- The header mark is an italic “A”. Replace it with the existing chevron mark, in a small red tile.
- Cards, tables, and the compare “VS” still share one radius and one border. Give the page one radius (18px) and one shadow.
- Mobile header wraps, but nav links are still plain text with too little hit area.

Behavior that must stay:

- Selecting a model rebuilds years and the feature block.
- Comparison selects still drive `compareResult`.
- Gallery filters, arrows, thumbnails, and the photo viewer still work.
- Research tabs still render from `research-data.js`.
- Source and image-credit disclosures stay in the page.

## 6. Visual contract

- Type: Instrument Sans for UI, Instrument Serif for h1, feature titles, and stat numbers.
- Ground: `#07080a`, with a faint red radial at the top left. Not a flat `#090b0d` only.
- Panel: `#12161b`. Line: `#2a3138`. Text: `#f4f1ea`. Muted: `#a7b0b8`.
- Active model: white pill, ink text. Active year: red pill, white text.
- Radius: 18px on heroes and cards, 999px on controls.
- Header: sticky, 72px, blurred. Do not cover focused controls; `scroll-padding-top` stays at least 92px.
- Motion: keep the existing color/border transitions. No new animation library.

## 7. Content contract

Prices are U.S. dollars and model-year bands, not transaction prices. 2026 trim tables are selected published configurations. Range depends on wheels. Performance times may exclude rollout. Cybercab has no consumer MSRP in the current data; do not invent one. Historical years must not inherit today’s specs.

Photos represent a design era. When a year has no photograph of its own, the gallery says so. Keep Wikimedia credits.

## 8. Gates

1. Audit — read this brief and `references/site_status.json`.
2. Visual system — ship `atlas.css` and the `index.html` link. Do not restyle by editing `data.js`.
3. Archive — only if a number is wrong, and only with a source already used by the page.
4. Gallery — do not recompress the sharper WebPs from `05fae45` unless a frame is still soft.
5. Interaction — click every model, both ends of the year row, and one comparison on a narrow viewport.
6. QA — preview locally, then confirm Pages after the cache window.

## 9. Copyable master prompt

> You are the lead on Tesla Atlas, SeanMclain/Tesla-Information-Website, baseline commit 05fae45. Read AGENTS.md and this brief. Improve the look of the static archive so it no longer resembles the first Arial template. Load a new atlas.css after style.css. Use Instrument Sans and Instrument Serif, a deeper red, pill model tabs, red year chips, an 18px card radius, and a chevron mark in the header. Do not change element ids, script order, photo licenses, or unsourced specs. Preview on desktop and at 390px wide. Report files, what you clicked, and any Pages lag.

## Boundaries

Do not claim a deploy finished until the live HTML or CSS URL shows the change. Do not add a framework. Do not republish Tesla.com press images.
