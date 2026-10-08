import classes from "./guide.module.css"
import React from "react";

const DocLayout = ({children}: { children: React.ReactNode }) => (
    <main id="main-content" tabIndex={-1} className={classes.guideContainer}>
        <div className={classes.guideContents}>
            {children}
        </div>
    </main>
)

export default DocLayout