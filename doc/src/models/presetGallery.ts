import {PresetCategory} from "xeerpe";

export interface PresetGalleryProps {
    category: PresetCategory
}

export interface PresetTileProps {
    name: string
    style: Record<string, string>
}
