// modo incremental
function fibonacci(){
  var termo = 17;
  var resposta;
  var penultimo=0;
  var ultimo=1;
  var numero;

  if(termo<=2)
   numero = termo-1;
  else
   for(var count=3 ; count<=termo ; count++){
    numero = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = numero;
    console.log(numero);
   }

  resposta=numero;
  
//console.log(resposta);

}

fibonacci();


// com recursividade

(function main(){
  console.log('Entre com o numero para sequencia de fibonacci:');
  var entrada = 15;
  console.log('entrada', entrada);
  var fib = fibonacci1(entrada);
  console.log(fib);
})()


 function fibonacci1(n){
   if(n == 0 || n ==1){
     return n;
   }else{
     return (fibonacci1(n-1) + fibonacci1(n-2));
   }
   
 }