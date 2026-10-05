import fs from 'node:fs/promises'
import path from 'node:path'
import type {Metadata} from 'next'
import {compileMDX} from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import CodeBlock from '@cmp/codeBlock/codeBlock.tsx'
import classes from './changelog.module.css'

const title = 'Changelog'
const description =
    'Release history of xeerpe, from the first gradients to presets, validation and new animations. Features and fixes for every version.'

export const metadata: Metadata = {
    title,
    description,
    alternates: {canonical: '/changelog'},
    openGraph: {
        type: 'website',
        url: '/changelog',
        title: `${title} — xeerpe`,
        description: description,
    },
}

const ChangelogPage = async () => {
    const source = await fs.readFile(
        path.join(process.cwd(), 'src/app/changelog/changelog.mdx'),
        'utf-8'
    )

    const {content} = await compileMDX({
        source,
        components: {pre: CodeBlock},
        options: {
            mdxOptions: {
                rehypePlugins: [
                    rehypeSlug,
                    [rehypePrettyCode, {theme: 'github-dark', keepBackground: true}],
                ],
            },
        },
    })

    return <article className={`${classes.changelog} mdx`}>{content}</article>
}

export default ChangelogPage