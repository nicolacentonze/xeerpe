---
name: xeerpe
description: Build CSS backgrounds and gradient text with the xeerpe TypeScript library (chainable Builder, 229 presets). Use when the user wants layered or mesh gradients, grain/noise/vignette/glow, dots/grid/stars/rays patterns, animated gradient backgrounds, gradient text, or mentions xeerpe. Not for a single static linear-gradient, which plain CSS handles better.
---

# xeerpe

xeerpe turns a chain of layers into one inline-style object.

Zero dependencies, works in React, Vue, Angular and plain JS. Package: `xeerpe`.

## When to use / not use

Use it for layered backgrounds, animated backgrounds without hand-written keyframes, backgrounds computed from props/state/theme, presets, and gradient text. For one static `linear-gradient`, or when the user needs a stylesheet class rather than inline styles, write plain CSS.

## Core pattern

```ts
import { Builder } from 'xeerpe'

const style = new Builder()
  .meshGradient({
    background: '#04121c',
    layers: [{ position: '15% 25%', from: 'rgba(16,185,129,0.8)', to: 'transparent', colorToPosition: '60%' }],
  })
  .dots({ color: '#10b981', size: '24px', opacity: 0.14 })
  .grain({ intensity: 2 })
  .toStyle()
```

- React: `<div style={style} />`; Vue: `:style="style"`; Angular: `[style]="style"`; vanilla: `Object.assign(el.style, style)`.
- `toStyle()` returns an object, not a string. `el.style.cssText = style` does not work.
- Gradient text: `new Builder().linearGradient({...}).toTextStyle()`. It returns `backgroundClip`/`WebkitBackgroundClip: 'text'`, transparent `color`/`WebkitTextFillColor`, plus `backgroundImage`/`backgroundSize`/`backgroundColor`; apply it to the text element.
- Shortcut methods (`grain()`, `vignette()`, `pulse()`, `dots()`, ...) can be called with no arguments; gradient methods need options. Imports: `import { Builder, Preset, colors } from 'xeerpe'`.
- Presets: `new Preset('sunrise').toStyle()`; it is a `Builder`, so keep chaining. Names are in [references/presets.md](references/presets.md); never invent one (unknown names throw).

## Rules that prevent bugs

1. **Layer order is fixed, not chain order.** `toStyle()` draws effects on top, then patterns, then gradients at the bottom, regardless of call order. Within the same kind, earlier calls are drawn first.
2. **Animations need the stylesheet.** Add `import 'xeerpe/animations.css'` once in the app entry. Without it the style applies but nothing moves and there is no error.
3. **Animations don't add a layer**; they add an `animation` property. `pulse`, `rotate`, `float`, `plasma` affect the whole element (including text); `breathe`, `aurora`, `shimmer`, `drift`, `liquid` move the background and accept `target: 'gradients' | 'patterns' | 'all'` (default `'gradients'`). Any other `target` throws.
4. Animation option values (`duration`, `easing`, ...) are not validated. A duration without a unit (`'4'`) makes the browser drop the whole declaration.
5. **Validated inputs**: colors (hex, `rgb()/hsl()/oklch()...`, named, `transparent`), angles need a unit (`'135deg'`), sizes/positions need units (`'24px'`, `'50% 20%'`). Exact rules in [references/api.md](references/api.md).
6. `meshGradient` requires `background` and `layers` (array of radial options). Use `to: 'transparent'` plus `colorToPosition` so blobs fade out.
7. `toStyle()` always sets `backgroundPosition: 'center'`.

## Picking tools

- Base color/shape: `linearGradient` (`from`/`to`, or `colors` with stop positions, `angle` or `direction`), `radialGradient`, `conicGradient`, `meshGradient`.
- Texture: `grain`, `noise`, `vignette`, `glow`.
- Pattern: `dots`, `grid`, `stars`, `rays`.
- Blur: `blur({ type: 'backdrop' })` for frosted glass.
- Motion: see rule 3 and [references/animations.md](references/animations.md).
- Ready-made look: `Preset`, then extend.

## References

- [references/api.md](references/api.md): all methods, option types, validation rules (generated).
- [references/presets.md](references/presets.md): preset names by category and the `colors` palette (generated).
- [references/animations.md](references/animations.md): the nine animations, defaults, targets.
- [references/recipes.md](references/recipes.md): complete examples to adapt.

Full docs: https://xeerpe.io (LLM index at https://xeerpe.io/llms.txt).
