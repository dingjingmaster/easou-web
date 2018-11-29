<template>
  <div class="i-main-content" ref="mainMain"><router-view></router-view></div>
</template>

<script>
export default {
  name: 'MainMain'
}
</script>

<style>
.i-main-content {
  width: calc(100% - 80px);
  height: calc(100% - 88px);
  top: 88px;
  left: 80px;
  z-index: 996;
  float: left;
  position: absolute;
}
</style>
