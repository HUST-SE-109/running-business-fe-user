import request from '@/utils/request';

// 获取用户信息
const getUserInfo = () => request({
  url: '/users/info',
  method: 'get',
});

// 更新用户信息
const updateUserInfo = data => request({
  url: '/users/info',
  method: 'post',
  data,
});

// 添加用户地址
const addUserAddress = data => request({
  url: '/users/address',
  method: 'post',
  data,
});

// 获取当前用户所有地址信息
const fetchUserAddress = () => request({
  url: '/users/address',
  method: 'get',
});

// 根据地址 id 获取该条地址信息
const getUserAddressById = id => request({
  url: `/users/address/${id}`,
  method: 'get',
});

// 验证旧密码是否正确
const checkOldPassword = oldPassword => request({
  url: '/users/checkoldpwd',
  method: 'get',
  params: {
    oldPassword,
  },
});

// 更新密码
const updatePassword = (oldPassword, newPassword) => request({
  url: '/users/updatepwd',
  method: 'put',
  data: {
    oldPassword,
    newPassword,
  },
});

// 获取用户 Token
const getUserToken = token => request({
  url: `/users/token/${token}`,
  method: 'get',
});

// 删除用户 Token
const deleteUserToken = token => request({
  url: `/users/logout/${token}`,
  method: 'post',
});

// 查询用户余额
const getUserBalance = () => request({
  url: '/users/balance',
  method: 'get',
});

export {
  getUserInfo,
  updateUserInfo,
  addUserAddress,
  fetchUserAddress,
  getUserAddressById,
  checkOldPassword,
  updatePassword,
  getUserToken,
  deleteUserToken,
  getUserBalance,
};
