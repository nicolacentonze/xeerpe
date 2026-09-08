import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Changelog',
    description: 'Every xeerpe release, what changed and when.',
    alternates: { canonical: '/changelog' },
}

const Doc = () => {
    return (
        <>
            Changelog Page
        </>
    )
}

export default Doc