const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=> {
    console.log(req.url, req.method)
    res.setHeader('Content-Type', 'text/html')
    // res.write('<head><link rel="stylesheet" href= "#"></head>')
    // res.write('<p>Hello from server :)</p>')
    // res.write('<h1>Hello from server in h1 :)</h1>')
    // res.end()
    fs.readFile('./views/index.html', (err, data) => {
        if(err) {
            console.log(err)
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
})