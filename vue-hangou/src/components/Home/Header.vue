<template>

<div class="app-header">
    <header id="header" class="transparent">
        <div class="logo"></div>
        <div class="header-wrap">
            <router-link :to="{name:'search'}" class="header-inp">
                <i class='ssearch'></i></router-link> 
            <router-link :to="{name:'cart'}" class="m-cart"></router-link>
        </div>
        </header>
</div>

</template>
<script>
export default {
    name:'app-header',
    data(){
        return{
         
        }
    }
}
</script>
<style lang='scss' scoped>
#header{
    background: #e7e7e9;
    padding:10px;
    position: fixed;
    z-index: 2 !important;
    top: 0;
    bottom: auto;
    left: 0;
    right: 0;
    .logo{
        width: 33.3%;
        float: left;
        height: 45px;
        background: url(../../../static/images/home_logo.png) no-repeat;
        background-position-y: 0px
      }
      .header-wrap{
              width: 66.6%;
            float: left;
            height: 45px;
            line-height: 45px;
            .header-inp{
                    position: relative;
                 display: inline-block;
                width: 70%;
                border: solid 1px #ccc;
                border-radius: 20px;
                height: 35px;
                background: #fff;
                .ssearch{
                     display: block;
                    width: 35px;
                    height: 35px;
                    background: url(../../../static/images/search_ico.png) no-repeat center;
                    background-size: 55%;
                    float: right;
                }                  
            }
            .m-cart{
                 display: inline-block;
                width: 40px;
                height: 40px;
                background: url(../../../static/images/cart_b.png) no-repeat center;
                background-size: 65%;
            }
      }   
}



      
 
</style>
