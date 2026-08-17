'use client'

import classes from './sidebar.module.css'
import {useSidebar} from "@/src/context/sidebarContext.tsx";

const SidebarToggle = () => {
    const { toggle } = useSidebar();
    return (
        <button onClick={toggle} aria-label="open/close menu" className={classes.sidebarToggle}>
            ☰
        </button>
    );

}

export default SidebarToggle;