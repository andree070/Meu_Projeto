//Função que verifica se a tecla Shift está pressionada 

function verificaEnter (event) { 
    if (event.shiftKey) { // Verifica se a tecla shift está pressionada
        console.log("Tecla Shift" + event.key + " foi pressionada");
    } else {
        console.log("tecla"+ event.key + " foi pressionada sem shift ");
    }
 }