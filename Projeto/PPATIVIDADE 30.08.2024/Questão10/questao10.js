let precos = [1000,20,30,40]
let precosDesconto = []

precos.forEach(preco => {
    let precosDescontado = preco * 0.10;
    precosDesconto.push(preco - precosDescontado);
});

console.log(precosDesconto);


//preçosDescontado é o array vazio que sera preenchido com preço com desconto

//forEach vao percorre cada preço do array 'let precos = [1000,20,30,40]'

//para cada preço multiplica 