import Vue from 'vue'
import Router from 'vue-router'
import VipRegister from '../pages/VipRegister'
import VipLogin from '../pages/VipLogin'
import VipRush from '../pages/VipRush'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/VipRegister',
      name: 'VipRegister',
      component: VipRegister
    },
    {
      path: '/VipLogin',
      name: 'VipLogin',
      component: VipLogin
    },
    {
      path: '/VipRush',
      name: 'VipRush',
      component: VipRush
    }
  ]
})
