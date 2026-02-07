// loop for no javaScript//
for (let i = 0; i < 5; i++) {
    console.log("Contagem: " + i);
}

// Exemplo com strings
var fruta = "maçã";

switch (fruta) {
    case "maçã":
        console.log("Fruta: Maçã");
        break;
    case "banana":
        console.log("Fruta: Banana");
        break;
    case "laranja":
        console.log("Fruta: Laranja");
        break;
    default:
        console.log("Fruta desconhecida");
}

// Exemplo com números
var nota = 7;

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