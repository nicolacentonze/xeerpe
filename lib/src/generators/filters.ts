import {
    BlurOptions,
    BuilderLayer,
    FilterOptions,
    FilterType
} from "../models";

export const generateBlurEffect = (options: BlurOptions) => {
    const {amount = '20px', type = 'backdrop'} = options

    if (type === 'backdrop') {
        return {
            properties: {
                backdropFilter: `blur(${amount})`,
                ['-webkit-backdrop-filter']: `blur(${amount})`,
            }
        }
    }
    return {
        properties: {
            filter: `blur(${amount})`,
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