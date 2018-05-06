<template>
  <div class="order-con">
    <el-row>
      <el-col :span="3" :offset="4">
        <el-menu
          :router="true"
          :default-active="activeIndex">
          <el-menu-item index="/order/helpBuy">
            <i class="el-icon-goods"></i>
            <span slot="title">帮我买</span>
          </el-menu-item>
          <el-menu-item index="/order/helpSend">
            <i class="el-icon-d-arrow-right"></i>
            <span slot="title">帮我送</span>
          </el-menu-item>
          <el-menu-item index="/order/helpGet">
            <i class="el-icon-d-arrow-left"></i>
            <span slot="title">帮我取</span>
          </el-menu-item>
          <el-menu-item index="/order/helpQueue">
            <i class="el-icon-time"></i>
            <span slot="title">代排队</span>
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
  name: 'Order',
  data() {
    return {
      activeIndex: '/order/helpBuy',
    };
  },
};
</script>

<style lang="less">
</style>
