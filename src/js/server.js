const http = require('http')
const fs = require('node:fs')
const port = 3000 
const ip = 'localhost'

const server = http.createServer((req, res) => { 
    console.log('Recebendo uma request!', req.url) 

    res.statusCode = 200
    if(req.url == '/')  return res.end(fs.readFileSync('./index.html'))
    if(fs.existsSync(`.${req.url}`)) return res.end(fs.readFileSync(`.${req.url}`)) 

    res.statusCode = 404
    return res.end(`A página '${req.url}' não exite!`)
})

server.listen(port, ip, () => { 
    console.log(`Servidor rodando em http://${ip}:${port}\nPara derrubar o servidor: ctrl + c`)
})