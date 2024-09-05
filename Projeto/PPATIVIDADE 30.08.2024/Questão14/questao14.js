let paragrafo = document.getElementById('tecla')

document.addEventListener('keypress', function(event){
    let tecla = event.key
    let conteudoParagrafo = paragrafo.textContent
    paragrafo.textContent = conteudoParagrafo + tecla
})