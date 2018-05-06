<template>
  <div id="login-page" @keyup.enter="login">
    <div class="login-form">
      <div class="title">跑商-用户登录</div>
      <div class="input-group">
        <el-input
          placeholder="请输入手机号"
          suffix-icon="el-icon-mobile-phone"
          v-model="username"
          @blur="handleUsernameBlur"
          clearable
        >
        </el-input>
      </div>
      <div class="input-group">
        <el-input
          placeholder="请输入密码"
          suffix-icon="el-icon-message"
          type="password"
          v-model="password"
          @blur="handlePasswordBlur"
          clearable
        >
        </el-input>
      </div>
      <div class="input-group">
        <el-button @click="login" type="primary" :loading="isLoading">
          {{ buttonText }}
        </el-button>
      </div>
      <el-button type="text">
        <router-link to="/register">没有账号，去注册</router-link>
      </el-button>
    </div>
  </div>
</template>

<script>
import { isMobile, checkPassword } from '@/utils/util';

export default {
  data() {
    return {
      username: '',
      password: '',
      isLoading: false,
      canLogin: false,
    };
  },
  computed: {
    buttonText() {
      if (this.isLoading) return '登录中...';
      return '登录';
    },
  },
  methods: {
    // 检查用户名
    checkUserName() {
      if (!this.username) {
        this.$message.error('请填写手机号');
        this.canLogin = false;
        return;
      }
      if (this.username && !isMobile(this.username)) {
        this.$message.error('请填写正确格式手机号');
        this.canLogin = false;
        return;
      }
      this.canLogin = true;
    },
    // 检查密码
    checkPassword() {
      if (!this.password) {
        this.$message.error('请填写密码');
        this.canLogin = false;
        return;
      }
      if (this.password && !checkPassword(this.password)) {
        this.$message.error('密码应为6-18位');
        this.canLogin = false;
        return;
      }
      this.canLogin = true;
    },
    handleUsernameBlur() {
      this.checkUserName();
    },
    handlePasswordBlur() {
      this.checkPassword();
    },
    // 登录
    login() {
      this.checkUserName();
      this.checkPassword();
      const params = {
        userphone: this.username,
        password: this.password,
      };
      if (this.canLogin) {
        this.isLoading = true;
        this.$store.dispatch('loginByUsername', params)
          .then((data) => {
            if (data.code === '200') {
              this.isLoading = false;
              this.$message({
                message: '登录成功！',
                type: 'success',
              });
              this.$router.push({ path: '/' });
            } else if (data.code === '1001003') {
              this.isLoading = false;
              this.$message.error('密码错误');
            }
          });
      }
    },
  },
};
</script>

<style lang="less">
  #login-page {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #efeeee;

    .login-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 500px;
      height: 400px;
      border-radius: 10px;
      background: white;
      border: 1px #eaeaea solid;
      box-shadow: 0px 0px 25px #cac6c6;

      .title {
        color: #20a0ff;
        font-weight: bold;
        font-size: 40px;
        text-align: center;
      }

      .input-group {
        margin-top: 30px;
        width: 80%;
        button {
          width: 100%;
        }
      }
    }
  }
</style>
