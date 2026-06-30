import {BuilderLayer, CSSProperties, LayerType} from "../models/builder";
import {buildGradientLayer} from "../generators/gradients";
import {buildBlur} from "../generators/blur";
import {GradientOptions, GradientType, LinearGradientOptions, RadialGradientOptions} from "../models/gradient";

export class Builder {
    private _layers: BuilderLayer[] = [];

    gradient(type: GradientType, options: GradientOptions): this {
        const layer = buildGradientLayer(type, options)
        this._layers.push(layer)
        return this
    }

    linearGradient(options: LinearGradientOptions): this {
        return this.gradient('linear', options)
    }

    radialGradient(options: RadialGradientOptions): this {
        return this.gradient('radial', options)
    }

    blur(value: string): this {
        const blur = buildBlur(value)
        this._layers.push(blur)
        return this
    }

    toStyle(): Record<string, string> {
        const grouped: Record<LayerType, CSSProperties[]> = {
            gradient: [],
            filter: [],
        }

        this._layers.forEach((layer: BuilderLayer) => {
            grouped[layer.type].push(layer.properties)
        })

        const style: Record<string, string> = {}

        if (grouped.gradient.length) {
            style.background = grouped.gradient.map(p => p.background).join(', ')

            const sizes = grouped.gradient
                .map(p => p.backgroundSize)
                .join(', ')

            if (sizes.length) {
                style.backgroundSize = sizes
            }
        }

        if (grouped.filter.length) {
            style.filter = grouped.filter.map(p => p.filter).join(', ')
        }

        return style
    }

}