import Link from "next/link";
import classes from "./navbar.module.css";
import Image from "next/image";
import xeerpeLogo from "@assets/xeerpeLogo.png"

const Navbar = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <Image className={classes.headerLogo} src={xeerpeLogo} alt="xeerpe logo" />
            </Link>
            <nav aria-label="xeerpe main navigation" className={classes.navbar}>
                <Link href="/doc">Doc</Link>
                <Link href="/changelog">Changelog</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>

    );
}

export default Navbar