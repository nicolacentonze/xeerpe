
import {sidebarElements} from "@/src/data/sidebarItems.ts";
import classes from './sidebar.module.css'
import SidebarLink from "@cmp/core/sidebar/sidebarLink.tsx";
import {SidebarGroup, SidebarItem} from "@/src/models/sidebar.ts";
import {Builder} from "xeerpe";

export default function Sidebar() {

    const sidebarBackground = new Builder()
        .linearGradient({from: 'transparent', to: '#0a0f0a', angle: '135deg'})
        .blur({type: 'backdrop', amount: '60px'})
        .toStyle()

    return (
        <aside className={classes.sidebar} style={sidebarBackground}>
            <nav aria-label="Doc sidebar">
                {sidebarElements.map((group: SidebarGroup) => (
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