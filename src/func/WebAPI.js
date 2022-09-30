import axios from 'axios';

const shopRequest = axios.create({
  baseURL: 'https://fakestoreapi.com',
  params: {},
});

export const apiSimilarList = () => shopRequest.get('/products/?limit=20');
