// função dentro de outra função em JavaScript

function saudacao(nome) {
    function mensagem() {
        return "Olá, " + nome + "! Bem-vindo!";
    }
    return mensagem();
}

// chamando a função
let resultado = saudacao("Thalyson");
console.log(resultado); // "Olá, Thalyson! Bem-vindo!"

// função aninhada com acesso à variável externa
function contador() {
    let count = 0;
    function incrementar() {
        count++;
        return count;
    }
    return incrementar;
}

let meuContador = contador();
console.log(meuContador()); // 1
console.log(meuContador()); // 2
console.log(meuContador()); // 3

// função aninhada usada como callback
function executarDepoisDe2Segundos(callback) {
    setTimeout(callback, 2000);
}

executarDepoisDe2Segundos(function() {
    console.log("Esta mensagem foi exibida após 2 segundos.");
});

// função aninhada usada em um evento
document.getElementById("meuBotao").addEventListener("click", function() {
    function mostrarAlerta() {
        alert("Botão clicado!");
    }
    mostrarAlerta();
});