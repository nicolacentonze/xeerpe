import type {Metadata} from 'next'
import LinkButton from "@cmp/buttons/linkButton.tsx";
import classes from './about/about.module.css'

export const metadata: Metadata = {
    title: 'Page not found',
    robots: {index: false, follow: false},
}

const NotFound = () => {
    return (
        <main id="main-content" tabIndex={-1} className={classes.about}>
            <h1>Page not found</h1>
            <p>The page you are looking for doesn&apos;t exist or has been moved.</p>
            <LinkButton href="/guide">Read the guide</LinkButton>
            <LinkButton href="/" variant="secondary">Back to home</LinkButton>
        </main>
    )
}

export default NotFound
