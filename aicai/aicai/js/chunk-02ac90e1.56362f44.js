(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02ac90e1"],{"2aee":function(e,t,n){},"59b0":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("topBar",{attrs:{title:"提现记录"}}),n("list")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-pull-refresh",{on:{refresh:e.onRefresh},model:{value:e.refreshing,callback:function(t){e.refreshing=t},expression:"refreshing"}},[n("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[e.list?n("van-cell-group",{style:{width:"94%",margin:"4% auto"}},e._l(e.list,(function(t,s){return n("van-cell",{key:s,class:{act:!0}},[n("div",[n("p",[e._v("订单号:"+e._s(t.sn))]),n("h1",{style:{color:t.status&&e.isStatus(parseInt(t.status))&&e.isStatus(parseInt(t.status))[1]}},[e._v(e._s(t.status&&e.isStatus(parseInt(t.status))&&e.isStatus(parseInt(t.status))[0]))])]),n("div",[n("p",[e._v("提现方式:"+e._s(e.isType(parseInt(t.type))))]),n("a",[e._v(e._s(e.filterTime(parseInt(t.created_at))))])])])})),1):e._e()],1)],1)},r=[],o=(n("4795"),n("96cf"),n("1da1")),u=n("c114"),l=n("a474"),c={name:"index",data:function(){return{list:[],loading:!1,finished:!1,refreshing:!1,pageNum:1,filterTime:u["d"]}},methods:{isStatus:function(e){return 0===e?["待审核","#2B47FC"]:1===e?["通过","#12B825"]:2===e?["拒绝","#E0D314"]:3===e?["取消","#FA393D"]:void 0},isType:function(e){return 1===e?"微信":2===e?"支付宝":3===e?"平台":4===e?"银行卡":void 0},onLoad:function(){var e=this;setTimeout(Object(o["a"])(regeneratorRuntime.mark((function t(){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.refreshing&&(e.list=[],e.refreshing=!1),t.next=3,l["a"].txhis({page:e.pageNum});case 3:if(n=t.sent,200===n.code){for(s=0;s<n.data.length;s++)e.list.push(n.data[s]);e.loading=!1,n.data.length<10&&(e.finished=!0)}case 5:case"end":return t.stop()}}),t)}))),1e3)},onRefresh:function(){this.finished=!1,this.pageNum=1,this.loading=!0,this.onLoad()}},created:function(){}},f=c,d=(n("93f1"),n("2877")),h=Object(d["a"])(f,i,r,!1,null,"3aa63da7",null),p=h.exports,g={name:"index",components:{list:p}},v=g,m=Object(d["a"])(v,s,a,!1,null,"74f4facc",null);t["default"]=m.exports},"93f1":function(e,t,n){"use strict";var s=n("2aee"),a=n.n(s);a.a}}]);