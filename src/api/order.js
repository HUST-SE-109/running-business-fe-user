import request from '@/utils/request';

// 获取帮我买产品列表
const fetchHelpBuyGoodsList = () => request({
  url: '/index/helpbuy',
  method: 'get',
});

// 获取帮我送产品列表
const fetchHelpSendGoodsList = () => request({
  url: '/index/helpsend',
  method: 'get',
});

// 获取帮我取产品列表
const fetchHelpGetGoodsList = () => request({
  url: '/index/helpget',
  method: 'get',
});

// 获取代排队产品列表
const fetchHelpQueueList = () => request({
  url: '/index/helpqueue',
  method: 'get',
});

// 下单
const placeOrder = (businessId, data) => request({
  url: `/order/${businessId}`,
  method: 'post',
  data,
});

// 支付订单
const payOrder = data => request({
  url: '/order/pay',
  method: 'post',
  data,
});

// 根据订单 id 获取订单详细信息
const getOrderInfoById = id => request({
  url: `/order/${id}`,
  method: 'get',
});

// 申请退款
const refundOrder = data => request({
  url: '/order/refund',
  method: 'post',
  data,
});

// 查询退款列表

// 根据订单 ID 查询退款详细信息
const getRefundInfoById = id => request({
  url: `/order/refund?orderId=${id}`,
  method: 'get',
});

// 根据经纬度计算距离和跑腿费
const getDistanceAndMoney = params => request.get('/index/distance/money', {
  params,
});


export {
  fetchHelpBuyGoodsList,
  fetchHelpSendGoodsList,
  fetchHelpGetGoodsList,
  fetchHelpQueueList,
  placeOrder,
  payOrder,
  getOrderInfoById,
  refundOrder,
  getRefundInfoById,
  getDistanceAndMoney,
};
