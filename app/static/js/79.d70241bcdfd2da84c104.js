webpackJsonp([79],{"/ruw":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("9iUS"),e=a("Mitt"),n=a("754W"),r=a("XFU/"),l=a("6fE7"),c=a("fdCj"),o={name:"sharePlay",components:{stars:n.a,Footer:s.a,Header:e.a,Scroll:r.a,noFind:l.a,goTotop:c.a},data:function(){return{areatext:"区域",deliciousfood:"游玩项目",nomessage:!1,keywords:"",loading:!1,finished:!1,page:1,rows:30,total:1,bblist:[],isback:!0,title:"游玩",scenic_list:[],play_list:[],area1:!1,area2:!1,area3:!1,area4:!1,two:["区域","景点"],twoNum:0,fourSpan:["漂流","烧烤","棋牌","野菜"],items:[{text:"所有城市",children:[{text:"智能排序",id:1002,resful:"znd"},{text:"价格低到高",id:1003,resful:"jgs"},{text:"价格高到低",id:1004,resful:"jgj"},{text:"评论最高",id:1005,resful:"pjj"}]}],mainActiveIndex:0,activeId:null,playlist:[],item1:[],landlist:[],grouplist:[],pricelist:[],houselist:[],facilitylist:[],arearest:"",landrest:"",pricerest:"",peoplerest:"",typelist:"",facility:"",sortrestful:"",checknum:0,num:-1,pnum:-1,fnum:-1}},methods:{tosearch:function(){this.$router.push({path:"/search",query:{name:"游玩",to:"sharePlay"}})},fivesearch:function(t,i){this.activeId=i,this.typelist=t,this.nomessage=!1,this.page=1,this.init()},area:function(){this.area2=!1,this.area3=!1,this.area4=!1,this.area1=!this.area1},group:function(){this.area3=!1,this.area4=!1,this.area1=!1,this.area2=!this.area2},weather:function(){this.area4=!1,this.area1=!1,this.area2=!1,this.area3=!this.area3},sort:function(){this.area1=!1,this.area2=!1,this.area3=!1,this.area4=!this.area4},onNavClick:function(t){this.mainActiveIndex=t,this.area1=!1,this.arearest=this.item1[t].areaRestfulDictionary,this.landrest="",this.areatext=this.item1[t].text,0==t&&(this.areatext="区域"),this.nomessage=!1,this.keywords="",this.page=1,this.init()},onItemClick:function(t){console.log(t),this.activeId=t.id,this.area4=!1,this.sortrestful=t.resful,this.nomessage=!1,this.keywords="",this.page=1,this.init()},twoSpot:function(t){this.twoNum=t},rank:function(){var t=this;this.$http.post("appServiceGrange/grangeIndex").then(function(i){if("success"==i.msg){var a=[{color:"#ff6500"},{color:"#8ab8d4"},{color:"#e38800"},{color:"#b4b4b9"},{color:"#b4b4b9"},{color:"#b4b4b9"}],s=[];i.data.playTopList.map(function(t,i){var e=Object.assign(t,a[i]);s.push(e)}),t.play_list=s}else t.$toast(i.info)})},init:function(){var t=this;setTimeout(function(){var i={keyword:t.keywords,page:t.page,rows:t.rows,rest:t.arearest+t.landrest+t.pricerest+t.peoplerest+t.typelist+t.facility+t.sortrestful};console.log(i),t.$http.post("appServiceGrange/getGrangePlayData",i).then(function(i){"success"==i.msg?(1==t.page?t.playlist=i.data.rows:t.playlist=t.playlist.concat(i.data.rows),0==t.playlist.length&&(t.nomessage=!0),t.page++,t.total=i.data.total,t.loading=!1,(t.playlist.length>=t.total||0==t.total)&&(t.finished=!0)):(t.$toast(i.info),t.finished=!0)}).catch(function(i){t.finished=!0})},500)},condition:function(){var t=this;this.$http.post("appServiceGrange/getGrangePlayParam").then(function(i){if("success"==i.msg){var a=i.data.AreaList;a.unshift({text:"不限",children:null,areaRestfulDictionary:""}),t.item1=a;var s=i.data.areaLandList;s.unshift({text:"不限",children:[]}),s.map(function(t){t.children.unshift({restFul:"",text:"不限",id:null})}),t.landlist=s;var e=i.data.playParam;e.map(function(t){t.children.unshift({menuRestfulDictionary:"",text:"不限",id:null})}),t.grouplist=e,t.bblist=e[0].children;var n=i.data.priceParam[0].children;n.unshift({menuRestfulDictionary:"",text:"不限",id:-1}),t.pricelist=n;var r=i.data.throngParam[0].children;r.unshift({menuRestfulDictionary:"",text:"不限",id:-1}),t.houselist=r;var l=i.data.managementClassParam[0].children;l.unshift({menuRestfulDictionary:"",text:"不限",id:-1}),t.facilitylist=l}else t.$toast(i.info)})},onlanClick:function(t){this.mainActiveIndex=t,0==t&&(this.areatext="区域",this.area1=!1)},onLandClick:function(t){this.activeId=t.id,this.area1=!1,this.arearest="",this.areatext=t.text,this.landrest=t.restFul,this.nomessage=!1,this.keywords="",this.page=1,this.init()},ontypeClick:function(t){"不限"===t.text?this.deliciousfood="游玩项目":this.deliciousfood=t.text,this.activeId=t.id,this.area2=!1,this.typelist=t.menuRestfulDictionary,this.nomessage=!1,this.keywords="",this.page=1,this.init()},priceSpan:function(t){this.num=t,console.log(t)},houseSpan:function(t){this.pnum=t,console.log(this.pnum)},facilitySpan:function(t){this.fnum=t,console.log(this.fnum)},reset:function(){this.checknum=1,this.num=-1,this.pnum=-1,this.fnum=-1},submit:function(){var t=this;this.checknum=2,this.pricelist.map(function(i){i.id==t.num&&(t.pricerest=i.menuRestfulDictionary)}),this.houselist.map(function(i){i.id==t.pnum&&(t.peoplerest=i.menuRestfulDictionary)}),this.facilitylist.map(function(i){i.id==t.fnum&&(t.facility=i.menuRestfulDictionary)}),this.nomessage=!1,this.keywords="",this.page=1,this.init(),this.area3=!1}},computed:{},created:function(){this.rank(),this.condition(),this.keywords=this.$route.query.searchWord},mounted:function(){}},v={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"sharePlay"},[a("div",{staticClass:"topBar"},[a("Header",{attrs:{title:t.title,isback:t.isback}})],1),t._v(" "),a("div",{staticStyle:{width:"100%",height:".92rem"}}),t._v(" "),a("div",{staticClass:"top"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"search",on:{click:t.tosearch}},[a("i",{staticClass:"iconfont icon-sousuo"}),t._v(" "),a("input",{attrs:{type:"text",placeholder:"请输入区域/景点名称"}})]),t._v(" "),a("router-link",{staticClass:"find",attrs:{to:{name:"mapFindGrange"},tag:"div"}},[t._v("\n        地图找农庄\n      ")])],1)]),t._v(" "),t.play_list.length>0?a("div",[a("div",{staticClass:"play"},[t._m(0),t._v(" "),a("div",{staticClass:"play_bottom",staticStyle:{overflow:"hidden"}},[a("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.play_list}},[a("div",{style:"width:"+3.2*t.play_list.length+"rem"},t._l(t.play_list,function(i,s){return a("router-link",{attrs:{to:{name:"grangedetail",params:{id:i.grangeNumber}}}},[a("div",{staticStyle:{width:"3rem",display:"inline-block","padding-right":".2rem",position:"relative"}},[i.fileUrl?a("div",{style:"background:url("+i.fileUrl+");width: 100%;height: 2rem;background-size:cover;background-position: center center"}):t._e(),t._v(" "),a("div",{staticClass:"van-ellipsis",staticStyle:{"font-size":"0.26rem"}},[t._v(t._s(i.grangeName))])])])}))])],1)])]):t._e(),t._v(" "),a("div",{staticClass:"separate"}),t._v(" "),a("div",{staticClass:"condition"},[a("ul",{staticClass:"top_tab clear"},[a("li",{staticClass:"list van-ellipsis",class:{active:t.area1},on:{click:t.area}},[t._v("\n        "+t._s(t.areatext)+"\n        "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.area1,expression:"area1"}],staticClass:"iconfont icon-xiala1"}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.area1,expression:"!area1"}],staticClass:"iconfont icon-xiala"})]),t._v(" "),a("li",{staticClass:"list van-ellipsis",class:{active:t.area2},on:{click:t.group}},[t._v("\n        "+t._s(t.deliciousfood)+"\n        "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.area2,expression:"area2"}],staticClass:"iconfont icon-xiala1"}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.area2,expression:"!area2"}],staticClass:"iconfont icon-xiala"})]),t._v(" "),a("li",{staticClass:"list van-ellipsis",class:{active:t.area3},on:{click:t.weather}},[t._v("\n        筛选\n        "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.area3,expression:"area3"}],staticClass:"iconfont icon-xiala1"}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.area3,expression:"!area3"}],staticClass:"iconfont icon-xiala"})]),t._v(" "),a("li",{staticClass:"list van-ellipsis",class:{active:t.area4},on:{click:t.sort}},[t._v("\n        排序\n        "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.area4,expression:"area4"}],staticClass:"iconfont icon-xiala1"}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.area4,expression:"!area4"}],staticClass:"iconfont icon-xiala"})])]),t._v(" "),a("div",[a("div",{staticClass:"area"},[t.area1?a("div",{staticClass:"regin"},[a("div",{staticClass:"left"},t._l(t.two,function(i,s){return a("div",{class:{active:s==t.twoNum},attrs:{keys:s},on:{click:function(i){t.twoSpot(s)}}},[t._v(t._s(i))])})),t._v(" "),a("div",{staticClass:"right"},[0==t.twoNum?a("div",[a("van-tree-select",{attrs:{items:t.item1,"main-active-index":t.mainActiveIndex,"active-id":t.activeId},on:{navclick:t.onNavClick}})],1):t._e(),t._v(" "),1==t.twoNum?a("div",[a("van-tree-select",{attrs:{items:t.landlist,"main-active-index":t.mainActiveIndex,"active-id":t.activeId},on:{navclick:t.onlanClick,itemclick:t.onLandClick}})],1):t._e()])]):t._e(),t._v(" "),t.area2?a("div",{staticClass:"group"},[a("van-tree-select",{attrs:{items:t.grouplist,"active-id":t.activeId},on:{itemclick:t.ontypeClick}})],1):t._e(),t._v(" "),t.area3?a("div",{staticClass:"season"},[a("div",[a("p",[t._v("价格")]),t._v(" "),a("div",{staticClass:"content"},t._l(t.pricelist,function(i,s){return a("span",{class:{orange:i.id==t.num},attrs:{keys:s},on:{click:function(a){t.priceSpan(i.id)}}},[t._v(t._s(i.text))])})),t._v(" "),a("p",[t._v("适合人群")]),t._v(" "),a("div",{staticClass:"content"},t._l(t.houselist,function(i,s){return a("span",{class:{orange:i.id==t.pnum},attrs:{keys:s},on:{click:function(a){t.houseSpan(i.id)}}},[t._v(t._s(i.text))])})),t._v(" "),a("p",[t._v("经营类型")]),t._v(" "),a("div",{staticClass:"content"},t._l(t.facilitylist,function(i,s){return a("span",{class:{orange:i.id==t.fnum},attrs:{keys:s},on:{click:function(a){t.facilitySpan(i.id)}}},[t._v(t._s(i.text))])})),t._v(" "),a("div",{staticClass:"bottom"},[a("span",{class:{orange:1==t.checknum},on:{click:t.reset}},[t._v("重置")]),t._v(" "),a("span",{class:{orange:2==t.checknum},on:{click:t.submit}},[t._v("确定")])])])]):t._e(),t._v(" "),t.area4?a("div",{staticClass:"rank"},[a("van-tree-select",{attrs:{items:t.items,"active-id":t.activeId},on:{itemclick:t.onItemClick}})],1):t._e()])])]),t._v(" "),a("div",{staticClass:"list"},[a("div",{staticClass:"scenic_wrap"},[a("van-list",{attrs:{finished:t.finished},on:{load:t.init},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.playlist,function(i,s){return a("router-link",{attrs:{to:{name:"grangedetail",params:{id:i.grangeNumber}}}},[a("van-row",{attrs:{gutter:"20"}},[a("van-col",{attrs:{span:"8"}},[a("div",{staticClass:"left"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.fileUrl,expression:"item.fileUrl"}],attrs:{src:i.fileUrl}})])]),t._v(" "),a("van-col",{attrs:{span:"16"}},[a("div",{staticClass:"right"},[a("div",{staticClass:"mulan van-ellipsis"},[a("span",{staticClass:"lake"},[t._v(t._s(i.grangeName))])]),t._v(" "),a("div",{staticClass:"grade"},[a("stars",{attrs:{rate:i.totalMark}}),t._v(" "),a("span",{staticClass:"score"},[t._v(t._s(i.totalMark)+"分")]),t._v(" "),a("p",{staticClass:"much"},[a("span",[t._v("￥"+t._s(i.personConsumption))]),t._v("/人\n              ")])],1),t._v(" "),a("div",{staticClass:"position van-ellipsis"},[a("i",{staticClass:"iconfont icon-dizhi"}),t._v(t._s(i.fcityName)+"-"+t._s(i.fareaName)+"-"+t._s(i.fstreetName)+"\n            ")]),t._v(" "),i.facilities?a("div",{staticClass:"data"},t._l(i.facilities.slice(0,3),function(i){return a("span",{attrs:{keys:s}},[t._v(t._s(i))])})):t._e()])])],1)],1)})),t._v(" "),t.nomessage?a("noFind",{attrs:{name1:"农庄",name2:!1}}):t._e()],1)]),t._v(" "),a("Footer"),t._v(" "),a("goTotop")],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"play_top clear"},[i("a",[i("span",{staticClass:"orang"},[this._v("游玩")]),this._v("排行榜\n        ")])])}]};var d=a("VU/8")(o,v,!1,function(t){a("4TcO")},"data-v-23acfad6",null);i.default=d.exports},"4TcO":function(t,i){}});