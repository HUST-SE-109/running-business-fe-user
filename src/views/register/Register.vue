<template>
  <div id="register-page" @keyup.enter="register">
    <div class="register-form">
      <div class="title">跑商-用户注册</div>
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
        <el-button @click="register" type="primary" :loading="isLoading">
          {{ buttonText }}
        </el-button>
      </div>
      <el-button type="text">
        <router-link to="/login">已有账号，去登陆</router-link>
      </el-button>
    </div>
  </div>
</template>

<script>
import { isMobile, checkPassword } from '@/utils/util';
import { checkUserRegistered, register } from '@/api/register';

export default {
  data() {
    return {
      username: '',
      password: '',
      isLoading: false,
      hasUsername: false,
      isRegistered: false,
    };
  },
  computed: {
    buttonText() {
      if (this.isLoading) return '注册中...';
      return '注册';
    },
  },
  methods: {
    // 检查用户名
    checkUserName() {
      if (!this.username) {
        this.$message.error('请填写手机号');
        this.isRegistered = false;
        return;
      }
      if (this.username && !isMobile(this.username)) {
        this.$message.error('请填写正确格式手机号');
        this.isRegistered = false;
        return;
      }
      this.isRegistered = true;
    },
    // 检查密码
    checkPassword() {
      if (!this.password) {
        this.$message.error('请填写密码');
        this.isRegistered = false;
        return;
      }
      if (this.password && !checkPassword(this.password)) {
        this.$message.error('密码应为6-18位');
        this.isRegistered = false;
        return;
      }
      this.isRegistered = true;
    },
    // 检查用户名是否已注册
    checkRegistered() {
      checkUserRegistered(this.username)
        .then(({ data }) => {
          if (data.code === '200') {
            this.hasUsername = false;
            this.$message({
              message: '恭喜您，账号可用！',
              type: 'success',
            });
          } else {
            this.hasUsername = true;
            this.$message({
              message: '用户已注册',
              type: 'warning',
            });
          }
        });
    },
    handleUsernameBlur() {
      this.checkUserName();
      if (this.username && this.isRegistered) {
        this.checkRegistered();
      }
    },
    handlePasswordBlur() {
      this.checkPassword();
    },
    // 注册
    register() {
      this.checkUserName();
      this.checkPassword();
      const params = {
        userphone: this.username,
        password: this.password,
      };
      if (this.isRegistered && !this.hasUsername) {
        this.isLoading = true;
        register(params)
          .then(({ data }) => {
            if (data.code === '200') {
              this.isLoading = false;
              this.$message({
                message: '恭喜您，注册成功！',
                type: 'success',
              });
              this.$router.push({ path: '/login' });
            }
          });
      }
    },
  },
};
</script>

<style lang="less">
  #register-page {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #efeeee;

    .register-form {
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
