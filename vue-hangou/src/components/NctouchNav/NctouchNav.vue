<template>
	<div class="nctouch-nav"  v-if="isNavShow" @click="toggleNav()">
	    <div class="nctouch-nav-menu"> <span class="arrow"></span>
	      <ul>
	        <li v-for="nav in navs" :key="nav.id">
	        	<router-link :to="nav.path">
	        		<i :class="[fa,nav.f]"></i>{{nav.title}}
	        	</router-link>
	        		
	        
	        </li>			        
	      </ul>
	    </div>
	</div>
</template>

<script>

	export default{
		name:'nctouch-nav',
		props:['isNavShow','toggleNav'],
		data () {
			return{
				fa:'fa',
				navs:[
					{id:1,title:'首页',f:'fa-home',path:'/'},
					{id:2,title:'搜索',f:'fa-search',path:'/search'},
					{id:3,title:'购物车',f:'fa-shopping-cart',path:'/cart'},
					{id:4,title:'我的商城',f:'fa-user-o',path:'/user'},
					{id:5,title:'消息',f:'fa-commenting-o',path:'/'}
				]
			}
		},
		created(){
			switch(this.$router.history.current.path){
	            case '/category': this.navs.splice(1,1);break;
				case '/cart': this.navs.splice(2,1);break;
	            case '/user': this.navs.splice(1,1);this.navs.splice(2,1);break;
				 
	        }
		}

	}
</script>

<style lang="scss" scoped>
	
	.nctouch-nav{
		position: fixed;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    background-color: transparent;
		margin-top: 20px;
	    z-index:9;
	    .nctouch-nav-menu {
		    display: block;
		    position: absolute;
		    top:0rem;
		    right: 0.3rem;
		    width: 5rem;
		    .arrow {
			    display: block;
			    float: right;
			    width: 0;
			    height: 0;
			    margin-right: 0.4rem;
			    font-size: 0;
			    line-height: 0;
			    border-width: 0.4rem;
			    border-color: transparent transparent rgba(85,85,85,0.95) transparent;
			    border-style: dashed dashed solid dashed;
			}
			ul{
				clear: both;
				background: rgba(85,85,85,0.95);
			    border-radius: 0.2rem;
			    li{
			    	position: relative;
				    z-index: 1;
				    border-bottom: solid 0.05rem #999;
				    a{
				    	display: block;
					    height: 0.9rem;
					    padding: 0.5rem;
					    font-size: 0.6rem;
					    line-height: 0.9rem;
					    color: #FFF;
					    .fa{
					    	font-size:0.8rem;
						    margin-right: 0.3rem;
					    }
				    }
			    }
			}
		}
	}
</style>