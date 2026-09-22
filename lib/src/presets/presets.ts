import {PresetConfig} from "../models/index.ts";
import {colors} from "./colors.ts";

export const xeerpePresets: Record<string, PresetConfig> = {
    'sunrise': (builder) => {
        builder
            .linearGradient({
                colors: [
                    { color: '#FFE5D9', position: '0%' },
                    { color: '#FFCDB6', position: '35%' },
                    { color: '#FFB7A3', position: '55%' },
                    { color: '#BFD8F2', position: '100%' }
                ],
                direction: 'to bottom'
            });
    },
    'northern-lights': (builder) => {
        const meshLayers = [
            { position: '15% 15%', from: colors.malachite, to: 'transparent', colorFromPosition: '0px', colorToPosition: '55%' },
            { position: '40% 8%', from: colors.celadon, to: 'transparent', colorFromPosition: '0px', colorToPosition: '55%' },
            { position: '68% 18%', from: colors.verdigris, to: 'transparent', colorFromPosition: '0px', colorToPosition: '50%' },
            { position: '85% 30%', from: colors.malachite, to: 'transparent', colorFromPosition: '0px', colorToPosition: '50%' },
            { position: '45% 50%', from: colors.amethyst, to: 'transparent', colorFromPosition: '0px', colorToPosition: '45%' },
            { position: '20% 65%', from: colors.wisteria, to: 'transparent', colorFromPosition: '0px', colorToPosition: '40%' },
        ];

        builder
            .meshGradient({ background: '#050914', layers: meshLayers })
            .aurora({ duration: '5s' });
    }
};