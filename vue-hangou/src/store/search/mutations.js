
import {SET_LIST} from './const'
let mutations = {

    getMsg: function(state, data) {
			state.message = data
		},
    addTodoM: function(state, hist) {
			state.list.push(hist);
		},
	[SET_LIST](state, sears) {
		state.serBox = sears;
		}

}

export default mutations