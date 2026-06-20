import {BuilderLayer} from "../models/builder";
import {buildGradientLayer} from "../generators/gradients";
import {buildBlur} from "../generators/blur";

export class Builder {
    private _layers: BuilderLayer[] = [];

    gradient(from: string, to: string): this {
        const layer = buildGradientLayer(from, to)
        this._layers.push(layer)
        return this
    }

    blur(value: string): this {
        const blur = buildBlur(value)
        this._layers.push(blur)
        return this
    }

    toStyle(): Record<string, string> {
        const style: Record<string, string> = {}
        this._layers.forEach(layer => {
            const [property, value] = layer.css.split(':').map(s => s.trim())
            if (property && value) {
                const camel = property.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
                style[camel] = value
            }
        })
        return style
    }

}