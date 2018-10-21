import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
// import Home from './views/Home.vue'
import IndexPage from './views/IndexPage.vue'
import PrivacyPolicy from './views/PrivacyPolicy.vue'
import Terms from './views/Terms.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
        {
            path: '/',
            name: 'index',
            component: IndexPage
        },
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: IndexPage
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/privacy-policy',
            name: '/privacy-policy',
            component: PrivacyPolicy
        },
        {
            path: '/terms-and-conditions',
            name: 'terms',
            component: Terms
        }
  ]
})
