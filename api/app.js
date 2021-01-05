const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

require('./models/Metas');
const Meta = mongoose.model('Meta');

const app = express();

app.use(express.json());

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER,Content-Type,Authorization");
    app.use(cors());
    next();
});

mongoose.connect('mongodb://localhost/metas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com o BD MongoDB realizado com sucesso!");
}).catch((err) => {
    console.log("Erro: Conexão com o BD MongoDB não realizado com sucesso: " + err);
});


app.get('/metas', async (req, res) => {

   await Meta.find({}).then((metas) => {
       return res.json({
           error: false,
           metas
       });
   }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum registro econtrado!"
        });
   });
});

app.post('/metas', async (req, res) =>{
    
    await sleep(3000);

    function sleep(ms){
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    };

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

app.listen(8080, () =>{
    console.log("Servidor iniciado com sucesso na porta 3000 http://localhost:8080")
});