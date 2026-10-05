import {GuidePage, SidebarGroup} from "@/src/models/sidebar.ts";

export const sidebarElements: SidebarGroup[] = [
    {
        title: 'Getting started',
        slug: 'getting-started',
        items: [
            {
                title: 'Installation',
                slug: 'installation',
                description: 'Install xeerpe with npm, yarn or pnpm and import the animation ' +
                    'stylesheet. Setup for CSS, SCSS and Angular projects.',
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
                description: 'Create linear, radial, conic and mesh CSS gradients with xeerpe. ' +
                    'Every generator option, color stops and how to layer gradients.',
            },
            {
                title: 'Filters',
                slug: 'filters',
                description: 'Blur an element or its backdrop with the xeerpe blur filter. ' +
                    'Options, frosted glass examples and type reference.',
            },
            {
                title: 'Effects',
                slug: 'effects',
                description: 'Add noise, film grain, vignette and glow to CSS backgrounds with xeerpe. ' +
                    'Every effect option, examples and how effects stack.',
            },
            {
                title: 'Patterns',
                slug: 'patterns',
                description: 'Repeat dots and grid patterns over your CSS backgrounds with xeerpe. ' +
                    'Pattern options, spacing, stroke width and layering.',
            },
            {
                title: 'Animations',
                slug: 'animations',
                description: 'Animate CSS backgrounds with nine keyframe animations, from pulse to drift. ' +
                    'Setup, shared options, combinations and reduced motion.',
            },
            {
                title: 'Presets',
                slug: 'presets',
                description: 'Ready-made xeerpe backgrounds in one line: sunrise and northern-lights. ' +
                    'Extend or rebuild a preset and browse the 100-color palette.',
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
                description: 'WIP',
                draft: true,
            },
            {
                title: 'Elaborate',
                slug: 'elaborate-examples',
                description: 'WIP',
                draft: true,
            },
            {
                title: 'Presets',
                slug: 'presets-examples',
                description: 'WIP',
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