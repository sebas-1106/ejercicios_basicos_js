/*Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.

Utiliza este array para probar tu función. */
const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  
  function findOldestXMen(xMen) {
    // Utilizamos reduce para encontrar el miembro más antiguo.
    return xMen.reduce((oldest, current) => {
      // Comparamos los años de aparición.
      return current.year < oldest.year ? current : oldest;
    });
  }
  
  // Llamamos a la función y mostramos el resultado.
  const oldestXMen = findOldestXMen(xMen);
  console.log('El miembro más antiguo de los X-Men es:', oldestXMen);
  
            
  
  