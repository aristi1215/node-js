const fs = require('node:fs/promises')

const text = fs.readFile('hola.txt', 'utf-8',).then(text => console.log(text))
console.log('cosillas')