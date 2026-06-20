import {BuilderLayer} from "../models/builder";

export const buildBlur = (blurRadius: string): BuilderLayer => {
    const style = `filter: blur(${blurRadius})`
    return {type: 'blur', css: style}
}