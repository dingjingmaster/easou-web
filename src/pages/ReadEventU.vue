<template>
  <div id="item-exhibit">
    <h2>阅读用户统计</h2>
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
        <!-- -->
        <el-form-item style="margin-bottom:6px;" label="用户级别">
          <el-checkbox-group v-model="form.userLevel">
            <el-checkbox
              style="width:116px;margin:0;padding: 0;"
              v-for="item in userLevel"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item style="margin-bottom:6px;" label="新旧用户">
          <el-checkbox-group v-model="form.userNewLevel">
            <el-checkbox
              style="width:116px;margin:0;padding: 0;"
              v-for="item in userNewLevel"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item style="margin-bottom:6px;" label="用户包月">
          <el-checkbox-group v-model="form.userMonthLevel">
            <el-checkbox
              style="width:116px;margin:0;padding: 0;"
              v-for="item in userMonthLevel"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item style="margin-bottom:6px;" label="用户付费">
          <el-checkbox-group v-model="form.userFeeLevel">
            <el-checkbox
              style="width:116px;margin:0;padding: 0;"
              v-for="item in userFeeLevel"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item style="margin-bottom:6px;" label="用户地区">
          <el-checkbox-group v-model="form.userAreaLevel">
            <el-checkbox
              style="width:116px;margin:0;padding: 0;"
              v-for="item in userAreaLevel"
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
  name: 'ReadEventU',
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
        userLevel: ['全部'],
        userNewLevel: ['全部'],
        userMonthLevel: ['全部'],
        userFeeLevel: ['全部'],
        userAreaLevel: ['全部'],
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
      userLevel: [
        {label: '全部', name: 'allUsrLevel'},
        {label: '普通用户', name: 'regUsrLevel'},
        {label: '特殊用户', name: 'sphUsrLevel'},
        {label: '其它', name: 'othUsrLevel'}
      ],
      userNewLevel: [
        {label: '全部', name: 'allUsrNew'},
        {label: '新用户', name: 'newUsrNew'},
        {label: '老用户', name: 'oldUsrNew'},
        {label: '其它', name: 'othUsrNew'}
      ],
      userMonthLevel: [
        {label: '全部', name: 'allUsrMon'},
        {label: '包月', name: 'monUsrMon'},
        {label: '非包月', name: 'unMonUsrMon'},
        {label: '其它', name: 'othUsrMon'}
      ],
      userFeeLevel: [
        {label: '全部', name: 'allUsrFee'},
        {label: '纯免费', name: 'freUsrFee'},
        {label: '潜在付费', name: 'mybChgUsrFee'},
        {label: '轻度付费', name: 'lgtChgUsrFee'},
        {label: '中度付费', name: 'mdlChgUsrFee'},
        {label: '重度付费', name: 'hghChgUsrFee'},
        {label: '其它', name: 'othUsrFee'}
      ],
      userAreaLevel: [
        {label: '全部', name: 'allArea'},
        {label: '一类地区', name: 'oneArea'},
        {label: '二类地区', name: 'twoArea'},
        {label: '三类地区', name: 'trdArea'},
        {label: '四类地区', name: 'fthArea'},
        {label: '其它', name: 'othArea'}
      ],
      queryNum: [
        {label: '用户量', name: 'usrTag'}
      ]
    }
  },
  methods: {
    init () {
      this.form.app = ['宜搜小说']
      this.form.userLevel = ['全部']
      this.form.userNewLevel = ['全部']
      this.form.userMonthLevel = ['全部']
      this.form.userFeeLevel = ['全部']
      this.form.userAreaLevel = ['全部']
      this.form.itemStatus = ['全部']
      this.form.itemCategory = ['全部']
      this.form.queryNum = ['书籍量']
    },
    on_submit () {
      let j
      /* 检查选择是否全面 */
      if (this.form.app.length <= 0) {
        this.$alert('！查询app 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.userLevel.length <= 0) {
        this.$alert('！用户级别 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.userNewLevel.length <= 0) {
        this.$alert('！新旧用户 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.userMonthLevel.length <= 0) {
        this.$alert('！用户包月 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.userFeeLevel.length <= 0) {
        this.$alert('！用户付费 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.userAreaLevel.length <= 0) {
        this.$alert('！用户地区 是否选中', '提示', {confirmButtonText: '确定'})
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
        request['userLevel'] = []
        for (i = 0; i < this.form.userLevel.length; ++i) {
          for (j = 0; j < this.userLevel.length; ++j) {
            if (this.userLevel[j].label === this.form.userLevel[i]) {
              request['userLevel'].push(this.userLevel[j].name)
              break
            }
          }
        }
        request['userNewLevel'] = []
        for (i = 0; i < this.form.userNewLevel.length; ++i) {
          for (j = 0; j < this.userNewLevel.length; ++j) {
            if (this.userNewLevel[j].label === this.form.userNewLevel[i]) {
              request['userNewLevel'].push(this.userNewLevel[j].name)
              break
            }
          }
        }
        request['userMonthLevel'] = []
        for (i = 0; i < this.form.userMonthLevel.length; ++i) {
          for (j = 0; j < this.userMonthLevel.length; ++j) {
            if (this.userMonthLevel[j].label === this.form.userMonthLevel[i]) {
              request['userMonthLevel'].push(this.userMonthLevel[j].name)
              break
            }
          }
        }
        request['userFeeLevel'] = []
        for (i = 0; i < this.form.userFeeLevel.length; ++i) {
          for (j = 0; j < this.userFeeLevel.length; ++j) {
            if (this.userFeeLevel[j].label === this.form.userFeeLevel[i]) {
              request['userFeeLevel'].push(this.userFeeLevel[j].name)
              break
            }
          }
        }
        request['userAreaLevel'] = []
        for (i = 0; i < this.form.userAreaLevel.length; ++i) {
          for (j = 0; j < this.userAreaLevel.length; ++j) {
            if (this.userAreaLevel[j].label === this.form.userAreaLevel[i]) {
              request['userAreaLevel'].push(this.userAreaLevel[j].name)
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
          url: 'http://10.26.24.87:32000/read_event_u',
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
                text: '书籍阅读相关统计'
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
