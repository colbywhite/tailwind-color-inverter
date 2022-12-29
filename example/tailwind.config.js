/** @type {import('tailwindcss').Config} */
module.exports = {
    content: {
        relative: true,
        files: [
            './index.html'
        ],
    },
    theme: {
        extend: {},
    },
    plugins:[require('../')]
}
