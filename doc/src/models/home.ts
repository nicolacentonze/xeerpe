import {ReactNode} from "react";
import {Builder} from "xeerpe";

export interface ChainStep {
    title: string
    description: string
    label: string
    code: string
    apply: (builder: Builder) => Builder
}

export interface Chain {
    id: string
    name: string
    steps: ChainStep[]
}

export interface BentoItem {
    name: string
    category: string
    size: 'large' | 'wide' | 'small'
}

export interface UiExample {
    title: string
    description: string
    code: string
    preview: ReactNode
    previewStyle?: Record<string, string>
}
