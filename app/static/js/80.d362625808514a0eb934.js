webpackJsonp([80],{UtAR:function(t,e){},uUSc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"applyText",data:function(){return{apply:""}},mounted:function(){if(2==this.$route.query.type){var t=this.$route.query.htmls;this.apply=t,this.$nextTick(function(){document.forms[0].submit()})}else this.run()},created:function(){},methods:{run:function(){var t=this.$route.query.htmls;this.apply=t,this.$nextTick(function(){document.getElementById("sp").click()})}}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{domProps:{innerHTML:this._s(this.apply)}},[this._v("\n"+this._s(this.apply)+"\n")])},staticRenderFns:[]};var u=n("VU/8")(i,s,!1,function(t){n("UtAR")},"data-v-1414eb15",null);e.default=u.exports}});