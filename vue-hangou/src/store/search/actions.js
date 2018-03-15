
import {GET_LIST,SET_LIST} from './const'
import axios from 'axios'
let actions = {
      addTodoA: function({commit}, hist) {
			commit("addTodoM", hist);
	},
	[GET_LIST]({commit}) {
	axios.get("/mo_bile/index.php?act=index&op=search_key_list").then(res=>{				
					commit(SET_LIST,res.data.datas.list)
				})
}

        
}
export default actions