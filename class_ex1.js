

let dataAtual = new Date();

class Pessoa {
	nome;
	idade;
	anoDeNascimento;
	
	constructor(nome,idade){
		this.nome = nome;
		this.idade = idade;
		this.anoDeNascimento = dataAtual.getFullYear() - idade;
	}
	
	apresentar(){
		console.log(`Meu nome e ${this.nome} e tenho ${this.idade} anos.`)
	}
}


let Talilo = new Pessoa("Talilo", 29);
let Tarcilio = new Pessoa("Tarcilio", 31);

Talilo.apresentar();
Tarcilio.apresentar();


function maiorIdade(p1,p2){
	if(p1.idade > p2.idade){
		console.log(`${p1.nome} e  mais velha que ${p2.nome}`)
	}else if(p2.idade > p1.idade){
		console.log(`${p2.nome} e  mais velha que ${p1.nome}`)
	} else{
		console.log(`${p2.nome} e  mesma idade de ${p1.nome}`)
	}
	
}

maiorIdade(Talilo, Tarcilio);