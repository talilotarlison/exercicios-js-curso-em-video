//https://www.devmedia.com.br/javascript-length-como-e-quando-utilizar-essa-propriedade/39233
//https://www.freecodecamp.org/portuguese/news/como-usar-a-desestruturacao-de-arrays-e-objetos-em-javascript/


function ePalindromo(palavra){
   let arrayPalavra = []
   for (var i = 0; i < palavra.length; i++) {
     arrayPalavra.push(palavra[i])
   }
   let arrayReversoPalavra = arrayPalavra.slice().reverse();
    validaPalindromo(arrayPalavra, arrayReversoPalavra) 
}


function validaPalindromo(palavra, palavraReversa){
  let validacaoLetras = 0
  let totalLetras = palavra.length
  for (var i = 0; i < palavra.length; i++) {
     if(palavra[i]===palavraReversa[i]){
        validacaoLetras++
     }
  }    
    mostraResultado(validacaoLetras,totalLetras)  
    
}


function mostraResultado(letrasValidas,totalLetras){
      if(letrasValidas==totalLetras){
        console.log("É um polindro!!")
      }else{
         console.log("Não é um polindro!!")
      }
}

ePalindromo('ovo')

