import {PresetConfig} from "../../models/index.ts";

export const naturePresets: Record<string, PresetConfig> = {
    'jungle': (builder) => {
        builder
            .meshGradient({
                background: '#04160c',
                layers: [
                    { position: '32% 8%', from: '#b6e06a66', to: 'transparent', colorToPosition: '32%' },
                    { position: '18% 22%', from: '#2a8a45cc', to: 'transparent', colorToPosition: '62%' },
                    { position: '85% 25%', from: '#0f5a30cc', to: 'transparent', colorToPosition: '58%' },
                    { position: '55% 90%', from: '#3f9a3fb3', to: 'transparent', colorToPosition: '55%' },
                    { position: '92% 95%', from: '#06291a', to: 'transparent', colorToPosition: '50%' }
                ]
            })
            .grain({ intensity: 1.3 })
            .vignette({ color: '#010804', intensity: 0.55, spread: 0.45 });
    },
    'rainforest': (builder) => {
        builder
            .meshGradient({
                background: '#0a1f17',
                layers: [
                    { position: '50% 0%', from: '#d9efe355', to: 'transparent', colorToPosition: '45%' },
                    { position: '20% 35%', from: '#2e7d5bcc', to: 'transparent', colorToPosition: '60%' },
                    { position: '85% 60%', from: '#145c45cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '60% 30%', from: '#6fb58a88', to: 'transparent', colorToPosition: '40%' }
                ]
            })
            .grain({ intensity: 1.1 })
            .vignette({ intensity: 0.4, spread: 0.4 });
    },
    'forest': (builder) => {
        builder
            .meshGradient({
                background: '#10281b',
                layers: [
                    { position: '72% 0%', from: '#a8cf7a55', to: 'transparent', colorToPosition: '40%' },
                    { position: '22% 30%', from: '#3a7448cc', to: 'transparent', colorToPosition: '60%' },
                    { position: '80% 70%', from: '#24563acc', to: 'transparent', colorToPosition: '55%' },
                    { position: '95% 100%', from: '#071a10', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .grain({ intensity: 1.2 })
            .vignette({ intensity: 0.4, spread: 0.45 });
    },
    'pine': (builder) => {
        builder
            .meshGradient({
                background: '#0c231f',
                layers: [
                    { position: '22% 18%', from: '#5aa08c88', to: 'transparent', colorToPosition: '45%' },
                    { position: '35% 40%', from: '#22594dcc', to: 'transparent', colorToPosition: '60%' },
                    { position: '85% 75%', from: '#173f37cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '95% 100%', from: '#050f0d', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'moss': (builder) => {
        builder
            .meshGradient({
                background: '#3a4a1e',
                layers: [
                    { position: '25% 25%', from: '#a3b85a99', to: 'transparent', colorToPosition: '50%' },
                    { position: '65% 55%', from: '#6b8a2ecc', to: 'transparent', colorToPosition: '55%' },
                    { position: '95% 95%', from: '#1f2a0c', to: 'transparent', colorToPosition: '50%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.14, scale: 0.6 });
    },
    'meadow': (builder) => {
        builder
            .meshGradient({
                background: '#9fd06a',
                layers: [
                    { position: '50% -10%', from: '#d9efffdd', to: 'transparent', colorToPosition: '55%' },
                    { position: '80% 40%', from: '#fff2a8cc', to: 'transparent', colorToPosition: '40%' },
                    { position: '20% 45%', from: '#e8f7b0cc', to: 'transparent', colorToPosition: '45%' },
                    { position: '50% 110%', from: '#5fa83ecc', to: 'transparent', colorToPosition: '55%' }
                ]
            });
    },
    'bamboo': (builder) => {
        builder
            .linearGradient({
                angle: '90deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '22%' },
                    { color: '#ffffff26', position: '30%' },
                    { color: '#ffffff00', position: '38%' },
                    { color: '#ffffff00', position: '62%' },
                    { color: '#ffffff1c', position: '70%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#bcd47e',
                layers: [
                    { position: '25% 20%', from: '#f2f8d6dd', to: 'transparent', colorToPosition: '50%' },
                    { position: '80% 70%', from: '#8fb84fcc', to: 'transparent', colorToPosition: '55%' },
                    { position: '5% 100%', from: '#5c8a33aa', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
    'desert': (builder) => {
        builder
            .meshGradient({
                background: '#e6b27a',
                layers: [
                    { position: '20% 15%', from: '#fff1d6dd', to: 'transparent', colorToPosition: '50%' },
                    { position: '60% 40%', from: '#f7d3a1cc', to: 'transparent', colorToPosition: '50%' },
                    { position: '90% 95%', from: '#c47b45cc', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'dunes': (builder) => {
        builder
            .linearGradient({
                angle: '165deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '35%' },
                    { color: '#ffd9a826', position: '55%' },
                    { color: '#ffffff00', position: '75%' }
                ]
            })
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '20% 10%', from: '#ffe3b8aa', to: 'transparent', colorToPosition: '45%' },
                    { position: '75% 70%', from: '#d0763f88', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .linearGradient({
                angle: '160deg',
                colors: [
                    { color: '#f5c48b', position: '0%' },
                    { color: '#e99a5e', position: '45%' },
                    { color: '#c96a3a', position: '70%' },
                    { color: '#8e3f22', position: '100%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'savanna': (builder) => {
        builder
            .meshGradient({
                background: '#d99a3e',
                layers: [
                    { position: '50% 20%', from: '#ffe29acc', to: 'transparent', colorToPosition: '45%' },
                    { position: '90% 30%', from: '#e8743b99', to: 'transparent', colorToPosition: '45%' },
                    { position: '15% 40%', from: '#f2c96bcc', to: 'transparent', colorToPosition: '50%' },
                    { position: '50% 110%', from: '#8a5524cc', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 0.9 });
    },
    'canyon': (builder) => {
        builder
            .meshGradient({
                background: '#7a3119',
                layers: [
                    { position: '25% 15%', from: '#f0a868aa', to: 'transparent', colorToPosition: '45%' },
                    { position: '35% 40%', from: '#c8643acc', to: 'transparent', colorToPosition: '60%' },
                    { position: '90% 95%', from: '#3d150a', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.1, scale: 0.5 })
            .vignette({ intensity: 0.35, spread: 0.4 });
    },
    'glacier': (builder) => {
        builder
            .meshGradient({
                background: '#cdebf7',
                layers: [
                    { position: '25% 20%', from: '#ffffff', to: 'transparent', colorToPosition: '50%' },
                    { position: '80% 70%', from: '#8fd3f0cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '95% 100%', from: '#4fa8d899', to: 'transparent', colorToPosition: '45%' },
                    { position: '60% 30%', from: '#e6f8ff', to: 'transparent', colorToPosition: '40%' }
                ]
            });
    },
    'tundra': (builder) => {
        builder
            .meshGradient({
                background: '#c4cfcc',
                layers: [
                    { position: '30% 25%', from: '#f1f5f3dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '80% 85%', from: '#8ea8a1cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '85% 15%', from: '#b8c9d6aa', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'volcano': (builder) => {
        builder
            .meshGradient({
                background: '#110503',
                layers: [
                    { position: '50% 105%', from: '#ffc04d99', to: 'transparent', colorToPosition: '22%' },
                    { position: '50% 110%', from: '#ff4d0dcc', to: 'transparent', colorToPosition: '48%' },
                    { position: '50% 115%', from: '#b3200fcc', to: 'transparent', colorToPosition: '70%' },
                    { position: '20% 10%', from: '#3a0d06', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1.3 });
    },
    'lava': (builder) => {
        builder
            .meshGradient({
                background: '#1f0502',
                layers: [
                    { position: '30% 35%', from: '#ffd23f99', to: 'transparent', colorToPosition: '25%' },
                    { position: '30% 40%', from: '#ff6a00cc', to: 'transparent', colorToPosition: '50%' },
                    { position: '80% 70%', from: '#ff2e00cc', to: 'transparent', colorToPosition: '50%' },
                    { position: '95% 10%', from: '#7a1200', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .grain({ intensity: 1.2 });
    },
    'ocean': (builder) => {
        builder
            .meshGradient({
                background: '#03264a',
                layers: [
                    { position: '25% 15%', from: '#3fc1e8aa', to: 'transparent', colorToPosition: '45%' },
                    { position: '35% 35%', from: '#0a6ebdcc', to: 'transparent', colorToPosition: '62%' },
                    { position: '90% 95%', from: '#021a33', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'lagoon': (builder) => {
        builder
            .meshGradient({
                background: '#12b5ad',
                layers: [
                    { position: '25% 20%', from: '#d4fff6dd', to: 'transparent', colorToPosition: '50%' },
                    { position: '60% 45%', from: '#7ff5e6cc', to: 'transparent', colorToPosition: '50%' },
                    { position: '95% 100%', from: '#06808acc', to: 'transparent', colorToPosition: '55%' }
                ]
            });
    },
    'coral-reef': (builder) => {
        builder
            .meshGradient({
                background: '#ff8a75',
                layers: [
                    { position: '15% 15%', from: '#ffd9b0dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 20%', from: '#ff5c80cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '50% 60%', from: '#ffb08acc', to: 'transparent', colorToPosition: '40%' },
                    { position: '100% 110%', from: '#2cc5c0aa', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
    'deep-sea': (builder) => {
        builder
            .meshGradient({
                background: '#020817',
                layers: [
                    { position: '50% -10%', from: '#3aa6c444', to: 'transparent', colorToPosition: '45%' },
                    { position: '50% 20%', from: '#0b3a5ecc', to: 'transparent', colorToPosition: '65%' },
                    { position: '50% 110%', from: '#010409', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'tropical': (builder) => {
        builder
            .meshGradient({
                background: '#14bfa9',
                layers: [
                    { position: '8% 10%', from: '#ffd84dbb', to: 'transparent', colorToPosition: '58%' },
                    { position: '95% 15%', from: '#ff7a7abb', to: 'transparent', colorToPosition: '55%' },
                    { position: '85% 100%', from: '#22e1f2aa', to: 'transparent', colorToPosition: '55%' },
                    { position: '40% 70%', from: '#8ff0c4aa', to: 'transparent', colorToPosition: '40%' }
                ]
            });
    },
    'autumn': (builder) => {
        builder
            .meshGradient({
                background: '#7a2e0e',
                layers: [
                    { position: '20% 20%', from: '#f2a541cc', to: 'transparent', colorToPosition: '50%' },
                    { position: '70% 40%', from: '#e0661bcc', to: 'transparent', colorToPosition: '55%' },
                    { position: '95% 100%', from: '#4a1606', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'cherry-blossom': (builder) => {
        builder
            .meshGradient({
                background: '#fde2ec',
                layers: [
                    { position: '25% 25%', from: '#fff7fa', to: 'transparent', colorToPosition: '50%' },
                    { position: '80% 25%', from: '#ffbdd5dd', to: 'transparent', colorToPosition: '50%' },
                    { position: '70% 95%', from: '#f6a3c4bb', to: 'transparent', colorToPosition: '50%' },
                    { position: '5% 90%', from: '#e9d8ff99', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
    'lavender-field': (builder) => {
        builder
            .meshGradient({
                background: '#8e7cc3',
                layers: [
                    { position: '50% -10%', from: '#f0c6e8aa', to: 'transparent', colorToPosition: '50%' },
                    { position: '25% 40%', from: '#c3b1f0cc', to: 'transparent', colorToPosition: '50%' },
                    { position: '70% 110%', from: '#5a3f9acc', to: 'transparent', colorToPosition: '60%' }
                ]
            })
            .grain({ intensity: 0.6 });
    },
    'sunflower': (builder) => {
        builder
            .meshGradient({
                background: '#ffbf00',
                layers: [
                    { position: '25% 20%', from: '#fff1a8dd', to: 'transparent', colorToPosition: '50%' },
                    { position: '80% 75%', from: '#ff9500cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '10% 115%', from: '#7fb04a99', to: 'transparent', colorToPosition: '40%' }
                ]
            });
    },
    'wheat': (builder) => {
        builder
            .meshGradient({
                background: '#e1bd86',
                layers: [
                    { position: '25% 20%', from: '#fff3d6dd', to: 'transparent', colorToPosition: '50%' },
                    { position: '85% 85%', from: '#c99a55cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '70% 30%', from: '#f6e2b8', to: 'transparent', colorToPosition: '40%' }
                ]
            })
            .grain({ intensity: 0.9 });
    },
};
