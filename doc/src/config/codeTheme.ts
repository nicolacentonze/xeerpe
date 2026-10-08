import type {ThemeRegistration} from 'shiki'

const KEYWORD = '#f472b6'
const METHOD = '#7fd968'
const STRING = '#f6d58a'
const NUMBER = '#8ab4ff'
const TEXT = '#cccccc'
const COMMENT = '#6b7280'

export const codeTheme: ThemeRegistration = {
    name: 'xeerpe',
    type: 'dark',
    colors: {
        'editor.background': '#00000059',
        'editor.foreground': TEXT,
    },
    tokenColors: [
        {
            scope: [
                'keyword.control',
                'keyword.operator.new',
                'keyword.operator.expression',
                'storage.type',
                'storage.modifier',
            ],
            settings: {foreground: KEYWORD},
        },
        {
            scope: ['entity.name.function', 'support.function', 'meta.function-call entity.name.function'],
            settings: {foreground: METHOD},
        },
        {
            scope: ['string', 'string.quoted', 'punctuation.definition.string'],
            settings: {foreground: STRING},
        },
        {
            scope: ['constant.numeric', 'constant.language'],
            settings: {foreground: NUMBER},
        },
        {
            scope: ['comment', 'punctuation.definition.comment'],
            settings: {foreground: COMMENT},
        },
    ],
}
