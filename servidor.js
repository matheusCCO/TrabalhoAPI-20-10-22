const express = require('express');
const server = express();
const cors = require('cors');

const fs = require("fs");

server.use(express.json());

const filmes = require("./filmes.json");

server.use(cors())


const readFile = () => {
    const content = fs.readFileSync('./filmes.json', 'utf-8')
    return JSON.parse(content)
}

const writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./filmes.json', updateFile, 'utf-8')
}


server.listen(3000, () => {
    console.log('servidor iniciado');
});


server.route('/filmes').get((req, res) => res.json({
    filmes
}))

server.post('/filmes', (req, res) => {

    var data = {
        "id": Math.random().toString(32).substr(2, 9),
        "titulo": req.body.titulo,
        "pagina": req.body.pagina
    }
    console.log(data);
    res.send();
    //console.log(data)
    filmes.push(data)
    fs.writeFile("./filmes.json", JSON.stringify(filmes), err => {

        // Checking for errors
        if (err) throw err;

        console.log("Done writing");
    });

    res.json('Saved user')
})


server.delete("/filmes/:id", (req, res) => {


    const id = req.params.id;
    console.log(id);

    filmes.splice(id, 1);

    fs.writeFile("./filmes.json", JSON.stringify(filmes), err => {

        if (err) throw err;

        console.log("Done writing");
        console.log(filmes);

    });
    res.send("ok")

})


server.put("/filmes/:id", (req, res) => {
    const { id } = req.params

    const { titulo, pagina } = req.body

    const leJSON = readFile()
    const selecionaItem = leJSON.findIndex((item) => item.id === id)

    const { id: cId, titulo: cTitulo, pagina: cPagina, } = leJSON[selecionaItem]

    const alteracao = {
        id: cId,
        titulo: titulo ? titulo : cTitulo,
        pagina: pagina ? pagina : cPagina
    }

    leJSON[selecionaItem] = alteracao
    writeFile(leJSON)

    res.send(alteracao)
})