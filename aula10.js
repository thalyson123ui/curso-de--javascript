// operador ternário
const idade = 20;
const podeBeber = idade >= 18 ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber); // Pode beber

// exemplo com mais de duas condições
const nota = 85;
const conceito = nota >= 90 ? 'A' :
                 nota >= 80 ? 'B' :
                 nota >= 70 ? 'C' :
                 nota >= 60 ? 'D' : 'F';
console.log(conceito); // B