const http = require('node:http')

const server = http.createServer((req, res) => {
    res.end('Hola')
})

server.listen(3000, () => {
    console.log('hola mundo')
})