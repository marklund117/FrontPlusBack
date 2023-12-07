const http = require('http')

const hostname = "127.0.0.1" // this IP refers to localhost
const port = '8001' // I have other things that like to take 8000

const server = http.createServer((req, res) => { // this is a method (of what object?) request and response
    res.statusCode = 200 // status code 200 is 'successful' (404 is also a status code etc.)
    res.setHeader('Content-Type', 'text/plain') // specifying what kind of content will be returned if a request is made
    res.end('Hello World')
})

// that is a whole server right there (but it's not running or listening yet)

server.listen(port, hostname, () => { // start the server
    console.log(`Server listening at http://${hostname}:${port}`) // just for our own utility
})