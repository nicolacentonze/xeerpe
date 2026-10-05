import {PresetConfig} from "../../models/index.ts";

export const motionPresets: Record<string, PresetConfig> = {
    'lava-lamp': (builder) => {
        builder
            .meshGradient({
                background: '#1a0526',
                layers: [
                    { position: '20% 30%', from: '#ff5e3acc', to: 'transparent', colorToPosition: '45%' },
                    { position: '75% 65%', from: '#ff2e88cc', to: 'transparent', colorToPosition: '45%' },
                    { position: '55% 20%', from: '#ffb347aa', to: 'transparent', colorToPosition: '35%' }
                ]
            })
            .breathe({ duration: '5s' });
    },
    'aurora-dream': (builder) => {
        builder
            .meshGradient({
                background: '#030a14',
                layers: [
                    { position: '20% 20%', from: '#3dd6c2aa', to: 'transparent', colorToPosition: '55%' },
                    { position: '80% 30%', from: '#7a5cffaa', to: 'transparent', colorToPosition: '55%' },
                    { position: '50% 100%', from: '#ff4fa388', to: 'transparent', colorToPosition: '50%' }
                ]
            })
            .aurora({ duration: '8s' });
    },
    'aurora-australis': (builder) => {
        builder
            .meshGradient({
                background: '#030a14',
                layers: [
                    { position: '15% 25%', from: '#ff4fa3aa', to: 'transparent', colorToPosition: '50%' },
                    { position: '50% 10%', from: '#3dd6c2aa', to: 'transparent', colorToPosition: '50%' },
                    { position: '85% 35%', from: '#7a5cff99', to: 'transparent', colorToPosition: '50%' },
                    { position: '50% 110%', from: '#02060d', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .aurora({ duration: '9s' });
    },
    'bioluminescence': (builder) => {
        builder
            .meshGradient({
                background: '#010b14',
                layers: [
                    { position: '25% 70%', from: '#00ffd1aa', to: 'transparent', colorToPosition: '40%' },
                    { position: '75% 30%', from: '#0077ffaa', to: 'transparent', colorToPosition: '45%' },
                    { position: '60% 85%', from: '#7cffb288', to: 'transparent', colorToPosition: '30%' }
                ]
            })
            .aurora({ duration: '10s' });
    },
    'breathing-nebula': (builder) => {
        builder
            .meshGradient({
                background: '#0a0418',
                layers: [
                    { position: '35% 40%', from: '#e0458baa', to: 'transparent', colorToPosition: '45%' },
                    { position: '70% 35%', from: '#6a2fd1aa', to: 'transparent', colorToPosition: '50%' },
                    { position: '60% 85%', from: '#2fb5d199', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .breathe({ duration: '16s' });
    },
    'ocean-drift': (builder) => {
        builder
            .linearGradient({
                angle: '135deg',
                colors: [
                    { color: '#021a33', position: '0%' },
                    { color: '#0a6ebd', position: '30%' },
                    { color: '#3fc1e8', position: '50%' },
                    { color: '#0a6ebd', position: '70%' },
                    { color: '#021a33', position: '100%' }
                ],
                backgroundSize: '300% 300%'
            })
            .drift({ duration: '14s' });
    },
    'rainbow-drift': (builder) => {
        builder
            .linearGradient({
                angle: '135deg',
                colors: [
                    { color: '#ff9aa2', position: '0%' },
                    { color: '#ffdac1', position: '20%' },
                    { color: '#e2f0cb', position: '40%' },
                    { color: '#b5ead7', position: '60%' },
                    { color: '#c7ceea', position: '80%' },
                    { color: '#ff9aa2', position: '100%' }
                ],
                backgroundSize: '300% 300%'
            })
            .drift({ duration: '12s' });
    },
    'sunset-drift': (builder) => {
        builder
            .linearGradient({
                angle: '135deg',
                colors: [
                    { color: '#2b1055', position: '0%' },
                    { color: '#e0457b', position: '30%' },
                    { color: '#ff9a5a', position: '50%' },
                    { color: '#e0457b', position: '70%' },
                    { color: '#2b1055', position: '100%' }
                ],
                backgroundSize: '300% 300%'
            })
            .drift({ duration: '12s' });
    },
    'molten-gold': (builder) => {
        builder
            .linearGradient({
                angle: '90deg',
                colors: [
                    { color: '#8f6517', position: '0%' },
                    { color: '#d1a441', position: '30%' },
                    { color: '#fff1b8', position: '50%' },
                    { color: '#d1a441', position: '70%' },
                    { color: '#8f6517', position: '100%' }
                ],
                backgroundSize: '200% 100%'
            })
            .shimmer({ duration: '4s' });
    },
    'liquid-silver': (builder) => {
        builder
            .linearGradient({
                angle: '90deg',
                colors: [
                    { color: '#7c8288', position: '0%' },
                    { color: '#c3c8cd', position: '30%' },
                    { color: '#ffffff', position: '50%' },
                    { color: '#c3c8cd', position: '70%' },
                    { color: '#7c8288', position: '100%' }
                ],
                backgroundSize: '200% 100%'
            })
            .shimmer({ duration: '4s' });
    },
    'skeleton': (builder) => {
        builder
            .linearGradient({
                angle: '90deg',
                colors: [
                    { color: '#1e293b', position: '0%' },
                    { color: '#1e293b', position: '30%' },
                    { color: '#334155', position: '50%' },
                    { color: '#1e293b', position: '70%' },
                    { color: '#1e293b', position: '100%' }
                ],
                backgroundSize: '200% 100%'
            })
            .shimmer({ duration: '2s' });
    },
    'ember': (builder) => {
        builder
            .meshGradient({
                background: '#140402',
                layers: [
                    { position: '50% 110%', from: '#ffb347aa', to: 'transparent', colorToPosition: '30%' },
                    { position: '50% 115%', from: '#ff4d0dcc', to: 'transparent', colorToPosition: '55%' },
                    { position: '50% 120%', from: '#7a1200aa', to: 'transparent', colorToPosition: '80%' }
                ]
            })
            .grain({ intensity: 1.2 })
            .aurora({ duration: '6s' });
    },
};
