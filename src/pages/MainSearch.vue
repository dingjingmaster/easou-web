<template>
  <div id="i-search">
    <h2>书籍查询结果</h2>
    <br/>
    <h4>选择要展示字段</h4>
    <el-checkbox-group v-model="itemField">
      <el-checkbox
        style="width:138px;margin:5px 0;padding:0;"
        v-for="item in field"
        :key="item.label"
        :label="item.label">
      </el-checkbox>
    </el-checkbox-group>
    <br/>
    <div>
      <el-table
        border
        :data="searchItemResult"
        style="width: 100%"
        height="850">
        <!-- 书籍ID -->
        <el-table-column
          fixed
          prop="gid"
          label="书籍ID"
          width="130px">
        </el-table-column>
        <!-- 书名 -->
        <el-table-column
          fixed
          prop="name"
          label="书名"
          width="180px">
        </el-table-column>
        <el-table-column
          fixed
          prop="author"
          label="作者名"
          width="180px">
        </el-table-column>
        <el-table-column
          v-if="normNameShow"
          prop="norm_name"
          label="归一化书名"
          width="180px">
        </el-table-column>
        <el-table-column
          v-if="normAuthorShow"
          prop="norm_author"
          label="归一化作者名"
          width="180px">
        </el-table-column>
        <el-table-column
          v-if="normSeriesShow"
          prop="norm_series"
          label="归一化系列名"
          width="180px">
        </el-table-column>
        <el-table-column
          v-if="rankShow"
          prop="rank"
          label="质量打分"
          width="120px">
        </el-table-column>
        <el-table-column
          v-if="tag1Show"
          prop="tag1"
          label="分类1"
          width="160px">
        </el-table-column>
        <el-table-column
          v-if="tag2Show"
          prop="tag2"
          label="分类2"
          width="160px">
        </el-table-column>
        <el-table-column
          v-if="viewCountShow"
          prop="view_count"
          label="历史累计订阅量"
          width="160px">
        </el-table-column>
        <el-table-column
          v-if="statusShow"
          prop="status"
          label="连载/完结"
          width="160px">
        </el-table-column>
        <el-table-column
          v-if="feeFlagShow"
          prop="fee_flag"
          label="付费类型"
          width="160px">
        </el-table-column>
        <el-table-column
          v-if="ncpShow"
          prop="ncp"
          label="cp名"
          width="160px">
        </el-table-column>
        <el-table-column
          v-if="intimeShow"
          prop="intime_stamp"
          label="入库时间"
          width="160px">
        </el-table-column>
        <el-table-column
          v-if="uptimeShow"
          prop="chapter_uptime"
          label="更新时间"
          width="160px">
        </el-table-column>
        <el-table-column
          v-if="maskLevelShow"
          prop="make_level"
          label="是否屏蔽"
          width="160px">
        </el-table-column>
        <el-table-column
          v-if="byShow"
          prop="by"
          label="是否包月"
          width="160px">
        </el-table-column>
        <el-table-column
          v-if="tfShow"
          prop="tf"
          label="是否限免"
          width="160px">
        </el-table-column>
        <el-table-column
          v-if="rndShow"
          prop="rn_d"
          label="天阅读量"
          width="160px">
        </el-table-column>
        <el-table-column
          v-if="rtdShow"
          prop="rt_d"
          label="天留存率"
          width="160px">
        </el-table-column>
        <el-table-column
          v-if="rnwShow"
          prop="rn_w"
          label="周订阅量"
          width="160px">
        </el-table-column>
        <el-table-column
          v-if="rtwShow"
          prop="rt_w"
          label="周留存率"
          width="160px">
        </el-table-column>
        <el-table-column
          fixed
          prop="update_time"
          label="书籍信息更新时间"
          width="160px">
        </el-table-column>
      </el-table>
    </div>
    <div style="width:98%; height: 100px;"></div>
  </div>
</template>

<script>
export default {
  name: 'MainSearch',
  data: function () {
    return {
      itemField: [
        '归一化书名',
        '归一化作者名',
        '归一化系列名',
        '质量打分',
        '标签1',
        '标签2',
        '历史累计订阅量',
        '连载/完结状态',
        '是否付费',
        'cp名',
        '入库时间',
        '更新时间',
        '是否屏蔽',
        '是否包月',
        '是否限免',
        '天阅读量',
        '天留存率',
        '周阅读量',
        '周留存率'
      ],
      field: [
        {name: 'norm_name', label: '归一化书名'},
        {name: 'norm_author', label: '归一化作者名'},
        {name: 'norm_series', label: '归一化系列名'},
        {name: 'rank', label: '质量打分'},
        {name: 'tag1', label: '标签1'},
        {name: 'tag2', label: '标签2'},
        {name: 'view_count', label: '历史累计订阅量'},
        {name: 'status', label: '连载/完结状态'},
        {name: 'fee_flag', label: '是否付费'},
        {name: 'ncp', label: 'cp名'},
        {name: 'intime_stamp', label: '入库时间'},
        {name: 'chapter_update', label: '更新时间'},
        {name: 'mask_level', label: '是否屏蔽'},
        {name: 'by', label: '是否包月'},
        {name: 'tf', label: '是否限免'},
        {name: 'rn_d', label: '天阅读量'},
        {name: 'rt_d', label: '天留存率'},
        {name: 'rn_w', label: '周阅读量'},
        {name: 'rt_w', label: '周留存率'}
      ],
      searchItemResult: [
        {gid: 'i_10000'}
      ],
      normNameShow: true,
      normAuthorShow: true,
      normSeriesShow: true,
      rankShow: true,
      tag1Show: true,
      tag2Show: true,
      viewCountShow: true,
      statusShow: true,
      feeFlagShow: true,
      ncpShow: true,
      intimeShow: true,
      uptimeShow: true,
      maskLevelShow: true,
      byShow: true,
      tfShow: true,
      rndShow: true,
      rtdShow: true,
      rnwShow: true,
      rtwShow: true
    }
  }
}
</script>

<style>
  #i-search {
    width: 100%;
    padding: 6px 18px;
    background-color: #ffffff;
  }
  #i-search>h2 {
    width: 180px;
    margin: auto;
    font-weight: lighter;
  }
  #i-search>h4 {
    width: 180px;
    margin: 12px 0;
    font-weight: lighter;
  }
</style>
