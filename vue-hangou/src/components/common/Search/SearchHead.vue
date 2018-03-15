
<template>
    <div class="app-header">
                <header id="header" >
            <div class="header-wrap">
                <div class="header-l">
                    <a href="javascript:history.go(-1)">
                        <i class="fa fa-angle-left"></i>
                    </a>
                </div>
                <div class="header-inp">
                    <!--<i class="icon"></i>-->
                    <input v-model="msg" type="text" class="search-input" value="" oninput="" id="keyword" placeholder="请输入搜索关键词" maxlength="50" autocomplete="on" autofocus="">
                    <span class="input-del"></span>
                </div>
                <div class="header-r">
                    <router-link   @click.native="btnMsg()" :to="{name:'searchitem',params:{sears:this.msg}}" id="header-nav"  class="search-btn" >搜索</router-link>
                </div>
            </div>
        </header>
    </div>
    
</template>

<script>

export default {
 name:"searchHead",
    data(){
        return{
            msg:""
        }
    },
    methods:{
      btnMsg(){
          this.$store.dispatch("addTodoA", this.msg);
      }
    },
    mounted() {
    }
      
}
</script>
<style lang="scss" scoped>
         header{
            background: #F8F8F8;
            height: 2.5rem;
            position: absolute;
            z-index: 8;
            top: 0;
            left: 0;
            right: 0;
            bottom: auto;
            border-bottom: solid 0.05rem #EEE;
            display: flex;
            align-items: center;
            .header-wrap{
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
                            width: 1.5rem;
                            height: 1.5rem;
                           margin-top: 0.7em;
                            background: #F8F8F8;
                            .fa-angle-left{
                                     display: block;
                                    width: 80%;
                                    height: 80%;
                                    margin: 10%;
                                    opacity: 0.75;
                                    color:#000;
                                }
                        }
                    }
                    .header-inp {
                        position: relative;
                        display: inline-block;
                        input {
                                float: left;
                                width: 7.5rem;
                                height: 35px;
                                font-size: 0.7rem;
                                line-height: 35px;
                                color: #BBB;
                                vertical-align: top;
                                border: none 0;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                padding: 0 6px;
                                border-radius: 20px;
                                border: solid 1px #ccc;
                            }
                    }
                    .header-r {
                        position: absolute;
                        z-index: 1;
                        top: 0;
                        right: 0;
                        font-size: 0;
                        text-align: right;
                        #header-nav{
                                width: 3rem;
                                height: 1.95rem;
                                text-align: center;
                                padding: 0;
                                font-size: 0.7rem;
                                line-height: 1.95rem;
                                color: #333;
                                position: relative;
                                z-index: 1;
                                display: inline-block;
                                vertical-align: top;
                        }
                    }
            }
        }
</style>

