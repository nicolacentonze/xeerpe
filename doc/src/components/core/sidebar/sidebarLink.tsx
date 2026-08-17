'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import styles from './sidebar.module.css'
import {useSidebar} from "@/src/context/sidebarContext.tsx";

const SidebarLink = ({href, children, external}: {
    href: string
    children: React.ReactNode
    external?: boolean
}) => {
    const { close } = useSidebar();
    const pathname = usePathname()
    const isActive = !external && pathname === href

    return (
        <Link
            href={href}
            className={isActive ? styles.active : undefined}
            aria-current={isActive ? 'page' : undefined}
            onClick={close}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
            {children}
        </Link>
    )
}

export default SidebarLink