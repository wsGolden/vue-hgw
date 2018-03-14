<template>
  <div class="home">
     <app-header></app-header>
    
     <img src="../../../static/images/banner.jpg" alt="">
      <app-nav></app-nav>
      <app-good></app-good>
         <app-footer-wrap></app-footer-wrap>
         <back-top></back-top>
      <app-footer></app-footer>

  </div>

</template>

<script>
import AppHeader from './Header'
import AppNav from './Nav'
import AppGood from './Goods'
import AppFooter from '../common/Footer'
import AppFooterWrap from '../common/Footer-wrap'
import BackTop from '../common/backTop/backTop'
export default {
    name:'home',
		data(){
            return{
                
            }
		},
		components:{
			AppHeader,AppNav,AppGood,AppFooter,AppFooterWrap,BackTop
		}
}

</script>
<style lang='scss' scoped>
    .home{
        img{
              display:block;
            width: 100%;
            height: 162px;
            margin-top: 70px
          
        }
    }
</style>
