import classes from './prop.module.css'
import {PropProps} from "@/src/models/prop.ts";

const Prop = ({ name, type, defaultValue, required, children }: PropProps) => {
    const rawTypes = Array.isArray(type) ? type : [type]
    const types = rawTypes.filter((t): t is string => typeof t === 'string')

    return (
        <div className={classes.prop}>
            <div className={classes.header}>
                <code className={classes.name}>{name}</code>
                {required && <span className={classes.required}>required</span>}
            </div>

            <div className={classes.row}>
                <span className={classes.label}>Type</span>
                <span className={classes.types}>
                    {types.map((t, i) => (
                        <code key={`${i}-${t}`} className={classes.type}>
                            {t}
                        </code>
                    ))}
                </span>
            </div>

            {defaultValue && (
                <div className={classes.row}>
                    <span className={classes.label}>Default</span>
                    <code className={classes.type}>{defaultValue}</code>
                </div>
            )}

            {children && <div className={classes.body}>{children}</div>}
        </div>
    )
}

export default Prop