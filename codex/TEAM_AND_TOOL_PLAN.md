# Team and tool plan — Tesla Atlas

Replaces the seven-person Sony lens modeling roster. Same headcount, website jobs.

## Roster

| Role | File | Owns |
| --- | --- | --- |
| Lead coordinator | agents/00_lead_coordinator.md | Scope, gates, commit, Pages check |
| Archive researcher | agents/01_archive_researcher.md | Sources, price bands, trim names |
| Vehicle archive editor | agents/02_vehicle_archive_editor.md | `data.js` only when research hands off a cited change |
| Gallery curator | agents/03_gallery_curator.md | `assets/`, captions, credits |
| Visual system | agents/04_visual_system.md | `atlas.css`, type, color, components |
| Layout and interaction | agents/05_layout_interaction.md | Header, tabs, compare, mobile, viewer |
| Site QA | agents/06_site_qa.md | Preview script, regression, disclosure |

Run them sequentially if the environment has one agent. Do not pretend a role already finished work it did not do.

## Tools

- Repo: GitHub `SeanMclain/Tesla-Information-Website`, branch `main`.
- Editor: Cursor, or any editor that can open the folder.
- Preview: `python3 -m http.server 5500 --bind 127.0.0.1`.
- Pages: repository root on `main`. Confirm in Settings → Pages if a push does not appear.
- References: Wikimedia Commons files already linked in `index.html`, plus the source keys in `data.js`.
- Not in scope: Blender, Substance, lens measurement, Sony part numbers.

## Dependency order

1. Lead reads the baseline commit and freezes the do-not-break list.
2. Researcher confirms whether a visual pass is allowed to skip data edits. Default: yes.
3. Visual system ships `atlas.css` and the stylesheet link.
4. Layout checks that app.js-generated controls still pick up the new pill styles.
5. Gallery curator only opens if a frame is still soft after `05fae45`.
6. QA clicks Cybertruck, Model 3, Cybercab, one comparison, and the research tab.
7. Lead pushes one commit and records the live URL.

## Handoff

Each role returns milestone, files, evidence, and the next owner. A blocked input (Pages cache, missing photo) is reported. It is not papered over.
