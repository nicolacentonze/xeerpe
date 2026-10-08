import Image from "next/image";
import xeerpeLogo from '@assets/xeerpeLogo.png'
import classes from "./page.module.css"
import LinkButton from "@cmp/buttons/linkButton.tsx";
import ChainSteps from "@cmp/home/chainSteps/chainSteps.tsx";
import PresetBento from "@cmp/home/presetBento/presetBento.tsx";
import UiExamples from "@cmp/home/uiExamples/uiExamples.tsx";
import {Builder, presetNames} from "xeerpe";
import Link from "next/link";
import {serializeJsonLd, websiteJsonLd} from "@/src/config/site.ts";

const Page = () => {

    const textStyle = new Builder().linearGradient({from: '#57B241' ,to: '#CAD328'}).toTextStyle()

    const ctaBackground = new Builder()
        .radialGradient({ from: 'rgba(94,184,71,0.45)', to: 'transparent', position: '15% 0%', colorToPosition: '60%' })
        .radialGradient({ from: 'rgba(202,211,40,0.25)', to: 'transparent', position: '90% 100%', colorToPosition: '55%' })
        .linearGradient({ from: '#0b1a12', to: '#030604', angle: '160deg' })
        .grid({ color: '#5EB847', size: '32px', opacity: 0.12 })
        .grain({ intensity: 1.2 })
        .toStyle()

    return (
        <main id="main-content" tabIndex={-1}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: serializeJsonLd(websiteJsonLd())}}
            />
            <div className={classes.mainContainer}>

                <section className={classes.hero}>
                    <div className={classes.xeerpeLogoContainer}>
                        <Image className={classes.xeerpeLogo} src={xeerpeLogo} alt="xeerpe logo" priority/>
                    </div>
                    <h1 style={textStyle} className={classes.mainDescription}>
                        Chain properties and effects to customize your backgrounds and text
                    </h1>
                    <p className={classes.lead}>
                        Gradients, patterns, effects and animations, all in one chain.
                        <br/>
                        Zero dependencies, any framework.
                    </p>
                    <div className={classes.actions}>
                        <LinkButton href={'/guide'}>Get Started →</LinkButton>
                    </div>
                </section>

                <section className={classes.section}>
                    <header className={classes.sectionHeader}>
                        <h2 className={classes.sectionTitle}>Build your own, one method at a time</h2>
                        <p className={classes.sectionText}>
                            Describe the background the way you would say it out loud. Each method adds a layer,
                            and toStyle() turns the whole chain into a style object.
                        </p>
                    </header>
                    <ChainSteps />
                </section>

                <section className={classes.section}>
                    <header className={classes.sectionHeader}>
                        <h2 className={classes.sectionTitle}>Metals, gems, skies and more</h2>
                        <p className={classes.sectionText}>
                            Every preset is a regular Builder, so you can keep chaining effects, patterns and
                            animations on top.
                        </p>

                    </header>
                    <PresetBento />
                    <div className={classes.sectionFooter}>
                        <LinkButton href={'/guide/presets-examples'}>See all {Object.keys(presetNames).length} presets →</LinkButton>
                    </div>
                </section>

                <section className={classes.section}>
                    <header className={classes.sectionHeader}>
                        <h2 className={classes.sectionTitle}>Real interface pieces, no presets needed</h2>
                        <p className={classes.sectionText}>
                            Text, glass panels, buttons, avatars and loaders. The same chain works on any element.
                        </p>
                    </header>
                    <UiExamples />
                </section>

                <section className={classes.cta} style={ctaBackground}>
                    <h2 style={textStyle} className={classes.ctaTitle}>Craft. Chain. Done.</h2>
                    <p className={classes.ctaText}>
                        Zero dependencies, any framework.
                        <br/>
                        Install it and write your first chain in a minute.
                    </p>
                    <div className={classes.actions}>
                        <LinkButton href={'/guide/usage'} >Read the usage guide</LinkButton>
                    </div>
                    <div className={classes.joke}>
                        Yes, this background is made with xeerpe too :)
                    </div>
                </section>

                <div className={classes.creditsSection}>
                    Released under the MIT License – © 2026{' '}
                    <Link
                        href="https://www.linkedin.com/in/nicolacentonze"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.creditsLink}
                        aria-label="Nicola Centonze"
                    >
                        Nicola Centonze
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Page
