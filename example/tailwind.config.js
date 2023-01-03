const themeSwapper = require('tailwindcss-theme-swapper')
const defaultColors = require('./defaultColors')
const invertColors = require('../')

const lightTheme = {
    colors: {...defaultColors},
}

const darkTheme = {
    colors: invertColors(defaultColors),
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: {
        relative: true,
        files: [
            './index.html'
        ]
    },
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
