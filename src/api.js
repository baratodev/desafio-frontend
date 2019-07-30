import axios from 'axios';

const api = axios.create({
  baseURL: 'https://playground.barato.com.br/desafio-front/api'
});

export default api;