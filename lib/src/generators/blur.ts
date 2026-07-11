import {BuilderLayer} from "../models";

export const buildBlur = (blurRadius: string): BuilderLayer => {
    const blurFilter = `blur(${blurRadius})`
    return {type: 'filter', properties: {filter: blurFilter}}
}