import {BentoItem, Chain, ChainStep} from "@/src/models/home.ts";

const auroraSteps: ChainStep[] = [
    {
        title: 'Light up the aurora',
        description: 'Start with a soft emerald glow in the corner.',
        label: ".radialGradient({ … })",
        code: ".radialGradient({ from: 'rgba(16,185,129,0.85)', to: 'transparent', position: '20% 30%', colorToPosition: '60%' })",
        apply: (builder) => builder
            .radialGradient({ from: 'rgba(16,185,129,0.85)', to: 'transparent', position: '20% 30%', colorToPosition: '60%' }),
    },
    {
        title: 'Blend in a second color',
        description: 'A violet light on the other side, layered over the first.',
        label: ".radialGradient({ … })",
        code: ".radialGradient({ from: 'rgba(168,85,247,0.6)', to: 'transparent', position: '80% 70%', colorToPosition: '60%' })",
        apply: (builder) => builder
            .radialGradient({ from: 'rgba(168,85,247,0.6)', to: 'transparent', position: '80% 70%', colorToPosition: '60%' }),
    },
    {
        title: 'Put the night underneath',
        description: 'Layers added later are drawn below the earlier ones.',
        label: ".linearGradient({ … })",
        code: ".linearGradient({ from: '#04121c', to: '#02060c', angle: '180deg' })",
        apply: (builder) => builder
            .linearGradient({ from: '#04121c', to: '#02060c', angle: '180deg' }),
    },
    {
        title: 'Scatter some stars',
        description: 'Patterns always sit above the gradients.',
        label: ".stars()",
        code: ".stars()",
        apply: (builder) => builder
            .stars(),
    },
    {
        title: 'Let it breathe',
        description: 'One more method, and the whole sky starts to move.',
        label: ".aurora()",
        code: ".aurora({ duration: '8s' })",
        apply: (builder) => builder
            .aurora({ duration: '8s' }),
    },
]

const neonSteps: ChainStep[] = [
    {
        title: 'Fire an orange beam',
        description: 'A hard light rising from the bottom edge.',
        label: ".radialGradient({ … })",
        code: ".radialGradient({ from: '#ff7a00', to: 'transparent', position: '50% 110%', colorToPosition: '60%' })",
        apply: (builder) => builder
            .radialGradient({ from: '#ff7a00', to: 'transparent', position: '50% 110%', colorToPosition: '60%' }),
    },
    {
        title: 'Answer with electric blue',
        description: 'The opposite color from the top, layered over the first.',
        label: ".radialGradient({ … })",
        code: ".radialGradient({ from: '#2d6bff', to: 'transparent', position: '50% -10%', colorToPosition: '55%' })",
        apply: (builder) => builder
            .radialGradient({ from: '#2d6bff', to: 'transparent', position: '50% -10%', colorToPosition: '55%' }),
    },
    {
        title: 'Cut to black',
        description: 'A deep navy base keeps the colors electric.',
        label: ".linearGradient({ … })",
        code: ".linearGradient({ from: '#06031a', to: '#010008', angle: '180deg' })",
        apply: (builder) => builder
            .linearGradient({ from: '#06031a', to: '#010008', angle: '180deg' }),
    },
    {
        title: 'Lay down a grid',
        description: 'A thin amber grid gives it a digital floor.',
        label: ".grid({ … })",
        code: ".grid({ color: '#ff9f43', size: '24px', opacity: 0.16 })",
        apply: (builder) => builder
            .grid({ color: '#ff9f43', size: '24px', opacity: 0.16 }),
    },
    {
        title: 'Charge the edges',
        description: 'An inner glow makes the whole card hum.',
        label: ".glow({ … })",
        code: ".glow({ type: 'inner', color: 'rgba(255,159,67,0.45)', amount: '36px' })",
        apply: (builder) => builder
            .glow({ type: 'inner', color: 'rgba(255,159,67,0.45)', amount: '36px' }),
    },
]

const polkaSteps: ChainStep[] = [
    {
        title: 'Glow in the corner',
        description: 'A soft candy-pink light, top left.',
        label: ".radialGradient({ … })",
        code: ".radialGradient({ from: '#ff9eb3', to: 'transparent', position: '25% 25%', colorToPosition: '55%' })",
        apply: (builder) => builder
            .radialGradient({ from: '#ff9eb3', to: 'transparent', position: '25% 25%', colorToPosition: '55%' }),
    },
    {
        title: 'Deepen the other corner',
        description: 'A richer raspberry on the opposite side.',
        label: ".radialGradient({ … })",
        code: ".radialGradient({ from: '#e8436a', to: 'transparent', position: '90% 90%', colorToPosition: '55%' })",
        apply: (builder) => builder
            .radialGradient({ from: '#e8436a', to: 'transparent', position: '90% 90%', colorToPosition: '55%' }),
    },
    {
        title: 'Fill in the pink',
        description: 'A flat base color under both glows.',
        label: ".linearGradient({ … })",
        code: ".linearGradient({ from: '#ff6b8b', to: '#ff5c7f', angle: '135deg' })",
        apply: (builder) => builder
            .linearGradient({ from: '#ff6b8b', to: '#ff5c7f', angle: '135deg' }),
    },
    {
        title: 'Add the polka dots',
        description: 'Big, regular dots sit above every gradient.',
        label: ".dots({ … })",
        code: ".dots({ color: '#ffffff', size: '28px', strokeWidth: '4', opacity: 0.35 })",
        apply: (builder) => builder
            .dots({ color: '#ffffff', size: '28px', strokeWidth: '4', opacity: 0.35 }),
    },
    {
        title: 'Make it bounce',
        description: 'One more method, and the whole card floats.',
        label: ".float()",
        code: ".float({ duration: '5s' })",
        apply: (builder) => builder
            .float({ duration: '5s' }),
    },
]

const amberSteps: ChainStep[] = [
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
        title: 'Lay a pattern over the top',
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

export const chains: Chain[] = [
    {id: 'amber', name: 'Amber', steps: amberSteps},
    {id: 'aurora', name: 'Aurora', steps: auroraSteps},
    {id: 'neon', name: 'Neon', steps: neonSteps},
    {id: 'polka', name: 'Polka', steps: polkaSteps},
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
