webpackJsonp([1],{"0Tuz":function(e,t){},"5LmY":function(e,t){},"94va":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(a("mtWM")),n=i(a("Lq4D")),r=i(a("504h"));function i(e){return e&&e.__esModule?e:{default:e}}t.default={name:"MainExhibit",components:{RequestLineChart:n.default},methods:{chose_num_or_rate:function(){switch(this.form.numRate){case 1:this.formNumTargetType=!0,this.formRateTargetType=!1,this.form.queryRate=[];break;case 2:this.formNumTargetType=!1,this.formRateTargetType=!0,this.form.queryNum=[]}},init:function(){this.form.app=["宜搜小说"],this.form.module=["全部"],this.form.areaLevel=["全部"],this.form.userLevel=["全部"],this.form.userNewLevel=["全部"],this.form.userFeeLevel=["全部"],this.form.itemFeeLevel=["全部"],this.form.strategy=["全部"],this.form.status=["全部"],this.form.sub=["全部"],this.form.intime=["全部"]},on_submit:function(){if(this.form.app.length<=0)this.$alert("！查询app 是否选中","提示",{confirmButtonText:"确定"});else if(this.form.module.length<=0)this.$alert("！查询模块 是否选中","提示",{confirmButtonText:"确定"});else if(this.form.areaLevel.length<=0)this.$alert("！地区级别 是否选中","提示",{confirmButtonText:"确定"});else if(this.form.userLevel.length<=0)this.$alert("！用户级别 是否选中","提示",{confirmButtonText:"确定"});else if(this.form.userNewLevel.length<=0)this.$alert("！新旧用户 是否选中","提示",{confirmButtonText:"确定"});else if(this.form.userFeeLevel.length<=0)this.$alert("！用户付费级别 是否选中","提示",{confirmButtonText:"确定"});else if(this.form.itemFeeLevel.length<=0)this.$alert("！物品付费级别 是否选中","提示",{confirmButtonText:"确定"});else if(this.form.strategy.length<=0)this.$alert("！推荐策略 是否选中","提示",{confirmButtonText:"确定"});else if(this.form.status.length<=0)this.$alert("！书籍状态 是否选中","提示",{confirmButtonText:"确定"});else if(this.form.sub.length<=0)this.$alert("！书籍订阅级别 是否选中","提示",{confirmButtonText:"确定"});else if(this.form.intime.length<=0)this.$alert("！入库时间 是否选中","提示",{confirmButtonText:"确定"});else if(this.form.queryNum.length<=0&&this.form.queryRate.length<=0)this.$alert("！查询目标 是否选中","提示",{confirmButtonText:"确定"});else if(this.form.timeRange.length<2)this.$alert("！查询时间范围 是否选中","提示",{confirmButtonText:"确定"});else{for(var e={app:[]},t=0;t<this.form.app.length;++t)for(var a=0;a<this.app.length;++a)if(this.app[a].label===this.form.app[t]){e.app.push(this.app[a].name);break}for(e.module=[],t=0;t<this.form.module.length;++t)for(a=0;a<this.module.length;++a)if(this.module[a].label===this.form.module[t]){e.module.push(this.module[a].name);break}for(e.areaLevel=[],t=0;t<this.form.areaLevel.length;++t)for(a=0;a<this.areaLevel.length;++a)if(this.areaLevel[a].label===this.form.areaLevel[t]){e.areaLevel.push(this.areaLevel[a].name);break}for(e.userLevel=[],t=0;t<this.form.userLevel.length;++t)for(a=0;a<this.userLevel.length;++a)if(this.userLevel[a].label===this.form.userLevel[t]){e.userLevel.push(this.userLevel[a].name);break}for(e.userNewLevel=[],t=0;t<this.form.userNewLevel.length;++t)for(a=0;a<this.userNewLevel.length;++a)if(this.userNewLevel[a].label===this.form.userNewLevel[t]){e.userNewLevel.push(this.userNewLevel[a].name);break}for(e.userFeeLevel=[],t=0;t<this.form.userFeeLevel.length;++t)for(a=0;a<this.userFeeLevel.length;++a)if(this.userFeeLevel[a].label===this.form.userFeeLevel[t]){e.userFeeLevel.push(this.userFeeLevel[a].name);break}for(e.itemFeeLevel=[],t=0;t<this.form.itemFeeLevel.length;++t)for(a=0;a<this.itemFeeLevel.length;++a)if(this.itemFeeLevel[a].label===this.form.itemFeeLevel[t]){e.itemFeeLevel.push(this.itemFeeLevel[a].name);break}for(e.strategy=[],t=0;t<this.form.strategy.length;++t)for(a=0;a<this.strategy.length;++a)if(this.strategy[a].label===this.form.strategy[t]){e.strategy.push(this.strategy[a].name);break}for(e.status=[],t=0;t<this.form.status.length;++t)for(a=0;a<this.status.length;++a)if(this.status[a].label===this.form.status[t]){e.status.push(this.status[a].name);break}for(e.sub=[],t=0;t<this.form.sub.length;++t)for(a=0;a<this.sub.length;++a)if(this.sub[a].label===this.form.sub[t]){e.sub.push(this.sub[a].name);break}for(e.intime=[],t=0;t<this.form.intime.length;++t)for(a=0;a<this.intime.length;++a)if(this.intime[a].label===this.form.intime[t]){e.intime.push(this.intime[a].name);break}if(e.target=[],this.form.queryNum.length>=0){for(t=0;t<this.form.queryNum.length;++t)for(a=0;a<this.queryNum.length;++a)if(this.queryNum[a].label===this.form.queryNum[t]){e.target.push(this.queryNum[a].name);break}}else for(t=0;t<this.form.queryRate.length;++t)for(a=0;a<this.queryRate.length;++a)if(this.queryRate[a].label===this.form.queryRate[t]){e.target.push(this.queryRate[a].name);break}e.timeRange=this.form.timeRange,(0,l.default)({url:"http://10.26.26.161:32000/exhibit",method:"post",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}).then(function(e){var t=e.data;if(200===e.status&&!0===t.Status){for(var a=t.Lines,l=[],n=0;n<a.length;++n){var i=a[n],s={};s.name=i.Introduction,s.data=i.Y,l.push(s)}r.default.chart("main-exhibit-show",{chart:{type:"line"},title:{text:"线上订展比相关查询"},xAxis:{categories:a[0].X},yAxis:{title:{text:"数量查询/比例查询(100%)"}},plotOptions:{line:{dataLabels:{enabled:!1},enableMouseTracking:!1}},series:l})}else console.log("返回状态创无")}).catch(function(e){console.log(e)})}},on_cancel:function(){this.init()}},data:function(){return{time_range_option:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date;t.setTime(t.getTime()-1728e5);var a=new Date;a.setTime(a.getTime()-7776e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date;t.setTime(t.getTime()-1728e5);var a=new Date;a.setTime(a.getTime()-27648e5),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date;t.setTime(t.getTime()-1728e5);var a=new Date;a.setTime(a.getTime()-79488e5),e.$emit("pick",[a,t])}}],disabledDate:function(e){var t=new Date;return t.setUTCFullYear(2018,11,12),e.getTime()<t.getTime()}},form:{app:["宜搜小说"],module:["全部"],areaLevel:["全部"],userLevel:["全部"],userNewLevel:["全部"],userFeeLevel:["全部"],itemFeeLevel:["全部"],strategy:["全部"],status:["全部"],sub:["全部"],intime:["全部"],queryNum:[],queryRate:[],timeRange:[],numRate:1},formNumTargetType:!0,formRateTargetType:!1,app:[{label:"全部app",name:"allApp"},{label:"宜搜小说",name:"easouApp"},{label:"微卷小说",name:"weijuanApp"},{label:"其它app",name:"othApp"}],module:[{label:"全部",name:"allMdl"},{label:"书架推荐",name:"shfRecMdl"},{label:"书架-猜你喜欢",name:"shfGusMdl"},{label:"免费-免费推荐",name:"freRecMdl"},{label:"免费-猜你喜欢",name:"freGusMdl"},{label:"包月瀑布流",name:"monStmMdl"},{label:"封面页-类别推荐",name:"foeCateRecMdl"},{label:"封面页-读本书的人还看过",name:"foeRedRedMdl"},{label:"封面页-读本书的人还看过更多",name:"foeRedMorMdl"},{label:"搜索结果页-热搜TOP榜",name:"sehResTopMdl"},{label:"搜索结果页-猜你喜欢",name:"sehResGusMdl"},{label:"章末页-读本书的人还看过",name:"bakRedRedMdl"},{label:"精选-女频瀑布流",name:"chsGilStmMdl"},{label:"精选-完结佳作",name:"chsCmpMdl"},{label:"精选-完结瀑布流",name:"chsCmpStmMdl"},{label:"精选-排行瀑布流",name:"chsRakStmMdl"},{label:"精选-根据阅读书籍推荐",name:"chsRedRecMdl"},{label:"精选-根据阅读分类推荐",name:"chsRedCatRecMdl"},{label:"精选-瀑布流",name:"chsStmMdl"},{label:"精选-热门推荐",name:"chsHotRecMdl"},{label:"精选-男频瀑布流",name:"chsBoyStmMdl"},{label:"精选-精品必读",name:"chsChsRedMdl"},{label:"退出拦截推荐",name:"extBlkMdl"}],areaLevel:[{label:"全部",name:"allArea"},{label:"一类地区",name:"oneArea"},{label:"二类地区",name:"twoArea"},{label:"三类地区",name:"trdArea"},{label:"其它",name:"othArea"}],userLevel:[{label:"全部",name:"allUsrLevel"},{label:"普通用户",name:"regUsrLevel"},{label:"特殊用户",name:"sphUsrLevel"},{label:"其它",name:"othUsrLevel"}],userNewLevel:[{label:"全部",name:"allUsr"},{label:"新用户",name:"newUsr"},{label:"老用户",name:"oldUsr"},{label:"其它",name:"othUsr"}],userFeeLevel:[{label:"全部",name:"allFeeUsr"},{label:"纯免费",name:"freFeeUsr"},{label:"潜在付费",name:"mybChgFeeUsr"},{label:"轻度付费",name:"lgtChgFeeUsr"},{label:"中度付费",name:"mdlChgFeeUsr"},{label:"重度付费",name:"hghChgFeeUsr"},{label:"其它",name:"othFeeUsr"}],itemFeeLevel:[{label:"全部",name:"allItmFee"},{label:"付费",name:"chgItmFee"},{label:"免费",name:"freItmFee"},{label:"包月",name:"monItmFee"},{label:"限免",name:"tfItmFee"},{label:"其它",name:"othItmFee"}],strategy:[{label:"全部",name:"allRec"},{label:"一级同分类",name:"cat1Rec"},{label:"二级同分类",name:"cat2Rec"},{label:"内容相似",name:"cotSimRec"},{label:"流行度",name:"popRec"},{label:"同作者",name:"simAthRec"},{label:"同分类",name:"catRec"},{label:"实时流",name:"livStmRec"},{label:"物品协同",name:"icfKnnRec"},{label:"用户协同",name:"ucfKnnRec"},{label:"近期协同",name:"nerIcfKnnRec"},{label:"冷启动",name:"codRec"},{label:"订阅模型",name:"subMdlRec"},{label:"阅读模型",name:"redMdlRec"},{label:"其它",name:"othRec"}],status:[{label:"全部",name:"allStu"},{label:"完结",name:"cmpStu"},{label:"连载",name:"noCmpStu"},{label:"其它",name:"othStu"}],sub:[{label:"全部",name:"allSub"},{label:"0—10",name:"bt0to10Sub"},{label:"10—100",name:"bt10to1bSub"},{label:"100—1千",name:"bt1bto1kSub"},{label:"1千—1万",name:"bt1kto10kSub"},{label:"1万—10万",name:"bt10kto100kSub"},{label:"10万—1百万",name:"bt100kto1000kSub"},{label:"1百万—1千万",name:"bt1000kto10000kSub"},{label:"其它",name:"othSub"}],intime:[{label:"全部",name:"allIn"},{label:"1月内",name:"lesMonIn"},{label:"1~3月内",name:"bt1mto3mIn"},{label:"3~12月内",name:"bt3mto12mIn"},{label:"12~99月内",name:"bt12mto99mIn"},{label:"其它",name:"othIn"}],queryNum:[{label:"推荐量",name:"dspNum"},{label:"点击量",name:"clkNum"},{label:"订阅量",name:"srbNum"},{label:"阅读量1",name:"redNum1"},{label:"阅读量2",name:"redNum2"}],queryRate:[{label:"点展比",name:"clkDsp"},{label:"订点比",name:"subClk"},{label:"订展比",name:"subDsp"},{label:"阅订比1",name:"redSub"},{label:"阅展比1",name:"redDsp"},{label:"阅订比2",name:"retent"},{label:"阅展比",name:"rteDsp"}]}}}},CNeX:function(e,t,a){"use strict";var l={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"main-user-type-rate"}},[this._v("用户类型占比")])},staticRenderFns:[]};t.a=l},DiSi:function(e,t){},"E+9M":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("FLYm"),n=a.n(l);for(var r in l)"default"!==r&&function(e){a.d(t,e,function(){return l[e]})}(r);var i=a("jL3E");var s=function(e){a("qXY5")},o=a("VU/8")(n.a,i.a,!1,s,null,null);t.default=o.exports},EX6J:function(e,t){},Eksj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MainUserTypeNum"}},FLYm:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MainMain"}},I8j2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MainFooter"}},J9bH:function(e,t){},Kl3R:function(e,t){},Lq4D:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("RUvB"),n=a.n(l);for(var r in l)"default"!==r&&function(e){a.d(t,e,function(){return l[e]})}(r);var i=a("VU/8")(n.a,null,!1,null,null,null);t.default=i.exports},M93x:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("xJD8"),n=a.n(l);for(var r in l)"default"!==r&&function(e){a.d(t,e,function(){return l[e]})}(r);var i=a("NEAz");var s=function(e){a("0Tuz")},o=a("VU/8")(n.a,i.a,!1,s,null,null);t.default=o.exports},MPYw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("ues7"),n=a.n(l);for(var r in l)"default"!==r&&function(e){a.d(t,e,function(){return l[e]})}(r);var i=a("kE6b");var s=function(e){a("wmGX")},o=a("VU/8")(n.a,i.a,!1,s,"data-v-2d953c74",null);t.default=o.exports},NEAz:function(e,t,a){"use strict";var l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("MainHeader"),this._v(" "),t("MainMenu"),this._v(" "),t("MainMain"),this._v(" "),t("MainFooter"),this._v(" "),t("div",{staticStyle:{clear:"both",height:"0"}}),this._v(" "),t("div",{staticStyle:{width:"100%",height:"320px"}})],1)},staticRenderFns:[]};t.a=l},NHnr:function(e,t,a){"use strict";var l=s(a("7+uW")),n=s(a("M93x")),r=s(a("YaEn"));a("tvR6");var i=s(a("zL8q"));function s(e){return e&&e.__esModule?e:{default:e}}a("j1ja"),l.default.config.productionTip=!1,l.default.use(i.default),new l.default({el:"#app",router:r.default,template:"<App/>",components:{App:n.default}})},NXX7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MainRetentionRate"}},"R+Vw":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MainUserTypeRate"}},RUvB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=a("mtWM"),r=(l=n)&&l.__esModule?l:{default:l};t.default={props:["postUrl","form"],name:"RequestLineChart",watch:{form:function(e,t){(0,r.default)({url:e,method:"post",baseUrl:"/",data:t,timeout:2e3,transformRequest:[function(e){return e}],transformResponse:[function(e){return e}]}).then(function(e){console.log(e.data)})}}}},SVxk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isCollapse:!0}},methods:{selected_child:function(e,t){"1"===e?this.isCollapse=!this.isCollapse:!1===this.isCollapse&&(this.isCollapse=!this.isCollapse)}}}},Uh5L:function(e,t,a){"use strict";var l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-menu",{attrs:{id:"i-main-menu",collapse:e.isCollapse},on:{select:e.selected_child}},[a("el-menu-item",{attrs:{index:"1"}},[a("i",{staticClass:"el-icon-menu"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("菜单")])]),e._v(" "),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-location"}),e._v(" "),a("span",[e._v("线上展示数据")])]),e._v(" "),a("router-link",{attrs:{to:"/main_exhibit/"}},[a("el-menu-item",{attrs:{index:"2-1"}},[e._v("订展比相关查询")])],1)],2),e._v(" "),a("el-submenu",{attrs:{index:"3"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-location"}),e._v(" "),a("span",[e._v("阅读相关统计")])]),e._v(" "),a("el-menu-item-group",{attrs:{index:"3-1"}},[a("template",{slot:"title"},[e._v("留存统计")]),e._v(" "),a("router-link",{attrs:{to:"/main_retention_rate/"}},[a("el-menu-item",{attrs:{index:"3-1-1"}},[e._v("留存量")])],1),e._v(" "),a("router-link",{attrs:{to:"/main_retention_rate/"}},[a("el-menu-item",{attrs:{index:"3-1-2"}},[e._v("留存率")])],1)],2),e._v(" "),a("el-menu-item-group",{attrs:{title:"3-2"}},[a("template",{slot:"title"},[e._v("天阅读统计")]),e._v(" "),a("el-menu-item",{attrs:{index:"3-2-2"}},[e._v("天阅读量")]),e._v(" "),a("el-menu-item",{attrs:{index:"3-2-1"}},[e._v("天付费阅读量")])],2)],2),e._v(" "),a("el-submenu",{attrs:{index:"4"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-location"}),e._v(" "),a("span",[e._v("用户类型统计")])]),e._v(" "),a("router-link",{attrs:{to:"/main_user_type_rate/"}},[a("el-menu-item",{attrs:{index:"4-1"}},[e._v("用户类型占比")])],1),e._v(" "),a("router-link",{attrs:{to:"/main_user_type_num/"}},[a("el-menu-item",{attrs:{index:"4-2"}},[e._v("用户类型数量")])],1)],2)],1)},staticRenderFns:[]};t.a=l},YaEn:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=m(a("7+uW")),n=m(a("/ocq")),r=m(a("qNcA")),i=m(a("MPYw")),s=m(a("cSN3")),o=m(a("ZjFj")),u=m(a("ymWg"));function m(e){return e&&e.__esModule?e:{default:e}}l.default.use(n.default),t.default=new n.default({routes:[{path:"/main_retention_rate/",name:"MainRetentionRate",component:r.default},{path:"/main_retention_num/",name:"MainRetentionNum",component:i.default},{path:"/main_exhibit/",name:"MainExhibit",component:s.default},{path:"/main_user_type_rate/",name:"MainUserTypeRate",component:o.default},{path:"/main_user_type_num/",name:"MainUserTypeNum",component:u.default}]})},ZjFj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("R+Vw"),n=a.n(l);for(var r in l)"default"!==r&&function(e){a.d(t,e,function(){return l[e]})}(r);var i=a("CNeX");var s=function(e){a("hL6K")},o=a("VU/8")(n.a,i.a,!1,s,"data-v-d560c2cc",null);t.default=o.exports},cSN3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("94va"),n=a.n(l);for(var r in l)"default"!==r&&function(e){a.d(t,e,function(){return l[e]})}(r);var i=a("rup6");var s=function(e){a("EX6J")},o=a("VU/8")(n.a,i.a,!1,s,null,null);t.default=o.exports},ejej:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("obMu"),n=a.n(l);for(var r in l)"default"!==r&&function(e){a.d(t,e,function(){return l[e]})}(r);var i=a("iVh6");var s=function(e){a("5LmY")},o=a("VU/8")(n.a,i.a,!1,s,null,null);t.default=o.exports},hL6K:function(e,t){},hvwi:function(e,t){},iVh6:function(e,t,a){"use strict";var l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"i-main"},[e._m(0),e._v(" "),a("div",{staticClass:"i-main-search"},[a("div",{staticStyle:{"margin-top":"19px"}},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"物品信息查找 ..."},model:{value:e.itemSearch,callback:function(t){e.itemSearch=t},expression:"itemSearch"}},[a("el-select",{attrs:{slot:"prepend",placeholder:"维度",value:""},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[a("el-option",{attrs:{label:"书籍ID",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"书籍名",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"作者名",value:"3"}})],1),e._v(" "),a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1)]),e._v(" "),a("div",{staticClass:"clear"}),e._v(" "),a("hr",{staticStyle:{width:"100%",height:"1px","margin-top":"16px",border:"none","background-color":"#E0E0E0"}})])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"i-main-title"},[t("h2",[this._v("宜搜信息查询")])])}]};t.a=l},jJPo:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("I8j2"),n=a.n(l);for(var r in l)"default"!==r&&function(e){a.d(t,e,function(){return l[e]})}(r);var i=a("xkkv");var s=function(e){a("J9bH")},o=a("VU/8")(n.a,i.a,!1,s,null,null);t.default=o.exports},jL3E:function(e,t,a){"use strict";var l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{ref:"mainMain",staticClass:"i-main-content"},[t("router-view")],1)},staticRenderFns:[]};t.a=l},kE6b:function(e,t,a){"use strict";var l={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"main-retention-num"}},[this._v("留存率数量")])},staticRenderFns:[]};t.a=l},obMu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{itemSearch:"",select:"1"}},methods:{}}},pIw5:function(e,t,a){"use strict";var l={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"main-user-type-num"}},[this._v("用户类型数量")])},staticRenderFns:[]};t.a=l},qNcA:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("NXX7"),n=a.n(l);for(var r in l)"default"!==r&&function(e){a.d(t,e,function(){return l[e]})}(r);var i=a("sVCe");var s=function(e){a("DiSi")},o=a("VU/8")(n.a,i.a,!1,s,"data-v-4bcba274",null);t.default=o.exports},qXY5:function(e,t){},rup6:function(e,t,a){"use strict";var l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"main-exhibit"}},[a("h2",[e._v("订展比相关统计")]),e._v(" "),a("br"),e._v(" "),a("div",{staticClass:"main-exhibit-chose"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"76px"}},[a("el-form-item",{staticStyle:{"margin-bottom":"6px"},attrs:{label:"查询APP"}},[a("el-checkbox-group",{model:{value:e.form.app,callback:function(t){e.$set(e.form,"app",t)},expression:"form.app"}},e._l(e.app,function(e){return a("el-checkbox",{key:e.label,staticStyle:{width:"218px",margin:"0",padding:"0"},attrs:{label:e.label}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"6px"},attrs:{label:"查询模块"}},[a("el-checkbox-group",{model:{value:e.form.module,callback:function(t){e.$set(e.form,"module",t)},expression:"form.module"}},e._l(e.module,function(e){return a("el-checkbox",{key:e.label,staticStyle:{width:"218px",margin:"0",padding:"0"},attrs:{label:e.label}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"6px"},attrs:{label:"地区级别"}},[a("el-checkbox-group",{model:{value:e.form.areaLevel,callback:function(t){e.$set(e.form,"areaLevel",t)},expression:"form.areaLevel"}},e._l(e.areaLevel,function(e){return a("el-checkbox",{key:e.label,staticStyle:{width:"116px",margin:"0",padding:"0"},attrs:{label:e.label}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"6px"},attrs:{label:"用户级别"}},[a("el-checkbox-group",{model:{value:e.form.userLevel,callback:function(t){e.$set(e.form,"userLevel",t)},expression:"form.userLevel"}},e._l(e.userLevel,function(e){return a("el-checkbox",{key:e.label,staticStyle:{width:"116px",margin:"0",padding:"0"},attrs:{label:e.label}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"6px"},attrs:{label:"新旧用户"}},[a("el-checkbox-group",{model:{value:e.form.userNewLevel,callback:function(t){e.$set(e.form,"userNewLevel",t)},expression:"form.userNewLevel"}},e._l(e.userNewLevel,function(e){return a("el-checkbox",{key:e.label,staticStyle:{width:"116px",margin:"0",padding:"0"},attrs:{label:e.label}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"6px"},attrs:{label:"用户付费"}},[a("el-checkbox-group",{model:{value:e.form.userFeeLevel,callback:function(t){e.$set(e.form,"userFeeLevel",t)},expression:"form.userFeeLevel"}},e._l(e.userFeeLevel,function(e){return a("el-checkbox",{key:e.label,staticStyle:{width:"116px",margin:"0",padding:"0"},attrs:{label:e.label}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"6px"},attrs:{label:"物品付费"}},[a("el-checkbox-group",{model:{value:e.form.itemFeeLevel,callback:function(t){e.$set(e.form,"itemFeeLevel",t)},expression:"form.itemFeeLevel"}},e._l(e.itemFeeLevel,function(e){return a("el-checkbox",{key:e.label,staticStyle:{width:"116px",margin:"0",padding:"0"},attrs:{label:e.label}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"6px"},attrs:{label:"推荐策略"}},[a("el-checkbox-group",{model:{value:e.form.strategy,callback:function(t){e.$set(e.form,"strategy",t)},expression:"form.strategy"}},e._l(e.strategy,function(e){return a("el-checkbox",{key:e.label,staticStyle:{width:"116px",margin:"0",padding:"0"},attrs:{label:e.label}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"6px"},attrs:{label:"连载/完结"}},[a("el-checkbox-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.status,function(e){return a("el-checkbox",{key:e.label,staticStyle:{width:"116px",margin:"0",padding:"0"},attrs:{label:e.label}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"6px"},attrs:{label:"订阅级别"}},[a("el-checkbox-group",{model:{value:e.form.sub,callback:function(t){e.$set(e.form,"sub",t)},expression:"form.sub"}},e._l(e.sub,function(e){return a("el-checkbox",{key:e.label,staticStyle:{width:"116px",margin:"0",padding:"0"},attrs:{label:e.label}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"6px"},attrs:{label:"入库时间"}},[a("el-checkbox-group",{model:{value:e.form.intime,callback:function(t){e.$set(e.form,"intime",t)},expression:"form.intime"}},e._l(e.intime,function(e){return a("el-checkbox",{key:e.label,staticStyle:{width:"116px",margin:"0",padding:"0"},attrs:{label:e.label}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"6px"},attrs:{label:"数量/占比"}},[a("el-radio-group",{on:{change:e.chose_num_or_rate},model:{value:e.form.numRate,callback:function(t){e.$set(e.form,"numRate",t)},expression:"form.numRate"}},[a("el-radio",{attrs:{label:1}},[e._v("数量查询")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("比例查询")])],1)],1),e._v(" "),e.formNumTargetType?a("el-form-item",{staticStyle:{"margin-bottom":"6px"},attrs:{label:"查询指标"}},[a("el-checkbox-group",{model:{value:e.form.queryNum,callback:function(t){e.$set(e.form,"queryNum",t)},expression:"form.queryNum"}},e._l(e.queryNum,function(e){return a("el-checkbox",{key:e.label,staticStyle:{width:"88px",margin:"0",padding:"0"},attrs:{label:e.label}})}))],1):e._e(),e._v(" "),e.formRateTargetType?a("el-form-item",{staticStyle:{"margin-bottom":"6px"},attrs:{label:"查询指标"}},[a("el-checkbox-group",{model:{value:e.form.queryRate,callback:function(t){e.$set(e.form,"queryRate",t)},expression:"form.queryRate"}},e._l(e.queryRate,function(e){return a("el-checkbox",{key:e.name,staticStyle:{width:"88px",margin:"0",padding:"0"},attrs:{label:e.label}})}))],1):e._e(),e._v(" "),a("el-form-item",{staticStyle:{width:"670px"},attrs:{label:"选择时间"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd","picker-options":e.time_range_option},model:{value:e.form.timeRange,callback:function(t){e.$set(e.form,"timeRange",t)},expression:"form.timeRange"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.on_submit}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:e.on_cancel}},[e._v("重置")])],1)],1)],1),e._v(" "),a("div",{staticStyle:{width:"100%",height:"calc(86vh)",margin:"20px 16px"},attrs:{id:"main-exhibit-show"}}),e._v(" "),a("div",{staticStyle:{width:"100%",height:"120px"}})])},staticRenderFns:[]};t.a=l},sVCe:function(e,t,a){"use strict";var l={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"main-retention-rate"}},[this._v("\n  留存率查询\n")])},staticRenderFns:[]};t.a=l},tvR6:function(e,t){},ues7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MainRetentionNum"}},wmGX:function(e,t){},x7p7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("SVxk"),n=a.n(l);for(var r in l)"default"!==r&&function(e){a.d(t,e,function(){return l[e]})}(r);var i=a("Uh5L");var s=function(e){a("Kl3R")},o=a("VU/8")(n.a,i.a,!1,s,null,null);t.default=o.exports},xJD8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s(a("ejej")),n=s(a("x7p7")),r=s(a("E+9M")),i=s(a("jJPo"));function s(e){return e&&e.__esModule?e:{default:e}}t.default={name:"App",methods:{},components:{MainHeader:l.default,MainMenu:n.default,MainMain:r.default,MainFooter:i.default}}},xkkv:function(e,t,a){"use strict";var l={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"i-main-footer"},[this._v("@宜搜小说")])},staticRenderFns:[]};t.a=l},ymWg:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Eksj"),n=a.n(l);for(var r in l)"default"!==r&&function(e){a.d(t,e,function(){return l[e]})}(r);var i=a("pIw5");var s=function(e){a("hvwi")},o=a("VU/8")(n.a,i.a,!1,s,"data-v-3098081e",null);t.default=o.exports}},["NHnr"]);
//# sourceMappingURL=app.8ff224d5db0019b069f1.js.map