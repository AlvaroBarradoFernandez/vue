import Vue from 'vue'
import Router from 'vue-router'
import principal from '@/components/principal'
import LoginRegistro from '@/components/LoginRegistro'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'principal',
      component: principal
    }
  ]
})
