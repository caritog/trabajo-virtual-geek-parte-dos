
//event delegation ---> ME FALTA AGREGARLE ÉSTO, PERO NO SÉ COMO COMENZAR 

'use strict';

// elemento de HTML
const button = document.querySelector('.btn');
const section = document.querySelector('.peliculas-listado');
// listado de películas a mostrar en HTML
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
// clases creadas para que se muestren en HTML las películas
const pelicula1 = document.querySelector('.peli1');
const pelicula2 = document.querySelector('.peli2');
const pelicula3 = document.querySelector('.peli3');
const pelicula4 = document.querySelector('.peli4');
const pelicula5 = document.querySelector('.peli5');

// handler
const lista=()=> {

    section.innerHTML = `<ul> 
    <li class="peli1" onclick="primerLi(event)">${inception}</li> 
    <li class="peli2" onclick="segundoLi(event)"> ${theButterFlyEffect} </li> 
    <li class="peli3" onclick="tercerLi(event)">${eternalSunshineOfTheSM}</li> 
    <li class="peli4" onclick="cuartoLi(event)">${blueVelvet}</li> 
    <li class="peli5" onclick="quintoLi(event)">${split}</li> 
    </ul>`

}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', lista); // lista en la const de arriba que tiene entre corchetes la lista ul

// handler2
const primerLi=(event) => {
    alert(`${inception}`);
}

const segundoLi=(event) => {
    alert(`${theButterFlyEffect}`);
}

const tercerLi=(event) => {
    alert(`${eternalSunshineOfTheSM}`);
}

const cuartoLi=(event) => {
    alert(`${blueVelvet}`);
}

const quintoLi=(event) => {
    alert(`${split}`);
}

// listener sobre el elemento, con tipo de evento y handler2
pelicula1.addEventListener('click', primerLi);
pelicula2.addEventListener('click', segundoLi);
pelicula3.addEventListener('click', tercerLi);
pelicula4.addEventListener('click', cuartoLi);
pelicula5.addEventListener('click', quintoLi);