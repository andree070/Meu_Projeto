const keydow = document.getElementById('keydow');
keydow.addEventListener('keydown', (event) => { 
    if (event.key === 'Enter') {
        alert('Você pressionou a tecla Enter');
    }
});
