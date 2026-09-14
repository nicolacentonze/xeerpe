<p align="center">
  <br><br>
  <picture>
    <img src="https://raw.githubusercontent.com/nicolacentonze/xeerpe/main/lib/media/xeerpe.png" height="80">
  </picture>
  <br><br>
</p>

<h3 align="center">craft CSS backgrounds, fluently.</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/xeerpe"><img src="https://img.shields.io/npm/v/xeerpe.svg" alt="npm version"></a>
  <a href="https://github.com/nicolacentonze/xeerpe/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/xeerpe.svg" alt="MIT license"></a>
  <a href="https://xeerpe.io"><img src="https://img.shields.io/badge/docs-xeerpe.io-blue" alt="Documentation"></a>
</p>

---

<b>xeerpe</b> is a library for building CSS backgrounds with a fluent, chainable API: gradients, effects, filters, patterns, animations. Chain what you need, call `.toStyle()`, done!

## Installation

```bash
npm install xeerpe
```

## Features

- Gradients — linear, radial, conic, mesh
- Effects — noise, vignette, grain, glow
- Filters — blur
- Patterns — dots, grid
- Animations — pulse, rotate, breathe, aurora
- Text fills — `.toTextStyle()` for gradient text

## Quick start

```ts
import { Builder } from 'xeerpe'

// Background
const backgroundStyle = new Builder()
    .linearGradient({ from: '#050705', to: '#0a0f0a', angle: '135deg' })
    .dots()
    .toStyle()

// Gradient text
const textStyle = new Builder()
    .linearGradient({ from: '#050705', to: '#0a0f0a', angle: '135deg' })
    .toTextStyle()
```

## Documentation

Full guide and API reference at **[xeerpe.io](https://xeerpe.io)**.

## License

Copyright (c) 2026 **Nicola Centonze**

Released under the MIT License.