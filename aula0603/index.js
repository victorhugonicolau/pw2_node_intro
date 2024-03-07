const fs = require('fs') // 
const http = require('http') //
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => { // criando o server

    var urlInfo = require('url').parse(req.url, true)// parse = mesma coisa que o c# converte 
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Content-Type','text/html')

    if (!name) {
        fs.readFile('index.html', function (err, data) {
            if (!data) {
                res.writeHead(500, { 'Content-Type':'text/html' })
                res.write('<p>' + err + '</p>')
                return res.end()
            }
            res.writeHead(200, {'Content-Type':'text/html' })
            res.write(data)
            return res.end()
        })
    } else {
        fs.writeFile('arquivo.txt',name, function(err,data){
            res.writeHead(302, {
                location:'/',
            })
                return res.end()
        })
    }

})

server.listen(port, () => {
    console.log('Funcionando na porta: ' + port)
})

// const é uma constante que serve pro programa inteiro