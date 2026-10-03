import {ReactNode} from "react";

export interface PropProps {
    name: string
    type: string | string[]
    defaultValue?: string
    required?: boolean
    children?: ReactNode
}