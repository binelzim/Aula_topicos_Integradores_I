import { produtoReposiory } from "../repositories/produtoRepository";

export const produtoService = {
    async criarProduto(dto){
        if(dto.preco < 0) throw new Error('O preco nao pode ser negativo');
        return produtoRepository.criar(dto); 
    },
    async ListarProdutos(){
        return produtoRepository.listarTodos();
    },
    async buscarProduto(id){
        const p = await produtoRepository.buscarProdutoID(id);
        if(!p) throw new Error('Produto nao encotnrado');
        return p;
    },
    async atualizarProduto(id, dto){
        return produtoRepository.atualizarProduto(id, dto);
    },
    async deletarProduto(id){
        return produtoRepository.deletarProduto(id);
    }
};