const fs = require('node:fs');



fs.readdir('.', (err, files) => {
    if(err){
        console.log('Error cargando los ficheros', err)
    }
    files?.forEach(file => {
        console.log(file)
    });
})