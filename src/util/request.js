import axios from 'axios';
import { getToken } from './auth';

const baseURL = 'http://192.168.1.103:8080/';

const request = axios.create({
  baseURL,
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers.Authorization = token;
    return config;
  },
  error => Promise.reject(error),
);

export default request;
