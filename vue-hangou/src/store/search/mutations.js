
let mutations = {

    getMsg: function(state, data) {
			state.message = data
		},
    addTodoM: function(state, hist) {
			state.list.push(hist);
		}
}

export default mutations