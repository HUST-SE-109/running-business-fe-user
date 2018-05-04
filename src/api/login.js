import request from '@/util/request';

// 登录
const login = data => request({
  url: '/index/users/login',
  method: 'post',
  data,
});

export {
  login,
};
