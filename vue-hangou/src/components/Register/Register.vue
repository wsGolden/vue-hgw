<template>
	<div class="app-register">
		<common-header></common-header>
		<app-footer></app-footer>
	</div>
	
</template>

<script>
	import CommonHeader from '../Login/CommonHeader'
	import AppFooter from '../common/Footer'
	export default{
		name:'app-register',
		components:{
			CommonHeader,AppFooter
		}
	}
</script>

<style lang="scss" scoped>

</style>