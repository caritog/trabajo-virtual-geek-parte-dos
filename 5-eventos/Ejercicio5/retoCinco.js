'use strict';

// elemento de HTML
const isra = document.querySelector('.teacher--isra');
const barlos = document.querySelector('.teacher--tuerto');
const nasi = document.querySelector('.teacher--nasi');

// handler
function profes(event) {
    // Recogemos el elemento sobre el que pusimos el listener
    // y lo asignamos a una constante
    const profesores = event.currentTarget;
    if (profesores.classList.contains('teacher--selected')) {
        profesores.classList.remove('teacher--selected');
        profesores.querySelector('.favorite').innerHTML = 'Añadir';
    } else {
        profesores.classList.add('teacher--selected');
        profesores.querySelector('.favorite').innerHTML = 'Quitar';
    }

}
// listener sobre el elemento, con tipo de evento y handler
isra.addEventListener('click', profes);
barlos.addEventListener('click', profes);
nasi.addEventListener('click', profes);
