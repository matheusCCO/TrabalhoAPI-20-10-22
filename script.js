

const url = "http://localhost:3000/filmes";

function lerDados() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            console.log(obj)
        };



    };
    xhttp.open("GET", url, true);
    xhttp.send();
}


function enviaDados() {
    const novoPost = {
        "name": "Gourav",
        "age": 13,
        "gender": "Male"
    }

    let xhttp = new XMLHttpRequest()
    xhttp.open("POST", url, true)
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(JSON.stringify(novoPost))

    xhttp.onload = function () {
        console.log(this.responseText)
    }

    return xhttp.responseText
}