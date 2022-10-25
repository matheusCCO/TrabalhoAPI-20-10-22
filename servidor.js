/*const express = require('express');
const server = express();
const cors = require('cors');

const fs = require("fs");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const filmes = require("./filmes.json")

server.use(cors())
/*const novoPost = [{
    "id": "8",
    "nome": "Vingadores Guerra Infinita",
    "foto": "https://i.pinimg.com/736x/63/c7/41/63c741c433aa938eadafdbd386e4e676.jpg",
    "descricao": "Em Vingadores: Guerra Infinita, Thanos (Josh Brolin) enfim chega à Terra, disposto a reunir as Joias do Infinito. Para enfrentá-lo, os Vingadores precisam unir forças com os Guardiões da Galáxia, ao mesmo tempo em que lidam com desavenças entre alguns de seus integrantes.",
    "elenco": "Tom Holland,Chris Evans,Scarlett Johansson,Robert Downey Jr"
}];

filmes.push(novoPost);

fs.writeFile("./filmes.json", JSON.stringify(filmes), err => {

    // Checking for errors
    if (err) throw err;

    console.log("Done writing"); // Success
});



server.listen(3000, () => {
    console.log('servidor iniciado');
});


server.route('/filmes').get((req, res) => res.json({
    filmes
}))

server.post('/filmes', (req, res) => {
    var data = req.body;

    console.log(data);


    res.send();
    //console.log(novoPost)
    //filmes.push(novoPost)
    //fs.writeFile("./filmes.json", JSON.stringify(filmes), err => {

    // Checking for errors
    //if (err) throw err;

    // console.log("Done writing"); // Success
    //});

    res.json('Saved user')
})*/

const cors = require('cors');

var express = require('express');
var app = express();
var PORT = 3000;
var bodyParse = require('body-parser');
var ok = bodyParse.urlencoded({ extended: false })
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/filmes', ok, function (req, res) {
    var data = req.body;

    console.log("Name: ", data.name);
    console.log("Age: ", data.age);
    console.log("Gender: ", data.gender);

    res.send();
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});