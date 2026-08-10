import Link from "next/link";
import classes from "./navbar.module.css";
import Image from "next/image";
import xeerpeLogo from "@assets/xeerpeIconLogo.png"
import {Builder} from "xeerpe";

const Navbar = () => {

    const navbarBackground = new Builder()
        .linearGradient({from: 'transparent', to: '#0a0f0a', angle: '135deg'})
        .blur({type: 'backdrop', amount: '60px'})
        .toStyle()

    return (
        <header className={classes.header} style={navbarBackground}>
            <Link href="/" className={classes.headerLogo}>
                <Image className={classes.headerLogo} src={xeerpeLogo} alt="xeerpe logo"/>
            </Link>
            <nav aria-label="xeerpe main navigation" className={classes.navbar}>
                <Link href="/doc">Doc</Link>
                <Link href="/changelog">Changelog</Link>
                <Link href="/about">About</Link>
                <a
                    href="https://github.com/nicolacentonze/xeerpe"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="xeerpe GitHub Repo"
                >
                    GitHub
                </a>
            </nav>
        </header>

    );
}

export default Navbar