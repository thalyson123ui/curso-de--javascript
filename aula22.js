// funções parametrizadas em JavaScript

// função que recebe um nome e exibe uma saudação personalizada
function saudacao(nome) {
    console.log("Olá, " + nome + "! Seja bem-vindo!");
}

// chamando a função com um argumento
saudacao("Thalyson");

// função que recebe dois números e retorna a soma
function soma(a, b) {
    return a + b;
}

// chamando a função e armazenando o resultado
let resultadoSoma = soma(7, 5);
console.log("A soma é: " + resultadoSoma);

// função que recebe um número e retorna o quadrado
function quadrado(num) {
    return num * num;
}

// chamando a função e armazenando o resultado
let resultadoQuadrado = quadrado(4);
console.log("O quadrado é: " + resultadoQuadrado);

// função que recebe dois números e retorna o maior
function maior(x, y) {
    return x > y ? x : y;
}

// chamando a função e armazenando o resultado
let resultadoMaior = maior(10, 20);
console.log("O maior número é: " + resultadoMaior);

// função que recebe um nome e retorna uma mensagem personalizada
function saudacaoPersonalizada(nome) {
    return "Olá, " + nome + "! Seja bem-vindo!";
}

// chamando a função e armazenando o resultado
let mensagem = saudacaoPersonalizada("Thalyson");
console.log(mensagem);