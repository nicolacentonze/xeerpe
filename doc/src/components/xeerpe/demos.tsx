import {demos} from "@/src/data/examples.ts";
import {XeerpeDemoOptions} from "@/src/models/xeerpeDemo.ts";

export const XeerpeDemo = ({
                               example,
                               width = '300px',
                               height = '100px',
                               borderRadius = '16px',
                           }: XeerpeDemoOptions) => {
    return <div className="xeerpe-demo-preview" style={{
        ...demos[example](),
        width,
        height,
        borderRadius
    }}/>
}
