import {compileMDX} from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import {codeTheme} from '@/src/config/codeTheme.ts'
import CodeBlock from '@cmp/codeBlock/codeBlock.tsx'

interface HighlightedCodeProps {
    code: string
    lang?: string
    className?: string
}

const HighlightedCode = async ({code, lang = 'ts', className}: HighlightedCodeProps) => {
    const {content} = await compileMDX({
        source: `\`\`\`\`${lang}\n${code}\n\`\`\`\``,
        components: {pre: CodeBlock},
        options: {
            mdxOptions: {
                rehypePlugins: [[rehypePrettyCode, {theme: codeTheme, keepBackground: true}]],
            },
        },
    })

    return <div className={className}>{content}</div>
}

export default HighlightedCode
