import {PresetConfig} from "../../models/index.ts";

export const moodPresets: Record<string, PresetConfig> = {
    'spring': (builder) => {
        builder
            .meshGradient({
                background: '#eaf7d9',
                layers: [
                    { position: '15% 20%', from: '#ffd6e7dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '85% 85%', from: '#bdeba0dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '85% 15%', from: '#fff4b8cc', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
    'summer': (builder) => {
        builder
            .meshGradient({
                background: '#ffc93c',
                layers: [
                    { position: '85% 10%', from: '#fff1b8dd', to: 'transparent', colorToPosition: '50%' },
                    { position: '5% 95%', from: '#ff7f50cc', to: 'transparent', colorToPosition: '60%' },
                    { position: '100% 100%', from: '#ff4f7a99', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
    'harvest': (builder) => {
        builder
            .meshGradient({
                background: '#b5651d',
                layers: [
                    { position: '20% 20%', from: '#f2c14ecc', to: 'transparent', colorToPosition: '50%' },
                    { position: '85% 85%', from: '#8a2c0dcc', to: 'transparent', colorToPosition: '55%' },
                    { position: '75% 25%', from: '#e8893aaa', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'winter': (builder) => {
        builder
            .meshGradient({
                background: '#dfe9f3',
                layers: [
                    { position: '25% 25%', from: '#ffffff', to: 'transparent', colorToPosition: '50%' },
                    { position: '85% 85%', from: '#a9c4e0cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '85% 15%', from: '#cfd9ffcc', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
    'serenity': (builder) => {
        builder
            .meshGradient({
                background: '#c9d8f0',
                layers: [
                    { position: '25% 25%', from: '#f0f4ffdd', to: 'transparent', colorToPosition: '55%' },
                    { position: '85% 85%', from: '#f7cad0cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '85% 15%', from: '#a9c1ebcc', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
    'zen': (builder) => {
        builder
            .meshGradient({
                background: '#e7e4d8',
                layers: [
                    { position: '30% 30%', from: '#f7f5ee', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 90%', from: '#b9c4a8cc', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.08, scale: 0.7 });
    },
    'calm': (builder) => {
        builder
            .meshGradient({
                background: '#bfd9d6',
                layers: [
                    { position: '25% 25%', from: '#eef7f5dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 90%', from: '#8fb9c9cc', to: 'transparent', colorToPosition: '55%' }
                ]
            });
    },
    'euphoria': (builder) => {
        builder
            .meshGradient({
                background: '#ff4fa3',
                layers: [
                    { position: '10% 15%', from: '#ffd23fcc', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 85%', from: '#7b5cffcc', to: 'transparent', colorToPosition: '55%' },
                    { position: '85% 15%', from: '#ff8a5bcc', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
    'romance': (builder) => {
        builder
            .meshGradient({
                background: '#7a1f3d',
                layers: [
                    { position: '25% 20%', from: '#ff9eb5aa', to: 'transparent', colorToPosition: '45%' },
                    { position: '35% 40%', from: '#d6336ccc', to: 'transparent', colorToPosition: '62%' },
                    { position: '90% 95%', from: '#3a0a1c', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'mystic': (builder) => {
        builder
            .meshGradient({
                background: '#140b2e',
                layers: [
                    { position: '80% 20%', from: '#5ef2d688', to: 'transparent', colorToPosition: '40%' },
                    { position: '30% 40%', from: '#6a3fd1cc', to: 'transparent', colorToPosition: '60%' },
                    { position: '70% 95%', from: '#c2409a88', to: 'transparent', colorToPosition: '50%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'nostalgia': (builder) => {
        builder
            .meshGradient({
                background: '#e3b7a0',
                layers: [
                    { position: '25% 25%', from: '#f7dfc8cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 90%', from: '#b9798acc', to: 'transparent', colorToPosition: '55%' },
                    { position: '85% 15%', from: '#f2c99aaa', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .grain({ intensity: 1.2 })
            .vignette({ color: '#5a2e2e', intensity: 0.3, spread: 0.5 });
    },
    'wanderlust': (builder) => {
        builder
            .meshGradient({
                background: '#1d5a85',
                layers: [
                    { position: '0% 0%', from: '#ffb38acc', to: 'transparent', colorToPosition: '40%' },
                    { position: '45% 55%', from: '#4fb3c9cc', to: 'transparent', colorToPosition: '50%' },
                    { position: '100% 100%', from: '#022b4a', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 0.6 });
    },
};
