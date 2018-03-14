<template>
	<div class=" app-discovery">
		<discovery-header></discovery-header>		
		<discovery-banner :BannerDatas="BannerDatas"></discovery-banner>
		<discovery-images :SmallImages="SmallImages" :HomeImages="HomeImages"></discovery-images>
		<discovery-goods :GoodsData="GoodsData" :cuts="cuts"></discovery-goods>	
		         <app-footer-wrap></app-footer-wrap>
				  <back-top></back-top>
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
	import AppFooterWrap from '../common/Footer-wrap'
	import BackTop from '../common/backTop/backTop'
	export default{
		name:'app-discovery',
		components:{
			DiscoveryHeader,DiscoveryBanner,DiscoveryImages,DiscoveryGoods,AppFooter,AppFooterWrap,BackTop
		},
		data(){
			return{
				BannerDatas:[],
				SmallImages:{},
				HomeImages:{},
				GoodsData:[],
				cuts:[]
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
					console.log(res.data.datas.list.slice(3,5))
					this.cuts = res.data.datas.list.slice(1,4)
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