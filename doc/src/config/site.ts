// PUBLIC site configuration

// Everything here is public! This file gets bundled client-side, so it's readable from devtools

export const SITE_URL = 'https://xeerpe.io'

export const SITE_NAME = 'xeerpe'

export const SITE_TITLE =
    'xeerpe — CSS gradient, pattern, filters and animation builder'

export const SITE_DESCRIPTION =
    'Chain gradients, filters, effects, patterns and animations into a single CSS style object. Zero dependencies, works with any frameworks'

export const BACKGROUND_COLOR = '#050705'

export const THEME_COLOR = '#5EB847'

export const SITE_LOCALE = 'en_US'

export const AUTHOR_NAME = 'Nicola Centonze'
export const AUTHOR_URL = 'https://github.com/nicolacentonze'

export const GITHUB_URL = 'https://github.com/nicolacentonze/xeerpe'
export const NPM_URL = 'https://www.npmjs.com/package/xeerpe'
export const LICENSE_URL = 'https://github.com/nicolacentonze/xeerpe/blob/main/lib/LICENSE'

export const INDEXABLE = process.env.VERCEL_ENV === 'production'

export const serializeJsonLd = (data: unknown): string =>
    JSON.stringify(data)
        .replace(/</g, '\\u003c')
        .replace(/>/g, '\\u003e')
        .replace(/&/g, '\\u0026')

export const softwareJsonLd = () => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    codeRepository: GITHUB_URL,
    sameAs: [GITHUB_URL, NPM_URL],
    programmingLanguage: ['TypeScript', 'JavaScript'],
    runtimePlatform: ['Node.js', 'Web Browser'],
    keywords: 'xeerpe, css, gradient, mesh gradient, background, background-effects , text-effects, animation, css-in-js, TypeScript, JavaScript',
    license: LICENSE_URL,
    author: {
        '@type': 'Person',
        name: AUTHOR_NAME,
        url: AUTHOR_URL,
    },
})