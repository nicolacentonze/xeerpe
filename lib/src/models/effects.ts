
export type EffectType = 'noise'
export type EffectOptions = NoiseOptions
export type NoiseType = 'turbulence' | 'fractalNoise'

export interface NoiseOptions {
    opacity?: number
    scale?: number
    type?: NoiseType
    octaves?: number
    backgroundSize?: string
}