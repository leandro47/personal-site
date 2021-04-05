<template>
  <section class="page-section" id="about">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Experience</h2>
        <h3 class="section-subheading text-muted">Places I worked.</h3>
      </div>
      <ul class="timeline">
        <Items v-for="xp in experience" :class="sendClass()" :xp="xp" :key="xp.id" />
        <li class="timeline-inverted">
          <div class="timeline-image">
            <h4>
              <br />
              Let's go!
            </h4>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Items from "./../components/ExperienceItens";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      invert: false,
    };
  },
  components: {
    Items,
  },
  methods: {
    sendClass() {
      this.invert = !this.invert;
      return this.invert === false ? 'timeline-inverted' : ''; 
    },
  },
  computed: {
    ...mapGetters({
      experience: "getExperience",
    }),
  },
};
</script>

<style scoped>
.timeline-image{
  background-color: #61C486 !important;
}
</style>