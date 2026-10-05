import {PresetConfig} from "../../models/index.ts";
import {colors} from "../colors.ts";

export const spacePresets: Record<string, PresetConfig> = {
    'galaxy': (builder) => {
        builder
            .meshGradient({
                background: '#05030f',
                layers: [
                    { position: '70% 40%', from: '#c2409a88', to: 'transparent', colorToPosition: '35%' },
                    { position: '30% 35%', from: '#5b2a9ecc', to: 'transparent', colorToPosition: '60%' },
                    { position: '85% 85%', from: '#1f3a8acc', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .stars({ count: 36, seed: 3, strokeWidth: '1.9px', opacity: 1 })
            .grain({ intensity: 0.8 });
    },
    'nebula': (builder) => {
        builder
            .meshGradient({
                background: '#0a0418',
                layers: [
                    { position: '45% 50%', from: '#ffb34766', to: 'transparent', colorToPosition: '20%' },
                    { position: '35% 40%', from: '#e0458baa', to: 'transparent', colorToPosition: '45%' },
                    { position: '70% 35%', from: '#6a2fd1aa', to: 'transparent', colorToPosition: '50%' },
                    { position: '60% 85%', from: '#2fb5d199', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .stars({ color: '#ffffffcc', count: 24, seed: 19, strokeWidth: '1.9px' })
            .grain({ intensity: 1 });
    },
    'cosmos': (builder) => {
        builder
            .meshGradient({
                background: '#02010a',
                layers: [
                    { position: '80% 20%', from: '#4a148c99', to: 'transparent', colorToPosition: '55%' },
                    { position: '20% 70%', from: '#1a237ecc', to: 'transparent', colorToPosition: '60%' },
                    { position: '60% 100%', from: '#00838f55', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .stars({ count: 44, seed: 27, strokeWidth: '1.9px', opacity: 1 });
    },
    'milky-way': (builder) => {
        builder
            .linearGradient({
                angle: '135deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '30%' },
                    { color: '#d8c9ff22', position: '45%' },
                    { color: '#fff1d633', position: '50%' },
                    { color: '#c9e6ff22', position: '55%' },
                    { color: '#ffffff00', position: '70%' }
                ]
            })
            .meshGradient({
                background: '#03040c',
                layers: [
                    { position: '35% 40%', from: '#6a4fb066', to: 'transparent', colorToPosition: '30%' },
                    { position: '55% 55%', from: '#f2c48d55', to: 'transparent', colorToPosition: '25%' }
                ]
            })
            .stars({ count: 60, seed: 51, strokeWidth: '1.6px', opacity: 1 });
    },
    'stardust': (builder) => {
        builder
            .meshGradient({
                background: '#120a1f',
                layers: [
                    { position: '70% 30%', from: '#7a4a8a66', to: 'transparent', colorToPosition: '50%' },
                    { position: '25% 70%', from: '#3d2a5ccc', to: 'transparent', colorToPosition: '60%' }
                ]
            })
            .stars({ color: '#ffe8b0', count: 50, seed: 77, strokeWidth: '1.7px', opacity: 1 });
    },
    'supernova': (builder) => {
        builder
            .meshGradient({
                background: '#0a0205',
                layers: [
                    { position: '50% 50%', from: '#fff6dd', to: 'transparent', colorToPosition: '10%' },
                    { position: '50% 50%', from: '#ffc76bcc', to: 'transparent', colorToPosition: '24%' },
                    { position: '50% 50%', from: '#ff4d6dbb', to: 'transparent', colorToPosition: '42%' },
                    { position: '50% 50%', from: '#6a1b9a99', to: 'transparent', colorToPosition: '65%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'black-hole': (builder) => {
        builder
            .meshGradient({
                background: '#000000',
                layers: [
                    { position: '50% 50%', from: '#000000', to: 'transparent', colorFromPosition: '92%', colorToPosition: '100%', size: '10% 17%' },
                    { position: '50% 50%', from: '#fff1d0', to: 'transparent', colorFromPosition: '80%', colorToPosition: '100%', size: '11.5% 20%' },
                    { position: '50% 50%', from: '#fff1d0', to: 'transparent', colorFromPosition: '30%', colorToPosition: '100%', size: '30% 6%' },
                    { position: '50% 50%', from: '#ff9e3dcc', to: 'transparent', colorToPosition: '100%', size: '48% 15%' },
                    { position: '50% 50%', from: '#ff4d1a55', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'eclipse': (builder) => {
        builder
            .meshGradient({
                background: '#020203',
                layers: [
                    { position: '50% 50%', from: '#020203', to: 'transparent', colorFromPosition: '97%', colorToPosition: '100%', size: '11.5% 20%' },
                    { position: '50% 50%', from: '#fffaf0', to: 'transparent', colorFromPosition: '88%', colorToPosition: '100%', size: '12.6% 21.8%' },
                    { position: '50% 50%', from: '#ffe9bfcc', to: 'transparent', colorFromPosition: '45%', colorToPosition: '100%', size: '19% 33%' },
                    { position: '50% 50%', from: '#ffc56b33', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .stars({ color: '#ffffff99', count: 14, seed: 61, strokeWidth: '1.3px' });
    },
    'event-horizon': (builder) => {
        builder
            .meshGradient({
                background: '#05010a',
                layers: [
                    { position: '50% 125%', from: '#ffd9a0', to: 'transparent', colorToPosition: '28%' },
                    { position: '50% 125%', from: '#ff5e3acc', to: 'transparent', colorToPosition: '45%' },
                    { position: '50% 125%', from: '#7a1fa0aa', to: 'transparent', colorToPosition: '65%' }
                ]
            })
            .stars({ color: '#ffffffaa', count: 20, seed: 5, strokeWidth: '1.5px' });
    },
    'quasar': (builder) => {
        builder
            .meshGradient({
                background: '#03010a',
                layers: [
                    { position: '50% 50%', from: '#e8f8ff', to: 'transparent', colorToPosition: '8%' },
                    { position: '50% 50%', from: '#4f7bffcc', to: 'transparent', colorToPosition: '30%' },
                    { position: '50% 50%', from: '#9b3dffaa', to: 'transparent', colorToPosition: '55%' },
                    { position: '50% 50%', from: '#4f7bff66', to: 'transparent', colorToPosition: '100%', size: '6% 70%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'mars': (builder) => {
        builder
            .meshGradient({
                background: '#1f0703',
                layers: [
                    { position: '28% 28%', from: '#f0a06aaa', to: 'transparent', colorToPosition: '30%' },
                    { position: '35% 38%', from: '#c1440ecc', to: 'transparent', colorToPosition: '58%' },
                    { position: '80% 85%', from: '#5a1a08', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1.2 });
    },
    'jupiter': (builder) => {
        builder
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '66% 62%', from: '#b5462acc', to: 'transparent', colorToPosition: '100%', size: '12% 7%' }
                ]
            })
            .linearGradient({
                angle: '172deg',
                colors: [
                    { color: '#d9b38c', position: '0%' },
                    { color: '#c48a5a', position: '14%' },
                    { color: '#f0dcc0', position: '27%' },
                    { color: '#b8774a', position: '41%' },
                    { color: '#e8c9a0', position: '54%' },
                    { color: '#9a5a35', position: '67%' },
                    { color: '#efd8b8', position: '81%' },
                    { color: '#c49270', position: '100%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'saturn': (builder) => {
        builder
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '25% 20%', from: '#ffffff66', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .linearGradient({
                angle: '168deg',
                colors: [
                    { color: '#f3e2bd', position: '0%' },
                    { color: '#e2c28c', position: '22%' },
                    { color: '#f6e8c8', position: '40%' },
                    { color: '#d8b47c', position: '60%' },
                    { color: '#efd9ad', position: '80%' },
                    { color: '#c9a46c', position: '100%' }
                ]
            })
            .grain({ intensity: 0.6 });
    },
    'neptune': (builder) => {
        builder
            .meshGradient({
                background: '#0b2683',
                layers: [
                    { position: '25% 20%', from: '#9fd4ffaa', to: 'transparent', colorToPosition: '38%' },
                    { position: '35% 35%', from: '#3f7fe0cc', to: 'transparent', colorToPosition: '60%' },
                    { position: '90% 95%', from: '#03104a', to: 'transparent', colorToPosition: '55%' }
                ]
            });
    },
    'venus': (builder) => {
        builder
            .meshGradient({
                background: '#eeb85e',
                layers: [
                    { position: '28% 25%', from: '#fff3d1', to: 'transparent', colorToPosition: '40%' },
                    { position: '40% 40%', from: '#ffe0a3cc', to: 'transparent', colorToPosition: '60%' },
                    { position: '92% 95%', from: '#c97a35cc', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 0.6 });
    },
    'moonlight': (builder) => {
        builder
            .meshGradient({
                background: '#0a0f1f',
                layers: [
                    { position: '78% 22%', from: '#f4f7ff', to: 'transparent', colorToPosition: '6%' },
                    { position: '78% 22%', from: '#c9d6ff66', to: 'transparent', colorToPosition: '30%' },
                    { position: '60% 40%', from: '#2a3a6acc', to: 'transparent', colorToPosition: '65%' }
                ]
            })
            .stars({ color: '#ffffffbb', count: 18, seed: 23, strokeWidth: '1.4px' });
    },
    'northern-lights': (builder) => {
        const meshLayers = [
            { position: '15% 15%', from: colors.malachite, to: 'transparent', colorFromPosition: '0px', colorToPosition: '55%' },
            { position: '40% 8%', from: colors.celadon, to: 'transparent', colorFromPosition: '0px', colorToPosition: '55%' },
            { position: '68% 18%', from: colors.verdigris, to: 'transparent', colorFromPosition: '0px', colorToPosition: '50%' },
            { position: '85% 30%', from: colors.malachite, to: 'transparent', colorFromPosition: '0px', colorToPosition: '50%' },
            { position: '45% 50%', from: colors.amethyst, to: 'transparent', colorFromPosition: '0px', colorToPosition: '45%' },
            { position: '20% 65%', from: colors.wisteria, to: 'transparent', colorFromPosition: '0px', colorToPosition: '40%' },
        ];

        builder
            .meshGradient({ background: '#050914', layers: meshLayers })
            .aurora({ duration: '5s' });
    },
};
