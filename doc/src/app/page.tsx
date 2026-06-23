import { Builder } from "xeerpe"

export default function Page() {
    const style = new Builder()
        .gradient('#667eea', '#764ba2')
        .blur('8px')
        .toStyle()

    return (
        <main>
            xeerpe
            <div
                style={{
                    ...style,
                    width: '200px',
                    height: '100px'
            }}
            />
        </main>
    )
}