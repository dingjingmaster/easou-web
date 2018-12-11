<template>
  <div id="main-exhibit">
    <h2>订展比相关统计</h2>
    <br/>
    <div class="main-exhibit-chose">
      <el-form ref="form" :model="form" label-width="80px">
        <!-- -->
        <el-form-item style="margin-bottom:6px;" label="查询维度">
          <el-select v-model="form.weidu" v-on:change="chose_weidu" class="main-exhibit-weidu" placeholder="请选择查询维度">
          <el-option
            v-for="item in weidu"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
          </el-select>
        </el-form-item>
        <!-- -->
        <el-form-item style="margin-bottom:6px;" label="查询模块">
          <el-checkbox-group v-model="form.module">
            <el-checkbox
              style="width:220px;margin:0;padding: 0;"
              v-for="item in module"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item v-if="form.formFeeType" style="margin-bottom:6px;" label="付费类型">
          <el-checkbox-group v-model="form.fee">
            <el-checkbox
              style="width:66px;margin:0;padding: 0;"
              v-for="item in fee"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item v-if="form.formStrategyType" style="margin-bottom:6px;" label="推荐策略">
          <el-checkbox-group v-model="form.strategy">
            <el-checkbox
              style="width:110px;margin:0;padding: 0;"
              v-for="item in strategy"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item v-if="form.formStatuType" style="margin-bottom:6px;" label="连载/完结">
          <el-checkbox-group v-model="form.status">
            <el-checkbox
              style="width:66px;margin:0;padding: 0;"
              v-for="item in status"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item v-if="form.formSubType" style="margin-bottom:6px;" label="订阅级别">
          <el-checkbox-group v-model="form.sub">
            <el-checkbox
              style="width:160px;margin:0;padding: 0;"
              v-for="item in sub"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item v-if="form.formIntimeType" style="margin-bottom:6px;" label="入库时间">
          <el-checkbox-group v-model="form.intime">
            <el-checkbox
              style="width:160px;margin:0;padding: 0;"
              v-for="item in intime"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item v-if="form.formUptimeType" style="margin-bottom:6px;" label="更新时间">
          <el-checkbox-group v-model="form.uptime">
            <el-checkbox
              style="width:160px;margin:0;padding: 0;"
              v-for="item in uptime"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item v-if="form.formClassify1Type" style="margin-bottom:6px;" label="一级分类">
          <el-checkbox-group v-model="form.classify1">
            <el-checkbox
              style="width:66px;margin:0;padding: 0;"
              v-for="item in classify1"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item style="margin-bottom:6px;" label="数量/占比">
          <el-radio-group v-on:change="chose_num_or_rate" v-model="form.numRate">
            <el-radio :label="1">数量查询</el-radio>
            <el-radio :label="2">比例查询</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- -->
        <el-form-item v-if="form.formNumTargetType" style="margin-bottom:6px;" label="查询指标">
          <el-checkbox-group v-model="form.queryNum">
            <el-checkbox
              style="width:88px;margin:0;padding: 0;"
              v-for="item in queryNum"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item v-if="form.formRateTargetType" style="margin-bottom:6px;" label="查询指标">
          <el-checkbox-group v-model="form.queryRate">
            <el-checkbox
              style="width:88px;margin:0;padding: 0;"
              v-for="item in queryRate"
              :key="item.name"
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
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button @click="onCancel">重置</el-button>
        </el-form-item>
        <!-- -->
      </el-form>
      <!-- -->
    </div>
    <!-- 图片展示 -->
    <div id="main-exhibit-show" style="width: 100%; height: calc(86vh); margin: 20px 16px"></div>
    <div style="width:100%; height: 120px;"></div>
  </div>
</template>

<script>
import axios from 'axios'
import RequestLineChart from '@/api/RequestLineChart'
import Highcharts from 'highcharts'
export default {
  name: 'MainExhibit',
  components: {
    RequestLineChart
  },
  methods: {
    init () {
      this.form.formFeeType = false
      this.form.formStrategyType = false
      this.form.formStatuType = false
      this.form.formSubType = false
      this.form.formIntimeType = false
      this.form.formUptimeType = false
      this.form.formClassify1Type = false
      this.form.formNumTargetType = false
      this.form.formRateTargetType = true
      this.form.timeRange = ''
      this.form.module = ['精选-瀑布流']
      this.form.fee = []
      this.form.strategy = []
      this.form.status = []
      this.form.sub = []
      this.form.intime = []
      this.form.uptime = []
      this.form.classify1 = []
      this.form.numRate = 2
      this.form.queryNum = []
      this.form.queryRate = ['订展比']
    },
    /* 维度选择 */
    chose_weidu () {
      this.init() // 1. 初始化参数
      switch (this.form.weidu) {
        case 'summary':
          break
        case 'fee':
          this.form.formFeeType = true
          break
        case 'strategy':
          this.form.formFeeType = true
          this.form.formStrategyType = true
          break
        case 'status':
          this.form.formFeeType = true
          this.form.formStatuType = true
          break
        case 'view':
          this.form.formFeeType = true
          this.form.formSubType = true
          break
        case 'intime':
          this.form.formFeeType = true
          this.form.formIntimeType = true
          break
        case 'uptime':
          this.form.formFeeType = true
          this.form.formUptimeType = true
          break
        case 'classify1':
          this.form.formFeeType = true
          this.form.formClassify1Type = true
          break
      }
    },
    /* 选择比例或数量 */
    chose_num_or_rate () {
      switch (this.form.numRate) {
        case 1 :
          this.form.formNumTargetType = true
          this.form.formRateTargetType = false
          this.form.queryRate = []
          break
        case 2 :
          this.form.formNumTargetType = false
          this.form.formRateTargetType = true
          this.form.queryNum = []
          break
      }
    },
    onSubmit () {
      var module = []
      for (var i = 0; i < this.form.module.length; ++i) {
        var t1 = this.form.module[i]
        for (var j = 0; i < this.module.length; ++j) {
          var f1 = this.module[j]
          if (t1 === f1.label) {
            module.push(f1.name)
            break
          }
        }
      }
      var target = []
      if (this.form.formNumTargetType === true) {
        for (i = 0; i < this.form.queryNum.length; ++i) {
          t1 = this.form.queryNum[i]
          for (j = 0; j < this.queryNum.length; ++j) {
            f1 = this.queryNum[j]
            if (t1 === f1.label) {
              target.push(f1.name)
              break
            }
          }
        }
      } else {
        for (i = 0; i < this.form.queryRate.length; ++i) {
          t1 = this.form.queryRate[i]
          for (j = 0; j < this.queryRate.length; ++j) {
            f1 = this.queryRate[j]
            if (t1 === f1.label) {
              target.push(f1.name)
              break
            }
          }
        }
      }
      var fee = []
      for (i = 0; i < this.form.fee.length; ++i) {
        t1 = this.form.fee[i]
        for (j = 0; j < this.fee.length; ++j) {
          f1 = this.fee[j]
          if (t1 === f1.label) {
            fee.push(f1.name)
            break
          }
        }
      }
      var strategy = []
      for (i = 0; i < this.form.strategy.length; ++i) {
        t1 = this.form.strategy[i]
        for (j = 0; j < this.strategy.length; ++j) {
          f1 = this.strategy[j]
          if (t1 === f1.label) {
            strategy.push(f1.name)
            break
          }
        }
      }
      var statu = []
      for (i = 0; i < this.form.status.length; ++i) {
        t1 = this.form.status[i]
        for (j = 0; j < this.status.length; ++j) {
          f1 = this.status[j]
          if (t1 === f1.label) {
            statu.push(f1.name)
            break
          }
        }
      }
      var sub = []
      for (i = 0; i < this.form.sub.length; ++i) {
        t1 = this.form.sub[i]
        for (j = 0; j < this.sub.length; ++j) {
          f1 = this.sub[j]
          if (t1 === f1.label) {
            sub.push(f1.name)
            break
          }
        }
      }
      var intime = []
      for (i = 0; i < this.form.intime.length; ++i) {
        t1 = this.form.intime[i]
        for (j = 0; j < this.intime.length; ++j) {
          f1 = this.intime[j]
          if (t1 === f1.label) {
            intime.push(f1.name)
            break
          }
        }
      }
      var uptime = []
      for (i = 0; i < this.form.uptime.length; ++i) {
        t1 = this.form.uptime[i]
        for (j = 0; j < this.uptime.length; ++j) {
          f1 = this.uptime[j]
          if (t1 === f1.label) {
            uptime.push(f1.name)
            break
          }
        }
      }
      var classify1 = []
      for (i = 0; i < this.form.classify1.length; ++i) {
        t1 = this.form.classify1[i]
        for (j = 0; j < this.classify1.length; ++j) {
          f1 = this.classify1[j]
          if (t1 === f1.label) {
            classify1.push(f1.name)
            break
          }
        }
      }
      var request = {
        weidu: this.form.weidu,
        module: module,
        fee: fee,
        strategy: strategy,
        status: statu,
        sub: sub,
        intime: intime,
        uptime: uptime,
        classify1: classify1,
        timeRange: this.form.timeRange,
        target: target
      }
      var yIntro = this.formNumTargetType
      /* 检查请求是否正确 */
      if (this.form.weidu === '') {
        this.$alert('必须选择查询维度', '错误', {
          confirmButtonText: '确定'
        })
        return
      }
      if (this.form.module.length <= 0) {
        this.$alert('必须选择查询模块', '错误', {
          confirmButtonText: '确定'
        })
        return
      }
      if (target.length <= 0) {
        this.$alert('必须选择查询目标', '错误', {
          confirmButtonText: '确定'
        })
        return
      }
      if (this.form.timeRange.length <= 1) {
        this.$alert('必须输入查询时间范围', '错误', {
          confirmButtonText: '确定'
        })
        return
      }
      switch (this.form.weidu) {
        case 'fee':
          if (this.form.fee.length <= 0) {
            this.$alert('请检查付费类型是否输入', '错误', {
              confirmButtonText: '确定'
            })
            return
          }
          break
        case 'strategy':
          if ((this.form.fee.length <= 0) || (this.form.strategy.length <= 0)) {
            this.$alert('请检查策略是否输入', '错误', {
              confirmButtonText: '确定'
            })
            return
          }
          break
        case 'status':
          if ((this.form.fee.length <= 0) || (this.form.status.length <= 0)) {
            this.$alert('请检查状态是否输入', '错误', {
              confirmButtonText: '确定'
            })
            return
          }
          break
        case 'view':
          if ((this.form.fee.length <= 0) || (this.form.sub.length <= 0)) {
            this.$alert('请检查状态是否输入', '错误', {
              confirmButtonText: '确定'
            })
            return
          }
          break
        case 'intime':
          if ((this.form.fee.length <= 0) || (this.form.intime.length <= 0)) {
            this.$alert('请检查入库时间是否输入', '错误', {
              confirmButtonText: '确定'
            })
            return
          }
          break
        case 'uptime':
          if ((this.form.fee.length <= 0) || (this.form.uptime.length <= 0)) {
            this.$alert('请检查更新时间是否输入', '错误', {
              confirmButtonText: '确定'
            })
            return
          }
          break
        case 'classify1':
          if ((this.form.fee.length <= 0) || (this.form.classify1.length <= 0)) {
            this.$alert('请检查一级分类是否输入', '错误', {
              confirmButtonText: '确定'
            })
            return
          }
      }
      /* 发送请求 */
      axios({
        url: 'http://10.26.26.161:50000/exhibit',
        method: 'post',
        data: request,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }).then(function (response) {
        var obj = response.data
        if ((response.status === 200) && (obj['Status'] === true)) {
          var lines = obj['Lines']
          var y = []
          var x = []
          x = lines[0]['X']
          for (var i = 0; i < lines.length; ++i) {
            var info = lines[i]
            var tmp = {}
            tmp['name'] = info['Introduction']
            tmp['data'] = info['Y']
            y[i] = tmp
          }
          //
          Highcharts.chart('main-exhibit-show', {
            chart: {
              type: 'line'
            },
            title: {
              text: '线上 订展比 相关统计'
            },
            xAxis: {
              categories: x
            },
            yAxis: {
              title: {
                text: yIntro === true ? '数量查询' : '比例查询(100%)'
              }
            },
            plotOptions: {
              line: {
                dataLabels: {
                  enabled: false
                },
                enableMouseTracking: false
              }
            },
            series: y
          })
        } else {
          console.log('返回数据出错!!!')
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    onCancel () {
      this.init() // 1. 初始化参数
    }
  },
  data () {
    return {
      formFeeType: false,
      formStrategyType: false,
      formStatuType: false,
      formSubType: false,
      formIntimeType: false,
      formUptimeType: false,
      formClassify1Type: false,
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
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }],
        disabledDate (time) {
          return time.getTime() > Date.now() - 24 * 3600 * 1000 * 2
        }
      },
      form: {
        weidu: 'summary',
        module: ['精选-瀑布流'],
        fee: [],
        strategy: [],
        status: [],
        sub: [],
        intime: [],
        uptime: [],
        classify1: [],
        numRate: 2,
        formNumTargetType: false,
        formRateTargetType: true,
        queryNum: [],
        queryRate: ['订展比'],
        timeRange: ''
      },
      weidu: [
        {value: 'summary', label: '总计'},
        {value: 'fee', label: '付费类型'},
        {value: 'strategy', label: '推荐策略'},
        {value: 'status', label: '连载/完结'},
        {value: 'view', label: '订阅级别'},
        {value: 'intime', label: '入库时间'},
        {value: 'uptime', label: '更新时间'},
        {value: 'classify1', label: '一级分类'}
      ],
      module: [
        {label: '精选-瀑布流', name: 'chsStmMdl'},
        {label: '精选-精品必读', name: 'chsBDMdl'},
        {label: '精选-热门推荐', name: 'chsHRMdl'},
        {label: '精选-完结佳作', name: 'chsCRMdl'},
        {label: '精选-男频瀑布流', name: 'chsBoyStmMdl'},
        {label: '精选-女频瀑布流', name: 'chsGilStmMdl'},
        {label: '精选-排行瀑布流', name: 'chsRakStmMdl'},
        {label: '精选-完结瀑布流', name: 'chsFinStmMdl'},
        {label: '精选-根据阅读分类推荐', name: 'chsRRCMdl'},
        {label: '精选-根据阅读书籍推荐', name: 'chsRRBMdl'},
        {label: '封面页-类别推荐', name: 'foeCtgMdl'},
        {label: '封面页-作者推荐', name: 'foeAutMdl'},
        {label: '封面页-读本书的人还看过', name: 'foeArdMdl'},
        {label: '封面页-读本书的人还看过更多', name: 'foeArdMorMdl'},
        {label: '章末页-读本书的人还看过', name: 'bakArdMdl'},
        {label: '书架推荐', name: 'shfRecMdl'},
        {label: '书架-猜你喜欢', name: 'shfGusMdl'},
        {label: '免费-猜你喜欢', name: 'freGusMdl'},
        {label: '免费-免费推荐', name: 'freFRMdl'},
        {label: '免费-包月推荐', name: 'freMonRecMdl'},
        {label: '包月瀑布流', name: 'monStmMdl'},
        {label: '根据阅读推荐', name: 'redRecMdl'},
        {label: '退出拦截推荐', name: 'extRecMdl'}
      ],
      fee: [
        {label: '免费', name: 'freFee'},
        {label: '全免', name: 'allFee'},
        {label: '付费', name: 'chgFee'},
        {label: '包月', name: 'monFee'},
        {label: '公版', name: 'pubFee'},
        {label: '限免', name: 'tfFee'}
      ],
      strategy: [
        {label: '实时流', name: 'livStmRec'},
        {label: '用户协同', name: 'usrKnnRec'},
        {label: '冷启动', name: 'codBotRec'},
        {label: '流行度', name: 'popRec'},
        {label: '物品协同', name: 'itemKnnRec'},
        {label: '同分类', name: 'samCtgRec'},
        {label: '订阅模型', name: 'subMdlRec'},
        {label: '阅读模型', name: 'redMdlRec'},
        {label: '内容相似', name: 'cotSimRec'},
        {label: '阅读同分类', name: 'redMdlRec'},
        {label: '一级同分类', name: 'cat1SimCtgRec'},
        {label: '近期协同', name: 'nerIcfKnn'}
      ],
      status: [
        {label: '连载', name: 'noCmpStau'},
        {label: '完结', name: 'cmpStau'}
      ],
      sub: [
        {label: '介于0到10', name: 'bt0to10Sub'},
        {label: '介于10到100', name: 'bt10to1bSub'},
        {label: '介于100到1000', name: 'bt1bto1kSub'},
        {label: '介于1000到10000', name: 'bt1kto10kSub'},
        {label: '介于1万到10万', name: 'bt10kto100kSub'},
        {label: '介于10万到100万', name: 'bt100kto1000kSub'},
        {label: '介于100万到1000万', name: 'bt1000kto10000kSub'}
      ],
      intime: [
        {label: '1月内入库', name: 'lesMonIn'},
        {label: '1~3月内入库', name: 'bt1mto3mIn'},
        {label: '3~12月内入库', name: 'bt3mto12mIn'},
        {label: '12~99月内入库', name: 'bt12mto99mIn'}
      ],
      uptime: [
        {label: '0~1月未更新', name: 'lesMonUpd'},
        {label: '1~3月未更新', name: 'bt1mto3mUpd'},
        {label: '3~12月未更新', name: 'bt3mto12mUpd'},
        {label: '12~99月未更新', name: 'bt12mto99mUpd'}
      ],
      classify1: [
        {label: '男频', name: 'boyCfy1'},
        {label: '女频', name: 'girlCfy1'},
        {label: '包月', name: 'monCfy1'},
        {label: '出版', name: 'pshCfy1'},
        {label: '其它', name: 'othCfy1'}
      ],
      queryNum: [
        {label: '展现量', name: 'dspNum'},
        {label: '点击量', name: 'clkNum'},
        {label: '订阅量', name: 'srbNum'},
        {label: '阅读量1', name: 'redNum'},
        {label: '阅读量2', name: 'rteNum'}
      ],
      queryRate: [
        {label: '点展比', name: 'clkDsp'},
        {label: '订点比', name: 'subClk'},
        {label: '订展比', name: 'subDsp'},
        {label: '阅订比1', name: 'redSub'},
        {label: '阅展比1', name: 'redDsp'},
        {label: '阅订比2', name: 'retent'},
        {label: '阅展比', name: 'rteDsp'}
      ]
    }
  }
}
</script>

<style>
  #main-exhibit {
    width: 100%;
    padding: 6px 18px;
    background-color: #ffffff;
  }
  #main-exhibit>h2 {
    width: 180px;
    margin: auto;
    font-weight: lighter;
  }
  /* 查询维度 */
  .main-exhibit-chose, .main-exhibit-chose > div{
    width: 100%;
    max-width: 2100px;
  }
  .main-exhibit-chose > div > small {
    font-size: 13pt;
  }
  /* 展示区域 */
  .main-exhibit-weidu, .main-exhibit-weidu > div > input {
    width: 240px;
  }
  .main-exhibit-weidu > div > span {
    left: 210px;
  }
</style>
