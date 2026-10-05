import {PresetConfig} from "../../models/index.ts";

export const gemPresets: Record<string, PresetConfig> = {
    'emerald': (builder) => {
        builder
            .linearGradient({
                angle: '125deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff19', position: '47%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#03261a',
                layers: [
                    { position: '22% 18%', from: '#5ef0a6aa', to: 'transparent', colorToPosition: '42%' },
                    { position: '30% 30%', from: '#11a865cc', to: 'transparent', colorToPosition: '62%' },
                    { position: '80% 40%', from: '#0b6b45', to: 'transparent', colorToPosition: '55%' },
                    { position: '88% 95%', from: '#010f0a', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .vignette({ color: '#00140b', intensity: 0.6, spread: 0.45 });
    },
    'sapphire': (builder) => {
        builder
            .linearGradient({
                angle: '125deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff19', position: '47%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#040d3a',
                layers: [
                    { position: '24% 20%', from: '#7aa8ffaa', to: 'transparent', colorToPosition: '40%' },
                    { position: '32% 32%', from: '#1f4fd8cc', to: 'transparent', colorToPosition: '62%' },
                    { position: '80% 45%', from: '#0f2a8a', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 95%', from: '#01051a', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .vignette({ color: '#000418', intensity: 0.6, spread: 0.45 });
    },
    'ruby': (builder) => {
        builder
            .linearGradient({
                angle: '125deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff19', position: '47%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#2a0010',
                layers: [
                    { position: '24% 20%', from: '#ff7a9caa', to: 'transparent', colorToPosition: '40%' },
                    { position: '32% 32%', from: '#d1103fcc', to: 'transparent', colorToPosition: '62%' },
                    { position: '80% 45%', from: '#7a0026', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 95%', from: '#120006', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .vignette({ color: '#120006', intensity: 0.6, spread: 0.45 });
    },
    'amethyst': (builder) => {
        builder
            .linearGradient({
                angle: '125deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff19', position: '47%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#1c0838',
                layers: [
                    { position: '24% 20%', from: '#d4a5ffaa', to: 'transparent', colorToPosition: '40%' },
                    { position: '32% 32%', from: '#8a3fe0cc', to: 'transparent', colorToPosition: '62%' },
                    { position: '80% 45%', from: '#4a1a8a', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 95%', from: '#0c0318', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .vignette({ color: '#0c0318', intensity: 0.6, spread: 0.45 });
    },
    'topaz': (builder) => {
        builder
            .linearGradient({
                angle: '125deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff1f', position: '47%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#4a2302',
                layers: [
                    { position: '24% 20%', from: '#ffe0a3cc', to: 'transparent', colorToPosition: '40%' },
                    { position: '32% 32%', from: '#f29a1fcc', to: 'transparent', colorToPosition: '62%' },
                    { position: '80% 45%', from: '#b35a07', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 95%', from: '#2a1201', to: 'transparent', colorToPosition: '55%' }
                ]
            });
    },
    'citrine': (builder) => {
        builder
            .linearGradient({
                angle: '125deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff26', position: '47%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#c98a06',
                layers: [
                    { position: '24% 20%', from: '#fff6c2dd', to: 'transparent', colorToPosition: '42%' },
                    { position: '32% 32%', from: '#ffd23fcc', to: 'transparent', colorToPosition: '62%' },
                    { position: '80% 45%', from: '#e8a40c', to: 'transparent', colorToPosition: '55%' },
                    { position: '92% 95%', from: '#8a5704', to: 'transparent', colorToPosition: '55%' }
                ]
            });
    },
    'garnet': (builder) => {
        builder
            .meshGradient({
                background: '#1f0306',
                layers: [
                    { position: '24% 22%', from: '#c2414faa', to: 'transparent', colorToPosition: '42%' },
                    { position: '34% 34%', from: '#7a0f1fcc', to: 'transparent', colorToPosition: '62%' },
                    { position: '80% 50%', from: '#4a0711', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 0.8 })
            .vignette({ color: '#0a0102', intensity: 0.65, spread: 0.5 });
    },
    'aquamarine': (builder) => {
        builder
            .linearGradient({
                angle: '125deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff33', position: '47%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#7fd6dd',
                layers: [
                    { position: '24% 20%', from: '#effffecc', to: 'transparent', colorToPosition: '45%' },
                    { position: '35% 35%', from: '#a6f0ecdd', to: 'transparent', colorToPosition: '62%' },
                    { position: '82% 55%', from: '#3fb1c2', to: 'transparent', colorToPosition: '55%' },
                    { position: '95% 100%', from: '#1f8aa3', to: 'transparent', colorToPosition: '50%' }
                ]
            });
    },
    'turquoise': (builder) => {
        builder
            .meshGradient({
                background: '#1aa7a1',
                layers: [
                    { position: '20% 22%', from: '#9ff0e4cc', to: 'transparent', colorToPosition: '50%' },
                    { position: '85% 80%', from: '#0f7f86', to: 'transparent', colorToPosition: '55%' },
                    { position: '60% 35%', from: '#45c9bdcc', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.1, scale: 0.35 });
    },
    'jade': (builder) => {
        builder
            .linearGradient({
                angle: '115deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff1c', position: '45%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#4f8f6a',
                layers: [
                    { position: '22% 22%', from: '#c7ecd2cc', to: 'transparent', colorToPosition: '50%' },
                    { position: '85% 85%', from: '#2f6b4c', to: 'transparent', colorToPosition: '55%' },
                    { position: '65% 30%', from: '#8fcca5aa', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .grain({ intensity: 0.7 });
    },
    'tanzanite': (builder) => {
        builder
            .meshGradient({
                background: '#160a4a',
                layers: [
                    { position: '24% 20%', from: '#9c8cffaa', to: 'transparent', colorToPosition: '42%' },
                    { position: '32% 32%', from: '#4b33c9cc', to: 'transparent', colorToPosition: '62%' },
                    { position: '82% 30%', from: '#7a2fbf88', to: 'transparent', colorToPosition: '50%' },
                    { position: '90% 95%', from: '#070322', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .vignette({ color: '#070322', intensity: 0.6, spread: 0.45 });
    },
    'opal': (builder) => {
        builder
            .meshGradient({
                background: '#eaf0f2',
                layers: [
                    { position: '15% 25%', from: '#7ee0d2bb', to: 'transparent', colorToPosition: '50%' },
                    { position: '80% 18%', from: '#f7a8d8bb', to: 'transparent', colorToPosition: '50%' },
                    { position: '70% 85%', from: '#9ab8ffbb', to: 'transparent', colorToPosition: '50%' },
                    { position: '25% 85%', from: '#ffe08abb', to: 'transparent', colorToPosition: '45%' },
                    { position: '50% 50%', from: '#b9f59abb', to: 'transparent', colorToPosition: '35%' }
                ]
            })
            .grain({ intensity: 0.5 });
    },
    'pearl': (builder) => {
        builder
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff4c', position: '45%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#f2ede6',
                layers: [
                    { position: '30% 28%', from: '#ffffff', to: 'transparent', colorToPosition: '50%' },
                    { position: '85% 20%', from: '#f3d9e3bb', to: 'transparent', colorToPosition: '50%' },
                    { position: '80% 90%', from: '#d9e4f2bb', to: 'transparent', colorToPosition: '55%' },
                    { position: '10% 90%', from: '#ecdcc6bb', to: 'transparent', colorToPosition: '50%' }
                ]
            });
    },
    'moonstone': (builder) => {
        builder
            .meshGradient({
                background: '#c4cedb',
                layers: [
                    { position: '30% 30%', from: '#f2f6ffdd', to: 'transparent', colorToPosition: '50%' },
                    { position: '75% 35%', from: '#8fb0e6aa', to: 'transparent', colorToPosition: '45%' },
                    { position: '45% 70%', from: '#ffffffaa', to: 'transparent', colorToPosition: '40%' },
                    { position: '95% 95%', from: '#a8b4c4', to: 'transparent', colorToPosition: '50%' }
                ]
            });
    },
    'rose-quartz': (builder) => {
        builder
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff2b', position: '48%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#efc6cf',
                layers: [
                    { position: '28% 26%', from: '#ffeef1dd', to: 'transparent', colorToPosition: '50%' },
                    { position: '82% 78%', from: '#e39aadaa', to: 'transparent', colorToPosition: '55%' },
                    { position: '70% 25%', from: '#fff8f8cc', to: 'transparent', colorToPosition: '35%' }
                ]
            });
    },
    'onyx': (builder) => {
        builder
            .linearGradient({
                angle: '125deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff0f', position: '46%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#08080a',
                layers: [
                    { position: '25% 20%', from: '#2c2c33aa', to: 'transparent', colorToPosition: '55%' },
                    { position: '80% 80%', from: '#16161a', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1 });
    },
};
