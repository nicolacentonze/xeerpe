export type LayerType = 'gradient' | 'blur'

export interface BuilderLayer {
    type: LayerType
    css: string
}