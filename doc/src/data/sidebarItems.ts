import {SidebarGroup} from "@/src/models/sidebar.ts";

export const sidebarElements: SidebarGroup[] = [
    {
        title: 'Getting started',
        slug: 'getting-started',
        items: [
            { title: 'Installation', slug: 'installation' },
            { title: 'Usage', slug: 'usage' },
        ],
    },
    {
        title: 'Essentials',
        slug: 'essentials',
        items: [
            { title: 'Gradients', slug: 'gradients' },
            { title: 'Filters', slug: 'filters' },
            { title: 'Effects', slug: 'effects' },
            { title: 'Patterns', slug: 'patterns' },
            { title: 'Animations', slug: 'animations' },
            { title: 'Presets', slug: 'presets' },
        ],
    },
    {
        title: 'Example',
        slug: 'example',
        items: [
            { title: 'Simple', slug: 'simple' },
            { title: 'Elaborate', slug: 'elaborate' },
            { title: 'Presets', slug: 'presets' },
        ],
    },
]