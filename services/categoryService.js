import axios from 'axios';

const baseUrl = 'https://radani-api.vercel.app/categorias';

export async function getAllCategories() {
  const response = await axios.get(baseUrl);
  return response;
}

export async function getCategories(tag) {
  const response = await axios.get(`${baseUrl}tag?tag=${tag}`); 
  return response;
}

export async function getProductsByTag(tag) {
  try {
    const response = await axios.get(`${baseUrl}/${tag}`);
    return response.data; 
  } catch (error) {
    throw new Error(`Erro ao buscar produtos pela tag: ${error.message}`);
  }
}





