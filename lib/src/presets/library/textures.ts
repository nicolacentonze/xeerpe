import {PresetConfig} from "../../models/index.ts";

export const texturePresets: Record<string, PresetConfig> = {
    'blueprint': (builder) => {
        builder
            .meshGradient({
                background: '#0b3d91',
                layers: [
                    { position: '30% 25%', from: '#2a6bd6cc', to: 'transparent', colorToPosition: '60%' },
                    { position: '90% 95%', from: '#062a66', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grid({ color: '#ffffff', size: '24px', opacity: 0.16 });
    },
    'graph-paper': (builder) => {
        builder
            .meshGradient({
                background: '#fbfaf5',
                layers: [
                    { position: '30% 30%', from: '#ffffff', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grid({ color: '#5b8def', size: '20px', opacity: 0.16 });
    },
    'chalkboard': (builder) => {
        builder
            .meshGradient({
                background: '#1f2b24',
                layers: [
                    { position: '30% 30%', from: '#34463baa', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 95%', from: '#121a15', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.16, scale: 0.6 })
            .vignette({ intensity: 0.4, spread: 0.45 });
    },
    'polka': (builder) => {
        builder
            .meshGradient({
                background: '#ff6b8b',
                layers: [
                    { position: '25% 25%', from: '#ff9eb3cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 90%', from: '#e8436acc', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .dots({ color: '#ffffff', size: '28px', strokeWidth: '4', opacity: 0.35 });
    },
    'halftone': (builder) => {
        builder
            .meshGradient({
                background: '#ffcf33',
                layers: [
                    { position: '25% 25%', from: '#fff0a3cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 90%', from: '#ff9f1acc', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .dots({ color: '#1a1a1a', size: '12px', strokeWidth: '2', opacity: 0.16 });
    },
    'terminal': (builder) => {
        builder
            .meshGradient({
                background: '#020a05',
                layers: [
                    { position: '50% 40%', from: '#0b5a2a99', to: 'transparent', colorToPosition: '60%' }
                ]
            })
            .grid({ color: '#39ff88', size: '4px', opacity: 0.05 })
            .grain({ intensity: 1.2 })
            .vignette({ intensity: 0.7, spread: 0.5 });
    },
    'carbon': (builder) => {
        builder
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '25%' },
                    { color: '#ffffff12', position: '45%' },
                    { color: '#ffffff00', position: '70%' }
                ]
            })
            .meshGradient({
                background: '#1a1a1a',
                layers: [
                    { position: '30% 25%', from: '#2e2e2e', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grid({ color: '#000000', size: '6px', strokeWidth: '2', opacity: 0.5 });
    },
    'film-noir': (builder) => {
        builder
            .meshGradient({
                background: '#101010',
                layers: [
                    { position: '35% 30%', from: '#6e6e6e99', to: 'transparent', colorToPosition: '45%' },
                    { position: '40% 35%', from: '#2a2a2a', to: 'transparent', colorToPosition: '70%' }
                ]
            })
            .grain({ intensity: 1.5 })
            .vignette({ intensity: 0.8, spread: 0.55 });
    },
    'vintage': (builder) => {
        builder
            .meshGradient({
                background: '#d9c4a0',
                layers: [
                    { position: '35% 30%', from: '#f2e3c6cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 95%', from: '#a88a5acc', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.14, scale: 0.75 })
            .vignette({ color: '#4a3418', intensity: 0.4, spread: 0.5 });
    },
    'sepia': (builder) => {
        builder
            .meshGradient({
                background: '#a67b5b',
                layers: [
                    { position: '35% 30%', from: '#dcb894cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 95%', from: '#5e3f2a', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1.3 })
            .vignette({ color: '#2a1a0f', intensity: 0.45, spread: 0.5 });
    },
    'kraft': (builder) => {
        builder
            .meshGradient({
                background: '#c19a6b',
                layers: [
                    { position: '30% 25%', from: '#d8b88c', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 95%', from: '#9c774b', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.2, scale: 0.8 });
    },
    'canvas': (builder) => {
        builder
            .meshGradient({
                background: '#ece6d9',
                layers: [
                    { position: '30% 25%', from: '#f8f4ec', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grid({ color: '#8a7f68', size: '4px', opacity: 0.07 })
            .noise({ octaves: 3, opacity: 0.12, scale: 0.7 });
    },
    'denim': (builder) => {
        builder
            .meshGradient({
                background: '#2b4a7a',
                layers: [
                    { position: '30% 25%', from: '#4a6fa5cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 95%', from: '#172b4d', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.22, scale: 0.9 });
    },
    'cork': (builder) => {
        builder
            .meshGradient({
                background: '#b98a5a',
                layers: [
                    { position: '30% 25%', from: '#d4a676', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 95%', from: '#8a6038', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.3, scale: 0.45 });
    },
};
