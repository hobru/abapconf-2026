# Deck Project

This is a presentation deck built with `@deckio/deck-engine`.

## Purpose

Create and maintain slide-based presentations. Each project is a self-contained deck with its own theme, data, and slides.

## What to do

- Create, edit, and delete slides in `src/slides/`
- Manage project data in `src/data/`
- Register and reorder slides in `deck.config.js`
- Wrap user-facing text in `<Editable>` and user-content arrays in `<EditableList>` (see `.github/instructions/inline-editing.instructions.md`)

## What NOT to do

- Do not modify `App.jsx`, `main.jsx`, `vite.config.js`, `package.json`, or `index.html` — these are scaffolding files driven by the engine
- Do not modify anything in `node_modules/` or the engine itself
- Do not add dependencies without being asked

## Stack

- React 19, Vite, CSS Modules
- `@deckio/deck-engine` provides: `Slide`, `BottomBar`, `Navigation`, `SlideProvider`, `useSlides`, `Editable`, `EditableList`, `GenericThankYouSlide`
- See `.github/instructions/` for detailed conventions on slide JSX, CSS modules, inline editing, and deck.config.js
- See `.github/skills/` for step-by-step workflows (e.g., adding a slide)

## Space hygiene

Decks accumulate unused media, stale exports, generated screenshots, and orphan files — especially for decks imported from outside DECKIO. When asked to optimize, slim down, clean up, free space, prune, or shrink a deck, follow `.github/skills/deck-optimize-space/SKILL.md`.

Non-negotiable rules:

- **Dry-run / report first.** Never delete on the first pass.
- **Never silently delete** user-authored files (slides, media, data, custom themes).
- Classify every candidate as **safe** (regenerable: `dist/`, `.vite/`, caches, capture screenshots), **review-required** (unreferenced media, orphan slides/CSS, large videos), or **never-delete** (`deck.config.js`, `package.json`, `vite.config.js`, `index.html`, `App.jsx`, `main.jsx`, `.git/`, `.github/`, `src/data/`, custom themes).
- Build references conservatively from `deck.config.js`, JSX/JS imports and string literals, CSS `url(...)` / `@import`, files under `src/data`, and basename matches against `public/`. When uncertain, treat the file as referenced.
- On approval, **quarantine** approved files to `.deckio-trash/<ISO-timestamp>/` with a `manifest.json` instead of `unlink`. Permanent deletion is a separate later action.

## Design system

Check `designSystem` in `deck.config.js`. When it is `'shadcn'`:

- Real shadcn/ui components are preinstalled: `Button`, `Card`, `Badge`, `Separator`, `Alert`
- ReactBits motion components are preinstalled: `Aurora`, `BlurText`, `ShinyText`, `DecryptedText`, `SpotlightCard`
- **Prefer real component imports over CSS imitation** — this is the default authoring pattern
- **Expand via MCP** — the shadcn MCP server is pre-configured in `.vscode/mcp.json`. To add new components, prompt Copilot (e.g., *"Add Dialog from shadcn"*) or use `npx shadcn@latest add <name>`
- Both shadcn/ui and ReactBits registries are configured in `components.json` and coexist cleanly
- Read the shadcn supplement instructions (`shadcn-setup.instructions.md`, `shadcn-components.instructions.md`) for the full reference
- See `MCP-GUIDE.md` for detailed MCP authoring prompts and workflows
