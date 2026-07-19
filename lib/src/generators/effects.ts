import {BuilderLayer, CSSProperties, EffectOptions, EffectType, NoiseOptions, VignetteOptions} from "../models";
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

export const buildEffectByType = (type: EffectType, options: EffectOptions): string => {
    switch (type) {
        case 'noise':
            return generateNoiseEffect(options as NoiseOptions)
        case 'vignette':
            return generateVignetteEffect(options as VignetteOptions)
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