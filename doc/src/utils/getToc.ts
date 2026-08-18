import {unified} from 'unified'
import remarkParse from 'remark-parse'
import {visit} from 'unist-util-visit'
import GithubSlugger from 'github-slugger'
import {TocItem} from "@/src/models/tocItem.ts";


const getToc = (source: string): TocItem[] => {
    const tree = unified().use(remarkParse).parse(source)
    const slugger = new GithubSlugger()

    const toc: TocItem[] = []
    visit(tree, 'heading', (node: any) => {
        if (node.depth !== 2) return
        const text = node.children
            .filter((c: any) => c.type === 'text')
            .map((c: any) => c.value)
            .join('')
        toc.push({id: slugger.slug(text), text, depth: node.depth})
    })

    return toc
}

export default getToc