<template>
  <div class="i-main">
    <!-- 标题 -->
    <div class="i-main-title"><h2>宜搜信息查询（相关性组）</h2></div>
    <!-- 搜索框 -->
    <div class="i-main-search">
      <div style="margin-top:19px;">
        <el-input placeholder="物品信息查找 ..." v-model="itemSearch" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="维度" value="" style="width:100px;">
            <el-option label="书籍ID" value="1"></el-option>
            <el-option label="书籍名" value="2"></el-option>
            <el-option label="作者名" value="3"></el-option>
          </el-select>
          <el-button slot="append" v-on:click="search_item" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <div class="clear"></div>
    <hr style="width:100%;height:1px;margin-top:16px;border:none;background-color:#E0E0E0;">
  </div>
</template>
<script>
import axios from 'axios'
import bus from '@/api/Bus'
export default {
  data () {
    return {
      itemSearch: '',
      select: '1',
      queryResult: []
    }
  },
  methods: {
    search_item () {
      var request = {}
      request['reqType'] = ''
      request['value'] = []
      if (this.itemSearch === '') {
        return
      }
      switch (this.select) {
        case '1':
          request['reqType'] = 'gid'
          var canSplit = true
          this.itemSearch = this.itemSearch.replace('\t', '')
          this.itemSearch = this.itemSearch.replace('\n', '')
          this.itemSearch = this.itemSearch.replace('\r', '')
          var arr = this.itemSearch.split(';')
          if (arr.length >= 2) {
            canSplit = false
          }
          if (canSplit) {
            arr = this.itemSearch.split(',')
            if (arr.length >= 2) {
              canSplit = false
            }
          }
          if (canSplit) {
            arr = this.itemSearch.split(' ')
            if (arr.length >= 2) {
              canSplit = false
            }
          }
          request['value'] = []
          for (var i = 0; i < arr.length; i++) {
            request['value'][i] = arr[i].trim()
          }
          break
        case '2':
          request['reqType'] = 'name'
          request['value'] = [this.itemSearch.trim()]
          break
        case '3':
          request['reqType'] = 'author'
          request['value'] = [this.itemSearch.trim()]
          break
      }

      var result = []
      axios({
        url: 'http://10.26.24.87:32000/search_item',
        method: 'post',
        data: request,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }).then(function (response) {
        const obj = response.data
        if ((response.status === 200) && (obj['Status'] === true)) {
          var js = obj['Data']
          result = js
          bus.$emit('item', js)
        } else {
          console.log('返回状态错误')
        }
      }).catch(function (error) {
        console.log(error)
      })
      this.queryResult = result
      window.location.href = 'http://10.26.24.87:32000/#/search/'
    }
  },
  destroyed () {
    bus.$emit('item', this.queryResult)
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
    width: 380px;
    margin-right: 40px;
    float: right;
  }
  .i-main-logo>img {
    width: 180px;
    height: 56px;
    margin: 3px 28px;
  }
  .el-input, .el-select>.el-input--suffix {
    width: 100px;
  }
  .el-input-group__prepend>input {
    width: 200px;
  }
  .el-input>input .el-input--suffix{
    width: 100px;
  }
  .el-input__inner {
    width: 80px;
  }
  .i-main-search>div>div>input {
    width: 218px;
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
