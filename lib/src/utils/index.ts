import {CSSLength, GradientColorStop, RgbColor} from "../models/index.ts";
import {isValidColor, isValidPosition} from "../validations/index.ts";

export const hexToRgb = (hex: string): RgbColor => {
    const hexDigits = hex.replace('#', '')
    const expandedHex = hexDigits.length === 3
        ? hexDigits.split('').map(digit => digit + digit).join('')
        : hexDigits
    const hexValue = parseInt(expandedHex, 16)
    return {
        red: (hexValue >> 16) & 255,
        green: (hexValue >> 8) & 255,
        blue: hexValue & 255,
    }
}

export const withAlpha = (color: string, alpha: number): string => {
    if (color.startsWith('#')) {
        const {red, green, blue} = hexToRgb(color)
        return `rgba(${red}, ${green}, ${blue}, ${alpha})`
    }
    if (color.startsWith('rgb(')) {
        return color.replace('rgb(', 'rgba(').replace(')', `, ${alpha})`)
    }
    if (color.startsWith('hsl(')) {
        return color.replace('hsl(', 'hsla(').replace(')', `, ${alpha})`)
    }
    return color
}

export const clamp = (value: number, min: number, max: number): number =>
    Math.min(max, Math.max(min, value))


export const parseLength = (input: string): CSSLength => {
    const match = input.trim().match(/^(-?\d*\.?\d+)([a-z%]*)$/i)
    if (!match) throw new Error(`Invalid CSS length: "${input}"`)
    const [, value, unit] = match
    return { value: parseFloat(value), unit: unit || 'px' }
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