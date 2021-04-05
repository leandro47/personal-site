<template>
  <section class="page-section" id="services">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">{{strings.AboutMsg2}}</h2>
        <h3 class="section-subheading text-muted" id="text1">
        </h3>
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
import { mapGetters } from "vuex";
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
  methods: {
    settext() {
      this.about = this.aboutMe.msg1;
    },
  },
  created() {
    this.settext();

    let str = this.about;
    let char = str.split("").reverse();
    let typer = setInterval(function () {
      if (!char.length) return clearInterval(typer);
      let next = char.pop();
      document.getElementById("text1").innerHTML += next;
    }, 30);
  },
};
</script>

<style scoped>
</style>