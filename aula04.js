// operações matemáticas básicas
"use strict";

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        console.log("Erro: Divisão por zero não é permitida.");
        return null;
    }
    return a / b;
}

console.log("Operações Matemáticas Básicas:");
console.log("Soma: 5 + 3 =", somar(5, 3));
console.log("Subtração: 10 - 4 =", subtrair(10, 4));
console.log("Multiplicação: 6 * 7 =", multiplicar(6, 7));
console.log("Divisão: 20 / 4 =", dividir(20, 4));
console.log("Divisão por zero: 10 / 0 =", dividir(10, 0));