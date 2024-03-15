//https://editor.p5js.org/

var carteira = false;

carteira == true? console.log("pode dirigir"):console.log("não pode diridir");

// função dirigir com arraw

function motorista(){
  var nome = "Mario";
  var idade = 19;
  var carteira = false;
  dados = [nome, idade, carteira]
  return dados
  
}

console.log(motorista());


function dirigir(){
  var dados = motorista();
  console.log( `Caro senhor ${dados[0]}, sua idade é ${dados[1]} logo voce ${dados[2] == true? "pode dirigir":"não pode diridir"}`);

  
}

dirigir()


// funcao dirigir com obejeto

function motorista(){

  dados = {
      nome : "Mario",
      idade : 19,
     carteira : false
    
  }
  return dados
  
}

console.log(motorista());


function dirigir(){
  var dados = motorista();
  console.log( `Caro senhor ${dados.nome}, sua idade é ${dados.idade} logo voce ${dados.carteira == true? "pode dirigir":"não pode diridir"}`);

  
}

dirigir()
