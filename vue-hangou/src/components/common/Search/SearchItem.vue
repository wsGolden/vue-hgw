<template>
    <div class="searchitem">
        <app-head></app-head>
     
        <div id="product_list" class="list">
    <ul class="goods-secrch-list" >
			<app-food v-for="food in foods" :key="food.goods_id" :food="food"></app-food>
			
			<!--<li class="loading"><div class="spinner"><i></i></div>商品数据读取中...</li>-->
			
	</ul>
  </div>
    </div>

</template>
<script>
import bus from '../../../modules/bus'
import axios from 'axios'
import AppHead from './SearchHead.vue'
import AppFood from './Searchsome.vue'
import {mapState} from 'vuex'
// http://www.hangowa.com/mo_bile/index.php?act=goods&op=goods_list&keyword=%E8%8B%B9%E6%9E%9C&page=10&curpage=1&keyword=%E8%8B%B9%E6%9E%9C
export default {
    name:"searchitem",
    data(){
        return{
            //  mmm:"",
             foods:[]
        }
      
    },
    components:{
        AppHead,AppFood
    },
    computed:{
        ...mapState({
				mmm:state=>state.search.message
			})
    },
    methods:{
         getGoods(qqq){

                // console.log()
				axios.get(this.$root.config.host+'it/mo_bile/index.php?act=goods&op=goods_list&keyword='+qqq+'&page=10&curpage=1&keyword='+qqq)
					
				.then(res=>{
                    console.log(res)
                    
                    this.foods = res.data.datas.goods_list
                    console.log(this.foods)
					// this.goods = res.data.datas.list.slice(1,4)
					// console.log(this.goods)
					// console.log(this.goods[0])
					// console.log( res.good.goods.item.goods_id)
				})
			}
		},
        mounted: function() {
                console.log(this.mmm)
                this.getGoods(this.mmm)
        },

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
