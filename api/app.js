const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.listen(3000, () =>{
    console.log("Servidor iniciado com sucesso na porta 3000 http://localhost:3000")
});