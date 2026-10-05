import {PresetConfig} from "../models/index.ts";
import {metalPresets} from "./library/metals.ts";
import {gemPresets} from "./library/gems.ts";
import {foodPresets} from "./library/food.ts";
import {naturePresets} from "./library/nature.ts";
import {skyPresets} from "./library/sky.ts";
import {spacePresets} from "./library/space.ts";
import {neonPresets} from "./library/neon.ts";
import {pastelPresets} from "./library/pastel.ts";
import {neutralPresets} from "./library/neutral.ts";
import {luxuryPresets} from "./library/luxury.ts";
import {texturePresets} from "./library/textures.ts";
import {moodPresets} from "./library/moods.ts";
import {motionPresets} from "./library/motion.ts";


export const xeerpePresets: Record<string, PresetConfig> = {
    ...metalPresets,
    ...gemPresets,
    ...foodPresets,
    ...naturePresets,
    ...skyPresets,
    ...spacePresets,
    ...neonPresets,
    ...pastelPresets,
    ...neutralPresets,
    ...luxuryPresets,
    ...texturePresets,
    ...moodPresets,
    ...motionPresets,
};