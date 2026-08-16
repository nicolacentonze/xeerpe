'use client'

import classes from './sidebar.module.css'

export default function SidebarToggle() {
    const toggle = () => {
        document.querySelector('[data-sidebar]')?.classList.toggle('collapsed')
    }
    return (
        <button onClick={toggle} aria-label="open/close menu" className={classes.sidebarToggle}>
            ☰
        </button>
    )
}