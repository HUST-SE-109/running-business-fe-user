import Vue from 'vue';
import Router from 'vue-router';
import { routers } from './route';


Vue.use(Router);

const RouterConfig = {
  routes: routers,
};

const router = new Router(RouterConfig);

export default router;
