<template>
	<div class="category-left">
		<ul class="category-list">		
			<li class="category-item" v-for="(item,index) in CategoryDatas" :key="item.cat_id" >
				<a href="javascript:void(0);" class="category-item-a category" @click="[sendData(index),type=item.cat_id]" :class="{active:type===item.cat_id}">
					<div class="ci-fcategory-ico">
						<img :src="item.wap_logo">
					</div>
					<div class="ci-fcategory-name">{{item.cat_name}}</div>
				</a>
			</li>								
		</ul>	    		
	</div>
</template>

<script>
	import bus from '../../modules/bus'
	import axios from 'axios'
	export default{
		name:'category-left',
		data(){
			return{
				type:'35',
				CategoryDatas:[]
			}
		},
		props:['id'],
		methods:{
			getData(){
				axios.get(this.$root.config.host+'hg/mo_bile/index.php',{
					params:{
						act:'goods_class'
					}
				}).then(res=>{
					this.CategoryDatas = res.data.datas.category_list	
					bus.$emit("DefaultList",this.CategoryDatas[0].child)
				})
			},
			sendData(index){
				console.log(this.CategoryDatas[index])
				bus.$emit("ClickList",this.CategoryDatas[index].child)
			}
		},
		created(){
			this.getData()
		}
	}
</script>

<style lang="scss" scoped>
.category-left{
	width: 3.8rem;
    .category-list{
	    padding: 0 0.5rem;
	    .category-item{
	    	width: 2.8rem;
			height: 2.8rem;
			a{
				display:block;
				color: #999;
				.ci-fcategory-ico{
					width: 1rem;
				    height: 1rem;
				    padding: 0.45rem 0 0.25rem 0;
				    margin: 0 auto;
				    img{
				    	display: block;
					    vertical-align: top;
					    width: 100%;
					    filter: grayscale(100%);
    					opacity: 0.5;				  
				    }
				}
				.ci-fcategory-name{
					font-size: 0.6rem;
				    line-height: 0.9rem;				    
				    text-align: center;
				    width: 100%;
				    height: 0.9rem;
				    padding-bottom: 0.25rem;
				    border-bottom: solid 0.05rem #EEE;
				}
			}
			.active{
				.ci-fcategory-name{
					color: #ED5564;
				    padding-bottom: 0.2rem;
				    border-bottom: solid 0.1rem #ED5564;
				}
				.ci-fcategory-ico img{
					filter: grayscale(0);
					opacity: 1;
				}
			}
	    }
    }
}


</style>