<template>
	
	<div class="discovery-header">
		
		<div class="header-l">
			<a href="">
				<i class="fa fa-angle-left"></i>
			</a>
		</div>
		
		<h1 class="header-title">发现</h1>
		
		<div class="header-r"  @click="toggleNav()">
			<a href="javascript:void(0);">
				<i class="fa fa-ellipsis-h"></i>
			</a>
		</div>
		
		<nctouch-nav v-if="isNavShow" :isNavShow="isNavShow" :toggleNav="toggleNav"></nctouch-nav>
		
	</div>
	
</template>

<script>
	import NctouchNav from '../NctouchNav/NctouchNav'
	export default{
		name:'discovery-header',
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
.discovery-header{
	display:flex;
	justify-content:space-around;
	align-items: center;
	height:59px;	
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
	.header-title{   	
	  		width:8rem;
	  		text-align:left;
	    	font-size: 0.8rem;
		    line-height: 1.95rem;
		    height: 1.95rem;
		    color:#666;
	   
    }
	.header-r{
		z-index:999;
		a{		
		    padding:0.75rem;
		    color:#999;
		    text-align: center;
		}
		
	}
}


</style>