export type FilterType = 'blur'
export type BlurType = 'backdrop' | 'blur'

export type FilterOptions = BlurOptions

export interface BlurOptions {
    amount?: number
    type?: BlurType
}