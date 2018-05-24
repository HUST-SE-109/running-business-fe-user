<template>
  <el-header>
    <el-menu
      :router="true"
      :default-active="activeIndex"
      mode="horizontal"
    >
      <span class="project-title">Running Business</span>
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/introduction">服务介绍</el-menu-item>
      <el-menu-item index="/order">在线下单</el-menu-item>
      <el-submenu index="4">
        <template slot="title">关于跑商</template>
        <el-menu-item index="4-1">跑商介绍</el-menu-item>
        <el-menu-item index="4-2">联系跑商</el-menu-item>
        <el-menu-item index="4-3">常见问题</el-menu-item>
        <el-menu-item index="4-4">意见反馈</el-menu-item>
      </el-submenu>

      <el-row v-if="hasLogged">
        <img class="user-avatar" src="@/assets/avatar.jpeg" alt="头像QwQ">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="center">个人中心</el-dropdown-item>
            <el-dropdown-item>查看订单</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
      <el-row v-else>
        <el-button @click="goLogin" type="primary" size="medium" round>登录</el-button>
        <el-button @click="goRegister" size="medium" round>注册</el-button>
      </el-row>
    </el-menu>
  </el-header>
</template>

<script>
import { getToken } from '@/utils/auth';

export default {
  name: 'LayoutHeader',
  data() {
    return {
      activeIndex: '/',
    };
  },
  computed: {
    hasLogged() {
      if (getToken()) return true;
      return false;
    },
  },
  methods: {
    goLogin() {
      this.$router.push({ path: '/login' });
    },
    goRegister() {
      this.$router.push({ path: '/register' });
    },
    handleCommand(command) {
      if (command === 'center') {
        this.$router.push({ path: '/center' });
      }
    },
  },
};
</script>

<style lang="less">
  .el-header {
    text-align: center;
    line-height: 60px;
    padding-left: 12%;
    padding-right: 12%;
    .project-title {
      float: left;
      margin-right: 20px;
      color: #409eff;
    }
    .el-row {
      float: right;
      .user-avatar {
        height: 36px;
        width: 36px;
        border-radius: 18px;
        vertical-align: middle;
      }
      .el-dropdown-link {
        cursor: pointer;
        color: #909399;
      }
      .el-dropdown-link:hover {
        color: #409eff;
      }
    }
  }
</style>
