export interface SidebarItem {
    title: string
    slug: string
}

export interface SidebarGroup {
    title: string
    slug: string
    items: SidebarItem[]
}

export interface SidebarContextValue {
    open: boolean;
    toggle: () => void;
    close: () => void;
};
