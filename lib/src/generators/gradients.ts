import { BuilderLayer, CSSProperties } from "../models";
import {
    ConicGradientOptions,
    GradientColorStop,
    GradientOptions,
    GradientType,
    LinearGradientOptions, MeshGradientOptions,
    RadialGradientOptions,
} from "../models";
import { isValidAngle, isValidDirection, isValidPosition } from "../validations";

const formatColorStop = (stop: GradientColorStop): string => {
    if (typeof stop === 'string') return stop

    const { color, position } = stop
    if (!position) return color
    if (!isValidPosition(position)) return color

    return `${color} ${position}`
}

export const linearGradientBuilder = (options: LinearGradientOptions): string => {
    const direction =
        options.angle && isValidAngle(options.angle)
            ? options.angle
            : options.direction && isValidDirection(options.direction)
                ? options.direction
                : '135deg'

    const colors = options.colors?.length
        ? options.colors.map(formatColorStop).join(', ')
        : `${options.from}, ${options.to}`

    const size = options.size ? ` ${options.size}` : ''
    return `linear-gradient(${direction}, ${colors}${size})`
}
export const radialGradientBuilder = (options: RadialGradientOptions): string => {
    const shape = options.shape === null ? '' : `${options.shape ?? 'circle'} `
    const size = options.size ? ` ${options.size}` : ''
    const position = `at ${options.position ?? 'center'}`

    const fromStop = options.colorFromPosition ? ` ${options.colorFromPosition}` : ''
    const toStop = options.colorToPosition ? ` ${options.colorToPosition}` : ''

    const colors = `${options.from}${fromStop}, ${options.to}${toStop}`
    return `radial-gradient(${shape}${size} ${position}, ${colors})`
}

export const conicGradientBuilder = (options: ConicGradientOptions): string => {
    const angle =
        options.angle && isValidAngle(options.angle)
            ? `from ${options.angle} `
            : ''

    const position = `at ${options.position ?? 'center'}`

    const colors = options.colors?.length
        ? options.colors.map(formatColorStop).join(', ')
        : `${options.from}, ${options.to}`

    return `conic-gradient(${angle}${position}, ${colors})`
}

export const meshGradient = (options: MeshGradientOptions): string => {
    return options.layers
        .map((layer: RadialGradientOptions) => {
            layer.shape = layer.shape ?? null
            const gradient = radialGradientBuilder(layer)
            return `${gradient}`
        })
        .join(', ')
}



export const buildGradientByType = (type: GradientType, options: GradientOptions): string => {
    switch (type) {
        case 'linear': return linearGradientBuilder(options as LinearGradientOptions)
        case 'radial': return radialGradientBuilder(options as RadialGradientOptions)
        case 'conic': return conicGradientBuilder(options as ConicGradientOptions)
        case 'mesh': return meshGradient(options as MeshGradientOptions)
        default: throw new Error(`Unknown gradient type: ${type}`)
    }
}

export const buildGradientLayer = (type: GradientType, options: GradientOptions): BuilderLayer => {
    const isMesh = type === 'mesh'

    const properties: CSSProperties = {
        ...(isMesh && {
            backgroundImage: buildGradientByType(type, options),
            backgroundColor: (options as MeshGradientOptions).background,
        }),
        ...(!isMesh && {
            background: buildGradientByType(type, options),
        }),
        backgroundSize: options.backgroundSize ?? 'auto',
    }

    return { type: 'gradient', properties }
}