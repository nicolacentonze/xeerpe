export const SITE_URL = 'https://www.xeerpe.io'

export const SITE_NAME = 'xeerpe'

export const SITE_TITLE =
    'xeerpe — CSS background and style builder: gradients, effects'

export const SITE_DESCRIPTION =
    'Build CSS backgrounds and styles with a chainable API: gradients, patterns, effects, filters and animations in one style object. Zero dependencies, any framework.'

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
    keywords: 'xeerpe, css background, css style, style builder, css gradient, gradient generator, mesh gradient, background effects, text effects, animation, css-in-js, TypeScript, JavaScript',
    license: LICENSE_URL,
    author: {
        '@type': 'Person',
        name: AUTHOR_NAME,
        url: AUTHOR_URL,
    },
})

export const articleJsonLd = (
    page: { title: string; description?: string; path: string; updatedAt?: string }
) => ({
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: page.title,
    description: page.description,
    url: `${SITE_URL}${page.path}`,
    inLanguage: 'en',
    dateModified: page.updatedAt,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    author: { '@type': 'Person', name: AUTHOR_NAME, url: AUTHOR_URL },
})
export const websiteJsonLd = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: 'en',
    publisher: { '@type': 'Person', name: AUTHOR_NAME, url: AUTHOR_URL },
})

export const socialMetadata = (
    page: { title: string; description?: string; path: string; type?: 'website' | 'article' }
) => ({
    openGraph: {
        type: page.type ?? 'website',
        siteName: SITE_NAME,
        locale: SITE_LOCALE,
        url: page.path,
        title: page.title,
        description: page.description,
    },
    twitter: {
        card: 'summary_large_image' as const,
        title: page.title,
        description: page.description,
    },
})
