<template>
  <el-menu id="i-main-menu" @select="selected_child" :collapse="isCollapse">
    <!-- 导航1 -- 开始 -->
    <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">菜单</span>
    </el-menu-item>
    <!-- 导航1 -- 结束 -->
    <!-- -->
    <!-- 导航2 -- 开始 -->
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>线上展示数据</span>
      </template>
      <router-link to="/main_exhibit/"><el-menu-item index="2-1">订展比相关查询</el-menu-item></router-link>
    </el-submenu>
    <!-- 导航2 -- 结束 -->
    <!-- 导航3 -- 开始 -->
<!--    <el-submenu index="3">-->
<!--      <template slot="title">-->
<!--        <i class="el-icon-location"></i>-->
<!--        <span>阅读相关统计</span>-->
<!--      </template>-->
<!--      <router-link to="/read_event_c/"><el-menu-item index="3-1">书籍阅读章节统计</el-menu-item></router-link>-->
<!--      <router-link to="/read_event_u/"><el-menu-item index="3-2">书籍阅读用户统计</el-menu-item></router-link>-->
<!--      <router-link to="/read_event_b/"><el-menu-item index="3-3">书籍阅读书籍统计</el-menu-item></router-link>-->
<!--      <router-link to="/main_retention/"><el-menu-item index="3-4">留存相关统计</el-menu-item></router-link>-->
<!--    </el-submenu>-->
    <!-- 导航3 -- 开始 -->
    <!-- 导航4 -- 开始 -->
<!--    <el-submenu index="4">-->
<!--      <template slot="title">-->
<!--        <i class="el-icon-location"></i>-->
<!--        <span>用户类型统计</span>-->
<!--      </template>-->
<!--      <router-link to="/main_user_type/"><el-menu-item index="4-1">用户类型相关统计</el-menu-item></router-link>-->
<!--    </el-submenu>-->
    <!-- 导航4 -- 结束 -->
    <!-- -->
  </el-menu>
</template>

<style>
  #i-main-menu {
    width: 66px;
    height: 100vh;
    top: 78px;
    left:0;
    z-index: 998;
    position: fixed;
  }
  #i-main-menu:not(.el-menu--collapse) {
    width: 260px;
    height: 100vh;
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
    selected_child (index, indexPath) {
      if (index === '1') {
        // 第一个 —— 菜单按钮
        this.isCollapse = !(this.isCollapse)
      } else {
        if (this.isCollapse === false) {
          this.isCollapse = !(this.isCollapse)
        }
      }
    }
  }
}
</script>
