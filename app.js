let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignartexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
 console.log(numeroSecreto)
function verificarNumero() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroUsuario === numeroSecreto) {
        asignartexto('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignartexto('p', "El número secreto es menor");
        } else {
            asignartexto('p', "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales() {
    asignartexto('h1', "Juego del número secreto");
    asignartexto('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignartexto('p', `Ya se sorteraron todos los números posibles.`)
    } else {    
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego () {
    //Limpiar caja
    limpiarCaja();
    //Nuevos mensajes
    condicionesIniciales();
    //Deshabilitar botón Nuevo Juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true")

}

condicionesIniciales();