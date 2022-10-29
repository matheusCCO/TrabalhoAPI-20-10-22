const express = require('express');
const server = express();
const cors = require('cors');

const fs = require("fs");

server.use(express.json());

const filmes = require("./filmes.json");


server.use(cors())

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
    // validar se a possição do Arry é igual ao id
    // validar se o id criado ja existe
    var data = {
        "id": filmes.length + 1,
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


server.delete("/filmes/:id", (req, res)=>{
    //validar uma o id com a possição do arry
    //pois esta excluindo o id + 1

    const id = req.params.id;
    console.log(id);
    
   // filmes.splice(id, 1);

   // fs.writeFile("./filmes.json", JSON.stringify(filmes), err => {

       // if (err) throw err;

       // console.log("Done writing"); 
       // console.log(filmes);

   // });
    res.send("ok")

})


server.put("/filmes/:id", (req, res) =>{
    const id = req.params.id;
    const pagina = {"pagina": req.body.pagina};

    console.log(pagina, id);
})