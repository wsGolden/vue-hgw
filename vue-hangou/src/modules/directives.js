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
//检测滚动距离并在关键的地方更改执行的数据
Vue.directive('scroll-show',function(el,binding){
	 let distance = el.getAttribute('scroll-distance')
	//  console.log(el)
	 window.addEventListener('scroll',function(e){
	 	// console.log(distance)
//	 		 console.log(document.documentElement.scrollTop>distance)
	 		 if(document.documentElement.scrollTop>distance){
	 		 	binding.value.value=true
	 		 }else{
	 		 	binding.value.value=false
	 		 }
			
	 })
})
//回到顶部
Vue.directive('back-top',{
	bind(el){
		el.onclick=function(){
			document.documentElement.scrollTop = 0
//			timer = setInterval(function() {
//				var scoll = document.documentElement.scrollTop || document.body.scrollTop;
//				var speed = Math.floor(-scoll / 50);
//			
//				document.documentElement.scrollTop = document.body.scrollTop = scoll + speed;
//			},50)
//			if(scoll == 0) {
//				clearInterval(timer);
//			}
			
		}
	}
})