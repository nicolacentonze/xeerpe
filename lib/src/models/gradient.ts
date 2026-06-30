export type GradientType = 'linear' | 'radial' | 'conic' | 'mesh'
export type LinearGradientDirection = 'to top' | 'to bottom' | 'to left' | 'to right' | 'to top right' | 'to bottom right' | 'to top left' | 'to bottom left'
export type RadialGradientShape = 'circle' | 'ellipse'
export type RadialGradientSize = 'closest-side' | 'closest-corner' | 'farthest-side' | 'farthest-corner'
export type GradientOptions = LinearGradientOptions | RadialGradientOptions

export interface LinearGradientOptions {
    from?: string
    to?: string
    angle?: string
    direction?: LinearGradientDirection
    size?: string
    backgroundSize?: string
}

export interface RadialGradientOptions {
    from?: string
    to?: string
    shape?: RadialGradientShape
    position?: string
    size?: RadialGradientSize
}