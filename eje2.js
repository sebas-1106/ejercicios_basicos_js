/*1. Luke Skywalker cumple años:

Modifica el siguiente código JavaScript para actualizar la edad de Luke Skywalker a 25 años.*/
const jedi ={  nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí...
jedi.edad=25
console.log(jedi);

/*2.2
- Crea tres variables con la siguiente información:
nombre: "Leia"
apellido: "Organa"
edad: 20
- Muestra un mensaje por consola que siga la siguiente estructura:
"Soy Leia Organa, tengo 20 años y soy una princesa de Alderaan."
- Utiliza la concatenación para ello.*/
let nombre="Leia";
let apellido= "Organa";
let edad=20;
console.log(`Soy ", ${nombre,apellido}, tengo ", ${edad}, años y soy una princesa de Alderaan`);

/*2.3
- Obtén el precio total de dos sables de luz: "Shoto de Yoda" y "sable de Darth Vader".

- Imprime el resultado por consola utilizando console.log.
*/
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...
const resultado= sable1.precio+sable2.precio;
console.log("La suma de estos 2 sables es ", resultado);

/*2.4
- Modifica el valor de la variable global precioBaseGlobal a 25.000 créditos.

- Actualiza el precio final (precioFinal) de dos naves ("Ala-X" y "Halcón Milenario") sumando el valor de precioBaseGlobal a su precio base (precioBase).
*/
let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

precioBaseGlobal=25000;

console.log(precioBaseGlobal);
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...
nave1.precioBase+= precioBaseGlobal;
console.log(nave1.precioBase);
nave2.precioBase+= precioBaseGlobal;
console.log(nave2.precioBase)


nave1.precioFinal=85000;
nave2.precioFinal=105000;

console.log("El precio final de la nave Ala-X es: ", nave1.precioFinal, "y el precio de la nave Halcón Milenario es: ", nave2.precioFinal);

