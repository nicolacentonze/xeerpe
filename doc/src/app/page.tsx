import { Builder, colors } from "xeerpe"

export default function Page() {
    const linearStyle = new Builder()
        .linearGradient({from: '#f2ebd8', to: 'transparent', direction: 'to right', size: '1px', backgroundSize: '25% 25%'})
        .linearGradient({from: '#f2ebd8', to: 'transparent', direction: 'to bottom', size: '1px', backgroundSize: '25% 25%'})
        .linearGradient({from: colors.mulberry, to: colors.delft})
        .toStyle()

    const radialStyle = new Builder()
        .radialGradient({from: colors.mulberry, to: colors.delft, size: 'closest-side' })
        .blur('8px')
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