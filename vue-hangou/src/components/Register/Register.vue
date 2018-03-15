<template>
	<div class="app-register">
		<common-header></common-header>
		<register-box></register-box>
		<app-footer></app-footer>
	</div>
	
</template>

<script>
	import CommonHeader from '../Login/CommonHeader'
	import RegisterBox from './RegisterBox'
	import AppFooter from '../common/Footer'
	export default{
		name:'app-register',
		components:{
			CommonHeader,RegisterBox,AppFooter
		}
	}
</script>

<style lang="scss" scoped>

</style>