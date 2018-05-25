import axios from 'axios';

const baseURL = 'http://192.168.1.105:8080/';

const request = axios.create({
  baseURL,
  timeout: 5000,
  withCredentials: true,
});

export default request;
