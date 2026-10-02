import { AnimationOptions, AnimationType, BuilderLayer, CSSProperties } from "../models/index.ts";

export const generatePulseAnimation = (options: AnimationOptions): string => {
    const { duration = '4s', easing = 'ease-in-out', direction = 'alternate', iterationCount = 'infinite' } = options
    return `xeerpe-pulse ${duration} ${easing} ${direction} ${iterationCount}`
}

export const generateRotateAnimation = (options: AnimationOptions): string => {
    const { duration = '12s', easing = 'linear', iterationCount = 'infinite' } = options
    return `xeerpe-rotate ${duration} ${easing} ${iterationCount}; transform-origin: center`
}

export const generateBreatheAnimation = (options: AnimationOptions): string => {
    const { duration = '12s', easing = 'ease-in-out', iterationCount = 'infinite' } = options
    return `xeerpe-breathe ${duration} ${easing} ${iterationCount}`
}

export const generateAuroraAnimation = (options: AnimationOptions): string => {
    const { duration = '12s', easing = 'ease-in-out', direction = 'alternate', iterationCount = 'infinite' } = options
    return `xeerpe-aurora ${duration} ${easing} ${direction} ${iterationCount}`
}

export const generateShimmerAnimation = (options: AnimationOptions): string => {
    const { duration = '3s', easing = 'linear', iterationCount = 'infinite' } = options
    return `xeerpe-shimmer ${duration} ${easing} ${iterationCount}`
}

export const generateLiquidAnimation = (options: AnimationOptions): string => {
    const { duration = '8s', easing = 'ease-in-out', iterationCount = 'infinite' } = options
    return `xeerpe-liquid ${duration} ${easing} ${iterationCount}`
}

export const generatePlasmaAnimation = (options: AnimationOptions): string => {
    const { duration = '6s', easing = 'linear', iterationCount = 'infinite' } = options
    return `xeerpe-plasma ${duration} ${easing} ${iterationCount}`
}

export const generateFloatAnimation = (options: AnimationOptions): string => {
    const { duration = '6s', easing = 'ease-in-out', iterationCount = 'infinite' } = options
    return `xeerpe-float ${duration} ${easing} ${iterationCount}`
}

export const generateDriftAnimation = (options: AnimationOptions): string => {
    const { duration = '10s', easing = 'ease-in-out', iterationCount = 'infinite' } = options
    return `xeerpe-drift ${duration} ${easing} ${iterationCount}`
}

export const buildAnimationByType = (type: AnimationType, options: AnimationOptions) => {
    switch (type) {
        case 'pulse':   return generatePulseAnimation(options)
        case 'rotate':  return generateRotateAnimation(options)
        case 'breathe': return generateBreatheAnimation(options)
        case 'aurora':  return generateAuroraAnimation(options)
        case 'shimmer': return generateShimmerAnimation(options)
        case 'liquid':  return generateLiquidAnimation(options)
        case 'plasma':  return generatePlasmaAnimation(options)
        case 'float':   return generateFloatAnimation(options)
        case 'drift':   return generateDriftAnimation(options)
        default: throw new Error(`Unknown animation type: ${type}`)
    }
}

export const buildAnimationLayer = (type: AnimationType, options: AnimationOptions): BuilderLayer => {
    const properties: CSSProperties = {
        animation: buildAnimationByType(type, options)
    }

    return { type: 'animation', properties }
}