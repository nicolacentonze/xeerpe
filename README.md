<p align="center">
  <br><br>
  <picture>
    <img src="https://raw.githubusercontent.com/nicolacentonze/xeerpe/main/lib/media/xeerpe.png" height="100">
  </picture>
  <br><br>
</p>

<h3 align="center">Craft. Chain. Done.</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/xeerpe"><img src="https://img.shields.io/npm/v/xeerpe.svg" alt="npm version"></a>
  <a href="https://github.com/nicolacentonze/xeerpe/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/xeerpe.svg" alt="MIT license"></a>
  <a href="https://xeerpe.io"><img src="https://img.shields.io/badge/docs-xeerpe.io-5EB847" alt="Documentation"></a>
</p>

---

xeerpe is a TypeScript library for building CSS backgrounds and gradient text with a chainable API. It stacks gradients (linear, radial, conic and mesh), patterns, effects, filters and animations into a single style object that works anywhere inline styles do: React, Vue, Angular or plain JavaScript.

Zero dependencies, fully typed, MIT licensed.

## When to use xeerpe

Use it when you want to:

- **Layer a background**: a mesh gradient with grain, a dotted grid over a glow, or a vignette on top, written as one readable chain instead of a long `background` declaration.
- **Animate a background** without writing keyframes by hand: pulse, aurora, shimmer, drift and more, from one method.
- **Compute a background in JavaScript**: colors, angles and sizes that come from props, state or a theme.
- **Start from a preset**: more than 200 ready-made backgrounds (metals, gems, sky, neon and more), in one line.
- **Fill text with a gradient** using the same chain.

A single static `linear-gradient` is usually simpler as plain CSS, and xeerpe returns inline styles, so it is not a replacement for a hand-written stylesheet.

## Installation

```bash
npm install xeerpe
```

## Quick start

```ts
import { Builder } from 'xeerpe'

const style = new Builder()
    .radialGradient({ from: '#FF7A18', to: 'transparent', position: '75% 25%' })
    .linearGradient({ from: '#1a0b05', to: '#060302', angle: '160deg' })
    .dots({ color: '#FF7A18', size: '24px', opacity: 0.14 })
    .grain({ intensity: 2 })
    .toStyle()
```

The result is a plain object, so it works anywhere that accepts inline styles:

```tsx
// React
<div style={style} />
```

```vue
<!-- Vue -->
<div :style="style" />
```

It also works in Angular and plain JavaScript. See the [guide](https://www.xeerpe.io/guide/installation#installation) for each framework.

### Animated background

Animations ship with a small stylesheet that you import once:

```ts
import 'xeerpe/animations.css'
```

```ts
const style = new Builder()
    .meshGradient({
        background: '#04121c',
        layers: [
            { position: '15% 25%', from: 'rgba(16,185,129,0.8)', to: 'transparent', colorToPosition: '60%' },
            { position: '85% 30%', from: 'rgba(56,189,248,0.65)', to: 'transparent', colorToPosition: '55%' },
        ],
    })
    .aurora({ duration: '8s' })
    .toStyle()
```

### Gradient text

```ts
const textStyle = new Builder()
    .linearGradient({ from: '#5EB847', to: '#BFD43F', angle: '135deg' })
    .toTextStyle()
```

## Features

- **Gradients**: linear, radial, conic, mesh
- **Patterns**: dots, grid, stars, rays
- **Effects**: noise, vignette, grain, glow
- **Filters**: blur, backdrop filters
- **Animations**: pulse, rotate, breathe, aurora, liquid, plasma, float, drift, shimmer
- **Presets**: ready-made backgrounds
- **Text fills**: `.toTextStyle()` for gradient text
- **Typed and validated**: fully typed, with validation for colors, angles, sizes and positions

## Documentation

Full guide and API reference at **[xeerpe.io](https://xeerpe.io)**.

## License

Copyright (c) 2026 **Nicola Centonze**

Released under the MIT License.