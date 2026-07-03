import {LinearGradientPosition} from "../models/gradient";

const POSITION_REGEX = /^-?\d*\.?\d+(%|px|rem|em|vh|vw|vmin|vmax)$/
const CALC_REGEX = /^calc\(.+\)$/

export const isValidPosition = (value: string): value is LinearGradientPosition => {

    const trimmed = value.trim()
    return POSITION_REGEX.test(trimmed) || CALC_REGEX.test(trimmed)
}