(window["webpackJsonppackages_hzero_front_hcnf_name_"]=window["webpackJsonppackages_hzero_front_hcnf_name_"]||[]).push([[31],Array(65).concat([function(t,e,n){"use strict";n.r(e);var r=n(9),c=n(2),a=n.n(c),o=n(77),u=n(10),i=n(171),s=n(120),p=Object(o["g"])();function f(){return Object(o["p"])()?"".concat(p,"/routes"):"routes"}function d(t){return h.apply(this,arguments)}function h(){return h=Object(u["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i["a"])("".concat(s["d"],"/v1/").concat(f()),{method:"GET",query:e}));case 1:case"end":return t.stop()}},t)})),h.apply(this,arguments)}function l(t){return x.apply(this,arguments)}function x(){return x=Object(u["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i["a"])("".concat(s["d"],"/v1/").concat(f(),"/").concat(e.serviceRouteId),{method:"GET"}));case 1:case"end":return t.stop()}},t)})),x.apply(this,arguments)}function b(t){return v.apply(this,arguments)}function v(){return v=Object(u["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i["a"])("".concat(s["d"],"/v1/").concat(f()),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t)})),v.apply(this,arguments)}function w(t){return O.apply(this,arguments)}function O(){return O=Object(u["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i["a"])("".concat(s["d"],"/v1/").concat(f()),{method:"PUT",body:e}));case 1:case"end":return t.stop()}},t)})),O.apply(this,arguments)}function m(t){return j.apply(this,arguments)}function j(){return j=Object(u["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i["a"])("".concat(s["d"],"/v1/").concat(f()),{method:"DELETE",body:e}));case 1:case"end":return t.stop()}},t)})),j.apply(this,arguments)}function y(){return k.apply(this,arguments)}function k(){return k=Object(u["a"])(a.a.mark(function t(){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i["a"])("".concat(s["d"],"/v1/monitor/refresh-route"),{method:"POST"}));case 1:case"end":return t.stop()}},t)})),k.apply(this,arguments)}e["default"]={namespace:"hcnfServiceRoute",state:{serviceRouteList:[],serviceRouteDetail:{},pagination:{}},effects:{fetchServiceRouteList:a.a.mark(function t(e,n){var r,c,u,i,s;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,c=n.call,u=n.put,t.next=4,c(d,Object(o["q"])(r));case 4:if(i=t.sent,s=Object(o["k"])(i),!s){t.next=9;break}return t.next=9,u({type:"updateState",payload:{serviceRouteList:s.content,pagination:Object(o["a"])(s)}});case 9:return t.abrupt("return",s);case 10:case"end":return t.stop()}},t)}),fetchServiceRouteDetail:a.a.mark(function t(e,n){var r,c,u,i,s;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,c=n.call,u=n.put,t.next=4,c(l,r);case 4:if(i=t.sent,s=Object(o["k"])(i),!s){t.next=9;break}return t.next=9,u({type:"updateState",payload:{serviceRouteDetail:s}});case 9:return t.abrupt("return",s);case 10:case"end":return t.stop()}},t)}),createServiceRoute:a.a.mark(function t(e,n){var r,c,u;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,c=n.call,t.next=4,c(b,r);case 4:return u=t.sent,t.abrupt("return",Object(o["k"])(u));case 6:case"end":return t.stop()}},t)}),updateServiceRoute:a.a.mark(function t(e,n){var r,c,u;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,c=n.call,t.next=4,c(w,r);case 4:return u=t.sent,t.abrupt("return",Object(o["k"])(u));case 6:case"end":return t.stop()}},t)}),refreshServiceRoute:a.a.mark(function t(e,n){var r,c;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.call,t.next=3,r(y);case 3:return c=t.sent,t.abrupt("return",Object(o["k"])(c));case 5:case"end":return t.stop()}},t)}),deleteServiceRoute:a.a.mark(function t(e,n){var r,c,u;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,c=n.call,t.next=4,c(m,r);case 4:return u=t.sent,t.abrupt("return",Object(o["k"])(u));case 6:case"end":return t.stop()}},t)})},reducers:{updateState:function(t,e){var n=e.payload;return Object(r["a"])({},t,n)}}}},,,,,,,,function(t,e,n){t.exports=n(0)(198)},,,function(t,e,n){t.exports=n(0)(1169)},,,,,,function(t,e,n){t.exports=n(0)(116)},function(t,e,n){t.exports=n(0)(82)},,function(t,e,n){t.exports=n(0)(1168)},function(t,e,n){t.exports=n(0)(37)},,,function(t,e,n){t.exports=n(0)(1852)},,,,,,function(t,e,n){t.exports=n(0)(1155)},function(t,e,n){t.exports=n(0)(829)},,function(t,e,n){t.exports=n(0)(34)},,function(t,e,n){t.exports=n(61)(2648)},function(t,e,n){t.exports=n(0)(130)},,function(t,e,n){t.exports=n(0)(1167)},,,,function(t,e,n){t.exports=n(0)(274)},function(t,e,n){t.exports=n(0)(182)},function(t,e,n){t.exports=n(0)(604)},,,,,,,,,function(t,e,n){t.exports=n(0)(2092)},function(t,e,n){t.exports=n(0)(325)},,function(t,e,n){t.exports=n(61)(2662)},function(t,e,n){t.exports=n(0)(241)},function(t,e,n){t.exports=n(0)(151)},function(t,e,n){t.exports=n(61)(1367)},function(t,e,n){t.exports=n(0)(1858)},,,,,,,,,,,,,,,,function(t,e,n){t.exports=n(0)(127)},function(t,e,n){t.exports=n(0)(484)},function(t,e,n){t.exports=n(0)(2129)},function(t,e,n){t.exports=n(0)(235)},function(t,e,n){t.exports=n(0)(209)},function(t,e,n){t.exports=n(0)(849)},function(t,e,n){t.exports=n(0)(328)},function(t,e,n){t.exports=n(0)(270)},function(t,e,n){t.exports=n(0)(170)},function(t,e,n){t.exports=n(0)(324)},function(t,e,n){t.exports=n(0)(386)},function(t,e,n){t.exports=n(0)(387)},function(t,e,n){t.exports=n(0)(868)},function(t,e,n){t.exports=n(0)(385)},function(t,e,n){t.exports=n(0)(156)},function(t,e,n){t.exports=n(0)(255)},function(t,e,n){t.exports=n(0)(1960)},function(t,e,n){t.exports=n(0)(298)},function(t,e,n){t.exports=n(0)(661)},function(t,e,n){t.exports=n(0)(1132)},function(t,e,n){t.exports=n(0)(580)},function(t,e,n){t.exports=n(0)(582)},function(t,e,n){t.exports=n(0)(128)},function(t,e,n){t.exports=n(0)(108)},function(t,e,n){t.exports=n(0)(472)},function(t,e,n){t.exports=n(0)(873)},function(t,e,n){t.exports=n(0)(2130)},,,,function(t,e,n){"use strict";n.d(e,"a",function(){return w});var r=n(2),c=n.n(r),a=n(9),o=n(10),u=(n(182),n(95)),i=n(125),s=n.n(i),p=n(89),f=n(72),d=n(120),h=n(77);function l(t){if(t.status>=200&&t.status<300)return t;var e=t.statusText,n=new Error(e);throw n.name=t.status,n.response=t,n}function x(t){return b.apply(this,arguments)}function b(){return b=Object(o["a"])(c.a.mark(function t(e){var n;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(501!==e.name){t.next=14;break}return t.prev=1,t.next=4,e.response.json();case 4:n=t.sent,dvaApp._store.dispatch({type:"error/updateState",payload:{normal501:n}}),dvaApp._store.dispatch(p["routerRedux"].push({pathname:"/exception/501"})),t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](1),e;case 12:t.next=15;break;case 14:throw e;case 15:case"end":return t.stop()}},t,null,[[1,9]])})),b.apply(this,arguments)}u["default"].config({placement:"bottomRight"});var v={Pragma:"no-cache","Cache-Control":"no-cache"};function w(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={credentials:"include",headers:v},c=n.beforeCatch,o=t.startsWith("/api")||t.startsWith("http")?t:"".concat(d["a"]).concat(t),i=Object(a["a"])({},r,e);if("POST"!==i.method&&"PUT"!==i.method&&"DELETE"!==i.method&&"PATCH"!==i.method||(i.body instanceof FormData?i.headers=Object(a["a"])({Accept:"application/json"},i.headers):(i.headers=Object(a["a"])({Accept:"application/json","Content-Type":"application/json; charset=utf-8"},i.headers),i.body=JSON.stringify(i.body))),i.query){var b=i.query;"GET"===i.method&&(b=Object(h["b"])(i.query)),o=Object(h["c"])(o,b)}var O=Object(h["d"])();O&&(i.headers=Object(a["a"])({},i.headers,{Authorization:"bearer ".concat(O)}));var m=s()(o,i).then(l).then(function(t){return 204===t.status?{}:"blob"===i.responseType?t.blob():"text"===i.responseType?t.text():t.json()});return c&&(m=m.catch(c)),m=m.catch(x).catch(function(t){var e=t.name,n=Object(h["m"])("isErrorFlag");if(n||Object(h["t"])("isErrorFlag",!1),401===e){var r=encodeURIComponent(window.location.toString());return O?void w("".concat(d["h"],"/public/token/kickoff"),{method:"POST",query:{access_token:O}}).then(function(t){1===t.kickoff?(dvaApp._store.dispatch(p["routerRedux"].push({pathname:"/public/kickoff"})),Object(h["t"])("redirectUrl",r),Object(h["t"])("isErrorFlag",!1)):(dvaApp._store.dispatch(p["routerRedux"].push({pathname:"/public/unauthorized"})),Object(h["t"])("isErrorFlag",!0),Object(h["t"])("redirectUrl",r))}):(Object(h["r"])(),Object(h["s"])(),-1!==o.indexOf(d["b"])?void(d["k"].includes("?")?(window.location.href="".concat(d["k"],"&redirect_uri=").concat(r),Object(h["t"])("isErrorFlag",!1),Object(h["t"])("redirectUrl",r)):(window.location.href="".concat(d["k"],"?redirect_uri=").concat(r),h["t"].apply("isErrorFlag",!1),Object(h["t"])("redirectUrl",r))):void(n||(dvaApp._store.dispatch(p["routerRedux"].push({pathname:"/public/unauthorized"})),Object(h["t"])("isErrorFlag",!0),Object(h["t"])("redirectUrl",r))))}if(-1!==o.indexOf(d["b"]))return t;"TypeError"!==e?u["default"].error({message:"".concat(e),description:t.message}):u["default"].error({message:f["a"].get("hzero.common.notification.network.typeError").d("\u7f51\u7edc\u8bf7\u6c42\u5f02\u5e38"),description:f["a"].get("hzero.common.notification.typeError.description").d("\u8bf7\u7a0d\u540e\u91cd\u8bd5")})}),m}}])]);