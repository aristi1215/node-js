const os = require('node:os')

console.log('Información del sistema operativo:', os.uptime() / 60 / 60);