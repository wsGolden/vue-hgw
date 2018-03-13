
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import search from './search'

const store = new Vuex.Store({
	modules:{
		search
	}
})
export default store