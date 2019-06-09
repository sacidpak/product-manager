import Vue from "vue"
import router from "@/router"

const state = {
    productsList : []
}

const getters = {
    getProductsList (state){
        return state.productsList;
    },
    getProduct (state){
        return key => state.productsList.filter(element => {
            return element.key == key 
        })
    }
}

const mutations = {
    updateProductList(state,product){
        state.productsList.push(product);
    }
}

const actions = {
    initApp ({commit}){
        Vue.http.get("https://product-manager-ae591.firebaseio.com/products.json")
                .then(response => {
                    let data = response.body;
                    for(let key in data){
                        data[key].key = key;
                        commit("updateProductList",data[key]);
                    }
                })
    },
    saveProduct({dispatch,commit,state},product){
        Vue.http.post("https://product-manager-ae591.firebaseio.com/products.json",product)
                .then((response) => {
                    product.key = response.body.name;
                    commit("updateProductList",product);
                    let tradeResult = {
                        purchase : product.price,
                        sale : 0,
                        count : product.count
                    };
                    dispatch("setTradeResult",tradeResult);
                    router.replace("/");
                })
    },
    sellProduct({state,commit,dispatch},payload){
        //pass by refferance productList
        let product = state.productsList.filter(element => {
            return element.key == payload.key; 
        });
        if (product){
            let totalCount = product[0].count - payload.count;
            Vue.http.patch("https://product-manager-ae591.firebaseio.com/products/" + payload.key + ".json", { count : totalCount})
                    .then(response => {
                        product[0].count = totalCount;
                        let tradeResult = {
                            purchase : 0,
                            sale : product[0].price,
                            count : payload.count
                        };
                        dispatch("setTradeResult",tradeResult);
                        router.replace("/");
                    });
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}