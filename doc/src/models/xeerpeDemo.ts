import {demos} from "@/src/data/examples.ts";

export interface XeerpeDemoOptions {
    example: keyof typeof demos
    width?: string
    height?: string
    borderRadius?: string
}