import {Metadata} from "next";
import Sidebar from "@cmp/core/sidebar/sidebar.tsx";
import classes from "./guide.module.css"

export const metadata: Metadata = {
    title: 'xeerpe',
    description: 'xeerpe - Doc',
}

export default function DocLayout({children}: {
    children: React.ReactNode;
}) {

    return (
        <div className={classes.guideContainer}>
            <Sidebar/>
            <div className={classes.guideContents}>
                {children}
            </div>
        </div>
    )
}