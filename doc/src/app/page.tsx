import Image from "next/image";
import xeerpeLogo from '@assets/xeerpeLogo.png'
import classes from "./page.module.css"

export default function Page() {

    return (
        <main>
            <div className={classes.xeerpeLogoContainer}>
                <Image className={classes.xeerpeLogo} src={xeerpeLogo} alt="xeerpe logo"/>
            </div>
            <div className={classes.mainSection}>
                <h1 className={classes.mainDescription}>Chain properties and effects to style your background.</h1>
            </div>
        </main>
    )
}