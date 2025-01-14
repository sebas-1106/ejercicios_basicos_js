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
    const index = nameList.indexOf(value);
    let result;
    
    if (index !== -1) {
        result=true;
        console.log("La palabra a buscar se encuentra en el array?")
        console.log(true, "y esta en la posicion ", index)
    } else {
        result=false;
        console.log("La palabra a buscar se encuentra en el array?")
        console.log(result);
        
    }
}
const nameOne = 'Tony';
const result = nameFinder(names, nameOne)

const nameTwo = 'John';
const result2 = nameFinder(names, nameTwo);
