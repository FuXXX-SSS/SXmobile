webpackJsonp([31],{lx5V:function(t,a){},mT3Z:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});s("XmAh");var n=s("il3B"),e={name:"myAppointment",components:{noList:s("+1BH").a},data:function(){return{show:!1,details:"预约",loading:!1,finished:!1,rows:20,page:1,value:"",list:[],title:"我的预约",status:[{id:null,name:"全部"},{id:1,name:"已取消"},{id:2,name:"待分配"},{id:3,name:"安排中"},{id:4,name:"已带看"}],statusType:null}},methods:{onClickRight:function(){this.show=!0},onClickLeft:function(){this.show=!1},back:function(){this.$router.back(-1)},init:function(t,a){var s=this;setTimeout(function(){var n={page:s.page,rows:s.rows};t&&""!==t&&(s.page=1,n.page=1,n.farmInfo=t,s.show=!1,s.title="我的预约-查询结果"),a&&(s.page=1,n.page=1,s.show=!1,1==a||(s.title="我的预约",s.statusType=null)),s.statusType&&(n.status=s.statusType-2),null===t&&(s.page=1,n.page=1,s.show=!1,s.title="我的预约"),s.$http.post("appServiceUser/mybespeak",n).then(function(t){"success"==t.msg?(s.loading=!1,1==s.page?s.list=t.data.rows:s.list=s.list.concat(t.data.rows),s.total=t.data.total,s.page=s.page+1,(s.list.length>=s.total||0==s.total)&&(s.finished=!0)):s.finished=!0}).catch(function(t){s.finished=!0})},500)},cancelReservation:function(t,a){var s=this;n.a.confirm({title:"取消操作",message:"是否确认取消选中的预约"}).then(function(){s.$http.post("appServiceUser/cancelReservation",{id:t}).then(function(t){"success"==t.msg&&(s.list[a].status=-1,s.list[a].statusName="已取消")})}).catch(function(){})}},computed:{},created:function(){},mounted:function(){}},i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"myAppointment",attrs:{id:"myAppointment"}},[s("div",{staticClass:"head"},[s("van-nav-bar",{attrs:{title:"我的预约","right-text":"筛选","left-arrow":""},on:{"click-right":t.onClickRight,"click-left":t.back}})],1),t._v(" "),s("div",{staticStyle:{"padding-top":".91rem"}},[s("van-list",{attrs:{finished:t.finished},on:{load:t.init},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},[t.list.length>0?s("ul",{staticClass:"list"},t._l(t.list,function(a,n){return s("li",[s("p",{staticClass:"top"},[t._v("\n          "+t._s(a.bespeakTime1)+t._s(a.bespeakTime2)+t._s(a.bespeakTime3)+"\n          "),s("span",[t._v("\n            "+t._s(a.statusName)+"\n          ")])]),t._v(" "),s("p",{staticClass:"people"},[s("img",{attrs:{src:a.accountHeadurl,alt:""}}),t._v("\n           \n          "+t._s(a.accountRealname)+"\n           \n          "),s("span",[t._v("经纪人")]),t._v("\n           \n            "),s("i",{staticClass:"iconfont icon-dianhua1"}),t._v("\n           \n          "+t._s(a.accountPhone)+"\n        ")]),t._v(" "),s("div",{staticClass:"center"},[s("router-link",{attrs:{to:{name:"rentDetail",params:{id:a.farmhouseRentalsNumber}}}},[s("van-row",{attrs:{gutter:"10"}},[s("van-col",{staticClass:"left",attrs:{span:"8"}},[s("img",{attrs:{src:a.logoUrl,alt:""}}),t._v(" "),s("p",{staticClass:"van-ellipsis"},[t._v("编号"+t._s(a.farmhouseRentalsNumber))])]),t._v(" "),s("van-col",{staticClass:"right",attrs:{span:"16"}},[s("p",{staticClass:"van-ellipsis"},[t._v("\n                "+t._s(a.farmhouseTitle)+"\n              ")]),t._v(" "),s("p",{staticClass:"van-ellipsis"},[t._v("\n                "+t._s(a.detail)+"\n              ")]),t._v(" "),s("p",{staticClass:"van-ellipsis"},[s("i",{staticClass:"iconfont icon-dizhi"}),t._v("\n                "+t._s(a.address)+"\n              ")]),t._v(" "),"面谈"==a.rentingPrice?s("p",[s("span",[t._v("\n                  面谈\n                ")])]):s("p",[s("span",[t._v("\n                  ￥"+t._s(a.rentingPrice)+"万元\n                ")]),t._v("\n                /年\n              ")])])],1)],1)],1),t._v(" "),s("p",{staticClass:"bottom"},[t._v("\n          看房要求 ： "+t._s(a.bespeakRequire)+"\n          "),s("span",{directives:[{name:"show",rawName:"v-show",value:0==a.status,expression:"item.status == 0"}],on:{click:function(s){t.cancelReservation(a.id,n)}}},[t._v("取消预约")])]),t._v(" "),s("div",{staticClass:"separate"})])})):t._e(),t._v(" "),0==t.list.length&&t.finished?[s("noList",{attrs:{detail:t.details}})]:t._e()],2)],1),t._v(" "),s("van-popup",{staticClass:"layer",attrs:{"close-on-click-overlay":!1,position:"right"},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[s("div",{staticClass:"container"},[s("van-nav-bar",{attrs:{title:"筛选","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),s("div",{staticClass:"common"},[s("van-row",{attrs:{gutter:"10"}},[s("van-col",{staticClass:"left",attrs:{span:"8"}},[t._v("标题搜索")]),t._v(" "),s("van-col",{staticClass:"right",attrs:{span:"16"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",placeholder:"请输入标题搜索"},domProps:{value:t.value},on:{input:function(a){a.target.composing||(t.value=a.target.value)}}})])],1)],1),t._v(" "),s("div",{staticClass:"common"},[s("van-row",{attrs:{gutter:"10"}},[s("van-col",{staticClass:"left",attrs:{span:"8"}},[t._v("预约状态")]),t._v(" "),s("van-col",{staticClass:"right",attrs:{span:"16"}},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.statusType,expression:"statusType"}],on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.statusType=a.target.multiple?s:s[0]}}},[t._l(t.status,function(a,n){return[s("option",{domProps:{value:a.id}},[t._v(t._s(a.name))])]})],2)])],1)],1),t._v(" "),s("div",{staticClass:"bottom"},[s("button",{on:{click:function(a){t.init(t.value,1)}}},[t._v("搜索")]),t._v(" "),s("button",{staticStyle:{"background-color":"#C4C4C6","margin-top":".2rem"},on:{click:function(a){t.init(null,!0)}}},[t._v("清空筛选条件")])])],1)])],1)},staticRenderFns:[]};var l=s("VU/8")(e,i,!1,function(t){s("q/Cn"),s("lx5V")},"data-v-d945b788",null);a.default=l.exports},"q/Cn":function(t,a){}});