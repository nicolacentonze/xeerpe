import classes from './dotDivider.module.css'

const DOT = 12
const DASH = 10
const GAP = 6
const STEP = DOT + GAP + DASH + GAP
const COUNT = 5
const WIDTH = STEP * (COUNT - 1) + DOT

const DotDivider = () => (
    <div className={classes.divider} aria-hidden="true">
        <svg viewBox={`0 0 ${WIDTH} ${DOT}`} width={WIDTH} height={DOT} fill="currentColor">
            {Array.from({length: COUNT}, (_, index) => (
                <g key={index}>
                    <rect x={index * STEP} y={0} width={DOT} height={DOT} rx={3} />
                    {index < COUNT - 1 && (
                        <rect x={index * STEP + DOT + GAP} y={DOT / 2 - 1} width={DASH} height={2} rx={1} />
                    )}
                </g>
            ))}
        </svg>
    </div>
)

export default DotDivider
