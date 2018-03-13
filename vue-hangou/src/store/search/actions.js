
let actions = {

    sendMsg: function({commit}, data) {
			commit("getMsg", data);
		},
      addTodoA: function({commit}, hist) {
			commit("addTodoM", hist);
		}
        
}
export default actions