//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const listaPesoas = [
    { id: "1", nome: "Talilo", idade: "20" },
    { id: "2", nome: "Joao", idade: "20" },
    { id: "3", nome: "marcos", idade: "20" }
  ];
  
  //modelo um
  
  listaPesoas.map(function(item){
    
    var res = `seu nome é ${item.nome}`
    console.log(res);
  }
    
    
    );
  
  //modelo 2
  listaPesoas.map((item)=>{
    
    var res = `sua idade é ${item.idade}`
    console.log(res);
  }
    
    
    );