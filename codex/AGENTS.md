# AGENTS.md — Tesla Atlas

Shared rules for every role working on `SeanMclain/Tesla-Information-Website`.

## Identity

- Product name: Tesla Atlas.
- Repo: https://github.com/SeanMclain/Tesla-Information-Website
- Live: https://seanmclain.github.io/Tesla-Information-Website/
- Owner: Sean McClain (`SeanMclain`).
- Scope: 2019–2026 U.S. edition. Models: Cybertruck, Model X, Model Y, Model S, Model 3, Cybercab.
- Stack: static `index.html`, `style.css`, `atlas.css`, `app.js`, `data.js`, `gallery.js`, `galleries-data.js`, `research.js`, `research-data.js`, `assets/`.
- Affiliation: independent. The footer must keep “Not affiliated with Tesla, Inc.”

## Do not break

- Element ids: `models`, `years`, `featured`, `detail`, `leftModel`, `leftYear`, `leftTrim`, `rightModel`, `rightYear`, `rightTrim`, `compareResult`, `researchTabs`, `researchContent`, `sourceList`, `imageCredits`.
- Script order at the bottom of `index.html`.
- The data shape in `data.js`: `MODELS[]` with `id`, `name`, `years`, `trims26`, `specSources`.
- Photo licenses. Tesla.com marketing images are not licensed for this archive.
- Existing photo credits in the sources disclosure.

## How to edit

- Preview with `python3 -m http.server 5500 --bind 127.0.0.1`, or the Cursor task “Preview Tesla Atlas”.
- Put look changes in `atlas.css` unless a rule in `style.css` cannot be overridden cleanly.
- Put new facts only in `data.js`, `galleries-data.js`, or `research-data.js`, with a source key already in `SOURCES` or a new cited key.
- Label concept prices, estimates, and manufacturer figures the way the current method section already does.
- One concern per commit. Visual commits must not silently rewrite prices.

## Publishing

A local save does not publish. Commit, push `main`, then confirm GitHub Pages. Pages can lag a commit; check the live HTML after the cache window, not only the git SHA.

## Handoff format

Return: milestone, files touched, what was verified in the browser, sources used, and anything still estimated or blocked.
