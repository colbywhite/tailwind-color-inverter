const fs = require('fs')
const path = require('path')

const distDir = path.join(__dirname, 'dist');
fs.rm(distDir, {recursive: true, force: true}, (err) => {
    if (err !== null) {
        console.warn(err)
    }
    console.log('Cleaned', distDir);
})
