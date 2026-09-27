const HEX_REGEX = /^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/
const COLOR_FUNC_REGEX = /^(rgb|rgba|hsl|hsla|oklch|color|hwb|lch|lab)\(.+\)$/i
const NAMED_COLOR_REGEX = /^[a-zA-Z]+$/

export const isValidColor = (value: string): boolean => {
    const t = value.trim()
    return (
        HEX_REGEX.test(t) ||
        COLOR_FUNC_REGEX.test(t) ||
        t === 'transparent' ||
        t === 'currentColor' ||
        t === 'inherit' ||
        NAMED_COLOR_REGEX.test(t)
    )
}