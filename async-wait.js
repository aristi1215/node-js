const {readFile} = require('node:fs/promises')

;(
   async () => {
        const text = await readFile('hola.txt', 'utf-8',);
        console.log(text)
        console.log('cosillas')
        const text2 = await readFile('hola2.txt', 'utf-8',)
        console.log(text2)
        console.log('cosillas')
    }
)()

