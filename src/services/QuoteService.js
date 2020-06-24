import axios from 'axios';

const apiClient = axios.create({
  baseURL: "",
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getQuote() {
    return apiClient.get('https://quote-garden.herokuapp.com/api/v2/quotes/random');
  }
};
