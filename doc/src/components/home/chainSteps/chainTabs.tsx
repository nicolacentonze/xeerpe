'use client'

import {KeyboardEvent, ReactNode, useRef, useState} from 'react'
import classes from './chainTabs.module.css'

interface ChainTab {
    id: string
    label: string
    panel: ReactNode
}

const ChainTabs = ({tabs}: { tabs: ChainTab[] }) => {
    const [activeId, setActiveId] = useState(tabs[0].id)
    const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
    const activeIndex = tabs.findIndex((tab) => tab.id === activeId)
    const nextId = tabs[(activeIndex + 1) % tabs.length].id

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
        const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
        if (!step) return
        event.preventDefault()
        const next = tabs[(index + step + tabs.length) % tabs.length]
        setActiveId(next.id)
        tabRefs.current[next.id]?.focus()
    }

    return (
        <div className={classes.tabs}>
            <div role="tablist" aria-label="Example chains" className={classes.list}>
                {tabs.map((tab, index) => (
                    <button
                        key={tab.id}
                        ref={(element) => { tabRefs.current[tab.id] = element }}
                        type="button"
                        role="tab"
                        id={`chain-tab-${tab.id}`}
                        aria-selected={tab.id === activeId}
                        aria-controls={`chain-panel-${tab.id}`}
                        data-next={tab.id === nextId && tab.id !== activeId ? 'true' : undefined}
                        tabIndex={tab.id === activeId ? 0 : -1}
                        className={classes.tab}
                        onClick={() => setActiveId(tab.id)}
                        onKeyDown={(event) => handleKeyDown(event, index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {tabs.map((tab) => (
                <div
                    key={tab.id}
                    role="tabpanel"
                    id={`chain-panel-${tab.id}`}
                    aria-labelledby={`chain-tab-${tab.id}`}
                    hidden={tab.id !== activeId}
                >
                    {tab.panel}
                </div>
            ))}
        </div>
    )
}

export default ChainTabs
