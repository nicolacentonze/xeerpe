import {Builder} from 'xeerpe'

export const demos = {

    'linear-basic': () => new Builder()
        .linearGradient({from: '#34d399', to: '#172554'})
        .toStyle(),

    'linear-direction': () => new Builder()
        .linearGradient({from: '#f97316', to: '#7c2d12', direction: 'to top'})
        .toStyle()

} satisfies Record<string, () => React.CSSProperties>
