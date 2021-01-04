const express = require('express');
const mongoose = require('mongoose');

require('./models/Metas');
const Meta = mongoose.model('Meta');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/metas', {
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

app.post('/metas', async (req, res) =>{
    await Meta.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: Meta não cadastrada!"
        })
    });

    return res.json({
        error: false,
        message: "Meta cadastrada com sucesso!"
    })
});

app.listen(3000, () =>{
    console.log("Servidor iniciado com sucesso na porta 3000 http://localhost:3000")
});