import axios from 'axios';

const baseUrl = 'https://radani-api.vercel.app/produtos';
export async function getAllProducts() {
  
  const response = await axios.get(`${baseUrl}`)  
  return response;
};

export async function getProductsById(id) {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response;
  } catch (error) {
    throw new Error(`Erro ao buscar produto por ID: ${error.message}`);
  }
}

export const getSingleProduct = async (id) => {
  try {
    const response = await getProductsById(id);
    const singleProduct = response.data; // Extrai os dados da resposta axios
    console.log(singleProduct)
    return singleProduct;
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    throw error; // Lança o erro novamente para ser tratado onde a função foi chamada
  }
};




export async function getAllProductsTag(tag) {
  try {
    const response = await axios.get(`${baseUrl}?tag=${tag}`);
    return response.data; // Retorna apenas os dados da resposta
  } catch (error) {
    throw new Error(`Erro ao buscar produtos pela tag: ${error.message}`);
  }
}
