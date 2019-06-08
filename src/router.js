import Vue from "vue"
import Router from "vue-router"
import ProductList from "./components/products/ProductList"
import ProductSell from "./components/products/ProductSell"
import ProductPurchase from "./components/products/ProductPurchase"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "productList",
      component: ProductList
    },
    {
      path: "/product-sell",
      name: "productSell",
      component: ProductSell
    },
    {
      path: "/product-purchase",
      name: "productPurchase",
      component: ProductPurchase
    },
    {
      path: "*",
      name: "redirect",
      redirect : "/"
    }
  ],
  mode : "history"
})