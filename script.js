/* =================================
   CAMBIO DE PANTALLAS
================================= */

function cambiarPantalla(idActual, idNueva) {

    const actual = document.getElementById(idActual);
    const nueva = document.getElementById(idNueva);

    actual.classList.remove("activa");

    setTimeout(() => {
        nueva.classList.add("activa");
    }, 300);
}


/* =================================
   ABRIR CARTA
================================= */

function abrirCarta() {

    cambiarPantalla("inicio", "sobre-pantalla");

}


/* =================================
   ABRIR SOBRE
================================= */

function abrirSobre() {

    const sobre = document.getElementById("sobre");

    if (sobre.classList.contains("abierto")) {
        return;
    }

    sobre.classList.add("abierto");

    document.querySelector(".texto-sobre").textContent =
        "Tu carta está esperando... ❤️";

    setTimeout(() => {

        cambiarPantalla(
            "sobre-pantalla",
            "carta-pantalla"
        );

    }, 1600);

}


/* =================================
   MOSTRAR RECUERDOS
================================= */

function mostrarRecuerdos() {

    cambiarPantalla(
        "carta-pantalla",
        "recuerdos-pantalla"
    );

}


/* =================================
   MOSTRAR FINAL
================================= */

function mostrarFinal() {

    cambiarPantalla(
        "recuerdos-pantalla",
        "final-pantalla"
    );

    setTimeout(() => {

        crearCorazones(12);

    }, 800);

}


/* =================================
   LLUVIA DE CORAZONES
================================= */

function lluviaDeCorazones() {

    const respuesta =
        document.getElementById("respuesta");

    respuesta.classList.add("mostrar");

    crearCorazones(80);

}


/* =================================
   CREAR CORAZONES
================================= */

function crearCorazones(cantidad) {

    const container =
        document.getElementById("corazones-container");

    const simbolos = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝",
        "♥"
    ];

    for (let i = 0; i < cantidad; i++) {

        const corazon =
            document.createElement("div");

        corazon.classList.add("corazon-volador");

        corazon.textContent =
            simbolos[
                Math.floor(
                    Math.random() * simbolos.length
                )
            ];

        const tamaño =
            Math.random() * 25 + 15;

        const posicion =
            Math.random() * 100;

        const duracion =
            Math.random() * 4 + 4;

        const retraso =
            Math.random() * 1.5;

        corazon.style.left =
            `${posicion}%`;

        corazon.style.fontSize =
            `${tamaño}px`;

        corazon.style.animationDuration =
            `${duracion}s`;

        corazon.style.animationDelay =
            `${retraso}s`;

        container.appendChild(corazon);

        setTimeout(() => {

            corazon.remove();

        }, (duracion + retraso) * 1000 + 500);

    }

}


/* =================================
   CORAZONES AUTOMÁTICOS
================================= */

setInterval(() => {

    const pantallaFinal =
        document
        .getElementById("final-pantalla");

    if (
        pantallaFinal.classList.contains("activa")
    ) {

        crearCorazones(2);

    }

}, 2500);


/* =================================
   EFECTO DE ESTRELLAS
================================= */

function crearEstrellas() {

    const contenedor =
        document.querySelector(".estrellas");

    if (!contenedor) return;

    for (let i = 0; i < 60; i++) {

        const estrella =
            document.createElement("span");

        estrella.style.position = "absolute";

        estrella.style.width = "2px";
        estrella.style.height = "2px";

        estrella.style.background = "white";

        estrella.style.borderRadius = "50%";

        estrella.style.left =
            Math.random() * 100 + "%";

        estrella.style.top =
            Math.random() * 100 + "%";

        estrella.style.opacity =
            Math.random();

        estrella.style.animation =
            `parpadeo ${Math.random() * 3 + 2}s infinite`;

        contenedor.appendChild(estrella);

    }

}

crearEstrellas();


/* =================================
   ANIMACIÓN DE ESTRELLAS
================================= */

const estiloEstrellas =
document.createElement("style");

estiloEstrellas.innerHTML = `

@keyframes parpadeo {

    0%, 100% {
        opacity: 0.2;
    }

    50% {
        opacity: 1;
    }

}

`;

document.head.appendChild(estiloEstrellas);