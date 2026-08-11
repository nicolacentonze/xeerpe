'use client'

import {useRef, useState} from 'react'
import classes from './codeBlock.module.css'

export function CodeBlock(props: React.ComponentProps<'pre'>) {
    const preRef = useRef<HTMLPreElement>(null)
    const [copied, setCopied] = useState(false)

    async function handleCopy() {
        const text = preRef.current?.textContent ?? ''
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <div className={classes.wrapper}>
            <button
                type="button"
                onClick={handleCopy}
                className={classes.copyBtn}
                aria-label={copied ? 'Code copied' : 'Copy code'}
            >
                {copied ? '✓ Copied' : 'Copy'}
            </button>
            <pre ref={preRef} {...props} />
        </div>
    )
}