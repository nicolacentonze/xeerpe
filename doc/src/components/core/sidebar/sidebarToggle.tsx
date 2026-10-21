'use client'

import classes from './sidebar.module.css'
import { useSidebar } from '@/src/context/sidebarContext.tsx'

const SidebarToggle = () => {
    const { open, toggle, toggleRef } = useSidebar()
    return (
        <button
            ref={toggleRef}
            type="button"
            onClick={toggle}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="sidebar"
            className={classes.sidebarToggle}
        >
            <span aria-hidden="true">☰</span>
        </button>
    )
}

export default SidebarToggle
