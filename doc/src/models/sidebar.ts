export interface SidebarItem {
    title: string
    slug: string
    description?: string
    updatedAt?: string
    draft?: boolean
}

export interface SidebarGroup {
    title: string
    slug: string
    items: SidebarItem[]
}

export interface SidebarContextValue {
    open: boolean
    toggle: () => void
    close: () => void
}

export interface GuidePage extends SidebarItem {
    href: string
    groupTitle: string
    groupSlug: string
}