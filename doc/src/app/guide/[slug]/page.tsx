import fs from 'node:fs/promises'
import path from 'node:path'
import {notFound} from 'next/navigation'
import type { Metadata } from 'next'
import {compileMDX} from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import {XeerpeDemo} from '@cmp/xeerpe/demos.tsx'
import rehypePrettyCode from "rehype-pretty-code";
import {codeTheme} from '@/src/config/codeTheme.ts'
import classes from '../guide.module.css'
import CodeBlock from "@cmp/codeBlock/codeBlock.tsx";
import TableOfContents from "@cmp/tableOfContents/tableOfContents.tsx";
import getToc from "@/src/utils/getToc.ts";
import GuideNav from "@cmp/guideNavPages/guideNav.tsx";
import { getGuidePage } from "@/src/data/sidebarItems.ts";
import { articleJsonLd, serializeJsonLd, socialMetadata } from "@/src/config/site.ts";
import {TocItem} from "@/src/models/tocItem.ts";
import Table from "@cmp/table/table.tsx";
import Prop from "@cmp/prop/prop.tsx";
import ColorPalette from "@cmp/colorPalette/colorPalette.tsx";
import PresetGallery from "@cmp/presetGallery/presetGallery.tsx";

export const dynamicParams = false
const mdxComponents = {XeerpeDemo, pre: CodeBlock}

export const generateMetadata = async (
    {params}: { params: Promise<{ slug: string }> }
): Promise<Metadata> => {
    const {slug} = await params
    const page = getGuidePage(slug)
    if (!page) return {}

    return {
        title: {absolute: `${page.title} — xeerpe CSS background and style guide`},
        description: page.description,
        alternates: { canonical: page.href },
        ...socialMetadata({
            title: `${page.title} — xeerpe CSS background and style guide`,
            description: page.description,
            path: page.href,
            type: 'article',
        }),
        robots: page.draft ? { index: false, follow: true } : undefined,
    }
}

export const generateStaticParams = async () => {
    const dir = path.join(process.cwd(), 'src/app/guide/mdx')
    const files = await fs.readdir(dir)
    return files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => ({slug: file.replace(/\.mdx$/, '')}))
}

const GuidePage = async ({params}: {
    params: Promise<{ slug: string }>
}) => {


    const {slug} = await params
    const filePath = path.join(process.cwd(), 'src/app/guide/mdx', `${slug}.mdx`)
    const page = getGuidePage(slug)
    if (!page) notFound()

    let source: string
    try {
        source = await fs.readFile(filePath, 'utf-8')
    } catch {
        notFound()
    }

    const {content} = await compileMDX({
        source,
        components: {
            ...mdxComponents,
            table: Table,
            ColorPalette,
            PresetGallery,
            Prop
        },
        options: {

            parseFrontmatter: true,
            blockJS: false,
            mdxOptions: {
                rehypePlugins: [
                    rehypeSlug,
                    [rehypePrettyCode, {theme: codeTheme, keepBackground: true}],
                ],
            }
        },
    })

    const toc = getToc(source)

    toc.unshift({id: page.slug, text: page.title, depth: 1} as TocItem)

    const jsonLd = articleJsonLd({
        title: page.title,
        description: page.description,
        path: page.href,
        updatedAt: page.updatedAt,
    })

    return (
        <div className={classes.guideLayout}>
            <div className={classes.guideArticle}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: serializeJsonLd(jsonLd)}}
                />
                <article className="mdx">
                    <h1 id={page.slug}>{page.title}</h1>
                    {content}
                </article>
                <GuideNav />
            </div>
            <TableOfContents items={toc}/>
        </div>
    )
}

export default GuidePage