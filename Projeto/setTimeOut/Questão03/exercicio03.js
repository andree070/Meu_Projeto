var contador = setInterval(function() {
    console.log("Essa mensagem aparece a cada 3 sengundos")
}, 3000);

setTimeout(function() {
    clearInterval(contador);
    console.log("intervalo parado apos 10 segundos")
}, 10000);