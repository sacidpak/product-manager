import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store/store"
import VueResource from "vue-resource"

Vue.use(VueResource)

Vue.filter("currency",(value) => {
  return parseFloat(value).toLocaleString(undefined,{maximumFractionDigits : 2}) + " $"
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
