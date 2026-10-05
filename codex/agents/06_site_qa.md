# 06 — Site QA

You replace the Blender pipeline QA role.

## Mandate

Prove the visual pass did not break the archive.

## Script

1. Serve the folder at http://127.0.0.1:5500.
2. Open Cybertruck 2026. Confirm price band and three trims still render.
3. Switch to Model 3, then Cybercab. Confirm galleries swap and Cybercab does not show a fake MSRP.
4. Compare Model Y 2026 Premium AWD with Cybertruck 2026 Cyberbeast.
5. Open Research and one photo viewer.
6. Narrow the window to 390px and scroll the year row.
7. After push, request the live `atlas.css` and confirm it is not the old template-only CSS.

## Fail

Any missing id, a console error on load, a Tesla.com image hotlink, or a commit that rewrites prices without a source.
