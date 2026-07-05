export type LayerType = 'gradient' | 'filter'

export interface CSSProperties {
    background?: string
    backgroundImage?: string,
    backgroundColor?: string,
    backgroundSize?: string
    filter?: string
}

export interface BuilderLayer {
    type: LayerType
    properties: CSSProperties
}