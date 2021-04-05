<template>
  <li>
    <div class="timeline-image">
      <img
        class="rounded-circle img-fluid"
        src="assets/img/about/1.jpg"
        alt=""
      />
    </div>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <h4>{{ xp.period }}</h4>
        <h4 class="subheading">{{xp.company}}</h4>
      </div>
      <div class="timeline-body">
        <p class="text-muted">
         {{xp.description}}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    xp: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.timeline-image{
  background-color: #61C486 !important;
}
</style>