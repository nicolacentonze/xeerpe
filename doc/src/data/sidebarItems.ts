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
                description: 'Add dots, grids, star fields and sunburst rays over your CSS backgrounds ' +
                    'with xeerpe. Pattern options, examples and layering.',
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
                description: 'Ready-made xeerpe backgrounds in one line of code. How presets work, ' +
                    'how to extend or rebuild one, and the 100-color palette.',
            },
        ],
    },
    {
        title: 'Examples',
        slug: 'examples',
        items: [
            // {
            //     title: 'Simple',
            //     slug: 'simple-examples',
            //     description: 'Short, copy-ready xeerpe recipes: single gradients with a pattern, ' +
            //         'an effect or an animation on top.',
            //     draft: true,
            // },
            // {
            //     title: 'Elaborate',
            //     slug: 'elaborate-examples',
            //     description: 'Advanced xeerpe backgrounds that combine gradients, patterns, effects ' +
            //         'and animations in a single chain.',
            //     draft: true,
            // },
            {
                title: 'Presets',
                slug: 'presets-examples',
                description: 'Browse more than 200 ready-made xeerpe backgrounds, from gold and chocolate ' +
                    'to jungle and galaxy. Click a preset to copy its code.',
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