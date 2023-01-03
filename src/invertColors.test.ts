import defaultColors from 'tailwindcss/colors'
import {invertColors} from "./invertColors";
import {describe, it, expect} from "vitest";

describe('invertColors', () => {
    it('should swap black and white', () => {
        const {black, white} = defaultColors
        const invertedColors = invertColors({black, white})
        expect(invertedColors.black).toEqual('#fff')
        expect(invertedColors.white).toEqual('#000')
    })

    it('should ignore meta color values', () => {
        const {inherit, current, transparent} = defaultColors
        const invertedColors = invertColors({inherit, current, transparent})
        expect(invertedColors.transparent).toEqual('transparent')
        expect(invertedColors.inherit).toEqual('inherit')
        expect(invertedColors.current).toEqual('currentColor')
    })

    it('should ignore unknown unscaled colors', () => {
        const {foo} = invertColors({foo: '#123abc'})
        expect(foo).toEqual('#123abc')
    })

    it('should invert a scaled color', () => {
        const {purple} = defaultColors
        const invertedColors = invertColors({purple})
        const invertedPurple = {
            '900': purple["50"],
            '800': purple["100"],
            '700': purple["200"],
            '600': purple["300"],
            '500': purple["400"],
            '400': purple["500"],
            '300': purple["600"],
            '200': purple["700"],
            '100': purple["800"],
            '50': purple["900"]
        }
        expect(invertedColors.purple).toEqual(invertedPurple)
    })
})
