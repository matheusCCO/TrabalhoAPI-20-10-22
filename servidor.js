const express = require('express');
const server = express();
const filmes = require('./filmes.json');

server.get('/filmes', (req, res) => {
    return res.json(filmes);
});

server.listen(3000, () => {
    console.log('servidor iniciado');
});
