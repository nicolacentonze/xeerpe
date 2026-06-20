import {BuilderLayer} from "../models/builder";

export const buildGradientLayer = (from: string, to: string): BuilderLayer => {
    const direction = '50deg'
    const colors = `${from}, ${to}`
    const style = `background: linear-gradient(${direction}, ${colors})`
    return {type: 'gradient', css: style}
}