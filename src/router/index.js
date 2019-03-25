import Vue from 'vue'
import Router from 'vue-router'
import MainRetention from '@/pages/MainRetention'
import MainIndex from '@/pages/MainIndex'
import MainExhibit from '@/pages/MainExhibit'
import ItemExhibit from '@/pages/ItemExhibit'
import MainUserType from '@/pages/MainUserType'
import MainSearch from '@/pages/MainSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainIndex',
      component: MainIndex
    },
    {
      path: '/main_retention/',
      name: 'MainRetention',
      component: MainRetention
    },
    {
      path: '/main_exhibit/',
      name: 'MainExhibit',
      component: MainExhibit
    },
    {
      path: '/read_event/',
      name: 'ItemExhibit',
      component: ItemExhibit
    },
    {
      path: '/main_user_type/',
      name: 'MainUserType',
      component: MainUserType
    },
    {
      path: '/search/',
      name: 'MainSearch',
      component: MainSearch
    }
  ]
})
