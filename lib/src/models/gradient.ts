
export type GradientType = 'linear' | 'radial' | 'conic' | 'mesh'
export type LinearGradientDirection = 'to top' | 'to bottom' | 'to left' | 'to right' | 'to top right' | 'to bottom right' | 'to top left' | 'to bottom left'
export type LinearGradientAngle =
    | `${number}deg`
    | `${number}rad`
    | `${number}grad`
    | `${number}turn`
export type RadialGradientShape = 'circle' | 'ellipse'
export type RadialGradientSize = 'closest-side' | 'closest-corner' | 'farthest-side' | 'farthest-corner'
export type GradientOptions = LinearGradientOptions | RadialGradientOptions
export type LinearGradientPositionUnit =
    | `${number}%`
    | `${number}px`
    | `${number}rem`
    | `${number}em`
    | `${number}vh`
    | `${number}vw`
    | `${number}vmin`
    | `${number}vmax`

export type LinearGradientPosition =
    | LinearGradientPositionUnit
    | `calc(${string})`

export type GradientColorStop = string | { color: string; position?: LinearGradientPosition }

export interface GradientBase {
    from?: string
    to?: string
    backgroundSize?: string
}

export interface LinearGradientOptions extends GradientBase {
    colors?: (string | GradientColorStop)[]
    angle?: LinearGradientAngle
    direction?: LinearGradientDirection
    size?: string
}

export interface RadialGradientOptions extends GradientBase {
    shape?: RadialGradientShape
    position?: string
    size?: RadialGradientSize,
}