(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a1763ac"],{"8e81":function(t,e,n){},c0be:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("topBar",{attrs:{title:"我的钱包"}}),n("div",{staticClass:"card"},[t.dat?n("div",[n("p",[t._v("总金额(元)")]),n("h2",[t._v(t._s(t.dat.money))]),n("i",[t._v("总收益:￥"+t._s(t.dat.total_money))]),n("router-link",{attrs:{to:"/tixian"}},[t._v("马上提现")]),n("div",[n("span",{style:{cursor:"pointer"},on:{click:function(e){return t.$router.push({path:"/txlb"})}}},[t._v("提现记录")]),n("em"),n("span",{style:{cursor:"pointer"},on:{click:function(e){return t.$router.push({path:"/syls"})}}},[t._v("收益记录")])])],1):n("v-loading"),n("p",[t._v("温馨提示:提现操作需预约才可进行")])],1)],1)},r=[],c=(n("96cf"),n("1da1")),i=n("5530"),o=n("2f62"),s=n("a474"),u={name:"index",data:function(){return{dat:null}},computed:Object(i["a"])({},Object(o["c"])(["userAgent"])),methods:{getmoney:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].qianbao();case 2:n=e.sent,t.dat=n.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.getmoney()}},d=u,l=(n("e945"),n("2877")),p=Object(l["a"])(d,a,r,!1,null,"43cba3f0",null);e["default"]=p.exports},e945:function(t,e,n){"use strict";var a=n("8e81"),r=n.n(a);r.a}}]);