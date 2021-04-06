<template>
  <section class="page-section bg-light" id="portfolio">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Tecnologies</h2>
        <h3 class="section-subheading text-muted">
          My skills. ;D
        </h3>
      </div>
      <div class="row">
        <Skill v-for="tec in skills" :skill="tec" :key="tec.id"/>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Skill from './../components/SkillItems'
export default {
  components:{
    Skill
  },
  computed:{
    ...mapGetters({
      skills : 'getTecnologies'
    })
  }
};
</script>

<style scoped>
</style>