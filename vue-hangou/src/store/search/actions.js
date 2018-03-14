
import {GET_LIST,SET_LIST} from './const'
import axios from 'axios'
let actions = {

    sendMsg: function({commit}, data) {
			commit("getMsg", data);
		},
      addTodoA: function({commit}, hist) {
			commit("addTodoM", hist);
		},
	[GET_LIST]({commit}) {
	axios.get("/mo_bile/index.php?act=index&op=search_key_list").then(res=>{
					 console.log(res.data.datas.list)
				//将获取到的轮播图数据 放入到billboards数组里
					commit(SET_LIST,res.data.datas.list)
				})
}

        
}
export default actions