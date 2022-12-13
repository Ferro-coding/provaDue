const http = require('http');

//const {readFileSync, writeFileSync} = require('fs')

//const hostname = '0.0.0.0';

//const port = 3000;

const server = http.createServer((req, res) => { 
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain');
    res.end('Zeet Node');
    const express = require('express')
    const app = express()

});

/*
server.listen(port, hostname, () => { 
    console.log('Server running at http://${hostname}:${port}/');
});
*/

app.get('/paccita',function (req, res) {
    res.sendFile('login.html', {root: __dirname })
})

//app.listen(3000);