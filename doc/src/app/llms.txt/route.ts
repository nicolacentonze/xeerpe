import {guidePages} from "@/src/data/sidebarItems.ts";
import {GITHUB_URL, NPM_URL, SITE_NAME, SITE_URL} from "@/src/config/site.ts";

export const dynamic = 'force-static'

export const GET = () => {
    const pages = guidePages.filter((page) => !page.draft)
    const groups = [...new Set(pages.map((page) => page.groupTitle))]

    const sections = groups.map((group) => {
        const links = pages
            .filter((page) => page.groupTitle === group)
            .map((page) => `- [${page.title}](${SITE_URL}${page.href}): ${page.description ?? ''}`.trimEnd())
        return `## ${group}\n\n${links.join('\n')}`
    })

    const body = [
        `# ${SITE_NAME}`,
        '> xeerpe is a TypeScript library for building CSS backgrounds and gradient text with a chainable API. ' +
        'It stacks gradients (linear, radial, conic, mesh), patterns, effects, filters and animations into a single ' +
        'style object that works anywhere inline styles do: React, Vue, Angular or plain JavaScript. ' +
        'Zero dependencies, fully typed, MIT licensed.',
        '## When to use xeerpe\n\n' +
        '- Layering a background (mesh gradient, grain, dots, vignette) as one readable chain\n' +
        '- Animated gradient backgrounds without hand-written keyframes\n' +
        '- Backgrounds computed in JavaScript from props, state or a theme\n' +
        '- Ready-made presets (more than 200) in one line\n' +
        '- Gradient text with the same chain\n\n' +
        'A single static `linear-gradient` is usually simpler as plain CSS.',
        '## Install\n\n```bash\nnpm install xeerpe\n```',
        ...sections,
        `## Optional\n\n- [Changelog](${SITE_URL}/changelog): release history\n- [About](${SITE_URL}/about): what xeerpe is and who builds it\n- [Source code](${GITHUB_URL}): GitHub repository\n- [npm package](${NPM_URL}): npm package`,
    ].join('\n\n')

    return new Response(`${body}\n`, {
        headers: {'Content-Type': 'text/plain; charset=utf-8'},
    })
}
