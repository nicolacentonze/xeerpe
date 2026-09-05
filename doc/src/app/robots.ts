import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
    return {
        rules: { userAgent: '*', allow: '/' },
        sitemap: 'https://xeerpe.io/sitemap.xml',
    }
}

export default robots