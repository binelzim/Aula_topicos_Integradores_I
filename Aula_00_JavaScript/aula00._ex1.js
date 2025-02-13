//exemplo 01
//usando var (escopo global/função)

var nome = "Gabriel";
console.log(nome);

if(true){
    var nome = "Tatu";
    console.log(nome);
}
nome = 15.8;
console.log(nome);

//Usando let (Escopo de bloco)

let idade = 19;
console.log(idade);

if(true){
    let idade = 20;
    console.log(idade);
}
idade = "zin";
console.log(idade);

// Usando const (escopo de bloco e valor constante)

const PI=3.14;
console.log(PI);

if(true){
    const PI = 4.14159;
    console.log(PI);
}
PI = "Topicos integradores I";
console.log(PI);
