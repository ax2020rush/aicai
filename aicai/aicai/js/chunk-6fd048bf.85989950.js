(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fd048bf"],{"30ad":function(s,t,n){},"70fb":function(s,t,n){"use strict";var o=n("30ad"),r=n.n(o);r.a},9536:function(s,t,n){s.exports={fontColor:"#EA4A32",fontColor2:"#222",blue:"#2196F3"}},b59f:function(s,t,n){"use strict";n.r(t);var o=function(){var s=this,t=s.$createElement,n=s._self._c||t;return s.list?n("div",{staticClass:"list9"},[n("table",{attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[s._m(0),s._l(s.list,(function(t,o){return n("tr",{key:o},[n("td",[s._v(s._s(t.expect.slice(t.expect.length-3))+"期")]),n("td",[n("div",{staticClass:"red",domProps:{innerHTML:s._s(s.pk10(t.opencode.split(",")))}}),n("div",{staticClass:"list3"},[n("span",[s._v("冠军 "),n("span",{domProps:{innerHTML:s._s(s.contrast(t.opencode.split(",")[0]))}}),n("span",{domProps:{innerHTML:s._s(s.orArr(t.opencode.split(",")[0]))}})]),n("span",[s._v("冠亚和值"),n("span",{domProps:{innerHTML:s._s(s.contrast2(s.pk10hz(t.opencode.split(","))))}}),n("span",{domProps:{innerHTML:s._s(s.orArr(s.pk10hz(t.opencode.split(","))))}})])])])])}))],2)]):n("v-loading")},r=[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("tr",[n("td",[s._v("期号")]),n("td",[s._v("开奖号码")])])}],e=(n("13d5"),n("e25e"),n("ac1f"),n("1276"),n("5530")),a=n("c114"),l=n("9536"),i=n.n(l),c=n("2f62"),p={name:"index1",data:function(){return{scss:i.a,isColor:a["f"],sxSort:a["o"],wuxing:a["t"],touwei:a["q"],beast:a["b"],weiNum:a["s"],pk10:a["l"],style:"display: flex;\n        width: 28px;\n        height: 18px;\n        margin: 0px 2px;\n        justify-content: center;\n    align-items: center;\n        border-radius: 2px;"}},computed:Object(e["a"])({},Object(c["d"])({list:function(s){return s.chart&&s.chart.data}})),methods:{hsContrast:function(s){if("49"===s)return'<span style="color:'+this.scss.fontColor+'">和</span>';var t=parseInt(s.split("").reduce((function(s,t){return parseInt(s)+parseInt(t)})));return t<=6?'<span style="color:'+this.scss.fontColor2+'">小</span>':t>=7?'<span style="color:'+this.scss.fontColor+'">大</span>':void 0},pk10hz:function(s){return parseInt(s[0])+parseInt(s[1])},contrast:function(s){var t=parseInt(s);return t<=6?'<span style="color:'+this.scss.fontColor2+'">小</span>':'<span style="color:'+this.scss.fontColor+'">大</span>'},contrast2:function(s){var t=parseInt(s);return t<=11?'<span style="color:'+this.scss.fontColor2+'">小</span>':t>11?'<span style="color:'+this.scss.fontColor+'">大</span>':void 0},addArr:function(s){return s.reduce((function(s,t){return parseInt(s)+parseInt(t)}))},orArr:function(s){return s%2===0?'<span style="color:'+this.scss.fontColor2+'">双</span>':'<span style="color:'+this.scss.fontColor+'">单</span>'},orArr2:function(s){return s%2===0?'<span style="color:'+this.scss.fontColor2+'">总双</span>':'<span style="color:'+this.scss.fontColor+'">总单</span>'},sxpan:function(s){for(var t=0,n=0,o=0;o<s.length;o++)parseInt(s[o])<=40?t++:n++;return t>n?"上":"下"},ball:function(s){for(var t="",n=0;n<s.length;n++)"red"===this.isColor(s[n])?t+='<div><span style="background: #B62929;'+this.style+'">'+s[n]+'</span><p style="color: '+i.a.fontColor+'">'+this.sxSort(s[n])+"</p></div>":"blue"===this.isColor(s[n])?t+='<div><span style="background: #0679DF;'+this.style+'">'+s[n]+'</span><p style="color: '+i.a.fontColor+'">'+this.sxSort(s[n])+"</p></div>":t+='<div><span style="background: #1E8615;'+this.style+'">'+s[n]+'</span><p style="color: '+i.a.fontColor+'"> '+this.sxSort(s[n])+"</p></div>";return t},ballColor:function(s){return"green"===s?'<span style="color: #1E8615">绿波</span>':"red"===s?'<span style="color:'+this.scss.fontColor+'">红波</span>':"blue"===s?'<span style="color:'+this.scss.blue+'">蓝波</span>':void 0}},mounted:function(){}},u=p,d=(n("70fb"),n("2877")),f=Object(d["a"])(u,o,r,!1,null,"e71eca8c",null);t["default"]=f.exports}}]);