<template>
  <div class="grab-list-con">
    <el-row type="flex" justify="center" :key="item.orderid" v-for="item in this.data">
      <el-card class="box-card" shadow="never">
        <div slot="header">
          <span>订单编号：{{ item.orderid }}</span>
        </div>
        <div class="order-item">
          业务名称
          ：{{item.orderTypeDesc}}
        </div>
        <div class="order-item">
          商品内容
          ：{{item.goods}}
        </div>
        <div class="order-item">
          {{ handleAddressDesc(item.type)[0] }}
          ：{{item.sourceAddress + item.sourceRemarkAddress}}
        </div>
        <div class="order-item">
          {{ handleAddressDesc(item.type)[1] }}
          ：{{item.targetAddress + item.targetRemarkAddress}}
        </div>
        <div class="order-item">
          总计金额
          ：{{item.amount}}元
        </div>
        <div class="order-item order-status">
          订单状态
          ：{{item.orderStatusDesc}}
        </div>
        <div class="order-item">
          {{handleTimeDesc(item.type)}}
          ：{{handleTime(item.requireTime)}}
        </div>
        <time class="time">{{handleTime(item.addTime)}}</time>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { formatTime } from '@/utils/util';

export default {
  props: {
    data: Array,
  },
  name: 'OrderList',
  methods: {
    // 处理时间说明
    handleTimeDesc(type) {
      const timeDescList = ['送货时间', '发货时间', '取货时间', '排队时间'];
      return timeDescList[type - 1];
    },
    handleTime(time) {
      const date = new Date(time);
      return formatTime(date);
    },
    // 处理地址说明
    handleAddressDesc(type) {
      const descList = [['收货地址', '购买地址'], ['发货地址', '收货地址'], ['取货地址', '收货地址'], ['排队地址', '备注地址']];
      return descList[type - 1];
    },
  },
};
</script>

<style lang="less">
  .grab-list-con {
    margin-bottom: 15px;

    .el-row {
      margin-bottom: 5px;

      .el-card {
        width: 90%;

        .order-item {
          font-size: 14px;
          margin-bottom: 30px;
        }

        .order-status {
          color: red;
        }

        .time {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
</style>
