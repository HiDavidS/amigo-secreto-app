// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables

let amigosArray = [];

//Funciones

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo").value;
    
    if (inputAmigo.trim() === "") {
        alert("Por favor, inserte un nombre.")
        return;
    }
    amigosArray.push(inputAmigo);
    
    limpiarCampo();
}

function limpiarCampo(){
    document.getElementById("amigo").value = '';
}


