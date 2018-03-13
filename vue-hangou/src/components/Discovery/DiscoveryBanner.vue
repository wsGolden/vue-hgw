<template>
	<div class="swipper-container discovery-banner">		
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="item in BannerDatas" :key="item.data">
				<a href="#">
					<img width="100%" :src="item.image" alt="" />
				</a>
			</div>
		</div>				
	</div>
</template>

<script>
	import Swiper from 'swiper'
	export default{
		name:'discovery-banner',
		props:['BannerDatas'],
		updated(){			
			new Swiper('.discovery-banner',{
		        loop:true
		   })			
		}
	}
</script>

<style lang="scss" scoped>

</style>