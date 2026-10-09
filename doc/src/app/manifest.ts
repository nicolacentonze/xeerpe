import type {MetadataRoute} from 'next'
import {
    SITE_NAME, SITE_DESCRIPTION, THEME_COLOR, BACKGROUND_COLOR,
} from "@/src/config/site.ts";

const manifest = (): MetadataRoute.Manifest => ({
    name: 'xeerpe — CSS background and style builder',
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: BACKGROUND_COLOR,
    theme_color: THEME_COLOR,
    icons: [
        {src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any'},
        {src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any'},
        {src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable'},
    ],
})

export default manifest