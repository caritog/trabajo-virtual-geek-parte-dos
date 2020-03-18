//Ticket con IVA


/* Crea una función que reciba como parámetro un número, que representará un precio, 
y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. 
Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola 
"Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
Para probar que funciona, ejecuta la función recogiendo el resultado en una 
variable e imprímela en la consola para comprobarlo. */

'use strict';

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

