<template>
    <div class="searchitem">
        <app-head></app-head>
     
        <div id="product_list" class="list">
    <ul class="goods-secrch-list" 
         v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        >
			<app-food v-for="food in foods" :key="food.goods_id" :food="food"></app-food>
			
			<!--<li class="loading"><div class="spinner"><i></i></div>商品数据读取中...</li>-->
			
	</ul>
  </div>
  <back-top></back-top>
        <app-footer></app-footer>
    </div>

</template>
<script>
import { Toast } from 'mint-ui';
import bus from '../../../modules/bus'
import axios from 'axios'
import AppHead from './SearchHead.vue'
import AppFood from './Searchsome.vue'
import { InfiniteScroll } from 'mint-ui'
import BackTop from '../backTop/backTop'
import AppFooter from '../Footer.vue'
// http://www.hangowa.com/mo_bile/index.php?act=goods&op=goods_list&keyword=%E8%8B%B9%E6%9E%9C&page=10&curpage=1&keyword=%E8%8B%B9%E6%9E%9C
export default {
    name:"searchitem",
    data(){
        return{
             foods:[],
             curpage:1,
             page:10,
             loading:false,
             hashMore:true,
        }
    },
    components:{
        AppHead,AppFood,BackTop,AppFooter
    },
    methods:{
         getGoods(goodWord){
          if(!this.hashMore){
              //提示：没有更多数据了
              Toast({
                message: '没有更多数据了',
                position: 'bottom',
                duration: 1500
              });
              return ;
          }
          //提示：请稍等...
            let toast = Toast({
                message: '正在加载...',
                iconClass: 'fa fa-spinner fa-pulse',
                duration:-1
            });
          this.loading = true
          let {page,curpage} = this
                // console.log()
			axios.get(this.$root.config.host+'it/mo_bile/index.php?act=goods&op=goods_list&keyword='+goodWord+'&page='+this.page+'&curpage='+curpage+'&keyword='+goodWord  
            ).then(res=>{
                     toast.close()
                    // console.log(res)
                    this.foods = this.foods.concat(res.data.datas.goods_list)
                    this.hashMore = Boolean(res.hasmore)
                    this.curpage++
                    this.loading=false
				})
			},
            loadMore () {
                this.getGoods(this.$route.params.sears)
                this.getGoods(this.$route.params.idd)
                this.getGoods(this.$route.params.cates)
            },
	}
}
</script>
<style lang="scss" scoped>
 button{

                    margin-top: 20em;
                }
        .goods-secrch-list {
                display: block;
                margin-top: 50px;
               
            }
</style>
