<template>
	<div class="app-login">
		<common-header></common-header>
		<login-box></login-box>
		<app-footer></app-footer>
	</div>
	
</template>

<script>
	import CommonHeader from './CommonHeader'
	import LoginBox from './LoginBox'
	import AppFooter from '../common/Footer'
	export default{
		name:'app-login',
		components:{
			CommonHeader,LoginBox,AppFooter
		}
	}
</script>

<style lang="scss" scoped>

</style>