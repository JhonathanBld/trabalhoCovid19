async function cadastrarCaso() {
    let dados = {
        estado: document.getElementById("estados").value,
        cidade: document.getElementById("cidade").value,
        descricao: document.getElementById("descricao").value,
        status: document.getElementById("status").value,
    };

    console.log(dados);


    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:3333/api/casos', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.email + ", " + json.password);
        }
    };
    var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
    xhr.send(data);
}