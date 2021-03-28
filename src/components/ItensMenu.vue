<template>
  <li class="nav-item" @click.left="closeNavBar">
    <router-link :to="to" class="nav-link js-scroll-trigger">{{
      name
    }}</router-link>
  </li>
</template>

<script>
import Utils from './../mixins/UtilsMixin'
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }
  },
  mixins: [Utils]
};
</script>

<style scoped>
.link-active {
  font: 900;
  color: rgb(87, 194, 162) !important;
}
.nav-link:hover{
  color: rgb(113, 236, 199) !important;
}
</style>