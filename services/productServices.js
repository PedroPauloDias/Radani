import axios from 'axios';

const baseUrl = 'https://radani-api.vercel.app/produtos';
export  function getAllProducts() {
  
  const response =  axios.get(`${baseUrl}`)  
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

export async function getProductsByTag(req , tag) {
  try {
    // Faz a requisição GET para o endpoint '/produtos' com os parâmetros de consulta 'tag'
    const response = await axios.get(`${baseUrl}?tag=${tag}`, {
    
    });
    // Retorna os dados da resposta
    return response;
  } catch (error) {
    // Se ocorrer um erro, lança uma exceção ou retorna null, dependendo da sua necessidade
    throw new Error(`Erro ao buscar tags: ${error.message}`);
  }
}
export  function getAllProductsTag(tag) {
  const response =  axios.get(`${baseUrl}/${tag}`)  
  return response;
};