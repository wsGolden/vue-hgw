<template>
  <div class="app-goods">
  		<div v-for="good in goods" :key="good.title" class="goods-box">
			  <div class="title">
			  {{good.goods.title}}
			  </div>
			  <div class="dexc">
				  <span class="time">
						小编向您推荐以下商品
				  </span>
			</div>
			  	<ul class='goods-list'>
				  	<li class="good-item" v-for="item in good.goods.item" :key="item.id">
					  	<div @click="toDetail(item.goods_id)" class="app-goodsitem">
							  <div class="goods-pic">
								  <img :src="item.goods_image" alt="">
							  </div>
							  <dl class="goods-info">
							  		<dt class="goods-name">
									  	{{item.goods_name}}
									  </dt>
									  <dt class="goods-price">
										  ￥<em >{{item.goods_promotion_price}}</em>
									  </dt>
							  </dl>
						  </div>
					  </li>
				  </ul>
				  
		  </div>
  </div>
</template>
<script>
import axios from 'axios'
// http://www.hangowa.com/mo_bile/index.php?act=index
export default {
    name:"app-goods",
    data(){
			return{
				//将获取到的数据放入到films数组中
				goods:[]	
			}
	},
    methods:{
    getGoods(){

				axios.get(this.$root.config.host+'mz/mo_bile/index.php')
					
				.then(res=>{
                    // console.log(res)
					this.goods = res.data.datas.list.slice(1,4)
					// console.log(this.goods)
					// console.log(this.goods[0])
					// console.log( res.good.goods.item.goods_id)
				})
			},
			toDetail(id){
//				this.$router.push({name:'detail',params:{id},query:{name}})
//	$router.push方法可以进行页面的跳转
				this.$router.push({name:'Detail',params:{id}})
			}
		},
		created(){
			this.getGoods()
		},

}
</script>
<style lang="scss" scoped>
		.app-goods{
			.goods-box{
				margin-top: 10px;
				width: 100%;
				background: #fff;
				.title{
					    font-size: 0.7rem;
						font-weight: normal;
						padding: 0.5rem 0 0;
						text-align: center;
						line-height: 0.8rem;
						border-left: 0;
						color: #333;
				}
				.dexc{
					    font-size: 0.5rem;
						font-weight: normal;
						text-align: center;
						line-height: 0.8rem;
						border-left: 0;
						color: #333;
						.time{
							    color: #999;
								display: inline-block;
								position: relative;
						}
				}
				.goods-list{
					background-color: #fff;
					min-height: 510px;
					padding-right: 10px;
					padding-left: 10px; 
					display: flex;
					flex-flow:wrap;
					.good-item{
						width: 48%;
						padding: 5px 2.5px 0px;
						//   display: inline-block;
						margin-bottom:0px;
						.app-goodsitem{
							 display: block;
							 .goods-pic{
								     width: 100%;
									img{
										width: 100%;
									 }
							 }
							 .goods-info{
								 padding: 0.2rem;
								.goods-name{
									    display: block;
										font-size: 0.65rem;
										line-height: 0.8rem;
										color: #000;
										height: 1.6rem;
										overflow: hidden;
								}
								.goods-price{
									    display: block;
										font-size: 0.7rem;
										line-height: 1rem;
										height: 1rem;
										margin-top: 0.4rem;
										padding-top: 0.4rem;
										color: #DB4453;
										border-top: solid 0.05rem #EEE;
										font-weight: 600;
		
										
								}
							 }
						}	
					}
				}
			}
		}
		
</style>

