/* Dame ipsum
Crear una página HTML con un párrafo con lorem ipsum. 
Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum. */


//NO ME DA
'use strict';

// elemento de HTML
const parrafo = document.querySelector('.dame-ipsum');
const parrafoDos = document.querySelector('.lorem-ipsum');
// const button = document.querySelector('.btn');
// handler
const showAlert = () => {
    parrafoDos.innerHTML='<p> Eum recusandae deserunt praesentium ipsum quae facilis!</p>';
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('mouseover', showAlert);
