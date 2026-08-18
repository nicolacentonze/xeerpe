'use client'

import { useEffect, useState } from 'react'
import classes from './tableOfContent.module.css'
import { TocItem } from '@/src/models/tocItem.ts'

const TableOfContents = ({ items }: { items: TocItem[] }) => {
    const [activeId, setActiveId] = useState(items[0]?.id ?? '')

    useEffect(() => {
        const headings = items
            .map(({ id }) => document.getElementById(id))
            .filter((element): element is HTMLElement => element !== null)

        if (!headings.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleHeadings = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top
                    )

                const currentHeading = visibleHeadings[0]

                if (currentHeading) {
                    setActiveId(currentHeading.target.id)
                }
            },
            {
                rootMargin: '-10% 0px -70% 0px',
                threshold: 0,
            }
        )

        headings.forEach((heading) => observer.observe(heading))

        return () => {
            observer.disconnect()
        }
    }, [items])

    useEffect(() => {
        const hash = window.location.hash
        if (!hash) return

        const id = decodeURIComponent(hash.slice(1))
        if (!id) return

        const timeout = setTimeout(() => {
            const element = document.getElementById(id)
            if (!element) return

            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })

            setActiveId(id)
        }, 100)

        return () => clearTimeout(timeout)
    }, [])

    useEffect(() => {
        if (!activeId) return

        const currentHash = window.location.hash.slice(1)
        if (currentHash === activeId) return

        const url =
            `${window.location.pathname}` +
            `${window.location.search}` +
            `#${activeId}`

        window.history.replaceState(null, '', url)
    }, [activeId])

    const handleClick = (id: string) => {
        setActiveId(id)
    }

    return (
        <div className={classes.tocContainer}>
            <div className={classes.tocTitle}>On this page</div>

            <nav aria-label="On this page" className={classes.toc}>
                <ul>
                    {items.map((item) => (
                        <li key={item.id} data-depth={item.depth}>
                            <a
                                href={`#${item.id}`}
                                onClick={() => handleClick(item.id)}
                                className={
                                    item.id === activeId ? classes.active : undefined
                                }
                                aria-current={
                                    item.id === activeId ? 'true' : undefined
                                }
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default TableOfContents