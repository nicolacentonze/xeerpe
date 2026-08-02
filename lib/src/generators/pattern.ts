import {
    BuilderLayer,
    CSSProperties, DotsOptions, GridOptions,
    PatternOptions, PatternType,
} from "../models/index.ts";
import {parseLength, withAlpha} from "../utils/index.ts";

const dotsBuilder = (options: DotsOptions): string => {
    const {color = '#000000', background = 'transparent', size = '20px', spacing, opacity = 0.2, strokeWidth} = options

    const gap = parseLength(spacing ?? size)
    const r = strokeWidth ? parseLength(strokeWidth).value : parseLength(size).value * 0.15
    const c = withAlpha(color, opacity)

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${gap.value}${gap.unit}" height="${gap.value}${gap.unit}" viewBox="0 0 ${gap.value} ${gap.value}">
                    <rect width="${gap.value}" height="${gap.value}" fill="${background}"/>
                    <circle cx="${gap.value / 2}" cy="${gap.value / 2}" r="${r}" fill="${c}"/>
                </svg>`

    const encoded = encodeURIComponent(svg);
    return `url("data:image/svg+xml,${encoded}")`;
}

const gridBuilder = (options: GridOptions): string => {
    const {color = '#000000', background = 'transparent', size = '40px', opacity = 0.1, strokeWidth = '1px'} = options

    const s = parseLength(size)
    const sw = parseLength(strokeWidth).value
    const c = withAlpha(color, opacity)

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${s.value}${s.unit}" height="${s.value}${s.unit}" viewBox="0 0 ${s.value} ${s.value}">
                    <rect width="${s.value}" height="${s.value}" fill="${background}"/>
                    <path d="M ${s.value} 0 L 0 0 0 ${s.value}" fill="none" stroke="${c}" stroke-width="${sw}"/>
                </svg>`
    const encoded = encodeURIComponent(svg);
    return `url("data:image/svg+xml,${encoded}")`;
}

export const buildPatternByType = (type: PatternType, options: PatternOptions): string => {
    switch (type) {
        case 'dots':
            return dotsBuilder(options as DotsOptions)
        case 'grid':
            return gridBuilder(options as GridOptions)
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