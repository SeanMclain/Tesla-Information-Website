# Tesla Atlas — merged Codex brief

Prepared: 2026-10-05. Owner: Sean McClain.
Repo: `SeanMclain/Tesla-Information-Website`. Live: https://seanmclain.github.io/Tesla-Information-Website/
This file replaces both the Sony-retargeted pack and the ChatGPT pack as the single operating brief. Keep it beside the site. Do not overwrite the repository root `README.md` with it.

## 0. Comparison

Two packs were written the same day from the same idea. They reviewed the same baseline and then diverged.

| | Grok pack, already on `main` | ChatGPT pack, attached 2026-10-05 |
| --- | --- | --- |
| Baseline they both saw | `05fae45` — layout polish and sharper credited photos | same commit |
| What it actually did | Rewrote the Sony lens roles into website roles and shipped `atlas.css` in `9951e87` | Wrote a fuller engineering spec. Did not edit the site. |
| Best at | Concrete do-not-break list, current visual contract, file map, what already shipped | Evidence labels, claim schema, comparison UX, gallery performance, gates, non-goals |
| Weak at | Thin on provenance, deep links, accessibility, and the next product pass | Did not know `9951e87`. Told agents not to publish to `main` unless asked. Slightly generic on the current DOM. |
| Keep | Visual tokens, pill controls, chevron mark, id list, “do not recompress the new WebPs” | Evidence taxonomy, URL contract, P0/P1/P2, record templates, QA matrix |

Rule for the merge: ChatGPT owns the next product pass. Grok owns the visual system that is already live. Neither pack gets to invent a price.

## 1. What the site is now

Tesla Atlas is an independent 2019–2026 U.S. archive. Models: Cybertruck `ct`, Model X `mx`, Model Y `my`, Model S `ms`, Model 3 `m3`, Cybercab `cc`. Static HTML, CSS, and vanilla JavaScript. No npm build. GitHub Pages serves the repo root.

Current head after the visual pass: `9951e87` — “Raise the Atlas visual system and retarget the Codex pack.”
`atlas.css` loads after `style.css`. Instrument Sans for UI, Instrument Serif for headlines and stat numbers. Ground `#07080a`, panel `#12161b`, red `#e82127`, text `#f4f1ea`. Model tabs are white pills. The active year is a red chip. Header mark is a chevron tile, not an italic A.

That pass did not change `data.js`, galleries, or comparison math. Pages can lag a commit. Confirm `atlas.css` on the live URL before calling the look shipped.

Footer line stays: “Independent comparison guide. Not affiliated with Tesla, Inc.” Do not restyle this into a tesla.com clone. Do not republish Tesla.com marketing images.

## 2. Do not break

Element ids: `models`, `years`, `featured`, `detail`, `leftModel`, `leftYear`, `leftTrim`, `rightModel`, `rightYear`, `rightTrim`, `compareResult`, `researchTabs`, `researchContent`, `sourceList`, `imageCredits`.

Script order at the bottom of `index.html`. Anchors `#explore`, `#comparison`, `#guide`, `#research`, `#sources`.

`data.js` shape: `MODELS[]` with `id`, `name`, `body`, `signature`, `photo`, `era`, `trims26`, `specSources`, `years`. A year row is `[year, low, high, label, trims, note, sourceKey]`. Cybercab is appended after `Object.assign` on `SOURCES`.

Photo license rule already on the page: public domain, CC0, CC BY, or CC BY-SA only. Generation stand-in photos must say they are the generation, not that exact year. Do not recompress the WebPs from `05fae45`.

## 3. Evidence rules

Taken from the ChatGPT pack. Use these labels on every factual edit.

- `official_company` — Tesla product, support, investor-relations, or SEC-filed company material.
- `regulator_government` — NHTSA, EPA / fueleconomy.gov, SEC-hosted filings, other government records.
- `standard_body` — SAE or another standards body.
- `patent_record` — USPTO or Google Patents. A patent is not proof the part shipped.
- `independent_reporting` — Reuters or comparable reporting.
- `secondary_reference` — Cars.com and similar, when a primary snapshot is unavailable.
- `historical_snapshot` — a dated value kept as history.
- `inherited_unrechecked` — already in the corpus, not reopened this pass.
- `estimate_or_interpretation` — derived. Never present it as an official number.

Date-sensitive claims need an `as_of` date. Do not turn an old snapshot into a current figure. Do not average conflicting numbers. If two sources disagree, keep both, say what each measures, and let the lead pick the UI.

High-volatility, recheck before calling current: prices, trims, EPA or manufacturer range, Cybercab / Robotaxi service area, FSD version, quarterly production, factory capacity, Supercharger counts, investigation status.

Lower-volatility: unveil dates, refresh milestones, concept targets, Foundation-package history, patent priority dates, factory opening dates. Still cite them.

Not evidence by themselves: AI text, search snippets, reposts, unsourced forums, dealer copy, filenames.

Platinum is not a factory trim. Cybercab has no consumer MSRP in the current data. Do not invent one. 2019 Cybertruck prices are concept targets. Performance times may exclude rollout. A model-year band is not an average and not a used price.

## 4. Record templates

Claim:

```md
Claim ID:
Topic:
Claim:
Value:
As-of date:
Checked-at date:
Source type:
Source URL:
Status:
Method / where in source:
Qualifiers:
Conflicts:
UI label:
```

Gallery image:

```md
Image ID:
Collection:
Vehicle:
Exact year or representative generation:
Capture date:
Local full path:
Local thumbnail path:
Source page:
Author:
License:
Attribution required:
Width x height:
Alt text:
Caption:
Verification status:
```

Normalized research shape to grow into, not a rewrite required this week:

```js
{
  id: "tesla.robotaxi.service.austin-status",
  topic: "autonomy",
  label: "Austin Robotaxi status",
  value: "…",
  asOf: "2026-07-22",
  sourceUrl: "…",
  sourceType: "official_company",
  checkedAt: "2026-10-05",
  status: "verified_current_pass",
  inherited: false,
  note: "Company-reported. Not independent validation."
}
```

No fake truth score. Show provenance and date.

## 5. Visual contract already shipped

Edit `atlas.css` before restyling `style.css`.

- Type: Instrument Sans UI, Instrument Serif on h1, feature titles, stat numbers.
- Tokens: `--bg #07080a`, `--panel #12161b`, `--line #2a3138`, `--muted #a7b0b8`, `--red #e82127`, `--white #f4f1ea`.
- Radius: 18px on heroes and cards, 999px on controls.
- Active model: white pill, ink text. Active year: red pill, white text.
- Header: sticky, blurred, chevron tile. `scroll-padding-top` at least 92px.
- Product feel: archive, not showroom.

Still open on the visual side: mobile nav is a wrapping row, not a menu. Comparison is still a full table, not difference-first. Research claims do not yet wear a source badge.

## 6. Next product pass

Priority from the ChatGPT pack, adjusted for the visual commit already done.

P0:

1. Mobile header that does not wrap the wordmark into the links.
2. Shareable state: `model`, `year`, and `compare`, without breaking existing anchors.
3. Comparison: swap sides, copy-link, same-basis versus different-basis warning, highlight deltas, no arithmetic across unlike price types.
4. Gallery: thumbs first, lazy full images, prefetch the next slide, `decoding="async"`, width/height to stop layout shift. Do not soften the `05fae45` files.
5. A small validation script for model ids, year rows, source keys, and gallery path pairs.
6. Provenance strip on research claims: source class, as-of, inherited or rechecked.
7. Keyboard pass on tabs, year chips, gallery arrows, and the photo viewer.

P1: model history as a real timeline, research topic navigation, Open Graph metadata, asset size report, changelog for the research snapshot.

P2 only after that: search, per-model pages, CSV/JSON export, a framework, fancier charts.

URL contract to approve before coding:

- `model=<id>`
- `year=<yyyy>`
- `compare=<leftModel>:<year>:<trim>,<rightModel>:<year>:<trim>`
- section hashes stay optional

Source ids stay stable even if a URL moves. Gallery ids stay stable so credits do not drift.

## 7. Roles

One person can run these in order. Do not claim a role finished work it did not do.

| Role | Owns | From |
| --- | --- | --- |
| Lead | Gates, commits, Pages check | both |
| Research and provenance | Labels, as-of dates, conflict notes | ChatGPT |
| Vehicle archive editor | `data.js` only with a cited handoff | Grok |
| UX / information architecture | Task flow, mobile nav, context | ChatGPT |
| Frontend | `app.js` state, deep links, no framework | ChatGPT |
| Gallery | Credits, lazy load, no recompress | both |
| Comparison | Deltas, swap, share, basis warnings | ChatGPT |
| Visual system | `atlas.css` tokens | Grok |
| QA and release | Keyboard, mobile, links, smoke test | ChatGPT |

## 8. Gates

1. Audit — read this file and the current `main`, not an old snapshot.
2. Visual — `atlas.css` present and linked. Already done in `9951e87`. Do not redo it.
3. State — deep link restores model, year, and comparison. Back button works.
4. Comparison — share, swap, basis warning, no fake math.
5. Gallery — thumbs first, credits intact, sharp files untouched.
6. Research — badge, as-of, inherited versus rechecked.
7. QA — Cybertruck 2026, Model 3, Cybercab, one comparison, research viewer, 390px width, no console error, live CSS confirmed.

## 9. Non-goals

No tesla.com recreation, stock ticker, accounts, database, private API scrape, 3D configurator, live inventory, or a rewrite whose only reason is style. The style pass already happened.

## 10. Master prompt

> Read `codex/MERGED_BRIEF.md` and the current `main` of `SeanMclain/Tesla-Information-Website`. Baseline for facts is `05fae45`. Baseline for look is `9951e87`. Do not redo the visual system. Do not invent prices. Next work is P0 only: mobile nav, shareable `model`/`year`/`compare` state, comparison swap and basis warnings, gallery lazy-load without recompressing WebPs, a validation script, and provenance badges. Keep every element id in section 2. Preview at http://127.0.0.1:5500. Report files, what you clicked, sources touched, and whether Pages has caught up.
