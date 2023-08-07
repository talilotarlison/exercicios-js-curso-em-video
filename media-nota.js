
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes

class Notas {
  constructor(nota1, nota2, nota3) {
    this.nota1 = nota1;
    this.nota2 = nota2;
    .nota3  = nota3;
  }
  media(){
   var media =  (this.nota1+this.nota2+this.nota3)/3;
   return media;
  }
  soma(){
    var soma = this.nota1 + this.nota2+ this.nota3;
    return soma;
  }
}

const notaAluno1 = new Notas(5,6,7);

console.log(notaAluno1.soma()); // teste soma
console.log(notaAluno1.media()); // teste media





console.log("Calculo com sucesso!");
