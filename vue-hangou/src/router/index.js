import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import Detail from '../components/Detail/Detail.vue'
import Search from '../components/common/Search/Search.vue'
import SearchItem from '../components/common/Search/SearchItem.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
     {
      path: '/searchitem',
      name: 'searchitem',
      component: SearchItem
    }
  ]
})
