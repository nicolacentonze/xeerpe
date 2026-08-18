import {Builder} from 'xeerpe'

const xeerpeBackground = new Builder()
    .linearGradient({from: '#34d399', to: '#172554', angle: '135deg'})
    .toStyle()

export const demos = {
    'linear-basic': () => xeerpeBackground,
} satisfies Record<string, () => React.CSSProperties>
