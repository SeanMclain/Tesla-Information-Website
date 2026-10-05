# Tesla Atlas

A static vehicle archive built with HTML, CSS, and JavaScript. The complete site is in this folder, including its assets. No npm install or build step is needed.

## Edit in Cursor

Open this folder in Cursor with **File → Open Folder**.

Use **Terminal → Run Task → Preview Tesla Atlas**, then open http://127.0.0.1:5500. Alternatively, run this in Cursor's terminal:

```sh
python3 -m http.server 5500 --bind 127.0.0.1
```

Save your changes and refresh the browser to see them. Stop the preview with Ctrl+C in its terminal.

## Where to make changes

- `index.html`: page structure, headings, navigation, and static text.
- `style.css`: original layout and component rules.
- `atlas.css`: current type, color, pills, and hero treatment. Edit this before restyling `style.css`.
- `app.js`: vehicle selection and comparison behavior.
- `data.js`: vehicle specifications, model years, and source data.
- `gallery.js` and `galleries-data.js`: image galleries and their data.
- `research.js` and `research-data.js`: research sections and their content.
- `assets/`: local images and other website assets.

## Publish when ready

The Git remote points to https://github.com/SeanMclain/tesla-atlas. Editing and saving locally does not publish anything.

1. Preview and review your changes locally.
2. In Cursor's Source Control panel, review the diff, stage the intended files, and commit with a clear message.
3. Push the commit to `main` when you want to publish.
4. Check the repository's Actions tab for the GitHub Pages deployment. The existing repository has a GitHub Pages deployment; verify **Settings → Pages** still uses `main` and the repository root before your first push.

You can also commit and push from the terminal:

```sh
git status
git add index.html style.css app.js data.js gallery.js galleries-data.js research.js research-data.js assets
git commit -m "Describe your changes"
git push origin main
```

Stage additional setup files explicitly if you want to include them. A push requires GitHub authentication for an account with write access. The preview task and this guide are local setup additions until you commit and push them.

## Visual layer

`atlas.css` is the current look. It loads after `style.css` and does not change vehicle data. Type is Instrument Sans and Instrument Serif.
