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
        ul.appendChild(li); // Agrega el <li> a la lista (ul)
    });
}

const sortearAmigo = () => {
    amigos.length !== 0 ? elegirAmigo() : alert("Primero ingresa al menos el nombre de un amigo");  //Validación para que el arreglo no este vacio
}

function elegirAmigo(){
    let numeroAmigos = amigos.length;  //Obtener el numero de amigos
    console.log(`El número de amigos agregados es ${numeroAmigos}`);

    let indiceAleatorio = Math.floor(Math.random()*numeroAmigos); //obtener un indice aleatorio para elegir el amigo
    console.log(`El indice aleatorio es ${indiceAleatorio}`);
    const ul = document.querySelector('#resultado'); //Seleccionar elemento donde se agregara el amigo elegido
    const li = document.createElement('li');  //Crea un nuevo elemento <li>
    li.textContent = amigos[indiceAleatorio-1];  //Asigna el amigo que se encuentre en el indice dado
    ul.appendChild(li); //agrega el <li> a la lista (ul)
}