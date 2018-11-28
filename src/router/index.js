import Vue from 'vue'
import Router from 'vue-router'
import MainRetentionRate from '@/pages/MainRetentionRate'
import MainRetentionNum from '@/pages/MainRetentionNum'
import MainExhibit from '@/pages/MainExhibit'
import MainUserTypeRate from '@/pages/MainUserTypeRate'
import MainUserTypeNum from '@/pages/MainUserTypeNum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main_retention_rate/',
      name: 'MainRetentionRate',
      component: MainRetentionRate
    },
    {
      path: '/main_retention_num/',
      name: 'MainRetentionNum',
      component: MainRetentionNum
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
