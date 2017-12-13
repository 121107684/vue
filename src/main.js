// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import opts from "./config/base"
import publicfun from "./components/publicfun/publicfun" 

Vue.config.productionTip = false;

Vue.use(Vuex)
Vue.use(ElementUi);
Vue.use(publicfun)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
