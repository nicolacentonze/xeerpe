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
            "  .breathe({ duration: '4s' })",
            "  .toStyle()",
        ].join('\n'),
        style: new Builder()
            .radialGradient({ from: '#00D9FF', to: '#050914' })
            .breathe({ duration: '4s' })
            .toStyle(),
    },
    {
        name: 'Starfield',
        description: 'White dot pattern over a deep navy gradient',
        code: [
            "new Builder()",
            "  .linearGradient({ from: '#1a1a2e', to: '#16213e' })",
            "  .dots({ color: '#fff', size: '3px', spacing: '18px', opacity: 0.25 })",
            "  .toStyle()",
        ].join('\n'),
        style: new Builder()
            .linearGradient({ from: '#1a1a2e', to: '#16213e' })
            .dots({ color: '#fff', size: '3px', spacing: '18px', opacity: 0.25 })
            .toStyle(),
    },
    {
        name: 'Northern Lights',
        description: 'Animated multi-layer mesh gradient',
        code: [
            "new Builder()",
            "  .meshGradient({ background: '#050914', layers: meshLayers })",
            "  .aurora({ duration: '8s' })",
            "  .toStyle()",
        ].join('\n'),
        style: new Builder()
            .meshGradient({ background: '#050914', layers: meshLayers })
            .aurora({ duration: '8s' })
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