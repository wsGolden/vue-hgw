
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import search from './search'
import shop from './shop'
const store = new Vuex.Store({
	modules:{
		search,shop
	}
})
export default store