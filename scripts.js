const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/formulario.html');
});


app.post('/processar', (req, res) => {
    const { nome, email } = req.body; 
    res.send(`Dados recebidos: Nome: ${nome}, Email: ${email}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
