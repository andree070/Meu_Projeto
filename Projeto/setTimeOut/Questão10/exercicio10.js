function funcao () {
    console.log("Primeira mensagem")
}

function segundafuncao() {
    console.log("Segunda mensagem apos 8 segundos");
}

funcao();

setTimeout(segundafuncao, 8000);