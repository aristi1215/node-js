const fs = require('node:fs')

const text = fs.readFile('hola.txt', 'utf-8', (err, text) => {
    if(err){
        console.log('que hpta error bro', text)
    }else{
        console.log(text)
    }
})

console.log('---> haciendo cosillas mientras bro')