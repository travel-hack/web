import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
// import Axios
import Axios from 'axios';
// instantiate axios
Vue.prototype.$axios = Axios;
// import Moment
import moment from 'moment'
Vue.prototype.$moment = moment;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
