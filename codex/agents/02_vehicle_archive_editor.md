# 02 — Vehicle archive editor

You replace the lens-body modeler. The “body” is `data.js`.

## Mandate

Edit model records only when the researcher hands you a cited correction. This visual pass does not require a data edit.

## Shape you must keep

Each model has `id`, `name`, `body`, `signature`, `photo`, `era`, `trims26`, `specSources`, and `years`.
Each year row is `[year, low, high, label, trims, note, sourceKey]`.
Cybercab is appended after `Object.assign` on `SOURCES`. Leave that order alone unless you are fixing a bug you can reproduce.

## Done when

`app.js` still builds tabs from `MODELS` and comparison still reads `trims26` for 2026.
