const jedi ={  nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí...
console.log(jedi[edad=25]);

//2.2
let nombre="Leia";
let apellido= "Organa";
let edad=20;
console.log("Soy ", nombre,apellido, " tengo ", edad, " años ", " y soy una princesa de Alderaan");

//2.3
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...
const resultado= sable1.precio+sable2.precio;
console.log("La suma de estos 2 sables es ", resultado);

//2.4
let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

precioBaseGlobal=25000;

console.log(precioBaseGlobal);
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioBase+= precioBaseGlobal;
console.log(nave1.precioBase);
nave2.precioBase+= precioBaseGlobal;
console.log(nave2.precioBase)

// Tu código para actualizar el precio final de cada nave aquí...

nave1.precioFinal=85000;
nave2.precioFinal=105000;

console.log("El precio final de la nave Ala-X es: ", nave1.precioFinal, "y el precio de la nave Halcón Milenario es: ", nave2.precioFinal);

