import {LinearGradientAngle} from "../models";

const ANGLE_UNIT_REGEX = /^-?\d*\.?\d+(deg|rad|grad|turn)$/

export const isValidAngle = (value: string): value is LinearGradientAngle =>
    ANGLE_UNIT_REGEX.test(value.trim())
