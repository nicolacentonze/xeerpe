export type AnimationType = 'pulse' | 'rotate' | 'breathe' | 'aurora'

export interface AnimationOptions {
    duration?: string
    easing?: string
    direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
    iterationCount?: number | 'infinite'
}