import {PresetConfig} from "../../models/index.ts";

export const skyPresets: Record<string, PresetConfig> = {
    'dawn': (builder) => {
        builder
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '70% 100%', from: '#fff4e0aa', to: 'transparent', colorToPosition: '40%' }
                ]
            })
            .linearGradient({
                angle: '180deg',
                colors: [
                    { color: '#1d2a5c', position: '0%' },
                    { color: '#5b5fa8', position: '32%' },
                    { color: '#d99ab8', position: '64%' },
                    { color: '#ffd6b5', position: '86%' },
                    { color: '#fff1dc', position: '100%' }
                ]
            });
    },
    'morning': (builder) => {
        builder
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '80% 15%', from: '#ffffffcc', to: 'transparent', colorToPosition: '35%' },
                    { position: '20% 90%', from: '#fff3d199', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .linearGradient({
                angle: '180deg',
                colors: [
                    { color: '#7ec3f2', position: '0%' },
                    { color: '#b9defa', position: '55%' },
                    { color: '#fdf1e2', position: '100%' }
                ]
            });
    },
    'golden-hour': (builder) => {
        builder
            .meshGradient({
                background: '#ffae4a',
                layers: [
                    { position: '75% 70%', from: '#fff6d5', to: 'transparent', colorToPosition: '30%' },
                    { position: '70% 65%', from: '#ffe29acc', to: 'transparent', colorToPosition: '55%' },
                    { position: '10% 10%', from: '#ff7e5fcc', to: 'transparent', colorToPosition: '60%' }
                ]
            })
            .grain({ intensity: 0.6 });
    },
    'sunrise': (builder) => {
        builder
            .linearGradient({
                colors: [
                    { color: '#FFE5D9', position: '0%' },
                    { color: '#FFCDB6', position: '35%' },
                    { color: '#FFB7A3', position: '55%' },
                    { color: '#BFD8F2', position: '100%' }
                ],
                direction: 'to bottom'
            });
    },
    'sunset': (builder) => {
        builder
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '50% 92%', from: '#fff1b8cc', to: 'transparent', colorToPosition: '28%' }
                ]
            })
            .linearGradient({
                angle: '180deg',
                colors: [
                    { color: '#2b1055', position: '0%' },
                    { color: '#7b2f8e', position: '26%' },
                    { color: '#e0457b', position: '52%' },
                    { color: '#ff9a5a', position: '74%' },
                    { color: '#ffd28a', position: '100%' }
                ]
            })
            .grain({ intensity: 0.6 });
    },
    'dusk': (builder) => {
        builder
            .linearGradient({
                angle: '180deg',
                colors: [
                    { color: '#0f1b3d', position: '0%' },
                    { color: '#3a2f6b', position: '36%' },
                    { color: '#8a4f8e', position: '64%' },
                    { color: '#e0837a', position: '86%' },
                    { color: '#f6b48f', position: '100%' }
                ]
            })
            .grain({ intensity: 0.6 });
    },
    'twilight': (builder) => {
        builder
            .linearGradient({
                angle: '180deg',
                colors: [
                    { color: '#0b1026', position: '0%' },
                    { color: '#1f2a5a', position: '40%' },
                    { color: '#4b3f8f', position: '72%' },
                    { color: '#9a6fb0', position: '100%' }
                ]
            })
            .stars({ color: '#ffffffcc', count: 18, seed: 7, strokeWidth: '1.5px' });
    },
    'blue-hour': (builder) => {
        builder
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '50% 110%', from: '#ffd6a855', to: 'transparent', colorToPosition: '40%' }
                ]
            })
            .linearGradient({
                angle: '180deg',
                colors: [
                    { color: '#0a1a3a', position: '0%' },
                    { color: '#1e3c72', position: '45%' },
                    { color: '#3f6bb0', position: '76%' },
                    { color: '#8fb3e0', position: '100%' }
                ]
            });
    },
    'afterglow': (builder) => {
        builder
            .meshGradient({
                background: '#3a1c4a',
                layers: [
                    { position: '50% 110%', from: '#ffb38acc', to: 'transparent', colorToPosition: '35%' },
                    { position: '50% 115%', from: '#ff7a59cc', to: 'transparent', colorToPosition: '60%' },
                    { position: '10% 20%', from: '#a33a7acc', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'midnight': (builder) => {
        builder
            .meshGradient({
                background: '#04060e',
                layers: [
                    { position: '75% 20%', from: '#2a2f6a66', to: 'transparent', colorToPosition: '45%' },
                    { position: '25% 30%', from: '#141c3acc', to: 'transparent', colorToPosition: '60%' }
                ]
            })
            .grain({ intensity: 0.9 });
    },
    'starry-night': (builder) => {
        builder
            .meshGradient({
                background: '#050816',
                layers: [
                    { position: '85% 15%', from: '#3a1f5c88', to: 'transparent', colorToPosition: '50%' },
                    { position: '20% 80%', from: '#1b2559cc', to: 'transparent', colorToPosition: '60%' }
                ]
            })
            .stars({ count: 40, seed: 42, strokeWidth: '1.9px', opacity: 1 });
    },
    'storm': (builder) => {
        builder
            .meshGradient({
                background: '#1a202c',
                layers: [
                    { position: '70% 25%', from: '#c9d6ff44', to: 'transparent', colorToPosition: '25%' },
                    { position: '30% 30%', from: '#3a4458cc', to: 'transparent', colorToPosition: '60%' },
                    { position: '80% 100%', from: '#0c1018', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1.3 })
            .vignette({ intensity: 0.5, spread: 0.45 });
    },
    'fog': (builder) => {
        builder
            .meshGradient({
                background: '#c4c9ce',
                layers: [
                    { position: '30% 30%', from: '#f4f6f8ee', to: 'transparent', colorToPosition: '55%' },
                    { position: '80% 60%', from: '#e6e9ecdd', to: 'transparent', colorToPosition: '50%' },
                    { position: '95% 100%', from: '#a3abb3aa', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'rain': (builder) => {
        builder
            .meshGradient({
                background: '#2c3a4b',
                layers: [
                    { position: '30% 10%', from: '#8aa4bf66', to: 'transparent', colorToPosition: '45%' },
                    { position: '40% 40%', from: '#4f6a85cc', to: 'transparent', colorToPosition: '60%' },
                    { position: '90% 100%', from: '#18212c', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.1, scale: 0.8 });
    },
    'snowfall': (builder) => {
        builder
            .meshGradient({
                background: '#aebfd3',
                layers: [
                    { position: '30% 20%', from: '#eef4fbdd', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 100%', from: '#8ea3bdcc', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .stars({ count: 36, seed: 11, strokeWidth: '2.7px', opacity: 1 });
    },
    'overcast': (builder) => {
        builder
            .meshGradient({
                background: '#8a949f',
                layers: [
                    { position: '30% 15%', from: '#dde2e7cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '80% 40%', from: '#c3cad1aa', to: 'transparent', colorToPosition: '45%' },
                    { position: '90% 110%', from: '#5f6872', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'monsoon': (builder) => {
        builder
            .meshGradient({
                background: '#1d3836',
                layers: [
                    { position: '25% 15%', from: '#7aa59f66', to: 'transparent', colorToPosition: '45%' },
                    { position: '40% 40%', from: '#3d6b66cc', to: 'transparent', colorToPosition: '60%' },
                    { position: '90% 100%', from: '#0c1c1b', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'rainbow': (builder) => {
        builder
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '50% 50%', from: '#ffffffaa', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#ff9aa2', position: '0%' },
                    { color: '#ffb7a5', position: '17%' },
                    { color: '#ffdac1', position: '33%' },
                    { color: '#e2f0cb', position: '50%' },
                    { color: '#b5ead7', position: '67%' },
                    { color: '#c7ceea', position: '83%' },
                    { color: '#d9c2f0', position: '100%' }
                ]
            });
    },
    'horizon': (builder) => {
        builder
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '50% 50%', from: '#ffffffcc', to: 'transparent', colorToPosition: '30%' }
                ]
            })
            .linearGradient({
                angle: '180deg',
                colors: [
                    { color: '#9fd3ff', position: '0%' },
                    { color: '#d6ecff', position: '46%' },
                    { color: '#fff3e3', position: '52%' },
                    { color: '#ffd8b0', position: '64%' },
                    { color: '#f2a07b', position: '100%' }
                ]
            });
    },
    'cloud-nine': (builder) => {
        builder
            .meshGradient({
                background: '#c9e3ff',
                layers: [
                    { position: '20% 30%', from: '#ffffffee', to: 'transparent', colorToPosition: '40%' },
                    { position: '75% 20%', from: '#ffffffdd', to: 'transparent', colorToPosition: '40%' },
                    { position: '60% 85%', from: '#f0e6ffcc', to: 'transparent', colorToPosition: '50%' },
                    { position: '10% 90%', from: '#ffffffcc', to: 'transparent', colorToPosition: '40%' }
                ]
            });
    },
    'solstice': (builder) => {
        builder
            .meshGradient({
                background: '#ff9a5c',
                layers: [
                    { position: '30% 25%', from: '#ffe08add', to: 'transparent', colorToPosition: '50%' },
                    { position: '85% 80%', from: '#ff5e7ecc', to: 'transparent', colorToPosition: '55%' },
                    { position: '80% 15%', from: '#ffd1a8', to: 'transparent', colorToPosition: '40%' }
                ]
            })
            .grain({ intensity: 0.6 });
    },
};
