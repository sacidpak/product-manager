<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <h3>Product List</h3>
          <hr>
          <table v-if="getProductsList.length > 0" class="table table-hover table-striped table-bordered">
            <thead>
              <th>id</th>
              <th>Title</th>
              <th>Count</th>
              <th>Price</th>
              <th>Description</th>
            </thead>
            <tbody>
              <tr v-for="(product,index) in getProductsList" :key="index">
                <td class="align-middle text-center">
                  <span class="badge badge-info">{{product.key}}</span>
                </td>
                <td class="align-middle text-center">{{product.title}}</td>
                <td :class="getCountColor(product.count)" class="align-middle text-center">{{product.count}}</td>
                <td style="width: 120px;">{{product.price | currency}}</td>
                <td class="align-middle">{{product.description}}</td>
              </tr>
            </tbody>
          </table>
          <div v-else class="alert alert-warning">
            <strong>Product not found</strong>
            <br>
            <small>You can use the <strong>Product Purchase</strong> menu to add a product</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
  computed : {
    ...mapGetters([
      "getProductsList"
    ]),
  },
  methods : {
    getCountColor(count){
      return {
        "bg-danger text-white" : count == 0 || count == null,
        "bg-success text-white" : count > 0
      }
    }
  }
};
</script>

<style scoped>
</style>
