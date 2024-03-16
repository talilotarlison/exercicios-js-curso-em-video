
// Anotações de orientado a obejetos:

/*

- Pilares da programação orientado a obejetos:

Abstração: consiste em extrair entidades do mundo real para dentro do código seguindo a
fio suas responsabilidades.
Encapsulamento: consiste em proteger os atributos de um objeto e garantir que sua alteração 
seja responsabilidade exclusiva do próprio objeto.
Herança: consiste em passar características e responsabilidades de uma entidade para outra,
evitando repetição de código.
Polimorfismo: consiste em permitir que um objeto assuma diferentes formas ou comportamentos
de acordo com o contexto.


*/

// Polimorfismo usa metodos que são iguais mais que funcianam de forma diferente?

/*

Sim, você está correto! O **polimorfismo** é um conceito importante na programação orientada a objetos 
que permite que os objetos de diferentes classes respondam de maneira diferente a uma mesma chamada 
de metodo ¹². Isso significa que o mesmo metodo pode ter diferentes comportamentos dependendo da 
classe do objeto que o recebe ². Por exemplo, se tivermos uma classe `Animal` e duas classes derivadas
`Cachorro` e `Gato`, ambas podem ter um metodo `FazerSom()`. Embora o metodo tenha o mesmo nome,
o som que os cachorros e gatos produzem é diferente. Nesse caso, o metodo `FazerSom()` se comporta
de maneira diferente para cada uma das classes derivadas ¹.

Espero ter respondido sua pergunta. Se você tiver alguma outra pergunta, não hesite em perguntar. 


*/


// poo metedo 1


//Defines that JavaScript code should be executed in "strict mode".
"use strict";

function Pessoa(nome, idade){
  
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.falar = function(){
  return (`Meu nome é ${this.nome} e tenho ${this.idade}`);
}

const Caio = new Pessoa('Caio', 25).falar();

console.log(Caio);


/// poo com açucar sintaxe:


class Funcionario {
  #nome;
  #idade;
  constructor(nome, idade){
  this.#nome = nome;
  this.#idade = idade;
  }
  
  falar(){
     return (`Meu nome é ${this.#nome} e tenho ${this.#idade}.`);
  }
  
  getName(){
    return (this.#nome );
  }
 
  getIdade(){
      return (this.#idade );
  }
}

const Talilo = new Funcionario("Talilo", 27);

console.log(Talilo.falar())
console.log(Talilo.getName())
console.log(Talilo.getIdade())


class Administrador extends Funcionario{
    cpf;
    nivelAcesso;
    constructor(nome, idade, cpf, nivelAcesso) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(nome, idade);
    // Nota: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.cpf = cpf;
    this.nivelAcesso = nivelAcesso;
      
    }
    
   setName(name){
    this.nome = name;
  }
  
   setIdade(idade){
    this.idade = idade;
  }
  
   setNivelAacesso(nivelAcesso){
    this.nivelAcesso = nivelAcesso;
  }
  
  falar(){
     return (`Meu nome é ${this.nome} e tenho ${this.idade} é sou admistrado desse sistema nivel de acesso ${this.nivelAcesso}`);
  }
}


const Joao = new Administrador("joao", 25 , '7456513445' , 10);
Joao.setName('Lucia');
Joao.setNivelAacesso(5);
Joao.setIdade(18);
console.log(Joao);
console.log(Joao.falar());
console.log(Joao.getName());
console.log(Joao.getIdade());


