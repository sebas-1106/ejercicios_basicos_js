const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let suma=0;
  for (let index = 0; index < numberList.length; index++) {

    suma += numberList[index];
    
  }
  let result= suma/numberList.length;
  console.log("El resultado de la media es: ", result);
}
average(numbers);