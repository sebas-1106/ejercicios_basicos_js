/*Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante. */
function swap(array, index1, index2) {
  if ( index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
    return array;
    
  }

  
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  return array;
}
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
const result = swap(mainCharacters, 2, 5);
console.log(result); // Imprime: [ 'Luke', 'Leia', 'Rey', 'Chewbacca', 'Han Solo', 'Anakin', 'Obi-Wan' ]