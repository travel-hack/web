import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Home from './views/Home.vue'
import PrivacyPolicy from './views/PrivacyPolicy.vue'
import Terms from './views/Terms.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/terms-and-conditions',
            name: 'terms',
            component: Terms
        }
  ]
})
