<template>
<el-header>
  <el-menu
    :router="true"
    :default-active="activeIndex"
    mode="horizontal">
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="2">服务介绍</el-menu-item>
    <el-menu-item index="3">在线下单</el-menu-item>
    <el-submenu index="4">
      <template slot="title">关于跑商</template>
      <el-menu-item index="4-1">跑商介绍</el-menu-item>
      <el-menu-item index="4-2">联系跑商</el-menu-item>
      <el-menu-item index="4-3">常见问题</el-menu-item>
      <el-menu-item index="4-4">意见反馈</el-menu-item>
    </el-submenu>
  </el-menu>
</el-header>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data() {
    return {
      activeIndex: '/',
    };
  },
  methods: {
  },
};
</script>

<style lang="less">
  .el-header {
    text-align: center;
    line-height: 60px;
  }
</style>
