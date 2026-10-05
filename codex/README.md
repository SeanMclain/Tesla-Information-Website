# Tesla Atlas — Codex preparation pack

Prepared for Sean McClain on 2026-10-05. Retargeted from the Sony FE 50mm F1.8 modeling pack.

## Start here

This pack is the operating brief for [Tesla Atlas](https://github.com/SeanMclain/Tesla-Information-Website), the static vehicle archive at `SeanMclain/Tesla-Information-Website`. It is not a Blender, lens, or product-replica project. The Sony FE 50mm files were a template. Every role, gate, and file in this pack now belongs to the website.

Live site: https://seanmclain.github.io/Tesla-Information-Website/

Latest reviewed commit on `main`: `05fae45` — “Polish Tesla Atlas layout and replace soft gallery photos” (2026-10-05). That pass kept data and behavior, stuck the header, grouped facts into panels, and rebuilt gallery WebPs from credited originals. This pack starts from that commit, not from a blank template.

1. Open `MASTER_PROJECT_BRIEF.md` for the site contract, visual gaps, and the copyable master prompt.
2. Read `TEAM_AND_TOOL_PLAN.md` for the seven-role website team.
3. Use `AGENTS.md` as the shared rules for anyone editing the repo.
4. Assign one file in `agents/` per role.
5. Read `references/REFERENCE_INDEX.md` and `references/site_status.json` before changing photos, prices, or claims.
6. Follow the gates in order: audit → visual system → archive data → galleries → interaction → QA.

## Contents

| File | Purpose |
| --- | --- |
| MASTER_PROJECT_BRIEF.md | Site identity, file map, do-not-break rules, visual upgrade spec, master prompt |
| TEAM_AND_TOOL_PLAN.md | Roles, tools, handoffs, and the weekly cadence |
| AGENTS.md | Shared editing and publishing rules |
| agents/00_lead_coordinator.md | Integration and release owner |
| agents/01_archive_researcher.md | Sources, prices, trims, and claim hygiene |
| agents/02_vehicle_archive_editor.md | `data.js` model years and comparison facts |
| agents/03_gallery_curator.md | Credited photos, thumbnails, and captions |
| agents/04_visual_system.md | Type, color, spacing, and component look |
| agents/05_layout_interaction.md | Navigation, galleries, compare, and responsive behavior |
| agents/06_site_qa.md | Preview, regression, and Pages check |
| references/REFERENCE_INDEX.md | What the archive already is, and what is still weak |
| references/site_status.json | Audit snapshot after commit `05fae45` |
| atlas.css | Visual layer shipped with this rework. Load after `style.css`. |

## What this site is

Tesla Atlas is an independent 2019–2026 U.S. archive for Cybertruck, Model X, Model Y, Model S, Model 3, and Cybercab. It is a single folder of HTML, CSS, and JavaScript. No npm install. No build step. GitHub Pages serves the repository root.

It is not affiliated with Tesla, Inc. Do not restyle it into a counterfeit tesla.com, and do not copy Tesla.com marketing images. Photos already in the repo are public domain, CC0, CC BY, or CC BY-SA and must stay credited.

## First prompt to paste into Codex

> Read README.md, AGENTS.md, MASTER_PROJECT_BRIEF.md, and references/site_status.json in this pack. You are improving SeanMclain/Tesla-Information-Website (Tesla Atlas), not a camera lens. Keep every element id that app.js, gallery.js, and research.js already use. Do not invent prices or specs. Raise the visual system off the original Arial template: type, header, model tabs, year chips, hero, cards, and mobile. Preview at http://127.0.0.1:5500 before you call it done.

The single operating brief is `MERGED_BRIEF.md`. It compares this pack with the ChatGPT pack from 2026-10-05 and keeps both. Use that file first.
