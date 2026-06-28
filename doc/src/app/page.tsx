import { Builder, colors } from "xeerpe"

export default function Page() {
    const linearStyle = new Builder()
        .gradient('linear', {from: colors.tiffany, to: colors.absinthe})
        .blur('8px')
        .toStyle()

    const radialStyle = new Builder()
        .gradient('radial', {from: colors.absinthe, to: colors.amethyst, size: 'closest-side' })
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