<template>
  <div class="own-order-con">
    <el-row>
      <el-col :span="3" :offset="4">
        <el-menu
          :router="true"
          :default-active="activeIndex">
          <el-menu-item index="/own-order/my-order">
            <i class="el-icon-fa-list-ul"></i>
            <span slot="title">我的订单</span>
          </el-menu-item>
          <el-menu-item index="/own-order/refund">
            <i class="el-icon-fa-history"></i>
            <span slot="title">退款信息</span>
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
  name: 'OwnOrder',
  data() {
    return {
      activeIndex: '/own-order/my-order',
    };
  },
};
</script>

<style scoped>

</style>
