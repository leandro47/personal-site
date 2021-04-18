<template>
  <section class="page-section" id="about">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Experience</h2>
        <h3 class="section-subheading text-muted">Places I worked.</h3>
      </div>
      <ul class="timeline">
        <Items
          v-for="xps in experience"
          :class="'timeline-inverted'"
          :item="xps"
          :key="xps.ID"
        />
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
import {mapGetters, mapActions} from "vuex";

export default {
  data() {
    return {
    };
  },
  components: {
    Items,
  },
  computed: {
    ...mapGetters({
      experience: "getExperience",
    }),
  },
  methods: mapActions(["setExperience"]),
  created(){
    this.setExperience();
  }
};
</script>

<style scoped>
.timeline-image {
  background-color: #61c486 !important;
}
</style>