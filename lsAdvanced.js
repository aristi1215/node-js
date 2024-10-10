const fs = require('node:fs/promises')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'


fs.readdir(folder).then(files => {
    files.forEach(file => {
        fs.readFile(file, 'utf-8').then(text => console.log(pc.blue(text))).catch(e => console.error(e))
    })
}).catch(err => {
    if(err){
        console.log('ha habido un error', err)
    }
})