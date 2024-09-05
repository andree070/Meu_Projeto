function alteraTexto() {
    const paragrafo = document.getElementById("paragrafo");
    if(paragrafo.textContent === "Clique aqui" || paragrafo.textContent === "Clicado Novamente"){
        paragrafo.textContent="Você Clicou Aqui";
    } else {
        paragrafo.textContent = "Clicado Novamente";
    }
    
}