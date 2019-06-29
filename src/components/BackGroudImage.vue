<template>
  <div class="backgroud row">
    <div class="col-sm-4 ml-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackGroudImage'
}
</script>

<style scoped>
  .backgroud{
    background-image: url("../assets/adminImage/9.jpg");
    width: 1565px;
    height: 730px;
  }
</style>
