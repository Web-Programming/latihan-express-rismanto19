// app.js
// const http = require('http');
const express = require('express');
const app = express();
const port = 3000;
// route get
// app.get('/', (req, res) => {
//     res.send('hello, get request!');

// });
// middleware untuk parsing body request
app.use(express.json());
// route post
app.post('/submit', (req, res) => {
    const {name} = req.body;
    res.send(`hello, ${name}!`);

});

app.listen(port, () => {
    console.log('Server running at http://localhost:3000/');
});

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!\n');
// });
app.use(express.static('public'))
app.get('/text', (req, res)=> {
    res.send('ini adalah respon text');

});

app.get('/html', (req, res)=> {
    res.send('<h1>ini adalah respon html</h1>');

});

app.get('/json', (req, res)=> {
    res.json({message:'ini adalah respon json'});

});

