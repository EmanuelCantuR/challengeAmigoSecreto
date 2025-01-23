// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value; //Variable para guardar temporalmente el contenido del input

    amigo !== '' ? procesarNuevoAmigo(amigo) : alert("Por favor, inserte un nombre");  //Función ternaria para validar la entrada
}

const procesarNuevoAmigo = (amigo) => {
    amigos.push(amigo); // Agrega el amigo a la lista
    document.getElementById('amigo').value = ''; // Limpia el input

};
