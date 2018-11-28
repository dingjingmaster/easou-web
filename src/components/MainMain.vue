<template>
  <div class="i-main-content" ref="mainMain"><router-view></router-view></div>
</template>

<script>
export default {
  name: 'MainMain'
}
</script>

<style scoped>
.i-main-content {
  width: calc(100% - 80px);
  height: 100%;
  margin-top: 80px;
  margin-left: 70px;
  float: left;
}
</style>
