(window["webpackJsonppackages_hzero_front_hpfm_name_"]=window["webpackJsonppackages_hzero_front_hpfm_name_"]||[]).push([[472,414,416,431,445],{478:function(t,n,e){"use strict";e.r(n);var r=e(131),a=e(2),o=e.n(a),c=e(570),u=e.n(c),p=e(504),i=e(522),s=e(134),f=e(648),x=e(631);function d(t,n){return l.apply(this,arguments)}function l(){return l=Object(s["a"])(o.a.mark(function t(n,e){var r;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=Object(p["C"])(e),t.abrupt("return",Object(f["a"])("".concat(x["k"],"/v1/").concat(n,"/ui-pages"),{query:r,method:"GET"}));case 2:case"end":return t.stop()}},t)})),l.apply(this,arguments)}function h(t,n){return w.apply(this,arguments)}function w(){return w=Object(s["a"])(o.a.mark(function t(n,e){return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(f["a"])("".concat(x["k"],"/v1/").concat(n,"/ui-pages"),{body:e,method:"POST"}));case 1:case"end":return t.stop()}},t)})),w.apply(this,arguments)}function b(t,n){return y.apply(this,arguments)}function y(){return y=Object(s["a"])(o.a.mark(function t(n,e){return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(f["a"])("".concat(x["k"],"/v1/").concat(n,"/ui-pages"),{body:e,method:"PUT"}));case 1:case"end":return t.stop()}},t)})),y.apply(this,arguments)}function v(t,n){return g.apply(this,arguments)}function g(){return g=Object(s["a"])(o.a.mark(function t(n,e){return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(f["a"])("".concat(x["k"],"/v1/").concat(n,"/ui-pages/").concat(e),{method:"GET"}));case 1:case"end":return t.stop()}},t)})),g.apply(this,arguments)}function m(t,n){return O.apply(this,arguments)}function O(){return O=Object(s["a"])(o.a.mark(function t(n,e){return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(f["a"])("".concat(x["k"],"/v1/").concat(n,"/ui-pages/detail"),{method:"PUT",body:e}));case 1:case"end":return t.stop()}},t)})),O.apply(this,arguments)}n["default"]={namespace:"uiPageOrg",state:{list:{},pagination:!1,config:{},detailIdp:{}},effects:{fetchPageList:o.a.mark(function t(n,e){var r,a,c,u,i,s;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.payload,a=e.put,c=e.call,u=r.organizationId,i=r.params,t.t0=p["u"],t.next=6,c(d,u,i);case 6:if(t.t1=t.sent,s=(0,t.t0)(t.t1),!s){t.next=11;break}return t.next=11,a({type:"updateState",payload:{list:s,pagination:Object(p["c"])(s)}});case 11:case"end":return t.stop()}},t)}),listCreateOne:o.a.mark(function t(n,e){var r,a,c,u;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.payload,a=e.call,c=r.organizationId,u=r.data,t.t0=p["u"],t.next=6,a(h,c,u);case 6:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 8:case"end":return t.stop()}},t)}),listUpdateOne:o.a.mark(function t(n,e){var r,a,c,u;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.payload,a=e.call,c=r.organizationId,u=r.data,t.t0=p["u"],t.next=6,a(b,c,u);case 6:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 8:case"end":return t.stop()}},t)}),fetchDetail:o.a.mark(function t(n,e){var r,a,c,s,f,x,d,l,h,w;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.payload,a=e.put,c=e.call,s=r.organizationId,f=r.pageCode,t.next=5,c(v,s,f);case 5:return x=t.sent,d=Object(p["u"])(x),t.next=9,c(i["g"],"HPFM.UI.COMPONENT");case 9:if(l=t.sent,h=Object(p["u"])(l),!d){t.next=14;break}return t.next=14,a({type:"updateState",payload:{config:d}});case 14:if(!h){t.next=19;break}return w={},u()(h,function(t){w[t.value]=t.meaning}),t.next=19,a({type:"updateDetailIdp",payload:{componentType:h,componentTypeMeaning:w}});case 19:return t.abrupt("return",d);case 20:case"end":return t.stop()}},t)}),detailUpdate:o.a.mark(function t(n,e){var r,a,c,u,i;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.payload,a=e.call,c=r.organizationId,u=r.config,t.t0=p["u"],t.next=6,a(m,c,u);case 6:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.abrupt("return",i);case 9:case"end":return t.stop()}},t)})},reducers:{updateState:function(t,n){var e=n.payload;return Object(r["a"])({},t,e)},updateDetailIdp:function(t,n){var e=n.payload;return Object(r["a"])({},t,{detailIdp:Object(r["a"])({},t.detailIdp,e)})}}}},498:function(t,n,e){t.exports=e(0)(198)},502:function(t,n,e){t.exports=e(0)(1169)},507:function(t,n,e){t.exports=e(0)(116)},512:function(t,n,e){t.exports=e(0)(82)},513:function(t,n,e){t.exports=e(0)(1168)},514:function(t,n,e){t.exports=e(0)(37)},530:function(t,n,e){t.exports=e(0)(829)},535:function(t,n,e){t.exports=e(0)(1852)},536:function(t,n,e){t.exports=e(0)(34)},537:function(t,n,e){t.exports=e(0)(1155)},538:function(t,n,e){t.exports=e(0)(130)},539:function(t,n,e){t.exports=e(0)(1167)},540:function(t,n,e){t.exports=e(0)(604)},541:function(t,n,e){t.exports=e(0)(274)},542:function(t,n,e){t.exports=e(0)(156)},547:function(t,n,e){t.exports=e(0)(182)},553:function(t,n,e){t.exports=e(425)(2648)},556:function(t,n,e){t.exports=e(0)(2130)},574:function(t,n,e){t.exports=e(0)(209)},577:function(t,n,e){t.exports=e(0)(661)},578:function(t,n,e){t.exports=e(425)(1367)},579:function(t,n,e){t.exports=e(0)(873)},580:function(t,n,e){t.exports=e(0)(2092)},581:function(t,n,e){t.exports=e(0)(235)},582:function(t,n,e){t.exports=e(0)(582)},584:function(t,n,e){t.exports=e(0)(170)},585:function(t,n,e){t.exports=e(0)(255)},586:function(t,n,e){t.exports=e(0)(1960)},587:function(t,n,e){t.exports=e(0)(298)},590:function(t,n,e){t.exports=e(0)(849)},591:function(t,n,e){t.exports=e(0)(328)},592:function(t,n,e){t.exports=e(0)(270)},593:function(t,n,e){t.exports=e(0)(324)},594:function(t,n,e){t.exports=e(0)(386)},595:function(t,n,e){t.exports=e(0)(387)},596:function(t,n,e){t.exports=e(0)(385)},601:function(t,n,e){t.exports=e(0)(484)},602:function(t,n,e){t.exports=e(0)(868)},604:function(t,n,e){t.exports=e(0)(1858)},606:function(t,n,e){t.exports=e(0)(241)},607:function(t,n,e){t.exports=e(0)(1132)},608:function(t,n,e){t.exports=e(0)(325)},609:function(t,n,e){t.exports=e(425)(2662)},610:function(t,n,e){t.exports=e(0)(151)},611:function(t,n,e){t.exports=e(0)(127)},612:function(t,n,e){t.exports=e(0)(2129)},613:function(t,n,e){t.exports=e(0)(580)},614:function(t,n,e){t.exports=e(0)(128)},615:function(t,n,e){t.exports=e(0)(108)},616:function(t,n,e){t.exports=e(0)(472)}}]);