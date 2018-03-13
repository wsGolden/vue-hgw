<template>
<div @click="toDetail(food.goods_id)" class="fooditem">
    
    <li  class="goods-item">
				<span class="goods-pic">
					<a href="javascript:;">
						<img :src="food.goods_image_url">
					</a>
				</span>
				<dl class="goods-info">
					<dt class="goods-name">
						<a href="javascript:;">
							<h4>{{food.goods_name}}</h4>
							<h6>【特价包邮】鸡平时吃艾草   吃虫子  喝山泉水  好品质</h6>
						</a>
					</dt>
					<dd class="goods-sale">
						<a href="javascript:;">
							<span class="goods-price">￥<em>{{food.goods_price}}</em>
								
							</span>
							
							</a>
						</dd>
						<dd class="goods-assist">
							<a href="javascript:;">
								<span class="goods-sold">销量
									<em>{{food.goods_salenum}}</em>
								</span>
							</a>
							<div class="goods-store">
							
								<a href="javascript:;">{{food.store_name}}<i></i></a>
							
								<div class="" style="display: none;"></div>
							</div>
						</dd>
					</dl>
			</li>
       </div>
</template>

<script>
export default {
    props:["food"],
    methods:{
        toDetail(id){
        //				this.$router.push({name:'detail',params:{id},query:{name}})
        //	$router.push方法可以进行页面的跳转
                        this.$router.push({name:'Detail',params:{id}})
        },
    }
    	
    
}
</script>
<style lang="scss" scoped>
         .goods-item {
                        background-color: #FFF;
                        display: block;
                        clear: both;
                        position: relative;
                        z-index: auot;
                        .goods-pic {
                                display: block;
                                width: 4.62rem;
                                height: 4.62rem;
                                padding: 0.38rem;
                                position: absolute;
                                z-index: 1;
                                top: 0;
                                left: 0;
                                a{
                                    width: 100%;
                                    height: 100%;
                                    display: block;
                                    color: #111;
                                    img{
                                        display: block;
                                            width: 100%;
                                            height: 100%;
                                    }
                                }
                            }
                            .goods-info {
                                display: block;
                                height: 4.85rem;
                                padding: 0.38rem 0.38rem 0 0;
                                margin-left: 5.38rem;
                                border-bottom: solid 0.05rem #EEE;
                                .goods-name {
                                        display: block;
                                        height: 2.4rem;
                                        overflow: hidden;
                                        a {
                                            display: block;
                                            color: #111;
                                            h4 {
                                                font-size: 0.65rem;
                                                line-height: 0.8rem;
                                                height: 1.6rem;
                                                overflow: hidden;
                                            }
                                            h6 {
                                                font-size: 0.5rem;
                                                color: #999;
                                                line-height: 0.9rem;
                                                height: 0.9rem;
                                                white-space: nowrap;
                                                text-overflow: ellipsis;
                                                overflow: hidden;
                                            }
                                        }
                                    }
                                    .goods-sale {
                                        display: block;
                                        height: 0.9rem;
                                        padding: 0.1rem 0;
                                        overflow: hidden;
                                        margin-left: 0px;
                                         a {
                                            display: block;
                                            color: #111;
                                            .goods-price {
                                                    color: #EC5464;
                                                    font-size: 0.6rem;
                                                    line-height: 0.9rem;
                                                    display: block;
                                                    float: left;
                                                    font-weight: 600;
                                                    em {
                                                        font-size: 0.8rem;
                                                        line-height: 0.9rem;
                                                        vertical-align: top;
                                                        display: inline-block;
                                                    }
                                                }
                                        }
                                    }
                                    .goods-assist {
                                            display: block;
                                            height: 1rem;
                                            padding-bottom: 0.2rem;
                                            overflow: hidden;
                                             a {
                                                display: block;
                                                color: #111;
                                                .goods-sold {
                                                        font-size: 0.55rem;
                                                        line-height: 1rem;
                                                        color: #999;
                                                        display: block;
                                                        float: left;
                                                        width: 40%;
                                                        height: 1rem;
                                                        margin-left: 0px;
                                                        em {
                                                                color: #000;
                                                                vertical-align: middle;
                                                                font-weight: 600;
                                                            }
                                                    }
                                            }
                                            .goods-store {
                                                    float: right;
                                                    font-size: 0.55rem;
                                                    line-height: 1rem;
                                                    text-align: right;
                                                    width: 60%;
                                                    height: 1rem;
                                                    a {
                                                          display: block;
                                                            color: #777;
                                                            white-space: nowrap;
                                                            overflow: hidden;
                                                              
                                                        }
                                                }
                                        }
                            }
                    }
</style>
