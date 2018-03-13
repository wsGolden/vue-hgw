import Vue from 'vue'
//检测滚动距离并在关键的地方更改执行的数据
Vue.directive('scroll-top',function(el,binding){
	 let distance = el.getAttribute('scroll-distance')
	 console.log(el)
	 window.addEventListener('scroll',function(e){
	 	console.log(distance)
//	 		 console.log(document.documentElement.scrollTop>distance)
	 		 if(document.documentElement.scrollTop>distance){
	 		 	binding.value.value=true
	 		 }else{
	 		 	binding.value.value=false
	 		 }
			
	 })
})