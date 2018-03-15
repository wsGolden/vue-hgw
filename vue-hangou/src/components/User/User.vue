<template>
	<div class="app-user">
		<user-header></user-header>
		<div class="scroller-body">
			<div class="scroller-box">
				<div class="member-top">
					<div class="member-info">
						<router-link :to="{name:'Login'}" class="default-avatar" style="display:block;"></router-link> 
						<router-link class="login" :to="{name:'Login'}">
							点击登录
							</router-link> 
					</div>
					<div class="member-collect">
						<span v-for="item in collectNav" :key="item.id">
							<a href="login.html">
								<i :class="[item.f]"></i>
								<p>{{item.title}}</p>
							</a> 
						</span>										
					</div>
				</div>
				<div class="member-center">
				    <dl class="mt5">
				        <dt>
				        	<a href="order_list.html">
					            <h3><i class="fa fa-registered"></i>我的订单</h3>
					            <h5>查看全部订单<i class="fa fa-angle-right"></i></h5>
				            </a>
				        </dt>
				        <dd>
				            <ul id="order_ul">
				            	<li v-for="i in centerNav" :key="i.id">
				            		<a href="login.html">
				            			<i :class="[i.f]"></i>
				            			<p>{{i.title}}</p>
				            		</a>
				            	</li>				            					            	
				            </ul>
				        </dd>
				    </dl>
				    <dl class="mt5">
				        <dt>
				        	<a href="member_asset.html">
				          		<h3><i class="fa fa-id-card-o"></i>我的财产</h3>
				          		<h5>查看全部财产<i class="fa fa-angle-right"></i></h5>
				            </a>
				        </dt>
				        <dd>
				            <ul id="asset_ul">
				            </ul>
				        </dd>
				    </dl>
				    <dl class="mt5">
				        <dt>
				        	<a href="member_invite.html">
				          		<h3><i class="fa fa-globe"></i>我的分销管理</h3>
				          		<h5><i class="fa fa-angle-right"></i></h5>
				          	</a>
				        </dt>
				    </dl>
				    <dl style="border-top: solid 0.05rem #EEE;">
				        <dt>
				        	<a href="address_list.html">
				          		<h3><i class="fa fa-map-marker"></i>收货地址管理</h3>
				          		<h5><i class="fa fa-angle-right"></i></h5>
				          	</a>
				        </dt>
				    </dl>
				    <dl style="border-top: solid 0.05rem #EEE;">
				        <dt>
				        	<a href="member_account.html">
				          		<h3><i class="fa fa-gear"></i>用户设置</h3>
				          		<h5><i class="fa fa-angle-right"></i></h5>
				          	</a>
				        </dt>
				    </dl>
				</div>				
			</div>				  
		</div>
		<app-footer-wrap></app-footer-wrap>
		<app-footer></app-footer>
	</div>
	
</template>

<script>
	 
	import UserHeader from './UserHeader'
	import AppFooter from '../common/Footer'
	import AppFooterWrap from '../common/Footer-wrap'
	export default{
		name:'app-user',
		components:{
			UserHeader,AppFooter,AppFooterWrap
		},
		data(){
			return{
				collectNav:[
					{id:1,title:'商品收藏',f:'fa fa-heart-o',path:'/login'},
					{id:2,title:'店铺收藏',f:'fa fa-diamond',path:'/login'},
					{id:3,title:'我的足迹',f:'fa fa-eye',path:'/login'}
				],
				centerNav:[
					{id:1,title:'代付款',f:'fa fa-heart-o',path:'/login'},
					{id:2,title:'待收货',f:'fa fa-diamond',path:'/login'},
					{id:3,title:'待自提',f:'fa fa-eye',path:'/login'},
					{id:4,title:'待评价',f:'fa fa-heart-o',path:'/login'},
					{id:5,title:'退款/退货',f:'fa fa-diamond',path:'/login'}
				]
			}
		}
		
	}
</script>

<style lang="scss" scoped>
.scroller-body {
    .member-top{
    	animation: changeBg 20s infinite;
	    background-color: #ED5564;
	    background-image: url(../../../static/images/member_top_bg.png);
	    background-size: cover;
	    text-align: center;
	    width: 100%;
	    height: 11rem;
	    position: relative;
	    z-index: 1;
	    .member-info{
		    width: 12rem;
		    height: 6rem;
		    margin: -3.5rem 0 0 -6rem;
		    position: absolute;
		    z-index: 1;
		    top: 50%;
		    left: 50%;
		    animation: memberInfoDown 1000ms ease-in;
		    -webkit-animation: memberInfoDown 1000ms ease-in;
		    .default-avatar{
			    background-color: rgba(0,0,0,0.5);
			    background-image: url(../../../static/images/member_w.png);
			    background-repeat: no-repeat;
			    background-position: 50% 50%;
			    background-size: 60%;
			    width: 4rem;
			    height: 4rem;
			    margin: 0 auto;
			    border-radius: 100%;
			    animation: changeBg 20s infinite;			    	    
			}
			@keyframes changeBg{
	            0% {
				    background-color: #ED5564;
				}
				10% {
				    background-color: #FB6E52;
				}
				20% {
				    background-color: #FFCE55;
				}
				30% {
				    background-color: #A0D468;
				}
				40% {
				    background-color: #48CFAE;
				}
				50% {
				    background-color: #4FC0E8;
				}
				60% {
				    background-color: #5D9CEC;
				}
				70% {
				    background-color: #AC92ED;
				}
				80% {
				    background-color: #EC87BF;
				}
				90% {
				    background-color: #ED5564;
				}
	        }
			.login{
			    font-size: 0.8rem;
			    color: #FFF;
			    line-height:2rem;
			    height: 2rem;
			    /*margin: 0.25rem auto;*/
			}
		}
		.member-collect {
		    font-size: 0;
		    height: 3rem;
		    background: rgba(0,0,0,0.1);
		    position: absolute;
		    bottom: 0;
		    left: 0;
		    right: 0;
		    display:flex;
		    span {
			    width: 33.33%;
			    height: 2rem;
			    padding: 0.5rem 0;
			    display:flex;
			    a{
			    	display: flex;
			    	width:100%;
			    	height:100%;
			    	flex-direction: column;
			    	.fa{
			    		font-size:1rem;
			    	}
			    	p{
			    		font-size: 0.6rem;
					    line-height: 1rem;
					    color: #FFF;
					    height: 1rem;
			    	}
			    }
			}
		}
    }
    .mt5 {
	    margin-top: 0.5rem !important;
	}
    .member-center{
    	background-color: #FFF;
    	box-shadow: 0 1px 0 rgba(0,0,0,0.05);
    	dt{
    		line-height: 0.9rem;
		    display: block;
		    height: 1rem;
		    padding: 0.5rem 0.7rem 0.5rem 0;
		    margin-left: 0.5rem;
		    border-bottom: solid 0.05rem #EEE;
		    a{
		    	display: block;
		    	h3{
		    		font-size: 0.7rem;
				    line-height: 1rem;
				    color: #111;
				    vertical-align: top;
				    display: inline-block;
				    height: 1rem;
				    .fa{
				    	font-size:0.6rem;
				    	margin-right:0.3rem;
				    	color:greenyellow;
				    }
		    	}
		    	h5{
		    		font-size: 0.6rem;
				    color: #999;
				    float: right;
				    line-height: 1rem;
				    .fa{
				    	font-size:0.6rem;
				    	margin-left:0.3rem;
				    }
		    	}
		    }
    	}
    	dd{
    		display: block;
    		padding: 0.2rem 0;
    		ul{
    			li{
    				vertical-align: top;
				    display: inline-block;
				    text-align: center;
				    width: 20%;
				    padding: 0.5rem 0 0.2rem 0;
				    a{
				    	display: block;
    					position: relative;
    					.fa{
					    	font-size:0.8rem;
						    margin-right: 0.3rem;
					    }
    					p{
    						font-size: 0.55rem;
						    color: #888;
						    line-height: 1rem;
						    height: 1rem;
    					}
				    }
    			}
    		}
    	}
    }
}
</style>