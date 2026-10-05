import {PresetConfig} from "../../models/index.ts";

export const metalPresets: Record<string, PresetConfig> = {
    'gold': (builder) => {
        builder
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '28% 22%', from: '#fff6d655', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#6b4a0f', position: '0%' },
                    { color: '#a87c23', position: '14%' },
                    { color: '#e8c76a', position: '29%' },
                    { color: '#fff1b8', position: '37%' },
                    { color: '#d1a441', position: '47%' },
                    { color: '#8f6517', position: '61%' },
                    { color: '#c99a37', position: '77%' },
                    { color: '#f2d784', position: '89%' },
                    { color: '#a77b22', position: '100%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'antique-gold': (builder) => {
        builder
            .linearGradient({
                angle: '125deg',
                colors: [
                    { color: '#3d2a0c', position: '0%' },
                    { color: '#6e5220', position: '18%' },
                    { color: '#b08d45', position: '34%' },
                    { color: '#d9bd78', position: '43%' },
                    { color: '#8c6c2e', position: '55%' },
                    { color: '#4f3a14', position: '71%' },
                    { color: '#9a7a38', position: '87%' },
                    { color: '#5c4418', position: '100%' }
                ]
            })
            .grain({ intensity: 1.4 })
            .vignette({ color: '#1a1004', intensity: 0.55, spread: 0.5 });
    },
    'rose-gold': (builder) => {
        builder
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '28% 22%', from: '#fff1ea55', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#7a4436', position: '0%' },
                    { color: '#b9776a', position: '14%' },
                    { color: '#f1c1b2', position: '29%' },
                    { color: '#ffe3d8', position: '37%' },
                    { color: '#d99a88', position: '47%' },
                    { color: '#9a5a4b', position: '61%' },
                    { color: '#c98a7a', position: '77%' },
                    { color: '#f4cdbf', position: '89%' },
                    { color: '#a8695a', position: '100%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'white-gold': (builder) => {
        builder
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#8a8578', position: '0%' },
                    { color: '#c8c2b0', position: '15%' },
                    { color: '#f3eee0', position: '31%' },
                    { color: '#fffdf6', position: '39%' },
                    { color: '#d8d1bd', position: '51%' },
                    { color: '#a39c88', position: '65%' },
                    { color: '#e6e0cf', position: '83%' },
                    { color: '#b5ae9b', position: '100%' }
                ]
            })
            .grain({ intensity: 0.6 });
    },
    'champagne': (builder) => {
        builder
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '70% 30%', from: '#ffffff66', to: 'transparent', colorToPosition: '35%' }
                ]
            })
            .linearGradient({
                angle: '115deg',
                colors: [
                    { color: '#9c8460', position: '0%' },
                    { color: '#d6c29b', position: '19%' },
                    { color: '#f7ead0', position: '34%' },
                    { color: '#fff8e8', position: '41%' },
                    { color: '#e2cfa8', position: '54%' },
                    { color: '#b49b72', position: '71%' },
                    { color: '#efe0c2', position: '89%' },
                    { color: '#c4ad84', position: '100%' }
                ]
            })
            .grain({ intensity: 0.7 });
    },
    'gold-leaf': (builder) => {
        builder
            .meshGradient({
                background: '#f6efdf',
                layers: [
                    { position: '12% 18%', from: '#e2b84fb3', to: 'transparent', colorToPosition: '55%' },
                    { position: '48% 48%', from: '#fff8e6', to: 'transparent', colorToPosition: '45%' },
                    { position: '92% 85%', from: '#cf9f35a6', to: 'transparent', colorToPosition: '55%' },
                    { position: '80% 12%', from: '#f0d488aa', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .grain({ intensity: 1.2 });
    },
    'black-gold': (builder) => {
        builder
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#00000000', position: '0%' },
                    { color: '#00000000', position: '30%' },
                    { color: '#b8862b55', position: '42%' },
                    { color: '#f3d27a99', position: '49%' },
                    { color: '#b8862b55', position: '56%' },
                    { color: '#00000000', position: '68%' },
                    { color: '#00000000', position: '100%' }
                ]
            })
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '30% 30%', from: '#d4a23744', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .linearGradient({
                angle: '135deg',
                colors: [
                    { color: '#14100a', position: '0%' },
                    { color: '#0a0805', position: '55%' },
                    { color: '#17120a', position: '100%' }
                ]
            })
            .grain({ intensity: 1.4 });
    },
    'silver': (builder) => {
        builder
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#5d6166', position: '0%' },
                    { color: '#9aa0a6', position: '14%' },
                    { color: '#e9ecef', position: '29%' },
                    { color: '#ffffff', position: '37%' },
                    { color: '#c3c8cd', position: '47%' },
                    { color: '#7c8288', position: '61%' },
                    { color: '#b9bec3', position: '77%' },
                    { color: '#eef0f2', position: '89%' },
                    { color: '#8d9399', position: '100%' }
                ]
            })
            .grain({ intensity: 0.7 });
    },
    'platinum': (builder) => {
        builder
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '30% 25%', from: '#ffffff99', to: 'transparent', colorToPosition: '40%' }
                ]
            })
            .linearGradient({
                angle: '135deg',
                colors: [
                    { color: '#b9bcc0', position: '0%' },
                    { color: '#e4e6e8', position: '24%' },
                    { color: '#f7f8f9', position: '40%' },
                    { color: '#cfd2d6', position: '58%' },
                    { color: '#eceef0', position: '78%' },
                    { color: '#b2b6bb', position: '100%' }
                ]
            })
            .grain({ intensity: 0.5 });
    },
    'chrome': (builder) => {
        builder
            .linearGradient({
                angle: '180deg',
                colors: [
                    { color: '#e9eef3', position: '0%' },
                    { color: '#ffffff', position: '28%' },
                    { color: '#9ba4ad', position: '48%' },
                    { color: '#2b3036', position: '50%' },
                    { color: '#5f6770', position: '62%' },
                    { color: '#d7dde2', position: '85%' },
                    { color: '#f4f6f8', position: '100%' }
                ]
            });
    },
    'steel': (builder) => {
        builder
            .linearGradient({
                angle: '100deg',
                colors: [
                    { color: '#7d848b', position: '0%' },
                    { color: '#aab1b8', position: '20%' },
                    { color: '#d5dadf', position: '40%' },
                    { color: '#9ea5ac', position: '55%' },
                    { color: '#c4cad0', position: '75%' },
                    { color: '#848b92', position: '100%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.12, scale: 0.9 });
    },
    'titanium': (builder) => {
        builder
            .linearGradient({
                angle: '125deg',
                colors: [
                    { color: '#3f454d', position: '0%' },
                    { color: '#79818b', position: '19%' },
                    { color: '#c2c8cf', position: '37%' },
                    { color: '#8a929c', position: '51%' },
                    { color: '#5a616a', position: '69%' },
                    { color: '#a9b0b8', position: '87%' },
                    { color: '#4b525a', position: '100%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'gunmetal': (builder) => {
        builder
            .linearGradient({
                angle: '125deg',
                colors: [
                    { color: '#16191d', position: '0%' },
                    { color: '#2c3137', position: '24%' },
                    { color: '#5a6169', position: '41%' },
                    { color: '#2a2f35', position: '58%' },
                    { color: '#40464d', position: '80%' },
                    { color: '#1b1e22', position: '100%' }
                ]
            })
            .grain({ intensity: 1.3 });
    },
    'bronze': (builder) => {
        builder
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#3e2410', position: '0%' },
                    { color: '#7a4a22', position: '17%' },
                    { color: '#c08a4e', position: '33%' },
                    { color: '#e8b97c', position: '41%' },
                    { color: '#a06a35', position: '53%' },
                    { color: '#5c3518', position: '71%' },
                    { color: '#9c6a3a', position: '89%' },
                    { color: '#4a2c14', position: '100%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'copper': (builder) => {
        builder
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#5a2412', position: '0%' },
                    { color: '#a24f2a', position: '17%' },
                    { color: '#e08a5c', position: '33%' },
                    { color: '#ffc09a', position: '41%' },
                    { color: '#c46a3e', position: '53%' },
                    { color: '#7e3519', position: '71%' },
                    { color: '#c97a4f', position: '89%' },
                    { color: '#6b2d16', position: '100%' }
                ]
            })
            .grain({ intensity: 0.9 });
    },
    'brass': (builder) => {
        builder
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#4f4214', position: '0%' },
                    { color: '#8f7d2e', position: '17%' },
                    { color: '#d2c26e', position: '33%' },
                    { color: '#f0e6a6', position: '41%' },
                    { color: '#b3a048', position: '53%' },
                    { color: '#665a1e', position: '71%' },
                    { color: '#ab9a4c', position: '89%' },
                    { color: '#574a18', position: '100%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'mercury': (builder) => {
        builder
            .linearGradient({
                angle: '160deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '45%' },
                    { color: '#ffffff55', position: '52%' },
                    { color: '#ffffff00', position: '60%' }
                ]
            })
            .meshGradient({
                background: '#9aa1a8',
                layers: [
                    { position: '22% 22%', from: '#ffffff', to: 'transparent', colorToPosition: '48%' },
                    { position: '82% 18%', from: '#eef1f4cc', to: 'transparent', colorToPosition: '40%' },
                    { position: '78% 88%', from: '#3f454bcc', to: 'transparent', colorToPosition: '55%' },
                    { position: '8% 100%', from: '#5a6067aa', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
    'holographic': (builder) => {
        builder
            .linearGradient({
                angle: '160deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '20%' },
                    { color: '#ffffff55', position: '48%' },
                    { color: '#ffffff00', position: '75%' }
                ]
            })
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '25% 25%', from: '#ffffffcc', to: 'transparent', colorToPosition: '40%' },
                    { position: '80% 80%', from: '#ffffff99', to: 'transparent', colorToPosition: '40%' }
                ]
            })
            .linearGradient({
                angle: '115deg',
                colors: [
                    { color: '#ffc6ec', position: '0%' },
                    { color: '#c7d2ff', position: '20%' },
                    { color: '#b4f5ec', position: '38%' },
                    { color: '#fff3b8', position: '55%' },
                    { color: '#ffc2d6', position: '72%' },
                    { color: '#cdbfff', position: '88%' },
                    { color: '#b4f0ff', position: '100%' }
                ]
            })
            .grain({ intensity: 0.6 });
    },
    'iridescent': (builder) => {
        builder
            .meshGradient({
                background: '#eef0f5',
                layers: [
                    { position: '15% 20%', from: '#ffc8e6cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '85% 25%', from: '#c4f5e4cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '70% 90%', from: '#d6ccffcc', to: 'transparent', colorToPosition: '55%' },
                    { position: '20% 85%', from: '#ffe1c4cc', to: 'transparent', colorToPosition: '50%' },
                    { position: '50% 45%', from: '#ffffffcc', to: 'transparent', colorToPosition: '35%' }
                ]
            });
    },
    'oil-slick': (builder) => {
        builder
            .meshGradient({
                background: '#0a0a12',
                layers: [
                    { position: '10% 20%', from: '#d045a8bb', to: 'transparent', colorToPosition: '58%' },
                    { position: '78% 15%', from: '#22c3b5bb', to: 'transparent', colorToPosition: '55%' },
                    { position: '50% 60%', from: '#e3bb4666', to: 'transparent', colorToPosition: '30%' },
                    { position: '95% 90%', from: '#6248e6bb', to: 'transparent', colorToPosition: '58%' },
                    { position: '8% 95%', from: '#2bd36b88', to: 'transparent', colorToPosition: '50%' }
                ]
            })
            .grain({ intensity: 1.2 });
    },
};
