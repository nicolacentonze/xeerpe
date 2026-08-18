import {demos} from "@/src/data/gradients.ts";

export const XeerpeDemo = ({example, width = '300px', height = '100px', borderRadius = '16px'}: { example: keyof typeof demos, width: string, height: string, borderRadius: string }) => {
    return <div className="xeerpe-demo-preview"  style={{
        ...demos[example](),
        width,
        height,
        borderRadius
    }}/>
}