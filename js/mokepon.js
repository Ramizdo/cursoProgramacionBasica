const sectionAtaque = document.getElementById('seleccionar-ataque');
const sectionReiniciar = document.getElementById('section-reiniciar');
const btnMokepon = document.getElementById('btn-mokepon');
const btnTierra = document.getElementById('btn-planta');
const btnFuego = document.getElementById('btn-fuego');
const btnAgua = document.getElementById('btn-agua');
const btnReiniciarJuego = document.getElementById('btn-reiniciar');

const seleccionarEquipo = document.getElementById('seleccionar-mokepon');
const inputBarcelona = document.getElementById('barcelona'); // Esto es una manera de hacerlo
const inputRealMadrid = document.getElementById('realMadrid');
const inputArsenal = document.getElementById('realArsenal');
const spanLogoJugador = document.getElementById('logoJugador');

const spanLogoRival = document.getElementById('logoRival');

const definicionAtaque = document.getElementById('resultadoDelPenal');

const sectionMensajes = document.getElementById('resultadoDelPenal');

const nuevasVidasJugador = document.getElementById('vidas-jugador');
const nuevasVidasRival = document.getElementById('vidas-rival');

const logoBarca = '<img src=./assets/pruebaBarcelona.png>'
const logoMadrid = '<img src=./assets/pruebaMadrid.png>'
const logoArsenal = '<img src=./assets/pruebaArsenal.png>'

let ataqueJugador;
let ataqueRival;
let vidasJugador = 3;
let vidasRival = 3;
let spanNombreEquipo;
let mokeponAleatorio;

class Equipo {
    constructor(nombre, logo, vida) {
        this.nombre = nombre;
        this.logo = logo;
        this.vida = vida;
    }
}

let barcelona = new Equipo('FCBarcelona', './assets/pruebaBarcelona.png', 3);
let realMadrid = new Equipo('Real Madrid', './assets/pruebaMadrid', 3);
let arsenal = new Equipo('Arsenal', './assets/pruebaArsenal.png', 3);


function iniciarJuego() {

    sectionAtaque.style.display = 'none'; // Esto es para que no se vea la seccion de ataque al iniciar el juego
    sectionReiniciar.style.display = 'none';

    btnMokepon.addEventListener('click', seleccionarMokepon);
    btnTierra.addEventListener('click', ataquePlanta);
    btnFuego.addEventListener('click', ataqueFuego);
    btnAgua.addEventListener('click', ataqueAgua);
    btnReiniciarJuego.addEventListener('click', reiniciarJuego);
}

function seleccionarMokepon() {
    seleccionarEquipo.style.display = 'none';
    sectionAtaque.style.display = 'flex';
    // let spanNombreEquipo = document.getElementById('nombre-mokepon-jugador');

    if (inputBarcelona.checked) {
        //spanNombreEquipo.innerHTML = 'FCBarcelona';
        //spanLogoEquipo.innerHTML = '<img src=./assets/pruebaBarcelona.png>';
        spanLogoJugador.innerHTML = logoBarca;
    } else if (inputRealMadrid.checked) { // o esta es la otra manera, buscando por el id directamente
        //spanNombreEquipo.innerHTML = 'Real Madrid';
        spanLogoJugador.innerHTML = logoMadrid;
        //} else if (ratigueya.checked) {
        //  spanNombreMokeponJugador.innerHTML = 'Ratigueya';
        //} else if (langostelvis.checked) {
        //  spanNombreMokeponJugador.innerHTML = 'Langostelvis';
        //} else if (tucapalma.checked) {
        //  spanNombreMokeponJugador.innerHTML = 'Tucapalma';
    } else if (inputArsenal.checked) {
        //spanNombreEquipo.innerHTML = 'Arsenal';
        spanLogoJugador.innerHTML = logoArsenal;
    } else if (inputBarcelona.checked == false
        && inputRealMadrid.checked == false
        && inputArsenal.checked == false) {
        alert("DEBES SELECCIONAR UN EQUIPO");
        location.reload();
    }
    mokeponRival()
}

function mokeponRival() {

    let mokeponAleatorio = aleatorio(1, 3);
    // let spanNombreMokeponRival = document.getElementById('nombre-mokepon-rival');

    if (mokeponAleatorio == 1) {
        //spanNombreMokeponRival.innerHTML = 'FCBarcelona';
        spanLogoRival.innerHTML = logoBarca;
    } else if (mokeponAleatorio == 2) {
        //spanNombreMokeponRival.innerHTML = 'Real Madrid';
        spanLogoRival.innerHTML = logoMadrid;
    } /*else if (mokeponAleatorio == 3) {
        spanNombreMokeponRival.innerHTML = 'Ratigueya';
    } else if (mokeponAleatorio == 4) {
        spanNombreMokeponRival.innerHTML = 'Langostelvis';
    } else if (mokeponAleatorio == 5) {
        spanNombreMokeponRival.innerHTML = 'Tucapalma';
    }*/ else if (mokeponAleatorio == 3) {
        //spanNombreMokeponRival.innerHTML = 'Arsenal'
        spanLogoRival.innerHTML = logoArsenal;
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function ataquePlanta() { // Control z hasta aqui
    ataqueJugador = 'izquierda';
    ataqueAleatorioRival();
}

function ataqueFuego() {
    ataqueJugador = 'centro';
    ataqueAleatorioRival();
}

function ataqueAgua() {
    ataqueJugador = 'derecha'
    ataqueAleatorioRival();
}

function ataqueAleatorioRival() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio == 1) {
        ataqueRival = 'izquierda';
    } else if (ataqueAleatorio == 2) {
        ataqueRival = 'centro';
    } else if (ataqueAleatorio == 3) {
        ataqueRival = 'derecha';
    }
    resultadoDelAtaque();
}

function resultadoDelAtaque() {
    if (ataqueJugador == ataqueRival) {
        crearMensaje("PENAL TAPADO 🧤");
        console.log("0" + ataqueJugador + "vs" + ataqueRival);
    } else {
        console.log("4" + ataqueJugador + "vs" + ataqueRival);
        crearMensaje("GOOOOOOL ⚽️ ");
    }
    contadorVidas();
}

function crearMensaje(resultado) {
    //let sectionMensajes = document.getElementById('section-mensaje');

    /*let mensaje = document.createElement('p');
    mensaje.innerHTML = ('🙍🏻‍♂️ : ' + ataqueJugador + ' vs ' + ataqueRival + ' : 🤖');*/

    //let definicionAtaque = document.createElement('p');
    definicionAtaque.innerHTML = (resultado);

    //sectionMensajes.appendChild(mensaje);
    //sectionMensajes.appendChild(definicionAtaque);
}

function crearMensajeFinal(resultadoFinal) {
    /*let sectionMensajes = document.getElementById('section-mensaje');
    let mensaje = document.createElement('p');
    mensaje.innerHTML = resultadoFinal;
    sectionMensajes.appendChild(mensaje); */

    sectionMensajes.innerHTML = resultadoFinal;
    sectionReiniciar.style.display = 'block';
}

function contadorVidas() {
    if (ataqueJugador == ataqueRival) {
        vidasJugador--;
        if (vidasJugador == 2) {
            nuevasVidasJugador.innerHTML = ('⚽️⚽️❌');
        } else if (vidasJugador == 1) {
            nuevasVidasJugador.innerHTML = ('⚽️❌❌');
        } else if (vidasJugador == 0) {
            nuevasVidasJugador.innerHTML = ('❌❌❌');
            crearMensajeFinal('PERDISTE');
            desactivarBotones();
        }
    } else {
        vidasRival--;
        if (vidasRival == 2) {
            nuevasVidasRival.innerHTML = ('❌⚽️⚽️');
        } else if (vidasRival == 1) {
            nuevasVidasRival.innerHTML = ('❌❌⚽️');
        } else if (vidasRival == 0) {
            nuevasVidasRival.innerHTML = ('❌❌❌');
            crearMensajeFinal('CAMPEON 🏆');
            desactivarBotones();
        }
    } /*else if ((ataqueJugador == '🌿' && ataqueRival == '💧')
        || (ataqueJugador == '🔥' && ataqueRival == '🌿')
        || (ataqueJugador == '💧' && ataqueRival == '🔥')) {*/

    /* vidasRival--;
    if (vidasRival == 2) {
        nuevasVidasRival.innerHTML = ('❤️❤️');
    } else if (vidasRival == 1) {
        nuevasVidasRival.innerHTML = ('❤️');
    } else if (vidasRival == 0) {
        nuevasVidasRival.innerHTML = ('');
        crearMensajeFinal('HAS GANADO LA BATALLA');
        desactivarBotones();
    }

} else {
    vidasJugador--;
    if (vidasJugador == 2) {
        nuevasVidasJugador.innerHTML = ('❤️❤️');
    } else if (vidasJugador == 1) {
        nuevasVidasJugador.innerHTML = ('❤️');
    } else if (vidasJugador == 0) {
        nuevasVidasJugador.innerHTML = ('');
        crearMensajeFinal('TU MOKEPON HA MUERTO');
        desactivarBotones();
    }*/
}

function desactivarBotones() {
    btnTierra.disabled = true;
    btnFuego.disabled = true;
    btnAgua.disabled = true;
}
function reiniciarJuego() {
    location.reload();
}

window.addEventListener('load', iniciarJuego);