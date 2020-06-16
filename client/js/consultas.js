buscaEstados();

async function buscaEstados() {
    try {
        const xmlHttp = new XMLHttpRequest();
        await xmlHttp.open("GET", 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome', false);
        xmlHttp.send(null);
        let response = JSON.parse(xmlHttp.responseText);

        let estados = document.getElementById("estados");
        if (estados) {
            for (index in response) {
                estados.options[estados.options.length] = new Option(response[index]['nome'], response[index]['sigla']);
            }
        }
    } catch (err) {
        alert('Erro estados');
    }
}

async function buscarCidadesUF() {
    let uf = document.getElementById("estados").value;

    try {
        const xmlHttp = new XMLHttpRequest();
        await xmlHttp.open("GET", `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`, false);
        xmlHttp.send(null);
        let response = JSON.parse(xmlHttp.responseText);

        var cidade = document.getElementById("cidade");
        cidade.options = [];
        for (index in response) {
            cidade.options[cidade.options.length] = new Option(response[index]['nome'], response[index]['sigla']);
        }

    } catch (err) {
        alert('Erro cidade')
    }
}

async function buscarCasos() {
    try {
        if (document.getElementById("form-consulta").checkValidity()) {
            let criteiro = {
                estado: document.getElementById("estados").value,
                status: document.getElementById("status").value,
            };
            const xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", `http://localhost:3333/api/casos?estado=${criteiro.estado}&status=${criteiro.status}`, false);
            xmlHttp.send(null);
            JSON.parse(xmlHttp.responseText).forEach(caso => {
                adicionarCasoNaTabela(caso);
            });
        } else {

        }
    } catch (err) {
        alert('Erro ao conectar-se com a API');
    }
}

function adicionarCasoNaTabela(caso) {
    let casoTr = montaLinha(caso);
    let tabela = document.querySelector("#tabela-casos");
    tabela.appendChild(casoTr);
}

function montaLinha(caso) {
    let casoTr = document.createElement("tr");
    casoTr.classList.add("caso");
    casoTr.appendChild(montarColuna(caso.estado, "estado"));
    casoTr.appendChild(montarColuna(caso.cidade, "cidade"));
    casoTr.appendChild(montarColuna(caso.tipo, "tipo"));
    casoTr.appendChild(montarColuna(caso.quantidade, "quantidade"));
    return casoTr;
}

function montarColuna(dado, classe) {
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}