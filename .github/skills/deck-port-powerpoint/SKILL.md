---
name: deck-port-powerpoint
description: Port a PowerPoint, PPTX, PDF export, or slide-image deck into native DECKIO slides. Use this when asked to convert, map, rebuild, port, digitize, or translate presentation slides into DeckIO. Includes source extraction, slide classification, amplification-first redesign, data extraction, native slide rebuilding, and validation.
---

# Port PowerPoint To DECKIO

This skill is for taking an existing presentation and rebuilding it as a real DECKIO deck.

The goal is not screenshot-tracing.
The goal is to preserve the source message, improve the communication quality, and express the deck as native slides.

## Core Principle

**Amplify the message, do not inherit the source deck's flaws.**

When the PowerPoint has clutter, overlap, weak hierarchy, excessive decoration, or poor layout decisions:

- preserve the idea
- preserve the factual content
- improve the slide architecture
- improve readability and presenter utility
- prefer clear DECKIO structure over literal visual cloning

Only keep the original look when it helps the message. Never keep bad layout out of loyalty to the source file.

## Step 0 — Read the target deck rules first

Before touching any slide:

1. Read `deck.config.js`
2. Read `deck-add-slide/SKILL.md` and use it as the per-slide execution contract
3. Read `theme` and `designSystem`
4. Resolve the active theme descriptor
5. Read relevant slide instructions:
   - `slide-jsx.instructions.md`
   - `slide-css.instructions.md`
   - `deck-config.instructions.md`
6. If `designSystem === 'shadcn'`, also read:
   - `shadcn-setup.instructions.md`
   - `shadcn-components.instructions.md`

The active descriptor is the visual and structural source of truth for the rebuilt output.
`deck-add-slide` is the per-slide implementation workflow and must be applied to every individual slide that is rebuilt.

## Step 1 — Acquire and inspect the source deck

Work from the highest-fidelity source available:

1. `*.pptx`
2. `*.ppt`
3. PDF export
4. Per-slide images
5. Screenshot set

If a PowerPoint file exists, inspect it in two ways:

### 1. Structural extraction

Extract slide text, ordering, and media references from the `.pptx` package.

Use this to answer:

- How many slides exist?
- Which slides are section dividers?
- Which slides are dashboards, matrices, or diagrams?
- Which slides are image-only or chart-heavy?

### 2. Visual export

Export each slide to PNG for reference.

On Windows, if PowerPoint is installed, PowerPoint COM export is preferred because it preserves layout accurately for review.

Use exported images to understand:

- relative visual hierarchy
- density
- chart or dashboard composition
- slide intent when XML text is incomplete

## Step 2 — Build a slide inventory before coding

Create a working inventory for the whole deck.

For each slide, identify:

- slide number
- title or primary message
- slide type
- source quality
- rebuild strategy

### Slide types to classify

- Cover
- Section divider
- Agenda / roadmap
- KPI dashboard
- Scorecard / survey summary
- Data table / ownership matrix
- Diagram / framework / process model
- Quote / success story
- Chart-heavy slide
- Image-first slide
- Closing / thank-you

### Rebuild strategy labels

- **Native**: rebuild completely as JSX/CSS/data
- **Hybrid**: native layout with selective source images or diagrams

Default to **Native** whenever the content can be represented semantically.
Use **Hybrid** only when a specific visual element cannot reasonably be rebuilt yet, not as a full-slide screenshot shortcut.

## Step 3 — Decide what belongs in data files

Before writing slide JSX, extract reusable content into `src/data/`.

Create focused data modules for:

- speaker / cover metadata
- table rows and ownership mappings
- KPI metrics
- score lists
- principles / habits / bullets
- named sections / statuses / owners

Do not bury structured business content directly in JSX when it clearly belongs in data.

## Step 4 — Rebuild slide-by-slide using DECKIO patterns

Translate each source slide into the most appropriate DECKIO slide pattern.

For **every single slide** you rebuild:

1. follow the `deck-add-slide` skill
2. follow the active theme descriptor
3. follow `slide-jsx.instructions.md` for JSX structure
4. follow `slide-css.instructions.md` for CSS structure
5. register the slide in `deck.config.js` using the same rules as `deck-add-slide`

Do not treat the PowerPoint port as a separate exemption from normal slide-authoring standards.

### Cover slides

Use a real DECKIO cover slide.

- keep the original title, subtitle, speaker, and role
- do not screenshot the original cover
- improve spacing and hierarchy where needed

### Section-divider slides

Convert simple title-only slides into strong section dividers.

- short kicker or section label is acceptable if it strengthens orientation
- keep the original section title intact

### KPI / dashboard slides

Convert to native cards, metric strips, trend panels, and progress visuals.

- keep the actual numbers accurate
- simplify noisy dashboard chrome from the source
- preserve comparison logic, not application UI furniture

### Tables and matrices

Use real HTML tables or semantically structured grids.

- preserve row/column meaning
- use row spans or grouped cells where necessary
- compact aggressively before dropping content
- avoid overflow

### Diagram slides

Rebuild diagrams as simplified semantic compositions.

- preserve conceptual relationships
- remove collisions and decorative clutter
- separate valid roles from anti-patterns clearly
- prefer clear lanes, anchors, and connectors over copied shapes

### Bullet / principle slides

Use grouped cards, chips, badges, or structured lists.

- tighten phrasing visually without altering source meaning
- create obvious scanning order

### Quote / story slides

Use a strong quote-led composition with attribution.

- do not embed screenshots of plain text if the quote can be typed

### Closing slides

Rebuild as a clean native closing slide.

- do not keep a raw screenshot unless explicitly requested

## Step 5 — Rebuild in native-first batches

Do not create a screenshot-based interim deck as a normal workflow.

A good workflow is:

1. extract and inventory the full deck
2. identify the next batch of slides that can be rebuilt confidently
3. implement those slides directly as native DECKIO slides
4. continue batch by batch until the deck is fully ported

Visual exports are for reference and verification only. They are not the first-pass deliverable.

Suggested order:

1. cover
2. section dividers
3. tables / dashboards with clear data
4. diagrams / frameworks
5. chart-heavy slides
6. thank-you / closing

## Step 6 — Register slides cleanly

When native slides are created:

1. add imports in `deck.config.js`
2. insert them in the correct sequence

Registration should happen exactly as required by `deck-add-slide`.

Do not change unrelated project configuration while porting slides.

## Step 7 — Validate after every batch

For each meaningful batch of slide work:

1. run static diagnostics on changed files
2. run `npm run build`
3. run the dev server
4. inspect the rebuilt slides in the browser
5. look specifically for:
   - overflow
   - cramped tables
   - broken hierarchy
   - misaligned diagrams
   - content clipping
   - slides that copied source flaws instead of improving them

If the rebuilt slide is technically correct but still communicates poorly, keep refining it.

## Step 8 — Quality bar for “done”

A ported slide is done when:

- the message matches the source
- the key facts match the source
- the slide is native DECKIO where practical
- the layout is cleaner than the PowerPoint
- the slide fits without overflow
- the slide follows the active DECKIO descriptor

If a slide is only visually faithful but still a screenshot, it is not fully ported.

## Practical extraction workflow

When a `.pptx` is present, the common workflow is:

1. locate the source file in the workspace
2. configure Python environment if needed for extraction scripts
3. inspect the zipped PPTX XML for slide text and media references
4. export slide previews to `src/data/ppt-export/`
5. extract reusable business content into `src/data/*.js`
6. rebuild slides incrementally as native components

## Anti-patterns

Avoid these while porting:

1. Replacing a PowerPoint with nothing but full-slide screenshots
2. Reproducing ugly overlap or clutter because “that is what the PPT does”
3. Hardcoding large tables or metrics directly in JSX when they belong in data
4. Losing slide meaning while making the slide look prettier
5. Over-decorating a clean source slide with unnecessary DECKIO effects
6. Porting application chrome from dashboard screenshots that does not matter to the audience
7. Letting dense tables overflow instead of compacting the design

## Handoff expectations

When reporting back after a batch, summarize:

- which slide numbers were ported natively
- whether build passed
- whether visual inspection passed
- any remaining fidelity risks or slides needing a second pass

## Quick Checklist

- [ ] Read deck config and active descriptor first
- [ ] Read `deck-add-slide/SKILL.md` before rebuilding any slide
- [ ] Extract source slide text and visual previews
- [ ] Build a slide inventory before coding
- [ ] Decide native vs hybrid per slide
- [ ] Move reusable content into `src/data/`
- [ ] Rebuild slides semantically, not as screenshots
- [ ] Ensure each rebuilt slide individually complies with `deck-add-slide`, `slide-jsx.instructions.md`, and `slide-css.instructions.md`
- [ ] Improve weak source layout instead of copying it
- [ ] Register slides progressively in `deck.config.js`
- [ ] Validate each batch with diagnostics, build, and browser preview
- [ ] Report what is done natively and what still needs implementation