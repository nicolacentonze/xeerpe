import {RgbColor} from "../models";

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