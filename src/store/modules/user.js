import { setToken, removeToken } from '@/utils/auth';
import { login } from '@/api/login';
import { getUserInfo } from '@/api/user';

const user = {
  state: {
    userPhone: '',
    userName: '',
    token: '',
    avatar: '',
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
  },

  actions: {
    // 登录
    loginByUsername({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(({ data }) => {
          if (data.code === '200') {
            commit('SET_TOKEN', data.data);
            setToken(data.data);
          }
          resolve(data);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then((response) => {
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error');
          }
          const data = response.data;
          commit('SET_ROLES', data.roles);
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          commit('SET_INTRODUCTION', data.introduction);
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '');
        removeToken();
        resolve();
      });
    },
  },
};

export default user;
