var contador = 0;

function funcao() {
    contador ++
    console.log("Função foi chamada" + contador + "vezes")

    if (contador === 10) {
        clearInterval(intervalo);
        console.log("parada apos 10 chamadas");
    }
}