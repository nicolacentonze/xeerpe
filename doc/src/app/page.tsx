import { Builder, colors } from "xeerpe"

export default function Page() {

    const xeerpeTitle = new Builder()
        .linearGradient({ from: '#39ff9c', to: '#0a5c33', angle: '135deg' })
        .toTextStyle()

    const xeerpeLinear = new Builder()
        .linearGradient({ from: '#39ff9c', to: '#0a5c33', angle: '135deg' })
        .toStyle()

    const xeerpeRadial = new Builder()
        .radialGradient({ from: '#39ff9c', to: '#0a0f0a', size: 'closest-side' })
        .toStyle()

    return (
        <main>

            <h1 style={{...xeerpeTitle, fontSize: '60px'}}>THIS IS XEERPE... ENJOY!</h1>

            <br/>

            <div
                style={{
                    ...xeerpeLinear,
                    width: '200px',
                    height: '100px'
                }}
            />     <br/>

            <div
                style={{
                    ...xeerpeRadial,
                    width: '200px',
                    height: '100px'
                }}
            />
        </main>
    )
}