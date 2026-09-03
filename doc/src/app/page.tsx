import Image from "next/image";
import xeerpeLogo from '@assets/xeerpeLogo.png'
import classes from "./page.module.css"
import Examples from "@cmp/examples/examples.tsx";
import LinkButton from "@cmp/buttons/linkButton.tsx";
import {Builder} from "xeerpe";

const Page = () => {

    const textStyle = new Builder().linearGradient({from: '#57B241' ,to: '#CAD328'}).toTextStyle()

    return (
        <main>
            <div className={classes.mainContainer}>
                <div className={classes.logoAndMainSection}>
                    <div className={classes.xeerpeLogoContainer}>
                        <Image className={classes.xeerpeLogo} src={xeerpeLogo} alt="xeerpe logo"/>
                    </div>
                    <div className={classes.mainSection}>
                        <h1 style={textStyle} className={classes.mainDescription}>Chain properties and effects to customize your backgrounds and text</h1>
                    </div>
                    <div className={classes.mainSection}>
                    <LinkButton href={'/guide'}>Get Started →</LinkButton>
                    </div>
                    <Examples />
                    
                </div>



                <div className={classes.creditsSection}>
                    Released under the MIT License – © 2026 Nicola Centonze
                </div>
            </div>

        </main>
    )
}

export default Page