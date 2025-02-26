// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables

let listaAmigos = [];

//Funciones

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    
    if (nombreAmigo.trim() === "") {
        alert("Por favor, inserte un nombre.")
        return;
    }
    listaAmigos.push(nombreAmigo);

    limpiarCampo();
    actualizarLista();
    
}

function limpiarCampo() {
    document.getElementById("amigo").value = '';
}

function actualizarLista () {
    let lista = document.getElementById("listaAmigos");
    lista.textContent = "";
    

    for (let i = 0; i < listaAmigos.length; i++) {
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = listaAmigos[i];
        lista.appendChild(nuevoLi);
    }
    
}

function sortearAmigo (){
    if (listaAmigos.length > 0) {
        let amigoRandom =  Math.floor(Math.random() * listaAmigos.length);
        let amigoSeleccionado = listaAmigos[amigoRandom];
        document.getElementById("resultado").textContent = `El amigo sorteado es: ${amigoSeleccionado}`;
    }
}

