import axios from 'axios';

const baseURL = 'http://192.168.1.114:8081';

const request = axios.create({
  baseURL,
  timeout: 5000,
  withCredentials: true,
});

export default request;
