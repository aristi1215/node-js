const http = require('node:http')
const {findAvailablePort} = require('./free-port')

const server = http.createServer((req, res) => {
    console.log('Request received')
    res.end('Hola mundo')
})



console.log(process.env)