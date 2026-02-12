// funções geradoras em JavaScript

function* gerador() {
    yield "Primeira mensagem";
    yield "Segunda mensagem";
    yield "Terceira mensagem";
}

// criando um iterador a partir do gerador
const iterador = gerador();

console.log(iterador.next().value); // "Primeira mensagem"
console.log(iterador.next().value); // "Segunda mensagem"
console.log(iterador.next().value); // "Terceira mensagem"
console.log(iterador.next().value); // undefined (fim do gerador)

// usando o gerador em um loop
for (let valor of gerador()) {
    console.log(valor);
}

// função geradora com parâmetros
function* contador(max) {
    for (let i = 1; i <= max; i++) {
        yield i;
    }
}

const contagem = contador(5);
for (let numero of contagem) {
    console.log(numero); // 1, 2, 3, 4, 5
}

// função geradora com tratamento de erros
function* geradorComErro() {
    yield "Primeira mensagem";
    throw new Error("Ocorreu um erro!");
    yield "Segunda mensagem"; // este código não será executado
}

const iteradorErro = geradorComErro();
console.log(iteradorErro.next().value); // "Primeira mensagem"
try {
    console.log(iteradorErro.next().value); // lança o erro
} catch (error) {
    console.error("Erro capturado:", error.message);
}