<template>
  <header class="masthead">
    <div class="container">
      <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeInDownBig"
        leave-active-class="animated bounceOutRight"
      >
        <div class="masthead-subheading" v-if="show">
          {{ strings.HomeMsg1 }}
        </div>
      </transition>
      <div class="masthead-heading text-uppercase" id="text2"></div>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated zoomInUp"
        leave-active-class="animated bounceOutRight"
      >
        <a
          v-if="showBtn"
          class="btn btn-primary btn-xl mr-3 text-uppercase js-scroll-trigger animationObject"
          href="https://leandro47.com/personal-data-api/public/resume"
          >{{ strings.HomeMsg3 }}</a
        >
      </transition>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      msg2: "",
      show: false,
      showBtn: false,
    };
  },
  computed: {
    ...mapGetters({
      strings: "getStrings",
    }),
  },
  methods: {
    setText() {
      this.msg2 = this.strings.HomeMsg2;
    },
  },
  created() {
    this.setText();
    setTimeout(() => {
      let str = this.msg2;
      let char = str.split("").reverse();
      let typer = setInterval(function () {
        if (!char.length) return clearInterval(typer);
        let next = char.pop();
        document.getElementById("text2").innerHTML += next;
      }, 100);
    }, 1000);

    setTimeout(() => {
      this.show = true;
    }, 100);

    setTimeout(() => {
      this.showBtn = true;
    }, 3000);
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #00c385;
  border-color: #00c385;
}
.btn-primary:active {
  background-color: #098860 !important;
  border-color: #00c385 !important;
}
</style>