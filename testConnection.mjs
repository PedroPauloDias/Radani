import dotenv from "dotenv";
import mongoose from "mongoose"; 
import connectMongoDB from './lib/mongodb.mjs'; 
// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const testConnection = async () => {
  try {
    await connectMongoDB();
    console.log("tudo certo .");
    
  } catch (error) {
    console.error("Connection test failed:", error);
  } finally {
    // Fechar a conexão para evitar que o script fique em execução
    mongoose.connection.close();
  }
};

testConnection();
