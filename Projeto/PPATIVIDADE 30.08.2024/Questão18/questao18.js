const mensagens =["bem vindo", "ola","oi","javascript"];

let indice = 0;

function atualizarMensagem(){
    const elementoMensagem = document.getElementById("mensagem");
    elementoMensagem.textContent = mensagens[indice];
    indice = (indice + 1 )% mensagens.length;
}

setInterval(atualizarMensagem, 4000);

