<template>
  <div id="main-retention-rate">
    <h2>留存率相关查询</h2>
    <br/>
    <div class="main-retention-rate-form">
      <el-form ref="form" :model="form" label-width="76px">
        <!-- 选择查询维度 -->
        <el-form-item style="margin-bottom:6px;" label="查询维度">
          <el-select v-on:change="chose_weidu" v-model="form.weidu" placeholder="选择查询维度">
            <el-option
              v-for="item in weidu"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- 如果选中限免维度 -->
        <!-- 限免维度划分 -->
        <el-form-item v-if="ifLimitfree" style="margin-bottom:6px;" label="限免批次">
          <el-checkbox-group v-model="form.limitfree">
            <el-checkbox
              style="width:126px;margin:0;padding:0;"
              v-for="item in limitfree"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 付费类型 -->
        <el-form-item v-if="ifFee" style="margin-bottom:6px;" label="付费类型">
          <el-checkbox-group v-model="form.fee">
            <el-checkbox
              style="width:126px;margin:0;padding:0;"
              v-for="item in fee"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 书籍状态 -->
        <el-form-item v-if="ifStatus" style="margin-bottom:6px;" label="书籍状态">
          <el-checkbox-group v-model="form.status">
            <el-checkbox
              style="width:126px;margin:0;padding:0;"
              v-for="item in status"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 订阅级别 -->
        <el-form-item v-if="ifViewcount" style="margin-bottom:6px;" label="订阅级别">
          <el-checkbox-group v-model="form.viewCount">
            <el-checkbox
              style="width:126px;margin:0;padding:0;"
              v-for="item in viewCount"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 入库时间 -->
        <el-form-item v-if="ifIntime" style="margin-bottom:6px;" label="入库时间">
          <el-checkbox-group v-model="form.intime">
            <el-checkbox
              style="width:126px;margin:0;padding:0;"
              v-for="item in intime"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 更新时间 -->
        <el-form-item v-if="ifUptime" style="margin-bottom:6px;" label="更新时间">
          <el-checkbox-group v-model="form.uptime">
            <el-checkbox
              style="width:126px;margin:0;padding:0;"
              v-for="item in uptime"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 一级分类 -->
        <el-form-item v-if="ifClassify1" style="margin-bottom:6px;" label="一级分类">
          <el-checkbox-group v-model="form.classify1">
            <el-checkbox
              style="width:126px;margin:0;padding:0;"
              v-for="item in classify1"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <!-- 目标选择 -->
        <el-form-item style="margin-bottom:6px;" label="数量/占比">
          <el-radio-group v-on:change="chose_num_or_rate" v-model="numRate">
            <el-radio style="width:126px;margin:0;padding: 0;"
                      :label="2">比例查询</el-radio>
            <el-radio style="width:126px;margin:0;padding: 0;"
                      :label="1">留存量查询</el-radio>
            <el-radio style="width:126px;margin:0;padding: 0;"
                      :label="3">上段时间阅读量查询</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 查询指标 -->
        <el-form-item v-if="numTarget" style="margin-bottom:6px;" label="查询指标">
          <el-checkbox-group v-model="form.queryNum">
            <el-checkbox
              style="width:126px;margin:0;padding: 0;"
              v-for="item in queryNum"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 查询指标 -->
        <el-form-item v-if="rateTarget" style="margin-bottom:6px;" label="查询指标">
          <el-checkbox-group v-model="form.queryRate">
            <el-checkbox
              style="width:126px;margin:0;padding: 0;"
              v-for="item in queryRate"
              :key="item.name"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item v-if="lastnumTarget" style="margin-bottom:6px;" label="查询指标">
          <el-checkbox-group v-model="form.queryLastnum">
            <el-checkbox
              style="width:126px;margin:0;padding: 0;"
              v-for="item in queryLastnum"
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
    </div>
    <!-- 图片展示 -->
    <div id="main-retention-show" style="width: 100%; height: calc(86vh); margin: 20px 16px"></div>
    <div style="width:100%; height: 120px;"></div>
  </div>
</template>

<script>
import axios from 'axios'
import RequestLineChart from '@/api/RequestLineChart'
import Highcharts from 'highcharts'
require('highcharts/modules/exporting')(Highcharts)
export default {
  name: 'MainRetention',
  components: {
    RequestLineChart
  },
  methods: {
    chose_weidu () {
      var weidu = this.form.weidu
      this.ifLimitfree = false
      this.ifStatus = false
      this.ifViewcount = false
      this.ifIntime = false
      this.ifUptime = false
      this.ifFee = false
      this.ifClassify1 = false
      this.init()
      switch (weidu) {
        case 'limitfree':
          this.ifLimitfree = true
          break
        case 'fee':
          this.ifFee = true
          break
        case 'status':
          this.ifFee = true
          this.ifStatus = true
          break
        case 'viewCount':
          this.ifFee = true
          this.ifViewcount = true
          break
        case 'intime':
          this.ifFee = true
          this.ifIntime = true
          break
        case 'uptime':
          this.ifFee = true
          this.ifUptime = true
          break
        case 'classify1':
          this.ifFee = true
          this.ifClassify1 = true
          break
      }
      this.form.weidu = weidu
    },
    on_submit () {
      var flag = true
      let i
      let j
      const request = {}
      if (this.form.weidu === '') { flag = false; this.$alert('！查询维度 是否选中', '提示', {confirmButtonText: '确定'}) }
      switch (this.form.weidu) {
        case 'limitfree':
          if (this.form.limitfree.length <= 0) { flag = false; this.$alert('！限免维度 是否选中', '提示', {confirmButtonText: '确定'}) }
          request['limitfree'] = []
          for (i = 0; i < this.form.limitfree.length; ++i) {
            for (j = 0; j < this.limitfree.length; ++j) {
              if (this.limitfree[j].label === this.form.limitfree[i]) {
                request['limitfree'].push(this.limitfree[j].name)
                break
              }
            }
          }
          break
        case 'fee':
          if (this.form.fee.length <= 0) { flag = false; this.$alert('！付费维度 是否选中', '提示', {confirmButtonText: '确定'}) }
          request['fee'] = []
          for (i = 0; i < this.form.fee.length; ++i) {
            for (j = 0; j < this.fee.length; ++j) {
              if (this.fee[j].label === this.form.fee[i]) {
                request['fee'].push(this.fee[j].name)
                break
              }
            }
          }
          break
        case 'status':
          if (this.form.fee.length <= 0) { flag = false; this.$alert('！付费维度 是否选中', '提示', {confirmButtonText: '确定'}) }
          if (this.form.status.length <= 0) { flag = false; this.$alert('！书籍状态维度 是否选中', '提示', {confirmButtonText: '确定'}) }
          request['fee'] = []
          for (i = 0; i < this.form.fee.length; ++i) {
            for (j = 0; j < this.fee.length; ++j) {
              if (this.fee[j].label === this.form.fee[i]) {
                request['fee'].push(this.fee[j].name)
                break
              }
            }
          }
          request['status'] = []
          for (i = 0; i < this.form.status.length; ++i) {
            for (j = 0; j < this.status.length; ++j) {
              if (this.status[j].label === this.form.status[i]) {
                request['status'].push(this.status[j].name)
                break
              }
            }
          }
          break
        case 'viewCount':
          if (this.form.fee.length <= 0) { flag = false; this.$alert('！付费维度 是否选中', '提示', {confirmButtonText: '确定'}) }
          if (this.form.viewCount.length <= 0) { flag = false; this.$alert('！订阅量维度 是否选中', '提示', {confirmButtonText: '确定'}) }
          request['fee'] = []
          for (i = 0; i < this.form.fee.length; ++i) {
            for (j = 0; j < this.fee.length; ++j) {
              if (this.fee[j].label === this.form.fee[i]) {
                request['fee'].push(this.fee[j].name)
                break
              }
            }
          }
          request['viewCount'] = []
          for (i = 0; i < this.form.viewCount.length; ++i) {
            for (j = 0; j < this.viewCount.length; ++j) {
              if (this.viewCount[j].label === this.form.viewCount[i]) {
                request['viewCount'].push(this.viewCount[j].name)
                break
              }
            }
          }
          break
        case 'intime':
          if (this.form.fee.length <= 0) { flag = false; this.$alert('！付费维度 是否选中', '提示', {confirmButtonText: '确定'}) }
          if (this.form.intime.length <= 0) { flag = false; this.$alert('！入库时间维度 是否选中', '提示', {confirmButtonText: '确定'}) }
          request['fee'] = []
          for (i = 0; i < this.form.fee.length; ++i) {
            for (j = 0; j < this.fee.length; ++j) {
              if (this.fee[j].label === this.form.fee[i]) {
                request['fee'].push(this.fee[j].name)
                break
              }
            }
          }
          request['intime'] = []
          for (i = 0; i < this.form.intime.length; ++i) {
            for (j = 0; j < this.intime.length; ++j) {
              if (this.intime[j].label === this.form.intime[i]) {
                request['intime'].push(this.intime[j].name)
                break
              }
            }
          }
          break
        case 'uptime':
          if (this.form.fee.length <= 0) { flag = false; this.$alert('！付费维度 是否选中', '提示', {confirmButtonText: '确定'}) }
          if (this.form.uptime.length <= 0) { flag = false; this.$alert('！更新时间维度 是否选中', '提示', {confirmButtonText: '确定'}) }
          request['fee'] = []
          for (i = 0; i < this.form.fee.length; ++i) {
            for (j = 0; j < this.fee.length; ++j) {
              if (this.fee[j].label === this.form.fee[i]) {
                request['fee'].push(this.fee[j].name)
                break
              }
            }
          }
          request['uptime'] = []
          for (i = 0; i < this.form.uptime.length; ++i) {
            for (j = 0; j < this.uptime.length; ++j) {
              if (this.uptime[j].label === this.form.uptime[i]) {
                request['uptime'].push(this.uptime[j].name)
                break
              }
            }
          }
          break
        case 'classify1':
          if (this.form.fee.length <= 0) { flag = false; this.$alert('！付费维度 是否选中', '提示', {confirmButtonText: '确定'}) }
          if (this.form.classify1.length <= 0) { flag = false; this.$alert('！一级分类维度 是否选中', '提示', {confirmButtonText: '确定'}) }
          request['fee'] = []
          for (i = 0; i < this.form.fee.length; ++i) {
            for (j = 0; j < this.fee.length; ++j) {
              if (this.fee[j].label === this.form.fee[i]) {
                request['fee'].push(this.fee[j].name)
                break
              }
            }
          }
          request['classify1'] = []
          for (i = 0; i < this.form.classify1.length; ++i) {
            for (j = 0; j < this.classify1.length; ++j) {
              if (this.classify1[j].label === this.form.classify1[i]) {
                request['classify1'].push(this.classify1[j].name)
                break
              }
            }
          }
          break
      }
      /* 查询目标 */
      request['target'] = []
      if (this.form.queryNum.length <= 0 && this.form.queryRate.length <= 0 && this.form.queryLastnum.length <= 0) {
        flag = false
        this.$alert('！查询目标 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.numRate === 2) {
        request['types'] = 'rate'
        for (i = 0; i < this.form.queryRate.length; ++i) {
          for (j = 0; j < this.queryRate.length; ++j) {
            if (this.queryRate[j].label === this.form.queryRate[i]) {
              request['target'].push(this.queryRate[j].name)
              break
            }
          }
        }
      } else if (this.numRate === 1) {
        request['types'] = 'num'
        for (i = 0; i < this.form.queryNum.length; ++i) {
          for (j = 0; j < this.queryNum.length; ++j) {
            if (this.queryNum[j].label === this.form.queryNum[i]) {
              request['target'].push(this.queryNum[j].name)
              break
            }
          }
        }
      } else if (this.numRate === 3) {
        request['types'] = 'lastNum'
        for (i = 0; i < this.form.queryLastnum.length; ++i) {
          for (j = 0; j < this.queryLastnum.length; ++j) {
            if (this.queryLastnum[j].label === this.form.queryLastnum[i]) {
              request['target'].push(this.queryLastnum[j].name)
              break
            }
          }
        }
      }
      /* 查询时间 */
      if (this.form.timeRange.length !== 2) {
        flag = false
        this.$alert('！查询时间 是否选中', '提示', {confirmButtonText: '确定'})
      } else {
        request['timerange'] = this.form.timeRange
      }
      if (flag) {
        request['weidu'] = this.form.weidu
        axios({
          url: 'http://10.26.24.87:32000/retention',
          // url: 'http://127.0.0.1:32000/retention',
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
            // const formNumTargetType = this.formNumTargetType
            Highcharts.chart('main-retention-show', {
              chart: {
                type: 'line'
              },
              credits: {
                enabled: false
              },
              title: {
                text: '留存相关统计'
              },
              xAxis: {
                categories: lines[0]['X']
              },
              yAxis: {
                title: {
                  text: '数量查询/比例查询(100%)'
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
                filename: '留存相关统计'
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
    },
    chose_num_or_rate () {
      switch (this.numRate) {
        case 1 :
          this.numTarget = true
          this.rateTarget = false
          this.lastnumTarget = false
          this.form.queryRate = []
          this.form.queryLastnum = []
          break
        case 2 :
          this.numTarget = false
          this.rateTarget = true
          this.lastnumTarget = false
          this.form.queryNum = []
          this.form.queryLastnum = []
          break
        case 3 :
          this.numTarget = false
          this.rateTarget = false
          this.lastnumTarget = true
          this.form.queryRate = []
          this.form.queryNum = []
      }
    },
    init () {
      this.numRate = 2
      this.form.weidu = ''
      this.form.limitfree = []
      this.form.fee = []
      this.form.status = []
      this.form.viewCount = []
      this.form.intime = []
      this.form.uptime = []
      this.form.classify1 = []
      this.form.queryRate = []
      this.form.queryNum = []
      this.form.timeRange = []
      this.numTarget = false
      this.rateTarget = true
    }
  },
  data () {
    return {
      ifLimitfree: false,
      ifStatus: false,
      ifViewcount: false,
      ifIntime: false,
      ifUptime: false,
      ifFee: false,
      ifClassify1: false,
      numTarget: false,
      lastnumTarget: false,
      rateTarget: true,
      numRate: 2,
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
        }, {
          text: '最近一年',
          onClick (picker) {
            const end = new Date()
            end.setTime(end.getTime() - 3600 * 1000 * 24 * 2)
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 368)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近两年',
          onClick (picker) {
            const end = new Date()
            end.setTime(end.getTime() - 3600 * 1000 * 24 * 2)
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 733)
            picker.$emit('pick', [start, end])
          }
        }
        ],
        disabledDate (time) {
          const dt = new Date()
          dt.setUTCFullYear(2018, 0, 0)
          return time.getTime() < dt.getTime()
        }
      },
      form: {
        weidu: '',
        limitfree: [],
        fee: [],
        status: [],
        viewCount: [],
        intime: [],
        uptime: [],
        classify1: [],
        queryRate: [],
        queryNum: [],
        queryLastnum: [],
        timeRange: []
      },
      weidu: [
        {label: '限免批次', value: 'limitfree'},
        {label: '付费类型', value: 'fee'},
        {label: '书籍状态', value: 'status'},
        {label: '订阅级别', value: 'viewCount'},
        {label: '入库时间', value: 'intime'},
        {label: '更新时间', value: 'uptime'},
        {label: '一级分类', value: 'classify1'}
      ],
      limitfree: [
        {label: '第一批限免', name: 'limfe1'},
        {label: '第二批限免', name: 'limfe2'},
        {label: '第三批限免', name: 'limfe3'},
        {label: '第四批限免', name: 'limfe4'}
      ],
      fee: [
        {label: '免费', name: 'freFee'},
        {label: '付费', name: 'chgFee'},
        {label: '包月', name: 'monFee'},
        {label: '全免', name: 'allFee'},
        {label: '公版', name: 'pubFee'},
        {label: '限免', name: 'tfFee'}
      ],
      status: [
        {label: '连载', name: 'unfinish'},
        {label: '完结', name: 'finish'}
      ],
      viewCount: [
        {label: '介于0到1百', name: 'bt0to1b'},
        {label: '介于1百到1千', name: 'bt1bto1k'},
        {label: '介于1千到1万', name: 'bt1kto1w'},
        {label: '介于1万到10万', name: 'bt1wto10w'},
        {label: '大于10万', name: 'gt10w'}
      ],
      intime: [
        {label: '少于1月入库', name: 'lesMonIn'},
        {label: '1~3月入库', name: 'bt1mto3mIn'},
        {label: '3~12月入库', name: 'bt3mto12mIn'},
        {label: '大于12月入库', name: 'gt1yIn'}
      ],
      uptime: [
        {label: '少于1月更新', name: 'lesMonUpd'},
        {label: '1~3月更新', name: 'bt1mto3mUpd'},
        {label: '3~12月更新', name: 'bt3mto12mUpd'},
        {label: '大于12月更新', name: 'gt1yUpd'}
      ],
      classify1: [
        {label: '男频', name: 'boyCfy1'},
        {label: '女频', name: 'girlCfy1'},
        {label: '出版', name: 'pshCfy1'},
        {label: '其他', name: 'othCfy1'}
      ],
      queryRate: [
        {label: '天留存率', name: 'rteDay'},
        {label: '周留存率', name: 'rteWeek'},
        {label: '七日留存率', name: 'rteWk7'}
      ],
      queryNum: [
        {label: '天留存量', name: 'valDay'},
        {label: '周留存量', name: 'valWeek'},
        {label: '七日留存量', name: 'valWk7'}
      ],
      queryLastnum: [
        {label: '昨天阅读量', name: 'valLastDay'},
        {label: '上周阅读量', name: 'valLastWeek'}
      ]
    }
  }
}
</script>

<style>
  #main-retention-rate {
    width: 100%;
    padding: 6px 18px;
    background-color: #ffffff;
  }
  #main-retention-rate>h2 {
    width: 180px;
    margin: auto;
    font-weight: lighter;
  }
  /* 查询维度 */
  .main-retention-rate-form, .main-retention-rate-form > div{
    width: 100%;
    max-width: 2100px;
  }
  /* 下拉框大小 */
  .el-select, .el-select > div, .el-select > div > input {
    width: 200px;
  }
  .el-select > div > span {
    left: 170px;
  }
  .main-retention-rate-form > div > small {
    font-size: 13pt;
  }
</style>
