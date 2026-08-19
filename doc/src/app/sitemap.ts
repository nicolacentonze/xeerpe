import type { MetadataRoute } from 'next'
import {sidebarElements} from "@/src/data/sidebarItems.ts";
import {SidebarGroup, SidebarItem} from "@/src/models/sidebar.ts";

const sitemap = (): MetadataRoute.Sitemap => {
    return sidebarElements.flatMap((group: SidebarGroup) =>
        group.items.map((item: SidebarItem) => ({
            url: `https://www.xeerpe.io/guide/${item.slug}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: group.slug === sidebarElements[0].slug ? 0.9 : 0.6,
        }))
    )
}

export default sitemap