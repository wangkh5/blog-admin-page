import Vue from 'vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router.js';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
Vue.use(ElementUI);

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

// 设置请求的根路径
Vue.http.options.root = '/';
// Vue.http.options.root = 'http://127.0.0.1';
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
// Vue.http.options.emulateJSON = true;

new Vue({
  el: '#app',
  render: h => h(App),
  router
});