import {PresetConfig} from "../../models/index.ts";

export const neutralPresets: Record<string, PresetConfig> = {
    'paper': (builder) => {
        builder
            .meshGradient({
                background: '#f7f3ea',
                layers: [
                    { position: '35% 30%', from: '#fffdf8', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.1, scale: 0.75 })
            .vignette({ color: '#7a6040', intensity: 0.12, spread: 0.4 });
    },
    'linen': (builder) => {
        builder
            .meshGradient({
                background: '#eee7d9',
                layers: [
                    { position: '30% 25%', from: '#faf6ee', to: 'transparent', colorToPosition: '55%' },
                    { position: '95% 95%', from: '#d9cfbd', to: 'transparent', colorToPosition: '50%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.12, scale: 0.9 });
    },
    'ivory': (builder) => {
        builder
            .meshGradient({
                background: '#fbf7ec',
                layers: [
                    { position: '30% 25%', from: '#ffffff', to: 'transparent', colorToPosition: '50%' },
                    { position: '90% 90%', from: '#efe6d0cc', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 0.5 });
    },
    'porcelain': (builder) => {
        builder
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '20%' },
                    { color: '#ffffff99', position: '45%' },
                    { color: '#ffffff00', position: '75%' }
                ]
            })
            .meshGradient({
                background: '#f2f4f5',
                layers: [
                    { position: '30% 25%', from: '#ffffff', to: 'transparent', colorToPosition: '50%' },
                    { position: '90% 90%', from: '#dde3e8cc', to: 'transparent', colorToPosition: '55%' }
                ]
            });
    },
    'sand': (builder) => {
        builder
            .meshGradient({
                background: '#e3d3b8',
                layers: [
                    { position: '25% 20%', from: '#f4eadb', to: 'transparent', colorToPosition: '55%' },
                    { position: '95% 95%', from: '#c9b28f', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.14, scale: 0.85 });
    },
    'stone': (builder) => {
        builder
            .meshGradient({
                background: '#a8a49c',
                layers: [
                    { position: '25% 25%', from: '#c9c5bd', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 90%', from: '#85817a', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.18, scale: 0.7 });
    },
    'concrete': (builder) => {
        builder
            .meshGradient({
                background: '#9a9a96',
                layers: [
                    { position: '30% 25%', from: '#b8b8b3', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 90%', from: '#7d7d79', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.25, scale: 0.9 });
    },
    'marble': (builder) => {
        builder
            .linearGradient({
                angle: '125deg',
                colors: [
                    { color: '#00000000', position: '0%' },
                    { color: '#00000000', position: '22%' },
                    { color: '#9a948c22', position: '27%' },
                    { color: '#00000000', position: '33%' },
                    { color: '#00000000', position: '58%' },
                    { color: '#9a948c1a', position: '62%' },
                    { color: '#00000000', position: '67%' }
                ]
            })
            .meshGradient({
                background: '#f4f2ef',
                layers: [
                    { position: '30% 30%', from: '#ffffff', to: 'transparent', colorToPosition: '50%' },
                    { position: '85% 85%', from: '#d9d4ce99', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.06, scale: 0.4 });
    },
    'black-marble': (builder) => {
        builder
            .linearGradient({
                angle: '125deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '24%' },
                    { color: '#ffffff1a', position: '28%' },
                    { color: '#ffffff00', position: '33%' },
                    { color: '#ffffff00', position: '56%' },
                    { color: '#c9a22733', position: '60%' },
                    { color: '#ffffff00', position: '65%' }
                ]
            })
            .meshGradient({
                background: '#0e0e10',
                layers: [
                    { position: '30% 25%', from: '#2a2a2e', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.08, scale: 0.4 });
    },
    'slate': (builder) => {
        builder
            .meshGradient({
                background: '#3b4550',
                layers: [
                    { position: '25% 20%', from: '#5a6672', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 95%', from: '#252c34', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.12, scale: 0.6 });
    },
    'smoke': (builder) => {
        builder
            .meshGradient({
                background: '#6e7277',
                layers: [
                    { position: '20% 30%', from: '#a3a7ab', to: 'transparent', colorToPosition: '50%' },
                    { position: '75% 60%', from: '#8a8e93cc', to: 'transparent', colorToPosition: '45%' },
                    { position: '95% 100%', from: '#4a4d51', to: 'transparent', colorToPosition: '50%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'ash': (builder) => {
        builder
            .meshGradient({
                background: '#c9c8c4',
                layers: [
                    { position: '30% 25%', from: '#e6e5e1', to: 'transparent', colorToPosition: '55%' },
                    { position: '95% 95%', from: '#a6a5a1', to: 'transparent', colorToPosition: '50%' }
                ]
            })
            .grain({ intensity: 0.9 });
    },
    'graphite': (builder) => {
        builder
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '25%' },
                    { color: '#ffffff0d', position: '45%' },
                    { color: '#ffffff00', position: '70%' }
                ]
            })
            .meshGradient({
                background: '#2a2c2f',
                layers: [
                    { position: '25% 20%', from: '#45484c', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 95%', from: '#17181a', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'charcoal': (builder) => {
        builder
            .meshGradient({
                background: '#1c1d1f',
                layers: [
                    { position: '30% 25%', from: '#333538', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.1, scale: 0.7 })
            .vignette({ intensity: 0.4, spread: 0.4 });
    },
    'ink': (builder) => {
        builder
            .meshGradient({
                background: '#0b0d14',
                layers: [
                    { position: '30% 25%', from: '#1c2233', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 95%', from: '#05060a', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1.2 });
    },
    'mono': (builder) => {
        builder
            .linearGradient({
                angle: '135deg',
                colors: [
                    { color: '#f5f5f5', position: '0%' },
                    { color: '#bdbdbd', position: '50%' },
                    { color: '#1f1f1f', position: '100%' }
                ]
            })
            .grain({ intensity: 1 });
    },
};
