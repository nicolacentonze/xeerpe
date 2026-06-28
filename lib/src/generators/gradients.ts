import {BuilderLayer} from "../models/builder";
import {
    GradientOptions,
    GradientType,
    LinearGradientOptions,
    RadialGradientOptions,
} from "../models/gradient";

export const buildGradientLayer = (type: GradientType, options: GradientOptions): BuilderLayer => {
    return {type: 'gradient', css: buildByType(type, options)}
}

export const lineaGradientBuilder = (options: LinearGradientOptions): string => {
    const direction = options.direction ?? '135deg'
    const colors = `${options.from}, ${options.to}`
    return `background: linear-gradient(${direction}, ${colors})`
}

export const radialGradientBuilder = (options: RadialGradientOptions): string => {
    const shape = options.shape ?? 'circle'
    const size = options.size ?? 'closest-side'
    const position = options.position ?? 'center'
    const colors = `${options.from}, ${options.to}`
    return`background: radial-gradient(${shape} ${size} at ${position}, ${colors})`
}

export const buildByType = (type: GradientType, options: GradientOptions):string => {
    switch (type) {
        case 'linear': return lineaGradientBuilder(options as LinearGradientOptions)
        case 'radial': return radialGradientBuilder(options as RadialGradientOptions)
        default: throw new Error(`Unknown gradient type: ${type}`)
    }
}