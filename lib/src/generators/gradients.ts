import { BuilderLayer, CSSProperties } from "../models/index.ts";
import {
    ConicGradientOptions,
    GradientOptions,
    GradientType,
    LinearGradientOptions,
    MeshGradientOptions,
    RadialGradientOptions,
} from "../models/index.ts";
import {
    isValidAngle,
    isValidDirection,
    isValidPosition,
    isValidRadialShape,
    isValidRadialSize,
    isValidBackgroundSize,
    isValidCSSPosition,
} from "../validations/index.ts";
import { resolveColor, formatColorStop } from "../utils/index.ts";

export const linearGradientBuilder = (options: LinearGradientOptions): string => {
    const direction =
        options.angle && isValidAngle(options.angle)
            ? options.angle
            : options.direction && isValidDirection(options.direction)
                ? options.direction
                : '135deg'

    const colors = options.colors?.length
        ? options.colors.map(formatColorStop).join(', ')
        : `${resolveColor(options.from)}, ${resolveColor(options.to)}`

    const size = options.size ? ` ${options.size}` : ''
    return `linear-gradient(${direction}, ${colors}${size})`
}

export const radialGradientBuilder = (options: RadialGradientOptions): string => {
    const shape = options.shape === undefined
        ? 'circle '
        : options.shape === null
            ? ''
            : isValidRadialShape(options.shape)
                ? `${options.shape} `
                : 'circle '

    const size = options.size && isValidRadialSize(options.size) ? ` ${options.size}` : ''

    const position = `at ${options.position && isValidCSSPosition(options.position) ? options.position : 'center'}`

    const fromStop = options.colorFromPosition && isValidPosition(options.colorFromPosition) ? ` ${options.colorFromPosition}` : ''
    const toStop = options.colorToPosition && isValidPosition(options.colorToPosition) ? ` ${options.colorToPosition}` : ''

    const colors = `${resolveColor(options.from)}${fromStop}, ${resolveColor(options.to)}${toStop}`
    return `radial-gradient(${shape}${size} ${position}, ${colors})`
}

export const conicGradientBuilder = (options: ConicGradientOptions): string => {
    const angle =
        options.angle && isValidAngle(options.angle)
            ? `from ${options.angle} `
            : ''

    const position = `at ${options.position && isValidCSSPosition(options.position) ? options.position : 'center'}`

    const colors = options.colors?.length
        ? options.colors.map(formatColorStop).join(', ')
        : `${resolveColor(options.from)}, ${resolveColor(options.to)}`

    return `conic-gradient(${angle}${position}, ${colors})`
}

export const meshGradient = (options: MeshGradientOptions): string => {
    return options.layers
        .map((layer: RadialGradientOptions) => {
            layer.shape = layer.shape ?? null
            return radialGradientBuilder(layer)
        })
        .join(', ')
}

export const buildGradientByType = (type: GradientType, options: GradientOptions): string => {
    switch (type) {
        case 'linear': return linearGradientBuilder(options as LinearGradientOptions)
        case 'radial': return radialGradientBuilder(options as RadialGradientOptions)
        case 'conic': return conicGradientBuilder(options as ConicGradientOptions)
        case 'mesh': return meshGradient(options as MeshGradientOptions)
        default: throw new Error(`Unknown gradient type: "${type}"`)
    }
}

export const buildGradientLayer = (type: GradientType, options: GradientOptions): BuilderLayer => {
    const isMesh = type === 'mesh'

    const backgroundSize = options.backgroundSize && isValidBackgroundSize(options.backgroundSize)
        ? options.backgroundSize
        : 'auto'

    const properties: CSSProperties = {
        ...(isMesh && {
            backgroundImage: buildGradientByType(type, options),
            backgroundColor: resolveColor((options as MeshGradientOptions).background),
        }),
        ...(!isMesh && {
            background: buildGradientByType(type, options),
        }),
        backgroundSize,
    }

    return { type: 'gradient', properties }
}