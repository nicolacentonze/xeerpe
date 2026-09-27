const GLOBALS: readonly string[] = ['auto', 'cover', 'contain', 'initial', 'inherit', 'unset']
const SIZE_TOKEN_REGEX = /^(\d*\.?\d+(px|%|rem|em|vh|vw|vmin|vmax))$/
const CALC_REGEX = /^calc\(.+\)$/

const isValidSizeToken = (value: string): boolean =>
    GLOBALS.includes(value) || SIZE_TOKEN_REGEX.test(value) || CALC_REGEX.test(value)

export const isValidBackgroundSize = (value: string): boolean => {
    const trimmed = value.trim()
    if (GLOBALS.includes(trimmed)) return true
    const parts = trimmed.split(/\s+/)
    return parts.length <= 2 && parts.every(isValidSizeToken)
}