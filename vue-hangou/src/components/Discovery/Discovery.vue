<template>
	<div class=" app-discovery">
		<discovery-header></discovery-header>		
		<discovery-banner :BannerDatas="BannerDatas"></discovery-banner>
		<discovery-images :SmallImages="SmallImages" :HomeImages="HomeImages"></discovery-images>
		<discovery-goods :GoodsData="GoodsData"></discovery-goods>	
		 <app-footer></app-footer>
	</div>
</template>

<script>
	import axios from 'axios'
	import DiscoveryHeader from './DiscoveryHeader'
	import DiscoveryBanner from './DiscoveryBanner'
	import DiscoveryImages from './DiscoveryImages'
	import DiscoveryGoods from './DiscoveryGoods'
	import AppFooter from '../common/Footer'
	export default{
		name:'app-discovery',
		components:{
			DiscoveryHeader,DiscoveryBanner,DiscoveryImages,DiscoveryGoods,AppFooter
		},
		data(){
			return{
				BannerDatas:[],
				SmallImages:{},
				HomeImages:{},
				GoodsData:[]
			}
		},
		methods:{
			getData(){
				axios.get(this.$root.config.host+'hg/mo_bile/index.php',{
					params:{
						act:'index',
						op:'special',
						special_id:1
					}
				}).then(res=>{
					this.BannerDatas=res.data.datas.list[0].adv_list.item
					this.SmallImages=res.data.datas.list[1].explode3
					this.HomeImages=res.data.datas.list[2].home3
					this.GoodsData.push(res.data.datas.list[3].goods)
					this.GoodsData.push(res.data.datas.list[4].goods)
				})
			}
		},
		created(){
			this.getData()
		}
	}
</script>

<style lang="scss" scoped>


</style>