import {
    BuilderLayer,
    CSSProperties,
    EffectOptions,
    EffectType,
    GrainOptions,
    NoiseOptions,
    VignetteOptions
} from "../models";
import {clamp, withAlpha} from "../utils";

export const generateNoiseEffect = (options: NoiseOptions): string => {

    const {
        opacity = .25,
        scale = 0.65,
        type = 'fractalNoise',
        octaves = 16,
    } = options

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <filter id="n">
                            <feTurbulence type="${type}" baseFrequency="${scale}" numOctaves="${octaves}" stitchTiles="stitch"/>
                            <feColorMatrix type="saturate" values="0"/>
                        </filter>
                        <rect width="100%" height="100%" filter="url(#n)" opacity="${opacity}"/>
                    </svg>`


    const encoded = encodeURIComponent(svg);
    return `url("data:image/svg+xml,${encoded}")`;

}

export const generateVignetteEffect = (options: VignetteOptions): string => {
    const {
        color = '#000000',
        intensity = 0.2,
        spread = 0.2,
    } = options

    const vignetteColor = withAlpha(color, clamp(intensity, 0, 1))
    const spreadPercentage = Math.round(spread * 100)
    return `radial-gradient(ellipse at center, transparent ${100 - spreadPercentage}%, ${vignetteColor} 100%)`
}

const generateGrainEffect = (options: GrainOptions): string => {
    const {intensity = 1, size = '100%', animated = false} = options
    const opacity = clamp(intensity * 0.08, 0.01, 0.12)

    const filterContent = animated
        ? `<feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch">
                <animate attributeName="baseFrequency" values="0.65;0.68;0.63;0.65" dur="2s" repeatCount="indefinite"/>
            </feTurbulence>`
        : `<feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>`

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100% 100%">
                       <filter id="g" x="0" y="0" width="${size}" height="${size}">
                            ${filterContent}
                            <feColorMatrix type="saturate" values="0"/>
                       </filter>
                     <rect width="${size}" height="${size}" filter="url(#g)" opacity="${opacity}"/>
                  </svg>`

    const encoded = encodeURIComponent(svg);
    return `url("data:image/svg+xml,${encoded}")`;
}

export const buildEffectByType = (type: EffectType, options: EffectOptions): string => {
    switch (type) {
        case 'noise':
            return generateNoiseEffect(options as NoiseOptions)
        case 'vignette':
            return generateVignetteEffect(options as VignetteOptions)
        case 'grain':
            return generateGrainEffect(options as GrainOptions)
        default:
            throw new Error(`Unknown gradient type: ${type}`)
    }
}

export const buildEffectLayer = (type: EffectType, options: EffectOptions): BuilderLayer => {
    const properties: CSSProperties = {
        backgroundImage: buildEffectByType(type, options),
        backgroundSize: options.backgroundSize ?? 'auto',
    }
    return {type: 'effect', properties}
}