const state = {
    productsList : []
}

const getters = {
    getProducts (state){
        return state.productsList;
    },
    getProduct (state){
        //return state
    }
}

const mutations = {
    updateProductList(state,product){
        state.productsList.push(product);
    }
}

const actions = {
    initApp ({commit}){
        
    },
    saveProduct({commit},payload){

    },
    sellProduct({commit},payload){

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}