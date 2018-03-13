
<template>
  <div class="app-footer-wrap">
      <div class="nctouch-footer-wrap posr">
                <div class="nav-text">
                    <a href="">登录</a>
                    <a href="">注册</a>
                    <a href="">反馈</a>
                    <a href="javascript:void(0);" class="gotop">返回顶部</a>
            </div>
            <div class="nav-pic">
                <a v-for="item in list" :key="item.id" href="" >
                    <span><i :style="{backgroundImage: 'url(' +item.url+')'}"></i></span>
                    <p>{{item.type}}</p>
                </a>
            </div>
            <div class="copyright">Copyright&nbsp;©&nbsp;2014-2016 汉购网
                <a href="javascript:void(0);">hangowa.com</a>
                版权所有
            </div>
         </div>
  </div>
</template>

<script>
export default {
        name:"app-footer-wrap",
        data(){
          return{
              list:[{id:1,type:'客户端',url:'../../../static/images/foot_app.png'},
              {id:2,type:'触屏版',url:'../../../static/images/foot_touch.png'},
              {id:3,type:'客户端电脑板',url:'../../../static/images/foot_pc.png'}
              ]
          }
        }
}
</script>

<style lang="scss" scoped>
        .app-footer-wrap{

            .nctouch-footer-wrap{
                    max-width: 640px;
                  margin: 0 auto;
                  background-color: #FFF;
                  border-top: solid 0.05rem #EEE;
                  position: relative !important;
                  .nav-text{
                     padding: 0.6rem 0;
                    font-size: 0;
                    text-align: center;
                    border-bottom: solid 0.05rem #EEE;
                    a{
                         display: inline-block !important;
                        width: 24%;
                        height: 0.6rem;
                        font-size: 0.6rem;
                        line-height: 0.6rem;
                        color: #555 !important;
                        border-left: solid 0.05rem #EEE;
                    }
                  }
                  .nav-pic{
                         padding: 0.3rem 2rem;
                        font-size: 0;
                        text-align: center;
                        border-bottom: solid 0.05rem #EEE;
                        a{
                            display: inline-block !important;
                            width: 33.33%;
                            font-size: 0.45rem;
                            color: #999 !important;
                            text-align: center;
                            span{
                                display: inline-block;
                                width: 2rem;
                                height: 2rem;
                                margin: 0 auto;
                                padding: 0.15rem;
                                border: solid #CCC 1px;
                                border-radius: 100%;
                                i{
                                        display: block;
                                        width: 100%;
                                        height: 100%;
                                        background-position: 50% 50%;
                                        background-repeat: no-repeat;
                                        background-size: 80%;
                                        opacity: 0.4;
                                }
                             }
                        }
                  }
                  .copyright{
                          height: 2.2rem;
                        font-size: 0.65rem;
                        line-height: 1.6rem;
                        color: #555;
                        text-align: center;
                        text-shadow: 1px 1px 0 rgba(255,255,255,1);
                        margin-bottom: 2rem;
                  }
            }
        }
</style>
