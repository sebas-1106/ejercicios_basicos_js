/* Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

Puedes usar este array para probar tu función: */
const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  function contarRepeticiones(array) {
    const contador = {};

    array.forEach(palabra => {
        // Si la palabra ya existe en el contador, incrementamos su valor
        if (contador[palabra]) {
            contador[palabra]++;
        } else {
            // Si no existe, la inicializamos en 1
            contador[palabra] = 1;
        }
    });

    return contador;
}
const resultado = contarRepeticiones(words);
console.log(resultado);
