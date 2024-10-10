const path = require('node:path')

//Barra separadora de carpetas según sistema operativo
console.log(path.sep)


//Siempre unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('content/subfolder/probando.js')
console.log(base) //Probando.js

const nameArchive = path.basename('content/subfolder/probando.js', '.js')
console.log(nameArchive) //Probando

const extension = path.extname('my.super.image.svg')
console.log(extension)

