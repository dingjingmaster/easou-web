<template>
  <div class="i-main">
    <!-- 标题 -->
    <div class="i-main-title"><h2>宜搜信息查询（相关性组）</h2></div>
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
</template>
<script>
export default {
  data () {
    return {
      itemSearch: '',
      select: '1'
    }
  },
  methods: {
  }
}
</script>

<style>
  .i-main {
    width: 100%;
    height: 78px;
    min-width: 1200px;
    z-index: 999;
    position: fixed;
    background-color: #FFFFFF;
  }
  .i-main-title {
    width: 358px;
    margin-top: 28px;
    margin-left: 86px;
    float: left;
    font-family: 楷体, sans-serif;
  }
  .i-main-search{
    width: 360px;
    margin-right: 66px;
    float: right;
  }
  .i-main-logo>img {
    width: 180px;
    height: 56px;
    margin: 3px 28px;
  }
  .el-select .el-input {
    width: 90px; /* 搜素框长度 */
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
