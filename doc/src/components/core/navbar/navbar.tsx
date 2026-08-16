import Link from "next/link";
import classes from "./navbar.module.css";
import Image from "next/image";
import xeerpeTextLogo from "@assets/xeerpeTextLogo.png";
import { Builder } from "xeerpe";
import SidebarToggle from "@cmp/core/sidebar/sidebarToggle.tsx";

const Navbar = () => {
    const navbarBackground = new Builder()
        .linearGradient({ from: "transparent", to: "#0a0f0a", angle: "135deg" })
        .blur({ type: "backdrop", amount: "60px" })
        .toStyle();

    return (
        <header className={classes.header} style={navbarBackground}>
            <div className={classes.left}>
                <SidebarToggle />
                <Link href="/" className={classes.headerLogo}>
                    <Image
                        className={classes.headerLogoImage}
                        src={xeerpeTextLogo}
                        alt="xeerpe logo"
                    />
                </Link>
            </div>

            <nav aria-label="xeerpe main navigation" className={classes.navbar}>
                <Link href="/guide">Guide</Link>
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
};

export default Navbar;