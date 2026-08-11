import {Metadata} from "next";
import Sidebar from "@cmp/core/sidebar/sidebar.tsx";

export const metadata: Metadata = {
    title: 'xeerpe',
    description: 'xeerpe - Doc',
}

export default function DocLayout({children}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <Sidebar/>
            {children}
        </>
    );
}