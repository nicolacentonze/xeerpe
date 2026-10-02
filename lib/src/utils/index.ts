import {CSSLength, GradientColorStop, RgbaColor} from "../models/index.ts";
import {isHexColor, isValidColor, isValidPosition} from "../validations/index.ts";

export const clamp = (value: number, min: number, max: number): number =>
    Math.min(max, Math.max(min, value))

export const hexToRgba = (hex: string): RgbaColor => {
    const trimmed = hex.trim()
    if (!isHexColor(trimmed)) throw new Error(`Invalid hex color: "${hex}"`)

    const digits = trimmed.slice(1)

    const expanded = digits.length <= 4
        ? digits.split('').map(d => d + d).join('')
        : digits

    const rgb = parseInt(expanded.slice(0, 6), 16)
    const alpha = expanded.length === 8
        ? parseInt(expanded.slice(6, 8), 16) / 255
        : undefined

    return {
        red: (rgb >> 16) & 255,
        green: (rgb >> 8) & 255,
        blue: rgb & 255,
        alpha,
    }
}

export const withAlpha = (color: string, alpha?: number, fallbackAlpha = 1): string => {
    if (isHexColor(color)) {
        const {red, green, blue, alpha: embedded} = hexToRgba(color)
        const finalAlpha = embedded ?? alpha ?? fallbackAlpha
        const rounded = Math.round(clamp(finalAlpha, 0, 1) * 1000) / 1000
        return `rgba(${red}, ${green}, ${blue}, ${rounded})`
    }
    if (color.startsWith('rgb(')) {
        return color.replace('rgb(', 'rgba(').replace(')', `, ${alpha ?? fallbackAlpha})`)
    }
    if (color.startsWith('hsl(')) {
        return color.replace('hsl(', 'hsla(').replace(')', `, ${alpha ?? fallbackAlpha})`)
    }
    return color
}

export const parseLength = (input: string): CSSLength => {
    const match = input.trim().match(/^(-?\d*\.?\d+)([a-z%]*)$/i)
    if (!match) throw new Error(`Invalid CSS length: "${input}"`)
    const [, value, unit] = match
    return {value: parseFloat(value), unit: unit || 'px'}
}


export const resolveColor = (value: string | null | undefined, defaultColor = 'transparent'): string => {
    if (value == null) return defaultColor
    if (!isValidColor(value)) {
        console.error(`Invalid color: "${value}". Falling back to "${defaultColor}".`)
        return defaultColor
    }
    return value
}

export const formatColorStop = (stop: GradientColorStop): string => {
    if (typeof stop === 'string') {
        return resolveColor(stop)
    }

    const { color, position } = stop
    const resolvedColor = resolveColor(color)
    if (!position) return resolvedColor
    if (!isValidPosition(position)) return resolvedColor

    return `${resolvedColor} ${position}`
}