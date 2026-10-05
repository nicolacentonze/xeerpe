import {Builder, Preset, colors} from 'xeerpe'

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

    'noise-basic': () => new Builder()
        .linearGradient({
            from: '#4c1d95',
            to: '#0ea5e9',
            angle: '160deg',
        })
        .noise()
        .toStyle(),

    'noise-scale': () => new Builder()
        .linearGradient({
            from: '#f97316',
            to: '#7c2d12',
        })
        .noise({scale: 0.3, opacity: 0.35})
        .toStyle(),

    'noise-turbulence': () => new Builder()
        .linearGradient({
            from: '#0f172a',
            to: '#1d4ed8',
        })
        .noise({
            type: 'turbulence',
            scale: 0.012,
            octaves: 4,
            opacity: 0.5,
        })
        .toStyle(),

    'vignette-basic': () => new Builder()
        .linearGradient({
            from: '#fde68a',
            to: '#fb923c',
            angle: '135deg',
        })
        .vignette()
        .toStyle(),

    'vignette-custom': () => new Builder()
        .linearGradient({
            from: '#f9a8d4',
            to: '#c4b5fd',
            angle: '135deg',
        })
        .vignette({
            color: '#312e81',
            intensity: 0.65,
            spread: 0.45,
        })
        .toStyle(),

    'grain-basic': () => new Builder()
        .linearGradient({
            from: '#2dd4bf',
            to: '#1e1b4b',
        })
        .grain({intensity: 1.5})
        .toStyle(),

    'glow-outer': () => new Builder()
        .linearGradient({
            from: '#0b1020',
            to: '#05060f',
        })
        .glow({
            color: '#22d3ee',
            amount: '40px',
            spread: '2px',
        })
        .toStyle(),

    'glow-inner': () => new Builder()
        .linearGradient({
            from: '#0b1020',
            to: '#05060f',
        })
        .glow({
            type: 'inner',
            color: '#a855f7',
            amount: '70px',
        })
        .toStyle(),

    'glow-offset': () => new Builder()
        .linearGradient({
            from: '#1e293b',
            to: '#0f172a',
        })
        .glow({
            color: 'rgba(244,114,182,0.6)',
            amount: '48px',
            y: '28px',
        })
        .toStyle(),

    'glow-neon': () => new Builder()
        .linearGradient({
            from: '#06080f',
            to: '#0b1020',
        })
        .glow({
            type: 'inner',
            color: '#22d3ee',
            amount: '40px',
        })
        .glow({
            color: '#22d3ee',
            amount: '30px',
        })
        .toStyle(),

    'effects-film': () => new Builder()
        .linearGradient({
            from: '#7c4a2d',
            to: '#e0a96d',
            angle: '160deg',
        })
        .vignette({
            color: '#1a0f0a',
            intensity: 0.7,
            spread: 0.5,
        })
        .grain({intensity: 1.5})
        .toStyle(),

    'effects-aurora': () => new Builder()
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
            ],
        })
        .noise({opacity: 0.2})
        .vignette({
            intensity: 0.6,
            spread: 0.4,
        })
        .toStyle(),

    'blur-element': () => new Builder()
        .meshGradient({
            background: '#070b1f',
            layers: [
                {
                    from: 'rgba(124,58,237,0.95)',
                    to: 'transparent',
                    position: '25% 35%',
                    colorToPosition: '55%',
                },
                {
                    from: 'rgba(34,211,238,0.9)',
                    to: 'transparent',
                    position: '75% 65%',
                    colorToPosition: '55%',
                },
            ],
        })
        .blur({
            amount: '18px',
            type: 'blur',
        })
        .toStyle(),

    'blur-soften': () => new Builder()
        .linearGradient({
            from: '#6366f1',
            to: '#ec4899',
        })
        .grid({
            color: '#ffffff',
            size: '24px',
            opacity: 0.5,
        })
        .blur({
            amount: '3px',
            type: 'blur',
        })
        .toStyle(),

    'dots-basic': () => new Builder()
        .linearGradient({
            from: '#0f172a',
            to: '#1e293b',
        })
        .dots({
            color: '#e2e8f0',
            opacity: 0.25,
        })
        .toStyle(),

    'dots-spacing': () => new Builder()
        .linearGradient({
            from: '#020617',
            to: '#1e1b4b',
        })
        .dots({
            color: '#ffffff',
            size: '14px',
            spacing: '30px',
            opacity: 0.45,
        })
        .toStyle(),

    'dots-radius': () => new Builder()
        .linearGradient({
            from: '#fb7185',
            to: '#f59e0b',
        })
        .dots({
            color: '#ffffff',
            size: '40px',
            strokeWidth: '5px',
            opacity: 0.35,
        })
        .toStyle(),

    'dots-background': () => new Builder()
        .dots({
            color: '#38bdf8',
            background: '#0b1220',
            size: '24px',
            opacity: 0.6,
        })
        .toStyle(),

    'grid-basic': () => new Builder()
        .linearGradient({
            from: '#04140d',
            to: '#0a2a1c',
        })
        .grid({
            color: '#34d399',
            size: '32px',
            opacity: 0.25,
        })
        .toStyle(),

    'grid-stroke': () => new Builder()
        .linearGradient({
            from: '#312e81',
            to: '#1e1b4b',
        })
        .grid({
            color: '#a5b4fc',
            size: '24px',
            strokeWidth: '2px',
            opacity: 0.3,
        })
        .toStyle(),

    'patterns-layered': () => new Builder()
        .linearGradient({
            from: '#0c4a6e',
            to: '#020617',
            angle: '160deg',
        })
        .grid({
            color: '#7dd3fc',
            size: '80px',
            opacity: 0.18,
        })
        .dots({
            color: '#e0f2fe',
            size: '16px',
            spacing: '20px',
            opacity: 0.12,
        })
        .toStyle(),

    'stars-basic': () => new Builder()
        .radialGradient({
            from: '#1b2559',
            to: '#050816',
            position: '30% 20%',
            colorToPosition: '90%',
        })
        .stars()
        .toStyle(),

    'stars-layered': () => new Builder()
        .linearGradient({
            from: '#0b1026',
            to: '#2a1f5c',
            direction: 'to bottom',
        })
        .stars({
            size: '160px',
            count: 30,
            strokeWidth: '1px',
            seed: 4,
        })
        .stars({
            color: '#ffe8b0',
            size: '310px',
            count: 8,
            strokeWidth: '2px',
            seed: 9,
        })
        .toStyle(),

    'rays-basic': () => new Builder()
        .radialGradient({
            from: '#fde68a',
            to: '#f97316',
        })
        .rays({
            color: '#ffffff',
            opacity: 0.25,
        })
        .toStyle(),

    'rays-sunburst': () => new Builder()
        .radialGradient({
            from: '#e6c35c',
            to: '#15130e',
            position: '50% 115%',
            colorToPosition: '70%',
        })
        .rays({
            color: '#e6c35c',
            count: 18,
            position: '50% 115%',
            angle: '270deg',
            opacity: 0.12,
        })
        .vignette({ intensity: 0.5, spread: 0.5 })
        .toStyle(),

    'pulse-glow': () => new Builder()
        .radialGradient({
            from: '#34d399',
            to: '#052e1c',
            colorToPosition: '75%',
        })
        .pulse({duration: '3s'})
        .toStyle(),

    'rotate-conic': () => new Builder()
        .conicGradient({
            colors: [
                '#f472b6',
                '#a78bfa',
                '#38bdf8',
                '#34d399',
                '#f472b6',
            ],
        })
        .rotate({duration: '8s'})
        .toStyle(),

    'breathe-mesh': () => new Builder()
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
            ],
        })
        .breathe({duration: '8s'})
        .toStyle(),

    'aurora-mesh': () => new Builder()
        .meshGradient({
            background: '#04121c',
            layers: [
                {
                    from: 'rgba(16,185,129,0.8)',
                    to: 'transparent',
                    position: '15% 25%',
                    colorToPosition: '60%',
                },
                {
                    from: 'rgba(56,189,248,0.65)',
                    to: 'transparent',
                    position: '85% 30%',
                    colorToPosition: '55%',
                },
                {
                    from: 'rgba(168,85,247,0.6)',
                    to: 'transparent',
                    position: '55% 100%',
                    colorToPosition: '60%',
                },
            ],
        })
        .aurora({duration: '8s'})
        .toStyle(),

    'shimmer-skeleton': () => new Builder()
        .linearGradient({
            colors: ['#1e293b', '#475569', '#1e293b'],
            angle: '90deg',
            backgroundSize: '200% 100%',
        })
        .shimmer({duration: '2.5s'})
        .toStyle(),

    'liquid-flow': () => new Builder()
        .linearGradient({
            colors: [
                '#06b6d4',
                '#6366f1',
                '#d946ef',
                '#f97316',
            ],
            angle: '135deg',
        })
        .liquid()
        .toStyle(),

    'plasma-hue': () => new Builder()
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
            ],
        })
        .plasma({duration: '8s'})
        .toStyle(),

    'float-card': () => new Builder()
        .linearGradient({
            from: '#1e293b',
            to: '#0f172a',
        })
        .glow({
            color: 'rgba(56,189,248,0.5)',
            amount: '40px',
            y: '20px',
        })
        .float()
        .toStyle(),

    'drift-gradient': () => new Builder()
        .linearGradient({
            colors: [
                '#0ea5e9',
                '#6366f1',
                '#ec4899',
                '#f59e0b',
            ],
            angle: '135deg',
            backgroundSize: '300% 300%',
        })
        .drift()
        .toStyle(),

    'combo-drift-plasma': () => new Builder()
        .linearGradient({
            colors: [
                '#0ea5e9',
                '#6366f1',
                '#ec4899',
                '#f59e0b',
            ],
            angle: '135deg',
            backgroundSize: '300% 300%',
        })
        .drift({duration: '12s'})
        .plasma({duration: '16s'})
        .toStyle(),

    'preset-sunrise': () => new Preset('sunrise')
        .toStyle(),

    'preset-northern-lights': () => new Preset('northern-lights')
        .toStyle(),

    'preset-sunrise-film': () => new Preset('sunrise')
        .grain({intensity: 1.5})
        .vignette({
            color: '#7c2d12',
            intensity: 0.2,
            spread: 0.5,
        })
        .toStyle(),

    'preset-lights-textured': () => new Preset('northern-lights')
        .noise({opacity: 0.15})
        .vignette({
            intensity: 0.5,
            spread: 0.4,
        })
        .toStyle(),

    'preset-custom': () => new Builder()
        .meshGradient({
            background: '#140a1f',
            layers: [
                {
                    position: '15% 20%',
                    from: colors.coral,
                    to: 'transparent',
                    colorFromPosition: '0px',
                    colorToPosition: '55%',
                },
                {
                    position: '45% 8%',
                    from: colors.amber,
                    to: 'transparent',
                    colorFromPosition: '0px',
                    colorToPosition: '50%',
                },
                {
                    position: '82% 22%',
                    from: colors.mulberry,
                    to: 'transparent',
                    colorFromPosition: '0px',
                    colorToPosition: '55%',
                },
                {
                    position: '25% 72%',
                    from: colors.sakura,
                    to: 'transparent',
                    colorFromPosition: '0px',
                    colorToPosition: '45%',
                },
                {
                    position: '72% 78%',
                    from: colors.byzantium,
                    to: 'transparent',
                    colorFromPosition: '0px',
                    colorToPosition: '50%',
                },
            ],
        })
        .aurora({duration: '12s'})
        .toStyle(),

} satisfies Record<string, () => React.CSSProperties>