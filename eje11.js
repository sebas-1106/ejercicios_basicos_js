/* Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

Puedes usar este array para probar tu función: */
const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
    let total=0;
    for (const item of list) {
        if (typeof item === 'number') {
            total+=item


        }
        else{
            total+=item.length;
        } 
    }
    // for(let index = 0; index < list.length; index++)
    //Al poner este for me daba otro resultado
    total= total/list.length
    console.log(total)

}
averageWord(mixedElements);