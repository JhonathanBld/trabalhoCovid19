async function cadastrarCaso() {
    try {
        if (document.getElementById("form-casos").checkValidity()) {
            let dados = {
                estado: document.getElementById("estados").value,
                cidade: document.getElementById("cidade").value,
                descricao: document.getElementById("descricao").value,
                tipo: document.getElementById("tipo").value,
            };
            const xhr = new window.XMLHttpRequest();
            xhr.open('POST', 'http://localhost:3333/api/casos', true)
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.send(JSON.stringify(dados));
            alert('Dados cadastrados com sucesso!');
            document.getElementById("form-casos").reset();
        }
    } catch (err) {
        alert('Ops, ocorreu um erro com a conexão.');
    }
}