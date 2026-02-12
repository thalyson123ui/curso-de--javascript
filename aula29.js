// operador this dentro da função no JavaScript

const pessoa = {
    nome: "Thalyson",
    idade: 25,
    saudacao: function() {
        console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    }
};

pessoa.saudacao(); // "Olá, meu nome é Thalyson e tenho 30 anos."

// usando o operador this em uma função anônima
const pessoa2 = {
    nome: "Maria",
    idade: 25,
    saudacao: function() {
        setTimeout(function() {
            console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
        }, 1000);
    }
};

pessoa2.saudacao(); // "Olá, meu nome é undefined e tenho undefined anos." (this não se refere ao objeto pessoa2)

// usando arrow function para manter o contexto do this
const pessoa3 = {
    nome: "Carlos",
    idade: 40,
    saudacao: function() {
        setTimeout(() => {
            console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
        }, 1000);
    }
};

pessoa3.saudacao(); // "Olá, meu nome é Carlos e tenho 40 anos." (this se refere ao objeto pessoa3)

// usando o método bind para definir o contexto do this
const pessoa4 = {
    nome: "Ana",
    idade: 28,
    saudacao: function() {
        setTimeout(function() {
            console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
        }.bind(this), 1000);
    }
};

pessoa4.saudacao(); // "Olá, meu nome é Ana e tenho 28 anos." (this se refere ao objeto pessoa4)