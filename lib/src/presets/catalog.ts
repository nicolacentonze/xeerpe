import {motionPresets} from "./library/motion.ts";
import {moodPresets} from "./library/moods.ts";
import {texturePresets} from "./library/textures.ts";
import {luxuryPresets} from "./library/luxury.ts";
import {neutralPresets} from "./library/neutral.ts";
import {pastelPresets} from "./library/pastel.ts";
import {neonPresets} from "./library/neon.ts";
import {spacePresets} from "./library/space.ts";
import {skyPresets} from "./library/sky.ts";
import {naturePresets} from "./library/nature.ts";
import {foodPresets} from "./library/food.ts";
import {gemPresets} from "./library/gems.ts";
import {metalPresets} from "./library/metals.ts";
import {xeerpePresets} from "./presets.ts";

export const presetCategories = {
    metals: Object.keys(metalPresets),
    gems: Object.keys(gemPresets),
    food: Object.keys(foodPresets),
    nature: Object.keys(naturePresets),
    sky: Object.keys(skyPresets),
    space: Object.keys(spacePresets),
    neon: Object.keys(neonPresets),
    pastel: Object.keys(pastelPresets),
    neutral: Object.keys(neutralPresets),
    luxury: Object.keys(luxuryPresets),
    textures: Object.keys(texturePresets),
    moods: Object.keys(moodPresets),
    motion: Object.keys(motionPresets)
}

export type PresetCategory = keyof typeof presetCategories

export const presetNames: string[] = Object.keys(xeerpePresets)
