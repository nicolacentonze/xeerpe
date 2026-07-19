
export type EffectType = 'noise' | 'vignette' | 'grain'
export type EffectOptions = NoiseOptions | VignetteOptions | GrainOptions
export type NoiseType = 'turbulence' | 'fractalNoise'

export interface EffectOptionsBase {
    backgroundSize?: string
}

export interface NoiseOptions extends EffectOptionsBase {
    opacity?: number
    scale?: number
    type?: NoiseType
    octaves?: number
}

export interface VignetteOptions extends EffectOptionsBase {
    color?: string,
    intensity?: number,
    spread?: number,
}

export interface GrainOptions extends EffectOptionsBase {
    intensity?: number
    size?: string
    animated?: boolean
}