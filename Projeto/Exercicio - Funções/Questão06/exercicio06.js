const numeros = [2, 5, 7, 9, 10];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
const media = soma / numeros.length;
console.log("A média dos elementos é:", media);