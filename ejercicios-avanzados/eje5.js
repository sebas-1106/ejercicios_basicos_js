
/* Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random() */

function rollDice(numFaces) {
    // Primero, debemos generar un número aleatorio entre 1 y el número de caras
    let random = Math.floor(Math.random() * numFaces) + 1;
    console.log(random);
}
rollDice(7);