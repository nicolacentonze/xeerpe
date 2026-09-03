import {AnimationOptions, AnimationType, BuilderLayer, CSSProperties} from "../models/index.ts";

export const generatePulseAnimation = (options: AnimationOptions): string => {
    const {duration = '4s', easing = 'ease-in-out', direction = 'alternate', iterationCount = 'infinite'} = options
    return `xeerpe-pulse ${duration} ${easing} ${direction} ${iterationCount}`
}

export const generateRotateAnimation = (options: AnimationOptions): string => {
    const {duration = '12s', easing = 'linear', iterationCount = 'infinite'} = options
    return `xeerpe-rotate ${duration} ${easing} ${iterationCount}; transform-origin: center`
}

export const generateBreatheAnimation = (options: AnimationOptions): string => {
    const {duration = '12s', easing = 'ease-in-out', iterationCount = 'infinite'} = options
    return `xeerpe-breathe ${duration} ${easing} ${iterationCount}`
}

export const generateAuroraAnimation = (options: AnimationOptions): string => {
    const {duration = '12s', easing = 'ease-in-out', direction = 'alternate', iterationCount = 'infinite'} = options
    return `xeerpe-aurora ${duration} ${easing} ${direction} ${iterationCount}`
}

export const buildAnimationByType = (type: AnimationType, options: AnimationOptions) => {
    switch (type) {
        case 'pulse':
            return generatePulseAnimation(options)
        case 'rotate':
            return generateRotateAnimation(options)
        case 'breathe':
            return generateBreatheAnimation(options)
        case 'aurora':
            return generateAuroraAnimation(options)
        default:
            throw new Error(`Unknown gradient type: ${type}`)
    }
}



export const buildAnimationLayer = (type: AnimationType, options: AnimationOptions): BuilderLayer => {

    const properties: CSSProperties = {
        animation: buildAnimationByType(type, options)
    }

    return {type: 'animation', properties}
}