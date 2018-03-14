

const getters = {
    all_info (state) {
        let info = {all_price:0,all_num:0}

        state.cars.forEach(good => {
            info.all_num+=good.num
            info.all_price+=good.num*good.price
            info.all_price=parseFloat(info.all_price.toFixed(2));  
        });

        return info
    }
}

export default getters