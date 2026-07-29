
export type EffectType = 'noise' | 'vignette' | 'grain' | 'glow'
export type EffectOptions = NoiseOptions | VignetteOptions | GrainOptions | GlowOptions
export type NoiseType = 'turbulence' | 'fractalNoise'
export type GlowType = 'outer' | 'inner'

export interface NoiseOptions {
    opacity?: number
    scale?: number
    type?: NoiseType
    octaves?: number
    backgroundSize?: string
}

export interface VignetteOptions {
    color?: string,
    intensity?: number,
    spread?: number,
    backgroundSize?: string
}


export interface GrainOptions {
    intensity?: number
    size?: string
    animated?: boolean
    backgroundSize?: string
}

export interface GlowOptions {
    amount?: string
    spread?: string
    x?: string
    y?: string
    color?: string
    type?: GlowType
}