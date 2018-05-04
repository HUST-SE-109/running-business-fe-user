import axios from 'axios';

const baseURL = 'http://192.168.1.103:8080/';

const request = axios.create({
  baseURL,
  timeout: 5000,
});

export default request;
