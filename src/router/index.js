import Vue from 'vue'
import Router from 'vue-router'
import MainRetention from '@/pages/MainRetention'
import MainIndex from '@/pages/MainIndex'
import MainExhibit from '@/pages/MainExhibit'
import MainUserTypeRate from '@/pages/MainUserTypeRate'
import MainUserTypeNum from '@/pages/MainUserTypeNum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainIndex',
      component: MainIndex
    },
    {
      path: '/main_retention_rate/',
      name: 'MainRetention',
      component: MainRetention
    },
    {
      path: '/main_exhibit/',
      name: 'MainExhibit',
      component: MainExhibit
    },
    {
      path: '/main_user_type_rate/',
      name: 'MainUserTypeRate',
      component: MainUserTypeRate
    },
    {
      path: '/main_user_type_num/',
      name: 'MainUserTypeNum',
      component: MainUserTypeNum
    }
  ]
})
