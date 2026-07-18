import {BuilderLayer, CSSProperties, EffectOptions, EffectType, NoiseOptions} from "../models";

export const generateNoiseEffect = (options: NoiseOptions): string => {

    const {
        opacity = 1,
        scale = 0.65,
        type = 'fractalNoise',
        octaves = 16,
    } = options

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                        <filter id="n">
                            <feTurbulence type="${type}" baseFrequency="${scale}" numOctaves="${octaves}" stitchTiles="stitch"/>
                            <feColorMatrix type="saturate" values="0"/>
                        </filter>
                        <rect width="200" height="200" filter="url(#n)" opacity="${opacity}"/>
                    </svg>`


    const encoded = encodeURIComponent(svg);
    return `url("data:image/svg+xml,${encoded}")`;

}

export const buildEffectByType = (type: EffectType, options: EffectOptions): string => {
    switch (type) {
        case 'noise':
            return generateNoiseEffect(options as NoiseOptions)
        default:
            throw new Error(`Unknown gradient type: ${type}`)
    }
}

export const buildEffectLayer = (type: EffectType, options: EffectOptions): BuilderLayer => {
    const properties: CSSProperties = {
        backgroundImage: buildEffectByType(type, options),
        backgroundSize: options.backgroundSize ?? 'auto'
    }
    return {type: 'effect', properties}
}