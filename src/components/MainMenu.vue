<template>
  <el-menu class="i-main-menu" v-model="isCollapse" :collapse="isCollapse">
    <!-- 导航1 -- 开始 -->
    <el-menu-item index="1" v-on:click="isCollapse = !isCollapse">
        <i class="el-icon-menu"></i>
        <span slot="title">菜单</span>
    </el-menu-item>
    <!-- 导航1 -- 结束 -->
    <!-- -->
    <!-- 导航2 -- 开始 -->
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>订展比统计</span>
      </template>
      <el-menu-item index="2-1">比例查询</el-menu-item>
      <el-menu-item index="2-2">数量查询</el-menu-item>
    </el-submenu>
    <!-- 导航2 -- 结束 -->
    <!-- 导航3 -- 开始 -->
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>阅读相关统计</span>
      </template>
      <el-menu-item-group index="3-1">
        <template slot="title">留存统计</template>
        <el-menu-item index="3-1-1">留存量</el-menu-item>
        <el-menu-item index="3-1-2">留存率</el-menu-item>
      </el-menu-item-group>
      <!-- -->
      <el-menu-item-group title="3-2">
        <template slot="title">天阅读统计</template>
        <el-menu-item index="3-2-2">天阅读量</el-menu-item>
        <el-menu-item index="3-2-1">天付费阅读量</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <!-- 导航2 -- 结束 -->
    <!-- -->
    <!-- 导航3 -- 开始 -->
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>用户类型统计</span>
      </template>
      <el-menu-item index="4-1">用户类型数量</el-menu-item>
      <el-menu-item index="4-2">用户类型占比</el-menu-item>
    </el-submenu>
    <!-- 导航3 -- 结束 -->
    <!-- -->
  </el-menu>
</template>

<style>
  .i-main-menu {
    top: 84px;
    position: fixed;
  }
  .i-main-menu>el-menu-item{
    height: 100%;
    background-color: #8c0776;
  }
  .i-main-menu:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    min-height: 400px;
  }
</style>

<script>
export default {
  data: function () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      alert(key)
      if (key === 1) {
        alert('ddd')
      }
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
