import type { MetadataRoute } from 'next'
import { guidePages } from "@/src/data/sidebarItems.ts";
import { SITE_URL } from "@/src/config/site.ts";

const sitemap = (): MetadataRoute.Sitemap => {
    const staticPages: MetadataRoute.Sitemap = [
        { url: SITE_URL,                priority: 1.0 },
        { url: `${SITE_URL}/guide`,     priority: 0.9 },
        { url: `${SITE_URL}/changelog`, priority: 0.5 },
        { url: `${SITE_URL}/about`,     priority: 0.3 },
    ]

    const published: MetadataRoute.Sitemap = guidePages
        .filter((page) => !page.draft)
        .map((page) => ({
            url: `${SITE_URL}${page.href}`,
            lastModified: page.updatedAt ? new Date(page.updatedAt) : undefined,
            priority: page.groupSlug === 'getting-started' ? 0.9 : 0.7,
        }))

    return [...staticPages, ...published]
}

export default sitemap