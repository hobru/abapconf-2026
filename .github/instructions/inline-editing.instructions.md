---
description: "Use when creating or editing slides. Explains how to mark user-facing text as editable with <Editable> and how to make user-content lists drag-reorderable with <EditableList>."
applyTo: "**/slides/**/*.jsx"
---

# Inline Editing — Marking Text as Editable

## When to use `<Editable>`

Wrap **user-facing presentation content** (titles, subtitles, body copy, captions, labels, footer text) in `<Editable>` so users can double-click to edit during local development.

### ✅ DO wrap

- Slide titles, headings, subheadings
- Body text, descriptions, captions
- List item text, bullet points
- Quote text, testimonials
- Footer text passed to `<BottomBar>`
- Labels, badges, and tags that carry semantic meaning
- Data labels and metric titles

### ❌ DO NOT wrap

- Decorative text (e.g., "DECKIO" watermark, brand lockups)
- Icon glyphs, emoji used as decorative elements
- Structural CSS classes or layout text
- Code snippets, syntax-highlighted content (unless it's example code the user would customize)
- Fixed UI labels that are part of the slide chrome (e.g., "Step 1 of 3" counters)

## Import

```jsx
import { Editable, EditableList } from '@deckio/deck-engine'
// or
import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
```

Drop `EditableList` if the slide has no user-content arrays.

## Basic usage

```jsx
<Editable as="h1" id="cover.title" className={styles.title}>
  My Presentation Title
</Editable>

<Editable as="p" id="slide.description">
  This is a description paragraph.
</Editable>

<Editable as="span" id="metric.label">Revenue</Editable>
```

## Props

- **`id`** (required): Unique field identifier. Use dot-notation for hierarchy (e.g., `cover.title`, `features.item1.title`)
- **`as`**: HTML tag (default `span`). Use `h1`, `h2`, `h3`, `p`, `span`, etc.
- **`className`**: CSS classes to apply
- **`multiline`**: Set to `true` for multi-line text (e.g., paragraphs, descriptions). Allows Shift+Enter for line breaks.
- **`allowEmpty`**: Set to `true` if the field can be empty. By default, empty values are rejected.

## BottomBar footer pattern

When passing footer text to `<BottomBar>`, wrap it in `<Editable>`:

```jsx
<BottomBar text={<Editable as="span" id="slide.footer">Footer Text</Editable>} />
```

If the footer is optional/dynamic:

```jsx
<BottomBar text={footerText && <Editable as="span" id="slide.footer">{footerText}</Editable>} />
```

## Reorderable lists — `<EditableList>` (preferred for user-content arrays)

Any slide that renders a list of user content (cards, bullets, steps, KPIs, features) MUST wrap the `.map()` in `<EditableList>` so users can drag-reorder items in dev. Each item in the source array MUST carry a stable `id` field.

```jsx
import styles from './FeaturesSlide.module.css'

const features = [
  { id: 'speed',   title: 'Fast',     desc: '…' },
  { id: 'quality', title: 'Reliable', desc: '…' },
]

<EditableList
  id="features.items"
  items={features}
  keyOf={(f) => f.id}
  className={styles.featuresGrid}
  itemClassName={styles.featureItem}
>
  {(f) => (
    <article>
      <Editable as="h3" id={`features.items.${f.id}.title`}>{f.title}</Editable>
      <Editable as="p"  id={`features.items.${f.id}.desc`}>{f.desc}</Editable>
    </article>
  )}
</EditableList>
```

Companion CSS module (the list container MUST establish a slide-aware layout — see density limits in `deck-add-slide/SKILL.md`):

```css
/* FeaturesSlide.module.css */
/* Keep the grid content-sized. The slide's .body uses
   `justify-content: center; flex: 1` to vertically center its child
   blocks — adding `flex: 1` here would stretch the grid to fill .body
   and pin items to the top. */
.featuresGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}
.featureItem { min-width: 0; }
```

### Slides are fixed-height — the list container must constrain layout

`<EditableList>` renders a plain container. **The container must establish layout that fits the slide's fixed canvas** (a grid, a flex row with wrapping, etc.), otherwise items stack vertically in source order and overflow off-slide.

Two ways to give it a layout:

1. **Pass your own `className`** (recommended) — full control over columns, gap, and per-density tuning (cards 3-col ≤ 6 items, cards 2-col ≤ 4, bullets ≤ 6–8, timeline 3–4).
2. **Omit `className`** — `<EditableList>` falls back to the defensive `.deckio-editable-list` default (responsive `auto-fit minmax(220px, 1fr)` grid shipped in `editable.css` since v1.17.2). Safe for cards/features but not tuned for compact bullet lists or timelines — those should pass a `className`.

### Props

- **`id`** (required): the FIELD id where the order is saved. Use the same `slide.list` namespace as the inner Editables (e.g., `features.items`).
- **`items`** (required): the source array. Each item MUST have a stable `id`.
- **`keyOf`** (required): function returning the stable item ID. Use `(i) => i.id`. **Never** use the array index — index keys silently disable reorder.
- **`className`** (recommended): wrapper class that establishes the slide-aware layout. Replaces the defensive default when provided.
- **`itemClassName`** (optional): class for each item wrapper. Useful for `min-width: 0` so grid cells don't blow out on long text.
- **`onReorder`** (optional): callback after a successful drag. Useful for slides with side state (e.g., a "visible up to step N" counter that should reset on reorder).

### When NOT to wrap

Skip `<EditableList>` only for:
- Decorative arrays (orbs, dots, glyphs)
- Icon grids (e.g., a Microsoft Fabric workload icon board)
- System-generated arrays the user can't reorder semantically (e.g., a `useSlides()` thumbnail strip)

### Production behavior

`<EditableList>` is a prod-safe shell — it imports zero drag-and-drop code in production builds. The sortable variant is lazy-loaded only in dev. Zero bundle cost.

### Bare `.map()` is now a code-review smell

If a slide has `{items.map((i) => <Card .../>)}` over a user-content array and no `<EditableList>` wrapper, flag it. The fix is mechanical:
1. Add `id` to every item in the source data
2. Wrap the `.map()` in `<EditableList id="<slide>.<list>" items={items} keyOf={(i) => i.id} className={styles.listClass}>`
3. The render function `(i) => …` replaces the `.map()` callback body
4. Make sure the companion CSS module class establishes a layout that fits the slide

## Conditional content

If the content is optional, only render `<Editable>` when the content exists:

```jsx
{tagline && <Editable as="p" id="slide.tagline">{tagline}</Editable>}
```

## Combining with other components

`<Editable>` can wrap text inside shadcn components:

```jsx
<Badge variant="outline">
  <Editable as="span" id="badge.label">Premium</Editable>
</Badge>

<Button>
  <Editable as="span" id="button.label">Click Me</Editable>
</Button>

<CardTitle>
  <Editable as="span" id="card.title">Card Title</Editable>
</CardTitle>
```

## ID naming conventions

Use hierarchical dot-notation:

- `cover.title`, `cover.subtitle`, `cover.footer`
- `features.heading`, `features.lead`
- `features.items.<itemId>.title`, `features.items.<itemId>.desc`
- `step1.title`, `step2.description`
- `thankYou.title`, `thankYou.subtitle`, `thankYou.footer`

Avoid generic IDs like `text1`, `paragraph`, `heading`. Use semantic names that describe the content's role.

## Production behavior

In production builds or when the inline editing provider is not present:
- `<Editable>` renders as a plain HTML element (no special behavior)
- No event listeners, no contenteditable attribute
- Zero bundle overhead

## Edge cases

### Default/fallback content

```jsx
<Editable as="p" id="slide.subtitle">
  {subtitle || <>Default subtitle text</>}
</Editable>
```

### Props passed to underlying element

`<Editable>` forwards props to the underlying HTML element:

```jsx
<Editable as="h1" id="title" className={styles.hero} style={{ color: 'red' }}>
  Title
</Editable>
```

Renders as `<h1 className="styles.hero deckio-editable" style="..." data-deckio-field="title">`.

## What NOT to do

❌ **Do NOT nest `<Editable>` inside another `<Editable>`**

```jsx
// BAD
<Editable as="h1" id="title">
  <Editable as="span" id="highlight">Word</Editable>
</Editable>
```

❌ **Do NOT use the same ID twice**

```jsx
// BAD — IDs must be unique per deck
<Editable id="title">Slide 1</Editable>
<Editable id="title">Slide 2</Editable>
```

❌ **Do NOT wrap large blocks with mixed structural + semantic content**

```jsx
// BAD — wrap only the text, not the container
<Editable as="div" id="section">
  <h2>Title</h2>
  <p>Description</p>
</Editable>

// GOOD — wrap individual text elements
<div>
  <Editable as="h2" id="section.title">Title</Editable>
  <Editable as="p" id="section.desc">Description</Editable>
</div>
```

❌ **Do NOT use `<EditableList>` with index keys or stringified indices**

```jsx
// BAD — index keys disable reorder (silent in prod, dev warns)
<EditableList id="items" items={items} keyOf={(_, i) => String(i)}>

// BAD — no `id` on source items
const items = [{ title: 'A' }, { title: 'B' }]

// GOOD — stable `id` per item
const items = [{ id: 'a', title: 'A' }, { id: 'b', title: 'B' }]
<EditableList id="items" items={items} keyOf={(i) => i.id}>
```

## When generating new slides

Always wrap user-facing text in `<Editable>` by default. Follow the patterns in the scaffolded CoverSlide and shadcn slide templates (check `coverSlideJsx`, `coverSlideJsxShadcn`, `featuresSlideJsxShadcn`, etc. in `create-deckio/utils.mjs` and `create-deckio/index.mjs`).

## Related

- **Editable component implementation**: `packages/deck-engine/components/Editable.jsx`
- **EditableList component implementation**: `packages/deck-engine/components/EditableList.jsx`
- **Scaffold templates**: `packages/create-deckio/index.mjs`, `packages/create-deckio/utils.mjs`
- **Tests**: `packages/create-deckio/__tests__/utils.test.js` (search for "inline editing"), `packages/deck-engine/__tests__/editable-list.test.js`
