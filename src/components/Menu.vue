<template>
  <nav class="navbar navbar-expand-lg navbar mainNav fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        Leandro da Silva
      </a>
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
          <li class="nav-item">
            <router-link to="/" class="nav-link js-scroll-trigger"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link js-scroll-trigger"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/experience" class="nav-link js-scroll-trigger"
              >Experience</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/skill" class="nav-link js-scroll-trigger"
              >Tecnologies</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link js-scroll-trigger"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      strings: "getStrings",
    }),
  },
};
</script>

<style scoped>
.mainNav {
  background-color: #212529 !important;
}
</style>
