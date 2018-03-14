<template>
	<div class="discovery-goods">
		<div class="goods-item" v-for="item in GoodsData" :key="item.title">
			<h2>{{item.title}}</h2>
			<ul class="goods-list">		
				<li v-for="i in item.item" :key="i.goods_id">
					<div @click="toDetail(i.goods_id)" class="goodsitem">
						<div class="goods-pic">
							<img :src="i.goods_image" alt="" style="display: inline;">
						</div>
						<dl class="goods-info">
							<dt class="goods-name">{{i.goods_name}}</dt>
							<dd class="goods-price">￥<em>{{i.goods_promotion_price}}</em></dd>
						</dl>
					</div>
				</li>
		
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'discovery-goods',
		props:['GoodsData'],
		methods:{
			toDetail(id){
				this.$router.push({name:'Detail',params:{id}})
			}
		}
		
	}
</script>

<style lang="scss" scoped>
.goods-item{
	background-color: #fff;
	h2{
		font-size: 0.7rem;
	    font-weight: normal;
	    padding: 0.5rem 0 0;
	    text-align: center;
	    line-height: 0.8rem;
	    border-left: 0;
	    color: #333;
	    height: 0.8rem;
    	margin: 0.5rem 0 0.5rem 0.3rem;
	}
	.goods-list{
		font-size: 0;
    	margin-bottom: 0.5rem;   	
    	li{
    		background-color: #FFF;
		    vertical-align: top;
		    display: inline-block;
		    width: 47%;
		    overflow: hidden;
		    border-radius: 0.2rem;
		    .goodsitem{
		    	display: block;
		    	.goods-pic{
		    		width: 100%;
		    		img{
		    			width: 100%;
		    		}
		    	}
		    	.goods-info{
		    		padding: 0.2rem;
		    		dt{
		    			display: block;
					    font-size: 0.65rem;
					    line-height: 0.8rem;
					    color: #000;
					    height: 1.6rem;
					    overflow: hidden;
		    		}
		    		dd{
		    			display: block;
					    font-size: 0.55rem;
					    line-height: 1rem;
					    height: 1rem;
					    margin-top: 0.4rem;
					    padding-top: 0.4rem;
					    color: #DB4453;
					    border-top: solid 0.05rem #EEE;
					    em{
					    	font-size: 0.7rem;
    						font-weight: 600;
					    }
		    		}
		    	}
		    }
    	}
    	
	}
}
</style>