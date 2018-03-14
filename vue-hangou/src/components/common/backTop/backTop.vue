<template>
<!--<div 
	v-scroll-handler='scroll'
	scroll-distance = '300'
	v-show='isShow' class="back-top">
	<i class='fa fa-arrow-up'></i>
</div>-->
      
  <div 
	v-scroll-show='isShow'
	scroll-distance = '300'
	>
	<transition enter-active-class='fadeIn' leave-active-class='fadeOut'>
			<div v-back-top v-if='isShow.value' class="back-top animated">
				<i class='fa fa-arrow-up'></i>
	
			</div>
	</transition>
</div>

</template>

<script>
	export default{
		name:'back-top',
		data(){
			return{
				isShow:{value:false}
			}
		},
		methods:{
			scroll(){
//				this.isShow = true
			}
		}
	}
</script>

<style lang="scss" scoped>
    .back-top {
        width: 40px;height: 40px;line-height: 40px;text-align: center;
        background:#fe6e00;color: #fff;
		border-radius: 100%;
        position: fixed;right: 15px;bottom: 50px;z-index: 999;
    }
</style>

