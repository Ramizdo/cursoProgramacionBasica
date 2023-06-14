let ataqueJugador;

function iniciarJuego() {
    let btnMokepon = document.getElementById('btn-mokepon');
    btnMokepon.addEventListener('click', seleccionarMokepon);

    let btnTierra = document.getElementById('btn-planta');
    btnTierra.addEventListener('click', ataquePlanta);

    let btnFuego = document.getElementById('btn-fuego');
    btnFuego.addEventListener('click', ataqueFuego);

    let btnAgua = document.getElementById('btn-agua');
    btnAgua.addEventListener('click', ataqueAgua);

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
    mokeponRival()
}

function mokeponRival() {

    let mokeponAleatorio = aleatorio(1, 6);
    let spanNombreMokeponRival = document.getElementById('nombre-mokepon-rival');

    if (mokeponAleatorio == 1) {
        spanNombreMokeponRival.innerHTML = 'Hipodoge';
    } else if (mokeponAleatorio == 2) {
        spanNombreMokeponRival.innerHTML = 'Capipepo';
    } else if (mokeponAleatorio == 3) {
        spanNombreMokeponRival.innerHTML = 'Ratigueya';
    } else if (mokeponAleatorio == 4) {
        spanNombreMokeponRival.innerHTML = 'Langostelvis';
    } else if (mokeponAleatorio == 5) {
        spanNombreMokeponRival.innerHTML = 'Tucapalma';
    } else if (mokeponAleatorio == 6) {
        spanNombreMokeponRival.innerHTML = 'Pydos'
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function ataquePlanta() {
    ataqueJugador = document.getElementById('ataque-jugador');
    ataqueJugador.innerHTML = '🌿';

    ataqueRival();
}

function ataqueFuego() {
    ataqueJugador = document.getElementById('ataque-jugador');
    ataqueJugador.innerHTML = '🔥';

    ataqueRival();
}

function ataqueAgua() {
    ataqueJugador = document.getElementById('ataque-jugador');
    ataqueJugador.innerHTML = '💧'

    ataqueRival();
}

function ataqueRival() {
    let ataqueAleatorio = aleatorio(1, 3);
    let spanAtaqueRival = document.getElementById('ataque-rival');

    if (ataqueAleatorio == 1) {
        spanAtaqueRival.innerHTML = '🌿';
    } else if (ataqueAleatorio == 2) {
        spanAtaqueRival.innerHTML = '🔥';
    } else if (ataqueAleatorio == 3) {
        spanAtaqueRival.innerHTML = '💧';
    }
}

window.addEventListener('load', iniciarJuego);