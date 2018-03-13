<template>
	<div class="app-category">
		<category-header></category-header>
		<div class="content">
			<category-left></category-left>
			<category-right></category-right>
			
		</div>		
	</div>
	
</template>

<script>
	import CategoryHeader from './CategoryHeader'
	import CategoryLeft from './CategoryLeft'
	import CategoryRight from './CategoryRight'
	export default{
		name:'app-category',
		components:{
			CategoryHeader,CategoryLeft,CategoryRight
		}
	}
</script>

<style lang="scss" scoped>
	.app-category{		
		display:flex;
		flex-direction: column;
		overflow:hidden;		
		.content{
			flex:1;
			display:flex;	
			overflow:hidden;		
		}
	}
</style>