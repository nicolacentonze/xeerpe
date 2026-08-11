import {demos} from "@/src/data/gradients.ts";

export const XeerpeDemo = ({example, width = '200px', height = '100px'}: { example: keyof typeof demos, width: string, height: string }) => {
    return <div className="xeerpe-demo-preview"  style={{
        ...demos[example](),
        width,
        height,
    }}/>
}