// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema


let listaDeAmigos = [];
let amigo = "";
let estadoDelSorteo = false


function chequearVacio(name) {
    if (name === "") { 
        alert('No se ha ingresado ningún nombre');
        return false;}
    return true;
}

function get_and_restart(id){
    elemento = document.getElementById(id);
    elemento.innerHTML = "";
}

function nuevoSorteo() {
    listaDeAmigos = []
    amigo = ''
    estadoDelSorteo = ''
    get_and_restart('listaAmigos')
    get_and_restart('resultado')
    limpiarCaja()

}


function validarIngreso(name) { 
    if (chequearVacio(name) == true) {
        return true;
    }
    return false;
    }

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = "";
}

function buscarAmigo(lista){
    if (lista.length < 1) {
        alert("No hay amigos entre los cuales sortear");
        return
    }
    let indice = Math.floor(Math.random()*lista.length);
    return (lista[indice]);
}

function sortearAmigo(){
    let resultado = buscarAmigo(listaDeAmigos);
    console.log(resultado);
    if (resultado == '')  {
        return;
    }
    if (estadoDelSorteo != false) {
        alert("Ya hay un sorteo realizado, Presione el botón 'Añadir' para iniciar un nuevo sorteo.");
        return;
    }
    let cartelResultado = document.getElementById('resultado');
    let amigoInvisible = document.createElement('li');
    amigoInvisible.textContent = `Tu amigo invisible es ${resultado}`;
    cartelResultado.appendChild(amigoInvisible);
    estadoDelSorteo = true;

}

function agregarNombre(lista) {
    listaVisible = document.getElementById('listaAmigos')
    listaVisible.innerHTML = '';  
    for (var i = 0; i < lista.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = lista[i];
        listaVisible.appendChild(listItem);
    }

}

function agregarAmigo() {
    if (estadoDelSorteo != false) {
        nuevoSorteo();
        return
    }

    amigo = document.getElementById('amigo').value;
    if (validarIngreso(amigo) == true) {
        console.log(amigo);
        limpiarCaja();
        listaDeAmigos.push(amigo)
        console.log(listaDeAmigos)
        agregarNombre(listaDeAmigos)
    }
    
}