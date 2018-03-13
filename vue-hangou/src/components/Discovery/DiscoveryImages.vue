<template>
	<div class="discovery-images">	
		<div class="tit-bar">{{SmallImages.title}}</div>	
		<ul class="item-pic-list1">		
			<li v-for="item in SmallImages.item" :key="item.data">
				<a href="#">
					<img :src="item.image" alt="">
				</a>
			</li>							
		</ul>
		<ul class="item-pic-list2">		
			<li v-for="i in HomeImages.item" :key="i.data">
				<a href="#">
					<img :src="i.image" alt="">
				</a>
			</li>		
		</ul>
	</div>
	

		

</template>

<script>
	export default{
		name:'discovery-images',
		props:['SmallImages','HomeImages']
	}
</script>

<style lang="scss" scoped>
.tit-bar{
	border-left: solid 0.15rem #ED5564;
    height: 0.8rem;
    margin: 0.5rem 0 0.5rem 0.3rem;
    padding-left: 0.3rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
}
.item-pic-list1{	
	display:flex;			
	li{
		width:33.33%;
		height:43px;			
		a{
			display:block;
			height:100%;
			img{
				width:100%;
				height:100%;
			}
		}
	}			
}
.item-pic-list2{	
	display:flex;			
	li{
		width:50%;
		height:84px;			
		a{
			display:block;
			height:100%;
			img{
				width:100%;				
				height:100%;
			}
		}
	}			
}
</style>