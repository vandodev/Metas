const express = require('express');
const app = express();

app.get('/', async (req, res) => {
   return res.json({
       name:"Hello World"
   })
});

app.listen(3000, () =>{
    console.log("Servidor iniciado com sucesso na porta 3000 http://localhost:3000")
});