import { RadialGradientShape, RadialGradientSize } from "../models/index.ts";

export const isValidRadialShape = (value: string | null): value is RadialGradientShape =>
    value === null || value === 'circle' || value === 'ellipse'

const VALID_SIZE_KEYWORDS: readonly string[] = [
    'closest-side', 'closest-corner', 'farthest-side', 'farthest-corner', 'auto'
]
const LENGTH_REGEX = /^\d*\.?\d+(px|%|rem|em|vh|vw)(\s+\d*\.?\d+(px|%|rem|em|vh|vw))?$/
const CALC_REGEX = /^calc\(.+\)$/

export const isValidRadialSize = (value: string): value is RadialGradientSize => {
    const trimmed = value.trim()
    return VALID_SIZE_KEYWORDS.includes(trimmed) || LENGTH_REGEX.test(trimmed) || CALC_REGEX.test(trimmed)
}