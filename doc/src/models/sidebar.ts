import { ReactNode, RefObject } from 'react'

export interface SidebarLinkProps {
    href: string
    children: ReactNode
    external?: boolean
}

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
    toggleRef: RefObject<HTMLButtonElement | null>
    toggle: () => void
    close: () => void
}

export interface GuidePage extends SidebarItem {
    href: string
    groupTitle: string
    groupSlug: string
}
