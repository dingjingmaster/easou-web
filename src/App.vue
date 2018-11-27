<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <MainHeader></MainHeader>
    <div class="clear"></div>
    <!-- 左侧导航栏 -->
    <MainMenu></MainMenu>
    <div class="clear"></div>
    <!-- 右侧主要内容 -->
    <MainMain></MainMain>
    <div class="clear"></div>
    <!-- 页脚 -->
    <MainFooter></MainFooter>
    <div class="clear"></div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainMenu from '@/components/MainMenu'
import MainMain from '@/components/MainMain'
import MainFooter from '@/components/MainFooter'
export default {
  name: 'App',
  methods: {

  },
  components: {
    MainHeader,
    MainMenu,
    MainMain,
    MainFooter
  }
}
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    min-width: 1200px;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 0;
  }
  .clear {
    clear: both;
    height: 0;
  }
</style>
