import {Metadata} from "next";
import {
    SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION, SITE_LOCALE,
    AUTHOR_NAME, AUTHOR_URL, INDEXABLE,
    serializeJsonLd, softwareJsonLd,
} from "@/src/config/site.ts";
import Sidebar from "@cmp/core/sidebar/sidebar.tsx";
import Navbar from "@cmp/core/navbar/navbar.tsx";
import {SidebarProvider} from "@/src/context/sidebarContext.tsx";
import {Builder} from "xeerpe"
import {Roboto} from 'next/font/google'
import '../../../lib/src/css/animations.css'
import "./index.css"


export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_TITLE,
        template: '%s — xeerpe',
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    creator: AUTHOR_NAME,
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        siteName: SITE_NAME,
        url: SITE_URL,
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        locale: SITE_LOCALE,
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
    },
    robots: INDEXABLE
        ? {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
                'max-video-preview': -1,
            },
        }
        : { index: false, follow: false },
}

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
})

const RootLayout = ({children}: { children: React.ReactNode }) => {

    const xeerpeBackground = new Builder()
        .radialGradient({from: 'rgba(0,255,140,0.12)', to: 'transparent', size: 'closest-side'})
        .linearGradient({from: '#050705', to: '#0a0f0a', angle: '135deg'})
        .grid({color: '#00b300'})
        .toStyle()

    return (
        <html lang="en" style={xeerpeBackground} className={roboto.className}>
        <body>

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serializeJsonLd(softwareJsonLd()) }}
        />
        <SidebarProvider>
            <Navbar/>
            <Sidebar/>
            {children}
        </SidebarProvider>
        </body>
        </html>
    );
}

export default RootLayout