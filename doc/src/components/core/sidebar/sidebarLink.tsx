'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import styles from './sidebar.module.css'
import {useSidebar} from "@/src/context/sidebarContext.tsx";

export default function SidebarLink({href, children}: {
    href: string
    children: React.ReactNode
}) {
    const { close } = useSidebar();
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link
            href={href}
            className={isActive ? styles.active : undefined}
            aria-current={isActive ? 'page' : undefined}
            onClick={close}
        >
            {children}
        </Link>
    )
}