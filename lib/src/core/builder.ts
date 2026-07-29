import {
    BuilderLayer,
    CSSProperties,
    LayerType,
    EffectOptions,
    EffectType,
    NoiseOptions,
    VignetteOptions,
    GrainOptions, BlurOptions, FilterType, FilterOptions, GlowOptions
} from "../models";
import {buildGradientLayer, buildEffectLayer, buildFilterLayer} from "../generators";
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

    filter(type: FilterType, options: FilterOptions): this {
        const layer = buildFilterLayer(type, options)
        this._layers.push(layer)
        return this
    }

    noise(options: NoiseOptions): this {
        return this.effect('noise', options)
    }

    vignette(options: VignetteOptions): this {
        return this.effect('vignette', options)
    }

    grain(options: GrainOptions): this {
        return this.effect('grain', options)
    }

    glow(options: GlowOptions): this {
        return this.effect('glow', options)
    }

    blur(options: BlurOptions): this {
        return this.filter('blur', options)
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
            const backgroundImages = [...grouped.effect, ...grouped.gradient]
                .flatMap(p => [p.backgroundImage, p.background].filter(Boolean))

            const backgroundSizes = [...grouped.effect, ...grouped.gradient]
                .map(p => p.backgroundSize)
                .filter(Boolean)

            const boxShadows = grouped.effect.map(p => p.boxShadow).filter(Boolean)

            const backgroundColor = grouped.gradient.find(p => p.backgroundColor)?.backgroundColor

            if (backgroundImages.length) style.backgroundImage = backgroundImages.join(', ')
            if (backgroundSizes.length) style.backgroundSize = backgroundSizes.join(', ')
            if (backgroundColor) style.backgroundColor = backgroundColor
            if (boxShadows) style.boxShadow = boxShadows.join(', ')
        }

        if (grouped.filter.length) {
            console.log(grouped.filter)
            style.filter = grouped.filter[0].filter ?? ''
            style.backdropFilter = grouped.filter[0]?.backdropFilter ?? ''
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