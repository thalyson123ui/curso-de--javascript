// operador typeof
const nome = 'João';
const idade = 30;
const ativo = true;
const lista = [1, 2, 3];
const pessoa = { nome: 'Maria', idade: 25 };

console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof ativo); // boolean
console.log(typeof lista); // object
console.log(typeof pessoa); // object

// operador instanceof
console.log(lista instanceof Array); // true
console.log(pessoa instanceof Object); // true
console.log(nome instanceof String); // false (nome é um primitivo, não um objeto String)