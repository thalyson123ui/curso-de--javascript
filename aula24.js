// funções anonimas em JavaScript

// função anônima atribuída a uma variável
let saudacao = function(nome) {
    return "Olá, " + nome + "! Bem-vindo!";
};

// chamando a função anônima
let mensagem = saudacao("Thalyson");
console.log(mensagem);

// função anônima usada como callback
setTimeout(function() {
    console.log("Esta mensagem foi exibida após 2 segundos.");
}, 2000);

// função anônima usada em um evento
document.getElementById("meuBotao").addEventListener("click", function() {
    alert("Botão clicado!");
});