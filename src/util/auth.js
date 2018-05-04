import Cookies from 'js-cookie';

const TokenKey = 'RUN_TOKEN';

const getToken = () => Cookies.get(TokenKey);

const setToken = token => Cookies.set(TokenKey, token);

const removeToken = () => Cookies.remove(TokenKey);


export {
  getToken,
  setToken,
  removeToken,
};
