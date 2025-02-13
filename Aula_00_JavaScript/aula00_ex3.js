// Exemplo 03: Classes

class Animal{
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }

    exibirInfo(){
        return `Este é um ${this.tipo} chamado ${this.nome}.`;
}
}
const cachorro = new Animal("bobs", "cachorro");
const gato = new Animal("Ze do crime", "gato");

console.log(cachorro.exibirInfo());
console.log(gato.exibirInfo());