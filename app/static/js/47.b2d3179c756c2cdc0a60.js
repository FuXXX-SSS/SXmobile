webpackJsonp([47],{"7xdE":function(t,e){},OfP1:function(t,e){},sFEl:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("56oB"),s={condition:function(){var t=this;this.$http.post("appServiceFarmhouse/getMapParam").then(function(e){var a=e.data.areaHasVillage;a.unshift({text:"不限",children:"不限",restful:""});var i=e.data.farmhouseRentPrice;i.map(function(t){t.children.unshift({menuRestfulDictionary:"",text:"不限",id:0})});var s=e.data.farmhouseRentalArea;s.map(function(t){t.children.unshift({menuRestfulDictionary:"",text:"不限",id:0})});var n=e.data.farmhouseRentalLife;n.map(function(t){t.children.unshift({menuRestfulDictionary:"",text:"不限",id:0})}),t.areaHasVillage=a,t.farmhouseRentPrice=i,t.farmhouseRentalArea=s,t.farmhouseRentalLife=n})},init:function(){var t=this,e={areaId:this.id,cityRestful:"wuhan",condition:this.conditionText,grade:this.grade,page:"1",restful:this.menuRestfulDictionaryPrice+this.menuRestfulDictionaryArea+this.menuRestfulDictionaryLife+this.restFul3id+this.areaRestfulDictionary+this.restful+this.restFul};this.$http.post("appServiceFarmhouse/mapcondition",e).then(function(e){t.farmhouseCount=e.data.farmhouseCount,e.data.farmhouseNum?t.farmhouseNum=e.data.farmhouseNum:console.log(123),t.setmap()})},setmap:function(t){var e=this;function a(t,e,a,i){this._point=t,this._text=e,this._id=a,this._index=i}if(this.map=new BMap.Map("allmap"),this.map.centerAndZoom("武汉",9.5),this.map.enableScrollWheelZoom(!0),a.prototype=new BMap.Overlay,a.prototype.initialize=function(t){this._map=t;var e=this._div=document.createElement("div");e.className="overlay",e.style.position="absolute",e.style.zIndex=BMap.Overlay.getZIndex(this._point.lat),e.style.padding="2px",e.style.MozUserSelect="none",e.style.fontSize="12px";var a=this._arrow=document.createElement("div");a.className="map-arrow",a.style.position="absolute",a.style.width="0px",a.style.height="0px",a.style.top="42px",a.style.left="18px",a.style.border="10px transparent solid",a.style.borderTopColor="#ff9900",e.appendChild(a);var i=this._a=document.createElement("a");return i.className="map-content",i.style.backgroundColor="#ff9900",i.style.borderRadius="5px",i.style.padding="5px",i.style.color="white",i.style.textDecoration="none",i.style.height="30px",i.style.whiteSpace="nowrap",i.style.display="inline-block",e.appendChild(i),i.appendChild(document.createTextNode(this._text)),t.getPanes().labelPane.appendChild(e),e},a.prototype.draw=function(){var t=this._map.pointToOverlayPixel(this._point);this._div.style.left=t.x-parseInt(this._arrow.style.left)+"px",this._div.style.top=t.y-30+"px"},this.farmhouseCount)this.farmhouseCount.forEach(function(t,i){var s=new a(new BMap.Point(t.longitude,t.latitude),t.fname+t.number+"套",t.id,i);e.map.addOverlay(s)});else{var i=new a(new BMap.Point(this.farmhouseNum.longitude,this.farmhouseNum.latitude),this.farmhouseNum.villageName+this.farmhouseNum.count+"套",this.farmhouseNum.id);console.log(i),this.map.addOverlay(i)}var s=this;this.map.addEventListener("touchmove",function(t){s.map.enableDragging()}),this.map.addEventListener("touchend",function(t){s.map.disableDragging()}),this.map.disableDragging(),this.map.enableScrollWheelZoom(!0),this.tagcilck()},tagcilck:function(){var t=this,e=document.getElementsByClassName("overlay");if(this.farmhouseCount)this.farmhouseCount.forEach(function(a,i){e[i].onclick=function(){this.grade=a.grade,this.id=a.id;var e={areaId:this.id,cityRestful:"wuhan",condition:"",grade:this.grade,page:"1",restful:""};t.$http.post("appServiceFarmhouse/mapcondition",e).then(function(e){t.farmhouseCount=e.data.farmhouseCount,null!=e.data.easyResult&&(t.easyResult=e.data.easyResult,t.farmhouseNum=e.data.farmhouseNum,t.searchList=!0),e.data.easyResult&&(t.easyResult=e.data.easyResult.rows,console.log(t.easyResult)),t.setmap()})}});else{var a={areaId:this.id,cityRestful:"wuhan",condition:"",grade:this.grade,page:"",restful:""};t.$http.post("appServiceFarmhouse/mapcondition",a).then(function(e){e.data.easyResult&&(t.easyResult=e.data.easyResult.rows,console.log(t.easyResult))})}},village:function(){this.area2=!1,this.area3=!1,this.area4=!1,this.area1=!this.area1},price:function(){this.area3=!1,this.area4=!1,this.area1=!1,this.area2=!this.area2},area:function(){this.area4=!1,this.area1=!1,this.area2=!1,this.area3=!this.area3},year:function(){this.area1=!1,this.area2=!1,this.area3=!1,this.area4=!this.area4},Villagecheck:function(t,e){this.grade=t.grade,this.areaRestfulDictionary=t.areaRestfulDictionary,console.log(t),this.mainActiveIndex=e,this.id=t.id,this.areatext=t.text,this.searchList=!1,0==e&&(this.areatext="区域",this.grade="",this.id="",this.areaRestfulDictionary=t.restful),this.area1=!1,this.init(),console.log(t.restful)},priceClick:function(t){this.menuRestfulDictionaryPrice=t.menuRestfulDictionary,this.pricetext=t.text,console.log(this.menuRestfulDictionaryPrice),0==t.id&&(this.pricetext="价格"),this.activeId=t.id,this.searchList=!1,this.area2=!1,this.init()},AreaClick:function(t){this.menuRestfulDictionaryArea=t.menuRestfulDictionary,this.AreaID=t.id,this.speciltext=t.text,this.activeId=t.id,console.log(this.menuRestfulDictionaryArea),0==t.id&&(this.speciltext="面积"),this.searchList=!1,this.area3=!1,this.init()},LifeClick:function(t){this.menuRestfulDictionaryLife=t.menuRestfulDictionary,this.yeartext=t.text,console.log(this.menuRestfulDictionaryLife),0==t.id&&(this.yeartext="年限"),this.activeId=t.id,this.searchList=!1,this.area4=!1,this.init()},onNavClick:function(t,e){this.mainActiveIndex1=e,this.areaRestfulDictionary="",this.grade=2,this.id=t.id,this.init(),this.areatext=t.text,this.searchList=!1,this.area1=!1,console.log(t)},onItemClick:function(t){console.log(t),this.activeId=t.id,this.id=t.id,this.areatext=t.text,this.area1=!1,this.grade=3,this.searchList=!0,this.init()},showListDown:function(){this.xia=!1,this.shang=!0,this.messageList=!1},showListUp:function(){this.xia=!0,this.shang=!1,this.show=!0,this.messageList=!0},findMap2:function(){this.conditionText=this.findMap,console.log(this.conditionText),this.init()}},n=a("jkKj"),l={name:"maps",data:function(){return{value1:[],show:!0,url:"http://p0.qhimgs4.com/t01ae9d3a8e43253772.jpg",area1:!1,area2:!1,area3:!1,area4:!1,areaHasVillage:[],mainActiveIndex:0,mainActiveIndex1:0,activeId:0,farmhouseRentPrice:[],pricetext:"价格",areatext:"区域",farmhouseRentalArea:[],speciltext:"面积",farmhouseRentalLife:[],yeartext:"年限",farmhouseCount:[],grade:"",id:"",easyResult:[],farmhouseNum:"",searchList:!1,messageList:!0,shang:!0,xia:!1,areaRestfulDictionary:"",restFul:"",restFul3id:"",menuRestfulDictionaryPrice:"",menuRestfulDictionaryArea:"",menuRestfulDictionaryLife:"",findMap:"",conditionText:null,restful:""}},created:function(){this.init(),this.condition()},methods:s,components:{BMap:a.n(n).a},mounted:function(){}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"map"}},[a("div",{staticClass:"mapList"},[a("div",{staticClass:"search"},[a("van-search",{attrs:{placeholder:"请输入区域/景点/关键字",value:""},model:{value:t.findMap,callback:function(e){t.findMap=e},expression:"findMap"}}),t._v(" "),a("div",{staticClass:"btn",on:{click:t.findMap2}},[t._v("地图找房")])],1),t._v(" "),a("div",{staticClass:"condition"},[a("ul",{staticClass:"top_tab clear",staticStyle:{"padding-left":"0.6rem"}},[a("li",{staticClass:"list",class:{active:t.area1},on:{click:function(e){t.village()}}},[a("p",{staticStyle:{"text-overflow":"ellipsis","white-space":"nowrap",float:"left",overflow:"hidden",width:"70%"}},[t._v("\n            "+t._s(t.areatext))]),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.area1,expression:"area1"}],staticClass:"iconfont icon-xiala1",staticStyle:{float:"left"}}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.area1,expression:"!area1"}],staticClass:"iconfont icon-xiala",staticStyle:{float:"left"}})]),t._v(" "),a("li",{staticClass:"list",class:{active:t.area2},on:{click:t.price}},[a("p",{staticStyle:{"text-overflow":"ellipsis","white-space":"nowrap",float:"left",overflow:"hidden",width:"70%"}},[t._v("\n            "+t._s(t.pricetext))]),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.area2,expression:"area2"}],staticClass:"iconfont icon-xiala1",staticStyle:{float:"left"}}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.area2,expression:"!area2"}],staticClass:"iconfont icon-xiala",staticStyle:{float:"left"}})]),t._v(" "),a("li",{staticClass:"list",class:{active:t.area3},on:{click:t.area}},[a("p",{staticStyle:{"text-overflow":"ellipsis","white-space":"nowrap",float:"left",overflow:"hidden",width:"70%"}},[t._v("\n            "+t._s(t.speciltext))]),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.area3,expression:"area3"}],staticClass:"iconfont icon-xiala1",staticStyle:{float:"left"}}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.area3,expression:"!area3"}],staticClass:"iconfont icon-xiala",staticStyle:{float:"left"}})]),t._v(" "),a("li",{staticClass:"list",class:{active:t.area4},on:{click:t.year}},[a("p",{staticStyle:{"text-overflow":"ellipsis","white-space":"nowrap",float:"left",overflow:"hidden",width:"70%"}},[t._v("\n            "+t._s(t.yeartext))]),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.area4,expression:"area4"}],staticClass:"iconfont icon-xiala1",staticStyle:{float:"left"}}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.area4,expression:"!area4"}],staticClass:"iconfont icon-xiala",staticStyle:{float:"left"}})])]),t._v(" "),a("div",[t.area1?a("div",{staticClass:"regin area-select-block"},[a("div",{staticClass:"van-tree-select"},[a("div",{staticClass:"van-tree-select__nav"},t._l(t.areaHasVillage,function(e,i){return a("div",{class:t.mainActiveIndex==i?"van-tree-select__nitem--active van-ellipsis van-tree-select__nitem":"van-ellipsis van-tree-select__nitem",on:{click:function(a){t.Villagecheck(e,i)}}},[t._v("\n                "+t._s(e.text)+"\n              ")])})),t._v(" "),a("div",{staticClass:"van-tree-select__nav"},t._l(t.areaHasVillage[t.mainActiveIndex].children,function(e,i){return a("div",{class:t.mainActiveIndex1==i?"van-tree-select__nitem--active van-ellipsis van-tree-select__nitem":"van-ellipsis van-tree-select__nitem",on:{click:function(a){t.onNavClick(e,i)}}},[t._v("\n                "+t._s(e.text)+"\n              ")])})),t._v(" "),a("div",{staticClass:"van-tree-select__nav"},t._l(t.areaHasVillage[t.mainActiveIndex].children[t.mainActiveIndex1].children,function(e,i){return a("div",{class:t.activeId==i?"van-tree-select__nitem--active van-ellipsis van-tree-select__nitem":"van-ellipsis van-tree-select__nitem",on:{click:function(a){t.onItemClick(e)}}},[t._v("\n                "+t._s(e.text)+"\n              ")])}))])]):t._e(),t._v(" "),t.area2?a("div",{staticClass:"rank price"},[a("van-tree-select",{attrs:{items:t.farmhouseRentPrice,"active-id":t.activeId},on:{itemclick:t.priceClick}})],1):t._e(),t._v(" "),t.area3?a("div",{staticClass:"rank area"},[a("van-tree-select",{attrs:{items:t.farmhouseRentalArea,"active-id":t.activeId},on:{itemclick:t.AreaClick}})],1):t._e(),t._v(" "),t.area4?a("div",{staticClass:"rank life"},[a("van-tree-select",{attrs:{items:t.farmhouseRentalLife,"active-id":t.activeId},on:{itemclick:t.LifeClick}})],1):t._e()])])]),t._v(" "),a("div",{staticClass:"maparea"},[a("div",{attrs:{id:"app"}},[a("div",{ref:"allmap",attrs:{id:"allmap"}}),t._v(" "),a("router-view")],1)]),t._v(" "),a("van-popup",{staticClass:"nav",staticStyle:{"border-radius":"0.55rem 0.5rem 0 0"},attrs:{position:"bottom",overlay:!1},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t.searchList?a("div",{staticClass:"searchList"},[a("div",{staticClass:"showList"},[a("div",{staticClass:"list"},[a("p",{staticClass:"left"},[t._v(t._s(t.farmhouseNum.streetName)+"--"+t._s(t.farmhouseNum.villageName))]),t._v(" "),a("div",{staticClass:"right"},[t.shang?a("div",{staticClass:"iconfont icon-xiala1",on:{click:t.showListUp}}):t._e(),t._v(" "),t.xia?a("div",{staticClass:"iconfont icon-xiala",on:{click:t.showListDown}}):t._e()])]),t._v(" "),a("div",{staticClass:"find"},[a("p",[t._v(t._s(t.farmhouseNum.villageName)+"共找到")]),t._v(" "),a("p",[t._v(t._s(t.farmhouseNum.count)+"套")]),t._v(" "),a("p",[t._v("在租农房")])])]),t._v(" "),t.messageList?a("div",{staticClass:"messageList"},[t._l(t.easyResult,function(e,i){return a("van-row",{staticStyle:{"margin-left":"0px"},attrs:{gutter:"20"}},[a("router-link",{attrs:{to:{name:"rentDetail",params:{id:e.number}}}},[a("van-col",{staticStyle:{"padding-right":"0"},attrs:{span:"8"}},[a("img",{attrs:{src:e.fileUrl,alt:""}})]),t._v(" "),a("van-col",{staticStyle:{"padding-left":"0.1rem"},attrs:{span:"16"}},[a("div",{staticClass:"title"},[t._v("\n                "+t._s(e.farmhouseTitle)+"\n              ")]),t._v(" "),a("div",{staticClass:"area"},[t._v("\n                "+t._s(e.bedroom)+"室"+t._s(e.drawingroom)+"厅/"+t._s(e.coveredArea)+"平/"+t._s(e.rentingYears)+"年\n              ")]),t._v(" "),a("div",{staticClass:"price"},[a("p",[t._v(t._s(e.rentingPrice)+"万元")]),t._v(" "),a("p",[t._v("/年")])])])],1)],1)}),t._v(" "),a("div",{staticClass:"last"},[t._v("\n          已经是最后一条房源了！\n        ")])],2):t._e()]):t._e()])],1)},staticRenderFns:[]};var o=a("VU/8")(l,r,!1,function(t){a("7xdE")},"data-v-3dfbedf1",null).exports,c={name:"listMap",props:{isapp:!0},data:function(){return{title:"地图找房",isback:!0}},components:{Header:i.a,Map:o}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.isapp?this._e():e("Header",{attrs:{title:this.title}}),this._v(" "),e("Map")],1)},staticRenderFns:[]};var d=a("VU/8")(c,h,!1,function(t){a("OfP1")},"data-v-20d9a549",null);e.default=d.exports}});