let ataqueJugador;
let ataqueRival;
let vidasJugador = 3;
let vidasRival = 3;

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
    ataqueJugador = '🌿';
    ataqueAleatorioRival();
}

function ataqueFuego() {
    ataqueJugador = '🔥';
    ataqueAleatorioRival();
}

function ataqueAgua() {
    ataqueJugador = '💧'
    ataqueAleatorioRival();
}

function ataqueAleatorioRival() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio == 1) {
        ataqueRival = '🌿';
    } else if (ataqueAleatorio == 2) {
        ataqueRival = '🔥';
    } else if (ataqueAleatorio == 3) {
        ataqueRival = '💧';
    }
    resultadoDelAtaque();
}

function resultadoDelAtaque() {
    if (ataqueJugador == ataqueRival) {
        crearMensaje("EMPATE: 🙍🏻‍♂️ 🤖");
    } else if (ataqueJugador == '🌿' && ataqueRival == '💧') {
        crearMensaje("GANADOR: 🙍🏻‍♂️ => 🌿");
    } else if (ataqueJugador == '🔥' && ataqueRival == '🌿') {
        crearMensaje("GANADOR: 🙍🏻‍♂️ => 🔥");
    } else if (ataqueJugador == '💧' && ataqueRival == '🔥') {
        crearMensaje("GANADOR: 🙍🏻‍♂️ => 💧");
    } else {
        crearMensaje("GANADOR: 🤖 => " + ataqueRival);
    }
    contadorVidas();
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('section-mensaje');

    let mensaje = document.createElement('p');
    mensaje.innerHTML = ('🙍🏻‍♂️ : ' + ataqueJugador + ' vs ' + ataqueRival + ' : 🤖');

    let definicionAtaque = document.createElement('p');
    definicionAtaque.innerHTML = (resultado);

    sectionMensajes.appendChild(mensaje);
    sectionMensajes.appendChild(definicionAtaque);
}

function contadorVidas() {
    let nuevasVidasJugador = document.getElementById('vidas-jugador');
    let nuevasVidasRival = document.getElementById('vidas-rival');

    if (ataqueJugador == ataqueRival) {
        vidasJugador = vidasJugador;
        vidasRival = vidasRival;
    } else if ((ataqueJugador == '🌿' && ataqueRival == '💧') || (ataqueJugador == '🔥' && ataqueRival == '🌿') || (ataqueJugador == '💧' && ataqueRival == '🔥')) {

        vidasRival = vidasRival - 1;
        if (vidasRival == 2) {
            nuevasVidasRival.innerHTML = ('❤️❤️');
        } else if (vidasRival == 1) {
            nuevasVidasRival.innerHTML = ('❤️');
        } else if (vidasRival == 0) {
            nuevasVidasRival.innerHTML = ('');
        }
    } else {
        vidasJugador = vidasJugador - 1;
        vidasRival = vidasRival;
        if (vidasJugador == 2) {
            nuevasVidasJugador.innerHTML = ('❤️❤️');
        } else if (vidasJugador == 1) {
            nuevasVidasJugador.innerHTML = ('❤️');
        } else if (vidasJugador == 0) {
            nuevasVidasJugador.innerHTML = ('');
        }
    }
    console.log('Jugador: ' + vidasJugador)
    console.log('Rival: ' + vidasRival)
    //if (ataqueJugador) {
    //nuevasVidasJugador.innerHTML = ('❤️❤️');
    //nuevasVidasRival.innerHTML = ('❤️❤️');
    //}
}

function reiniciar() {

}

window.addEventListener('load', iniciarJuego);