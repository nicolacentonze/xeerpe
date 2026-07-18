import {BuilderLayer, CSSProperties, LayerType, EffectOptions, EffectType, NoiseOptions} from "../models";
import {buildGradientLayer, buildBlur, buildEffectLayer} from "../generators";
import {
    ConicGradientOptions,
    GradientOptions,
    GradientType,
    LinearGradientOptions,
    MeshGradientOptions,
    RadialGradientOptions
} from "../models";

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

    conicGradient(options: ConicGradientOptions): this {
        return this.gradient('conic', options)
    }

    meshGradient(options: MeshGradientOptions): this {
        return this.gradient('mesh', options)
    }

    effect(type: EffectType, options: EffectOptions): this {
        const layer = buildEffectLayer(type, options)
        this._layers.push(layer)
        return this
    }

    noise(options: NoiseOptions): this {
        return this.effect('noise', options)
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
            effect: []
        }

        this._layers.forEach((layer: BuilderLayer) => {
            grouped[layer.type].push(layer.properties)
        })

        const style: Record<string, string> = {}

        if (grouped.gradient.length || grouped.effect.length) {
            const backgroundImages = [...grouped.gradient, ...grouped.effect]
                .flatMap(p => [p.backgroundImage, p.background].filter(Boolean))

            const backgroundSizes = [...grouped.gradient, ...grouped.effect]
                .map(p => p.backgroundSize)
                .filter(Boolean)

            const backgroundColor = grouped.gradient.find(p => p.backgroundColor)?.backgroundColor

            if (backgroundImages.length) style.backgroundImage = backgroundImages.join(', ')
            if (backgroundSizes.length) style.backgroundSize = backgroundSizes.join(', ')
            if (backgroundColor) style.backgroundColor = backgroundColor
        }

        if (grouped.filter.length) {
            style.filter = grouped.filter.map(p => p.filter).join(', ')
        }

        return style
    }

    toTextStyle(): any {
        const background = this.toStyle()
        return {
            backgroundImage: background.backgroundImage ?? background.background,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
        }
    }

}