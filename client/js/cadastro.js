buscaEstados();

async function cadastrarCaso()  {

}

async function buscaEstados() {
    try {
        var xmlHttp = new XMLHttpRequest();
        await xmlHttp.open("GET", 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome', false);
        xmlHttp.send(null);
        let response = JSON.parse(xmlHttp.responseText);

        var estados = document.getElementById("estados");
        for (index in response) {
            estados.options[estados.options.length] = new Option(response[index]['nome'], response[index]['sigla']);
        }

    } catch (err) {
        alert('Erro')
    }
}

async function buscarCidadesUF() {
    var uf = document.getElementById("estados").value;

    try {
        var xmlHttp = new XMLHttpRequest();
        await xmlHttp.open("GET", `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`, false);
        xmlHttp.send(null);
        let response = JSON.parse(xmlHttp.responseText);

        var cidade = document.getElementById("cidades-by-uf");
        for (index in response) {
            cidade.options[cidade.options.length] = new Option(response[index]['nome'], response[index]['sigla']);
        }

    } catch (err) {
        alert('Erro')
    }
}