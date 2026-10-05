export type PatternType = 'dots' | 'grid' | 'stars' | 'rays'

export interface PatterBaseOptions {
    color?: string,
    background?: string,
    size?: string,
    opacity?: number,
    strokeWidth?: string
    backgroundSize?: string
}

export interface DotsOptions extends PatterBaseOptions {
    color?: string
    background?: string
    size?: string,
    spacing?: string
    style?: string
    opacity?: number,
}

export interface GridOptions extends PatterBaseOptions {}

export interface StarsOptions extends PatterBaseOptions {
    count?: number
    seed?: number
}

export interface RaysOptions extends PatterBaseOptions {
    count?: number
    position?: string
    angle?: string
}

export type PatternOptions  = DotsOptions | GridOptions | StarsOptions | RaysOptions