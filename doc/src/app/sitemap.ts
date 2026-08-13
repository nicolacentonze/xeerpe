import type { MetadataRoute } from 'next'
import {sidebarElements} from "@/src/data/sidebarItems.ts";
import {SidebarGroup, SidebarItem} from "@/src/models/sidebar.ts";

export default function sitemap(): MetadataRoute.Sitemap {
    return sidebarElements.flatMap((group: SidebarGroup) =>
        group.items.map((item: SidebarItem) => ({
            url: `https://tuosito.com/guide/${item.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: group.slug === sidebarElements[0].slug ? 0.9 : 0.6,
        }))
    )
}