//Jugando con el teclado

/* Tenemos que crear una página vacía. Al pulsar la tecla 'r' su color
 de fondo cambia a rojo y al pulsar la 'm' a morado. Vamos a escuchar 
 un evento de teclado (directamente sobre el elemento document). En 
 el evento podemos consultar la propiedad key para saber qué tecla se ha pulsado. */

'use strict';

// elemento de HTML
const contenido = document.querySelector('.contenido');
var tecla;
// handler
const changeColor = (event) => {
    tecla = event.keyCode; //keyCode Devuelve el código de tecla pulsada para eventos keydown y keyup

    if (tecla == 114) { //código ASCII de la letra r
        contenido.classList.add('fondo-rojo');
        contenido.classList.remove('fondo-morado');
    } else if (tecla == 109) { //código ASCII de la letra m
        contenido.classList.add('fondo-morado');
        contenido.classList.remove('fondo-rojo');
    }
}
// listener sobre el elemento, con tipo de evento y handle
contenido.addEventListener('keypress', changeColor);


