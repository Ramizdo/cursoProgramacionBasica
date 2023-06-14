let ataqueJugador;

function iniciarJuego() {
    let btnMokepon = document.getElementById('btn-mokepon');
    btnMokepon.addEventListener('click', seleccionarMokepon);

    let btnTierra = document.getElementById('btn-tierra');
    let btnFuego = document.getElementById('btn-fuego');
    let btnAgua = document.getElementById('btn-agua');

    btnTierra.addEventListener('click', atacar);
    btnFuego.addEventListener('click', atacar);
    btnAgua.addEventListener('click', atacar);

}

function seleccionarMokepon() {
    let inputhipodoge = document.getElementById('hipodoge'); // Esto es una manera de hacerlo

    let spanNombreMokeponJugador = document.getElementById('nombre-mokepon-jugador');

    if (inputhipodoge.checked) {
        spanNombreMokeponJugador.innerHTML = 'Hipodoge';
    } else if (capipepo.checked) { // o esta es la otra manera, buscando por el id directamente
        spanNombreMokeponJugador.innerHTML = 'Capipepo';
    } else if (ratigueya.checked) {
        spanNombreMokeponJugador.innerHTML = 'Ratigueya';
    } else if (langostelvis.checked) {
        spanNombreMokeponJugador.innerHTML = 'Langostelvis';
    } else if (tucapalma.checked) {
        spanNombreMokeponJugador.innerHTML = 'Tucapalma';
    } else if (pydos.checked) {
        spanNombreMokeponJugador.innerHTML = 'Pydos';
    } else {
        alert("DEBES SELECCIONAR UN MOKEPON")
    }
    seleccionarMokeponRival()
}

function seleccionarMokeponRival() {

    let numAleatorio = aleatorio(1, 6);
    let spanNombreMokeponRival = document.getElementById('nombre-mokepon-rival');

    if (numAleatorio == 1) {
        spanNombreMokeponRival.innerHTML = 'Hipodoge';
    } else if (numAleatorio == 2) {
        spanNombreMokeponRival.innerHTML = 'Capipepo';
    } else if (numAleatorio == 3) {
        spanNombreMokeponRival.innerHTML = 'Ratigueya';
    } else if (numAleatorio == 4) {
        spanNombreMokeponRival.innerHTML = 'Langostelvis';
    } else if (numAleatorio == 5) {
        spanNombreMokeponRival.innerHTML = 'Tucapalma';
    } else if (numAleatorio == 6) {
        spanNombreMokeponRival.innerHTML = 'Pydos';
    }
}

function aleatorio(min, max) {
    let numAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    return numAleatorio;
}

function atacar() {

}

window.addEventListener('load', iniciarJuego);