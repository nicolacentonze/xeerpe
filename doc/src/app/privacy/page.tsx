import fs from 'node:fs/promises'
import path from 'node:path'
import type { Metadata } from 'next'
import { socialMetadata } from '@/src/config/site.ts'
import { compileMDX } from 'next-mdx-remote/rsc'
import classes from './privacy.module.css'

const title = 'Privacy policy of xeerpe, the CSS background and style builder'
const description =
    'What the xeerpe library, its Claude Code skill and the xeerpe.io website do with data: the library and the AI assistant files collect and send nothing.'

export const metadata: Metadata = {
    title: { absolute: title },
    description,
    alternates: { canonical: '/privacy' },
    ...socialMetadata({ title, description, path: '/privacy' }),
}

const PrivacyPage = async () => {
    const source = await fs.readFile(path.join(process.cwd(), 'src/app/privacy/privacy.mdx'), 'utf-8')

    const { content } = await compileMDX({ source })

    return (
        <main id="main-content" tabIndex={-1}>
            <article className={`${classes.privacy} mdx`}>{content}</article>
        </main>
    )
}

export default PrivacyPage
