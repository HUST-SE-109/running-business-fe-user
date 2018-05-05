import request from '@/utils/request';

// 登录
const login = data => request({
  url: '/index/users/login',
  method: 'post',
  data,
});

const logout = token => request({
  url: `/users/logout/${token}`,
  method: 'post',
});

export {
  login,
  logout,
};
