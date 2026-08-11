import {Builder} from 'xeerpe'

const xeerpeBackground = new Builder()
    .linearGradient({from: 'red', to: 'blue', angle: '135deg'})
    .pulse({})
    .toStyle()

export const demos = {
    'linear-basic': () => xeerpeBackground,
} satisfies Record<string, () => React.CSSProperties>
