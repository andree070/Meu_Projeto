function soma (numero1, numero2){
var resultado = numero1, numero2

if(resultado % 2 ===0){
    return resultado + " par";
} else {
    return resultado +" impar";
}
}

console.log(soma(8));
console.log(soma(3));