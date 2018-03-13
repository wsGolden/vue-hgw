<template>
    <div class="app-search">
    <app-head></app-head>
  <div id="store-wrapper">
  <div class="nctouch-search-layout">
    <dl class="hot-keyword">
      <dt>热门搜索</dt>
      <dd id="hot_list_container">
    <ul>

	<li v-for="(food,i) in foods" :key="food.id"><a href="">{{food}}</a></li>



</ul></dd>
    </dl>
    <dl>
      <dt>历史纪录</dt>
      <dd id="search_his_list_container"><ul>

	<li v-for="btnM in btnMs" :key="btnM.id"><a href="">{{btnM}}</a></li>


</ul><a href="javascript:void(0);" class="clear-history" >清空历史</a></dd>
    </dl>
  </div>
</div>
{{msg}}
        <app-footer></app-footer>
    </div>
</template>
<script>

import AppFooter from '../Footer.vue'
import AppHead from './SearchHead.vue'
import axios from 'axios'
import {mapState ,mapActions} from 'vuex'
// http://www.hangowa.com/mo_bile/index.php?act=index&op=search_key_list
export default {
    name:"search",
    components:{
        AppFooter,AppHead
    },
    data(){
        return{
            foods:[],
            msg:""
        }
    },
    computed:{
        ...mapState({
                    btnMs:state=>state.search.list
                }),
         
    },
    methods:{
        getList(){
				//this.$root.config.host是在modules下的config文件里配置的域名
				//mz是和config目录里index文件配置的信息交互
				//this.$route.params.id可以获取到id值
				axios.get("/mo_bile/index.php?act=index&op=search_key_list").then(res=>{
                    // console.log(res.data.datas.list)
					this.foods = res.data.datas.list

				})
			},
            delBtnMs(){
                btnMs:[]
            }
    },
    created(){
			//初始化数据时调用执行获取数据的方法
			this.getList()
	}
   
}
</script>
<style lang="scss" scoped>
    .app-search{
        margin-bottom:6.15em;
       
        #store-wrapper{
                .nctouch-search-layout {
                        margin-top:2.5rem;
                       
                        dl{
                                padding: 0.8rem 0.5rem 0.5rem;
                                text-align: left;
                                dt {
                                    font-size: 0.8rem;
                                    line-height: 1rem;
                                    color: #111;
                                    margin-bottom: 0.4rem;
                                }
                                dd{
                                width: 100%;
                                height: 100%;
                              
                                color:#000;
                                margin-left:0px;
                                ul{
                                    display: flex;
                                    justify-content: space-around;
                                        font-size: 0;
                                        display: block;
                                    li{
                                            border-radius: 0.75rem;
                                       display: inline-block;
                                        background-color: #FFF;
                                        border: solid 0.05rem #EEE;
                                        margin: 0 0.4rem 0.4rem 0;
                                         a {
                                            display: block;
                                            padding: 0.2rem 0.5rem;
                                            font-size: 0.6rem;
                                            line-height: 1rem;
                                            color: #555;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .clear-history {
                            display: inline-block;
                            width: 79%;
                            height: 1.94rem;
                            text-align: center;
                            margin: 1.5rem 10% 0 10%;
                            background-color: #ccc;
                            border-radius: 0.2rem;
                            font-size: 0.7rem;
                            line-height: 1.94rem;
                            color: #666;
                        }
                }
        
    }
</style>
