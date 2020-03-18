'use strict';

// elemento de HTML
const h1 = document.querySelector('.texto');
const input = document.querySelector('.input');
const button = document.querySelector('.btn');
// handler
const showAlert = () => {
    h1.innerHTML='Hola ' + input.value;
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', showAlert);
