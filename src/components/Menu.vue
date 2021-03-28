<template>
  <nav class="navbar navbar-expand-lg navbar mainNav fixed-top" id="mainNav">
    <div class="container">
      <router-link
        v-if="showName"
        to="/"
        class="navbar-brand js-scroll-trigger color-name"
      >
        {{ strings.myName }}
      </router-link>

      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars ml-1"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <ItemsMenu :to="'/'" :name="'Home'" />
          <ItemsMenu :to="'/about'" :name="'About'" />
          <ItemsMenu :to="'/experience'" :name="'Experience'" />
          <ItemsMenu :to="'/skill'" :name="'Tecnologies'" />
          <ItemsMenu :to="'/contact'" :name="'Contact'" />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ItemsMenu from "./ItensMenu";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showName: false,
    };
  },
  computed: {
    ...mapGetters({
      strings: "getStrings",
    }),
  },
  components: {
    ItemsMenu,
  },
  created() {
    setTimeout(() => {
      this.showName = true;
    }, 2);
  },
};
</script>

<style scoped>
.mainNav {
  background-color: #212529 !important;
}
.color-name{
  color: #00c385 !important;
}
</style>
