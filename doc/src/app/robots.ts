import type { MetadataRoute } from 'next'
import { SITE_URL, INDEXABLE } from "@/src/config/site.ts";

const robots = (): MetadataRoute.Robots => {
    if (!INDEXABLE) {
        return { rules: { userAgent: '*', disallow: '/' } }
    }
    return {
        rules: { userAgent: '*', allow: '/' },
        sitemap: `${SITE_URL}/sitemap.xml`,
    }
}

export default robots