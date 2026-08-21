'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import classes from "./guideNav.module.css";
import {guidePages} from "@/src/data/sidebarItems.ts";

const GuideNav = () => {
    const pathname = usePathname();
    const index = guidePages.findIndex((page) => page.href === pathname);

    if (index === -1) return null;

    const prev = guidePages[index - 1];
    const next = guidePages[index + 1];

    return (
        <nav className={classes.guideNav} aria-label="Guide pagination">
            {prev ? (
                <Link href={prev.href} className={classes.prev}>
                    <span className={classes.eyebrow}>{prev.groupTitle}</span>
                    <span>← {prev.title}</span>
                </Link>
            ) : <span/>}
            {next && (
                <Link href={next.href} className={classes.next}>
                    <span className={classes.eyebrow}>{next.groupTitle}</span>
                    <span>{next.title} →</span>
                </Link>
            )}
        </nav>
    );
}

export default GuideNav;