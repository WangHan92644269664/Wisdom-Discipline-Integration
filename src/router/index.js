import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Data from "../pages/Data/Data"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component:Header
    },
    {
      path: '/data',
      name: 'Data',
      component:Data
    }
  ]
})
