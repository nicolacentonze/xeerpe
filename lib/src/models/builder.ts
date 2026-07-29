export type LayerType = 'gradient' | 'filter' | 'effect'

export interface CSSProperties {
    background?: string
    backgroundImage?: string,
    backgroundColor?: string,
    backgroundSize?: string
    filter?: string
    backdropFilter?: string
    boxShadow?: string
}


export interface BuilderLayer {
    type: LayerType
    properties: CSSProperties
}