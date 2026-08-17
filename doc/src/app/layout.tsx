import {Metadata} from "next";
import Sidebar from "@cmp/core/sidebar/sidebar.tsx";
import Navbar from "@cmp/core/navbar/navbar.tsx";
import {SidebarProvider} from "@/src/context/sidebarContext.tsx";
import {Builder} from "xeerpe"
import { Roboto } from 'next/font/google'
import '../../../lib/src/css/animations.css'
import "./index.css"

export const metadata: Metadata = {
    title: 'xeerpe',
    description: 'xeerpe - Doc',
}

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
})


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
        }} className={roboto.className}>
        <body>
        <SidebarProvider>
            <Navbar/>
            <Sidebar/>
            {children}
        </SidebarProvider>
        </body>
        </html>
    );
}