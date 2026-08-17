'use client'

import {useEffect, useState} from 'react'
import classes from './tableOfContent.module.css'
import {TocItem} from "@/src/models/tocItem.ts";

const TableOfContents = ({items}: { items: TocItem[] }) => {
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((e) => e.isIntersecting)
                if (visible) setActiveId(visible.target.id)
            },
            {rootMargin: '0px 0px -70% 0px'}
        )

        items.forEach(({id}) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [items])

    return (
        <div className={classes.tocContainer}>
            <nav aria-label="On this page" className={classes.toc}>
                <span className={classes.tocTitle}>On this page</span>
                <ul>
                    {items.map((item: TocItem) => (
                        <li key={item.id} data-depth={item.depth}>
                            <a
                                href={`#${item.id}`}
                                className={item.id === activeId ? classes.active : undefined}
                                aria-current={item.id === activeId ? 'true' : undefined}
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