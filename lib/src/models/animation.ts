export type AnimationType = 'pulse' | 'rotate' | 'breathe'

export interface AnimationOptions {
    duration?: string
    easing?: string
    direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
    iterationCount?: number | 'infinite'
}