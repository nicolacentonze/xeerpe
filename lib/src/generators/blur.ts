import {BuilderLayer} from "../models/builder";

export const buildBlur = (blurRadius: string): BuilderLayer => {
    const style = `blur(${blurRadius})`
    return {type: 'filter', css: style}
}