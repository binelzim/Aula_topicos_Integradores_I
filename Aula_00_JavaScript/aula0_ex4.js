//função que recebe um onjeto como argumento
function exibirInfoProdutos(produto){
    return `Produto: ${produto.nome}, Preoço: ${produto.preco.toFixed(2)},
    Estoque: ${produto.estoque}`
}

const produto1 = {
    nome:"Notebook",
    preço:3500.4859,
    estoque:10
}

console.log(exibirInfoProdutos(produto));