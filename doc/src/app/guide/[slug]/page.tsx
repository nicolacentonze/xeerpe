import fs from 'node:fs/promises'
import path from 'node:path'
import {notFound} from 'next/navigation'
import {compileMDX} from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import {XeerpeDemo} from '@cmp/xeerpe/demos.tsx'
import rehypePrettyCode from "rehype-pretty-code";
import classes from '../guide.module.css'
import CodeBlock from "@cmp/codeBlock/codeBlock.tsx";
import TableOfContents from "@cmp/tableOfContents/tableOfContents.tsx";
import getToc from "@/src/utils/getToc.ts";
import GuideNav from "@cmp/guideNavPages/guideNav.tsx";

const mdxComponents = {XeerpeDemo, pre: CodeBlock}

export const generateStaticParams = async () => {
    const dir = path.join(process.cwd(), 'src/app/guide/mdx')
    const files = await fs.readdir(dir)
    return files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => ({slug: file.replace(/\.mdx$/, '')}))
}

const GuidePage = async ({params,}: {
    params: Promise<{ slug: string }>
}) => {
    const {slug} = await params
    const filePath = path.join(process.cwd(), 'src/app/guide/mdx', `${slug}.mdx`)

    let source: string
    try {
        source = await fs.readFile(filePath, 'utf-8')
    } catch {
        notFound()
    }

    const {content} = await compileMDX({
        source,
        components: mdxComponents,
        options: {
            parseFrontmatter: true, mdxOptions: {
                rehypePlugins: [
                    rehypeSlug,
                    [rehypePrettyCode, {theme: 'github-dark', keepBackground: true}],
                ],
            }
        },
    })

    const toc = getToc(source)


    return (
        <div className={classes.guideLayout}>
            <div className={classes.guideArticle}>
                <article>{content}</article>
                <GuideNav />
            </div>
            <TableOfContents items={toc}/>
        </div>
    )
}

export default GuidePage