import fs from 'node:fs/promises'
import path from 'node:path'
import type {Metadata} from 'next'
import {socialMetadata} from '@/src/config/site.ts'
import {compileMDX} from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import {codeTheme} from '@/src/config/codeTheme.ts'
import CodeBlock from '@cmp/codeBlock/codeBlock.tsx'
import classes from './about.module.css'
import SocialLinks from "@/src/app/about/sociallinks/socialLinks.tsx";

const title = 'About xeerpe, a CSS background and style builder'
const description =
    'xeerpe is an open source TypeScript library for building CSS backgrounds and styles, with gradients, patterns, filters and animations, through a chainable API.'

export const metadata: Metadata = {
    title: {absolute: title},
    description,
    alternates: {canonical: '/about'},
    ...socialMetadata({title, description, path: '/about'}),
}

const AboutPage = async () => {
    const source = await fs.readFile(
        path.join(process.cwd(), 'src/app/about/about.mdx'),
        'utf-8'
    )

    const {content} = await compileMDX({
        source,
        components: {pre: CodeBlock, SocialLinks},
        options: {
            mdxOptions: {
                rehypePlugins: [
                    rehypeSlug,
                    [rehypePrettyCode, {theme: codeTheme, keepBackground: true}],
                ],
            },
        },
    })

    return (
        <main id="main-content" tabIndex={-1}>
            <article className={`${classes.about} mdx`}>{content}</article>
        </main>
    )
}

export default AboutPage