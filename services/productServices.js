import { TagsInput } from '@mantine/core';
import axios from 'axios';

const baseUrl = 'https://radani-api.vercel.app/produtos';
export  function getAllProducts() {
  
  const response =  axios.get(`${baseUrl}`)  
  return response;
};

export  function getAllProductsCategory(tag) {
  
  const response =  axios.get(`${baseUrl}/${tag}`)  
  return response;
};


export function createProducts(body){    
  const response =  axios.post(`${baseUrl}`, body)  
  return response;
}

export function getProductsById(id) {
  const response =  axios.get(`${baseUrl}/${id}`)  
  return response;
 }


 export const getSingleProduct = async (id) => {
  try {
    const response = await getProductsById(id);
    const singleProduct = response.data; // Extrai os dados da resposta axios
    return singleProduct;
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    throw error; // Lança o erro novamente para ser tratado onde a função foi chamada
  }
};


export function editPlayer(body, id) {
  const response =  axios.put(`${baseUrl}/players/${id}`, body)  
  return response;
}

export function deletePlayer(id) {
  const response =  axios.delete(`${baseUrl}/players/${id}`)  
  return response;
}