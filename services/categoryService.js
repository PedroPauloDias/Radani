import axios from 'axios';

const baseUrl = 'https://radani-api.vercel.app/categorias';

export async function getAllCategories() {
  const response = await axios.get(`https://radani-api.vercel.app/categorias`);
  return response;
}

export async function getCategories(clan) {
  const response = await axios.get(`${baseUrl}/hydraclash/clan?clan=${clan}`); 
  return response;
}






