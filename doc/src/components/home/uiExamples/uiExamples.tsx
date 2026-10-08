import {Builder} from 'xeerpe'
import classes from './uiExamples.module.css'
import Code from '@cmp/codeBlock/highlightedCode.tsx'
import {UiExample} from "@/src/models/home.ts";

const gradientText = new Builder()
    .linearGradient({ colors: ['#5EB847', '#CAD328', '#ffd166'], angle: '90deg' })
    .toTextStyle()

const glassBackdrop = new Builder()
    .meshGradient({
        background: '#140b2e',
        layers: [
            { position: '15% 25%', from: '#ff4fa3', to: 'transparent', colorToPosition: '45%' },
            { position: '85% 75%', from: '#3dd6c2', to: 'transparent', colorToPosition: '45%' },
            { position: '75% 15%', from: '#7a5cff', to: 'transparent', colorToPosition: '40%' },
        ],
    })
    .toStyle()

const glassPanel = new Builder()
    .linearGradient({ from: 'rgba(255,255,255,0.22)', to: 'rgba(255,255,255,0.06)' })
    .blur({ amount: '14px' })
    .toStyle()

const neonButton = new Builder()
    .linearGradient({ from: '#06080f', to: '#0b1020' })
    .glow({ color: '#22d3ee', amount: '18px' })
    .glow({ type: 'inner', color: '#22d3ee', amount: '12px' })
    .toStyle()

const avatarRing = new Builder()
    .conicGradient({ colors: ['#5EB847', '#CAD328', '#22d3ee', '#7a5cff', '#5EB847'] })
    .rotate({ duration: '4s' })
    .toStyle()

const skeleton = new Builder()
    .linearGradient({ colors: ['#1c2620', '#2f3d34', '#1c2620'], angle: '90deg', backgroundSize: '200% 100%' })
    .shimmer({ duration: '1.6s' })
    .toStyle()

const spotlightCard = new Builder()
    .radialGradient({ from: 'rgba(94,184,71,0.35)', to: 'transparent', position: '0% 0%', colorToPosition: '70%' })
    .linearGradient({ from: '#0c140e', to: '#060906' })
    .dots({ color: '#5EB847', size: '18px', opacity: 0.18 })
    .glow({ type: 'inner', color: 'rgba(94,184,71,0.35)', amount: '30px' })
    .toStyle()

const examples: UiExample[] = [
    {
        title: 'Gradient text',
        description: 'The same chain, applied to text with toTextStyle().',
        code: [
            "new Builder()",
            "  .linearGradient({ colors: ['#5EB847', '#CAD328', '#ffd166'], angle: '90deg' })",
            "  .toTextStyle()",
        ].join('\n'),
        preview: <span className={classes.gradientText} style={gradientText}>Chain it.</span>,
    },
    {
        title: 'Frosted glass',
        description: 'A translucent panel that blurs whatever sits behind it.',
        code: [
            "new Builder()",
            "  .linearGradient({ from: 'rgba(255,255,255,0.22)', to: 'rgba(255,255,255,0.06)' })",
            "  .blur({ amount: '14px' })",
            "  .toStyle()",
        ].join('\n'),
        previewStyle: glassBackdrop,
        preview: <div className={classes.glass} style={glassPanel}>Frosted glass</div>,
    },
    {
        title: 'Neon button',
        description: 'Two glows, one outside and one inside, make a neon outline.',
        code: [
            "new Builder()",
            "  .linearGradient({ from: '#06080f', to: '#0b1020' })",
            "  .glow({ color: '#22d3ee', amount: '18px' })",
            "  .glow({ type: 'inner', color: '#22d3ee', amount: '12px' })",
            "  .toStyle()",
        ].join('\n'),
        preview: <button type="button" className={classes.neon} style={neonButton}>Get started</button>,
    },
    {
        title: 'Avatar ring',
        description: 'A conic gradient that spins around a profile picture.',
        code: [
            "new Builder()",
            "  .conicGradient({ colors: ['#5EB847', '#CAD328', '#22d3ee', '#7a5cff', '#5EB847'] })",
            "  .rotate({ duration: '4s' })",
            "  .toStyle()",
        ].join('\n'),
        preview: (
            <div className={classes.avatar}>
                <span className={classes.ring} style={avatarRing} />
                <span className={classes.initials}>NC</span>
            </div>
        ),
    },
    {
        title: 'Loading skeleton',
        description: 'A light band that slides across placeholder content.',
        code: [
            "new Builder()",
            "  .linearGradient({",
            "    colors: ['#1c2620', '#2f3d34', '#1c2620'],",
            "    angle: '90deg',",
            "    backgroundSize: '200% 100%',",
            "  })",
            "  .shimmer({ duration: '1.6s' })",
            "  .toStyle()",
        ].join('\n'),
        preview: (
            <div className={classes.skeleton}>
                <span className={classes.skeletonAvatar} style={skeleton} />
                <span className={classes.skeletonLines}>
                    <span className={classes.skeletonLine} style={skeleton} />
                    <span className={classes.skeletonLine} style={skeleton} />
                    <span className={`${classes.skeletonLine} ${classes.short}`} style={skeleton} />
                </span>
            </div>
        ),
    },
    {
        title: 'Spotlight card',
        description: 'A corner light, a dark base, dots and an inner glow.',
        code: [
            "new Builder()",
            "  .radialGradient({ from: 'rgba(94,184,71,0.35)', to: 'transparent', position: '0% 0%', colorToPosition: '70%' })",
            "  .linearGradient({ from: '#0c140e', to: '#060906' })",
            "  .dots({ color: '#5EB847', size: '18px', opacity: 0.18 })",
            "  .glow({ type: 'inner', color: 'rgba(94,184,71,0.35)', amount: '30px' })",
            "  .toStyle()",
        ].join('\n'),
        preview: (
            <div className={classes.spotlight} style={spotlightCard}>
                <span className={classes.badge}>New</span>
                <strong className={classes.spotlightTitle}>229 presets</strong>
                <span className={classes.spotlightText}>One line of code each.</span>
            </div>
        ),
    },
]

const UiExamples = () => (
    <div className={classes.grid}>
        {examples.map((example) => (
            <article key={example.title} className={classes.card}>
                <div className={classes.preview} style={example.previewStyle}>
                    {example.preview}
                </div>
                <h3 className={classes.title}>{example.title}</h3>
                <p className={classes.description}>{example.description}</p>
                <Code code={example.code} className={classes.code} />
            </article>
        ))}
    </div>
)

export default UiExamples
