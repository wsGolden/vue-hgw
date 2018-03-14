
import {
    GET_GOODS,
    SET_GOODS
} from './const'

import axios from 'axios'
import config from '../../modules/config'

let page = 1;
let count = 20;
let hasMore = true
let actions = {

    [GET_GOODS] ({commit},callback) {

        if(!hasMore) {
            callback(false);
            return ;
        }

        axios.get(config.host+'shop/api/recommend/home',{
            params:{page,num:count}
        }).then (res => {
            let goods = res.data.data.list
            console.log(goods)
            commit(SET_GOODS,goods)
            let total = res.data.data.total
            console.log(total)

            if(page*count<=total){
                page++;
            }else{
                hasMore = false
            }

            

            callback()
        })
    }
   
}

export default actions