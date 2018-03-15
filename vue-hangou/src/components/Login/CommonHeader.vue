<template>
	<header class="common-header">
	    <div class="header-wrap">
		    <div class="header-l">
		    	<router-link to="/">
		    		<i class="fa fa-home"></i>
		    	</router-link>			    	
		    </div>
		    <div class="header-title">
		        <h1>{{datas.title1}}</h1>
		    </div>
		    <div class="header-r"> 
		    	<router-link :to="datas.path" id="header-nav" class="text">{{datas.title2}}</router-link> 
		    </div>
	    </div>
	</header>
</template>

<script>
	export default{
		name:'common-header',
		data(){
			return{
				datas:{title1:'会员注册',title2:'登录',path:'/login'},				
			}
		},
		mounted(){			
			if(this.$route.name === 'Login'){
				this.datas={title1:'登录',title2:'注册',path:'/register'}
			}
			this.$router.beforeEach((to, from, next) => {			
			    switch(to.name){
					case 'Login': this.datas={title1:'登录',title2:'注册',path:'/register'};break;
//					case 'Register':this.datas={title1:'会员注册',title2:'登录',path:'/login'};break;
				}
			    next()
			})
		}
	}
</script>

<style lang="scss" scoped>
.common-header{
	background: #F8F8F8;
    height: 1.95rem;
    position: absolute;
    z-index: 8;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    .header-wrap {
	    display: block;
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
		    a{
		    	position: relative;
			    z-index: 1;
			    display: inline-block;
			    width: 1rem;
			    height: 1rem;
			    padding: 0.4775rem;
			    color:#999;
		    }
		}
		.header-title {
		    display: inline-block;
		    margin: 0 auto;
		    h1{
		    	font-size: 0.8rem;
			    line-height: 1.95rem;
			    height: 1.95rem;
		    }
		}
		.header-r {
		    position: absolute;
		    top: 0;
		    right: 0;
		    font-size: 0;
		    text-align: right;
		    a{
		    	position: relative;
			    z-index: 1;
			    display: inline-block;
			    white-space: nowrap;
			    width: 1.6rem;
			    height: 0.95rem;
			    padding: 0.6rem 0.7rem 0.4rem 0;
			    font-size: 0.7rem;
			    line-height: 0.975rem;
			    color: #ED5564;
		    }
		}
	}
}
</style>