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
        <h4>{{ item.PERIOD }}</h4>
        <h4 class="subheading">{{item.COMPANY}}</h4>
      </div>
      <div class="timeline-body">
        <p class="text-muted">
         {{item.DESCRIPTION}}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
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