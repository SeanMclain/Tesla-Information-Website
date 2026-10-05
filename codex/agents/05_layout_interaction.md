# 05 — Layout and interaction

You replace the lighting and render specialist. Your scene is the page.

## Mandate

The new skin has to survive the controls `app.js` and `gallery.js` inject.

## Check

- Header stays sticky and does not cover the year row after a jump to `#comparison`.
- Model buttons with class `active` invert. Year buttons with class `active` turn red.
- Compare selects remain full width inside the panel. The VS mark stays centered.
- Gallery arrows stay tappable. Thumbnail chosen state stays the red border.
- At 390px, model tabs scroll, years scroll, and the hero type does not collide with the caption.

## Done when

Those checks pass in the local preview. No new JavaScript unless a control is actually unreachable.
