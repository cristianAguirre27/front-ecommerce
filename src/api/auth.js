import axios from "axios";

const API = 'https://ecommerce2-8tcf.onrender.com/api';

export const registerRequest = (user) => axios.post(`${API}/register`,user);