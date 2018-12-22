<template>
  <div id="main-exhibit">
    <h2>订展比相关统计</h2>
    <br/>
    <div class="main-exhibit-chose">
      <el-form ref="form" :model="form" label-width="76px">
        <!-- app -->
        <el-form-item style="margin-bottom:6px;" label="查询APP">
          <el-checkbox-group v-model="form.app">
            <el-checkbox
              style="width:218px;margin:0;padding: 0;"
              v-for="item in app"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 模块 -->
        <el-form-item style="margin-bottom:6px;" label="查询模块">
          <el-checkbox-group v-model="form.module">
            <el-checkbox
              style="width:218px;margin:0;padding: 0;"
              v-for="item in module"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item style="margin-bottom:6px;" label="地区级别">
          <el-checkbox-group v-model="form.areaLevel">
            <el-checkbox
              style="width:116px;margin:0;padding: 0;"
              v-for="item in areaLevel"
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
        <el-form-item style="margin-bottom:6px;" label="物品付费">
          <el-checkbox-group v-model="form.itemFeeLevel">
            <el-checkbox
              style="width:116px;margin:0;padding: 0;"
              v-for="item in itemFeeLevel"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item style="margin-bottom:6px;" label="推荐策略">
          <el-checkbox-group v-model="form.strategy">
            <el-checkbox
              style="width:116px;margin:0;padding: 0;"
              v-for="item in strategy"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item style="margin-bottom:6px;" label="连载/完结">
          <el-checkbox-group v-model="form.status">
            <el-checkbox
              style="width:116px;margin:0;padding: 0;"
              v-for="item in status"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item style="margin-bottom:6px;" label="订阅级别">
          <el-checkbox-group v-model="form.sub">
            <el-checkbox
              style="width:116px;margin:0;padding: 0;"
              v-for="item in sub"
              :key="item.label"
              :label="item.label">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- -->
        <el-form-item style="margin-bottom:6px;" label="入库时间">
          <el-checkbox-group v-model="form.intime">
            <el-checkbox
              style="width:116px;margin:0;padding: 0;"
              v-for="item in intime"
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
        <el-form-item v-if="formNumTargetType" style="margin-bottom:6px;" label="查询指标">
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
        <el-form-item v-if="formRateTargetType" style="margin-bottom:6px;" label="查询指标">
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
          <el-button type="primary" @click="on_submit">查询</el-button>
          <el-button @click="init">重置</el-button>
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
require('highcharts/modules/exporting')(Highcharts)
export default {
  name: 'MainExhibit',
  components: {
    RequestLineChart
  },
  methods: {
    /* 选择比例或数量 */
    chose_num_or_rate () {
      switch (this.form.numRate) {
        case 1 :
          this.formNumTargetType = true
          this.formRateTargetType = false
          this.form.queryRate = []
          break
        case 2 :
          this.formNumTargetType = false
          this.formRateTargetType = true
          this.form.queryNum = []
          break
      }
    },
    init () {
      this.form.app = ['宜搜小说']
      this.form.module = ['全部']
      this.form.areaLevel = ['全部']
      this.form.userLevel = ['全部']
      this.form.userNewLevel = ['全部']
      this.form.userFeeLevel = ['全部']
      this.form.itemFeeLevel = ['全部']
      this.form.strategy = ['全部']
      this.form.status = ['全部']
      this.form.sub = ['全部']
      this.form.intime = ['全部']
      this.form.queryRate = []
      this.form.timeRange = []
      this.form.queryNum = []
    },
    on_submit () {
      let j
      /* 检查选择是否全面 */
      if (this.form.app.length <= 0) {
        this.$alert('！查询app 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.module.length <= 0) {
        this.$alert('！查询模块 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.areaLevel.length <= 0) {
        this.$alert('！地区级别 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.userLevel.length <= 0) {
        this.$alert('！用户级别 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.userNewLevel.length <= 0) {
        this.$alert('！新旧用户 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.userFeeLevel.length <= 0) {
        this.$alert('！用户付费级别 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.itemFeeLevel.length <= 0) {
        this.$alert('！物品付费级别 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.strategy.length <= 0) {
        this.$alert('！推荐策略 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.status.length <= 0) {
        this.$alert('！书籍状态 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.sub.length <= 0) {
        this.$alert('！书籍订阅级别 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.intime.length <= 0) {
        this.$alert('！入库时间 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.queryNum.length <= 0 && this.form.queryRate.length <= 0) {
        this.$alert('！查询目标 是否选中', '提示', {confirmButtonText: '确定'})
      } else if (this.form.timeRange.length < 2) {
        this.$alert('！查询时间范围 是否选中', '提示', {confirmButtonText: '确定'})
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
        request['module'] = []
        for (i = 0; i < this.form.module.length; ++i) {
          for (j = 0; j < this.module.length; ++j) {
            if (this.module[j].label === this.form.module[i]) {
              request['module'].push(this.module[j].name)
              break
            }
          }
        }
        request['areaLevel'] = []
        for (i = 0; i < this.form.areaLevel.length; ++i) {
          for (j = 0; j < this.areaLevel.length; ++j) {
            if (this.areaLevel[j].label === this.form.areaLevel[i]) {
              request['areaLevel'].push(this.areaLevel[j].name)
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
        request['userFeeLevel'] = []
        for (i = 0; i < this.form.userFeeLevel.length; ++i) {
          for (j = 0; j < this.userFeeLevel.length; ++j) {
            if (this.userFeeLevel[j].label === this.form.userFeeLevel[i]) {
              request['userFeeLevel'].push(this.userFeeLevel[j].name)
              break
            }
          }
        }
        request['itemFeeLevel'] = []
        for (i = 0; i < this.form.itemFeeLevel.length; ++i) {
          for (j = 0; j < this.itemFeeLevel.length; ++j) {
            if (this.itemFeeLevel[j].label === this.form.itemFeeLevel[i]) {
              request['itemFeeLevel'].push(this.itemFeeLevel[j].name)
              break
            }
          }
        }
        request['strategy'] = []
        for (i = 0; i < this.form.strategy.length; ++i) {
          for (j = 0; j < this.strategy.length; ++j) {
            if (this.strategy[j].label === this.form.strategy[i]) {
              request['strategy'].push(this.strategy[j].name)
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
        request['sub'] = []
        for (i = 0; i < this.form.sub.length; ++i) {
          for (j = 0; j < this.sub.length; ++j) {
            if (this.sub[j].label === this.form.sub[i]) {
              request['sub'].push(this.sub[j].name)
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
        request['target'] = []
        if (this.formNumTargetType) {
          for (i = 0; i < this.form.queryNum.length; ++i) {
            for (j = 0; j < this.queryNum.length; ++j) {
              if (this.queryNum[j].label === this.form.queryNum[i]) {
                request['target'].push(this.queryNum[j].name)
                break
              }
            }
          }
        } else {
          for (i = 0; i < this.form.queryRate.length; ++i) {
            for (j = 0; j < this.queryRate.length; ++j) {
              if (this.queryRate[j].label === this.form.queryRate[i]) {
                request['target'].push(this.queryRate[j].name)
                break
              }
            }
          }
        }
        request['timeRange'] = this.form.timeRange
        axios({
          url: 'http://10.26.26.161:32000/exhibit',
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
            Highcharts.chart('main-exhibit-show', {
              chart: {
                type: 'line'
              },
              credits: {
                enabled: false
              },
              title: {
                text: '线上订展比相关查询'
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
          dt.setUTCFullYear(2018, 11, 12)
          return time.getTime() < dt.getTime()
        }
      },
      form: {
        app: ['宜搜小说'],
        module: ['全部'],
        areaLevel: ['全部'],
        userLevel: ['全部'],
        userNewLevel: ['全部'],
        userFeeLevel: ['全部'],
        itemFeeLevel: ['全部'],
        strategy: ['全部'],
        status: ['全部'],
        sub: ['全部'],
        intime: ['全部'],
        queryNum: [],
        queryRate: [],
        timeRange: [],
        numRate: 1
      },
      formNumTargetType: true,
      formRateTargetType: false,
      app: [
        {label: '全部app', name: 'allApp'},
        {label: '宜搜小说', name: 'easouApp'},
        {label: '微卷小说', name: 'weijuanApp'},
        {label: '其它app', name: 'othApp'}
      ],
      module: [
        {label: '全部', name: 'allMdl'},
        {label: '书架推荐', name: 'shfRecMdl'},
        {label: '书架-猜你喜欢', name: 'shfGusMdl'},
        {label: '免费-免费推荐', name: 'freRecMdl'},
        {label: '免费-猜你喜欢', name: 'freGusMdl'},
        {label: '包月瀑布流', name: 'monStmMdl'},
        {label: '封面页-类别推荐', name: 'foeCateRecMdl'},
        {label: '封面页-读本书的人还看过', name: 'foeRedRedMdl'},
        {label: '封面页-读本书的人还看过更多', name: 'foeRedMorMdl'},
        {label: '搜索结果页-热搜TOP榜', name: 'sehResTopMdl'},
        {label: '搜索结果页-猜你喜欢', name: 'sehResGusMdl'},
        {label: '章末页-读本书的人还看过', name: 'bakRedRedMdl'},
        {label: '精选-女频瀑布流', name: 'chsGilStmMdl'},
        {label: '精选-完结佳作', name: 'chsCmpMdl'},
        {label: '精选-完结瀑布流', name: 'chsCmpStmMdl'},
        {label: '精选-排行瀑布流', name: 'chsRakStmMdl'},
        {label: '精选-根据阅读书籍推荐', name: 'chsRedRecMdl'},
        {label: '精选-根据阅读分类推荐', name: 'chsRedCatRecMdl'},
        {label: '精选-瀑布流', name: 'chsStmMdl'},
        {label: '精选-热门推荐', name: 'chsHotRecMdl'},
        {label: '精选-男频瀑布流', name: 'chsBoyStmMdl'},
        {label: '精选-精品必读', name: 'chsChsRedMdl'},
        {label: '退出拦截推荐', name: 'extBlkMdl'}
      ],
      areaLevel: [
        {label: '全部', name: 'allArea'},
        {label: '一类地区', name: 'oneArea'},
        {label: '二类地区', name: 'twoArea'},
        {label: '三类地区', name: 'trdArea'},
        {label: '其它', name: 'othArea'}
      ],
      userLevel: [
        {label: '全部', name: 'allUsrLevel'},
        {label: '普通用户', name: 'regUsrLevel'},
        {label: '特殊用户', name: 'sphUsrLevel'},
        {label: '其它', name: 'othUsrLevel'}
      ],
      userNewLevel: [
        {label: '全部', name: 'allUsr'},
        {label: '新用户', name: 'newUsr'},
        {label: '老用户', name: 'oldUsr'},
        {label: '其它', name: 'othUsr'}
      ],
      userFeeLevel: [
        {label: '全部', name: 'allFeeUsr'},
        {label: '纯免费', name: 'freFeeUsr'},
        {label: '潜在付费', name: 'mybChgFeeUsr'},
        {label: '轻度付费', name: 'lgtChgFeeUsr'},
        {label: '中度付费', name: 'mdlChgFeeUsr'},
        {label: '重度付费', name: 'hghChgFeeUsr'},
        {label: '其它', name: 'othFeeUsr'}
      ],
      itemFeeLevel: [
        {label: '全部', name: 'allItmFee'},
        {label: '付费', name: 'chgItmFee'},
        {label: '免费', name: 'freItmFee'},
        {label: '包月', name: 'monItmFee'},
        {label: '限免', name: 'tfItmFee'},
        {label: '其它', name: 'othItmFee'}
      ],
      strategy: [
        {label: '全部', name: 'allRec'},
        {label: '一级同分类', name: 'cat1Rec'},
        {label: '二级同分类', name: 'cat2Rec'},
        {label: '内容相似', name: 'cotSimRec'},
        {label: '流行度', name: 'popRec'},
        {label: '同作者', name: 'simAthRec'},
        {label: '同分类', name: 'catRec'},
        {label: '实时流', name: 'livStmRec'},
        {label: '物品协同', name: 'icfKnnRec'},
        {label: '用户协同', name: 'ucfKnnRec'},
        {label: '近期协同', name: 'nerIcfKnnRec'},
        {label: '冷启动', name: 'codRec'},
        {label: '订阅模型', name: 'subMdlRec'},
        {label: '阅读模型', name: 'redMdlRec'},
        {label: '其它', name: 'othRec'}
      ],
      status: [
        {label: '全部', name: 'allStu'},
        {label: '完结', name: 'cmpStu'},
        {label: '连载', name: 'noCmpStu'},
        {label: '其它', name: 'othStu'}
      ],
      sub: [
        {label: '全部', name: 'allSub'},
        {label: '0—10', name: 'bt0to10Sub'},
        {label: '10—100', name: 'bt10to1bSub'},
        {label: '100—1千', name: 'bt1bto1kSub'},
        {label: '1千—1万', name: 'bt1kto10kSub'},
        {label: '1万—10万', name: 'bt10kto100kSub'},
        {label: '10万—1百万', name: 'bt100kto1000kSub'},
        {label: '1百万—1千万', name: 'bt1000kto10000kSub'},
        {label: '其它', name: 'othSub'}
      ],
      intime: [
        {label: '全部', name: 'allIn'},
        {label: '1月内', name: 'lesMonIn'},
        {label: '1~3月内', name: 'bt1mto3mIn'},
        {label: '3~12月内', name: 'bt3mto12mIn'},
        {label: '12~99月内', name: 'bt12mto99mIn'},
        {label: '其它', name: 'othIn'}
      ],
      queryNum: [
        {label: '推荐量', name: 'dspNum'},
        {label: '点击量', name: 'clkNum'},
        {label: '订阅量', name: 'srbNum'},
        {label: '阅读量1', name: 'redNum1'},
        {label: '阅读量2', name: 'redNum2'}
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
</style>
