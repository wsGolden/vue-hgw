<template>
	<div class="category-right">
		<dl class="category-child-list" v-for="item in CategoryLists" :key="item.cat_id">		
			<dt>
				<a :href="item.cat_link">
					<i class="point"></i>
					{{item.cat_name}}
					<i class="fa fa-right"></i>					
				</a>
			</dt>							
			<dd v-for="i in item.child">
				<router-link class="cate" :to="{name:'searchitem',params:{cates:i.cat_name}}">{{i.cat_name}}</router-link>
			</dd>										
		</dl>
	</div>
</template>

<script>
	import bus from '../../modules/bus'
	export default{
		name:'category-right',
		data(){
			return{
				CategoryLists:[]
			}
		},
		
		mounted(){
			bus.$on("DefaultList",data=>{
				this.CategoryLists=data
			})
			bus.$on("ClickList",data=>{
				this.CategoryLists=data
			})
		}
	}
</script>

<style lang="scss" scoped>
	.category-right{
		flex:1;
		height:100%;
		overflow:auto;
		.category-child-list{
			font-size: 0;
		    width: 100%;
		    background-color: #FFF;
		    dt{
		    	background-color: #FCFCFC;
			    margin: 0.2rem 0;
			    border-style: solid;
			    border-color: #F5F5F5;
			    border-width: 0.05rem 0;
			    a{
			    	display: block;
				    width: 96%;
				    height: 1.48rem;
				    padding: 0 0 0 4%;
				    font-size: 0.6rem;
				    line-height: 1.48rem;
				    color: #111;
				    .point{
				    	background-color: #ED5564;
				    	width: 0.4rem;
					    height: 0.4rem;
					    vertical-align: middle;
					    display: inline-block;
					    border-radius: 0.2rem;
					    margin-right: 0.4rem;
				    }
			    }
		    }
		    dd{
		    	font-size: 0.55rem;
			    line-height: 1.48rem;
			    vertical-align: top;
			    display: inline-block;
			    width: 3.35rem;
			    height: 1.48rem;
			    padding: 0.2rem;
			    margin-left: 0.3rem;
			    border-radius: 0;
			    .cate{
			    	display: block;
				    color: #444;
				    white-space: nowrap;
				    text-overflow: ellipsis;
				    overflow: hidden;
			    }
		    }
		}
	}
</style>