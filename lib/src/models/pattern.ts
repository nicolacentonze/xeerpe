export type PatternType = 'dots' | 'grid'

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

export type PatternOptions  = DotsOptions | GridOptions