

const url = "http://localhost:3000/filmes";


function lerDados() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);

            Object.keys(obj).forEach(key => {
                var conteudo = "Nome: " + obj[key].titulo + "<br>" + ' pagina: ' + obj[key].pagina;
                console.log(obj[key].titulo);
                document.getElementById("dados").innerHTML = conteudo;
            });



        };

    };
    xhttp.open("GET", "filmes.json", true);
    xhttp.send();
}


function enviaDados() {
    var titulo = document.getElementById('titulo').value;
    var pagina = document.getElementById('pagina').value;
    const novoPost =
    {

        "titulo": titulo,
        "pagina": pagina,

    }


    console.log(titulo, pagina);
    console.log(novoPost);


    let xhttp = new XMLHttpRequest()
    xhttp.open("POST", url, true)
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(JSON.stringify(novoPost))

    xhttp.onload = function () {
        console.log(this.responseText)
    }

    return xhttp.responseText
}