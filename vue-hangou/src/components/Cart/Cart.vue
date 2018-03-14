<template>
    <div class="app-cart">
        <header id="header" class="fixed">
            <div class="header-wrap">
                <div class="header-l">
                    <a href="javascript:history.go(-1)">
                        <i class="back"></i>
                    </a>
                </div>
                <div class="header-title">
                    <h1>购物车</h1>
                </div>
                <div class="header-r" @click="toggleNav()">
                    <a id="header-nav" href="javascript:void(0);" ><i class="more"></i><sup></sup></a>
                    <nctouch-nav v-if="isNavShow" :isNavShow="isNavShow" :toggleNav="toggleNav"></nctouch-nav>
                </div>
            </div>
            <!--<div class="nctouch-nav-layout">-->
             
            <!--</div>-->
        </header>
        <div class="nctouch-main-layout">
             <div id="cart-list-wp">
            
                <div class="nctouch-cart-container">
                    <ul class="nctouch-cart-item">
                    
                        
                        <li  class="cart-litemw-cnt" v-for="good in cars" :key="good.id">
                            <div class="goods-check">
                                <input type="checkbox" checked="" name="cart_id" value="102803">
                            </div>
                            <div class="goods-pic">
                                <a href="">
                                    <img :src="good.image">
                                </a>
                            </div>
                            <dl class="goods-info">
                                <dt class="goods-name"> <a href="">{{good.name}}</a></dt>
                                <dd class="goods-type"></dd>
                            </dl>
                            <div class="goods-del" cart_id="102803"><a href="javascript:void(0);"></a></div>
                            <div class="goods-subtotal"> <span class="goods-price">￥<em>{{good.price}}</em></span> 
                                <span class="goods-sale">
                                
                                </span>
                                <div class="value-box">
                                    <span class="minus">
                                        <a @click="CONSTROL_CAR_GOODS({
                                                id:good.id,type:-1
                                            })" href="javascript:void(0);">&nbsp;</a>
                                     </span>
                                    <span>
                                        <input type="text" pattern="[0-9]*" readonly="" class="buy-num buynum" :value="good.num">
                                    </span>
                                    <span class="add">
                                        <a @click="CONSTROL_CAR_GOODS({
                                            id:good.id,type:1
                                        })" href="javascript:void(0);">&nbsp;</a>
                                    </span>
                                </div>
                            </div>
                            
                        </li>
                        
                    
                    </ul>
                            
                        </div> 
                    
                    
                        <!--<div class="nctouch-cart-bottom no-login">
                            <div class="cart-nologin-tip">结算购物车中的商品，需先登录商城</div>
                            <div class="cart-nologin-btn"><a href="../tmpl/member/login.html" class="btn">登录</a>
                                <a href="../tmpl/member/register.html" class="btn">注册</a>
                            </div>
                        </div>-->
                        
                </div>
        </div>
        <div class="nctouch-cart-bottom">
						<div class="all-check"><input class="all_checkbox" type="checkbox" checked=""></div>
						<div class="total">
                        	<dl class="total-money"><dt>总件数：<dd><em>{{all_info.all_num}}</em></dd></dt><dt>合计总金额：</dt><dd>￥<em>{{all_info.all_price}}</em></dd></dl>
                    	</div>
                    	<div class="check-out ok">
                        	<a href="javascript:void(0)">确认信息</a>
						</div>
          </div>
</div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
import {CONSTROL_CAR_GOODS} from '../../store/shop/const'
import NctouchNav from '../NctouchNav/NctouchNav'
export default {
    name:'app-cart',
      data () {
        return {
            isNavShow:false
        }
     },
     components:{
			NctouchNav
		},		
      computed: {
            ...mapState({
                cars:state=>state.shop.cars
            }),
            ...mapGetters(['all_info'])
        },
        methods:{
        ...mapMutations([CONSTROL_CAR_GOODS]),
        toggleNav(){				
				this.isNavShow = !this.isNavShow
			}
        },
        mounted () {
            console.log(this)
        }
}
</script>
<style lang="scss" scoped>
.app-cart{


        .fixed {
            position: fixed;
            background: rgba(248,248,248,0.95);
            z-index: 9;
                background: #F8F8F8;
                height: 1.95rem;
                position: absolute;
                z-index: 8;
                top: 0;
                left: 0;
                right: 0;
                bottom: auto;
                border-bottom: solid 0.05rem #EEE;
            .header-wrap {
                display: block;
                max-width: 320px;
                max-width: 640px;
                margin: 0 auto;
                text-align: center;
                .header-l {
                    display: block;
                    width: 1.95rem;
                    height: 1.95rem;
                    position: absolute;
                    top: 0;
                    left: 0;
                    a {
                        position: relative;
                        z-index: 1;
                        display: inline-block;
                        width: 1rem;
                        height: 1rem;
                        padding: 0.4775rem;
                        .back {
                            width: 80%;
                            height: 80%;
                            margin: 10%;
                            background-image: url(../../../static/images/arrow_left_b.png);
                            background-position: 50% 50%;
                            background-repeat: no-repeat;
                            background-size: 100%;
                            opacity: 0.75;
                            display: block;
                        }
                    }
                }
                .header-title {
                    display: inline-block;
                    margin: 0 auto;
                    h1 {
                        font-size: 0.8rem;
                        line-height: 1.95rem;
                        height: 1.95rem;
                    }
                }
                .header-r {
                    position: absolute;
                    z-index:99;
                    top: 0;
                    right: 0;
                    font-size: 0;
                    text-align: right;
                    a {
                        position: relative;
                        z-index: 1;
                        display: inline-block;
                        vertical-align: top;
                        width: 0.95rem;
                        height: 0.95rem;
                        padding: 0.5rem 0.5rem;
                        .more {
                            background-image: url(../../../static/images/more_b.png);
                            display: block;
                            width: 100%;
                            height: 100%;
                            background-repeat: no-repeat;
                            background-position: 50% 50%;
                            background-size: 100%;
                            opacity: 0.65;

                        }
                    }
                }
            }
        }
        .nctouch-main-layout {
            display: block;
            margin-top: 2rem;
            background-color: #F5F5F5;
            #cart-list-wp {
                margin-bottom: 2.5rem;
                .nctouch-cart-container {
                    display: block;
                    clear: both;
                    background-color: #FFF;
                    margin-bottom: 0.5rem;
                    border: solid #EEE;
                    border-width: 0.05rem;
                    .nctouch-cart-item {
                        background-color: #FFF;
                        border-bottom: solid 0.05rem #EEE;
                        li {
                            display: block;
                            position: relative;
                            z-index: 1;
                            margin-left: 0.5rem;
                            padding: 0.5rem 0;
                            border-bottom: solid #EEE 0.05rem;
                            .goods-check {
                                position: absolute;
                                top: 1.2rem;
                                input[type="checkbox"] {
                                    position: relative;
                                    width: 0.75rem;
                                    height: 0.75rem;
                                    background-color: #F5F5F5;
                                    border: 0.05rem solid #CCC;
                                    -webkit-border-radius: 50%;
                                    border-radius: 50%;
                                    vertical-align: middle;
                                }
                                input[type="checkbox"]:checked {
                                    border-color: #ED5564;
                                    background-color: #ED5564;
                                }
                            }
                            .goods-pic {
                                display: block;
                                width: 2.7rem;
                                height: 2.7rem;
                                padding: 0.2rem;
                                position: absolute;
                                z-index: 1;
                                top: 0.5rem;
                                left: 1.1rem;
                                border: solid 0.05rem #EEE;
                                border-radius: 0.2rem;
                                 a {
                                    display: block;
                                    width: 100%;
                                    height: 100%;
                                     img {
                                        width: 100%;
                                        height: 100%;
                                        border-radius: 0.2rem;
                                    }
                                }
                            }
                            .goods-info {
                                display: block;
                                vertical-align: top;
                                height: 2.2rem;
                                margin: 0 2rem 0 4.5rem;
                                position: relative;
                                z-index: 1;
                                .goods-name {
                                    display: block;
                                     a {
                                        display: block;
                                        height: 1.4rem;
                                        font-size: 0.6rem;
                                        color: #111;
                                        line-height: 0.7rem;
                                        overflow: hidden;
                                    }
                                }
                                .goods-type {
                                    overflow: hidden;
                                    white-space: nowrap;
                                    width: 70%;
                                    height: 0.9rem;
                                    font-size: 0.45rem;
                                    line-height: 0.9rem;
                                    color: #999;
                                    text-overflow: ellipsis;
                                }
                            }
                            .goods-del {
                                display: block;
                                position: absolute;
                                z-index: 1;
                                top: 0.3rem;
                                right: 0.5rem;
                                width: 1rem;
                                height: 1rem;
                                a {
                                    display: block;
                                    width: 100%;
                                    height: 100%;
                                    background-image: url(../../../static/images/del_b.png);
                                    background-repeat: no-repeat;
                                    background-position: 50% 50%;
                                    background-size: 60%;
                                    opacity: 0.4;
                                }
                            }
                            .goods-subtotal {
                                display: block;
                                height: 1rem;
                                margin: 0 0.5rem 0 4.5rem;
                                line-height: 1rem;
                                font-size: 0.6rem;
                                position: relative;
                                z-index: 1;
                                .goods-price {
                                    color: #DB4453;
                                    font-size: 0.55rem;
                                    font-weight: 600;
                                    em {
                                        font-size: 0.6rem;
                                    }
                                }
                                .value-box {
                                    position: absolute;
                                    z-index: 1;
                                    bottom: 0;
                                    right: 0;
                                     display: inline-block;
                                    float: right;
                                    font-size: 0;
                                    border: solid 0.05rem #CCC;
                                    border-radius: 0.2rem;
                                    span {
                                        display: inline-block;
                                        vertical-align: top;
                                        line-height: 0;
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
                                        a {
                                            display: block;
                                            width: 0.4rem;
                                            height: 0.4rem;
                                            margin: 0.4rem;
                                            opacity: 0.65;
                                        }
                                    }
                                    .minus {
                                        background-color: #FAFAFA;
                                        border-radius: 0.2rem 0 0 0.2rem;
                                        a {
                                            background-image: url(../../../static/images/value_minus.png);
                                            background-repeat: no-repeat;
                                            background-repeat: 50% 50%;
                                            background-size: 100%;
                                        }
                                    }
                                    .add {
                                        background-color: #FAFAFA;
                                        border-radius: 0 0.2rem 0.2rem 0;
                                        a {
                                            background-image: url(../../../static/images/value_add.png);
                                            background-repeat: no-repeat;
                                            background-repeat: 50% 50%;
                                            background-size: 100%;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
     
            }
        }
                   .nctouch-cart-bottom {
                    position: fixed;
                    z-index: 1;
                    top: auto;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 2rem;
                    background-color: rgba(255,255,255,0.85);
                    border-top: solid 0.05rem #EEE;
                    .all-check {
                        position: absolute;
                        z-index: 1;
                        top: 0.4rem;
                        left: 0.5rem;
                        input[type="checkbox"]:checked {
                            border-color: #ED5564;
                            background-color: #ED5564;
                        }
                        input[type="checkbox"] {
                            position: relative;
                            width: 0.75rem;
                            height: 0.75rem;
                            background-color: #F5F5F5;
                            border: 0.05rem solid #CCC;
                            -webkit-border-radius: 50%;
                            border-radius: 50%;
                            vertical-align: middle;
                        }
                    }
                    .total {
                        display: block;
                        float: left;
                        text-align: right;
                        width: 75%;
                        .total-money {
                            height: 1rem;
                            margin-right: 1rem;
                            padding: 0.5rem 0;
                            font-size: 0;
                            line-height: 1rem;
                             dt {
                                    display: inline-block;
                                    font-size: 0.6rem;
                            }
                             dd {
                                display: inline-block;
                                font-size: 0.55rem;
                                color: #DB4453;
                                font-weight: 600;
                                em {
                                    font-size: 0.9rem;
                                }
                            }
                        }
                    }
                    .ok{
                        background-color: #ED5564;
                        display: block;
                        float: right;
                        width: 25%;
                        height: 2rem;
                        background-color: #BBB;
                        a {
                            display: block;
                            text-align: center;
                            font-size: 0.8rem;
                            color: #FFF;
                            line-height: 2rem;
                        }
                    }
                }
    }
</style>
