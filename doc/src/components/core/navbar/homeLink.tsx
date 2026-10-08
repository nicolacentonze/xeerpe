'use client'

import Link from "next/link";
import {useSidebar} from "@/src/context/sidebarContext.tsx";

const HomeLink = ({className, children}: { className?: string, children: React.ReactNode }) => {
    const {close} = useSidebar();
    return (
        <Link href="/" className={className} onClick={close}>
            {children}
        </Link>
    )
}

export default HomeLink
