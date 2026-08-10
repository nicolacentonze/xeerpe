import {Metadata} from "next";
import {Builder} from "xeerpe"
import '../../../lib/src/css/animations.css'
import Navbar from "@cmp/core/navbar/navbar.tsx";
import "./index.css"

export const metadata: Metadata = {
    title: 'xeerpe',
    description: 'xeerpe - Doc',
}


export default function RootLayout({children}: {
    children: React.ReactNode;
}) {


    const xeerpeBackground = new Builder()
        .radialGradient({from: 'rgba(0,255,140,0.12)', to: 'transparent', size: 'closest-side'})
        .linearGradient({from: '#050705', to: '#0a0f0a', angle: '135deg'})
        .grid({color: '#00b300'})
        .toStyle()

    return (
        <html lang="en" style={{
            height: '100%', width: '100%', ...xeerpeBackground
        }}>
        <body>
        <Navbar></Navbar>
        <div>
            {children}
        </div>
        </body>
        </html>
    );
}