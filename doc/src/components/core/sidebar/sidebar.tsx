"use client";

import {sidebarElements} from "@/src/data/sidebarItems.ts";
import classes from './sidebar.module.css'
import SidebarLink from "@cmp/core/sidebar/sidebarLink.tsx";
import {SidebarGroup, SidebarItem} from "@/src/models/sidebar.ts";
import {useSidebar} from "@/src/context/sidebarContext.tsx";
import {usePathname} from "next/navigation";
import {Builder} from "xeerpe";
import {NavbarLink} from "@/src/models/navbar.ts";
import {navbarLinks} from "@/src/data/navbarItems.ts";

const Sidebar = () => {

    const pathname = usePathname();
    const { open } = useSidebar();
    const isGuideRoute = pathname.startsWith("/guide");

    const sidebarBackground = new Builder()
        .linearGradient({from: 'transparent', to: '#0a0f0a', angle: '135deg'})
        .blur({type: 'backdrop', amount: '60px'})
        .toStyle()

    return (
        <aside className={classes.sidebar} style={sidebarBackground} data-guide-route={isGuideRoute} data-open={open}>
            <nav aria-label="Sidebar navigation">
                <ul className={classes.navbarLinksGroup}>
                    {navbarLinks.map((link: NavbarLink) => (
                        <li key={link.href}>
                            <SidebarLink href={link.href} external={link.external}>
                                {link.title}
                            </SidebarLink>
                        </li>
                    ))}
                </ul>

                {isGuideRoute && sidebarElements.map((group: SidebarGroup) => (
                    <div key={group.slug} className={classes.group}>
                        <h3 className={classes.groupTitle}>{group.title}</h3>
                        <ul>
                            {group.items.map((item: SidebarItem) => (
                                <li key={item.slug}>
                                    <SidebarLink href={`/guide/${item.slug}`}>
                                        {item.title}
                                    </SidebarLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar