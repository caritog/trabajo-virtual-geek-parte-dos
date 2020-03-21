/* Dame ipsum
Crear una página HTML con un párrafo con lorem ipsum. 
Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum. */


'use strict';

// elemento de HTML
const parrafo = document.querySelector('.dame-ipsum');
const parrafoDos = document.querySelector('.lorem-ipsum');

// handler
const showAlert = () => {
    parrafoDos.innerHTML='<h1> Eum recusandae deserunt praesentium ipsum quae facilis!</h1>';
}

// listener sobre el elemento, con tipo de evento y handler
parrafo.addEventListener('mouseover', showAlert);
