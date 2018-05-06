// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import BaiduMap from 'vue-baidu-map';

import 'normalize.css/normalize.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App';
import router from './router/index';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(BaiduMap, {
  ak: 'NQP6xgb88wo8wlDVZdWuWHrKFPNtvN3U',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
