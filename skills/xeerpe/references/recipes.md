# xeerpe recipes

All recipes use only `import { Builder, Preset, colors } from 'xeerpe'`. Apply the result as an inline style.

## Glowing orange dark panel

```ts
new Builder()
  .radialGradient({ from: '#FF7A18', to: 'transparent', position: '75% 25%' })
  .linearGradient({ from: '#1a0b05', to: '#060302', angle: '160deg' })
  .dots({ color: '#FF7A18', size: '24px', opacity: 0.14 })
  .grain({ intensity: 2 })
  .toStyle()
```

## Animated aurora (needs animations.css)

```ts
new Builder()
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

## Multi-stop linear gradient

```ts
new Builder()
  .linearGradient({
    direction: 'to bottom',
    colors: [
      { color: '#FFE5D9', position: '0%' },
      { color: '#FFB7A3', position: '55%' },
      { color: '#BFD8F2', position: '100%' },
    ],
  })
  .toStyle()
```

## Gradient text

```ts
const textStyle = new Builder().linearGradient({ from: '#5EB847', to: '#BFD43F', angle: '135deg' }).toTextStyle()
// <h1 style={textStyle}>Hello</h1>
```

## Preset plus film look

```ts
new Preset('sunrise')
  .grain({ intensity: 1.5 })
  .vignette({ color: '#7c2d12', intensity: 0.2, spread: 0.5 })
  .toStyle()
```

## Shimmering loading skeleton (needs animations.css)

```ts
new Builder()
  .linearGradient({ colors: ['#1f2937', '#374151', '#1f2937'], angle: '90deg' })
  .shimmer({ duration: '1.5s' })
  .toStyle()
```

## Frosted glass panel

```ts
new Builder().blur({ amount: '12px', type: 'backdrop' }).toStyle()
// place over a colorful background; add a translucent background color in your own CSS
```

## Computed from a theme

```ts
const bg = (accent: string, base: string) =>
  new Builder()
    .radialGradient({ from: accent, to: 'transparent', position: '80% 10%' })
    .linearGradient({ from: base, to: '#000000', angle: '180deg' })
    .vignette({ intensity: 0.3 })
    .toStyle()
```
