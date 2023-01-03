import type {RecursiveKeyValuePair} from "tailwindcss/types/config";

export function invertColors(colors: RecursiveKeyValuePair) {
    return Object.entries(colors)
        .reduce((inverted, [colorName, colorValue]) => {
            if (isMetaColor(colorName)) {
                // Ignoring meta colors
                return {...inverted, [colorName]: colorValue}
            } else if (colorName === 'black' || colorName === 'white') {
                const invertedValue = (colorName === "black") ? colors.white : colors.black
                return {...inverted, [colorName]: invertedValue}
            } else if (isString(colorValue)) {
                // Ignoring unknown single color values
                return {...inverted, [colorName]: colorValue}
            } else {
                return {...inverted, [colorName]: invertScaledColor(colorValue)}
            }
        }, {} as RecursiveKeyValuePair)
}

function invertScaledColor(color: RecursiveKeyValuePair) {
    const oldWeights = Object.keys(color);
    const invertedWeights = [...oldWeights].reverse()
    return invertedWeights.reduce((newScale, newWeight, index) => {
        const oldWeight = oldWeights[index]
        const oldValue = color[oldWeight]
        return {...newScale, [newWeight]: oldValue}
    }, {} as RecursiveKeyValuePair)
}

function isString(val: string | RecursiveKeyValuePair): val is string {
    return typeof val === "string"
}

function isMetaColor(val: string | RecursiveKeyValuePair): val is 'inherit' | 'current' | 'transparent' {
    return isString(val) && val === 'inherit' || val === 'current' || val === 'transparent'
}
