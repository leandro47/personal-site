<template>
  <div id="app">
    <Menu />
    <div class="mt-4"></div>
    <transition name="fade-view" mode="out-in">
        <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Menu,
    Footer
  },
};
</script>

<style scoped>

.fade-view-enter, .fade-view-leave-to {
  opacity: 0;
}
.fade-view-enter-active, .fade-view-leave-active {
  transition: opacity .5s ease-in-out;
}
</style>
