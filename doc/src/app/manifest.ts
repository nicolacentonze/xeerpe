import type {MetadataRoute} from 'next'
import {
    SITE_NAME, SITE_DESCRIPTION, THEME_COLOR, BACKGROUND_COLOR,
} from "@/src/config/site.ts";

const manifest = (): MetadataRoute.Manifest => ({
    name: 'xeerpe — CSS background builder',
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: BACKGROUND_COLOR,
    theme_color: THEME_COLOR,
    icons: [
        {src: '/icon.png', sizes: '512x512', type: 'image/png'},
    ],
})

export default manifest