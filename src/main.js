//导入Vue库
import Vue from 'Vue';
import VueRouter from 'vue-router'

// 启动Vue插件
Vue.use(VueRouter);
//导入根组件
import AppComponent from './component/App.vue';

// 导入路由配置
import routerConfig from './router/router.js';
import apiConfig from './js/api_config';
import axios from './js/axios_config';

//扩展实例成员
Vue.prototype.axios = axios;
Vue.prototype.api = apiConfig;

//渲染根组件到占位标签上

new Vue({
   el:'#app',
  render:c => c(AppComponent),
  router:new VueRouter(routerConfig)
});