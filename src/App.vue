<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <div class="i-main">
      <!-- 图标 -->
      <div class="i-main-logo">
        <img alt="logo" src=""/>
      </div>
      <!-- 标题 -->
      <div class="i-main-title">
        <!-- -->
        <h2>宜搜信息查询</h2>
      </div>
      <!-- 搜索框 -->
      <div class="i-main-search">
        <div style="margin-top:19px;">
          <el-input placeholder="物品信息查找 ..." v-model="itemSearch" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="维度" value="">
              <el-option label="书籍ID" value="1"></el-option>
              <el-option label="书籍名" value="2"></el-option>
              <el-option label="作者名" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <div class="clear"></div>
      <hr style="width:100%;height:1px;margin-top:16px;border:none;background-color:#E0E0E0;">
    </div>
    <!-- 左侧导航栏 -->
    <MainMenu></MainMenu>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu'
export default {
  name: 'App',
  data () {
    return {
      itemSearch: '',
      select: '1'
    }
  },
  methods: {

  },
  components: {
    MainMenu
  }
}
</script>

<style>
  *,div,img,html,head,body,header,ul,li,a,hr,el-option,el-input,h1,h2,h3,h4,h5,h6,el-menu,el-menu-item{
    padding: 0;
    margin: 0;
  }
  body{
    width: 100%;
    height: 100%;
    min-width: 1200px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  #app {
    width: 100%;
    height: 100%;
    min-width: 1200px;
    min-height: 800px;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
  }
  .i-main {
    width: 100%;
    height: 78px;
    min-width: 1200px;
    position: fixed;
  }
  .i-main-title {
    width: 160px;
    margin-top: 18px;
    margin-left: 32%;
    float: left;
    font-family: 楷体, sans-serif;
  }
  .i-main-search{
    width: 360px;
    margin-right: 32px;
    float: right;
  }
  .i-main-logo {
    float: left;
  }
  .i-main-logo>img {
    width: 180px;
    height: 56px;
    margin: 3px 28px;
  }
  .el-select .el-input {
    width: 90px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .clear{
    clear:both;
    height: 0;
    line-height: 0;
    font-size: 0
  }
</style>
