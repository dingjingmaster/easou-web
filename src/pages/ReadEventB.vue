<template>
  <div id="item-exhibit">
    <h2>阅读章节统计</h2>
    <br/>
    <div class="item-exhibit-chose">
      <el-form ref="form" :model="form" label-width="76px">
        <!-- app -->
        <el-form-item style="margin-bottom:6px;" label="查询APP">
          <el-checkbox-group v-model="form.app">
            <el-checkbox
              style="width:116px;margin:0;padding: 0;"
              v-for="item in app"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item style="margin-bottom:6px;" label="书籍状态">
          <el-checkbox-group v-model="form.itemStatus">
            <el-checkbox
              style="width:116px;margin:0;padding: 0;"
              v-for="item in itemStatus"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item style="margin-bottom:6px;" label="书籍类别">
          <el-checkbox-group v-model="form.itemCategory">
            <el-checkbox
              style="width:116px;margin:0;padding: 0;"
              v-for="item in itemCategory"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item style="margin-bottom:6px;" label="查询指标">
          <el-checkbox-group v-model="form.queryNum">
            <el-checkbox
              style="width:116px;margin:0;padding: 0;"
              v-for="item in queryNum"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item label="选择时间" style="width:670px;">
          <el-date-picker
            v-model="form.timeRange"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            :picker-options="time_range_option">
          </el-date-picker>
        </el-form-item>
        <!-- -->
        <el-form-item>
          <el-button type="primary" @click="on_submit">查询</el-button>
          <el-button @click="init">重置</el-button>
        </el-form-item>
        <!-- -->
      </el-form>
      <!-- -->
    </div>
    <!-- 图片展示 -->
    <div id="read-event-show" style="width: 100%; height: calc(86vh); margin: 20px 16px"></div>
    <div style="width:100%; height: 120px;"></div>
  </div>
</template>

<script>
import axios from 'axios'
// import RequestLineChart from '@/api/RequestLineChart'
import Highcharts from 'highcharts'
require('highcharts/modules/exporting')(Highcharts)
export default {
  name: 'ReadEventB',
  components: {
    // RequestLineChart
  },
  data () {
    return {
      /* 时间选择 */
      time_range_option: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            end.setTime(end.getTime() - 3600 * 1000 * 24 * 2)
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 9)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            end.setTime(end.getTime() - 3600 * 1000 * 24 * 2)
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 32)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            end.setTime(end.getTime() - 3600 * 1000 * 24 * 2)
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 92)
            picker.$emit('pick', [start, end])
          }
        }],
        disabledDate (time) {
          const dt = new Date()
          dt.setUTCFullYear(2018, 10, 30)
          return time.getTime() < dt.getTime()
        }
      },
      form: {
        app: ['宜搜小说'],
        itemStatus: ['全部'],
        itemCategory: ['全部'],
        queryNum: ['书籍量']
      },
      formNumTargetType: true,
      formRateTargetType: false,
      app: [
        {label: '全部', name: 'allApp'},
        {label: '宜搜小说', name: 'easouApp'},
        {label: '微卷', name: 'weijuanApp'},
        {label: '其它', name: 'othApp'}
      ],
      itemStatus: [
        {label: '全部', name: 'allBookStu'},
        {label: '完结', name: 'cmpBookStu'},
        {label: '连载', name: 'noCmpBookStu'},
        {label: '其它', name: 'othBookStu'}
      ],
      itemCategory: [
        {label: '全部', name: 'allItmCate'},
        {label: '按章计费', name: 'tchgItmCate'},
        {label: '包月', name: 'monItmCate'},
        {label: '非包月', name: 'unMonItmCate'},
        {label: '限免', name: 'tfItmCate'},
        {label: '一折书籍', name: 'yzItmCate'},
        {label: '免费CP书', name: 'mcpItmCate'},
        {label: '免费互联网书', name: 'tfreItmCate'},
        {label: '断更', name: 'brkItmCate'},
        {label: '普通', name: 'genItmCate'},
        {label: '赠书', name: 'gveItmCate'},
        {label: '其它', name: 'othItmCate'}
      ],
      queryNum: [
        {label: '书籍量', name: 'itmTag'}
      ]
    }
  },
  methods: {
    init () {
      this.form.app = ['宜搜小说']
      this.form.itemStatus = ['全部']
      this.form.itemCategory = ['全部']
      this.form.queryNum = ['书籍量']
    },
    on_submit () {
      let j
      /* 检查选择是否全面 */
      if (this.form.app.length <= 0) {
        this.$alert('！查询app 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.itemStatus.length <= 0) {
        this.$alert('！书籍状态 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.itemCategory.length <= 0) {
        this.$alert('！阅读类型 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.queryNum.length <= 0) {
        this.$alert('！查询指标 是否选中', '提示', {confirmButtonText: '确定'})
      } else {
        let i
        const request = {}
        request['app'] = []
        for (i = 0; i < this.form.app.length; ++i) {
          for (j = 0; j < this.app.length; ++j) {
            if (this.app[j].label === this.form.app[i]) {
              request['app'].push(this.app[j].name)
              break
            }
          }
        }
        request['itemStatus'] = []
        for (i = 0; i < this.form.itemStatus.length; ++i) {
          for (j = 0; j < this.itemStatus.length; ++j) {
            if (this.itemStatus[j].label === this.form.itemStatus[i]) {
              request['itemStatus'].push(this.itemStatus[j].name)
              break
            }
          }
        }
        request['itemCategory'] = []
        for (i = 0; i < this.form.itemCategory.length; ++i) {
          for (j = 0; j < this.itemCategory.length; ++j) {
            if (this.itemCategory[j].label === this.form.itemCategory[i]) {
              request['itemCategory'].push(this.itemCategory[j].name)
              break
            }
          }
        }
        request['target'] = []
        for (i = 0; i < this.form.queryNum.length; ++i) {
          for (j = 0; j < this.queryNum.length; ++j) {
            if (this.queryNum[j].label === this.form.queryNum[i]) {
              request['target'].push(this.queryNum[j].name)
              break
            }
          }
        }
        request['timeRange'] = this.form.timeRange
        axios({
          url: 'http://10.26.24.87:32000/read_event_b',
          method: 'post',
          data: request,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          }
        }).then(function (response) {
          const obj = response.data
          if ((response.status === 200) && (obj['Status'] === true)) {
            const lines = obj['Lines']
            const y = []
            for (let i = 0; i < lines.length; ++i) {
              const info = lines[i]
              const tmp = {}
              tmp['name'] = info['Introduction']
              tmp['data'] = info['Y']
              y.push(tmp)
            }
            Highcharts.chart('read-event-show', {
              chart: {
                type: 'line'
              },
              credits: {
                enabled: false
              },
              title: {
                text: '书籍量相关统计'
              },
              xAxis: {
                categories: lines[0]['X']
              },
              yAxis: {
                title: {
                  text: '数量查询'
                }
              },
              series: y,
              plotOptions: {
                line: {
                  cursor: 'pointer'
                },
                series: {
                  allowPointSelect: true
                }
              },
              exporting: {
                filename: '线上订展比相关统计'
              },
              navigation: {
                buttonOptions: {
                  align: 'right'
                }
              }
            })
          } else {
            console.log('返回状态错误')
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style>
  #item-exhibit {
    width: 100%;
    padding: 6px 18px;
    background-color: #ffffff;
  }
  #item-exhibit>h2 {
    width: 200px;
    margin: auto;
    font-weight: lighter;
  }
  /* 查询维度 */
  .item-exhibit-chose, .item-exhibit-chose > div{
    width: 100%;
    max-width: 2100px;
  }
  .item-exhibit-chose > div > small {
    font-size: 13pt;
  }
</style>
