<template>
	<div class="detail">
        <div class="header-l"> <a class="header-nav" href="javascript:history.go(-1)"> <i class="fa fa-angle-left"></i> </a> 
            <a class="header-nav" @click="toggleNav()" href="javascript:void(0);"><i class="fa fa-ellipsis-h"></i></a>
            <nctouch-nav  v-if="isNavShow" :isNavShow="isNavShow" :toggleNav="toggleNav"></nctouch-nav>
        </div>
        
        <div class="goods-detail-top swiper-container">
			<div class="swiper-wrapper">
				<div v-for='goodi in goods_image' :key="goodi.id" class="goods-detail-pic swiper-slide" id="mySwipe" style="visibility: visible;" >
							<img :src="goodi">
							
				</div>
				
			</div>
			
	    </div>
		 <div class="swiper-pagination"></div>
    <div class="goods-detail-cnt">
		<div class="goods-detail-name">
			<dl> 
				<dt>{{goods.goods_info.goods_name}}</dt>
				<dd>{{goods.goods_info.goods_jingle}}</dd>
			</dl>
		</div>
		<div class="goods-detail-price">
			
				<dl>
					<dt>￥<em>{{goods.goods_info.goods_price}}</em></dt>
				</dl>
			
			<span class="sold">销量：{{goods.goods_info.goods_salenum}}件</span>
		</div>
		
		
		<div class="goods-detail-item">
			<div class="itme-name">送至</div>
			<div class="item-con">
				<a href="javascript:void(0);" id="get_area_selected">
				<dl class="goods-detail-freight">
					<dt><span id="get_area_selected_name">{{goods.goods_hair_info.area_name}}</span><strong id="get_area_selected_whether">{{goods.goods_hair_info.if_store_cn}}</strong></dt>
					<dd id="get_area_selected_content">{{goods.goods_hair_info.content}}</dd>
				</dl>
				</a>
			</div>
			<div class="item-more location"></div>
		</div>
		
		<div class="goods-detail-item" id="goods_spec_selected">
			<div class="itme-name">已选</div>
			<div class="item-con">
				<dl class="goods-detail-sel">
					<dt>
						
						<span>默认</span>
						
					</dt>
				</dl>
			</div>
			<div class="item-more"></div>
		</div>
		
		<div class="goods-detail-comment" id="goodsEvaluation1">
			<div class="title">
				<a id="goodsEvaluation1" href="javascript:void(0);">商品评价<span class="rate">好评率<em>100%</em></span><span class="rate-num">（18人评价）</span><div class="item-more"></div></a>
			</div>
			<div class="comment-info">
				
			</div>
		</div>
		
		<div class="goods-detail-store">
			<a href="store.html?store_id=48">
				<div class="store-name"><i class="icon-store"></i>{{goods.store_info.store_name}}</div>
				<div class="store-rate">
					<span class="">描述相符
						<em>4.8</em>
						<i></i>
					</span>
					<span class="">服务态度
						<em>4.9</em>
						<i></i>
					</span>
					<span class="">发货速度
						<em>4.9</em>
						<i></i>
					</span>
				</div>
				<div class="item-more"></div>
			</a>
		</div>
		
		<div class="goods-detail-recom">
			<h4>店铺推荐</h4>
			<ul>
					<li v-for="more in mores" :key="more.goods_id">
						<div @click="toDetail(more.goods_id)" class="app-goodsitem">
							<div class="pic"><img :src="more.goods_image_url"></div>
							<dl>
								<dt>{{more.goods_name}}</dt>
								<dd>￥<em>{{more.goods_price}}</em></dd>
							</dl>
						</div>
						
					</li>
					
			</ul>
			
		</div>
		<div class="goods-detail-bottom"><a href="javascript:void(0);" id="goodsBody1">点击查看商品详情</a></div>
			<div class="goods-detail-foot">
				<div class="otreh-handle">
					<a href="javascript:void(0);" class="kefu"><i class="fa fa-headphones"></i><p>客服</p></a>
					<a href="../tmpl/cart_list.html" class="cart"> <i class="fa  fa-shopping-cart"></i><p>购物车</p><span id="cart_count"></span></a>
				</div>
				<div class="buy-handle ">
					
					<a @click="isShow=!isShow" href="javascript:void(0);" class="animation-up add-cart">加入购物车</a>
					
					<a href="javascript:void(0);" class="animation-up buy-now">立即购买</a>
				</div>
			</div>
	</div>
	<div v-if="isShow" id="product_detail_spec_html" class="nctouch-bottom-mask up">
		<div @click="isShow=!isShow" class="nctouch-bottom-mask-bg"></div>
		<transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
		<div v-if="isShow" class="nctouch-bottom-mask-block">
				<div class="nctouch-bottom-mask-tip"><i></i>点击此处返回</div>
					<div class="nctouch-bottom-mask-top goods-options-info">
						<div class="goods-pic">
						<img :src="goods_image[0]">
					</div>
					<dl>
						<dt>{{goods.goods_info.goods_name}}</dt>
						<dd class="goods-price">
						
									￥<em>{{goods.goods_info.goods_price}}</em>
								
							<span class="goods-storage">库存：{{goods.goods_info.goods_storage}}件</span>
						</dd>
					</dl>
					<a href="javascript:void(0);" class="nctouch-bottom-mask-close"><i></i></a>
				</div>
				<div class="nctouch-bottom-mask-rolling" id="product_roll">
					<div class="goods-options-stock" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
						
						
						
						
						
					</div>
				</div>
				<div class="goods-option-value">购买数量
					<div class="value-box">
						<span class="minus">
							<a  @click="num>0?num--:''" href="javascript:void(0);">&nbsp;</a>
						</span>
						<span>
							<input type="text" pattern="[0-9]*" class="buy-num" id="buynum" :value=num>
						</span>
						<span class="add">
							<a @click="num++" href="javascript:void(0);">&nbsp;</a>
						</span>
					</div>
				</div>
				<div class="goods-option-foot">
					<div class="otreh-handle">
						<a href="javascript:void(0);" class="kefu">
							<i class="fa fa-headphones"></i>
							<p>客服</p>
						</a> 
						<router-link :to="{name:'cart'}" class="cart">
							<i class="fa  fa-shopping-cart"></i>
							<p>购物车</p>
							<span id="cart_count1"></span>
						</router-link>
					</div>
					<div class="buy-handle ">
						
						<a href="javascript:void(0);" class="add-cart" id="add-cart"
						@click="CONSTROL_CAR_GOODS({
								id:goods.goods_info.goods_id,
								price:goods.goods_info.goods_price,
								name:goods.goods_info.goods_name,
								num,
								type:1,
								image:goods_image[0],
								})"
						>加入购物车</a>
						
						<a href="javascript:void(0);" class="buy-now" id="buy-now">立即购买</a>
					</div>
				</div>
		</div>
		</transition>
	</div>	
</div>
	
</template>

<script>
// http://www.hangowa.com/mo_bile/index.php?act=goods&op=goods_detail&goods_id=100616&key=
	//引入axios用来获取数据 下载方法cnpm i axios -S
	import axios from 'axios'
import Swiper from 'swiper'	
import NctouchNav from '../NctouchNav/NctouchNav.vue'
import {mapMutations} from 'vuex'
import {CONSTROL_CAR_GOODS} from '../../store/shop/const'
	export default{
        name:'detail',
		data(){
			return{
				//把用接口接收到的信息放入film对象里 cover是为了防止未获取到信息时上面的图片会出现报错信息
				goods:{goods_info:{},goods_hair_info:{},store_info:{}},
				goods_image:[],
				mores:[],
				add:{},
				isShow:false,
				num:1,
				isNavShow:false


			}
		},
		components:{
			NctouchNav
		},
		methods:{
			toggleNav(){				
				this.isNavShow = !this.isNavShow
			},
			getGoods(){
				//this.$root.config.host是在modules下的config文件里配置的域名
				//mz是和config目录里index文件配置的信息交互
				//this.$route.params.id可以获取到id值
				axios.get(this.$root.config.host+'sh/mo_bile/index.php?act=goods&op=goods_detail&goods_id='+this.$route.params.id+'&key=').then(res=>{
                    console.log(res)
					console.log(res.data.datas)
					this.goods = res.data.datas
					console.log(res.data.datas.goods_image.split(","))
					this.goods_image=res.data.datas.goods_image.split(",")
					console.log(res.data.datas.goods_commend_list)
					this.mores=res.data.datas.goods_commend_list

				})
			},
			 ...mapMutations([CONSTROL_CAR_GOODS]),
			toDetail(id){
//				this.$router.push({name:'detail',params:{id},query:{name}})
//	$router.push方法可以进行页面的跳转
				this.$router.push({name:'Detail',params:{id}})
			}
		},
		created(){
			//初始化数据时调用执行获取数据的方法
			this.getGoods()
			
		},
		mounted(){
//			console.log(this)
			//path
			this.$route.params.id
			// this.add=this.$route.params.id
			console.log(this.$route.params.id)
//			console.log(this.$route.params.id)
////			//query
//			console.log(this.$route.query.name)

	
		},
		updated(){
			new Swiper('.goods-detail-top',{
				loop:true,
				autoplay:true,
				 pagination: {
					el: '.swiper-pagination',
					},
			})
		}
	}
</script>

<style lang="scss" scoped>
 
            .header-l {
                display: block;
                width: 100%;
                height: 1.95rem;
                top: 0;
                left: 0;
                display: flex;
                justify-content: space-between;
				    position: fixed;
					z-index: 2 !important;
					top: 0;
					bottom: auto;
					left: 0;
					right: 0;
                .header-nav{
                    display: block;
                    width: 1.45rem;
                    height: 1.45rem;
                    margin: 0.2775rem;
                    padding: 0;
                    background: rgba(255,255,255,0.75);
                    border: solid 0.05rem #EEE;
                    border-radius: 100%;
                    opacity: 1;
                    i{
                              width: 60%;
                            height: 60%;
                            margin: 20%;
                            color:#000;
                    }
                }
            }
            .goods-detail-top{
                background-color: #FFF;
                display: block;
					
                z-index: -1;
                left: 0;
                right: 0;
                top: 0;
                .goods-detail-pic{
                    z-index: 1;
                    width: 100%;
                    margin: 0 auto;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }

            }
			.swiper-pagination{
				top:300px;
				left:140px;
				display: inline-block;
			margin-right: 0.25rem;
			}
.goods-detail-cnt { background: #F5F5F5; position: relative; z-index: 1; margin-top: 16rem;}
.goods-detail-top { background-color: #FFF; display: block; position: fixed; z-index: -1; left: 0; right: 0; top: 0;}
.goods-detail-pic { position: relative; overflow: hidden; z-index: 1; width: 16rem; margin: 0 auto;}
// .goods-detail-pic ul { overflow: hidden; position: relative; font-size: 0; white-space: nowrap;}
// .goods-detail-pic ul li { display: inline-block; position: relative; z-index: auto;}
.goods-detail-pic img { width: 100%; height: 100%;}
.goods-detail-turn { position: absolute; z-index: 2; bottom: 0.5rem; left: 50%; width: 6rem; margin-left: -3rem; text-align: center;}
.goods-detail-turn ul { font-size: 0; margin: 0 auto; white-space: nowrap;}
.goods-detail-turn ul li { display: inline-block; width: 0.35rem; height: 0.35rem; margin-right: 0.25rem; background-color: #BBB; border-radius: 100%;}
.goods-detail-turn ul li.cur { background-color: #ED5564;}

.goods-detail-top .round { margin: 0; position: absolute; z-index: 2; bottom: 0.75rem; right: 0.75rem; }
.goods-detail-top .round i { display: block; width: 100%; height: 100%; background-position: 50% 50%; background-repeat: no-repeat; background-size: 60%; opacity: 0.75;}
// .goods-detail-top .pd-collect { right: 0.75rem;}
// .goods-detail-top .round.pd-collect i { background-image: url(../images/favorite_r.png);}
// .goods-detail-top .round.pd-collect.favorate i { background-image: url(../images/favorite_rs.png);}

/*商品详情名称*/
.goods-detail-name { display: block; padding: 0.5rem 0.5rem 0.25rem 0.5rem; background-color: #FFF; border-top: solid 0.05rem #EEE;}
.goods-detail-name dt { display: block; font-size: 0.8rem; line-height: 1rem;}
.goods-detail-name dt span { display: inline-block; padding: 0 0.15rem; border-radius: 0.1rem; margin-right: 0.1rem; background-color: #ED5564; color: #FFF; font-size: 0.6rem; line-height: 0.9rem; vertical-align: middle; height: 0.9rem;}
.goods-detail-name dd {margin-left:0rem; margin-top: 0.15rem; font-size: 0.7rem; color: #777; line-height: 0.69rem;}

/*商品详情价格*/
.goods-detail-price { position: relative; z-index: 1; display: block; padding: 0 0.5rem; background-color: #FFF;}
.goods-detail-price dl { display: inline-block;}
.goods-detail-price dt { display: inline-block; font-size: 0.55rem; color: #DB4453; line-height: 1rem;}
.goods-detail-price dt em { font-size: 1rem;}
.goods-detail-price dd { display: inline-block; font-size: 0.55rem; text-decoration: line-through; color: #999; line-height: 0.9rem;}
.goods-detail-price .activity { display: inline-block; font-size: 0.45rem;}
.goods-detail-price .sold { position: absolute; z-index: 1; top: 0rem; right: 0.75rem; display: block; font-size: 0.55rem; line-height: 1rem; height: 1rem;}
.goods-detail-price .activity { font-size: 0.45rem; line-height: 0.6rem; vertical-align: middle; display: inline-block; height: 0.6rem; padding-right: 0.1rem; margin-top: 0.05rem; border: solid #EC5464 0.05rem; color: #EC5464;}
// .goods-detail-price .activity i { display: inline-block; vertical-align: middle; margin-right: 0.1rem; width: 0.6rem; height: 0.6rem; background: #ED5564 url(../images/mobile_w.png) no-repeat 50% 50%; background-size: 80%;}

/*商品详情项目*/
.goods-detail-item { position: relative; z-index: 1; padding: 0.5rem; background: #FFF; border-bottom: solid 0.05rem #EEE;}
.goods-detail-item .itme-name { position: absolute; z-index: 1; top: 0.5rem; left: 0.5rem; display: block; width: 1.6rem; height: 0.9rem; font-size: 0.6rem; color: #888; line-height: 0.9rem;}
.goods-detail-item .item-con { display: block; margin-left: 1.6rem;}
.goods-detail-item .item-con dl { display: block; line-height: 0.9rem;margin-top:0px;}
.goods-detail-item .item-con dt { font-size: 0.6rem; color: #333;}
.goods-detail-item .item-con dd { font-size: 0.55rem; color: #888;}
// .item-more { position: absolute; z-index: -1; top: 0.5rem; right: 0.5rem; display: block; width: 0.8rem; height: 0.9rem; background-image: url(../images/arrow_right_b.png); background-repeat: no-repeat; background-position: 50% 50%; background-size: 80%; opacity: 0.4;}
// .item-more.location { background-image: url(../images/location_b.png); opacity: 0.55;}
/*促销活动*/
.goods-detail-sale { position: relative; z-index: 1; margin-bottom: 0.4rem;}
.goods-detail-sale dt { display: inline-block; vertical-align: top; margin-right: 0.1rem;}
.goods-detail-sale dt i { display: inline-block; vertical-align: top; height: 0.7rem; padding: 0 0.1rem; margin-top: 0.1rem; font-size: 0.45rem; color: #FFF; line-height: 0.7rem; background: #ED5564; border-radius: 0.15rem;}
.goods-detail-sale dd { display: inline-block; vertical-align: top; font-size: 0.55rem; line-height: 0.9rem; color: #555;}
.goods-detail-sale dd.mansong-rule { display: block; margin-bottom: 0.1rem;}
.goods-detail-sale dd.mansong-rule em { font-weight: 600; color: #333;}
.goods-detail-sale dd.mansong-rule span { display: inline-block; vertical-align: middle; width: 0.8rem; height: 0.9rem;}
.goods-detail-sale dd.mansong-rule span img { width: 100%; height: 100%;}
.goods-detail-sale dd.gift-item { display: block; margin-bottom: 0.1rem;}
.goods-detail-sale dd.gift-item a { color: #555; text-decoration: underline;}
.goods-detail-sale dd.gift-item em { color: #333;}
/*商品详情领取代金券*/
.goods-detail-voucher { padding: 0.5rem;}
.goods-detail-voucher a { font-size: 0.6rem; color: #555; line-height: 1rem; display: block;}
.goods-detail-voucher i { display: inline-block; vertical-align: top;width: 0.4rem; height: 0.4rem; line-height: 0.4rem; text-align: center; padding: 0.1rem; margin: 0.2rem 0.2rem 0 0; font-size: 0.45rem; background-color: #ED5564; color: #FFF; border-radius: 0.1rem;}

/*地区运费*/
.goods-detail-freight {}
.goods-detail-freight dt strong { color: #ED5564; margin-left: 0.5rem;}
.goods-detail-freight dd { line-height: 0.9rem; margin-top: 0.2rem;}

/*虚拟订单线下店*/
.goods-detail-o2o { padding: 0;}
.goods-detail-o2o .tit { display: block; overflow: hidden; height: 0.9rem; padding: 0.4rem;}
.goods-detail-o2o .tit h3 { float: left; font-size: 0.6rem; line-height: 0.9rem; color: #888;}
.goods-detail-o2o .default { margin-left: 0.4rem ; border-top: solid #EEE 0.05rem; position: relative; z-index:1;}
.goods-detail-o2o .default a { display: block; margin-right: 3.5rem;}
.goods-detail-o2o .default dl { padding: 0.8rem 0;}
.goods-detail-o2o .default dt { display: block; font-size: 0.7rem; line-height: 0.9rem; font-weight: 600;}
.goods-detail-o2o .default dd { display: block; font-size: 0.6rem; line-height: 0.9rem; color: #555;}
.goods-detail-o2o .default p { position: absolute; z-index: 1; right: 0.5rem; top: 0.5rem; border-left: solid 0.05rem #EEE; padding-left: 0.5rem;}
// .goods-detail-o2o .default p a { display: block;  width: 2rem; height: 2rem; background-image: url(../images/tel_b.png); background-repeat: no-repeat; background-position: 50% 50%; background-size: 50%; opacity: 0.65; margin: 0;}
.goods-detail-o2o .more-location { border-top: solid #EEE 0.05rem; font-size: 0.6rem; line-height: 0.9rem; padding: 0.5rem; position: relative;}
.goods-detail-o2o .more-location a { display: block; color: #ED5564; font-weight: 600;}
// .goods-detail-o2o .more-location i { position: absolute; z-index:1; top: 0.5rem; right: 0.5rem; width: 0.8rem; height: 0.9rem; background-image: url(../images/arrow_right_b.png); background-repeat: no-repeat; background-position: 50% 50%; background-size: 80%; opacity: 0.4;}


/*已选规格*/
.goods-detail-sel { display: block;}
.goods-detail-sel dt { font-size: 0;}
.goods-detail-sel dt span { display: inline-block; height: 0.9rem; margin: 0 0.3rem 0.3rem 0; border: solid 0.05rem #CCC; font-size: 0.55rem; line-height: 0.9rem; padding: 0 0.2rem; color: #777;}
.goods-detail-sel dt span em { color: #333;}

.goods-detail-contract { padding-bottom: 0.5rem;}
.goods-detail-contract dt { display: block; height: 0.9rem; font-size: 0.6rem; line-height: 0.9rem; margin-bottom: 0.2rem; white-space: nowrap; overflow: hidden;}
.goods-detail-contract dd { display: block; font-size: 0;}
.goods-detail-contract dd span { display: inline-block; height: 0.65rem; margin-right: 0.5rem; font-size: 0.55rem; font-weight:600; color: #DB4453; line-height: 0.65rem;}
.goods-detail-contract dd span i { display: block; width: 0.6rem; height: 0.6rem; float: left; margin-right: 0.1rem;}
.goods-detail-contract dd span i img { width: 100%; height: 100%;}

/*商品详情评价*/
.goods-detail-comment { background-color: #FFF; padding: 0 0.5rem; margin-top: 0.5rem; border-top: solid #EEE 0.05rem; border-bottom: solid #EEE 0.05rem;}
.goods-detail-comment .title { display: block;height: 1.8rem; }
.goods-detail-comment .title a { display: block; position: relative; z-index: 1; height: 0.9rem; padding: 0.5rem 0; font-size: 0.6rem; line-height: 0.9rem; color: #888;}
.goods-detail-comment .title span { font-size: 0.55rem; margin-left: 1rem; color: #ED5564;}
.goods-detail-comment .title span em { font-size: 0.6rem; font-weight: 600; margin-left: 0.2rem;}
.goods-detail-comment .title .rate-num { position: absolute; z-index: 1; top: 0.5rem; right: 1rem; color: #888; font-size: 0.55rem;}
.goods-detail-comment .title .item-more { right: 0;}
.goods-detail-comment dl { display: block; padding-bottom: 0.4rem; border-top: solid 0.05rem #EEE;}
.goods-detail-comment dt { display: block; height: 0.9rem; padding: 0.4rem 0 0.2rem 0; line-height: 0.9rem; overflow: hidden;}
.goods-detail-comment dt .goods-raty { display: block; float: left; width: 3rem; height: 0.5rem; font-size: 0;}
// .goods-detail-comment dt .goods-raty i { display: inline-block; height: 0.5rem; background-image: url(../images/star_r.png); background-repeat: repeat-x; background-position: 0 0; background-size: contain;}
.goods-detail-comment dt .goods-raty i.star1 { width: 0.5rem;}
.goods-detail-comment dt .goods-raty i.star2 { width: 1rem;}
.goods-detail-comment dt .goods-raty i.star3 { width: 1.5rem;}
.goods-detail-comment dt .goods-raty i.star4 { width: 2rem;}
.goods-detail-comment dt .goods-raty i.star5 { width: 2.5rem;}
.goods-detail-comment dt .user-name { float: right; color: #555; font-size: 0.55rem;}
.goods-detail-comment dt time { float: right; width: 3rem; text-align: right; color: #888; font-size: 0.55rem;}
.goods-detail-comment dd { display: block; font-size: 0.55rem; line-height: 0.7rem;}


/*商品详情店铺*/
.goods-detail-store { display: block; position: relative; z-index: 1; padding: 0 0.5rem; margin: 0.5rem 0; background: #FFF; border: solid #EEE; border-width: 0.05rem;height: 3.5rem;}
.goods-detail-store .store-name { height: 0.9rem; padding: 0.5rem 0 0.25rem  0; font-size: 0.7rem; line-height: 0.9rem; color: #333; margin-bottom: 0.7rem}
// .goods-detail-store .store-name .icon-store { display: inline-block; width: 0.8rem; height: 0.9rem; vertical-align: top; margin-right: 0.2rem; opacity: 0.75;}
.goods-detail-store .store-rate { height: 0.7rem; padding: 0.4rem 0 0.5rem 0; border-top: solid 0.05rem #EEE; font-size: 0; }
.goods-detail-store .store-rate span { display: inline-block; width: 33.33%; height: 0.7rem; font-size: 0.55rem; line-height: 0.7rem; color: #888; }
.goods-detail-store .store-rate span em { display: inline-block; vertical-align: middle; font-size: 0.7rem; font-weight: 600;}
.goods-detail-store .store-rate span i { display: inline-block; vertical-align: middle; width: 0.7rem; height: 0.7rem; font-size: 0.45rem; line-height: 0.7rem; font-style: normal; text-align: center; border-radius: 0.1rem;}
.goods-detail-store .store-rate span.high em,
.goods-detail-store .store-rate span.equal em { color: #ED5564;}
.goods-detail-store .store-rate span.high i,
.goods-detail-store .store-rate span.equal i { color: #FFF; background-color: #ED5564}
.goods-detail-store .store-rate span.low em { color: #48CFAE;}
.goods-detail-store .store-rate span.low i { color: #FFF; background-color: #48CFAE;}

/*商品详情推荐*/
.goods-detail-recom { background: #FFF; padding: 0 0 0 0.5rem; margin: 0.5rem 0; background-color: #FFF; border: solid #EEE; border-width: 0.05rem; overflow: hidden;}
.goods-detail-recom h4 { display: block; height: 0.9rem; padding: 0.4rem 0; font-size: 0.6rem; color: #888; line-height: 0.9rem; }
.goods-detail-recom ul { font-size: 0;margin-top: 1rem}
.goods-detail-recom ul li { display: inline-block; width: 22%; margin: 0 3% 0.4rem 0;}
.goods-detail-recom ul li  a { display: block;}
.goods-detail-recom .pic { display: block; width: 3.225rem; height: 3.225rem; border: solid 0.05rem #EEE;}
.goods-detail-recom .pic img { display: block; width: 100%; height: 100%;}
.goods-detail-recom dl { margin-top: 0.2rem;}
.goods-detail-recom dt { display: block; overflow: hidden; height: 1.2rem; font-size: 0.5rem; line-height: 0.6rem; color: #777; margin-bottom: 0.2rem;}
.goods-detail-recom dd { font-size: 0.45rem; color: #333;margin-left: 0px}
.goods-detail-recom dd em { font-size: 0.55rem; }

/*商品详情选项*/
.goods-options-info { min-height: 3rem;}
.goods-options-info .goods-pic { position: absolute ; z-index: 1; top: 0.5rem; left: 0.5rem; width: 3rem; height: 3rem; background: #FFF;}
.goods-options-info .goods-pic img { width: 100%; height: 100%;}
.goods-options-info dl { margin-left: 4rem;}
.goods-options-info dt { font-size: 0.6rem; line-height: 0.75rem; margin: 0.2rem 0.6rem 0.4rem 0;}
.goods-options-info .goods-price { height: 1rem; font-size: 0.55rem; color: #DB4453; font-weight: 600; line-height: 1rem;}
.goods-options-info .goods-price em { font-size: 0.66rem;}
.goods-options-info .goods-price .activity { display: inline-block; height: 0.7rem; vertical-align: top; padding: 0 0.1rem; margin: 0.14rem 0 0 0.1rem; font-size: 0.45rem; line-height: 0.7rem; font-weight: lighter; color: #FFF; background-color: #ED5564; border-radius: 0.1rem;}
.goods-options-info .goods-storage { display: block; float: right; font-size: 0.5rem; line-height: 1rem; color: #888;}

.goods-options-stock { padding: 0.25rem 0.5rem;}
.goods-options-stork dl { display: block; overflow: hidden;}
.goods-options-stock dt { display: block; height: 0.9rem; padding: 0.1rem 0; font-size: 0.6rem; color: #888; line-height: 0.9rem;}
.goods-options-stock dd { display: block; font-size: 0rem;}
.goods-options-stock dd a { display: inline-block; height: 0.9rem; padding: 0.25rem 0.5rem; margin-left: 0.3rem; margin-bottom: 0.3rem; font-size: 0.55rem; color: #888; line-height: 0.9rem; background: #FFF; border: solid 0.05rem #BBB; border-radius: 0.15rem;}
.goods-options-stock dd a:first-child { margin-left: 0;}
.goods-options-stock dd a.current { padding: 0.28rem 0.53rem; color: #FFF; background: #ED5564; border: none;}
.goods-option-value { display: block; height: 1.2rem; padding: 0.5rem; margin-bottom: 2rem; line-height: 1.2rem; font-size: 0.6rem; color: #999; border-top: solid 0.05rem #EEE;}

.goods-detail-bottom { margin: 0.5rem 0 0rem 0rem; text-align: center;line-height:1rem}
.goods-detail-bottom a { display: inline-block; width: 100%; height: 1rem; margin: 0 auto; font-size: 0.6rem; line-height: 1rem; color: #999;}

/*商品详情底部*/
.goods-detail-foot { position: fixed; z-index: 1; top: auto; left: 0; right: 0; bottom: 0; height: 2rem; filter:progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr='#F2F5F5F5', endColorstr='#F2F5F5F5');background:rgba(245,245,245,0.95);}
.goods-detail-foot { height: 2rem; filter:progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr='#F2F5F5F5', endColorstr='#F2F5F5F5');background:rgba(245,245,245,0.95);}
.goods-option-foot { position: absolute; z-index:1; bottom: 0; left: 0; right: 0;}
.goods-detail-foot .otreh-handle,
.goods-option-foot .otreh-handle { float: left; width: 35%; font-size: 0;}
.goods-detail-foot .otreh-handle a,
.goods-option-foot .otreh-handle a { position: relative; z-index: auto; display: inline-block; height: 1.95rem; text-align: center; color: #333; border-top: solid 0.05rem #DDD;}
.goods-detail-foot .otreh-handle a.kefu,
.goods-option-foot .otreh-handle a.kefu { width: 44%;}
.goods-detail-foot .otreh-handle .cart,
.goods-option-foot .otreh-handle .cart { width: 55%; border-left: solid 0.05rem #DDD;}
.goods-detail-foot .otreh-handle a i,
.goods-option-foot .otreh-handle a i { display:block; width: 3rem; height: 3rem; margin: 0.15rem auto 0.05rem auto; background-repeat: no-repeat; background-position: 50% 50%; background-size: 80%; opacity: 0.65;}
.goods-detail-foot .otreh-handle a.kefu i,
// .goods-option-foot .otreh-handle a.kefu i { background-image: url(../images/kefu_b.png);}
.goods-detail-foot .otreh-handle a.cart i,
// .goods-option-foot .otreh-handle a.cart i { background-image: url(../images/cart_b.png);}
.goods-detail-foot .otreh-handle a p,
.goods-option-foot .otreh-handle a p { display: block; height: 0.8rem; font-size: 0.55rem; line-height: 0.8rem; }
.goods-detail-foot .otreh-handle a sup, 
.goods-option-foot .otreh-handle a sup { position: absolute; z-index: 1; top: 0.1rem; right: 0.5rem; min-width: 0.5rem; height: 0.5rem; font-size: 0.45rem; line-height: 0.5rem; color: #ED5564; text-align: center; border: solid 0.05rem #ED5564; border-radius: 0.3rem; }
.goods-detail-foot .buy-handle,
.goods-option-foot .buy-handle { float: right; width: 65%; font-size: 0;}
.goods-detail-foot .buy-handle a,
.goods-option-foot .buy-handle a { display: block; height: 2rem; font-size: 0.7rem; font-weight: 600; line-height: 2rem; color: #FFF; text-align: center;}
.goods-detail-foot .no-buy a,
// .goods-option-foot .no-buy a { filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); /* Firefox 3.5+ */ -webkit-filter: grayscale(100%); -moz-filter: grayscale(100%); -ms-filter: grayscale(100%); -o-filter: grayscale(100%); filter: grayscale(100%); filter: gray; opacity: 0.8;}
.goods-detail-foot .buy-handle a.add-cart,
.goods-option-foot .buy-handle a.add-cart { float: right; width: 55%; background-color: #FB6E52;}
.goods-detail-foot .buy-handle a.buy-now,
.goods-option-foot .buy-handle a.buy-now { background-color: #ED5564;}

/*图文描述*/
.fixed-tab-pannel { min-width: 320px; max-width: 640px; overflow: hidden;}
.fixed-tab-pannel embed[type="application/x-shockwave-flash"] { display: none;}
.fixed-tab-pannel p,
.fixed-tab-pannel div,
.fixed-tab-pannel table {width: 100% !important; font-size: 0.6rem !important;}
.fixed-tab-pannel img { width: 100% !important;}

/*商品评价*/
.product-eval-list {}
.product-eval-list ul {}
.product-eval-list li { padding: 0 0 0.5rem 0.5rem; margin-bottom: 0.25rem; background-color: #FFF;}
.product-eval-list .eval-user { position: relative; z-index: 1; display: block; height: 2rem; border-bottom: solid #EEE 0.05rem;}
.product-eval-list .eval-user .user-avatar { position: absolute; z-index: 1; top: 0.35rem; left: 0; display: block; width: 1.2rem; height: 1.2rem; border: solid #EEE 0.05rem;}
.product-eval-list .eval-user .user-avatar img { width: 100%; height: 100%;}
.product-eval-list .eval-user .user-name { display: block; height: 1rem; margin: 0 0 0 2rem; padding: 0.5rem 0; font-size: 0.6rem; line-height: 1rem;}
.product-eval-list .eval-user time { position: absolute; z-index: 1; top: 0.5rem; right: 0.5rem; height: 1rem; font-size: 0.55rem; color: #BBB; line-height: 1rem;}
.product-eval-list .goods-raty { display: block; height: 0.5rem; padding: 0.5rem 0 0; font-size: 0;}
// .product-eval-list .goods-raty i { display: inline-block; height: 0.5rem; background-image: url(../images/star_r.png); background-repeat: repeat-x; background-position: 0 0; background-size: contain;}
.product-eval-list .goods-raty i.star1 { width: 0.5rem;}
.product-eval-list .goods-raty i.star2 { width: 1rem;}
.product-eval-list .goods-raty i.star3 { width: 1.5rem;}
.product-eval-list .goods-raty i.star4 { width: 2rem;}
.product-eval-list .goods-raty i.star5 { width: 2.5rem;}
.product-eval-list .eval-con { padding: 0.2rem 0;}
.product-eval-list .eval-con dt { display: block; min-height: 0.9rem; margin: 0.2rem 0 0.4rem 0; font-size: 0.6rem; line-height: 0.9rem;}
.product-eval-list .eval-con dd { display: block; font-size: 0;}
.product-eval-list .eval-con dd a { display: inline-block; width: 1.6rem; height: 1.6rem; text-align: center; border: solid 0.05rem #EEE; margin-right: 0.4rem;}
.product-eval-list .eval-con dd a img { max-width: 1.6rem; max-height: 1.6rem;}
.product-eval-list .again-eval { height: 0.9rem; margin-top: 0.2rem; font-size: 0.55rem; line-height: 0.9rem; color: #555;}

.product-eval-list .eval-explain { font-size: 0.6rem; color: #ed5564; line-height: 0.8rem; padding: 0.5rem 0;}
		
	    .nctouch-bottom-mask{
	
			display: block;
			bottom: 0;
			position: fixed;
			z-index: 20;
			top: 0;
			left: 0;
			right: 0;
			.nctouch-bottom-mask-bg {
					display: block;
					position: absolute;
					z-index: 21;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background: rgba(0,0,0,0.65);
				}
				.nctouch-bottom-mask-block {
					display: block;
					position: absolute;
					z-index: 22;
					bottom: 0px;
					left: 0;
					right: 0;
					min-height: 12rem;
					background: #FFF;
					animation-duration: 5s;
					.nctouch-bottom-mask-tip {
							position: absolute;
							z-index: 1;
							top: -1.2rem;
							left: 0;
							right: 0;
							text-align: center;
							font-size: 0.6rem;
							font-weight: 600;
							line-height: 0.9rem;
							color: #FFF;
							text-shadow: 0 0 0.5rem rgba(0,0,0,0.5);
							i{								
								// background-image: url(../images/back_down.png);
								background-repeat: no-repeat;
								background-position: 50% 50%;
								background-size: 75%;
								width: 0.8rem;
								height: 0.9rem;
								display: inline-block;
								vertical-align: top;
								margin-right: 0.1rem;								
							}
						}
						.goods-options-info {
							min-height: 3rem;
							position: relative;
							z-index: 1;
							display: block;
							padding: 0.5rem;
							border-bottom: solid 0.05rem #EEE;
							.goods-pic {
									position: absolute;
									z-index: 1;
									top: 0.5rem;
									left: 0.5rem;
									width: 3rem;
									height: 3rem;
									background: #FFF;
									img {
										width: 100%;
										height: 100%;
									}
								}
								dl {
									margin-left: 4rem;
									 dt {
										font-size: 0.7rem;
										line-height: 0.75rem;
										margin: 0.2rem 0.6rem 0.4rem 0;
									}
									.goods-price {
											height: 1rem;
											font-size: 0.55rem;
											color: #DB4453;
											font-weight: 600;
											line-height: 1rem;
											margin-left:0px;
											 em {
														font-size: 0.66rem;
													}
											.goods-storage {
												display: block;
												float: right;
												font-size: 0.5rem;
												line-height: 1rem;
												color: #888;
											}
										}
								}
								.nctouch-bottom-mask-close {
										position: absolute;
										z-index: 1;
										top: -0.6rem;
										right: 0;
										background: #FFF;
										width: 0.9rem;
										height: 0.9rem;
										padding: 0.15rem;
										border-radius: 100%;
										 i {
											display: block;
											width: 100%;
											height: 100%;
											// background-image: url(../images/close_window.png);
											background-repeat: no-repeat;
											background-position: 50% 50%;
											background-size: 100%;
											opacity: 0.5rem;
										}
									}
						}
						.nctouch-bottom-mask-rolling {
							min-height: 1.9rem;
							max-height: 12rem;
							overflow: hidden;
							position: relative;
							z-index: 1;
							.goods-options-stock {
								padding: 0.25rem 0.5rem;
							}
						}
						.goods-option-value {
							display: block;
							height: 1.2rem;
							padding: 0.5rem;
							margin-bottom: 2rem;
							line-height: 1.2rem;
							font-size: 0.6rem;
							color: #999;
							border-top: solid 0.05rem #EEE;
							.value-box {
									display: inline-block;
									float: right;
									font-size: 0;
									border: solid 0.05rem #CCC;
									border-radius: 0.2rem;
									 span {
											display: inline-block;
											vertical-align: top;
											line-height: 0;
												a {
													display: block;
													width: 0.4rem;
													height: 0.4rem;
													margin: 0.4rem;
													opacity: 0.65;
													}
													.buy-num {
														width: 1.2rem;
														height: 1.2rem;
														padding: 0;
														font-size: 0.6rem;
														font-weight: lighter;
														line-height: 1.3rem;
														text-align: center;
														border: solid #CCC;
														border-width: 0 0.05rem;
														border-radius: 0;
													}
											}
									.minus {
										background-color: #FAFAFA;
										border-radius: 0.2rem 0 0 0.2rem;
										 a {
											background-image: url(../../assets/value_minus.png);
											background-repeat: no-repeat;
											background-repeat: 50% 50%;
											background-size: 100%;
										}
									}
									.add {
										background-color: #FAFAFA;
										border-radius: 0 0.2rem 0.2rem 0;
										a {
											background-image: url(../../assets/value_add.png);
											background-repeat: no-repeat;
											background-repeat: 50% 50%;
											background-size: 100%;
										}
									}
								}
						}
						.goods-option-foot {
								position: absolute;
								z-index: 1;
								bottom: 0;
								left: 0;
								right: 0;
								.otreh-handle {
									float: left;
									width: 35%;
									font-size: 0;
									a {
											position: relative;
											z-index: auto;
											display: inline-block;
											height: 1.95rem;
											text-align: center;
											color: #333;
											border-top: solid 0.05rem #DDD;
											i {
												display: inline-block;
												width: 0.9rem;
												height: 0.9rem;
												margin: 0.15rem auto 0.05rem auto;
												background-repeat: no-repeat;
												background-position: 50% 50%;
												background-size: 80%;
												opacity: 0.65;
											}
											p {
												display: block;
												height: 0.8rem;
												font-size: 0.55rem;
												line-height: 0.8rem;
											}
										}
									.kefu {
										width: 44%;
										i{
    										background-image: url(../../assets/kefu_b.png);
										}
									}
									.cart {
											width: 55%;
											border-left: solid 0.05rem #DDD;
											i {
												background-image: url(../../assets/cart_b.png);
											}
										}
								}
								.buy-handle {
										float: right;
										width: 65%;
										font-size: 0;
										 a {
											display: block;
											height: 2rem;
											font-size: 0.7rem;
											font-weight: 600;
											line-height: 2rem;
											color: #FFF;
											text-align: center;
										}
										.add-cart {
												float: right;
												width: 55%;
												background-color: #FB6E52;
											}
									}
							}
				}
		}
</style>