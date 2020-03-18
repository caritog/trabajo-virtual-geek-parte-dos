// Calculador de modelo de caja

'use strict';

var box = '';

box = prompt('Por favor ingrese un elemento: ');

if (box === 'border-box'|| box === 'content-box') {
    prompt('Por ')
    
}

function box(booleano, ancho, padding, borde) {

}




var precioSinIva = 0;

precioSinIva = parseInt(prompt('Por favor ingrese un precio: '));

if (precioSinIva > 0) {
    calcular(precioSinIva); //si se cumple la condición, entra a la función
} else {
    console.log('Precio no válido, recuerde que para ser válido el valor debe ser mayor a cero');
}

function calcular(precioSinIva) {
    var conIva = 0, total = 0;
    conIva = precioSinIva * 0.21;
    total = conIva + precioSinIva; 
    console.log('Precio sin IVA: ' + precioSinIva + ', IVA: ' + conIva + ' y Total: ' + total);
}


////////////////////////////

function media(a, b, c, d) {
    const result = a + b + c + d;
    const total = result / 4;

    return result , total;
    
}

console.log( media(3, 2, 6, 5) ); // El resultado es 4

