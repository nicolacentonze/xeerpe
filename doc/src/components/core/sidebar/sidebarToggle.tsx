'use client'

import classes from './sidebar.module.css'
import {useSidebar} from "@/src/context/sidebarContext.tsx";

const SidebarToggle = () => {
    const { open, toggle } = useSidebar();
    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="sidebar"
            className={classes.sidebarToggle}
        >
            ☰
        </button>
    );

}

export default SidebarToggle;