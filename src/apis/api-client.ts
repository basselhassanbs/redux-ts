import axios from 'axios';

export default axios.create({
  baseURL: 'https://registry.npmjs.org/-/v1/',
});
