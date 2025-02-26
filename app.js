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
    llenarArray();
}

function limpiarCampo() {
    document.getElementById("amigo").value = '';
}

function llenarArray () {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    

    for (let i = 0; i < amigosArray.length; i++) {
        let nuevoLi = document.createElement("li");
        nuevoLi.innerHTML = amigosArray[i];
        lista.appendChild(nuevoLi);
    }
}

function sorteoAmigo (){
    if (amigosArray.length > 0) {
        let amigoRandom =  Math.floor(Math.random() * amigosArray.length);
    }
}

