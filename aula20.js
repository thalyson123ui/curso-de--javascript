// funções em JavaScript

// função sem parâmetros
function saudacao() {
    console.log("Olá, seja bem-vindo!");
}

// chamando a função
saudacao();

// função com parâmetros
function soma(a, b) {
    return a + b;
}

// chamando a função com argumentos
let resultado = soma(5, 3);
console.log("A soma é: " + resultado);

// função anônima atribuída a uma variável
let multiplicacao = function(x, y) {
    return x * y;
};

// chamando a função anônima
let produto = multiplicacao(4, 6);
console.log("O produto é: " + produto);

// função arrow (função de seta)
let divisao = (m, n) => m / n;

// chamando a função arrow
let quociente = divisao(10, 2);
console.log("O quociente é: " + quociente);