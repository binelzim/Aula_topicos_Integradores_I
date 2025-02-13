//exemplo 2 
//funções simples

function saudacao(nome){
    return "olá," + nome + "!";
}

console.log(saudacao("Gabriel"));

//Função anonima

const soma = function(a,b){return a+b;}

console.log(soma("Gabriel"," Henrique"));

//Arrow function (Função de seta)

const multiplicacao = (x,y) => x * y;
console.log(multiplicacao(5,2));

//Obj em JavaScript

const pessoa = {
    nomeUsuario: "Gabriel Henrique",
    idade: 19,
    email: "gabrielhmc@unipam.edu.br",
    usuario: "cara lindo",
    saudar: function(){
        return "Oi, meu nome é: " + this.nomeUsuario + " e eu sou um " + this.usuario + ".";
    }
}

console.log(pessoa.nomeUsuario);
console.log(pessoa.saudar());