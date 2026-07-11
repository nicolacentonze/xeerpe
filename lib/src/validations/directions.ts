import {LinearGradientDirection} from "../models";

const VALID_DIRECTIONS: readonly LinearGradientDirection[] = [
    'to top', 'to bottom', 'to left', 'to right',
    'to top right', 'to bottom right', 'to top left', 'to bottom left'
]

export  const isValidDirection = (value: string): value is LinearGradientDirection =>
    (VALID_DIRECTIONS as readonly string[]).includes(value)