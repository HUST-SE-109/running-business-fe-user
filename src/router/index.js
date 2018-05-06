import Vue from 'vue';
import Router from 'vue-router';
import { routers } from './route';
import { setTitle } from '../utils/util';
import { getToken } from '../utils/auth';


Vue.use(Router);

const RouterConfig = {
  routes: routers,
};

const router = new Router(RouterConfig);

router.beforeEach((to, from, next) => {
  setTitle(to.meta.title);
  next();
});


router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' });
    }
  }
  next();
});

export default router;
