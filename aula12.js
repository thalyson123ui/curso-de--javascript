// operador spread
const numeros = [1, 2, 3];
const maisNumeros = [...numeros, 4, 5, 6];
console.log(maisNumeros); // [1, 2, 3, 4, 5, 6]

const pessoa = { nome: 'Ana', idade: 28 };
const pessoaComEndereco = { ...pessoa, endereco: 'Rua A, 123' };
console.log(pessoaComEndereco); // { nome: 'Ana', idade: 28, endereco: 'Rua A, 123' }

// operador in
const carro = { marca: 'Toyota', modelo: 'Corolla', ano: 2020 };

console.log('marca' in carro); // true
console.log('cor' in carro);   // false

// operador delete
const usuario = { nome: 'Carlos', idade: 35, ativo: true };

console.log(usuario); // { nome: 'Carlos', idade: 35, ativo: true }
delete usuario.ativo;
console.log(usuario); // { nome: 'Carlos', idade: 35 }