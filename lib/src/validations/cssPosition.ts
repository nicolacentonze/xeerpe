const KEYWORD_REGEX = /^(top|bottom|left|right|center)$/
const LENGTH_REGEX = /^-?\d*\.?\d+(%|px|rem|em|vh|vw|vmin|vmax)$/
const CALC_REGEX = /^calc\(.+\)$/

const VALID_DOUBLE_KEYWORDS: readonly string[] = [
    'top left', 'top center', 'top right',
    'center left', 'center center', 'center right',
    'bottom left', 'bottom center', 'bottom right',
    'left top', 'left center', 'left bottom',
    'right top', 'right center', 'right bottom',
]

const isValidToken = (value: string): boolean =>
    KEYWORD_REGEX.test(value) || LENGTH_REGEX.test(value) || CALC_REGEX.test(value)

export const isValidCSSPosition = (value: string): boolean => {
    const trimmed = value.trim()
    if (trimmed === 'center') return true
    if (VALID_DOUBLE_KEYWORDS.includes(trimmed)) return true
    const parts = trimmed.split(/\s+/)
    return parts.length <= 2 && parts.every(isValidToken)
}