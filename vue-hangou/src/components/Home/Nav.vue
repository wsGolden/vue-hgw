<template>
    <div class="app-nav">
    <ul>
        <li v-for='list in lists' :key='list.id' >
            <router-link :to="list.path" class="tiao">
            <span :style="{'background':list.bgc}" >
                    <i :style="{backgroundImage: 'url(' +list.url+')'}"></i>
                </span>
             <p>{{list.item}}
              </p>
            </router-link>
        </li>
  </ul>
    </div>
</template>
<script>
export default {
  name:'app-nav',
  data(){
      return{

          lists:[{id:1,item:'分类',path:'/category',bgc:'#FB6E52',url:'../../../static/images/browse_list_w.png'},
            {id:2,item:'购物车',path:'/cart',bgc:'#48CFAE',url:'../../../static/images/cart_w.png'},
            {id:3,item:'我的商城',path:'/user',bgc:'#4FC0E8',url:'../../../static/images/member_w.png'},
            {id:4,item:'每日签到',path:'/',bgc:'#AC92ED',url:'../../../static/images/mcc_04_w.png'}
          ]
             
          
      }
  }
}
</script>
<style lang="scss" scoped>
    ul{ 
        background:#fff;
        display:flex;
        justify-content: space-around;
        height: 80px;

        li{
                float: left;
                width: 25%;
                height: 3.7rem;
                padding: 0.28rem 0 0.3rem 0;
                p{
                        display: block;
                    font-size: 0.6rem;
                    line-height: 0.9rem;
                    color: #555;
                    }
                
                .tiao{                  
                    display: block;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                span{
                        display: inline-block;
                        width: 2.4rem;
                        height: 2.4rem;
                        margin: 0 auto 0.3rem auto;
                        border-radius: 100%;
                        background: #000;
                        i{
                            display: block;
                            width: 100%;
                            height: 100%;
                            background-position: 50% 50%;
                            background-repeat: no-repeat;
                            background-size: 50%;
                        }
                    }
                }
           }
        }
      
    
</style>
