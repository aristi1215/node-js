const {readFile} = require('node:fs/promises')

Promise.all([
    readFile('hola.txt', 'utf-8'),
    readFile('hola2.txt', 'utf-8')
]).then(([text, secondeText]) => {
    console.log(text, secondeText)
})