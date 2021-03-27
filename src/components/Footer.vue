<template>
  <footer class="footer py-4">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 text-lg-left">
          Copyright © Leandro da Silva {{ strings.fullyear }}
        </div>
        <div class="col-lg-4 my-3 my-lg-0">
          <a class="btn btn-dark btn-social mx-2" target="_blank" href="https://twitter.com/LeandroDS47">
            <i class="fab fa-twitter"></i>
          </a>
          <a class="btn btn-dark btn-social mx-2" target="_blank" href="https://www.facebook.com/leandro.silva.5059601/">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a class="btn btn-dark btn-social mx-2" target="_blank" href="https://www.linkedin.com/in/leandro-silva-a5b84318b/">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a class="btn btn-dark btn-social mx-2" target="_blank" href="https://github.com/leandro47">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Footer",
  computed: mapGetters({
    strings: "getStrings",
  }),
};
</script>

<style scoped>
</style>