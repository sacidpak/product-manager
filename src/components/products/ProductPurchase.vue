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
          <h3>Product Purchase</h3>
          <hr>
          <div class="form-group">
            <label>Product Title</label>
            <input
              v-model="product.title"
              type="text"
              class="form-control"
              placeholder="Please fill product title"
            >
          </div>
          <div class="form-group">
            <label>Count</label>
            <input
              v-model="product.count"
              type="text"
              class="form-control"
              placeholder="Please fill product count"
            >
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              v-model="product.price"
              type="text"
              class="form-control"
              placeholder="Please fill product price"
            >
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea
              v-model="product.description"
              cols="30"
              rows="5"
              placeholder="Please fill product description"
              class="form-control"
            ></textarea>
          </div>
          <hr>
          <button @click="saveProduct" :disabled="saveEnable" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {
        title: "",
        count: null,
        price: null,
        description: ""
      },
      saveButtonClick: false
    };
  },
  methods: {
    saveProduct() {
      this.$store.dispatch("saveProduct", this.product);
      this.saveButtonClick = true;
    }
  },
  computed: {
    saveEnable() {
      if (
        this.product.title.length > 0 &&
        this.product.description.length > 0 &&
        this.product.count > 0 &&
        this.product.price > 0
      ) {
        return false;
      } else {
        return true;
      }
    },
    isLoading(){
      if(this.saveButtonClick){
        return {
          display : "block"
        }
      }else{
        return {
          display : "none"
        }
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if (
      (this.product.title.length > 0 ||
        this.product.description.length > 0 ||
        this.product.count > 0 ||
        this.product.price > 0) &&
      !this.saveButtonClick
    ) {
      if (confirm("Product not saved! Do you wanna leave?")) {
        next(true);
      } else {
        next(false);
      }
    } else {
      next(true);
    }
  }
};
</script>

<style scoped>
</style>
