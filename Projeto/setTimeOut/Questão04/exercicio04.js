setTimeout(function() {
    console.log("Mensagem aparece uma vez apos 1 segundo:");

    setInterval(function() {
        console.log("Mensagem aparece a cada 4 segundo:");
    }, 4000);
}, 1000);