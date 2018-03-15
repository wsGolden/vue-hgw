<template>
	<div class="register-box">
		<div class="nctouch-single-nav register-tab">
		    <ul>
		        <li :class="[{'selected':isSelected}]" @click="toggleSelected">
		        	<router-link :to="{name:'GeneralRegister'}">
		        		<i class="fa fa-user-o"></i>普通注册
		        	</router-link>
		        </li>
		        <li :class="[{'selected':!isSelected}]" @click="toggleSelected">
		        	<router-link :to="{path:'/register/mobile'}">
		        		<i class="fa fa-mobile"></i>手机注册
		        	</router-link>
		        </li>
		    </ul>
		</div>
		<router-view></router-view>		
	</div>
</template>

<script>
	export default{
		name:'register-box',
		data(){
			return{
				isSelected:true
			}
		},
		methods:{
			toggleSelected(){
				this.isSelected = !this.isSelected
			}
		}
	}
</script>

<style lang="scss" scoped>
.register-box{
	display: block;
    margin-top: 2rem;
    background-color: #F5F5F5;
    .register-tab{
    	display: block;
	    width: 98%;
	    height: 1.95rem;
	    padding: 0 1%;
	    background: #FFF;
	    border-bottom: solid 0.5rem #EEE;
	    ul{
		    font-size: 0;
		    white-space: nowrap;
		    li{
		    	width: 50%;
		    	display: inline-block;
			    vertical-align: top;
			    text-align: center;
			    height: 1.95rem;
			    a{
			    	display: inline-block;
				    padding: 0.1rem 0.05rem;
				    font-size: 0.6rem;
				    line-height: 1.85rem;
				    color: #333;
				    .fa{
				    	font-size:0.8rem;
				    	margin-right:0.3rem;
				    }
			    }
		    }
		    .selected a{
		    	padding: 0.1rem 0.05rem 0 0.05rem;
			    color: #ED5564;
			    border-bottom: solid 0.1rem #ED5564!important;
			    
		    }
	    }
    }
    
}
</style>