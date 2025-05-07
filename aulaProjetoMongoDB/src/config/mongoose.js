import monoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/aulaProjetoMongoDB';

export async function connect() {
    try{
        await monoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifieldTopology: true,
        });
        console.log('MongoDB connectado com sucesso em ',MONGO_URI);
    }catch(error){
        console.log('Erro ao conectar ao mongoDB: ', err);
        process.exit(1);
    }
}