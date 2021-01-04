const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/celke', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com o BD MongoDB realizado com sucesso!");
}).catch((err) => {
    console.log("Erro: Conexão com o BD MongoDB não realizado com sucesso: " + err);
});


app.get('/metas', async (req, res) => {
   return res.json({
       name:"Hello World"
   })
});

app.listen(3000, () =>{
    console.log("Servidor iniciado com sucesso na porta 3000 http://localhost:3000")
});