---
description: "How to resolve the active theme descriptor and cross-check designSystem before writing slide JSX or CSS."
applyTo: "**/slides/**"
---

# Descriptor resolution

Before writing slide JSX or CSS, read `deck.config.js` and resolve the active theme descriptor. The descriptor is the source of truth for skeleton, tokens, allowed components, and anti-patterns.

## Resolve the descriptor

1. Read `theme` and `designSystem` from `deck.config.js`.
2. Load the descriptor file:

| Theme | Path |
|---|---|
| Built-in `dark` | `node_modules/@deckio/deck-engine/themes/descriptors/dark.md` |
| Built-in `light` | `node_modules/@deckio/deck-engine/themes/descriptors/light.md` |
| Built-in `shadcn` | `node_modules/@deckio/deck-engine/themes/descriptors/shadcn.md` |
| Custom theme name | `src/themes/<theme>/descriptor.md` or `src/themes/<theme>.descriptor.md` |
| Custom theme via CSS path (e.g. `./src/themes/client-a.css`) | `./src/themes/client-a/descriptor.md` or `./src/themes/client-a.descriptor.md` |

3. If a custom descriptor is missing, fall back to the built-in descriptor implied by `designSystem`:
   - `designSystem === 'shadcn'` → `shadcn`
   - any other value or missing → `dark`

## Cross-check `designSystem`

`designSystem` is the safety check for structure and anti-patterns:

- `designSystem === 'shadcn'` → slide must obey shadcn structure
- any other value or missing → slide must obey the default DECKIO structure

If the descriptor and `designSystem` disagree, follow `designSystem` for structure and flag the mismatch so the project owner can fix the config.

## shadcn supplement

When `designSystem === 'shadcn'`, also read:

- `shadcn-setup.instructions.md` — infrastructure contract
- `shadcn-components.instructions.md` — preinstalled components, migration patterns, MCP expansion workflow

Preinstalled components ready to import:

| Preinstalled | Import |
|---|---|
| `Button` | `'@/components/ui/button'` |
| `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter` | `'@/components/ui/card'` |
| `Badge` | `'@/components/ui/badge'` |
| `Separator` | `'@/components/ui/separator'` |
| `Alert`, `AlertTitle`, `AlertDescription` | `'@/components/ui/alert'` |
| `Aurora`, `BlurText`, `ShinyText`, `DecryptedText`, `SpotlightCard` | `'@/components/ui/<name>'` |

Need something not preinstalled? Add it first via MCP (*"Add Dialog from shadcn"*) or CLI (`npx shadcn@latest add dialog`), then import. Never import a shadcn component file that doesn't exist.

## Do not

- Mix patterns from multiple descriptors in a single slide.
- Recreate a Card / Badge / Button / Alert / Separator with raw `<div>` + CSS when the real component is available.
- Assume the descriptor without reading it — it changes per project.
