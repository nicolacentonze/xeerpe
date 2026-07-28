import {
    BlurOptions,
    BuilderLayer,
    FilterOptions,
    FilterType
} from "../models";

export const generateBlurEffect = (opts: BlurOptions) => {
    const {amount = 20, type = 'backdrop'} = opts

    if (type === 'backdrop') {
        return {
            properties: {
                backdropFilter: `blur(${type})`,
                ['-webkit-backdrop-filter']: `blur(${amount}px)`,
            }
        }
    }
    return {
        properties: {
            filter: `blur(${amount}px)`,
        }
    }
}

export const buildFilterByType = (type: FilterType, options: FilterOptions) => {
    switch (type) {
        case 'blur':
            return generateBlurEffect(options as BlurOptions)
        default:
            throw new Error(`Unknown filter type: ${type}`)
    }
}

export const buildFilterLayer = (
    type: FilterType,
    options: FilterOptions
): BuilderLayer => {
    const {properties} = buildFilterByType(type, options as BlurOptions)
    return {type: 'filter', properties}

}