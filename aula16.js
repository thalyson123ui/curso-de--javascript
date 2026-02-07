// loop for of e loop for in no javaScript//
let frutas = ["maçã", "banana", "laranja"];

for (let fruta of frutas) {
    console.log("Fruta: " + fruta);
}

let pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}