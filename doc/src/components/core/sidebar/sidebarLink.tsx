'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './sidebar.module.css'
import { useSidebar } from '@/src/context/sidebarContext.tsx'
import { SidebarLinkProps } from '@/src/models/sidebar.ts'

const SidebarLink = ({ href, children, external }: SidebarLinkProps) => {
    const { close } = useSidebar()
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
            {external && <span className="sr-only"> (opens in a new tab)</span>}
        </Link>
    )
}

export default SidebarLink
