import { Builder, colors } from 'xeerpe';
import classes from './examples.module.css';

const meshLayers = [
    { position: '15% 15%', from: colors.malachite, to: 'transparent', colorFromPosition: '0px', colorToPosition: '55%' },
    { position: '40% 8%', from: colors.celadon, to: 'transparent', colorFromPosition: '0px', colorToPosition: '55%' },
    { position: '68% 18%', from: colors.verdigris, to: 'transparent', colorFromPosition: '0px', colorToPosition: '50%' },
    { position: '85% 30%', from: colors.malachite, to: 'transparent', colorFromPosition: '0px', colorToPosition: '50%' },
    { position: '45% 50%', from: colors.amethyst, to: 'transparent', colorFromPosition: '0px', colorToPosition: '45%' },
    { position: '20% 65%', from: colors.wisteria, to: 'transparent', colorFromPosition: '0px', colorToPosition: '40%' },
];

const oceanMeshLayers = [
    { position: '10% 20%', from: colors.aquamarine, to: 'transparent', colorFromPosition: '0px', colorToPosition: '55%' },
    { position: '35% 10%', from: colors.turquoise, to: 'transparent', colorFromPosition: '0px', colorToPosition: '50%' },
    { position: '60% 25%', from: colors.cerulean, to: 'transparent', colorFromPosition: '0px', colorToPosition: '55%' },
    { position: '80% 40%', from: colors.cobalt, to: 'transparent', colorFromPosition: '0px', colorToPosition: '50%' },
    { position: '30% 70%', from: colors.teal, to: 'transparent', colorFromPosition: '0px', colorToPosition: '45%' },
    { position: '70% 80%', from: colors.sapphire, to: 'transparent', colorFromPosition: '0px', colorToPosition: '45%' },
];

const examples = [
    {
        name: 'Sunset',
        description: 'Warm gradient inspired by a real dusk sky',
        code: [
            "new Builder()",
            "  .linearGradient({ from: '#FFB347', to: '#4A1942' })",
            "  .toStyle()",
        ].join('\n'),
        style: new Builder()
            .linearGradient({ from: '#FFB347', to: '#4A1942' })
            .toStyle(),
    },
    {
        name: 'Breathe',
        description: 'Radial gradient with a breath animation',
        code: [
            "new Builder()",
            "  .radialGradient({ from: '#00D9FF', to: '#050914' })",
            "  .breathe({ duration: '3s' })",
            "  .toStyle()",
        ].join('\n'),
        style: new Builder()
            .radialGradient({ from: '#00D9FF', to: '#050914' })
            .breathe({ duration: '3s' })
            .toStyle(),
    },
    {
        name: 'Starfield',
        description: 'White dot pattern over a deep navy gradient',
        code: [
            "new Builder()",
            "  .linearGradient({ from: '#1a1a2e', to: '#16213e' })",
            "  .dots({ color: '#fff', size: '4px', spacing: '18px', opacity: 0.25 })",
            "  .toStyle()",
        ].join('\n'),
        style: new Builder()
            .linearGradient({ from: '#1a1a2e', to: '#16213e' })
            .dots({ color: '#fff', size: '4px', spacing: '18px', opacity: 0.25 })
            .toStyle(),
    },
    {
        name: 'Northern Lights',
        description: 'Animated multi-layer mesh gradient',
        code: [
            "new Builder()",
            "  .meshGradient({ background: '#050914', layers: meshLayers })",
            "  .aurora({ duration: '5s' })",
            "  .toStyle()",
        ].join('\n'),
        style: new Builder()
            .meshGradient({ background: '#050914', layers: meshLayers })
            .aurora({ duration: '5s' })
            .toStyle(),
    },
    {
        name: 'Tide',
        description: 'Sea-toned mesh gradient, drifting like slow currents',
        code: [
            "new Builder()",
            "  .meshGradient({ background: '#021b2e', layers: oceanMeshLayers })",
            "  .aurora({ duration: '10s' })",
            "  .toStyle()",
        ].join('\n'),
        style: new Builder()
            .meshGradient({ background: '#021b2e', layers: oceanMeshLayers })
            .aurora({ duration: '10s' })
            .toStyle(),
    },
    {
        name: 'Leather',
        description:  'Dark brown shade with a rough, leather-like texture',
        code: [
            "new Builder()",
            "  .linearGradient({ from: '#3E2723', to: '#8D6748' })",
            "  .vignette({intensity: .1, color: '#422a24'})",
            "  .grain({ intensity: 3 })",
            "  .toStyle()",
        ].join('\n'),
        style: new Builder()
            .linearGradient({ from: '#3E2723', to: '#8D6748' })
            .vignette({intensity: .1, color: '#422a24'})
            .grain({ intensity: 4 })
            .toStyle(),
    },
    {
        name: 'Frost',
        description: 'Pale icy gradient with a slow shimmering breath',
        code: [
            "new Builder()",
            "  .linearGradient({ from: '#EAF6FF', to: '#0B3D91' })",
            "  .breathe({ duration: '5s' })",
            "  .toStyle()",
        ].join('\n'),
        style: new Builder()
            .linearGradient({ from: '#EAF6FF', to: '#0B3D91' })
            .breathe({ duration: '5s' })
            .toStyle(),
    },
    {
        name: 'xeerpe.io background',
        description: "A green terminal grid glowing over near-black",
        code: [
            "new Builder()",
            "  .radialGradient({ from: 'rgba(0,255,140,0.12)', to: 'transparent', size: 'closest-side' })",
            "  .linearGradient({ from: '#050705', to: '#0a0f0a', angle: '135deg' })",
            "  .grid({ color: '#00b300' })",
            "  .toStyle()",
        ].join('\n'),
        style: new Builder()
            .radialGradient({ from: 'rgba(0,255,140,0.12)', to: 'transparent', size: 'closest-side' })
            .linearGradient({ from: '#050705', to: '#0a0f0a', angle: '135deg' })
            .grid({ color: '#00b300' })
            .toStyle(),
    },

];

const Examples = () => {
    return (
        <div className={classes.examplesContainer}>
            {examples.map((example) => (
                <div key={example.name} className={classes.exampleCard}>
                    <div className={classes.swatch} style={example.style} />
                    <div className={classes.caption}>
                        <span className={classes.name}>{example.name}</span>
                        <span className={classes.description}>{example.description}</span>
                        <pre className={classes.code}>
              <code>{example.code}</code>
            </pre>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Examples;