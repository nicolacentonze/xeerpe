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
        title: 'Examples',
        slug: 'examples',
        items: [
            { title: 'Simple', slug: 'simple-examples' },
            { title: 'Elaborate', slug: 'elaborate-examples' },
            { title: 'Presets', slug: 'presets-examples' },
        ],
    },
]