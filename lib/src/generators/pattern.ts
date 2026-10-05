import {
    BuilderLayer,
    CSSProperties, DotsOptions, GridOptions,
    PatternOptions, PatternType, RaysOptions, StarsOptions,
} from "../models/index.ts";
import {parseLength, withAlpha} from "../utils/index.ts";
import {isValidAngle, isValidCSSPosition} from "../validations/index.ts";

const toDataUrl = (svg: string): string =>
    `url("data:image/svg+xml,${encodeURIComponent(svg)}")`

export const dotsBuilder = (options: DotsOptions): string => {
    const {color = '#000000', background = 'transparent', size = '20px', spacing, opacity, strokeWidth} = options

    const gap = parseLength(spacing ?? size)
    const r = strokeWidth ? parseLength(strokeWidth).value : parseLength(size).value * 0.15
    const c = withAlpha(color, opacity, 0.2)

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${gap.value}${gap.unit}" height="${gap.value}${gap.unit}" viewBox="0 0 ${gap.value} ${gap.value}">
                    <rect width="${gap.value}" height="${gap.value}" fill="${background}"/>
                    <circle cx="${gap.value / 2}" cy="${gap.value / 2}" r="${r}" fill="${c}"/>
                </svg>`

    return toDataUrl(svg)
}

export const gridBuilder = (options: GridOptions): string => {
    const {color = '#000000', background = 'transparent', size = '40px', opacity, strokeWidth = '1px'} = options

    const s = parseLength(size)
    const sw = parseLength(strokeWidth).value
    const c = withAlpha(color, opacity, 0.1)

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${s.value}${s.unit}" height="${s.value}${s.unit}" viewBox="0 0 ${s.value} ${s.value}">
                    <rect width="${s.value}" height="${s.value}" fill="${background}"/>
                    <path d="M ${s.value} 0 L 0 0 0 ${s.value}" fill="none" stroke="${c}" stroke-width="${sw}"/>
                </svg>`

    return toDataUrl(svg)
}

export const starsBuilder = (options: StarsOptions): string => {
    const {color = '#ffffff', background = 'transparent', size = '200px', count = 24, seed = 1, opacity, strokeWidth = '1.4px'} = options

    const s = parseLength(size)
    const maxRadius = parseLength(strokeWidth).value
    const c = withAlpha(color, opacity, 0.9)

    // Deterministic pseudo-random sequence: the same seed always draws the same sky
    let state = Math.max(1, Math.round(seed)) % 2147483647
    const random = () => (state = (state * 16807) % 2147483647) / 2147483647

    const stars = Array.from({length: Math.max(0, Math.round(count))}, () => {
        const cx = (random() * s.value).toFixed(1)
        const cy = (random() * s.value).toFixed(1)
        const r = (0.4 + random() * Math.max(0, maxRadius - 0.4)).toFixed(2)
        const o = (0.35 + random() * 0.65).toFixed(2)
        return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}" opacity="${o}"/>`
    }).join('')

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${s.value}${s.unit}" height="${s.value}${s.unit}" viewBox="0 0 ${s.value} ${s.value}">
                    <rect width="${s.value}" height="${s.value}" fill="${background}"/>
                    ${stars}
                </svg>`

    return toDataUrl(svg)
}

export const raysBuilder = (options: RaysOptions): string => {
    const {color = '#000000', background = 'transparent', count = 12, position = 'center', angle = '0deg', opacity} = options

    const c = withAlpha(color, opacity, 0.15)
    const step = 360 / Math.max(1, Math.round(count))
    const half = +(step / 2).toFixed(4)
    const at = isValidCSSPosition(position) ? position : 'center'
    const from = isValidAngle(angle) ? angle : '0deg'

    return `repeating-conic-gradient(from ${from} at ${at}, ${c} 0deg ${half}deg, ${background} ${half}deg ${+step.toFixed(4)}deg)`
}

export const buildPatternByType = (type: PatternType, options: PatternOptions): string => {
    switch (type) {
        case 'dots':
            return dotsBuilder(options as DotsOptions)
        case 'grid':
            return gridBuilder(options as GridOptions)
        case 'stars':
            return starsBuilder(options as StarsOptions)
        case 'rays':
            return raysBuilder(options as RaysOptions)
        default:
            throw new Error(`Unknown pattern type: ${type}`)
    }
}

export const buildPatternLayer = (type: PatternType, options: PatternOptions): BuilderLayer => {
    const properties: CSSProperties = {
        backgroundImage: buildPatternByType(type, options),
        backgroundSize: options.backgroundSize ?? 'auto',
    }

    return {type: 'pattern', properties}
}