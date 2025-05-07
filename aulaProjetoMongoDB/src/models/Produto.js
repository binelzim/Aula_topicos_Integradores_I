import { schema, model } from 'mongoose'

const produtoSchema = new schema({
    nome: { type: String, required: true,},
    preco: { type: Number, required: true, min: 0,},
    quantidade: { type: Number, required: true, min: 0,}
}, { timesamps: true });

export const Produto = model('Produto', produtoSchema);