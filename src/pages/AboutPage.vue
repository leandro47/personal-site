<template>
  <section class="page-section" id="services">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">{{strings.AboutMsg2}}</h2>
        <h3 class="section-subheading text-muted">{{aboutMe.msg1}}</h3>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-md-4 text-center mr-3 ml-3">
          <img src="../assets/img/about.svg" class="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions} from "vuex";
export default {
  data() {
    return {
      about: "",
    };
  },
  computed: {
    ...mapGetters({
      strings: "getStrings",
      aboutMe: "getAboutMe",
    }),
  },
  methods: mapActions(['setAboutMe']),
  created(){
    this.setAboutMe();
  }
};
</script>

<style scoped>
</style>