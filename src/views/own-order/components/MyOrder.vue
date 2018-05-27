<template>
  <div class="my-order-con">
    <OrderList :data="orderList"></OrderList>
    <el-row type="flex" justify="center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import OrderList from './MyOrder/OrderList';
import { fetchUserOrderList } from '@/api/user';

export default {
  name: 'MyOrder',
  components: { OrderList },
  data() {
    return {
      orderList: [],
      total: 100,
      params: {
        size: 10,
      },
    };
  },
  mounted() {
    this.fetchData(this.params);
  },
  methods: {
    fetchData(params) {
      fetchUserOrderList(params)
        .then(({ data: { code, data } }) => {
          if (code === '200') {
            this.total = data.totalCount;
            this.orderList = data.items;
          }
        });
    },
    handleCurrentChange(page) {
      const params = {
        page,
        ...this.params,
      };
      this.fetchData(params);
    },
  },
};
</script>

<style scoped>

</style>
