(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0271be63"],{"75d7":function(t,n,e){"use strict";var r=e("b3e8"),o=e.n(r);o.a},9536:function(t,n,e){t.exports={fontColor:"#EA4A32",fontColor2:"#222",blue:"#2196F3"}},a04a:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.list?e("div",{staticClass:"list9"},[e("table",{attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[t._m(0),t._l(t.list,(function(n,r){return e("tr",{key:r},[e("td",[t._v(t._s(n.expect.slice(n.expect.length-3))+"期")]),e("td",{staticClass:"red"},[t._v(t._s(n.opencode))]),e("td",[t._v(t._s(t.addArr(n.opencode.split(","))))]),e("td",[t._v(t._s(t.contrast(t.addArr(n.opencode.split(",")))))]),e("td",{domProps:{innerHTML:t._s(t.orArr(t.addArr(n.opencode.split(","))))}}),e("td",{domProps:{innerHTML:t._s(t.heZhiWeiBigOrSmall(n.opencode.split(",")))}}),e("td",{domProps:{innerHTML:t._s(t.sxpan(n.opencode.split(",")))}}),e("td",[t._v(t._s(t.jiOu(n.opencode.split(","))))])])}))],2)]):e("v-loading")},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",[e("td",[t._v("期号")]),e("td",[t._v("开奖号码")]),e("td",[t._v("和值")]),e("td",[t._v("大小")]),e("td",[t._v("单双")]),e("td",[t._v("总尾大小")]),e("td",[t._v("上下盘")]),e("td",[t._v("奇偶盘")])])}],s=(e("13d5"),e("0d03"),e("d3b7"),e("e25e"),e("25f0"),e("5530")),d=e("9536"),i=e.n(d),c=e("2f62"),a={name:"index1",data:function(){return{scss:i.a}},computed:Object(s["a"])({},Object(c["d"])({list:function(t){return t.chart&&t.chart.data}})),methods:{addArr:function(t){return t.reduce((function(t,n){return parseInt(t)+parseInt(n)}))},orArr:function(t){return t%2===0?'<span style="color:'+this.scss.fontColor2+'">双</span>':'<span style="color:'+this.scss.fontColor+'">单</span>'},contrast:function(t){return t<=84?"小":"大"},heZhiWeiBigOrSmall:function(t){for(var n,e=0,r=0;r<t.length;r++)e+=parseInt(t[r]);return n=e.toString()[e.toString().length-1],n=parseInt(n)>4?"总尾大":"总尾小",n},sxpan:function(t){for(var n=0,e=0,r=0;r<t.length;r++)parseInt(t[r])<=10?n++:e++;return n>e?"上":"下"},jiOu:function(t){for(var n=0,e=0,r=0;r<t.length;r++)parseInt(t[r])%2===0?n++:e++;return n>e?"偶":n<e?"奇":n===e?"和":void 0}},mounted:function(){}},l=a,u=(e("75d7"),e("2877")),p=Object(u["a"])(l,r,o,!1,null,"69231429",null);n["default"]=p.exports},b3e8:function(t,n,e){}}]);