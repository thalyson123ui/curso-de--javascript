// funnções comn retorno

// função que retorna a soma de dois números
function soma(a, b) {
    return a + b;
}

// chamando a função e armazenando o resultado
let resultadoSoma = soma(7, 5);
console.log("A soma é: " + resultadoSoma);

// função que retorna o maior de dois números
function maior(x, y) {
    return (x > y) ? x : y;
}

// chamando a função e armazenando o resultado
let maiorValor = maior(10, 20);
console.log("O maior valor é: " + maiorValor);

// função que retorna uma mensagem personalizada
function saudacao(nome) {
    return "Olá, " + nome + "! Seja bem-vindo!";
}

// chamando a função e armazenando o resultado
let mensagem = saudacao("Thalyson");
console.log(mensagem);