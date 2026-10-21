# xeerpe API reference (v1.0.9)

> Generated file. Do not edit by hand.

## Builder methods

Every method returns the builder, so calls chain. Shortcut methods take optional options; the generic ones require them.

| Method | Options type |
| --- | --- |
| `linearGradient / radialGradient / conicGradient / meshGradient` | LinearGradientOptions / RadialGradientOptions / ConicGradientOptions / MeshGradientOptions (required) |
| `gradient(type, options)` | GradientOptions |
| `dots / grid / stars / rays` | DotsOptions / GridOptions / StarsOptions / RaysOptions (optional) |
| `noise / vignette / grain / glow` | NoiseOptions / VignetteOptions / GrainOptions / GlowOptions (optional) |
| `blur` | BlurOptions (optional) |
| `pulse / rotate / breathe / aurora / shimmer / liquid / plasma / float / drift` | AnimationOptions (optional) |
| `pattern / effect / filter / animation (type, options)` | generic forms, options required (use {} for defaults) |
| `toStyle()` | Record<string, string>, camelCase CSS properties |
| `toTextStyle()` | Record<string, string>, gradient-filled text |

`new Preset(name)` extends `Builder`; unknown names throw `Preset "<name>" not found`.

## Option types (from lib/src/models)

### gradient.ts

```ts
export type GradientType = 'linear' | 'radial' | 'conic' | 'mesh'
export type LinearGradientDirection =
    'to top' | 'to bottom' | 'to left' | 'to right' | 'to top right' | 'to bottom right' | 'to top left' | 'to bottom left'
export type LinearGradientAngle = `${number}deg` | `${number}rad` | `${number}grad` | `${number}turn`
export type RadialGradientShape = 'circle' | 'ellipse' | null
export type RadialGradientSize = 'closest-side' | 'closest-corner' | 'farthest-side' | 'farthest-corner' | string
export type LinearGradientPositionUnit =
    `${number}%` | `${number}px` | `${number}rem` | `${number}em` | `${number}vh` | `${number}vw` | `${number}vmin` | `${number}vmax`

export type LinearGradientPosition = LinearGradientPositionUnit | `calc(${string})`

export type GradientOptions = LinearGradientOptions | RadialGradientOptions | ConicGradientOptions | MeshGradientOptions

export type GradientColorStop = string | { color: string; position?: LinearGradientPosition }

export interface GradientBase {
    from?: string
    to?: string
    backgroundSize?: string
}

export interface LinearGradientOptions extends GradientBase {
    colors?: (string | GradientColorStop)[]
    angle?: LinearGradientAngle
    direction?: LinearGradientDirection
    size?: string
}

export interface RadialGradientOptions extends GradientBase {
    shape?: RadialGradientShape
    position?: string
    size?: RadialGradientSize
    colorFromPosition?: string
    colorToPosition?: string
}

export interface ConicGradientOptions extends GradientBase {
    colors?: (string | GradientColorStop)[]
    angle?: string
    position?: string
}

export interface MeshGradientOptions extends GradientBase {
    background: string
    layers: RadialGradientOptions[]
}
```

### pattern.ts

```ts
export type PatternType = 'dots' | 'grid' | 'stars' | 'rays'

export interface PatterBaseOptions {
    color?: string
    background?: string
    size?: string
    opacity?: number
    strokeWidth?: string
    backgroundSize?: string
}

export interface DotsOptions extends PatterBaseOptions {
    color?: string
    background?: string
    size?: string
    spacing?: string
    style?: string
    opacity?: number
}

export interface GridOptions extends PatterBaseOptions {}

export interface StarsOptions extends PatterBaseOptions {
    count?: number
    seed?: number
}

export interface RaysOptions extends PatterBaseOptions {
    count?: number
    position?: string
    angle?: string
}

export type PatternOptions = DotsOptions | GridOptions | StarsOptions | RaysOptions
```

### effects.ts

```ts
export type EffectType = 'noise' | 'vignette' | 'grain' | 'glow'
export type EffectOptions = NoiseOptions | VignetteOptions | GrainOptions | GlowOptions
export type NoiseType = 'turbulence' | 'fractalNoise'
export type GlowType = 'outer' | 'inner'

export interface NoiseOptions {
    opacity?: number
    scale?: number
    type?: NoiseType
    octaves?: number
    backgroundSize?: string
}

export interface VignetteOptions {
    color?: string
    intensity?: number
    spread?: number
    backgroundSize?: string
}

export interface GrainOptions {
    intensity?: number
    size?: string
    animated?: boolean
    backgroundSize?: string
}

export interface GlowOptions {
    amount?: string
    spread?: string
    x?: string
    y?: string
    color?: string
    type?: GlowType
}
```

### filters.ts

```ts
export type FilterType = 'blur'
export type BlurType = 'backdrop' | 'blur'

export type FilterOptions = BlurOptions

export interface BlurOptions {
    amount?: string
    type?: BlurType
}
```

### animation.ts

```ts
export type AnimationType = 'pulse' | 'rotate' | 'breathe' | 'aurora' | 'shimmer' | 'liquid' | 'plasma' | 'float' | 'drift'

export type AnimationTarget = 'gradients' | 'patterns' | 'all'

export interface AnimationOptions {
    duration?: string
    easing?: string
    direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
    iterationCount?: number | 'infinite'
    target?: AnimationTarget
}
```

## Input validation (from lib/src/validations)

Values that fail these checks are rejected by the builder. Keep inputs inside these shapes.

### color.ts

```ts
export const HEX_REGEX = /^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/
const COLOR_FUNC_REGEX = /^(rgb|rgba|hsl|hsla|oklch|color|hwb|lch|lab)\(.+\)$/i
const NAMED_COLOR_REGEX = /^[a-zA-Z]+$/

export const isHexColor = (value: string): boolean => HEX_REGEX.test(value.trim())

export const isValidColor = (value: string): boolean => {
    const t = value.trim()
    return (
        HEX_REGEX.test(t) ||
        COLOR_FUNC_REGEX.test(t) ||
        t === 'transparent' ||
        t === 'currentColor' ||
        t === 'inherit' ||
        NAMED_COLOR_REGEX.test(t)
    )
}
```

### angle.ts

```ts
import { LinearGradientAngle } from '../models/index.ts'

const ANGLE_UNIT_REGEX = /^-?\d*\.?\d+(deg|rad|grad|turn)$/

export const isValidAngle = (value: string): value is LinearGradientAngle => ANGLE_UNIT_REGEX.test(value.trim())
```

### backgroundSize.ts

```ts
const GLOBALS: readonly string[] = ['auto', 'cover', 'contain', 'initial', 'inherit', 'unset']
const SIZE_TOKEN_REGEX = /^(\d*\.?\d+(px|%|rem|em|vh|vw|vmin|vmax))$/
const CALC_REGEX = /^calc\(.+\)$/

const isValidSizeToken = (value: string): boolean => GLOBALS.includes(value) || SIZE_TOKEN_REGEX.test(value) || CALC_REGEX.test(value)

export const isValidBackgroundSize = (value: string): boolean => {
    const trimmed = value.trim()
    if (GLOBALS.includes(trimmed)) return true
    const parts = trimmed.split(/\s+/)
    return parts.length <= 2 && parts.every(isValidSizeToken)
}
```

### cssPosition.ts

```ts
const KEYWORD_REGEX = /^(top|bottom|left|right|center)$/
const LENGTH_REGEX = /^-?\d*\.?\d+(%|px|rem|em|vh|vw|vmin|vmax)$/
const CALC_REGEX = /^calc\(.+\)$/

const VALID_DOUBLE_KEYWORDS: readonly string[] = [
    'top left',
    'top center',
    'top right',
    'center left',
    'center center',
    'center right',
    'bottom left',
    'bottom center',
    'bottom right',
    'left top',
    'left center',
    'left bottom',
    'right top',
    'right center',
    'right bottom',
]

const isValidToken = (value: string): boolean => KEYWORD_REGEX.test(value) || LENGTH_REGEX.test(value) || CALC_REGEX.test(value)

export const isValidCSSPosition = (value: string): boolean => {
    const trimmed = value.trim()
    if (trimmed === 'center') return true
    if (VALID_DOUBLE_KEYWORDS.includes(trimmed)) return true
    const parts = trimmed.split(/\s+/)
    return parts.length <= 2 && parts.every(isValidToken)
}
```

### directions.ts

```ts
import { LinearGradientDirection } from '../models/index.ts'

const VALID_DIRECTIONS: readonly LinearGradientDirection[] = [
    'to top',
    'to bottom',
    'to left',
    'to right',
    'to top right',
    'to bottom right',
    'to top left',
    'to bottom left',
]

export const isValidDirection = (value: string): value is LinearGradientDirection => (VALID_DIRECTIONS as readonly string[]).includes(value)
```

### position.ts

```ts
import { LinearGradientPosition } from '../models/index.ts'

const POSITION_REGEX = /^-?\d*\.?\d+(%|px|rem|em|vh|vw|vmin|vmax)$/
const CALC_REGEX = /^calc\(.+\)$/

export const isValidPosition = (value: string): value is LinearGradientPosition => {
    const trimmed = value.trim()
    return POSITION_REGEX.test(trimmed) || CALC_REGEX.test(trimmed)
}
```

### radial.ts

```ts
import { RadialGradientShape, RadialGradientSize } from '../models/index.ts'

export const isValidRadialShape = (value: string | null): value is RadialGradientShape =>
    value === null || value === 'circle' || value === 'ellipse'

const VALID_SIZE_KEYWORDS: readonly string[] = ['closest-side', 'closest-corner', 'farthest-side', 'farthest-corner', 'auto']
const LENGTH_REGEX = /^\d*\.?\d+(px|%|rem|em|vh|vw)(\s+\d*\.?\d+(px|%|rem|em|vh|vw))?$/
const CALC_REGEX = /^calc\(.+\)$/

export const isValidRadialSize = (value: string): value is RadialGradientSize => {
    const trimmed = value.trim()
    return VALID_SIZE_KEYWORDS.includes(trimmed) || LENGTH_REGEX.test(trimmed) || CALC_REGEX.test(trimmed)
}
```
