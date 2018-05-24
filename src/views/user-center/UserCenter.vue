<template>
  <div class="order-con">
    <el-row>
      <el-col :span="3" :offset="4">
        <el-menu
          :router="true"
          :default-active="activeIndex">
          <el-menu-item index="/center/info">
            <i class="el-icon-fa-user"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
          <el-menu-item index="/center/address">
            <i class="el-icon-fa-location-arrow"></i>
            <span slot="title">地址管理</span>
          </el-menu-item>
          <el-menu-item index="/center/password">
            <i class="el-icon-fa-key"></i>
            <span slot="title">修改密码</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="12" :offset="1">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'UserCenter',
  data() {
    return {
      activeIndex: '/center/info',
    };
  },
};
</script>

<style lang="less">
</style>
