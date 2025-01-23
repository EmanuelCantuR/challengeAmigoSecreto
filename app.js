// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value; //Variable para guardar temporalmente el contenido del input

    amigo !== '' ? procesarNuevoAmigo(amigo) : alert("Por favor, inserte un nombre");  //Función ternaria para validar la entrada
}

const procesarNuevoAmigo = (amigo) => {
    amigos.push(amigo); // Agrega el amigo a la lista
    document.getElementById('amigo').value = ''; // Limpia el input
    listarAmigos(); // Actualiza la lista desordenada en el HTML

};

function listarAmigos() {
    const ul = document.querySelector('#listaAmigos'); // Selecciona la lista
    ul.innerHTML = ''; // Limpia el contenido actual de la lista

    amigos.forEach((amigo) => {
        const li = document.createElement('li'); // Crea un nuevo elemento <li>
        li.textContent = amigo; // Asigna el nombre del amigo al <li>
        ul.appendChild(li); // Agrega el <li> a la lista desordenada (ul)
    });
}

