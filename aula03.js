// diferença entre let,var e const em JavaScript
"use strict";

// Declaração com var
var idadeVar = 25;
console.log("Idade com var:", idadeVar);

// Declaração com let
let idadeLet = 30;
console.log("Idade com let:", idadeLet);

// Declaração com const
const idadeConst = 35;
console.log("Idade com const:", idadeConst);

// Tentando reatribuir valores
idadeVar = 26; // Funciona
console.log("Nova idade com var:", idadeVar);

idadeLet = 31; // Funciona
console.log("Nova idade com let:", idadeLet);

// idadeConst = 36; // Isso causará um erro porque const não pode ser reatribuído
// console.log("Nova idade com const:", idadeConst);