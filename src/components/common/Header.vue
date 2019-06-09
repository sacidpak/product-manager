<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #0493F2">
    <a class="navbar-brand" href="#"></a>
    <router-link to="/" tag="a" class="navbar-brand">
        Product List
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="product-purchase" tag="li" active-class="active" class="nav-item">
            <a class="nav-link">Product Purchase</a>
        </router-link>
        <router-link to="product-sell" tag="li" active-class="active" class="nav-item">
            <a class="nav-link">Product Sell</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>

<style scoped>
</style>
