let numero2 = [3,5,6,4,7,8,4,9]
let numeroBuscado = 4
let quantidadeVezesNumeroBuscado = 0

numero2.forEach(Elemento => {
    if(numeroBuscado == Elemento){
        quantidadeVezesNumeroBuscado ++
    }
});

console.log(quantidadeVezesNumeroBuscado)