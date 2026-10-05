import {PresetConfig} from "../../models/index.ts";

export const foodPresets: Record<string, PresetConfig> = {
    'chocolate': (builder) => {
        builder
            .linearGradient({
                angle: '115deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff15', position: '45%' },
                    { color: '#ffffff00', position: '78%' },
                    { color: '#ffffff00', position: '100%' }
                ]
            })
            .meshGradient({
                background: '#2a140c',
                layers: [
                    { position: '22% 18%', from: '#8a5233aa', to: 'transparent', colorToPosition: '40%' },
                    { position: '30% 28%', from: '#5b2e1ccc', to: 'transparent', colorToPosition: '65%' },
                    { position: '85% 90%', from: '#1a0b06', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1.2 });
    },
    'dark-chocolate': (builder) => {
        builder
            .linearGradient({
                angle: '115deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff15', position: '45%' },
                    { color: '#ffffff00', position: '78%' },
                    { color: '#ffffff00', position: '100%' }
                ]
            })
            .meshGradient({
                background: '#120805',
                layers: [
                    { position: '24% 20%', from: '#5a3020aa', to: 'transparent', colorToPosition: '40%' },
                    { position: '30% 30%', from: '#3a1c12cc', to: 'transparent', colorToPosition: '65%' }
                ]
            })
            .grain({ intensity: 1.2 })
            .vignette({ intensity: 0.5, spread: 0.4 });
    },
    'milk-chocolate': (builder) => {
        builder
            .linearGradient({
                angle: '115deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff15', position: '45%' },
                    { color: '#ffffff00', position: '78%' },
                    { color: '#ffffff00', position: '100%' }
                ]
            })
            .meshGradient({
                background: '#6b3f26',
                layers: [
                    { position: '22% 18%', from: '#c28a5faa', to: 'transparent', colorToPosition: '40%' },
                    { position: '30% 30%', from: '#9a6240cc', to: 'transparent', colorToPosition: '65%' },
                    { position: '88% 92%', from: '#3f2214', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1 });
    },
    'white-chocolate': (builder) => {
        builder
            .linearGradient({
                angle: '115deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff4c', position: '45%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#f1e4cd',
                layers: [
                    { position: '25% 22%', from: '#fffaf0', to: 'transparent', colorToPosition: '50%' },
                    { position: '85% 85%', from: '#e3cba5aa', to: 'transparent', colorToPosition: '55%' },
                    { position: '70% 30%', from: '#f8ecd6', to: 'transparent', colorToPosition: '40%' }
                ]
            })
            .grain({ intensity: 0.6 });
    },
    'mint-chocolate': (builder) => {
        builder
            .meshGradient({
                background: 'transparent',
                layers: [
                    { position: '18% 18%', from: '#effff8cc', to: 'transparent', colorToPosition: '40%' },
                    { position: '82% 80%', from: '#6b4430aa', to: 'transparent', colorToPosition: '40%' }
                ]
            })
            .linearGradient({
                angle: '135deg',
                colors: [
                    { color: '#c4f2df', position: '0%' },
                    { color: '#93dcc1', position: '42%' },
                    { color: '#4a2c1e', position: '58%' },
                    { color: '#1f120c', position: '100%' }
                ]
            })
            .grain({ intensity: 0.9 });
    },
    'caramel': (builder) => {
        builder
            .linearGradient({
                angle: '115deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff26', position: '45%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#a8621f',
                layers: [
                    { position: '22% 20%', from: '#f6c27acc', to: 'transparent', colorToPosition: '42%' },
                    { position: '35% 35%', from: '#e0a04fcc', to: 'transparent', colorToPosition: '62%' },
                    { position: '90% 92%', from: '#6e3a0c', to: 'transparent', colorToPosition: '55%' }
                ]
            });
    },
    'honey': (builder) => {
        builder
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#fff6d030', position: '46%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#c27306',
                layers: [
                    { position: '24% 22%', from: '#ffe39acc', to: 'transparent', colorToPosition: '40%' },
                    { position: '35% 35%', from: '#ffb51fcc', to: 'transparent', colorToPosition: '62%' },
                    { position: '92% 92%', from: '#8a4b04', to: 'transparent', colorToPosition: '55%' }
                ]
            });
    },
    'espresso': (builder) => {
        builder
            .meshGradient({
                background: '#130a06',
                layers: [
                    { position: '28% 22%', from: '#c98d55aa', to: 'transparent', colorToPosition: '40%' },
                    { position: '35% 30%', from: '#7a4524cc', to: 'transparent', colorToPosition: '65%' },
                    { position: '85% 90%', from: '#2a160c', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 1.1 })
            .vignette({ intensity: 0.5, spread: 0.45 });
    },
    'cappuccino': (builder) => {
        builder
            .meshGradient({
                background: '#b58a63',
                layers: [
                    { position: '22% 22%', from: '#fbf2e6ee', to: 'transparent', colorToPosition: '50%' },
                    { position: '60% 40%', from: '#e8d2b6cc', to: 'transparent', colorToPosition: '50%' },
                    { position: '95% 95%', from: '#7a4e2ecc', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 0.9 });
    },
    'matcha': (builder) => {
        builder
            .meshGradient({
                background: '#7fa35a',
                layers: [
                    { position: '25% 22%', from: '#e8f2c8cc', to: 'transparent', colorToPosition: '45%' },
                    { position: '40% 40%', from: '#b9d884cc', to: 'transparent', colorToPosition: '60%' },
                    { position: '90% 90%', from: '#4f7a3a', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.12, scale: 0.8 });
    },
    'vanilla': (builder) => {
        builder
            .meshGradient({
                background: '#f8eccd',
                layers: [
                    { position: '30% 28%', from: '#fffaf0', to: 'transparent', colorToPosition: '50%' },
                    { position: '85% 82%', from: '#efd9a6aa', to: 'transparent', colorToPosition: '55%' },
                    { position: '75% 25%', from: '#fdf3dd', to: 'transparent', colorToPosition: '40%' }
                ]
            })
            .grain({ intensity: 0.7 });
    },
    'tiramisu': (builder) => {
        builder
            .linearGradient({
                angle: '180deg',
                colors: [
                    { color: '#3d2417', position: '0%' },
                    { color: '#5a3826', position: '10%' },
                    { color: '#efe0c6', position: '20%' },
                    { color: '#f5e9d4', position: '42%' },
                    { color: '#8a5a3a', position: '52%' },
                    { color: '#6b4128', position: '64%' },
                    { color: '#ead8bb', position: '76%' },
                    { color: '#f2e4cc', position: '100%' }
                ]
            })
            .noise({ octaves: 3, opacity: 0.1, scale: 0.7 });
    },
    'strawberry-milk': (builder) => {
        builder
            .meshGradient({
                background: '#ffd6df',
                layers: [
                    { position: '25% 25%', from: '#fff2f5dd', to: 'transparent', colorToPosition: '50%' },
                    { position: '85% 80%', from: '#ff9fb5cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '70% 20%', from: '#ffc2d1', to: 'transparent', colorToPosition: '40%' }
                ]
            });
    },
    'raspberry': (builder) => {
        builder
            .meshGradient({
                background: '#6e0b34',
                layers: [
                    { position: '22% 20%', from: '#ff7aa8aa', to: 'transparent', colorToPosition: '42%' },
                    { position: '35% 35%', from: '#d6336ccc', to: 'transparent', colorToPosition: '62%' },
                    { position: '90% 92%', from: '#3a041a', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'blueberry': (builder) => {
        builder
            .meshGradient({
                background: '#181b48',
                layers: [
                    { position: '22% 20%', from: '#8a7fe0aa', to: 'transparent', colorToPosition: '42%' },
                    { position: '35% 35%', from: '#4a52b8cc', to: 'transparent', colorToPosition: '62%' },
                    { position: '85% 25%', from: '#3d6fd188', to: 'transparent', colorToPosition: '45%' },
                    { position: '90% 95%', from: '#0b0c26', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'blackberry': (builder) => {
        builder
            .meshGradient({
                background: '#17081f',
                layers: [
                    { position: '25% 22%', from: '#9d3c8a88', to: 'transparent', colorToPosition: '45%' },
                    { position: '35% 35%', from: '#5b1e6ecc', to: 'transparent', colorToPosition: '62%' },
                    { position: '82% 30%', from: '#3a1a6e99', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .grain({ intensity: 1 })
            .vignette({ intensity: 0.5, spread: 0.4 });
    },
    'cherry': (builder) => {
        builder
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff1c', position: '46%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#4a000e',
                layers: [
                    { position: '24% 20%', from: '#ff6b81aa', to: 'transparent', colorToPosition: '38%' },
                    { position: '35% 35%', from: '#c1121fcc', to: 'transparent', colorToPosition: '62%' },
                    { position: '90% 92%', from: '#240006', to: 'transparent', colorToPosition: '55%' }
                ]
            });
    },
    'red-wine': (builder) => {
        builder
            .linearGradient({
                angle: '120deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#ffffff0f', position: '47%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#22040d',
                layers: [
                    { position: '28% 25%', from: '#b02a4a88', to: 'transparent', colorToPosition: '40%' },
                    { position: '38% 38%', from: '#7a0f2bcc', to: 'transparent', colorToPosition: '62%' }
                ]
            })
            .vignette({ color: '#0a0104', intensity: 0.6, spread: 0.45 });
    },
    'whisky': (builder) => {
        builder
            .linearGradient({
                angle: '100deg',
                colors: [
                    { color: '#ffffff00', position: '0%' },
                    { color: '#ffffff00', position: '18%' },
                    { color: '#fff3d61c', position: '27%' },
                    { color: '#ffffff00', position: '78%' }
                ]
            })
            .meshGradient({
                background: '#3a1d07',
                layers: [
                    { position: '30% 28%', from: '#f2b65a99', to: 'transparent', colorToPosition: '35%' },
                    { position: '38% 38%', from: '#c97a1fcc', to: 'transparent', colorToPosition: '62%' },
                    { position: '90% 95%', from: '#1f0e03', to: 'transparent', colorToPosition: '55%' }
                ]
            })
            .grain({ intensity: 0.8 });
    },
    'mango': (builder) => {
        builder
            .meshGradient({
                background: '#ffa21f',
                layers: [
                    { position: '20% 20%', from: '#ffe066dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '88% 85%', from: '#ff6a1acc', to: 'transparent', colorToPosition: '55%' },
                    { position: '95% 20%', from: '#ff4d3d88', to: 'transparent', colorToPosition: '40%' }
                ]
            });
    },
    'peach': (builder) => {
        builder
            .meshGradient({
                background: '#ffc3a1',
                layers: [
                    { position: '22% 22%', from: '#ffe8d9dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '88% 85%', from: '#ff8f70cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '80% 15%', from: '#ffd9a8cc', to: 'transparent', colorToPosition: '40%' }
                ]
            })
            .grain({ intensity: 0.5 });
    },
    'tangerine': (builder) => {
        builder
            .meshGradient({
                background: '#ff7e1a',
                layers: [
                    { position: '22% 20%', from: '#ffc56bcc', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 88%', from: '#ff4e12cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '60% 40%', from: '#ffe0a3aa', to: 'transparent', colorToPosition: '35%' }
                ]
            });
    },
    'lemonade': (builder) => {
        builder
            .meshGradient({
                background: '#fff2a8',
                layers: [
                    { position: '25% 25%', from: '#fffbe0', to: 'transparent', colorToPosition: '50%' },
                    { position: '85% 80%', from: '#ffd84dcc', to: 'transparent', colorToPosition: '55%' },
                    { position: '85% 15%', from: '#d9f99daa', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
    'watermelon': (builder) => {
        builder
            .meshGradient({
                background: '#ff4f6e',
                layers: [
                    { position: '20% 20%', from: '#ffb0bfcc', to: 'transparent', colorToPosition: '50%' },
                    { position: '75% 65%', from: '#d1164dcc', to: 'transparent', colorToPosition: '50%' },
                    { position: '100% 100%', from: '#9be08fbb', to: 'transparent', colorToPosition: '30%' }
                ]
            });
    },
    'pistachio': (builder) => {
        builder
            .meshGradient({
                background: '#c2d69a',
                layers: [
                    { position: '25% 25%', from: '#eef5d6cc', to: 'transparent', colorToPosition: '50%' },
                    { position: '85% 85%', from: '#8fb069cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '80% 20%', from: '#dcc89caa', to: 'transparent', colorToPosition: '40%' }
                ]
            })
            .grain({ intensity: 0.6 });
    },
    'cotton-candy': (builder) => {
        builder
            .meshGradient({
                background: '#ffd8f0',
                layers: [
                    { position: '15% 25%', from: '#bde0ffdd', to: 'transparent', colorToPosition: '55%' },
                    { position: '85% 70%', from: '#ffb5e8dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '55% 10%', from: '#e7d4ffcc', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
};
