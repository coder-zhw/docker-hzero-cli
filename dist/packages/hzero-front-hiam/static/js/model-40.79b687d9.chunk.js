(window["webpackJsonppackages_hzero_front_hiam_name_"]=window["webpackJsonppackages_hzero_front_hiam_name_"]||[]).push([[266,232,233,234,235,236,243,247,250,251,252,253,254,255,256,257,258,259,260,265,269,270,271,276,279,280,281,282,283],{264:function(t,e,n){"use strict";n.r(e);var o=n(58),r=n(2),c=n.n(r),a=n(291),i=n(666);e["default"]={namespace:"secGrpAuthorityPuragent",state:{list:[],pagination:{}},effects:{fetchAuthorityPuragent:c.a.mark(function t(e,n){var o,r,s,p,u;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=e.payload,r=n.call,s=n.put,t.next=4,r(i["K"],o);case 4:if(p=t.sent,u=Object(a["u"])(p),!u){t.next=9;break}return t.next=9,s({type:"updateState",payload:{list:u.content,pagination:Object(a["c"])(u)}});case 9:case"end":return t.stop()}},t)})},reducers:{updateState:function(t,e){var n=e.payload;return Object(o["a"])({},t,n)}}}},293:function(t,e,n){"use strict";n.d(e,"a",function(){return j});var o=n(2),r=n.n(o),c=n(58),a=n(57),i=(n(338),n(311)),s=n(325),p=n.n(s),u=n(317),f=n(302),d=n(292),x=n(291);function h(t){if(t.status>=200&&t.status<300)return t;var e=t.statusText,n=new Error(e);throw n.name=t.status,n.response=t,n}function l(t){return b.apply(this,arguments)}function b(){return b=Object(a["a"])(r.a.mark(function t(e){var n;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(501!==e.name){t.next=14;break}return t.prev=1,t.next=4,e.response.json();case 4:n=t.sent,dvaApp._store.dispatch({type:"error/updateState",payload:{normal501:n}}),dvaApp._store.dispatch(u["routerRedux"].push({pathname:"/exception/501"})),t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](1),e;case 12:t.next=15;break;case 14:throw e;case 15:case"end":return t.stop()}},t,null,[[1,9]])})),b.apply(this,arguments)}i["default"].config({placement:"bottomRight"});var m={Pragma:"no-cache","Cache-Control":"no-cache"};function j(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o={credentials:"include",headers:m},r=n.beforeCatch,a=t.startsWith("/api")||t.startsWith("http")?t:"".concat(d["a"]).concat(t),s=Object(c["a"])({},o,e);if("POST"!==s.method&&"PUT"!==s.method&&"DELETE"!==s.method&&"PATCH"!==s.method||(s.body instanceof FormData?s.headers=Object(c["a"])({Accept:"application/json"},s.headers):(s.headers=Object(c["a"])({Accept:"application/json","Content-Type":"application/json; charset=utf-8"},s.headers),s.body=JSON.stringify(s.body))),s.query){var b=s.query;"GET"===s.method&&(b=Object(x["g"])(s.query)),a=Object(x["h"])(a,b)}var O=Object(x["i"])();O&&(s.headers=Object(c["a"])({},s.headers,{Authorization:"bearer ".concat(O)}));var v=p()(a,s).then(h).then(function(t){return 204===t.status?{}:"blob"===s.responseType?t.blob():"text"===s.responseType?t.text():t.json()});return r&&(v=v.catch(r)),v=v.catch(l).catch(function(t){var e=t.name,n=Object(x["w"])("isErrorFlag");if(n||Object(x["F"])("isErrorFlag",!1),401===e){var o=encodeURIComponent(window.location.toString());return O?void j("".concat(d["l"],"/public/token/kickoff"),{method:"POST",query:{access_token:O}}).then(function(t){1===t.kickoff?(dvaApp._store.dispatch(u["routerRedux"].push({pathname:"/public/kickoff"})),Object(x["F"])("redirectUrl",o),Object(x["F"])("isErrorFlag",!1)):(dvaApp._store.dispatch(u["routerRedux"].push({pathname:"/public/unauthorized"})),Object(x["F"])("isErrorFlag",!0),Object(x["F"])("redirectUrl",o))}):(Object(x["D"])(),Object(x["E"])(),-1!==a.indexOf(d["c"])?void(d["o"].includes("?")?(window.location.href="".concat(d["o"],"&redirect_uri=").concat(o),Object(x["F"])("isErrorFlag",!1),Object(x["F"])("redirectUrl",o)):(window.location.href="".concat(d["o"],"?redirect_uri=").concat(o),x["F"].apply("isErrorFlag",!1),Object(x["F"])("redirectUrl",o))):void(n||(dvaApp._store.dispatch(u["routerRedux"].push({pathname:"/public/unauthorized"})),Object(x["F"])("isErrorFlag",!0),Object(x["F"])("redirectUrl",o))))}if(-1!==a.indexOf(d["c"]))return t;"TypeError"!==e?i["default"].error({message:"".concat(e),description:t.message}):i["default"].error({message:f["a"].get("hzero.common.notification.network.typeError").d("\u7f51\u7edc\u8bf7\u6c42\u5f02\u5e38"),description:f["a"].get("hzero.common.notification.typeError.description").d("\u8bf7\u7a0d\u540e\u91cd\u8bd5")})}),v}},294:function(t,e,n){t.exports=n(0)(198)},303:function(t,e,n){t.exports=n(0)(1169)},311:function(t,e,n){t.exports=n(0)(1155)},315:function(t,e,n){t.exports=n(0)(116)},317:function(t,e,n){t.exports=n(0)(1852)},318:function(t,e,n){t.exports=n(0)(1168)},319:function(t,e,n){t.exports=n(0)(37)},320:function(t,e,n){t.exports=n(0)(82)},325:function(t,e,n){t.exports=n(0)(1858)},334:function(t,e,n){t.exports=n(0)(1167)},335:function(t,e,n){t.exports=n(0)(182)},336:function(t,e,n){t.exports=n(0)(274)},337:function(t,e,n){t.exports=n(237)(2648)},339:function(t,e,n){t.exports=n(0)(34)},340:function(t,e,n){t.exports=n(0)(130)},341:function(t,e,n){t.exports=n(0)(829)},342:function(t,e,n){t.exports=n(0)(604)},345:function(t,e,n){t.exports=n(0)(156)},346:function(t,e,n){t.exports=n(0)(151)},347:function(t,e,n){t.exports=n(0)(484)},352:function(t,e,n){t.exports=n(0)(2092)},356:function(t,e,n){t.exports=n(0)(661)},358:function(t,e,n){t.exports=n(0)(868)},359:function(t,e,n){t.exports=n(0)(2130)},360:function(t,e,n){t.exports=n(0)(325)},361:function(t,e,n){t.exports=n(0)(241)},362:function(t,e,n){t.exports=n(0)(385)},363:function(t,e,n){t.exports=n(0)(1132)},364:function(t,e,n){t.exports=n(0)(255)},365:function(t,e,n){t.exports=n(0)(1960)},366:function(t,e,n){t.exports=n(0)(298)},367:function(t,e,n){t.exports=n(0)(849)},368:function(t,e,n){t.exports=n(0)(328)},369:function(t,e,n){t.exports=n(0)(270)},370:function(t,e,n){t.exports=n(0)(170)},371:function(t,e,n){t.exports=n(0)(324)},372:function(t,e,n){t.exports=n(0)(386)},373:function(t,e,n){t.exports=n(0)(387)},375:function(t,e,n){t.exports=n(237)(2662)},376:function(t,e,n){t.exports=n(237)(1367)},377:function(t,e,n){t.exports=n(0)(127)},378:function(t,e,n){t.exports=n(0)(2129)},379:function(t,e,n){t.exports=n(0)(235)},380:function(t,e,n){t.exports=n(0)(209)},381:function(t,e,n){t.exports=n(0)(580)},382:function(t,e,n){t.exports=n(0)(582)},383:function(t,e,n){t.exports=n(0)(128)},384:function(t,e,n){t.exports=n(0)(108)},385:function(t,e,n){t.exports=n(0)(472)},386:function(t,e,n){t.exports=n(0)(873)},403:function(t,e,n){t.exports=n(237)(2663)}}]);