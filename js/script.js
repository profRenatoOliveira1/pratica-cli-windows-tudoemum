function Mensagem() {
    let nome = document.getElementById('txtBusca').value;
    let frase = 'Seja bem-vindo ao nosso site, ';

    let mensagem = frase + nome;

    return document.getElementById('txtBusca').value = mensagem;
}

function Limpa() {
    document.getElementById('txtBusca').value = '';
}
setTimeout(Limpa, 3000);


