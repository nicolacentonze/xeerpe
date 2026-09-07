import classes from "./guide.module.css"
import React from "react";

const DocLayout = ({children}: { children: React.ReactNode }) => (
    <div className={classes.guideContainer}>
        <div className={classes.guideContents}>
            {children}
        </div>
    </div>
)

export default DocLayout