let valor = document.getElementById('valor');
let count = 0;

document.getElementById('btnIncrementar').addEventListener('click', () => {
    count++;
    valor.textContent = count;
});

document.getElementById('btnDecrementar').addEventListener('click', () => {
    count--;
    valor.textContent = count;
});

document.getElementById('btnResetar').addEventListener('click', () => {
    count = 0;
    valor.textContent = count;
});