(window["webpackJsonppackages_hzero_front_hpfm_name_"]=window["webpackJsonppackages_hzero_front_hpfm_name_"]||[]).push([[468,414,416,431,445],{486:function(t,n,e){"use strict";e.r(n);var r=e(131),a=e(2),c=e.n(a),o=e(504),u=e(522),p=e(509),s=e(134),i=e(648),f=e(631);function x(t){return y.apply(this,arguments)}function y(){return y=Object(s["a"])(c.a.mark(function t(n){var e,r;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=n.organizationId,r=Object(p["a"])(n,["organizationId"]),t.abrupt("return",Object(i["a"])("".concat(f["k"],"/v1/").concat(e,"/companies"),{method:"GET",query:r}));case 2:case"end":return t.stop()}},t)})),y.apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return d=Object(s["a"])(c.a.mark(function t(n){var e;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=Object(o["m"])(),t.abrupt("return",Object(i["a"])("".concat(f["k"],"/v1/").concat(e,"/companies/enable"),{method:"POST",body:n.body}));case 2:case"end":return t.stop()}},t)})),d.apply(this,arguments)}function h(t){return b.apply(this,arguments)}function b(){return b=Object(s["a"])(c.a.mark(function t(n){var e;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=Object(o["m"])(),t.abrupt("return",Object(i["a"])("".concat(f["k"],"/v1/").concat(e,"/companies/disable"),{method:"POST",body:n.body}));case 2:case"end":return t.stop()}},t)})),b.apply(this,arguments)}function m(t){return w.apply(this,arguments)}function w(){return w=Object(s["a"])(c.a.mark(function t(n){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i["a"])("".concat(f["k"],"/v1/").concat(n.organizationId,"/companies/").concat(n.companyId),{method:"GET"}));case 1:case"end":return t.stop()}},t)})),w.apply(this,arguments)}function v(t){return O.apply(this,arguments)}function O(){return O=Object(s["a"])(c.a.mark(function t(n){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i["a"])("".concat(f["k"],"/v1/").concat(n.tenantId,"/companies"),{method:"POST",body:n}));case 1:case"end":return t.stop()}},t)})),O.apply(this,arguments)}function j(t){return k.apply(this,arguments)}function k(){return k=Object(s["a"])(c.a.mark(function t(n){var e;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=Object(o["m"])(),t.abrupt("return",Object(i["a"])("".concat(f["k"],"/v1/").concat(e,"/countries/").concat(n,"/regions"),{method:"GET",query:{enabledFlag:1}}));case 2:case"end":return t.stop()}},t)})),k.apply(this,arguments)}function T(){return _.apply(this,arguments)}function _(){return _=Object(s["a"])(c.a.mark(function t(){var n;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(o["m"])(),t.abrupt("return",Object(i["a"])("".concat(f["k"],"/v1").concat(Object(o["A"])()?"/".concat(n):"","/countries/all"),{method:"GET",query:{enabledFlag:1}}));case 2:case"end":return t.stop()}},t)})),_.apply(this,arguments)}n["default"]={namespace:"company",state:{countryList:[],companyType:[],taxpayerType:[],companyList:[],companyDetail:{}},effects:{init:c.a.mark(function t(n,e){var r,a,o,p,s;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.payload,a=e.call,o=e.put,t.next=4,a(u["j"],{companyType:"HPFM.COMPANY_TYPE",taxpayerType:"HPFM.TAXPAYER_TYPE"});case 4:return p=t.sent,t.next=7,a(T,r);case 7:return s=t.sent,t.next=10,o({type:"updateState",payload:{companyType:p.companyType||[],taxpayerType:p.taxpayerType||[],countryList:s}});case 10:case"end":return t.stop()}},t)}),queryProvinceCity:c.a.mark(function t(n,e){var r,a,u,p,s;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.payload,a=e.call,u=e.put,t.next=4,a(j,r);case 4:if(p=t.sent,s=Object(o["u"])(p),!s){t.next=9;break}return t.next=9,u({type:"updateState",payload:{cityList:p}});case 9:case"end":return t.stop()}},t)}),fetchCompany:c.a.mark(function t(n,e){var r,a,u,p,s;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.payload,a=e.call,u=e.put,t.next=4,a(x,r);case 4:if(p=t.sent,s=Object(o["u"])(p),!s){t.next=9;break}return t.next=9,u({type:"updateState",payload:{companyList:s}});case 9:case"end":return t.stop()}},t)}),enableCompany:c.a.mark(function t(n,e){var r,a,u;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.payload,a=e.call,t.next=4,a(l,r);case 4:return u=t.sent,t.abrupt("return",Object(o["u"])(u));case 6:case"end":return t.stop()}},t)}),disableCompany:c.a.mark(function t(n,e){var r,a,u;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.payload,a=e.call,t.next=4,a(h,r);case 4:return u=t.sent,t.abrupt("return",Object(o["u"])(u));case 6:case"end":return t.stop()}},t)}),queryCompany:c.a.mark(function t(n,e){var r,a,u,p,s;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.payload,a=e.call,u=e.put,t.next=4,a(m,r);case 4:if(p=t.sent,s=Object(o["u"])(p),!s){t.next=9;break}return t.next=9,u({type:"updateState",payload:{companyDetail:s}});case 9:return t.abrupt("return",s);case 10:case"end":return t.stop()}},t)}),createCompany:c.a.mark(function t(n,e){var r,a,u;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.payload,a=e.call,t.next=4,a(v,r);case 4:return u=t.sent,t.abrupt("return",Object(o["u"])(u));case 6:case"end":return t.stop()}},t)})},reducers:{updateState:function(t,n){var e=n.payload;return Object(r["a"])({},t,e)}}}},498:function(t,n,e){t.exports=e(0)(198)},502:function(t,n,e){t.exports=e(0)(1169)},507:function(t,n,e){t.exports=e(0)(116)},512:function(t,n,e){t.exports=e(0)(82)},513:function(t,n,e){t.exports=e(0)(1168)},514:function(t,n,e){t.exports=e(0)(37)},530:function(t,n,e){t.exports=e(0)(829)},535:function(t,n,e){t.exports=e(0)(1852)},536:function(t,n,e){t.exports=e(0)(34)},537:function(t,n,e){t.exports=e(0)(1155)},538:function(t,n,e){t.exports=e(0)(130)},539:function(t,n,e){t.exports=e(0)(1167)},540:function(t,n,e){t.exports=e(0)(604)},541:function(t,n,e){t.exports=e(0)(274)},542:function(t,n,e){t.exports=e(0)(156)},547:function(t,n,e){t.exports=e(0)(182)},553:function(t,n,e){t.exports=e(425)(2648)},556:function(t,n,e){t.exports=e(0)(2130)},574:function(t,n,e){t.exports=e(0)(209)},577:function(t,n,e){t.exports=e(0)(661)},578:function(t,n,e){t.exports=e(425)(1367)},579:function(t,n,e){t.exports=e(0)(873)},580:function(t,n,e){t.exports=e(0)(2092)},581:function(t,n,e){t.exports=e(0)(235)},582:function(t,n,e){t.exports=e(0)(582)},584:function(t,n,e){t.exports=e(0)(170)},585:function(t,n,e){t.exports=e(0)(255)},586:function(t,n,e){t.exports=e(0)(1960)},587:function(t,n,e){t.exports=e(0)(298)},590:function(t,n,e){t.exports=e(0)(849)},591:function(t,n,e){t.exports=e(0)(328)},592:function(t,n,e){t.exports=e(0)(270)},593:function(t,n,e){t.exports=e(0)(324)},594:function(t,n,e){t.exports=e(0)(386)},595:function(t,n,e){t.exports=e(0)(387)},596:function(t,n,e){t.exports=e(0)(385)},601:function(t,n,e){t.exports=e(0)(484)},602:function(t,n,e){t.exports=e(0)(868)},604:function(t,n,e){t.exports=e(0)(1858)},606:function(t,n,e){t.exports=e(0)(241)},607:function(t,n,e){t.exports=e(0)(1132)},608:function(t,n,e){t.exports=e(0)(325)},609:function(t,n,e){t.exports=e(425)(2662)},610:function(t,n,e){t.exports=e(0)(151)},611:function(t,n,e){t.exports=e(0)(127)},612:function(t,n,e){t.exports=e(0)(2129)},613:function(t,n,e){t.exports=e(0)(580)},614:function(t,n,e){t.exports=e(0)(128)},615:function(t,n,e){t.exports=e(0)(108)},616:function(t,n,e){t.exports=e(0)(472)}}]);