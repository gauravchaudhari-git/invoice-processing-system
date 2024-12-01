import axios from 'axios';

const API_URL = "http://localhost:8080"; 

export const saveInvoice = async (payload) => {
  try {
    return await axios.post(`${API_URL}/invoice`, payload);
  } catch (error) {
    console.error('Error:', error.message);
    return error.response?.data || { message: 'Something went wrong' }; // Fallback for undefined error response
  }
};
