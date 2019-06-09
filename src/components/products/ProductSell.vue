<template>
  <div class="container">
    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Product Sell</h3>
          <hr>
          <div class="form-group">
            <label>Product Title</label>
            <select v-model="selectedProduct" @change="productSelected" class="form-control">
              <option selected disabled></option>
              <option
                v-for="(product,index) in getProductsList"
                :key="index"
                :value="product.key"
                :disabled="product.count == 0"
              >{{product.title}}</option>
            </select>
          </div>
          <transition name="fade" mode="out-in">
            <div v-if="product != null" class="card mb-2 border border-danger">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3">
                      <span class="badge badge-info">Count : {{product.count}}</span>
                      <span class="badge badge-primary">Price : {{product.price | currency}}</span>
                    </div>
                    <p class="border border-warning p-2 text-secondary">{{product.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <div class="form-group">
            <label>Count</label>
            <input
              v-model="productCount"
              type="text"
              class="form-control"
              placeholder="Product count..."
            >
          </div>
          <hr>
          <button @click="save" :disabled="saveEnable" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedProduct: null,
      product: null,
      productCount: null,
      saveButtonClick: false
    };
  },
  computed: {
    ...mapGetters(["getProductsList"]),
    isLoading() {
      if (this.saveButtonClick) {
        return {
          display: "block"
        };
      } else {
        return {
          display: "none"
        };
      }
    },
    saveEnable() {
      if (this.selectedProduct !== null && this.productCount > 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    productSelected() {
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
    },
    save() {
      let product = {
        key: this.selectedProduct,
        count: this.productCount
      };
      this.$store.dispatch("sellProduct", product);
      this.saveButtonClick = true;
    }
  },
  beforeRouteLeave(to, from, next) {
    if ((this.selectedProduct !== null || this.productCount > 0) && !this.saveButtonClick ) {
      if (confirm("Product not saved! Do you wanna leave?")) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  }
};
</script>

<style scoped>
.border-danger {
  border-style: dashed !important;
}
</style>
