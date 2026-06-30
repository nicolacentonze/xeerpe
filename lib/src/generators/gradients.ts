import {BuilderLayer, CSSProperties} from "../models/builder";
import {
    GradientOptions,
    GradientType,
    LinearGradientOptions,
    RadialGradientOptions,
} from "../models/gradient";


export const lineaGradientBuilder = (options: LinearGradientOptions): string => {
    const direction = options.direction ?? '135deg'
    const colors = `${options.from}, ${options.to}`
    const size = options.size ?? ''
    return `linear-gradient(${direction}, ${colors} ${size})`
}

export const radialGradientBuilder = (options: RadialGradientOptions): string => {
    const shape = options.shape ?? 'circle'
    const size = options.size ?? 'closest-side'
    const position = options.position ?? 'center'
    const colors = `${options.from}, ${options.to}`
    return`radial-gradient(${shape} ${size} at ${position}, ${colors})`
}

export const buildByType = (type: GradientType, options: GradientOptions):string => {
    switch (type) {
        case 'linear': return lineaGradientBuilder(options as LinearGradientOptions)
        case 'radial': return radialGradientBuilder(options as RadialGradientOptions)
        default: throw new Error(`Unknown gradient type: ${type}`)
    }
}


export const buildGradientLayer = (type: GradientType, options: GradientOptions): BuilderLayer => {
    const properties: CSSProperties = {
        background: buildByType(type, options),
    }

    if (type === 'linear') {
        const linearOptions = options as LinearGradientOptions
            properties.backgroundSize = linearOptions.backgroundSize ?? 'auto'
    }

    return { type: 'gradient', properties }
}