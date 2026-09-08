import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'Who builds xeerpe, why it exists and how to contribute.',
    alternates: { canonical: '/about' },
}

const Doc = () => {
    return (
        <>
            About Page
        </>
    )
}

export default Doc