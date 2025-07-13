import Vue from 'vue'
import App from './App.vue'

//引入vue-router
import VueRouter from "vue-router";
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false


//应用vue-router插件
Vue.use(VueRouter);
//应用element-ui插件
Vue.use(ElementUI);
new Vue({
    render: h => h(App),
    router
}).$mount('#app')
