import { produtoService } from "../services/produtoService";

export const produtoContoller = {
    async criar(req, res, next){
        try{
            const criado = await produtoService.criarProduto(req.body);
            res.status(201).json(criado);
        } catch(error){ next(err);}
    },
    async listar(req, res, next){
        try{
            const lista = await produtoService.ListarProdutos();
            res.json(lista);
        } catch (error) { next(err);}
    },
    async obter(req, res, next){
        try{
            const p = await produtoService.obterProduto(req.params.id);
        }catch(err){ next(err); }
    },
    async atualizar(req,res, next){
        try{
            const uptade = await produtoService.atualizarProduto(req.params.id.req.body);
            res.json(update);
        }catch(err){ next (err); }
    },
    async deletar(req,res, next){
        try{
            await produtoService.removerProduto(req.params.id);
            res.status(204).end();
        }catch(err){ next(err); }
    }
};