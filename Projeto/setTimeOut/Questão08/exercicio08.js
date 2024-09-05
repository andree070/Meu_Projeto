var intervalo = setInterval(function() {
    console.log("Mensagem aparece a cada 4 segundos: ");

}, 4000)

setTimeout(function() {
    clearInterval(intervalo);
    console.log("parar apos 15 segundos: ");
}, 15000);