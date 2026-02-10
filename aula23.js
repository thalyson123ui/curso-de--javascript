// parametros rest em funções JavaScript

// função que recebe um número variável de argumentos e retorna a soma
function soma(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

// chamando a função com diferentes números de argumentos
let resultadoSoma1 = soma(1, 2, 3);
console.log("A soma é: " + resultadoSoma1);

let resultadoSoma2 = soma(4, 5, 6, 7);
console.log("A soma é: " + resultadoSoma2);

// função que recebe um número variável de argumentos e retorna o maior
function maior(...numeros) {
    return Math.max(...numeros);
}

// chamando a função com diferentes números de argumentos
let resultadoMaior1 = maior(10, 20, 5);
console.log("O maior número é: " + resultadoMaior1);

let resultadoMaior2 = maior(15, 25, 30, 5);
console.log("O maior número é: " + resultadoMaior2);

// função que recebe um número variável de argumentos e retorna uma mensagem personalizada
function saudacao(...nomes) {
    return "Olá, " + nomes.join(", ") + "! Sejam bem-vindos!";
}

// chamando a função com diferentes números de argumentos
let mensagem1 = saudacao("Thalyson", "Maria", "João");
console.log(mensagem1);

let mensagem2 = saudacao("Ana", "Carlos");
console.log(mensagem2);