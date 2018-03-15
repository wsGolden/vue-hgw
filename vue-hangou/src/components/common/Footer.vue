<template>
  <div class="app-footer">
    <div id="footnav" class="footnav clearfix">
        <ul>
            <li>
              <router-link  class="footss" :to="{name:'home'}">
                    <i class="fa fa-home"></i>
                    <p>首页</p>
               </router-link>
            </li>
             <li>
               <router-link  class="footss" :to="{name:'Discovery'}">
                    <i class="fa  fa-shopping-cart"></i>
                    <p>发现</p>
              </router-link>
            </li>
             <li>
                 <router-link class="footss" :to="{name:'Category'}">
                    <i class="fa fa-th-list"></i>
                    <p>类目</p>
                </router-link>
            </li>
             <li>
                <router-link class="footss" :to="{name:'User'}">
                    <i class="fa fa-user-circle-o"></i>
                    <p>我的商城</p>
                 </router-link>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>

export default {
    name:"app-footer"
}
</script>
<style lang="scss" scoped>
    .app-footer{
        #footnav{
            min-width: 320px;
            background: rgba(85,85,85,0.95);
        
            bottom: 0;
            font-size: 0.28rem;
            height: 2.2rem;
            position: fixed;
            width: 100%;
            z-index: 6;
                li{
                    vertical-align: top;
                    display: inline-block;
                    text-align: center;
                    width: 25%;
                    padding: 0.2rem 0 0.2rem 0;
                    float: left;
                    .footss{    
                     display: block;
                      position: relative;
                            i{
                                vertical-align: top;
                                display: inline-block;
                                width: 1rem;
                                height: 1rem;
                                margin: 0 auto 0.1rem auto;
                                opacity: 0.5;
                                 font-size: 1rem;
                                 color:#999;
                            }
                            p{
                                    font-size: 0.55rem;
                                    color: #fff;
                                    line-height: 1rem;
                                    height: 1rem;

                            }
                    }
                }
        }
    }
</style>
