// https://medium.com/trainingcenter/obtenha-a-extens%C3%A3o-de-um-arquivo-com-javascript-d93582b09805

var url = "www.google.com/carro.png"
var url2 = "www.google.com/carro.jpg"


function getFileExtension2(filename) {
  return filename.split('.').pop();
}

console.log(getFileExtension2(url2));
