webpackJsonp([64],{G8LC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={components:{Header:a("FCAx").a},name:"Issue",data:function(){return{title:"发布",active:0,houseList:[{title:"发布农房",name:"farm"},{title:"发布求租",name:"grange"},{title:"发布农庄",name:"wanted"}]}},methods:{onClick:function(t,e){0==t?this.$router.push({path:"/Issue/farm"}):1==t?this.$router.push({path:"/Issue/grange"}):2==t&&this.$router.push({path:"/Issue/wanted"})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom"},[a("div",{staticClass:"topBar"},[a("Header",{attrs:{title:t.title}})],1),t._v(" "),a("div",{staticStyle:{width:"100%",height:".92rem"}}),t._v(" "),a("van-tabs",{on:{click:t.onClick},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.houseList,function(t,e){return a("van-tab",{attrs:{title:t.title}})})),t._v(" "),a("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")(i,n,!1,function(t){a("uJl8")},"data-v-8257ffd6",null);e.default=s.exports},uJl8:function(t,e){}});