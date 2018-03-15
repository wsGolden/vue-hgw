import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
//详情
import Detail from '../components/Detail/Detail.vue'
//搜索
import Search from '../components/common/Search/Search.vue'
import SearchItem from '../components/common/Search/SearchItem.vue'
//发现
import Discovery from '../components/Discovery/Discovery.vue'
//类目
import Category from '../components/Category/Category.vue'
//我的商城
import User from '../components/User/User.vue'
//登录
import Login from '../components/Login/Login.vue'
//注册
import Register from '../components/Register/Register.vue'
import GeneralRegister from '../components/Register/GeneralRegister.vue'
import MobileRegister from '../components/Register/MobileRegister.vue'
//购物车
import Cart from '../components/Cart/Cart.vue'

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
    },
    {
    	path: '/login',
      name: 'Login',
      component: Login
    },
    {
    	path: '/register',
      name: 'Register',
      component: Register,
      redirect:{name:'GeneralRegister'},
      children:[
        {path:'general',name:'GeneralRegister',component:GeneralRegister},
        {path:'mobile',name:'MobileRegister',component:MobileRegister}
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
