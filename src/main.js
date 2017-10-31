// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import opts from "./config/base"
import qs from "qs"

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
