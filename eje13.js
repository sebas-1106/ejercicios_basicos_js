// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

// Puedes usar este array para probar tu función:
const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

// Función para buscar un nombre en el array
function nameFinder(nameList, value) {
    // Buscar el índice del valor en el array
    const index = nameList.indexOf(value);

    // Comprobar si el valor existe en el array
    if (index !== -1) {
        return { exists: true, position: index };
    } else {
        return { exists: false };
    }
}

// Ejemplo de uso
const searchValue = 'Tony';
const result = nameFinder(names, searchValue);

console.log(result); // Devuelve: { exists: true, position: 2 }

const searchValueNotFound = 'John';
const resultNotFound = nameFinder(names, searchValueNotFound);

console.log(resultNotFound); // Devuelve: { exists: false }