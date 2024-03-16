//Saiba mais sobre Expressões Regulares: 
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions
//https://alexandrecardoso.dev.br/como-somar-um-array-de-numeros-com-o-javascript/
// O gets() receberá um número de conta como entrada:
const numeroConta = '189899';

// Verifica se o número de conta consiste em exatamente 6 dígitos usando uma expressão regular:
if (/^\d{6}$/.test(numeroConta)) {
  const numArrayTest = numeroConta.split('').map(num=>parseInt(num));
  //teste com map
  const numArray = numeroConta.split('').map(Number);
  console.log(numArray);
  // Calcula a soma dos dígitos no número de conta
  const sum = numArray.reduce((a, b) => a + b, 0);
  console.log(sum);
  // Verifica se o primeiro dígito é maior que zero e a soma dos dígitos é menor ou igual a 30
  if (numArray[0] > 0 && sum <= 30) {
  // TODO: Se a condição acima for verdadeira, imprima a mensagem esperada:
    console.log('Numero de conta valido.');
  } else {
  // TODO: Verifique se o numArray[0] referente ao primeiro dígito é igual a zero :
    if (numArray[0]==0 ) {
      // TODO: Se o primeiro dígito for igual a zero, imprima a mensagem esperada:
      console.log('Numero de conta invalido: O primeiro digito deve ser maior que zero.');
    } else {
      console.log('Numero de conta invalido: A soma dos digitos e maior que 30.');
    }
  }
}