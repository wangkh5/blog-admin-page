// 入口文件
console.log('OK')

import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter)
import router from './router.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});