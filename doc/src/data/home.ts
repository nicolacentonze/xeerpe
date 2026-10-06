import {BentoItem, ChainStep} from "@/src/models/home.ts";

export const chainSteps: ChainStep[] = [
    {
        title: 'Craft a glow',
        description: 'Start with a soft amber light in the corner.',
        label: ".radialGradient({ … })",
        code: ".radialGradient({ from: '#FF7A18', to: 'transparent', position: '75% 25%', colorToPosition: '60%' })",
        apply: (builder) => builder
            .radialGradient({ from: '#FF7A18', to: 'transparent', position: '75% 25%', colorToPosition: '60%' }),
    },
    {
        title: 'Put something dark underneath',
        description: 'Layers added later are drawn below the earlier ones.',
        label: ".linearGradient({ … })",
        code: ".linearGradient({ from: '#1a0b05', to: '#060302', angle: '160deg' })",
        apply: (builder) => builder
            .linearGradient({ from: '#1a0b05', to: '#060302', angle: '160deg' }),
    },
    {
        title: 'Lay a grid over the top',
        description: 'Patterns always sit above the gradients.',
        label: ".dots({ … })",
        code: ".dots({ color: '#FF7A18', size: '24px', opacity: 0.14 })",
        apply: (builder) => builder
            .dots({ color: '#FF7A18', size: '24px', opacity: 0.14 }),
    },
    {
        title: 'Add texture',
        description: 'Film grain and a vignette give it depth.',
        label: ".grain().vignette()",
        code: [
            ".grain({ intensity: 2 })",
            ".vignette({ intensity: 0.6, spread: 0.5 })",
        ].join('\n'),
        apply: (builder) => builder
            .grain({ intensity: 2 })
            .vignette({ intensity: 0.6, spread: 0.5 }),
    },
    {
        title: 'Make it move',
        description: 'One more method, and the whole card floats.',
        label: ".float()",
        code: ".float({ duration: '5s' })",
        apply: (builder) => builder
            .float({ duration: '5s' }),
    },
]

export const bentoPresets: BentoItem[] = [
    { name: 'milky-way', category: 'Space', size: 'large' },
    { name: 'rose-gold', category: 'Metals', size: 'small' },
    { name: 'emerald', category: 'Gems', size: 'small' },
    { name: 'laser', category: 'Neon', size: 'small' },
    { name: 'cherry-blossom', category: 'Nature', size: 'small' },
    { name: 'sunset', category: 'Sky', size: 'wide' },
    { name: 'black-marble', category: 'Neutral', size: 'small' },
    { name: 'blueprint', category: 'Textures', size: 'small' },
]
