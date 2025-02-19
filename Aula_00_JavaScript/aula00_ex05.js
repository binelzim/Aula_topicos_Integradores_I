const numeros = [1,2,3,4,5,6];

numeros.forEach(num => {console.log(`Numero: ${num}`);
})

const dobrado = numeros.map(num => num*2);
console.log(dobrados)

const maiorQuqe8 = dobrados.filter(num=> num > 8);
console.log(maiorQuqe8);

const maiorQue9 = dobrados.find(num >= 9);
console.log(maiorQue9);

const maiorQue2 = dobrados.every(num => num >= 2);
console.log(todosMaiores2);

const algumMaior12 = dobrados.some(num => num > 11);
console.log(algumMaior12);