'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import classes from './navbar.module.css'

const NavLink = ({href, children}: { href: string, children: React.ReactNode }) => {
    const pathname = usePathname()
    const isActive = pathname === href || pathname.startsWith(`${href}/`)

    return (
        <Link
            href={href}
            className={isActive ? classes.active : undefined}
            aria-current={isActive ? 'page' : undefined}
        >
            {children}
        </Link>
    )
}

export default NavLink
