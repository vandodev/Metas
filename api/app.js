const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:3000/metas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com mongoDb realizada com sucesso");
}).catch((err) =>{
    console.log("Erro ao conectar com mongoDb " + err);
});


app.get('/metas', async (req, res) => {
   return res.json({
       name:"Hello World"
   })
});

app.listen(3000, () =>{
    console.log("Servidor iniciado com sucesso na porta 3000 http://localhost:3000")
});