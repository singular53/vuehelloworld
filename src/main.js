import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import HiWorld from '@/components/HiWorld.vue'
Vue.component('HiWorld',HiWorld)


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/main.css'

Vue.use(ElementUI);

import Cookies from 'js-cookie'
Vue.prototype.$jsCookie = Cookies


let bus = new Vue()
Vue.prototype.$bus = bus




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
