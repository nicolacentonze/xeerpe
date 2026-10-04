import { colors } from 'xeerpe'
import classes from './colorPalette.module.css'

const ColorPalette = () => {
    return (
        <div className={classes.palette}>
            {Object.entries(colors).map(([name, hex]) => (
                <div key={name} className={classes.swatch}>
                    <span className={classes.color} style={{ background: hex }} />
                    <code className={classes.name}>{name}</code>
                    <span className={classes.hex}>{hex}</span>
                </div>
            ))}
        </div>
    )
}

export default ColorPalette