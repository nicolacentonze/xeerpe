import {Preset, presetCategories} from 'xeerpe'
import classes from './presetGallery.module.css'
import PresetTile from './presetTile.tsx'
import {PresetGalleryProps} from "@/src/models/presetGallery.ts";

const PresetGallery = ({category}: PresetGalleryProps) => {
    const names = presetCategories[category] ?? []

    return (
        <div className={classes.gallery}>
            {names.map((name) => (
                <PresetTile key={name} name={name} style={new Preset(name).toStyle()} />
            ))}
        </div>
    )
}

export default PresetGallery
