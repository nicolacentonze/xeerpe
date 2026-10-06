import Link from 'next/link'
import {Preset} from 'xeerpe'
import classes from './presetBento.module.css'
import {bentoPresets} from "@/src/data/home.ts";

const PresetBento = () => (
    <div className={classes.bento}>
        {bentoPresets.map((item) => (
            <Link
                key={item.name}
                href="/guide/presets-examples"
                className={`${classes.tile} ${classes[item.size]}`}
                style={new Preset(item.name).toStyle()}
            >
                <span className={classes.label}>
                    <span className={classes.category}>{item.category}</span>
                    <code className={classes.name}>{item.name}</code>
                </span>
            </Link>
        ))}
    </div>
)

export default PresetBento
