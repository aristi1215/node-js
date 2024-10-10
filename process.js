//process


//Recuperar argumentos de entrada
console.log(process.argv)


//Controlar el los procesos con alguna función, debe estar antes de que finalice el proceso o no correra
// process.on('exit', () => {
//     console.log('hola')
// })

//Controlar proceso y salida
// process.exit()



//Current working directory, no es donde esta el archivo, sino desde donde se esta trabajando
console.log(process.cwd())

//process and Venvs
console.log(process.env.JUAN)

