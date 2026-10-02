import { promises as fs } from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import classes from './about.module.css'
import CodeBlock from "@cmp/codeBlock/codeBlock.tsx";
import {Metadata} from "next";
import SocialLinks from "@/src/app/about/sociallinks/socialLinks.tsx";

export const metadata: Metadata = {
    title: 'About',
    description: 'Who builds xeerpe, why it exists and how to contribute.',
    alternates: { canonical: '/about' },
}

const AboutPage = async () => {
    const source = await fs.readFile(
        path.join(process.cwd(), 'src/app/about/about.mdx'),
        'utf-8'
    )

    const { content } = await compileMDX({
        source,
        components: { pre: CodeBlock, SocialLinks },
        options: {
            mdxOptions: {
                rehypePlugins: [
                    rehypeSlug,
                    [rehypePrettyCode, { theme: 'github-dark', keepBackground: true }],
                ],
            },
        },
    })

    return <article className={classes.about}>{content}</article>
}

export default AboutPage