import axios from "axios";

const API = 'https://ecommerce2-8tcf.onrender.com/api';

export const addItemsRequest = (item) => axios.post(`${API}/items`,item);