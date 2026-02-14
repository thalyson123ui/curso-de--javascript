// adicionando eventos com addEventListener

const h1 = document.querySelector('h1');

function callback() {
    console.log('Clicou no h1');
}

h1.addEventListener('click', callback);

// adicionando um evento de mouseover
h1.addEventListener('mouseover', () => {
    console.log('Mouse sobre o h1');
});

// adicionando um evento de mouseout
h1.addEventListener('mouseout', () => {
    console.log('Mouse saiu do h1');
});

// adicionando um evento de keydown
document.addEventListener('keydown', (event) => {
    console.log(`Tecla pressionada: ${event.key}`);
});

// adicionando um evento de submit a um formulário
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // impede o envio do formulário
    console.log('Formulário enviado');
});