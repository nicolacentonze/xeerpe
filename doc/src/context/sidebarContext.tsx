'use client'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { SidebarContextValue } from '@/src/models/sidebar.ts'
import { ChildrenProps } from '@/src/models/layout.ts'

const SidebarContext = createContext<SidebarContextValue | null>(null)

export const MOBILE_QUERY = '(max-width: 768px)'

export const SidebarProvider = ({ children }: ChildrenProps) => {
    const [open, setOpen] = useState(false)
    const toggleRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (!open) return
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key !== 'Escape') return
            setOpen(false)
            toggleRef.current?.focus()
        }
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [open])

    useEffect(() => {
        const media = window.matchMedia(MOBILE_QUERY)
        const onChange = () => {
            if (!media.matches) setOpen(false)
        }
        media.addEventListener('change', onChange)
        return () => media.removeEventListener('change', onChange)
    }, [])

    return (
        <SidebarContext.Provider value={{ open, toggleRef, toggle: () => setOpen((o) => !o), close: () => setOpen(false) }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => {
    const ctx = useContext(SidebarContext)
    if (!ctx) throw new Error('useSidebar must be used within SidebarProvider')
    return ctx
}
