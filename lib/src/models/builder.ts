export type LayerType = 'gradient' | 'filter'

export interface BuilderLayer {
    type: LayerType
    css: string
}