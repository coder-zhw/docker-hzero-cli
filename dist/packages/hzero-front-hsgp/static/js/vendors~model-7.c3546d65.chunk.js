(window["webpackJsonppackages_hzero_front_hsgp_name_"]=window["webpackJsonppackages_hzero_front_hsgp_name_"]||[]).push([[90],{111:function(t,e,r){"use strict";r.d(e,"a",function(){return y});var n=r(2),a=r.n(n),c=r(25),u=r(24),o=(r(165),r(125)),i=r(145),p=r.n(i),s=r(126),d=r(113),h=r(110),f=r(109);function l(t){if(t.status>=200&&t.status<300)return t;var e=t.statusText,r=new Error(e);throw r.name=t.status,r.response=t,r}function b(t){return v.apply(this,arguments)}function v(){return v=Object(u["a"])(a.a.mark(function t(e){var r;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(501!==e.name){t.next=14;break}return t.prev=1,t.next=4,e.response.json();case 4:r=t.sent,dvaApp._store.dispatch({type:"error/updateState",payload:{normal501:r}}),dvaApp._store.dispatch(s["routerRedux"].push({pathname:"/exception/501"})),t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](1),e;case 12:t.next=15;break;case 14:throw e;case 15:case"end":return t.stop()}},t,null,[[1,9]])})),v.apply(this,arguments)}o["default"].config({placement:"bottomRight"});var w={Pragma:"no-cache","Cache-Control":"no-cache"};function y(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n={credentials:"include",headers:w},a=r.beforeCatch,u=t.startsWith("/api")||t.startsWith("http")?t:"".concat(h["a"]).concat(t),i=Object(c["a"])({},n,e);if("POST"!==i.method&&"PUT"!==i.method&&"DELETE"!==i.method&&"PATCH"!==i.method||(i.body instanceof FormData?i.headers=Object(c["a"])({Accept:"application/json"},i.headers):(i.headers=Object(c["a"])({Accept:"application/json","Content-Type":"application/json; charset=utf-8"},i.headers),i.body=JSON.stringify(i.body))),i.query){var v=i.query;"GET"===i.method&&(v=Object(f["b"])(i.query)),u=Object(f["c"])(u,v)}var m=Object(f["d"])();m&&(i.headers=Object(c["a"])({},i.headers,{Authorization:"bearer ".concat(m)}));var O=p()(u,i).then(l).then(function(t){return 204===t.status?{}:"blob"===i.responseType?t.blob():"text"===i.responseType?t.text():t.json()});return a&&(O=O.catch(a)),O=O.catch(b).catch(function(t){var e=t.name,r=Object(f["m"])("isErrorFlag");if(r||Object(f["t"])("isErrorFlag",!1),401===e){var n=encodeURIComponent(window.location.toString());return m?void y("".concat(h["h"],"/public/token/kickoff"),{method:"POST",query:{access_token:m}}).then(function(t){1===t.kickoff?(dvaApp._store.dispatch(s["routerRedux"].push({pathname:"/public/kickoff"})),Object(f["t"])("redirectUrl",n),Object(f["t"])("isErrorFlag",!1)):(dvaApp._store.dispatch(s["routerRedux"].push({pathname:"/public/unauthorized"})),Object(f["t"])("isErrorFlag",!0),Object(f["t"])("redirectUrl",n))}):(Object(f["r"])(),Object(f["s"])(),-1!==u.indexOf(h["b"])?void(h["k"].includes("?")?(window.location.href="".concat(h["k"],"&redirect_uri=").concat(n),Object(f["t"])("isErrorFlag",!1),Object(f["t"])("redirectUrl",n)):(window.location.href="".concat(h["k"],"?redirect_uri=").concat(n),f["t"].apply("isErrorFlag",!1),Object(f["t"])("redirectUrl",n))):void(r||(dvaApp._store.dispatch(s["routerRedux"].push({pathname:"/public/unauthorized"})),Object(f["t"])("isErrorFlag",!0),Object(f["t"])("redirectUrl",n))))}if(-1!==u.indexOf(h["b"]))return t;"TypeError"!==e?o["default"].error({message:"".concat(e),description:t.message}):o["default"].error({message:d["a"].get("hzero.common.notification.network.typeError").d("\u7f51\u7edc\u8bf7\u6c42\u5f02\u5e38"),description:d["a"].get("hzero.common.notification.typeError.description").d("\u8bf7\u7a0d\u540e\u91cd\u8bd5")})}),O}},222:function(t,e,r){"use strict";r.d(e,"d",function(){return i}),r.d(e,"c",function(){return s}),r.d(e,"e",function(){return h}),r.d(e,"a",function(){return l}),r.d(e,"i",function(){return v}),r.d(e,"b",function(){return y}),r.d(e,"g",function(){return O}),r.d(e,"f",function(){return x}),r.d(e,"h",function(){return E});var n=r(2),a=r.n(n),c=r(24),u=r(111),o=r(110);function i(t){return p.apply(this,arguments)}function p(){return p=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/products"),{method:"GET",query:e}));case 1:case"end":return t.stop()}},t)})),p.apply(this,arguments)}function s(t){return d.apply(this,arguments)}function d(){return d=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/products/").concat(e.productId)));case 1:case"end":return t.stop()}},t)})),d.apply(this,arguments)}function h(){return f.apply(this,arguments)}function f(){return f=Object(c["a"])(a.a.mark(function t(){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/products/simple")));case 1:case"end":return t.stop()}},t)})),f.apply(this,arguments)}function l(t){return b.apply(this,arguments)}function b(){return b=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/products"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t)})),b.apply(this,arguments)}function v(t){return w.apply(this,arguments)}function w(){return w=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/products"),{method:"PUT",body:e}));case 1:case"end":return t.stop()}},t)})),w.apply(this,arguments)}function y(t){return m.apply(this,arguments)}function m(){return m=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/products"),{method:"DELETE",body:e}));case 1:case"end":return t.stop()}},t)})),m.apply(this,arguments)}function O(){return j.apply(this,arguments)}function j(){return j=Object(c["a"])(a.a.mark(function t(){var e,r=arguments;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/products/with-version/value-set"),{method:"GET",query:e}));case 2:case"end":return t.stop()}},t)})),j.apply(this,arguments)}function x(){return k.apply(this,arguments)}function k(){return k=Object(c["a"])(a.a.mark(function t(){var e,r=arguments;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/products/with-env/value-set"),{method:"GET",query:e}));case 2:case"end":return t.stop()}},t)})),k.apply(this,arguments)}function E(){return T.apply(this,arguments)}function T(){return T=Object(c["a"])(a.a.mark(function t(){var e,r=arguments;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/product-services/").concat(e.productId,"/").concat(e.productVersionId,"/with-version/value-set"),{method:"GET",query:e}));case 2:case"end":return t.stop()}},t)})),T.apply(this,arguments)}},228:function(t,e,r){"use strict";r.d(e,"f",function(){return i}),r.d(e,"e",function(){return s}),r.d(e,"g",function(){return h}),r.d(e,"a",function(){return l}),r.d(e,"i",function(){return v}),r.d(e,"b",function(){return y}),r.d(e,"c",function(){return O}),r.d(e,"d",function(){return x}),r.d(e,"h",function(){return E});var n=r(2),a=r.n(n),c=r(24),u=r(111),o=r(110);function i(t){return p.apply(this,arguments)}function p(){return p=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/app-sources"),{method:"GET",query:e}));case 1:case"end":return t.stop()}},t)})),p.apply(this,arguments)}function s(t){return d.apply(this,arguments)}function d(){return d=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/app-sources/").concat(e.appSourceId),{method:"GET"}));case 1:case"end":return t.stop()}},t)})),d.apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return f=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/common/value-set"),{method:"GET",query:e}));case 1:case"end":return t.stop()}},t)})),f.apply(this,arguments)}function l(t){return b.apply(this,arguments)}function b(){return b=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/app-sources"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t)})),b.apply(this,arguments)}function v(t){return w.apply(this,arguments)}function w(){return w=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/app-sources"),{method:"PUT",body:e}));case 1:case"end":return t.stop()}},t)})),w.apply(this,arguments)}function y(t){return m.apply(this,arguments)}function m(){return m=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/app-sources"),{method:"DELETE",body:e}));case 1:case"end":return t.stop()}},t)})),m.apply(this,arguments)}function O(t){return j.apply(this,arguments)}function j(){return j=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/app-sources/disabled"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t)})),j.apply(this,arguments)}function x(t){return k.apply(this,arguments)}function k(){return k=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/app-sources/enabled"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t)})),k.apply(this,arguments)}function E(t){return T.apply(this,arguments)}function T(){return T=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/app-sources/enabled-source"),{method:"GET",query:e}));case 1:case"end":return t.stop()}},t)})),T.apply(this,arguments)}},287:function(t,e,r){"use strict";r.d(e,"f",function(){return i}),r.d(e,"e",function(){return s}),r.d(e,"g",function(){return h}),r.d(e,"a",function(){return l}),r.d(e,"h",function(){return v}),r.d(e,"b",function(){return y}),r.d(e,"d",function(){return O}),r.d(e,"c",function(){return x});var n=r(2),a=r.n(n),c=r(24),u=r(111),o=r(110);function i(t){return p.apply(this,arguments)}function p(){return p=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/deploy-platforms"),{method:"GET",query:e}));case 1:case"end":return t.stop()}},t)})),p.apply(this,arguments)}function s(t){return d.apply(this,arguments)}function d(){return d=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/deploy-platforms/").concat(e.deployPlatformId),{method:"GET"}));case 1:case"end":return t.stop()}},t)})),d.apply(this,arguments)}function h(){return f.apply(this,arguments)}function f(){return f=Object(c["a"])(a.a.mark(function t(){var e,r=arguments;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/deploy-platforms/enabled-platform"),{method:"GET",query:e}));case 2:case"end":return t.stop()}},t)})),f.apply(this,arguments)}function l(t){return b.apply(this,arguments)}function b(){return b=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/deploy-platforms"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t)})),b.apply(this,arguments)}function v(t){return w.apply(this,arguments)}function w(){return w=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/deploy-platforms"),{method:"PUT",body:e}));case 1:case"end":return t.stop()}},t)})),w.apply(this,arguments)}function y(t){return m.apply(this,arguments)}function m(){return m=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/deploy-platforms"),{method:"DELETE",body:e}));case 1:case"end":return t.stop()}},t)})),m.apply(this,arguments)}function O(t){return j.apply(this,arguments)}function j(){return j=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/deploy-platforms/enabled"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t)})),j.apply(this,arguments)}function x(t){return k.apply(this,arguments)}function k(){return k=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/deploy-platforms/disabled"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t)})),k.apply(this,arguments)}},290:function(t,e,r){"use strict";r.d(e,"f",function(){return i}),r.d(e,"e",function(){return s}),r.d(e,"g",function(){return h}),r.d(e,"a",function(){return l}),r.d(e,"j",function(){return v}),r.d(e,"b",function(){return y}),r.d(e,"d",function(){return O}),r.d(e,"c",function(){return x}),r.d(e,"i",function(){return E}),r.d(e,"h",function(){return g});var n=r(2),a=r.n(n),c=r(24),u=r(111),o=r(110);function i(t){return p.apply(this,arguments)}function p(){return p=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/product-envs/").concat(e.productId),{method:"GET",query:e}));case 1:case"end":return t.stop()}},t)})),p.apply(this,arguments)}function s(t){return d.apply(this,arguments)}function d(){return d=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/product-envs/").concat(e.productId,"/").concat(e.productEnvId),{method:"GET",query:e}));case 1:case"end":return t.stop()}},t)})),d.apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return f=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/product-envs/").concat(e.productId,"/devops-envs"),{method:"GET",query:e}));case 1:case"end":return t.stop()}},t)})),f.apply(this,arguments)}function l(t){return b.apply(this,arguments)}function b(){return b=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/product-envs/").concat(e.productId),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t)})),b.apply(this,arguments)}function v(t){return w.apply(this,arguments)}function w(){return w=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/product-envs/").concat(e.productId),{method:"PUT",body:e}));case 1:case"end":return t.stop()}},t)})),w.apply(this,arguments)}function y(t){return m.apply(this,arguments)}function m(){return m=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/product-envs/").concat(e.productId),{method:"DELETE",body:e}));case 1:case"end":return t.stop()}},t)})),m.apply(this,arguments)}function O(t){return j.apply(this,arguments)}function j(){return j=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/product-envs/").concat(e.productId,"/enabled"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t)})),j.apply(this,arguments)}function x(t){return k.apply(this,arguments)}function k(){return k=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/product-envs/").concat(e.productId,"/disabled"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t)})),k.apply(this,arguments)}function E(t){return T.apply(this,arguments)}function T(){return T=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/product-envs/").concat(e.productId,"/version-value-set"),{method:"GET"}));case 1:case"end":return t.stop()}},t)})),T.apply(this,arguments)}function g(t){return P.apply(this,arguments)}function P(){return P=Object(c["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u["a"])("".concat(o["d"],"/v1/product-envs/").concat(e.productId,"/value-set"),{method:"GET"}));case 1:case"end":return t.stop()}},t)})),P.apply(this,arguments)}},98:function(t,e,r){"use strict";r.r(e);var n=r(25),a=r(2),c=r.n(a),u=r(109),o=r(290),i=r(287),p=r(222),s=r(228);e["default"]={namespace:"productEnv",state:{productEnvList:[],productEnvDetail:{},versionValueList:[],defaultProduct:"",pagination:{},enabledPlatformList:{},cherodonEnvList:[],simpleProductList:[],grantTypeList:[]},effects:{fetchValueSet:c.a.mark(function t(e,r){var n,a,o;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.call,a=r.put,t.t0=u["k"],t.next=4,n(s["g"],{code:"HSGP.GRANT_TYPE"});case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,a({type:"updateState",payload:{grantTypeList:o}});case 8:case"end":return t.stop()}},t)}),fetchProductEnvList:c.a.mark(function t(e,r){var n,a,i,p,s,d;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=r.call,i=r.put,p=Object(u["q"])(n),t.next=5,a(o["f"],p);case 5:if(s=t.sent,d=Object(u["k"])(s),!d){t.next=10;break}return t.next=10,i({type:"updateState",payload:{productEnvList:d.content,pagination:Object(u["a"])(d)}});case 10:return t.abrupt("return",d);case 11:case"end":return t.stop()}},t)}),fetchProductEnvDetail:c.a.mark(function t(e,r){var n,a,i,p,s;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=r.call,i=r.put,t.next=4,a(o["e"],n);case 4:if(p=t.sent,s=Object(u["k"])(p),!s){t.next=9;break}return t.next=9,i({type:"updateState",payload:{productEnvDetail:s}});case 9:return t.abrupt("return",s);case 10:case"end":return t.stop()}},t)}),queryVersionValueSet:c.a.mark(function t(e,r){var n,a,i,p,s;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=r.call,i=r.put,t.next=4,a(o["i"],n);case 4:if(p=t.sent,s=Object(u["k"])(p),!s){t.next=9;break}return t.next=9,i({type:"updateState",payload:{versionValueList:s}});case 9:return t.abrupt("return",s);case 10:case"end":return t.stop()}},t)}),fetchSimpleProductList:c.a.mark(function t(e,r){var n,a,o,i;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.call,a=r.put,t.next=3,n(p["e"]);case 3:if(o=t.sent,i=Object(u["k"])(o),!i){t.next=8;break}return t.next=8,a({type:"updateState",payload:{simpleProductList:i}});case 8:return t.abrupt("return",i);case 9:case"end":return t.stop()}},t)}),queryCherodonEnvList:c.a.mark(function t(e,r){var n,a,i,p,s;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=r.call,i=r.put,t.next=4,a(o["g"],n);case 4:if(p=t.sent,s=Object(u["k"])(p),!s){t.next=9;break}return t.next=9,i({type:"updateState",payload:{cherodonEnvList:s}});case 9:return t.abrupt("return",s);case 10:case"end":return t.stop()}},t)}),queryEnabledPlatformLov:c.a.mark(function t(e,r){var n,a,o,p,s;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=r.call,o=r.put,t.next=4,a(i["g"],Object(u["q"])(n));case 4:if(p=t.sent,s=Object(u["k"])(p),!s){t.next=9;break}return t.next=9,o({type:"updateState",payload:{enabledPlatformList:s}});case 9:return t.abrupt("return",s);case 10:case"end":return t.stop()}},t)}),createProductEnv:c.a.mark(function t(e,r){var n,a,i;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=r.call,t.next=4,a(o["a"],n);case 4:return i=t.sent,t.abrupt("return",Object(u["k"])(i));case 6:case"end":return t.stop()}},t)}),updateProductEnv:c.a.mark(function t(e,r){var n,a,i;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=r.call,t.next=4,a(o["j"],n);case 4:return i=t.sent,t.abrupt("return",Object(u["k"])(i));case 6:case"end":return t.stop()}},t)}),enabledProductEnv:c.a.mark(function t(e,r){var n,a,i;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=r.call,t.next=4,a(o["d"],n);case 4:return i=t.sent,t.abrupt("return",Object(u["k"])(i));case 6:case"end":return t.stop()}},t)}),disabledProductEnv:c.a.mark(function t(e,r){var n,a,i;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=r.call,t.next=4,a(o["c"],n);case 4:return i=t.sent,t.abrupt("return",Object(u["k"])(i));case 6:case"end":return t.stop()}},t)}),deleteProductEnv:c.a.mark(function t(e,r){var n,a,i;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,a=r.call,t.next=4,a(o["b"],n);case 4:return i=t.sent,t.abrupt("return",Object(u["k"])(i));case 6:case"end":return t.stop()}},t)})},reducers:{updateState:function(t,e){var r=e.payload;return Object(n["a"])({},t,r)}}}}}]);