<template>
  <el-container direction="vertical">
    <Header></Header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <Footer></Footer>
  </el-container>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  components: { Header, Footer },
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="less">
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>
