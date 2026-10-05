import {PresetConfig} from "../../models/index.ts";

export const pastelPresets: Record<string, PresetConfig> = {
    'cotton': (builder) => {
        builder
            .meshGradient({
                background: '#fbf7f4',
                layers: [
                    { position: '15% 20%', from: '#ffe4ecdd', to: 'transparent', colorToPosition: '55%' },
                    { position: '85% 80%', from: '#e4ecffdd', to: 'transparent', colorToPosition: '55%' },
                    { position: '80% 15%', from: '#fff6e0cc', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
    'marshmallow': (builder) => {
        builder
            .meshGradient({
                background: '#fff4f6',
                layers: [
                    { position: '20% 80%', from: '#ffd6e4dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '80% 20%', from: '#fff0c9dd', to: 'transparent', colorToPosition: '50%' },
                    { position: '50% 45%', from: '#ffffff', to: 'transparent', colorToPosition: '40%' }
                ]
            });
    },
    'lavender-haze': (builder) => {
        builder
            .meshGradient({
                background: '#e9e1ff',
                layers: [
                    { position: '15% 20%', from: '#cdbcffdd', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 30%', from: '#ffd9f5cc', to: 'transparent', colorToPosition: '50%' },
                    { position: '60% 100%', from: '#d6e6ffdd', to: 'transparent', colorToPosition: '55%' }
                ]
            });
    },
    'peach-fuzz': (builder) => {
        builder
            .meshGradient({
                background: '#ffd9c2',
                layers: [
                    { position: '20% 80%', from: '#ffbe98dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '75% 20%', from: '#ffeadbdd', to: 'transparent', colorToPosition: '55%' },
                    { position: '95% 95%', from: '#ffc9b5cc', to: 'transparent', colorToPosition: '45%' }
                ]
            })
            .grain({ intensity: 0.5 });
    },
    'baby-blue': (builder) => {
        builder
            .meshGradient({
                background: '#dcefff',
                layers: [
                    { position: '20% 25%', from: '#b8dcffdd', to: 'transparent', colorToPosition: '55%' },
                    { position: '75% 30%', from: '#f2f9ffee', to: 'transparent', colorToPosition: '50%' },
                    { position: '70% 95%', from: '#c9e8f5dd', to: 'transparent', colorToPosition: '50%' }
                ]
            });
    },
    'mint-cream': (builder) => {
        builder
            .meshGradient({
                background: '#e3f8ef',
                layers: [
                    { position: '15% 25%', from: '#bff0dadd', to: 'transparent', colorToPosition: '55%' },
                    { position: '70% 35%', from: '#fbfff8ee', to: 'transparent', colorToPosition: '50%' },
                    { position: '90% 95%', from: '#d2f2ffcc', to: 'transparent', colorToPosition: '50%' }
                ]
            });
    },
    'blush': (builder) => {
        builder
            .meshGradient({
                background: '#ffe1e6',
                layers: [
                    { position: '20% 25%', from: '#ffc4cfdd', to: 'transparent', colorToPosition: '55%' },
                    { position: '80% 30%', from: '#fff2e8ee', to: 'transparent', colorToPosition: '50%' },
                    { position: '70% 100%', from: '#f8c8dccc', to: 'transparent', colorToPosition: '50%' }
                ]
            });
    },
    'lilac': (builder) => {
        builder
            .meshGradient({
                background: '#ecdcf7',
                layers: [
                    { position: '20% 70%', from: '#d8bff0dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '75% 25%', from: '#f7ecffee', to: 'transparent', colorToPosition: '50%' },
                    { position: '95% 90%', from: '#e9c8f0cc', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
    'sorbet': (builder) => {
        builder
            .meshGradient({
                background: '#fff1e6',
                layers: [
                    { position: '10% 15%', from: '#ffc2a8dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 25%', from: '#ffb3c7dd', to: 'transparent', colorToPosition: '50%' },
                    { position: '50% 100%', from: '#fff0a8dd', to: 'transparent', colorToPosition: '55%' }
                ]
            });
    },
    'candy': (builder) => {
        builder
            .meshGradient({
                background: '#ffe9f3',
                layers: [
                    { position: '10% 20%', from: '#ffb3d9dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 25%', from: '#b3e5ffdd', to: 'transparent', colorToPosition: '50%' },
                    { position: '50% 100%', from: '#d9c2ffdd', to: 'transparent', colorToPosition: '55%' }
                ]
            });
    },
    'cloud': (builder) => {
        builder
            .meshGradient({
                background: '#f2f5fa',
                layers: [
                    { position: '30% 35%', from: '#ffffff', to: 'transparent', colorToPosition: '50%' },
                    { position: '85% 80%', from: '#dfe6f2dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '80% 20%', from: '#ffffff', to: 'transparent', colorToPosition: '40%' }
                ]
            });
    },
    'powder': (builder) => {
        builder
            .meshGradient({
                background: '#e6ecf5',
                layers: [
                    { position: '15% 85%', from: '#f7d9e6cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '85% 20%', from: '#d6e2f5dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '50% 50%', from: '#ffffffdd', to: 'transparent', colorToPosition: '40%' }
                ]
            })
            .grain({ intensity: 0.5 });
    },
    'rosewater': (builder) => {
        builder
            .meshGradient({
                background: '#fbe7e9',
                layers: [
                    { position: '85% 80%', from: '#f5c6cfdd', to: 'transparent', colorToPosition: '55%' },
                    { position: '25% 25%', from: '#fff8f4ee', to: 'transparent', colorToPosition: '55%' },
                    { position: '80% 15%', from: '#f9dce8cc', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
    'buttercream': (builder) => {
        builder
            .meshGradient({
                background: '#fff6db',
                layers: [
                    { position: '15% 80%', from: '#ffe9a8dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '70% 25%', from: '#fffcf0ee', to: 'transparent', colorToPosition: '55%' },
                    { position: '95% 95%', from: '#ffe4c9cc', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
    'seafoam': (builder) => {
        builder
            .meshGradient({
                background: '#d9f5ef',
                layers: [
                    { position: '15% 75%', from: '#a8eadcdd', to: 'transparent', colorToPosition: '55%' },
                    { position: '70% 25%', from: '#f2fffbee', to: 'transparent', colorToPosition: '55%' },
                    { position: '95% 95%', from: '#c2e6f5cc', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
    'apricot': (builder) => {
        builder
            .meshGradient({
                background: '#ffe3cc',
                layers: [
                    { position: '15% 20%', from: '#ffc999dd', to: 'transparent', colorToPosition: '55%' },
                    { position: '75% 40%', from: '#fff3e6ee', to: 'transparent', colorToPosition: '50%' },
                    { position: '90% 100%', from: '#ffb3a1cc', to: 'transparent', colorToPosition: '50%' }
                ]
            });
    },
    'daydream': (builder) => {
        builder
            .meshGradient({
                background: '#eef0ff',
                layers: [
                    { position: '10% 15%', from: '#c9d4ffdd', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 40%', from: '#ffd9ecdd', to: 'transparent', colorToPosition: '50%' },
                    { position: '30% 100%', from: '#d9fff0dd', to: 'transparent', colorToPosition: '50%' }
                ]
            });
    },
    'unicorn': (builder) => {
        builder
            .meshGradient({
                background: '#f6eeff',
                layers: [
                    { position: '10% 20%', from: '#ffc4ecdd', to: 'transparent', colorToPosition: '50%' },
                    { position: '90% 20%', from: '#c4e4ffdd', to: 'transparent', colorToPosition: '50%' },
                    { position: '80% 100%', from: '#c9ffe9dd', to: 'transparent', colorToPosition: '50%' },
                    { position: '15% 100%', from: '#fff2c4dd', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
    'fairy-floss': (builder) => {
        builder
            .meshGradient({
                background: '#ffe6f7',
                layers: [
                    { position: '20% 85%', from: '#e2c9ffdd', to: 'transparent', colorToPosition: '55%' },
                    { position: '85% 15%', from: '#c9f0ffdd', to: 'transparent', colorToPosition: '50%' },
                    { position: '50% 45%', from: '#ffffffdd', to: 'transparent', colorToPosition: '40%' }
                ]
            });
    },
    'bubblegum': (builder) => {
        builder
            .meshGradient({
                background: '#ffb8d9',
                layers: [
                    { position: '20% 20%', from: '#ffe0eedd', to: 'transparent', colorToPosition: '55%' },
                    { position: '85% 85%', from: '#ff8cc2cc', to: 'transparent', colorToPosition: '55%' },
                    { position: '90% 15%', from: '#c9b8ffbb', to: 'transparent', colorToPosition: '45%' }
                ]
            });
    },
};
