const elementos = document.querySelectorAll('*');

elementos.forEach(elementos => {
    elementos.addEventListener('keydown', function(event) {
        console.log('Tecla pressionada: ', event.key)
    })
})