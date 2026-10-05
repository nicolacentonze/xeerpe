import {PresetConfig} from "../../models/index.ts";

export const luxuryPresets: Record<string, PresetConfig> = {
    'velvet': (builder) => {
        builder
            .meshGradient({
                background: '#3a0a2a',
                layers: [
                    { position: '25% 25%', from: '#c0397f88', to: 'transparent', colorToPosition: '40%' },
                    { position: '35% 35%', from: '#8a1f5ccc', to: 'transparent', colorToPosition: '65%' },
                    { position: '90% 95%', from: '#14020e', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1 })
            .vignette({ intensity: 0.5, spread: 0.45 });
    },
    'emerald-velvet': (builder) => {
        builder
            .meshGradient({
                background: '#05271b',
                layers: [
                    { position: '25% 25%', from: '#3fae7a77', to: 'transparent', colorToPosition: '40%' },
                    { position: '35% 35%', from: '#11603fcc', to: 'transparent', colorToPosition: '65%' },
                    { position: '90% 95%', from: '#010d08', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1 })
            .vignette({ intensity: 0.5, spread: 0.45 });
    },
    'silk': (builder) => {
        builder
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff55', position: '18%' },
                    { color: '#ffffff00', position: '34%' },
                    { color: '#00000014', position: '44%' },
                    { color: '#ffffff44', position: '58%' },
                    { color: '#ffffff00', position: '72%' },
                    { color: '#ffffff33', position: '88%' },
                    { color: '#ffffff00', position: '100%' }
                ]
            })
            .meshGradient({
                background: '#e8d5c4',
                layers: [
                    { position: '30% 30%', from: '#f6e9dccc', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 90%', from: '#c9ab92cc', to: 'transparent', colorToPosition: '55%' }
                ]
            });
    },
    'satin': (builder) => {
        builder
            .linearGradient({
                angle: '115deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff26', position: '20%' },
                    { color: '#ffffff00', position: '36%' },
                    { color: '#00000033', position: '46%' },
                    { color: '#ffffff1f', position: '60%' },
                    { color: '#ffffff00', position: '74%' },
                    { color: '#ffffff14', position: '90%' },
                    { color: '#ffffff00', position: '100%' }
                ]
            })
            .meshGradient({
                background: '#101a33',
                layers: [
                    { position: '30% 30%', from: '#2a3d6bcc', to: 'transparent', colorToPosition: '60%' }
                ]
            });
    },
    'champagne-silk': (builder) => {
        builder
            .linearGradient({
                angle: '125deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff66', position: '20%' },
                    { color: '#ffffff00', position: '36%' },
                    { color: '#8a6a3018', position: '46%' },
                    { color: '#ffffff4d', position: '62%' },
                    { color: '#ffffff00', position: '78%' },
                    { color: '#ffffff33', position: '92%' },
                    { color: '#ffffff00', position: '100%' }
                ]
            })
            .meshGradient({
                background: '#e6d2a8',
                layers: [
                    { position: '25% 30%', from: '#fff3d6cc', to: 'transparent', colorToPosition: '55%' }
                ]
            });
    },
    'leather': (builder) => {
        builder
            .meshGradient({
                background: '#5a3320',
                layers: [
                    { position: '25% 25%', from: '#8a5232cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 95%', from: '#2e170c', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.2, scale: 0.55 })
            .vignette({ intensity: 0.45, spread: 0.45 });
    },
    'cashmere': (builder) => {
        builder
            .meshGradient({
                background: '#d6c5b3',
                layers: [
                    { position: '25% 25%', from: '#efe4d8', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 95%', from: '#b3a08b', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.12, scale: 0.75 });
    },
    'royal': (builder) => {
        builder
            .meshGradient({
                background: '#160d52',
                layers: [
                    { position: '80% 15%', from: '#d4af3744', to: 'transparent', colorToPosition: '35%' },
                    { position: '30% 35%', from: '#3b2bb0cc', to: 'transparent', colorToPosition: '60%' },
                    { position: '90% 95%', from: '#0a0630', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 0.9 });
    },
    'imperial': (builder) => {
        builder
            .meshGradient({
                background: '#420909',
                layers: [
                    { position: '20% 15%', from: '#d4af3755', to: 'transparent', colorToPosition: '38%' },
                    { position: '40% 40%', from: '#9a1b1bcc', to: 'transparent', colorToPosition: '62%' },
                    { position: '90% 95%', from: '#1f0303', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'bordeaux': (builder) => {
        builder
            .meshGradient({
                background: '#3a0613',
                layers: [
                    { position: '25% 20%', from: '#b8455a55', to: 'transparent', colorToPosition: '40%' },
                    { position: '35% 35%', from: '#7a1630cc', to: 'transparent', colorToPosition: '62%' },
                    { position: '90% 95%', from: '#1a0208', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1 })
            .vignette({ intensity: 0.45, spread: 0.45 });
    },
    'noir': (builder) => {
        builder
            .meshGradient({
                background: '#050505',
                layers: [
                    { position: '35% 30%', from: '#262626', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1.5 })
            .vignette({ intensity: 0.7, spread: 0.5 });
    },
    'tuxedo': (builder) => {
        builder
            .linearGradient({
                angle: '105deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '30%' },
                    { color: '#ffffff12', position: '40%' },
                    { color: '#ffffff00', position: '46%' },
                    { color: '#ffffff00', position: '54%' },
                    { color: '#ffffff12', position: '60%' },
                    { color: '#ffffff00', position: '70%' },
                    { color: '#ffffff00', position: '100%' }
                ]
            })
            .meshGradient({
                background: '#0b0b0d',
                layers: [
                    { position: '25% 20%', from: '#1f1f24', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'art-deco': (builder) => {
        builder
            .meshGradient({
                background: '#15130e',
                layers: [
                    { position: '50% 115%', from: '#e6c35c66', to: 'transparent', colorToPosition: '32%' },
                    { position: '50% 115%', from: '#c9a22733', to: 'transparent', colorToPosition: '75%' }
                ]
            })
            .rays({ color: '#e6c35c', opacity: 0.08, count: 18, position: '50% 115%', angle: '270deg' })
            .grain({ intensity: 1 })
            .vignette({ intensity: 0.55, spread: 0.5 });
    },
    'boudoir': (builder) => {
        builder
            .meshGradient({
                background: '#2a0f1a',
                layers: [
                    { position: '25% 25%', from: '#e88aa088', to: 'transparent', colorToPosition: '40%' },
                    { position: '35% 35%', from: '#c2416bcc', to: 'transparent', colorToPosition: '62%' },
                    { position: '90% 95%', from: '#12050b', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1 });
    },
};
