'use client'

import {useState} from 'react'
import classes from './presetGallery.module.css'
import {PresetTileProps} from "@/src/models/presetGallery.ts";

const PresetTile = ({name, style}: PresetTileProps) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(`new Preset('${name}').toStyle()`)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <button
            type="button"
            className={classes.tile}
            onClick={handleCopy}
            aria-label={`Copy the code of the ${name} preset`}
        >
            <span className={classes.preview} style={style} />
            <span className={classes.caption}>
                <code className={classes.name}>{name}</code>
                <span className={classes.action}>{copied ? '✓ Copied' : 'Copy'}</span>
            </span>
        </button>
    )
}

export default PresetTile
