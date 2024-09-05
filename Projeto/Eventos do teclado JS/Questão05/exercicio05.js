
document.getElementById('tecla').addEventListener('keydown', function(event){
    let tecla = event.key
    document.getElementById('mostrarTecla'). textContent = 'Tecla Pressionada é:  $(tecla) '
});