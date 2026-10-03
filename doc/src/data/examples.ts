import {Builder} from 'xeerpe'

export const demos = {

    'linear-basic': () => new Builder()
        .linearGradient({
            from: '#2dd4bf',
            to: '#1e1b4b',
        })
        .toStyle(),

    'linear-angle': () => new Builder()
        .linearGradient({
            from: '#ff9a8b',
            to: '#6a3093',
            angle: '160deg',
        })
        .toStyle(),

    'linear-direction': () => new Builder()
        .linearGradient({
            from: '#020617',
            to: '#38bdf8',
            direction: 'to top right',
        })
        .toStyle(),

    'linear-stops': () => new Builder()
        .linearGradient({
            colors: [
                '#0b1437',
                {color: '#4c1d95', position: '35%'},
                {color: '#f472b6', position: '55%'},
                {color: '#fdba74', position: '62%'},
                {color: '#0c2a4d', position: '62%'},
                '#020617',
            ],
            direction: 'to bottom',
        })
        .toStyle(),

    'radial-basic': () => new Builder()
        .radialGradient({
            from: '#a5b4fc',
            to: '#0b0720',
        })
        .toStyle(),

    'radial-position': () => new Builder()
        .radialGradient({
            from: '#fb7185',
            to: '#1e0b2e',
            position: '25% 30%',
            colorToPosition: '80%',
        })
        .toStyle(),

    'radial-shape': () => new Builder()
        .radialGradient({
            from: '#67e8f9',
            to: '#020617',
            shape: 'ellipse',
            size: 'closest-side',
        })
        .toStyle(),

    'radial-stops': () => new Builder()
        .radialGradient({
            from: '#fef08a',
            to: '#7c2d12',
            colorFromPosition: '0%',
            colorToPosition: '70%',
        })
        .toStyle(),

    'conic-basic': () => new Builder()
        .conicGradient({
            colors: [
                '#f472b6',
                '#c084fc',
                '#60a5fa',
                '#34d399',
                '#fbbf24',
                '#f472b6',
            ],
        })
        .toStyle(),

    'conic-angle-position': () => new Builder()
        .conicGradient({
            colors: [
                '#1e1b4b',
                '#6d28d9',
                '#e879f9',
                '#6d28d9',
                '#1e1b4b',
            ],
            angle: '30deg',
            position: '70% 30%',
        })
        .toStyle(),

    'mesh-basic': () => new Builder()
        .meshGradient({
            background: '#070b1f',
            layers: [
                {
                    from: 'rgba(124,58,237,0.85)',
                    to: 'transparent',
                    position: '12% 18%',
                    colorToPosition: '60%',
                },
                {
                    from: 'rgba(34,211,238,0.65)',
                    to: 'transparent',
                    position: '88% 20%',
                    colorToPosition: '55%',
                },
                {
                    from: 'rgba(244,114,182,0.65)',
                    to: 'transparent',
                    position: '70% 100%',
                    colorToPosition: '60%',
                },
                {
                    from: 'rgba(59,130,246,0.6)',
                    to: 'transparent',
                    position: '10% 90%',
                    colorToPosition: '50%',
                },
            ],
        })
        .toStyle(),

    'layered-glow': () => new Builder()
        .radialGradient({
            from: 'rgba(34,211,238,0.55)',
            to: 'transparent',
            position: '85% 15%',
            colorToPosition: '60%',
        })
        .radialGradient({
            from: 'rgba(168,85,247,0.55)',
            to: 'transparent',
            position: '10% 95%',
            colorToPosition: '60%',
        })
        .linearGradient({
            from: '#0b1020',
            to: '#05060f',
            angle: '135deg',
        })
        .toStyle(),

} satisfies Record<string, () => React.CSSProperties>