---
name: deck-inspect
description: Capture a screenshot of the deck app to visually inspect slides. Use this when asked to look at, see, view, inspect, check visually, or preview a slide. Works in VS Code, Copilot CLI, deck-launcher, and containers.
---

# Visual Inspection — Capture a Slide Screenshot

Captures a screenshot of the running deck to visually inspect slides. Works across all environments: VS Code, GitHub Copilot CLI (Windows, macOS, Linux), deck-launcher, and AKS containers.

## Step 0 — Read `deck.config.js` and the active theme descriptor

Before deciding what to capture:

1. Open `deck.config.js`
2. Read `theme` and `designSystem`
3. Resolve and read the active theme descriptor using the same rules as `deck-add-slide`
4. Use that descriptor as the visual source of truth

Judge the screenshot against the descriptor's:

- slide personality
- decorative elements
- surface treatment
- component ecosystem
- anti-patterns

## Deciding what to capture

1. **Slide** — resolve in this order:
   - If the user message contains `[Current slide: X of Y — SlideName]` → use slide X.
   - If the user said "slide 3" or "the cover slide" → map to a 1-based number.
   - If you just created or edited a specific slide → use that slide's array position + 1.
   - If not specified → capture slide 1.

## Prerequisites

The dev server must be running. Check `.github/memory/state.md` for the port. Default is `5173`.

## Choose capture strategy

Detect which tools are available and use the first matching strategy.

### Strategy A — VS Code browser tools (preferred in VS Code)

Use this when `screenshot_page` or `open_browser_page` tools are available.

#### Step A1 — Open or reuse a browser page

Check the attached browser pages for an existing deck tab. If none exists, open one:

```
open_browser_page → http://localhost:<port>
```

Read `project` and `port` from `.github/memory/state.md` if not known.

#### Step A2 — Navigate to the target slide

Press `Home` to go to slide 1, then press `ArrowRight` (N − 1) times to reach slide N.

#### Step A3 — Take a screenshot

Use `screenshot_page` with the page ID.

### Strategy B — Capture script (Copilot CLI, launcher, containers)

Use this when VS Code browser tools (`screenshot_page`, `open_browser_page`) are NOT available. This works on Windows, macOS, Linux, and inside AKS containers.

Run the engine capture script:

```bash
node node_modules/@deckio/deck-engine/scripts/capture-slide.mjs --slide <N>
```

The script auto-detects the environment:
- Uses Puppeteer directly if available (launcher node_modules, container `/app/node_modules`)
- Falls back to the launcher capture API (`POST /api/capture/:id`) over HTTP

Optional flags:
- `--port <port>` — override dev server port (default: from `.github/memory/state.md` or `5173`)
- `--project-id <id>` — override project ID (default: from `deck.config.js`)
- `--launcher-port <port>` — override launcher API port (default: `$PORT` or `46000`)
- `--output <path>` — override output file path

The captured image is saved to `.github/eyes/capture-<timestamp>.png`.

After running the script, read the saved image file to inspect it.

## Inspect and report

Study the screenshot and check for:

- Layout alignment and spacing
- Typography hierarchy
- Missing or broken elements
- Color and contrast issues
- Overflow or clipping
- Theme or design-system mismatches

## Use the descriptor to judge fit

Examples of descriptor mismatches to flag:

- A default descriptor slide missing the left accent bar or orb treatment
- A shadcn descriptor slide showing DECKIO orb backgrounds or gradient card-top bars
- A shadcn descriptor slide that ignores semantic surfaces and looks like a dark DECKIO default slide
- A light descriptor slide using heavy dark-theme glows that muddy the canvas
- A slide importing or visually implying the wrong component ecosystem

If `designSystem` and the descriptor disagree, explicitly report that as a configuration mismatch.

When a mismatch exists, say the slide was built with the wrong theme/design-system pattern set and should be corrected using `deck-add-slide`.
