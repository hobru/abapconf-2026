---
name: deck-optimize-space
description: Find recoverable disk space in a deck project (unused media, stale exports, generated caches) without ever silently deleting user work. Use this when asked to optimize, slim down, clean up, free space, prune, or shrink a deck.
---

# Optimize Deck Space — Safely

This skill reclaims disk space in a deck project. **It is dry-run / report only by default.** It must never silently delete files the user authored or imported.

The same rules apply whether the deck was scaffolded by `create-deckio` or imported from outside (e.g. a deck created in another tool and dropped into a project folder).

## Step 0 — Read `deck.config.js`

Before scanning, read the project's `deck.config.js` to learn the **active slide set**, `theme`, and `designSystem`. Anything imported here is "in use" and must never appear as a deletion candidate.

## Step 1 — Inventory disk usage (read-only)

Walk the project directory and produce a sorted list of the heaviest files and folders. Always **skip**:

- `node_modules/`
- `.git/`
- `.deckio-trash/` (existing quarantines)

Report the top heavy items grouped by folder (`public/`, `src/assets/`, `src/slides/`, `dist/`, `.vite/`, etc.). No mutation in this step.

## Step 2 — Build a conservative reference graph

A file is **referenced** if any of these match. When in doubt, treat it as referenced.

1. **`deck.config.js`** — every slide imported and listed in `slides` is referenced. Their `.module.css` companions are referenced.
2. **JSX / JS imports & strings** — for every file under `src/`, scan for:
   - `import ... from '...'` and `import('...')` specifiers
   - bare string literals that look like a project-relative path (`./foo`, `../foo`, `/assets/foo.png`, `@/components/...`)
   - `new URL('...', import.meta.url)` arguments
3. **CSS** — scan `*.css` and `*.module.css` for `url(...)` and `@import` targets.
4. **`src/data/**`** — scan `.json`, `.js`, `.csv`, `.md` for any string that could be a path (substring match against asset basenames is acceptable; basename-only matches stay weak).
5. **`public/`** — anything under `public/` is served at the site root. Only flag a `public/` file if **no source file** mentions its basename or its `/`-rooted path.
6. **Custom themes / descriptors** — files under `src/themes/` (or any folder containing `descriptor.md` / `*.descriptor.md`) are referenced.

Normalize paths case-insensitively (Windows). A missed reference is far worse than keeping an unused file.

## Step 3 — Classify candidates

Every candidate goes into exactly one bucket:

### ✅ Safe (regenerable, no user content)
- `dist/`
- `.vite/`
- `node_modules/.cache/`, `.turbo/`, `.parcel-cache/`
- `.github/eyes/capture-*.png` (screenshots from `deck-inspect`)
- Failed/partial export artifacts in a clearly-generated folder

These can be proposed for deletion. Still report them first; do not delete on the same turn as the scan.

### ⚠️ Review-required (likely user content, not referenced)
- Media in `public/` or `src/assets/` with no detected reference
- Large videos / audio (> 10 MB) anywhere outside `node_modules`
- Orphan slide `.jsx` not in `deck.config.js`, and its companion `.module.css`
- Orphan `.module.css` with no matching `.jsx`
- Components / utilities under `src/` that no other source file imports
- Old export files (`.pdf`, `.pptx`) in user folders

These require **explicit user approval per item or per group**, with a typed confirmation when the total exceeds ~50 MB or when a deck has uncommitted changes.

### 🛑 Never delete
- `.git/`, `.github/`, `.vscode/`
- `package.json`, `package-lock.json`, `deck.config.js`, `vite.config.js`, `index.html`, `App.jsx`, `main.jsx`
- `src/data/inline-edits.json` and anything else under `src/data/` that is not clearly a build artifact
- Custom theme files and descriptors
- Any file modified in the last 60 seconds
- Symlinks
- Anything outside the resolved project directory

Surface these as warnings if they ever appear in scan output; never preselect them.

## Step 4 — Report (default behavior)

Output a concise report:

- Total project size and recoverable estimate
- Top heavy items
- Counts and byte totals per bucket (Safe / Review / Never)
- For each Review item: path, size, why it looks unreferenced, confidence
- Next action the user can take

**Stop here unless the user explicitly approves cleanup.** Never delete files just because the report identified them.

## Step 5 — Approved cleanup → quarantine first

If — and only if — the user approves:

1. Move approved files to `.deckio-trash/<ISO-timestamp>/` preserving relative paths. Do **not** `unlink`.
2. Write `.deckio-trash/<ISO-timestamp>/manifest.json` with `{ originalPath, size, bucket, reason }` for every moved file.
3. For Review-required items, require typed confirmation (e.g. the deck slug) before moving.
4. Stop any running preview / dev server before mutating files.
5. Report what moved, what was skipped, and where the quarantine lives.

Permanent deletion of the quarantine is a **separate, later** action — not part of this skill.

## Step 6 — Post-cleanup validation

After moving files, run whatever validation already exists in the project:

- `deck-validate-project` skill if available
- `npm run build` if a build script exists

If validation fails, tell the user how to restore from `.deckio-trash/<ISO-timestamp>/`.

## Hard rules

- Dry-run / report first. Always.
- Never silently delete user-authored files.
- Move to `.deckio-trash/`; do not `unlink` directly.
- Treat ambiguous references as **used**.
- Never touch anything in the Never-delete list.
- Never follow symlinks during the walk.
- Stay inside the resolved project directory.

## Quick checklist

- [ ] Read `deck.config.js` first
- [ ] Inventory only — no mutation
- [ ] Built the reference graph from config + JSX/JS + CSS + `src/data` + `public`
- [ ] Classified every candidate (Safe / Review / Never)
- [ ] Reported totals and per-item reasons
- [ ] Did **not** delete anything without explicit approval
- [ ] On approval: quarantined to `.deckio-trash/<timestamp>/` with `manifest.json`
- [ ] Re-validated the deck after cleanup
