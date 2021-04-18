<template>
  <div class="col-lg-4 col-sm-6 mb-4">
    <div class="card text-center" style="width: 100%">
      <div class="card-body">
        <h5 class="card-title">{{skill.DESCRIPTION}}</h5>
        <span style="font-size: 4em;">
          <i :class="skill.ICON"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        skill:{
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.card:hover{
    color: white !important;
    background-color: black !important;
    cursor: pointer;
}
</style>