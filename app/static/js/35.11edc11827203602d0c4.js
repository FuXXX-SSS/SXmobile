webpackJsonp([35],{TsXN:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("XmAh");var i=a("il3B"),s={name:"myTrade",components:{noList:a("+1BH").a},data:function(){return{show:!1,value:"",imgSrc:"../../../../static/images/slide_01.jpg",title:"我的求租",timetitle:"选择时间",timeshow:!1,list:[],currentDatestart:new Date,currentDate:new Date,startDate:"选择开始时间",endDate:"选择结束时间",loading:!1,finished:!1,rows:20,page:1,timeType:1}},methods:{back:function(){this.$router.back(-1)},onClickLeft:function(){this.show=!1},onClickRight:function(){this.show=!0},timeshowClick:function(t){this.timeshow=!0,this.timeType=t,this.timetitle=1==t?"选择开始时间":"选择结束时间"},timeclose:function(t){t&&(1==this.timeType?(this.startDate=this.formatDate(Date.parse(new Date(t))).split(" ")[0],this.endDate="选择结束时间"):this.endDate=this.formatDate(Date.parse(new Date(t))).split(" ")[0]),this.timeshow=!1},init:function(t,e){var a=this;setTimeout(function(){var i={page:a.page,rows:a.rows};a.show=!1,e?(a.page=1,i.page=1,a.title="我的求租"):(t&&""!==t&&(a.page=1,i.page=1,i.farmInfo=t),t&&""!==t&&(a.title="我的求租-查询结果",a.page=1,i.page=1)),a.$http.post("appServiceUser/myNeedrental",i).then(function(t){"success"==t.msg?(a.loading=!1,1==a.page?a.list=t.data.rows:a.list=a.list.concat(t.data.rows),a.total=t.data.total,a.page=a.page+1,(a.list.length>=a.total||0==a.total)&&(a.finished=!0)):a.finished=!0}).catch(function(t){a.finished=!0})},500)},formatDate:function(t){var e=(t=new Date(t)).getFullYear(),a=t.getMonth()+1,i=t.getDate(),s=t.getHours(),n=t.getMinutes(),l=t.getSeconds();return s=s<10?"0"+s:s,n=n<10?"0"+n:n,l=l<10?"0"+l:l,e+"-"+(a=a<10?"0"+a:a)+"-"+(i=i<10?"0"+i:i)+" "+s+":"+n},delSellRenting:function(t,e,a){var s=this,n="";1==t&&(n="删除"),2==t&&(n="下架"),3==t&&(n="上架"),i.a.confirm({title:n+"操作",message:"是否确认"+n+"该求租信息"}).then(function(){s.$http.post("appServiceUser/delSellRenting",{id:e,type:t}).then(function(e){"success"==e.msg&&(1==t&&s.list.splice(a,1),2==t&&(s.list[a].status=-2,s.list[a].statusName="已下架"),3==t&&(s.list[a].status=1,s.list[a].statusName="展示中"),console.log(s.list))})}).catch(function(){})}},computed:{},created:function(){},mounted:function(){}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"myTrade",attrs:{id:"myTrade"}},[a("div",{staticClass:"head"},[a("van-nav-bar",{staticStyle:{"text-align":"center"},attrs:{title:t.title,"right-text":"筛选","left-arrow":""},on:{"click-left":t.back,"click-right":t.onClickRight}})],1),t._v(" "),a("div",{staticStyle:{"padding-top":".91rem"}},[a("van-list",{attrs:{finished:t.finished},on:{load:t.init},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("ul",{staticClass:"list"},[t._l(t.list,function(e,i){return t.list.length>0?a("li",[0!=i?a("div",{staticClass:"separate"}):t._e(),t._v(" "),a("p",{staticClass:"top"},[t._v("\n            "+t._s(e.updateTime)+"\n            "),a("span",[t._v("\n              "+t._s(e.statusName)+"\n            ")])]),t._v(" "),a("div",{staticClass:"center"},[a("router-link",{attrs:{to:{name:"wantedDetail",params:{id:e.farmhouseRentingNumber}}}},[a("van-row",{attrs:{gutter:"10"}},[a("van-col",{staticClass:"right",attrs:{span:"24"}},[a("p",{staticClass:"van-ellipsis",staticStyle:{"font-size":".32rem"}},[a("span",[t._v(t._s(e.managementSubject))]),t._v(t._s(e.title)+"\n                ")]),t._v(" "),a("p",{staticClass:"van-ellipsis"},[t._v("\n                    "+t._s(e.info)+"\n                ")]),t._v(" "),a("p",{staticClass:"van-ellipsis"},[a("i",{staticClass:"iconfont icon-dizhi",staticStyle:{color:"#c8c8cd","font-size":".26rem"}}),t._v("\n                  "+t._s(e.address)+"\n                   "),a("span",{staticStyle:{float:"right"}},[a("span",{staticStyle:{color:"#C40722","font-size":".28rem"}},[t._v(t._s(e.rentingPrice)+"万元")]),t._v("/年")])]),t._v(" "),a("p",{staticClass:"van-ellipsis"},t._l(e.characteristics,function(e){return a("span",{staticClass:"tag"},[t._v(t._s(e))])}))])],1)],1)],1),t._v(" "),a("div",{staticClass:"bottom"},[a("span",[t._v("编辑")]),t._v(" "),a("span",{on:{click:function(a){t.delSellRenting(1,e.id,i)}}},[t._v("删除")]),t._v(" "),a("span",{on:{click:function(a){t.delSellRenting(2,e.id,i)}}},[t._v("下架")]),t._v(" "),a("span",{on:{click:function(a){t.delSellRenting(3,e.id,i)}}},[t._v("上架")])])]):t._e()}),t._v(" "),0==t.list.length&&t.finished?[a("noList",{attrs:{detail:"求租"}})]:t._e()],2)])],1),t._v(" "),a("van-popup",{staticClass:"layer",attrs:{"close-on-click-overlay":!1,position:"right"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"container"},[a("van-nav-bar",{attrs:{title:"筛选","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),a("div",{staticClass:"common"},[a("van-row",{attrs:{gutter:"10"}},[a("van-col",{staticClass:"left",attrs:{span:"8"}},[t._v("标题搜索")]),t._v(" "),a("van-col",{staticClass:"right",attrs:{span:"16"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",placeholder:"请输入标题搜索"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})])],1)],1),t._v(" "),a("div",{staticClass:"bottom"},[a("button",{on:{click:function(e){t.init(t.value)}}},[t._v("搜索")]),t._v(" "),a("button",{staticStyle:{"background-color":"#C4C4C6","margin-top":".2rem"},on:{click:function(e){t.init(null,!0)}}},[t._v("清空筛选条件")])])],1)]),t._v(" "),a("van-actionsheet",{staticStyle:{"text-align":"center"},attrs:{title:t.timetitle},model:{value:t.timeshow,callback:function(e){t.timeshow=e},expression:"timeshow"}},[a("van-datetime-picker",{directives:[{name:"show",rawName:"v-show",value:1==t.timeType,expression:"timeType == 1"}],attrs:{type:"date"},on:{confirm:t.timeclose,cancel:t.timeclose},model:{value:t.currentDatestart,callback:function(e){t.currentDatestart=e},expression:"currentDatestart"}}),t._v(" "),a("van-datetime-picker",{directives:[{name:"show",rawName:"v-show",value:2==t.timeType,expression:"timeType == 2"}],attrs:{type:"date","min-date":t.currentDatestart},on:{confirm:t.timeclose,cancel:t.timeclose},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1)},staticRenderFns:[]};var l=a("VU/8")(s,n,!1,function(t){a("YOP2"),a("fISm")},"data-v-a5c5d0f2",null);e.default=l.exports},YOP2:function(t,e){},fISm:function(t,e){}});