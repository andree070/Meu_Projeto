const campo = document.getElementById("campo");

campo .addEventListener('keydown', function(event){
    if(event.key === "Backspace") {
        event.preventDefault();
    }
})