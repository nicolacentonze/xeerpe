'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import styles from './sidebar.module.css'

export default function SidebarLink({href, children}: {
    href: string
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link
            href={href}
            className={isActive ? styles.active : undefined}
            aria-current={isActive ? 'page' : undefined}
        >
            {children}
        </Link>
    )
}