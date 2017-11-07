// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import qs from "qs"
import Vuex from 'vuex'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'
import opts from "./config/base"


Vue.config.productionTip = false;
axios.defaults.baseURL = opts.serviceConfig.baseURL;
axios.defaults.transformRequest = [function (data) {
    let postdata = {
      token:"this is token",
      type:1,
      data:data
    }
    return qs.stringify(postdata);
}];
Vue.prototype.$http = axios;
Vue.use(Vuex)
Vue.use(ElementUi)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
