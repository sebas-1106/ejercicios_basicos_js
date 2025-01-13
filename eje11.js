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