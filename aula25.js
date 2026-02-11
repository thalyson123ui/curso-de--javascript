// arrow functions em JavaScript

// função tradicional
function soma(a, b) {
    return a + b;
}

// arrow function equivalente
let somaArrow = (a, b) => {
    return a + b;
};

// arrow function com retorno implícito
let somaArrowCurta = (a, b) => a + b;

// chamando as funções
console.log(soma(5, 3)); // 8
console.log(somaArrow(5, 3)); // 8
console.log(somaArrowCurta(5, 3)); // 8

// arrow function sem parâmetros
let saudacao = () => "Olá! Bem-vindo!";
console.log(saudacao()); // "Olá! Bem-vindo!"

// arrow function com um único parâmetro (parênteses opcionais)
let quadrado = x => x * x;
console.log(quadrado(4)); // 16

// arrow function usada como callback
setTimeout(() => {
    console.log("Esta mensagem foi exibida após 2 segundos.");
}, 2000);

// arrow function usada em um evento
document.getElementById("meuBotao").addEventListener("click", () => {
    alert("Botão clicado!");
});