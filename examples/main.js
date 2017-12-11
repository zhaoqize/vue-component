import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import zVue from '../src/index';

Vue.use(VueRouter);
Vue.use(zVue);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
  routes: [
    {
      path: '/card',
      component: require('./routers/card.vue').default
    }
  ]
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
