import { Builder, colors, GradientColorStop } from "xeerpe"

export default function Page() {

    const gradientColors = {
        primary: { from: colors.celadon, to: colors.malachite },
        radial: { from: colors.amethyst, to: colors.indigoInk },
        conic: [
            { color: colors.cinnabar, position: '0%' },
            { color: colors.amber, position: '25%' },
            { color: colors.malachite, position: '50%' },
            { color: colors.cobalt, position: '75%' }
        ]
    }

    const meshLayers = [
        { position: '11% 28%', from: colors.celadon, to: 'transparent', colorFromPosition: '0px', colorToPosition: '50%' },
        { position: '29% 3%', from: colors.malachite, to: 'transparent', colorFromPosition: '0px', colorToPosition: '50%' },
        { position: '97% 56%', from: colors.amethyst, to: 'transparent', colorFromPosition: '0px', colorToPosition: '50%' },
        { position: '9% 33%', from: colors.verdigris, to: 'transparent', colorFromPosition: '0px', colorToPosition: '50%' },
        { position: '65% 60%', from: colors.maya, to: 'transparent', colorFromPosition: '0px', colorToPosition: '50%' },
        { position: '56% 60%', from: colors.wisteria, to: 'transparent', colorFromPosition: '0px', colorToPosition: '50%' },
        { position: '29% 74%', from: colors.glacier, to: 'transparent', colorFromPosition: '0px', colorToPosition: '50%' }
    ]

    const xeerpeTitle = new Builder()
        .linearGradient({ ...gradientColors.primary, angle: '135deg' })
        .toTextStyle()

    const xeerpeLinear = new Builder()
        .linearGradient({ ...gradientColors.primary, angle: '135deg' })
        .grain({})
        .toStyle()

    const xeerpeRadial = new Builder()
        .radialGradient({ ...gradientColors.radial, size: 'closest-side' })
        .grain({})
        .toStyle()

    const xeerpeConic = new Builder()
        .conicGradient({ position: 'center', colors: gradientColors.conic as GradientColorStop[], angle: '45deg' })
        .grain({})
        .toStyle()

    const xeerpeMesh = new Builder()
        .meshGradient({ background: colors.chalk, layers: meshLayers })
        .grain({intensity: 10})
        .vignette({color: 'red'})
        .toStyle()

    return (
        <main>

            <h1 style={{...xeerpeTitle, fontSize: '60px'}}>XEERPE</h1>

            <br/>

            <div
                style={{
                    ...xeerpeLinear,
                    borderRadius: '16px',
                    width: '100%',
                    height: '200px'
                }}
            />

            <br/>

            <div
                style={{
                    ...xeerpeRadial,
                    borderRadius: '16px',
                    width: '100%',
                    height: '200px'
                }}
            />

            <br/>

            <div
                style={{
                    ...xeerpeConic,
                    borderRadius: '16px',
                    width: '100%',
                    height: '200px'
                }}
            />

            <br/>

            <div
                style={{
                    ...xeerpeMesh,
                    borderRadius: '16px',
                    width: '100%',
                    height: '200px'
                }}
            />
        </main>
    )
}