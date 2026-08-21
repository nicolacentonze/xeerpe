import Image from "next/image";
import xeerpeLogo from '@assets/xeerpeLogo.png'
import classes from "./page.module.css"
import Examples from "@cmp/examples/examples.tsx";

const Page = () => {

    return (
        <main>
            <div className={classes.mainContainer}>
                <div className={classes.logoAndMainSection}>
                    <div className={classes.xeerpeLogoContainer}>
                        <Image className={classes.xeerpeLogo} src={xeerpeLogo} alt="xeerpe logo"/>
                    </div>
                    <div className={classes.mainSection}>
                        <h1 className={classes.mainDescription}>Chain properties and effects to style your background.</h1>
                    </div>
                </div>

                <Examples />


                <div className={classes.creditsSection}>
                    Released under the MIT License – © 2026 Nicola Centonze
                </div>
            </div>

        </main>
    )
}

export default Page