// calcular valor corrida 

// funcao entrada de dados
function Menu(){
  console.log("=============CALCULAR CORRIDA===============");
  console.log("Escolha tipo de combustive?");
  console.log("1. Gasolina.");
  console.log("2. Alcool.");
  console.log("3. Disel.");
  let tipoDeCombustivel = 1;
  console.log("===========================================");
  console.log("Quantos quilometros percorrido?");
  let distanciaEmKm= 27;
  console.log("===========================================");
  console.log("Calculando valor da corrida...");
  console.log("===========================================");
  valorDaCorrida(tipoDeCombustivel,distanciaEmKm);
  console.log("============ FIM DO PROGRAMA ==============");
}(Menu())


//funcao verifica o gasto da corrida
function valorDaCorrida(tipoDeCombustivel,distancia){
  if(tipoDeCombustivel=== 1){
    let valorGasolina = 2.93;
    let kmPorLitro = 10;
    let valorGasto = (distancia/kmPorLitro)* valorGasolina;
     console.log(`Valor gasto em gasolina para a viagem de ${distancia} KM é R$ ${valorGasto.toFixed(2)}.`);
  }else if(tipoDeCombustivel=== 2){
    let valorAlcool = 5.19;
    let kmPorLitro = 10;
    let valorGasto = (distancia/kmPorLitro)* valorAlcool;
     console.log(`Valor gasto em Alcool para a viagem de ${distancia} KM é R$ ${valorGasto.toFixed(2)}.`);
  }else if(tipoDeCombustivel=== 3){
    let valorDisel = 3.80;
    let kmPorLitro = 10;
    let valorGasto = (distancia/kmPorLitro)* valorDisel;
     console.log(`Valor gasto em Disel para a viagem de ${distancia} Km é R$ ${valorGasto.toFixed(2)}.`);
  }else{
    console.log(tipoDeCombustivel,"Opção invalida, tente novamente.");
  }

}

console.log("===========================================");