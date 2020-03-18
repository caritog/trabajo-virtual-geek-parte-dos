//Hola click

/* Crear una página HTML con un párrafo en el que ponga Hola y un botón. 
Usando JavaScript, cambiar ese texto por "Mi primer click, ¡ole yo y la 
mujer que me parió!" cuando se pulse el botón.  */

'use strict';
// elemento de HTML
const button = document.querySelector('.mensaje');
const parrafo = document.querySelector('.saludo');
// handler
//const showAlert = () => console.log('Mi primer click, ¡ole yo y la mujer que me parió!');

// tocó crear una función para que se ejecutara el evento
function showAlert(){ 
    parrafo.innerHTML='Mi primer click, ¡ole al fin hice éste punto :D!';
  }
// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', showAlert);