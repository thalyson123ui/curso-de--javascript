// metodo map em JavaScript

const numeros = [1, 2, 3, 4, 5];

// usando o método map para criar um novo array com os números multiplicados por 2
const numerosMultiplicados = numeros.map(function(numero) {
    return numero * 2;
});

console.log(numerosMultiplicados); // [2, 4, 6, 8, 10]

// usando arrow function com o método map
const numerosMultiplicadosArrow = numeros.map(numero => numero * 2);
console.log(numerosMultiplicadosArrow); // [2, 4, 6, 8, 10]

// usando o método map para extrair uma propriedade de um array de objetos
const pessoas = [
    { nome: "Alice", idade: 30 },
    { nome: "Bob", idade: 25 },
    { nome: "Charlie", idade: 35 }
];

const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes); // ["Alice", "Bob", "Charlie"]

// usando o método map para criar um array de objetos a partir de um array de strings
const frutas = ["Maçã", "Banana", "Laranja"];

const objetosFrutas = frutas.map(fruta => ({ nome: fruta }));
console.log(objetosFrutas);
// [{ nome: "Maçã" }, { nome: "Banana" }, { nome: "Laranja" }]

// usando o método map para criar um array de elementos HTML a partir de um array de dados
const itens = ["Item 1", "Item 2", "Item 3"];

const elementosHTML = itens.map(item => `<li>${item}</li>`);
console.log(elementosHTML); // ["<li>Item 1</li>", "<li>Item 2</li>", "<li>Item 3</li>"]