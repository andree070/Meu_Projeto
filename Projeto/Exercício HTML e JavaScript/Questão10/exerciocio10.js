function mostrarCoordenadas(event) {
    const coordenadas = 
    document.getElementById("posicao");
    const x = event.pageX;
    const y = event.pagey;
    coordenadas.textContent = "Posição do mouse X = " + x +",Y = " + y ;
}