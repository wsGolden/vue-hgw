<template>
	<div class="category-header">
		
	    <div class="header-l"> 
	    	<a href="javascript:history.go(-1)"> 
	    		<i class="fa fa-angle-left"></i> 
	    	</a> 
	    </div>
	    <div class="header-inp">
	    	<router-link  class="tosearch" to="/search">
	    		<span class="search-input" id="keyword">请输入关键字</span> 
	    		<i class="fa fa-search"></i>
	    	</router-link>
	    	
	    </div>
	    <div class="header-r" @click="toggleNav()"> 
	    	<a id="header-nav" href="javascript:void(0);">
	    		<i class="fa fa-ellipsis-h"></i>	    		
	    	</a> 
	    </div>
		<nctouch-nav  v-if="isNavShow" :isNavShow="isNavShow" :toggleNav="toggleNav"></nctouch-nav>
	</div>
</template>

<script>
	import NctouchNav from '../NctouchNav/NctouchNav'
	export default{
		name:'category-header',
		data(){
			return{
				isNavShow:false
			}
		},
		components:{
			NctouchNav
		},	
		methods:{			
			toggleNav(){				
				this.isNavShow = !this.isNavShow
			}
		}

	}
</script>

<style lang="scss" scoped>
.category-header{
	
	display:flex;
	justify-content:space-around;
	align-items: center;	
	
	.header-l{
		width: 1.95rem;
    	height: 1.95rem;
    	text-align:left;
    	line-height:1.95rem;
    	font-size:1.5rem;
    	a{
    		color:#999;
    	}
    	
	}
	.header-inp{
		display:flex;
		width:10rem;
		.tosearch{
			display:flex;
			width:10rem;
		
			span{
				display:block;
				width: 7.5rem;
			    height: 1.8rem;
			    font-size: 0.7rem;
			    line-height: 35px;
			    color: #BBB;		    		    
			    overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    padding:0 6px;
			    border-radius: 20px;
			    border: solid 1px #ccc;
			}
			i{
				font-size:1.2rem;
				width: 2rem;
		    	height: 1.95rem;
		    	text-align: center;
		    	line-height:1.95rem;
				color:#999;
			}
		}
	}
	.header-r{
		z-index:999;
		a{		
		    padding:0.9rem 0.75rem;
		    color:#999;
		    text-align: center;
		}
		
	}
}

</style>