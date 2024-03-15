const aluno = {
  nome : "Talilo",
  matricula : 7383849,
  curso : "ADS"
  
}

console.log(aluno)


const {nome, matricula, curso} = aluno

console.log(nome)
console.log(matricula)
console.log(curso)

var resu = Object.values(aluno)
var resu2 = Object.keys(aluno)

console.log(resu2)
