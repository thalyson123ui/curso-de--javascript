// queryselector e queryselectorall//

// queryselector retorna o primeiro elemento que corresponde ao seletor especificado
const titulo = document.querySelector("#titulo");
console.log(titulo);

// queryselectorall retorna uma NodeList de todos os elementos que correspondem ao seletor especificado
const itens = document.querySelectorAll(".item");
console.log(itens);

// iterando sobre a NodeList retornada por querySelectorAll
itens.forEach((item) => {
  console.log(item.textContent);
});