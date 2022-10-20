const restify = require("restify");
const erros = require("restify-errors");

const servidor =restify.createServer({
    nome: 'pokemon',
    version: '1.0.0'
});

servidor.use(restify.plugins.acceptParser(servidor.acceptable));
servidor.use(restify.plugins.queryParser() );
servidor.use(restify.plugins.bodyParser() );

servidor.listen(8001, ()=>{
    console.log("%s executando em %s", servidor.name, servidor.url)
});

servidor.get("/", (req,res)=>{
    res.send("Bem-vindosdfsdf");
});

const knex = require("knex")({
    client : 'mysql',
    connection : {
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'pokemon'
    },
});

servidor.get("/pokemon", (req,res, next)=>{
    
    knex('pokemon').then((dados)=>{
       
        res.send(dados);
    }, next);
});


function adicionaPoke(){
    var nome = document.getElementById("nome").value;
    servidor.post("/pokemon",( req, res, next)=>{
    
        knex('pokemon')
        .insert({nome:nome})
        .then((dados)=>{
            if(!dados){
                return res.send(new erros.BadRequestError('Erro ao inserir o Pokemon'));
            }
            res.send("Pokemon inserido");
        }, next);
    });
}
