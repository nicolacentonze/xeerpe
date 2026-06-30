import { Builder, colors } from "xeerpe"

export default function Page() {
    const linearStyle = new Builder()
        .linearGradient({from: '#f2ebd8', to: 'transparent', direction: 'to right', size: '1px'})
        .linearGradient({from: '#f2ebd8', to: 'transparent', direction: 'to bottom', size: '1px'})
        .linearGradient({from: 'red', to: 'blue'})
        .blur('8px')
        .toStyle()

    const radialStyle = new Builder()
        .radialGradient({from: colors.absinthe, to: colors.amethyst, size: 'closest-side' })
        .toStyle()

    return (
        <main>
            <div
                style={{
                    ...linearStyle,
                    width: '200px',
                    height: '100px'
            }}
            />

            <div
                style={{
                    ...radialStyle,
                    width: '200px',
                    height: '100px'
                }}
            />
        </main>
    )
}