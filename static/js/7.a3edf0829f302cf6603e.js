webpackJsonp([7],{"4EXH":function(t,e){},"5kj6":function(t,e){},"74I3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("GgDs"),s=a("97Hs"),n={name:"Swiper",props:{list:{type:Array,required:!0},detail:{type:Array,required:!0}},data:function(){return{isCollection:!1}},methods:{collect:function(){var t=this;console.log(this.detail);var e=this.detail.id;if(localStorage.getItem("userInfo")){var a=JSON.parse(localStorage.getItem("userInfo")).userId;console.log(a),this.$http.post("appServiceFarmhouse/farmhouseCollection",{farmhouseRentalsId:e,userId:68}).then(function(e){console.log(e),"success"==e.msg?(t.$toast(e.info),t.isCollection=!0):(e.msg="已经收藏啦!")&&(t.isCollection=!0,t.$toast(e.info))})}else this.$toast("登录之后可收藏"),setTimeout(function(){t.$router.push("/login")})},share:function(){}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("van-swipe",{attrs:{autoplay:3e3}},this._l(this.list,function(t,a){return e("van-swipe-item",{key:a,staticClass:"swiper"},[e("img",{attrs:{src:t,alt:"",srcset:""}})])})),this._v(" "),e("div",{staticClass:"share"},[e("span",{on:{click:this.collect}},[e("i",{staticClass:"iconfont icon-shoucang",style:"color:"+(this.isCollection?"#FF6500":"#fff")+";"})])])],1)},staticRenderFns:[]};var o=a("VU/8")(n,r,!1,function(t){a("KchO")},"data-v-3bc6d33f",null).exports,l={name:"Title",props:{farmhouseRentalsNumber:{type:String,required:!0},farmhouseTitle:{type:String,required:!0},updatetime:{type:String,required:!0}},data:function(){return{p1:"【整租】",p2:"黄陂区",p3:"4房",p4:"木兰山",p5:"160平",p6:"独立小院",p7:"可种菜",bian:"编号:",numbers:"2000002",shijian:"更新时间:",time:"2017-08-09",range:"星级"}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"top"},[a("div",{staticClass:"title"},[a("p",[t._v(t._s(t.farmhouseTitle))])]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"num"},[a("p",[t._v(t._s(t.bian))]),t._v(" "),a("p",[t._v(t._s(t.farmhouseRentalsNumber))])]),t._v(" "),a("div",{staticClass:"time"},[a("p",[t._v(t._s(t.shijian))]),t._v(" "),a("p",[t._v(t._s(t.updatetime))])])])]),t._v(" "),a("div",{staticClass:"blank"})])},staticRenderFns:[]};var d=a("VU/8")(l,c,!1,function(t){a("kPHi")},"data-v-7f6de912",null).exports,v=a("lE54"),u=a("Txev"),p={name:"Information",props:{detail:{type:String,required:!0}},data:function(){return{houseList:[{name:"房屋类型",mation:"4居2厅2卫1阳"},{name:"建筑面积",mation:"160平方米"},{name:"宅基地面积",mation:"200平方米"},{name:"房屋朝向",mation:"朝南"},{name:"装修情况",mation:"精装"},{name:"楼层",mation:"共2层"},{name:"房屋类型",mation:"别墅"},{name:"建筑结构",mation:"砖混结构"},{name:"建筑年代",mation:"2008年"},{name:"土地性质",mation:"集体土地"}],btnList:[{name:"院子100平方米"},{name:"池塘100平方米"}]}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"information"},[a("div",{staticClass:"top"},[a("div",{staticClass:"message"},[a("van-row",{attrs:{type:"flex",justify:"space-around"}},[a("van-col",{attrs:{span:"20"}},[a("p",[t._v("房屋户型")]),t._v(" "),a("p",[t._v(t._s(t.detail.houseType))])]),t._v(" "),a("van-col",{attrs:{span:"20"}},[a("p",[t._v("楼层")]),t._v(" "),a("p",[t._v(t._s(t.detail.floor)+"层")])])],1),t._v(" "),a("van-row",{attrs:{type:"flex",justify:"space-around"}},[a("van-col",{attrs:{span:"20"}},[a("p",[t._v("建筑面积")]),t._v(" "),a("p",[t._v(t._s(t.detail.coveredArea)+"平")])]),t._v(" "),a("van-col",{attrs:{span:"20"}},[a("p",[t._v("房屋类型")]),t._v(" "),a("p",[t._v(t._s(t.detail.houseType))])])],1),t._v(" "),a("van-row",{attrs:{type:"flex",justify:"space-around"}},[a("van-col",{attrs:{span:"20"}},[a("p",[t._v("宅基地面积")]),t._v(" "),a("p",[t._v(t._s(t.detail.curtilageArea)+"平")])]),t._v(" "),a("van-col",{attrs:{span:"20"}},[a("p",[t._v("建筑结构")]),t._v(" "),a("p",[t._v(t._s(t.detail.buildingStructure))])])],1),t._v(" "),a("van-row",{attrs:{type:"flex",justify:"space-around"}},[a("van-col",{attrs:{span:"20"}},[a("p",[t._v("房屋朝向")]),t._v(" "),a("p",[t._v(t._s(t.detail.houseOrientation))])]),t._v(" "),a("van-col",{attrs:{span:"20"}},[a("p",[t._v("建筑年代")]),t._v(" "),a("p",[t._v(t._s(t.detail.buildingStructure)+"年")])])],1),t._v(" "),a("van-row",{attrs:{type:"flex",justify:"space-around"}},[a("van-col",{attrs:{span:"20"}},[a("p",[t._v("装修情况")]),t._v(" "),a("p",[t._v(t._s(t.detail.decorationSituation))])]),t._v(" "),a("van-col",{attrs:{span:"20"}},[a("p",[t._v("土地性质")]),t._v(" "),a("p",[t._v(t._s(t.detail.landCharacteristic))])])],1)],1)])]),t._v(" "),a("div",{staticClass:"blank"})])},staticRenderFns:[]};var _=a("VU/8")(p,m,!1,function(t){a("mspy")},"data-v-1d09739c",null).exports,f=a("gRpS"),g=a("BPNO"),h={name:"Specil",props:{detail:{type:String,required:!0},landList:{type:Array,required:!0}},data:function(){return{specil:"房屋特色",use:"出租用途",others:"周边情况",position:"区位情况",transition:"交通出行",btnList:[{name:"民宿"},{name:"农家乐农家乐"},{name:"民宿"},{name:"民宿"},{name:"民宿"}],othersList:[{name:"竹博园"},{name:"“千年故杀”,灵异术2-3公里"},{name:"黄山10公里"}],p1:"良好",p2:"良好",p3:"良好",trantext:"距离南京30公里，自驾50分钟。"}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(t._s(t.specil))]),t._v(" "),a("div",{staticClass:"use"},[a("div",{staticClass:"left"},[t._v(t._s(t.use))]),t._v(" "),a("div",{staticClass:"right"},t._l(t.detail.uses,function(e,i){return a("div",{key:i,staticClass:"btnbox"},[t._v(t._s(e))])}))]),t._v(" "),a("div",{staticClass:"others"},[a("div",{staticClass:"left"},[t._v("周边情况")]),t._v(" "),a("div",{staticClass:"right"},t._l(t.landList,function(e,i){return a("div",{key:i,staticClass:"others_text"},[a("div",{staticClass:"distance"},[t._v("\n            "+t._s(e.lanspacePlaceName)+"\n            "+t._s(e.distance.toFixed(2))+"公里\n          ")])])}))]),t._v(" "),a("div",{staticClass:"position"},[a("div",{staticClass:"left"},[t._v("区位情况")]),t._v(" "),a("div",{staticClass:"right"},[a("p",[t._v("自然条件")]),t._v(" "),a("p",[t._v("  良好"+t._s(t.detail.naturalCondition))]),t._v(" "),a("p",[t._v("绿化条件")]),t._v(" "),a("p",[t._v(t._s(t.detail.greeningCondition))]),t._v(" "),a("p",[t._v("污水处理情况")]),t._v(" "),a("p",[t._v(t._s(t.detail.sewageCondition))])])]),t._v(" "),a("div",{staticClass:"transition"},[a("div",{staticClass:"left"},[t._v(t._s(t.transition))]),t._v(" "),a("div",{staticClass:"right"},[a("p",[t._v("交通说明")]),t._v(" "),a("p",[t._v(t._s(t.detail.transitRoute))])])])]),t._v(" "),a("div",{staticClass:"blank"})])},staticRenderFns:[]};var C=a("VU/8")(h,b,!1,function(t){a("eUn7")},"data-v-7d6e2a7f",null).exports,y=a("7HF1"),k=a("76/w"),x=a("VbvK"),S=a("x+r1"),w=a("xDBu"),L=a("Iudj"),R=a("IJsY"),F={name:"rentDetail",data:function(){return{banner:[],detail:"",decoration:[],village:"",farmHouse:[],foodList:[],playList:[],stayList:[],title:"出租详情",isback:!0,farmhouseTitle:"",farmhouseRentalsNumber:"",updatetime:"",rentingPrice:"",bedroom:"",drawingroom:"",curtilageArea:"",rentingYears:"",characteristics:[],landList:[],detailfarmhouseDescribe:"",farmhouseDescribe:!1,matingList:!1}},components:{Header:i.a,Footer:s.a,Banner:o,Title:d,Time:v.a,Swiper:u.a,Information:_,Recommend:f.a,Fitment:g.a,Specil:C,Decorate:y.a,Location:k.a,MapGrange:x.a,RimFarm:S.a,RimGrange:w.a,Link:L.a,Bootom:R.a},methods:{init:function(){var t=this,e=this.$route.params.id;this.$http.post("appServiceFarmhouse/getRentalHouseDetail",{farmhouseRentalsNumber:e}).then(function(e){t.banner=e.data.detail.banner,t.farmhouseTitle=e.data.detail.farmhouseTitle,t.farmhouseRentalsNumber=e.data.detail.farmhouseRentalsNumber,t.updatetime=e.data.detail.updatetime,t.rentingPrice=e.data.detail.rentingPrice,t.bedroom=e.data.detail.bedroom,t.drawingroom=e.data.detail.drawingroom,t.curtilageArea=e.data.detail.curtilageArea,t.rentingYears=e.data.detail.rentingYears,t.characteristics=e.data.detail.characteristics,t.detail=e.data.detail,t.decoration=e.data.decoration,t.village=e.data.village,t.farmHouse=e.data.farmHouse,t.foodList=e.data.foodList,t.playList=e.data.playList,t.stayList=e.data.stayList,t.landList=e.data.landList,t.detailfarmhouseDescribe=e.data.detail.detailfarmhouseDescribe}),this.detailfarmhouseDescribe&&(this.farmhouseDescribe=!0),res.data.matingList.length>0&&(this.matingList=!0)}},created:function(){this.init()}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Detail"},[a("div",{staticClass:"topBar"},[a("Header",{attrs:{title:t.title,isback:t.isback}})],1),t._v(" "),a("Banner",{attrs:{list:t.banner,detail:t.detail}}),t._v(" "),a("Title",{attrs:{farmhouseRentalsNumber:t.farmhouseRentalsNumber,farmhouseTitle:t.farmhouseTitle,updatetime:t.updatetime}}),t._v(" "),a("Time",{attrs:{rentingPrice:t.rentingPrice,bedroom:t.bedroom,drawingroom:t.drawingroom,curtilageArea:t.curtilageArea,rentingYears:t.rentingYears,characteristics:t.characteristics}}),t._v(" "),a("Swiper",{attrs:{detail:t.detail}}),t._v(" "),a("Information",{attrs:{detail:t.detail}}),t._v(" "),t.farmhouseDescribe?a("Recommend",{attrs:{detail:t.detailfarmhouseDescribe}}):t._e(),t._v(" "),t.matingList?a("Fitment",{attrs:{detail:t.detail}}):t._e(),t._v(" "),a("Specil",{attrs:{detail:t.detail,landList:t.landList}}),t._v(" "),a("Location"),t._v(" "),a("MapGrange",{attrs:{village:t.village}}),t._v(" "),a("RimFarm",{attrs:{list:t.farmHouse}}),t._v(" "),a("RimGrange",{attrs:{foodList:t.foodList,playList:t.playList,stayList:t.stayList}}),t._v(" "),a("Link"),t._v(" "),a("Bootom"),t._v(" "),a("Footer",{attrs:{detail:t.detail}})],1)},staticRenderFns:[]};var $=a("VU/8")(F,N,!1,function(t){a("yZ2x")},"data-v-59d9ce37",null);e.default=$.exports},"76/w":function(t,e,a){"use strict";var i=a("jkKj"),s=a.n(i),n={name:"Location",components:{RouterLink:a("RaDj").a},data:function(){return{latitude:"",longitude:"",villageName:"",mapIcon:"mapIcon"}},created:function(){this.init()},methods:{init:function(){var t=this,e=this.$route.params.id;console.log(e),this.$http.post("appServiceFarmhouse/getRentalHouseDetail",{farmhouseRentalsNumber:e,userId:1}).then(function(e){console.log(e),t.latitude=e.data.detail.latitude,t.longitude=e.data.detail.longitude,t.villageName=e.data.detail.flanspacePlaceName;var a=new s.a.Map("allmap"),i=new s.a.Point(t.longitude,t.latitude);a.centerAndZoom(i,15);var n=new s.a.Marker(i);a.addOverlay(n);var r={position:i,offset:new s.a.Size(-55,-90)},o=new s.a.Label(t.villageName,r);o.setStyle({color:"black",fontSize:"0.2rem",height:"40px",lineHeight:"40px",fontFamily:"微软雅黑",padding:"5px",border:"none",textAlign:"center",width:"100px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),a.addOverlay(o)})},farmMap:function(){var t=this.$route.params.id;this.$router.push({name:"mapDetail",params:{id:t}})}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"map"},[e("div",{staticClass:"top"},[e("div",{staticClass:"left"},[this._v("位置与配套")]),this._v(" "),e("div",{staticClass:"iconfont icon-gengduo1",on:{click:this.farmMap}})]),this._v(" "),e("div",{attrs:{id:"app"}},[e("div",{ref:"allmap",attrs:{id:"allmap"}}),this._v(" "),e("router-view")],1)]),this._v(" "),e("div",{staticClass:"blank"})])},staticRenderFns:[]};var o=a("VU/8")(n,r,!1,function(t){a("S7/Y")},"data-v-d2383630",null);e.a=o.exports},"7HF1":function(t,e,a){"use strict";var i=a("XFU/"),s={name:"Decorate",props:{list:{type:Array,required:!0}},data:function(){return{decorate:"装修套餐"}},components:{Scroll:i.a}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"decorate"},[a("div",{staticClass:"top"},[t._v(t._s(t.decorate))]),t._v(" "),a("scroll",{ref:"scroll",staticClass:"recommend-content"},[a("div",{style:"width:"+3.2*t.list.length+"rem"},t._l(t.list,function(e,i){return a("router-link",{staticClass:"specil_list",attrs:{to:{name:"rentList"}}},[a("div",{staticStyle:{width:"3rem",display:"inline-block","padding-right":".2rem"}},[a("div",{staticClass:"add",staticStyle:{"font-size":"0.26rem","text-align":"center"}},[t._v(t._s(e.text))]),t._v(" "),e.decorationLogo?a("div",{style:"background:url("+e.decorationLogo+");width: 100%;height: 2rem;background-size:cover;background-position: center center"}):t._e(),t._v(" "),a("div",{staticClass:"add"},[t._v("当前农房装修价格")]),t._v(" "),a("div",{staticClass:"bot"},[a("div",{staticClass:"price"},[t._v("约"+t._s(e.decorationPrice)+"万")]),t._v(" "),a("div",{staticClass:"mi"},[t._v(t._s(e.meters)+"元/每平方米")])]),t._v(" "),a("div",{staticClass:"num"},[t._v("装修套餐"+t._s(e.id))])])])}))])],1),t._v(" "),a("div",{staticClass:"blank"})])},staticRenderFns:[]};var r=a("VU/8")(s,n,!1,function(t){a("iEae")},"data-v-8624e1fe",null);e.a=r.exports},"97Hs":function(t,e,a){"use strict";var i={name:"Footer",props:{detail:{type:String,required:!0}},data:function(){return{p1:"收藏",p2:"电话",p3:"预约看房",isCollection:!1,accountPhone:""}},methods:{goTable:function(){var t=this;localStorage.getItem("userInfo")?this.$router.push({name:"orderTable",params:{id:this.detail.farmhouseRentalsNumber}}):(this.$toast("登录之后可预约"),setTimeout(function(){t.$router.push("/login")}))},collect:function(){var t=this;console.log(this.detail);var e=this.detail.id;if(localStorage.getItem("userInfo")){var a=JSON.parse(localStorage.getItem("userInfo")).userId;console.log(a),this.$http.post("appServiceFarmhouse/farmhouseCollection",{farmhouseRentalsId:e,userId:68}).then(function(e){console.log(e),"success"==e.msg?(t.$toast(e.info),t.isCollection=!0):(e.msg="已经收藏啦!")&&(t.isCollection=!0,t.$toast(e.info))})}else this.$toast("登录之后可收藏"),setTimeout(function(){t.$router.push("/login")})},phone:function(){var t=this;localStorage.getItem("userInfo")?(this.accountPhone=this.detail.accountPhone,window.location.href="tel:"+this.accountPhone):(this.$toast("登录之后可拨打电话"),setTimeout(function(){t.$router.push("/login")}))}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"collect",on:{click:t.collect}},[a("p",{staticClass:"iconfont icon-shoucang",style:"color:"+(t.isCollection?"#FF6500":"#69696b")+";"}),t._v(" "),a("p",[t._v(t._s(t.p1))])]),t._v(" "),a("div",{staticClass:"call",on:{click:t.phone}},[a("router-link",{attrs:{to:""}},[a("p",{staticClass:"iconfont icon-dianhua2"}),t._v(" "),a("p",[t._v(t._s(t.p2))])])],1),t._v(" "),a("div",{staticClass:"look",on:{click:t.goTable}},[a("router-link",{attrs:{to:""}},[a("p",{staticClass:"iconfont icon-shijian1"}),t._v(" "),a("p",[t._v(t._s(t.p3))])])],1)])},staticRenderFns:[]};var n=a("VU/8")(i,s,!1,function(t){a("4EXH")},"data-v-4e893a42",null);e.a=n.exports},BPNO:function(t,e,a){"use strict";var i={name:"Fitment",props:{detail:{type:String,required:!0}},data:function(){return{fitment:"房屋配套",imgList:[{text:"电视",icon:"icon-gengduo2"},{text:"电视",icon:"icon-gengduo2"},{text:"电视",icon:"icon-gengduo2"},{text:"电视",icon:"icon-gengduo2"},{text:"电视",icon:"icon-gengduo2"},{text:"电视",icon:"icon-gengduo2"},{text:"电视",icon:"icon-gengduo2"},{text:"电视",icon:"icon-gengduo2"},{text:"电视",icon:"icon-gengduo2"},{text:"电视",icon:"icon-gengduo2"},{text:"电视",icon:"icon-gengduo2"},{text:"电视",icon:"icon-gengduo2"},{text:"电视",icon:"icon-gengduo2"},{text:"电视",icon:"icon-gengduo2"},{text:"电视",icon:"icon-gengduo2"},{text:"电视",icon:"icon-gengduo2"}]}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"blank"}),t._v(" "),a("div",{staticClass:"fitment"},[a("div",{staticClass:"top"},[t._v(t._s(t.fitment))]),t._v(" "),a("div",{staticClass:"content"},t._l(t.detail.matingList,function(e,i){return a("div",{key:i,staticClass:"imgbox"},[a("img",{attrs:{src:e.logoUrl,alt:""}}),t._v(" "),a("p",[t._v(t._s(e.menuName))])])}))]),t._v(" "),a("div",{staticClass:"blank"})])},staticRenderFns:[]};var n=a("VU/8")(i,s,!1,function(t){a("rzMu")},"data-v-c81743a0",null);e.a=n.exports},"HEx/":function(t,e){},IJsY:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom"},[a("van-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.houseList,function(e,i){return a("van-tab",{attrs:{title:e.name}},[t._v(t._s(e.text))])}))],1)},staticRenderFns:[]};var s=a("VU/8")({name:"Bootom",data:function(){return{active:0,houseList:[{name:"同地区农房",text:"木兰山民宿农庄A"},{name:"周边街道农房",text:"木兰山民宿农庄B"},{name:"周边地区农房",text:"木兰山民宿农庄C"}]}}},i,!1,function(t){a("Ti/K")},"data-v-a0ef3acc",null);e.a=s.exports},KchO:function(t,e){},RaDj:function(t,e,a){"use strict";e.a={props:{url:String,replace:Boolean,to:[String,Object]},methods:{routerLink(){const{to:t,url:e,$router:a,replace:i}=this;t&&a?a[i?"replace":"push"](t):e&&(i?location.replace(e):location.href=e)}}}},"S7/Y":function(t,e){},"Ti/K":function(t,e){},Txev:function(t,e,a){"use strict";var i={name:"Swiper",props:{detail:{type:String,required:!0}},data:function(){return{p1:"三乡",p2:"政策"}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"total"},[a("div",{staticClass:"left"},[a("p",[t._v(t._s(t.p1))]),t._v(" "),a("span",[t._v(t._s(t.p2))])]),t._v(" "),a("van-swipe",{attrs:{autoplay:3e3,vertical:"","show-indicators":!1}},t._l(t.detail.news,function(e,i){return a("van-swipe-item",{key:i,staticClass:"swiper"},[a("router-link",{attrs:{to:{name:"textDetail",params:{id:e.id}}}},[a("p",{staticClass:"iconfont icon-dian"}),t._v(" "),a("p",[t._v(t._s(e.informationTitle))])])],1)}))],1),t._v(" "),a("div",{staticClass:"blank"})])},staticRenderFns:[]};var n=a("VU/8")(i,s,!1,function(t){a("Z1Vd")},"data-v-8a75c262",null);e.a=n.exports},VbvK:function(t,e,a){"use strict";var i=a("7dTR"),s=a.n(i),n={name:"Price",components:{RouterLink:a("RaDj").a},props:{village:{type:String,required:!0}},data:function(){return{cun:"张家冲村",beautiful:"美丽乡村",price:"1.2",location:"黄陂区 - 长岭街道",rent:"100",url:s.a,village:village}},methods:{villageDetail:function(){console.log(),this.$router.push({name:"villageDetail",params:{id:this.village.villageNumber}})}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"grange"},[i("div",{staticClass:"top"},[i("div",{staticClass:"left"},[i("p",[t._v(t._s(t.village.villageName))]),t._v(" "),i("div",[t._v(t._s(1==t.village.beautifulCountry?"美丽乡村":""))])]),t._v(" "),i("div",{staticClass:"right"},[i("p",[t._v("了解详情")]),t._v(" "),i("div",{staticClass:"iconfont icon-gengduo1",on:{click:function(e){t.villageDetail(t.village)}}})])]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"left"},[i("div",{staticClass:"price"},[i("p",[t._v("本村年租价")]),t._v(" "),i("p",[t._v(t._s(t.village.rentingAverage)+"万元")]),t._v(" "),i("p",[t._v("/年")])]),t._v(" "),i("div",{staticClass:"location"},[i("p",[t._v("所在区域")]),t._v(" "),i("p",[t._v(t._s(t.village.fareaName)+"-"+t._s(t.village.fstreetName))])]),t._v(" "),i("div",{staticClass:"rent"},[i("p",[t._v("在租房源")]),t._v(" "),i("p",[t._v(t._s(t.village.rentFarmhouse)+"套")])])]),t._v(" "),i("div",{staticClass:"right"},[t.village.logo?i("div",{style:"background:url("+t.village.logo+");width: 100%;height: 100%;background-size:cover;background-position: center center"}):i("img",{attrs:{src:a("7dTR"),alt:""}})])])]),t._v(" "),i("div",{staticClass:"blank"})])},staticRenderFns:[]};var o=a("VU/8")(n,r,!1,function(t){a("5kj6")},"data-v-14d04e63",null);e.a=o.exports},Z1Vd:function(t,e){},cOJf:function(t,e){},eUn7:function(t,e){},eaE4:function(t,e){},gRpS:function(t,e,a){"use strict";var i={name:"Recommend",props:{detail:{type:String,required:!0}},data:function(){return{activeNames:["1"],title:"农房介绍",text:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊",first:"不不不不不不不不不不不不不不"}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[a("van-collapse-item",{attrs:{title:"农房介绍",name:"1"}},[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[a("p",[t._v(t._s(t.title))])]),t._v("\n      "+t._s(t.detail.farmhouseDescribe)+"\n    ")])],1)],1)},staticRenderFns:[]};var n=a("VU/8")(i,s,!1,function(t){a("HEx/")},"data-v-2782e86b",null);e.a=n.exports},iEae:function(t,e){},kPHi:function(t,e){},l4UM:function(t,e){},lE54:function(t,e,a){"use strict";var i={name:"Time",props:{rentingPrice:{type:Number||String,required:!0},bedroom:{type:String,required:!0},drawingroom:{type:String,required:!0},curtilageArea:{type:String,required:!0},rentingYears:{type:String,required:!0},characteristics:{type:Array,required:!0},detail:{type:String,required:!0}},data:function(){return{year:"2",shi:"4",ting:"2",mi:"160",nian:"20",btnList:[{name:"有山"},{name:"独立院落"},{name:"近高速"},{name:"可种菜"},{name:"养宠物"}]}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"total"},[a("div",{staticClass:"top"},[a("div",{staticClass:"year"},[a("div",{staticClass:"header"},[a("p",[t._v(t._s(t.rentingPrice))]),t._v(" "),a("p",[t._v("万元/年")])]),t._v(" "),a("div",{staticClass:"bot"},[t._v("\n          价格\n        ")])]),t._v(" "),a("div",{staticClass:"room"},[a("div",{staticClass:"header"},[a("p",[t._v(t._s(t.bedroom))]),t._v(" "),a("p",[t._v("室")]),t._v(" "),a("p",[t._v(t._s(t.drawingroom))]),t._v(" "),a("p",[t._v("厅")])]),t._v(" "),a("div",{staticClass:"bot"},[t._v("\n          房屋户型\n        ")])]),t._v(" "),a("div",{staticClass:"meters"},[a("div",{staticClass:"header"},[a("p",[t._v(t._s(t.curtilageArea))]),t._v(" "),a("p",[t._v("平方米")])]),t._v(" "),a("div",{staticClass:"bot"},[t._v("\n          建筑面积\n        ")])]),t._v(" "),a("div",{staticClass:"nian"},[a("div",{staticClass:"header"},[a("p",[t._v(t._s(t.rentingYears))]),t._v(" "),a("p",[t._v("年")])]),t._v(" "),a("div",{staticClass:"bot"},[t._v("\n          租赁年限\n        ")])])]),t._v(" "),a("div",{staticClass:"btnbox"},t._l(t.characteristics,function(e,i){return a("div",{key:i,staticClass:"btn"},[t._v(t._s(e))])}))]),t._v(" "),a("div",{staticClass:"blank"})])},staticRenderFns:[]};var n=a("VU/8")(i,s,!1,function(t){a("ldhx")},"data-v-3334b92c",null);e.a=n.exports},ldhx:function(t,e){},mspy:function(t,e){},rzMu:function(t,e){},"x+r1":function(t,e,a){"use strict";var i=a("XFU/"),s={name:"RimFarm",props:{list:{type:Array,required:!0}},data:function(){return{}},components:{Scroll:i.a},methods:{goNext:function(){this.$router.go(0)}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"farm"},[a("div",{staticClass:"top"},[t._v("周边农房")]),t._v(" "),a("div",{staticClass:"FarmSwiper",staticStyle:{overflow:"hidden"}},[a("scroll",{ref:"scroll",staticClass:"content"},[a("div",{style:"width:"+3.9*t.list.length+"rem"},t._l(t.list,function(e,i){return a("router-link",{staticClass:"swiper",attrs:{to:{name:"rentDetail",params:{id:e.farmhouseRentalsNumber}}}},[a("div",{staticStyle:{width:"3rem",display:"inline-block","padding-right":".2rem"},on:{click:t.goNext}},[e.fileURL?a("div",{style:"background:url("+e.fileURL+");width: 100%;height: 2rem;background-size:cover;background-position: center center"}):t._e(),t._v(" "),a("div",{staticClass:"add"},[t._v(t._s(e.farmhouseTitle))]),t._v(" "),a("div",{staticClass:"bot"},[a("div",{staticClass:"price"},[t._v(t._s(e.rentingPrice)+"万元")]),t._v(" "),a("div",{staticClass:"year"},[t._v(t._s(e.rentingYears)+"年")]),t._v(" "),a("div",{staticClass:"meters"},[t._v(t._s(e.coveredArea)+"平")])])])])}))])],1)]),t._v(" "),a("div",{staticClass:"blank"})])},staticRenderFns:[]};var r=a("VU/8")(s,n,!1,function(t){a("eaE4")},"data-v-60d85ee8",null);e.a=r.exports},xDBu:function(t,e,a){"use strict";var i=a("754W"),s=a("XFU/"),n={name:"RimGrange",props:{foodList:{type:Array},playList:{type:Array},stayList:{type:Array}},data:function(){return{activeIndex:0,changeRed:0}},methods:{toActive:function(t){this.activeIndex=t,this.changeRed=t,console.log(this.changeRed)}},components:{stars:i.a,Scroll:s.a}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"scenicDetail"},[a("div",{staticClass:"farm"},[a("div",{staticClass:"scenic_top clear"},[a("span",[t._v("周边农庄")]),t._v(" "),a("van-tabs",{attrs:{type:"card"}},[a("van-tab",{staticStyle:{"margin-top":"0.2rem"},attrs:{title:"住宿"}},[a("div",{staticClass:"scenic_bottom",staticStyle:{overflow:"hidden"}},[a("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.stayList}},[a("div",{style:"width:"+3.2*t.stayList.length+"rem"},t._l(t.stayList,function(e,i){return a("router-link",{attrs:{to:{name:"grangedetail",params:{id:e.grangeNumber}}}},[a("div",{staticStyle:{width:"3rem",display:"inline-block","padding-right":"0.2rem",position:"relative"}},[e.fileURL?a("div",{style:"background:url("+e.fileURL+");width: 100%;height: 2rem;background-size:cover;background-position: center center"}):t._e(),t._v(" "),a("div",{staticClass:"van-ellipsis",staticStyle:{"font-size":"0.26rem"}},[t._v(t._s(e.grangeName))]),t._v(" "),a("span",{staticStyle:{position:"absolute",bottom:"0.7rem",display:"inline-block",width:"1.2rem",height:"0.3rem",left:"0.1rem",background:"rgba(0, 0, 0, 0.5)","text-align":"center",color:"white","border-radius":"0.3rem","line-height":"0.3rem"}},[t._v("￥"+t._s(e.personConsumption)+"起")]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#ff6500"}},[a("stars",{attrs:{rate:e.totalMark||0}}),t._v(" "+t._s(e.totalMark)+"分")],1),t._v("\n                           \n                        "),a("span",{staticStyle:{color:"grey"}},[t._v(t._s(e.fareaName))])])])])}))])],1)]),t._v(" "),a("van-tab",{staticStyle:{"margin-top":"0.2rem"},attrs:{title:"美食"}},[a("div",{staticClass:"scenic_bottom",staticStyle:{overflow:"hidden"}},[a("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.foodList}},[a("div",{style:"width:"+3.2*t.foodList.length+"rem"},t._l(t.foodList,function(e,i){return a("router-link",{attrs:{to:{name:"grangedetail",params:{id:e.grangeNumber}}}},[a("div",{staticStyle:{width:"3rem",display:"inline-block","padding-right":"0.2rem",position:"relative"}},[e.fileURL?a("div",{style:"background:url("+e.fileURL+");width: 100%;height: 2rem;background-size:cover;background-position: center center"}):t._e(),t._v(" "),a("div",{staticClass:"van-ellipsis",staticStyle:{"font-size":"0.26rem"}},[t._v(t._s(e.grangeName))]),t._v(" "),a("span",{staticStyle:{position:"absolute",bottom:"0.7rem",display:"inline-block",width:"1.2rem",height:"0.3rem",left:"0.1rem",background:"rgba(0, 0, 0, 0.5)","text-align":"center",color:"white","border-radius":"0.3rem","line-height":"0.3rem"}},[t._v("￥"+t._s(e.personConsumption)+"起")]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#ff6500"}},[a("stars",{attrs:{rate:e.totalMark||0}}),t._v(" "+t._s(e.totalMark)+"分")],1),t._v("\n                           \n                        "),a("span",{staticStyle:{color:"grey"}},[t._v(t._s(e.fareaName))])])])])}))])],1)]),t._v(" "),a("van-tab",{staticStyle:{"margin-top":"0.2rem"},attrs:{title:"游玩"}},[a("div",{staticClass:"scenic_bottom",staticStyle:{overflow:"hidden"}},[a("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.playList}},[a("div",{style:"width:"+3.2*t.playList.length+"rem"},t._l(t.playList,function(e,i){return a("router-link",{attrs:{to:{name:"grangedetail",params:{id:e.grangeNumber}}}},[a("div",{staticStyle:{width:"3rem",display:"inline-block","padding-right":"0.2rem",position:"relative"}},[e.fileURL?a("div",{style:"background:url("+e.fileURL+");width: 100%;height: 2rem;background-size:cover;background-position: center center"}):t._e(),t._v(" "),a("div",{staticClass:"van-ellipsis",staticStyle:{"font-size":"0.26rem"}},[t._v(t._s(e.grangeName))]),t._v(" "),a("span",{staticStyle:{position:"absolute",bottom:"0.7rem",display:"inline-block",width:"1.2rem",height:"0.3rem",left:"0.1rem",background:"rgba(0, 0, 0, 0.5)","text-align":"center",color:"white","border-radius":"0.3rem","line-height":"0.3rem"}},[t._v("￥"+t._s(e.personConsumption)+"起")]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#ff6500"}},[a("stars",{attrs:{rate:e.totalMark||0}}),t._v(" "+t._s(e.totalMark)+"分")],1),t._v("\n                           \n                        "),a("span",{staticStyle:{color:"grey"}},[t._v(t._s(e.fareaName))])])])])}))])],1)])],1)],1)])]),t._v(" "),a("div",{staticClass:"blank"})])},staticRenderFns:[]};var o=a("VU/8")(n,r,!1,function(t){a("cOJf"),a("l4UM")},"data-v-9c0cf39c",null);e.a=o.exports},yZ2x:function(t,e){}});