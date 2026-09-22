import {Builder} from "./builder.ts";
import {xeerpePresets} from "../presets/presets.ts";

export class Preset extends Builder {
    constructor(name: string) {
        super();

        const config = xeerpePresets[name];
        if (!config) {
            throw new Error(`Preset "${name}" not found`);
        }

        config(this);
    }
}