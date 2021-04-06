<template>
  <div class="col-sm-12 col-md-4 mt-4">
    <div class="card text-center" style="width: 100%">
      <a :href="link" target="_blank">
        <div class="card-body">
          <h5 class="card-title">{{ netWork }}</h5>
          <span style="font-size: 4em">
            <i :class="icon"></i>
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    netWork: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
a{
 text-decoration: none;
 color: black;
}
a:hover{
    color: white;
    background-color: black;
}
</style>