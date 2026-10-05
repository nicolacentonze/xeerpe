import {PresetConfig} from "../../models/index.ts";

export const neonPresets: Record<string, PresetConfig> = {
    'cyberpunk': (builder) => {
        builder
            .meshGradient({
                background: '#0a0014',
                layers: [
                    { position: '5% 10%', from: '#ff007fcc', to: 'transparent', colorToPosition: '58%' },
                    { position: '95% 90%', from: '#00f0ffcc', to: 'transparent', colorToPosition: '58%' },
                    { position: '90% 5%', from: '#7a00ff99', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .grid({ color: '#00f0ff', size: '32px', opacity: 0.08 })
            .grain({ intensity: 1 });
    },
    'synthwave': (builder) => {
        builder
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '50% 82%', from: '#ffd36bcc', to: 'transparent', colorToPosition: '22%' }
                ]
            })
            .linearGradient({
                angle: '180deg',
                colors: [
                    { color: '#0d0221', position: '0%' },
                    { color: '#261447', position: '38%' },
                    { color: '#6b1d6e', position: '62%' },
                    { color: '#ff3864', position: '84%' },
                    { color: '#ff9e3d', position: '100%' }
                ]
            })
            .grid({ color: '#ff3cac', size: '28px', opacity: 0.12 });
    },
    'outrun': (builder) => {
        builder
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '50% 100%', from: '#ffe14dcc', to: 'transparent', colorToPosition: '30%' }
                ]
            })
            .linearGradient({
                angle: '180deg',
                colors: [
                    { color: '#0b0033', position: '0%' },
                    { color: '#370075', position: '44%' },
                    { color: '#cc00a3', position: '72%' },
                    { color: '#ff6b2b', position: '100%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'retrowave': (builder) => {
        builder
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '50% 100%', from: '#ffffff33', to: 'transparent', colorToPosition: '35%' }
                ]
            })
            .linearGradient({
                angle: '180deg',
                colors: [
                    { color: '#1a0533', position: '0%' },
                    { color: '#5a189a', position: '46%' },
                    { color: '#ff4d8d', position: '80%' },
                    { color: '#ffd166', position: '100%' }
                ]
            });
    },
    'vaporwave': (builder) => {
        builder
            .meshGradient({
                background: '#2d1b4e',
                layers: [
                    { position: '12% 20%', from: '#ff71cecc', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 30%', from: '#01cdfecc', to: 'transparent', colorToPosition: '55%' },
                    { position: '60% 100%', from: '#b967ffcc', to: 'transparent', colorToPosition: '55%' },
                    { position: '50% 50%', from: '#fffb9655', to: 'transparent', colorToPosition: '30%' }
                ]
            });
    },
    'neon-tokyo': (builder) => {
        builder
            .meshGradient({
                background: '#080314',
                layers: [
                    { position: '50% 100%', from: '#ffb80088', to: 'transparent', colorToPosition: '35%' },
                    { position: '15% 30%', from: '#ff2e88cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '88% 25%', from: '#00d4ffcc', to: 'transparent', colorToPosition: '50%' },
                    { position: '70% 90%', from: '#8a2be2aa', to: 'transparent', colorToPosition: '50%' }
                ]
            })
            .grain({ intensity: 1.2 })
            .vignette({ intensity: 0.5, spread: 0.4 });
    },
    'miami': (builder) => {
        builder
            .meshGradient({
                background: '#1b1340',
                layers: [
                    { position: '5% 95%', from: '#ff6ec7cc', to: 'transparent', colorToPosition: '62%' },
                    { position: '95% 5%', from: '#22d3eecc', to: 'transparent', colorToPosition: '62%' },
                    { position: '95% 95%', from: '#fdba7466', to: 'transparent', colorToPosition: '35%' }
                ]
            });
    },
    'laser': (builder) => {
        builder
            .meshGradient({
                background: '#030006',
                layers: [
                    { position: '50% 30%', from: '#ff1f5a', to: 'transparent', colorToPosition: '100%', size: '75% 2.5%' },
                    { position: '50% 30%', from: '#ff1f5a66', to: 'transparent', colorToPosition: '100%', size: '80% 14%' },
                    { position: '50% 68%', from: '#00e5ff', to: 'transparent', colorToPosition: '100%', size: '75% 2.5%' },
                    { position: '50% 68%', from: '#00e5ff66', to: 'transparent', colorToPosition: '100%', size: '80% 14%' },
                    { position: '50% 50%', from: '#7a1fff55', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'arcade': (builder) => {
        builder
            .meshGradient({
                background: '#12002b',
                layers: [
                    { position: '15% 20%', from: '#ff3cacbb', to: 'transparent', colorToPosition: '55%' },
                    { position: '50% 60%', from: '#784ba0bb', to: 'transparent', colorToPosition: '50%' },
                    { position: '90% 90%', from: '#2b86c5bb', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .dots({ color: '#ffffff', size: '14px', opacity: 0.12 });
    },
    'hologram': (builder) => {
        builder
            .meshGradient({
                background: '#081626',
                layers: [
                    { position: '25% 30%', from: '#5ef2ffcc', to: 'transparent', colorToPosition: '50%' },
                    { position: '80% 25%', from: '#a07bffaa', to: 'transparent', colorToPosition: '45%' },
                    { position: '70% 90%', from: '#ff8ad8aa', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .grid({ color: '#5ef2ff', size: '20px', opacity: 0.12 });
    },
    'grid-runner': (builder) => {
        builder
            .meshGradient({
                background: '#000814',
                layers: [
                    { position: '50% 110%', from: '#00b4ffaa', to: 'transparent', colorToPosition: '60%' },
                    { position: '50% 40%', from: '#003566cc', to: 'transparent', colorToPosition: '60%' }
                ]
            })
            .grid({ color: '#00e5ff', size: '36px', opacity: 0.28 })
            .vignette({ intensity: 0.6, spread: 0.45 });
    },
    'matrix': (builder) => {
        builder
            .meshGradient({
                background: '#000a04',
                layers: [
                    { position: '50% 0%', from: '#00ff6a55', to: 'transparent', colorToPosition: '50%' },
                    { position: '30% 60%', from: '#00a83a66', to: 'transparent', colorToPosition: '45%' },
                    { position: '70% 50%', from: '#003b14cc', to: 'transparent', colorToPosition: '60%' }
                ]
            })
            .dots({ color: '#39ff88', size: '10px', opacity: 0.18 })
            .vignette({ intensity: 0.6, spread: 0.45 });
    },
    'electric': (builder) => {
        builder
            .meshGradient({
                background: '#03031a',
                layers: [
                    { position: '50% 50%', from: '#ffffff99', to: 'transparent', colorToPosition: '10%' },
                    { position: '50% 50%', from: '#00e1ffcc', to: 'transparent', colorToPosition: '32%' },
                    { position: '50% 50%', from: '#2d5bffcc', to: 'transparent', colorToPosition: '62%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'ultraviolet': (builder) => {
        builder
            .meshGradient({
                background: '#12002e',
                layers: [
                    { position: '80% 20%', from: '#ff4ff8aa', to: 'transparent', colorToPosition: '42%' },
                    { position: '25% 35%', from: '#7b2cffcc', to: 'transparent', colorToPosition: '60%' },
                    { position: '70% 95%', from: '#c400ffaa', to: 'transparent', colorToPosition: '50%' }
                ]
            })
            .grain({ intensity: 0.9 });
    },
    'acid': (builder) => {
        builder
            .meshGradient({
                background: '#02140f',
                layers: [
                    { position: '15% 20%', from: '#d4ff1acc', to: 'transparent', colorToPosition: '50%' },
                    { position: '85% 80%', from: '#00ffa3bb', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 10%', from: '#00c2ff66', to: 'transparent', colorToPosition: '40%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'neon-noir': (builder) => {
        builder
            .meshGradient({
                background: '#06060a',
                layers: [
                    { position: '0% 50%', from: '#ff2e63aa', to: 'transparent', colorToPosition: '45%' },
                    { position: '100% 50%', from: '#08d9d6aa', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .grain({ intensity: 1.5 })
            .vignette({ intensity: 0.7, spread: 0.5 });
    },
};
