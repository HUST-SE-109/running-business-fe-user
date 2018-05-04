import request from '@/util/request';

// 检查账号是否已注册
const checkUserRegistered = username => request({
  url: `/index/users/check/${username}`,
  method: 'get',
});

// 用户注册
const register = data => request({
  url: '/index/users',
  method: 'post',
  data,
});

export {
  checkUserRegistered,
  register,
};
