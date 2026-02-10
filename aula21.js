// funções com retorno em JavaScript

// função que retorna a soma de dois números
function soma(a, b) {
    return a + b;
}

// chamando a função e armazenando o resultado
let resultadoSoma = soma(7, 5);
console.log("A soma é: " + resultadoSoma);

// função que retorna o maior de dois números
function maior(x, y) {
    return x > y ? x : y;
}

// chamando a função e armazenando o resultado
let resultadoMaior = maior(10, 20);
console.log("O maior número é: " + resultadoMaior);

// função que retorna uma mensagem personalizada
function saudacao(nome) {
    return "Olá, " + nome + "! Seja bem-vindo!";
}

// chamando a função e armazenando o resultado
let mensagem = saudacao("Thalyson");
console.log(mensagem);

// função que retorna o quadrado de um número
function quadrado(num) {
    return num * num;
}

// chamando a função e armazenando o resultado
let resultadoQuadrado = quadrado(4);
console.log("O quadrado é: " + resultadoQuadrado);