[![npm version badge](https://img.shields.io/npm/v/@colbyw/tailwind-color-inverter/latest)](https://www.npmjs.com/package/@colbyw/tailwind-color-inverter)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@colbyw/tailwind-color-inverter/latest)](https://bundlephobia.com/package/@colbyw/tailwind-color-inverter)
[![last commit](https://img.shields.io/github/last-commit/colbywhite/tailwind-color-inverter/main)](https://github.com/colbywhite/tailwind-color-inverter)
![license](https://img.shields.io/npm/l/@colbyw/tailwind-color-inverter)
![keywords](https://img.shields.io/github/package-json/keywords/colbywhite/tailwind-color-inverter)

# @colbyw/tailwind-color-inverter

A utility to invert [TailwindCSS] colors to auto generate colors for a dark theme.

It is intended to be used in conjunction with [Tailwind] and the [theme-swapper plugin].

# Usage

```javascript
// file: tailwind.config.js
const themeSwapper = require('tailwindcss-theme-swapper')
const defaultColors = require('tailwindcss/colors')
const invertColors = require('@colbyw/tailwind-color-inverter')

const lightTheme = {
    colors: {...defaultColors},
}

const darkTheme = {
    colors: invertColors(lightTheme.colors),
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    plugins: [
        themeSwapper({
            themes: [
                {
                    name: 'base',
                    selectors: [':root'],
                    theme: lightTheme
                },
                {
                    name: 'dark',
                    selectors: ['.dark'],
                    theme: darkTheme,
                }
            ]
        })
    ]
}
```


#### Inspiration

This was inspired by [nightwind], a Tailwind plugin that was never migrated to Tailwind v3.

[nightwind]: https://nightwindcss.com/
[Tailwind]: https://tailwindcss.com/
[TailwindCSS]: https://tailwindcss.com/
[theme-swapper plugin]: https://github.com/crswll/tailwindcss-theme-swapper
