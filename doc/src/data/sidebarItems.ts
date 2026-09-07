import {GuidePage, SidebarGroup} from "@/src/models/sidebar.ts";

export const sidebarElements: SidebarGroup[] = [
    {
        title: 'Getting started',
        slug: 'getting-started',
        items: [
            {
                title: 'Installation',
                slug: 'installation',
                description: 'Install xeerpe with npm or yarn and import the animation ' +
                    'stylesheet. Setup for CSS and SCSS projects.',
            },
            {
                title: 'Usage',
                slug: 'usage',
                description: 'Build a CSS style object with the chainable Builder API ' +
                    'and apply it in React, Vue, Angular or vanilla JavaScript.',
            },
        ],
    },
    {
        title: 'Essentials',
        slug: 'essentials',
        items: [
            {
                title: 'Gradients',
                slug: 'gradients',
                description: '',
                draft: true,
            },
            {
                title: 'Filters',
                slug: 'filters',
                description: '',
                draft: true,
            },
            {
                title: 'Effects',
                slug: 'effects',
                description: '',
                draft: true,
            },
            {
                title: 'Patterns',
                slug: 'patterns',
                description: '',
                draft: true,
            },
            {
                title: 'Animations',
                slug: 'animations',
                description: '',
                draft: true,
            },
            {
                title: 'Presets',
                slug: 'presets',
                description: '',
                draft: true,
            },
        ],
    },
    {
        title: 'Examples',
        slug: 'examples',
        items: [
            {
                title: 'Simple',
                slug: 'simple-examples',
                description: '',
                draft: true,
            },
            {
                title: 'Elaborate',
                slug: 'elaborate-examples',
                description: '',
                draft: true,
            },
            {
                title: 'Presets',
                slug: 'presets-examples',
                description: '',
                draft: true,
            },
        ],
    },
]

export const guidePages: GuidePage[] = sidebarElements.flatMap((group) =>
    group.items.map((item) => ({
        ...item,
        href: `/guide/${item.slug}`,
        groupTitle: group.title,
        groupSlug: group.slug,
    }))
)

export const getGuidePage = (slug: string): GuidePage | undefined =>
    guidePages.find((page) => page.slug === slug)