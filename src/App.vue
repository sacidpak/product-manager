<template>
  <div>
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "@/components/share/Header"
import Footer from "@/components/share/Footer"
export default {
  components : {
    appHeader : Header,
    appFooter : Footer
  },
  created(){
    this.$store.dispatch("getTradeResult")
    this.$store.dispatch("initApp")
  }
}
</script>

<style>
body{
  background-color: #eeedef;
}

.fade-enter{
  opacity: 0;
}

.fade-enter-active{
  transition: opacity 0.4s ease-out;
}

.fade-leave{
}

.fade-leave-active{
  transition: opacity 0.4s ease-out;
  opacity: 0;
}
</style>
