<template>
  <div>
    <h1>Home</h1>
    <el-input
      placeholder="请输入手机号"
      suffix-icon="el-icon-mobile-phone"
      v-model="username"
      @blur="handleUsernameBlur"
      clearable
    >
    </el-input>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user';

export default {
  name: 'Home',
  data() {
    return {
      username: '',
    };
  },
  methods: {
    handleUsernameBlur() {
      getUserInfo()
        .then((res) => {
          // console.log(res);
          this.username = res.data.code;
        });
    },
  },
};
</script>

<style scoped>

</style>
