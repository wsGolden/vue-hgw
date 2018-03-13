import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import Detail from '../components/Detail/Detail.vue'
import Search from '../components/common/Search/Search.vue'
import SearchItem from '../components/common/Search/SearchItem.vue'
import Discovery from '../components/Discovery/Discovery.vue'
import Category from '../components/Category/Category.vue'
import User from '../components/User/User.vue'
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
    },
    {
      path: '/discovery',
      name: 'Discovery',
      component: Discovery
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
