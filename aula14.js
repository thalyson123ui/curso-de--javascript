// Switch Case em Javascript 
var fruta = "Maçã";

switch (fruta) {
    case "Banana":
        console.log("A banana é amarela.");
        break;
    case "Maçã":
        console.log("A maçã pode ser vermelha, verde ou amarela.");
        break;
    case "Laranja":
        console.log("A laranja é laranja.");
        break;
    case "Uva":
        console.log("A uva pode ser roxa ou verde.");
        break;
    default:
        console.log("Fruta desconhecida.");
}

// Exemplo com números
var nota = 8;

switch (nota) {
    case 10:
        console.log("Excelente!");
        break;
    case 9:
        console.log("Muito bom!");
        break;
    case 8:
        console.log("Bom!");
        break;
    case 7:
        console.log("Satisfatório!");
        break;
    case 6:
        console.log("Precisa melhorar!");
        break;
    default:
        console.log("Reprovado!");
}

// Exemplo com dias da semana
var diaSemana = 5;

switch (diaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia inválido");
}

// Exemplo com booleanos
var ligado = true;

switch (ligado) {
    case true:
        console.log("O dispositivo está ligado.");
        break;
    case false:
        console.log("O dispositivo está desligado.");
        break;
    default:
        console.log("Estado desconhecido.");
}

// Exemplo com múltiplos casos
var letra = "B";

switch (letra) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("A letra é uma vogal.");
        break;
    default:
        console.log("A letra é uma consoante.");
}