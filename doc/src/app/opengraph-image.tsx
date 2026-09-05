import { ImageResponse } from 'next/og'
import { join } from 'node:path'
import { readFile } from 'node:fs/promises'
import {BACKGROUND_COLOR} from "@/src/config/site.ts";

export const alt = 'xeerpe — craft CSS backgrounds, fluently.'
export const size = { width: 1200, height: 630 }

const logoData = await readFile(
    join(process.cwd(), 'src/assets/xeerpeLogo.png'),
    'base64',
)
const logoSrc = `data:image/png;base64,${logoData}`

const Image = ()=> {
    return new ImageResponse(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 32,
                background: BACKGROUND_COLOR
            }}
        >
            <img src={logoSrc} height={250} alt={alt}/>
        </div>,
        size,
    )
}

export default Image