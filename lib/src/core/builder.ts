import {
    BuilderLayer,
    CSSProperties,
    LayerType,
    EffectOptions,
    EffectType,
    NoiseOptions,
    VignetteOptions,
    GrainOptions,
    BlurOptions,
    FilterType,
    FilterOptions,
    GlowOptions,
    PatternOptions,
    PatternType,
    DotsOptions,
    GridOptions,
    StarsOptions,
    RaysOptions,
    AnimationOptions,
    AnimationType,
    AnimationRange,
    ImageLayer,
    LayerAnimationSpec,
} from '../models/index.ts'
import {
    buildGradientLayer,
    buildEffectLayer,
    buildFilterLayer,
    buildPatternLayer,
    buildAnimationLayer,
    generateLiquidAnimation,
    generatePlasmaAnimation,
    generateFloatAnimation,
    generateDriftAnimation,
} from '../generators/index.ts'
import { countTopLevelItems } from '../utils/index.ts'
import {
    ConicGradientOptions,
    GradientOptions,
    GradientType,
    LinearGradientOptions,
    MeshGradientOptions,
    RadialGradientOptions,
} from '../models/index.ts'

const LAYER_ANIMATIONS: Partial<Record<AnimationType, LayerAnimationSpec>> = {
    breathe: { size: '200% 200%' },
    aurora: { size: '120% 120%' },
    liquid: { size: '200% 200%', position: { from: '0% 50%', to: '100% 50%' } },
    shimmer: { position: { from: '200% center', to: '-200% center' } },
    drift: { position: { from: '0% 0%', to: '100% 100%' } },
}

const SLIDING_GRADIENT_SIZES: Partial<Record<AnimationType, string>> = {
    shimmer: '200% 100%',
    drift: '300% 300%',
}

export class Builder {
    private _layers: BuilderLayer[] = []

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

    pattern(type: PatternType, options: PatternOptions): this {
        const layer = buildPatternLayer(type, options)
        this._layers.push(layer)
        return this
    }

    animation(type: AnimationType, options: AnimationOptions): this {
        const layer = buildAnimationLayer(type, options)
        this._layers.push(layer)
        return this
    }

    noise(options: NoiseOptions = {}): this {
        return this.effect('noise', options)
    }

    vignette(options: VignetteOptions = {}): this {
        return this.effect('vignette', options)
    }

    grain(options: GrainOptions = {}): this {
        return this.effect('grain', options)
    }

    glow(options: GlowOptions = {}): this {
        return this.effect('glow', options)
    }

    blur(options: BlurOptions = {}): this {
        return this.filter('blur', options)
    }

    dots(options: DotsOptions = {}): this {
        return this.pattern('dots', options)
    }

    grid(options: GridOptions = {}): this {
        return this.pattern('grid', options)
    }

    stars(options: StarsOptions = {}): this {
        return this.pattern('stars', options)
    }

    rays(options: RaysOptions = {}): this {
        return this.pattern('rays', options)
    }

    pulse(options: AnimationOptions = {}): this {
        return this.animation('pulse', options)
    }

    rotate(options: AnimationOptions = {}): this {
        return this.animation('rotate', options)
    }

    breathe(options: AnimationOptions = {}): this {
        return this.animation('breathe', options)
    }

    aurora(options: AnimationOptions = {}): this {
        return this.animation('aurora', options)
    }

    shimmer(options: AnimationOptions = {}): this {
        return this.animation('shimmer', options)
    }

    liquid(options: AnimationOptions = {}): this {
        return this.animation('liquid', options)
    }

    plasma(options: AnimationOptions = {}): this {
        return this.animation('plasma', options)
    }

    float(options: AnimationOptions = {}): this {
        return this.animation('float', options)
    }

    drift(options: AnimationOptions = {}): this {
        return this.animation('drift', options)
    }

    toStyle(): Record<string, string> {
        const grouped: Record<LayerType, CSSProperties[]> = {
            gradient: [],
            filter: [],
            effect: [],
            pattern: [],
            animation: [],
        }

        this._layers.forEach((layer: BuilderLayer) => {
            grouped[layer.type].push(layer.properties)
        })

        const style: Record<string, string> = {}

        if (grouped.gradient.length || grouped.effect.length || grouped.pattern.length) {
            const backgroundImages = [...grouped.effect, ...grouped.pattern, ...grouped.gradient].flatMap((p) =>
                [p.backgroundImage, p.background].filter(Boolean),
            )

            const slidingSize = this.slidingGradientSize()
            // Size each CSS image, preserving animation sizing for unsized gradients.
            const backgroundSizes = this.imageLayers(grouped).flatMap(({ type, size, count }) => {
                const backgroundSize = slidingSize && type === 'gradient' && (!size || size === 'auto') ? slidingSize : (size ?? 'auto')

                return Array<string>(count).fill(backgroundSize)
            })

            const boxShadows = grouped.effect.map((p) => p.boxShadow).filter(Boolean)

            const backgroundColor = grouped.gradient.find((p) => p.backgroundColor)?.backgroundColor

            if (backgroundImages.length) style.backgroundImage = backgroundImages.join(', ')
            if (backgroundSizes.length) style.backgroundSize = backgroundSizes.join(', ')

            if (backgroundColor) style.backgroundColor = backgroundColor
            if (boxShadows.length) style.boxShadow = boxShadows.join(', ')
        }

        if (grouped.filter.length) {
            const filters = grouped.filter.map((p) => p.filter).filter(Boolean)
            const backdropFilters = grouped.filter.map((p) => p.backdropFilter).filter(Boolean)

            if (filters.length) style.filter = filters.join(' ')
            if (backdropFilters.length) style.backdropFilter = backdropFilters.join(' ')
        }

        if (grouped.animation.length) {
            const animations = grouped.animation.map((p) => p.animation).filter(Boolean)

            if (animations.length) style.animation = animations.join(', ')

            Object.assign(style, this.layerAnimationVariables(grouped))
        }

        style.backgroundPosition = 'center'

        return style
    }

    private imageLayers(grouped: Record<LayerType, CSSProperties[]>): ImageLayer[] {
        return (['effect', 'pattern', 'gradient'] as const)
            .flatMap((type) => grouped[type].map((properties) => ({ type, properties })))
            .map(({ type, properties }) => ({
                type,
                size: properties.backgroundSize,
                count: [properties.backgroundImage, properties.background]
                    .filter((image): image is string => Boolean(image))
                    .reduce((total, image) => total + countTopLevelItems(image), 0),
            }))
            .filter(({ count }) => count > 0)
    }

    private slidingGradientSize(): string | undefined {
        return this._layers
            .filter((layer) => layer.animationType && SLIDING_GRADIENT_SIZES[layer.animationType] && layer.target !== 'patterns')
            .map((layer) => SLIDING_GRADIENT_SIZES[layer.animationType!])
            .pop()
    }

    private layerAnimationVariables(grouped: Record<LayerType, CSSProperties[]>): Record<string, string> {
        const scoped = this._layers.filter(
            (layer) => layer.animationType && LAYER_ANIMATIONS[layer.animationType] && layer.target !== 'all',
        )

        if (!scoped.length) return {}

        const imageLayers = this.imageLayers(grouped)

        const variables: Record<string, string> = {}

        scoped.forEach(({ animationType, target }) => {
            const spec = LAYER_ANIMATIONS[animationType!]!
            const name = `--xeerpe-${animationType}`

            const write = (
                property: 'size' | 'position',
                animatesLayer: (type: LayerType) => boolean,
                animated: AnimationRange,
                resting: (size?: string) => string,
            ) => {
                if (imageLayers.every(({ type }) => animatesLayer(type))) return

                const perImage = (value: 'from' | 'to') =>
                    imageLayers
                        .flatMap(({ type, size, count }) =>
                            Array<string>(count).fill(animatesLayer(type) ? animated[value] : resting(size)),
                        )
                        .join(', ')

                variables[`${name}-${property}-from`] = perImage('from')
                variables[`${name}-${property}-to`] = perImage('to')
            }

            if (spec.size) {
                write(
                    'size',
                    (type) => type === 'gradient' && target === 'gradients',
                    { from: '100% 100%', to: spec.size },
                    (size) => size ?? 'auto',
                )
            }

            if (spec.position) {
                write(
                    'position',
                    (type) => type === (target === 'patterns' ? 'pattern' : 'gradient'),
                    spec.position,
                    () => 'center',
                )
            }
        })

        return variables
    }

    toTextStyle(): Record<string, string> {
        const background = this.toStyle()

        const style: Record<string, string> = {
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
        }

        if (background.backgroundImage) style.backgroundImage = background.backgroundImage
        if (background.backgroundSize) style.backgroundSize = background.backgroundSize
        if (background.backgroundColor) style.backgroundColor = background.backgroundColor

        return style
    }
}
