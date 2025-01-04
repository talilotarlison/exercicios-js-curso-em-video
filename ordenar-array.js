let arr = [15,7,2,1,3,8,12,5];

console.log("Array  Original: ", arr);
// ordenar array de valores
let aux = null;

for (var i = 0; i < arr.length; i++) {
  for (var j = i +1 ; j < arr.length; j++) {
      if(arr[i] > arr[j] ){
           aux = arr[i];
           arr[i] = arr[j];
           arr[j] = aux;
      }
  }
}


console.log("Array Ordenado: ", arr);

// busca linear

function buscaLinear(arr, dadoBusca){
     for (var i = 0; i < arr.length; i++) {
          if(arr[i]==dadoBusca){
            return `Encontrado: ${arr[i]}`;
          }
  }
  return 'Não encontrado'; 
}

console.log(buscaLinear(arr,15));
