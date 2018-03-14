<template>
	<div class="user-header">
		<div class="header-l"> 
	    	<a href="javascript:history.go(-1)"> 
	    		<i class="fa fa-gear"></i> 
	    	</a> 
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
		name:'user-header',
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

	.user-header{
		position:absolute;
		left:0;
		top:0;
		z-index:30;
		width:100%;
		height: 1.95rem;
		display:flex;
		justify-content:space-between;
		align-items: center;
		font-size:1.2rem; 
		.header-l{
			padding-left:0.5rem;
		}
		.header-r{
			padding-right:0.5rem;
		}
		a{
			color:#fff;
		}
	}
</style>