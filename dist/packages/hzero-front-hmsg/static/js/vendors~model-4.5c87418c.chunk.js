(window["webpackJsonppackages_hzero_front_hmsg_name_"]=window["webpackJsonppackages_hzero_front_hmsg_name_"]||[]).push([[83],{273:function(t,e,a){"use strict";a.d(e,"a",function(){return v});var r=a(2),n=a.n(r),c=a(19),s=a(20),u=(a(277),a(146)),o=a(217),p=a.n(o),i=a(144),l=a(121),h=a(225),d=a(120);function f(t){if(t.status>=200&&t.status<300)return t;var e=t.statusText,a=new Error(e);throw a.name=t.status,a.response=t,a}function b(t){return m.apply(this,arguments)}function m(){return m=Object(s["a"])(n.a.mark(function t(e){var a;return n.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(501!==e.name){t.next=14;break}return t.prev=1,t.next=4,e.response.json();case 4:a=t.sent,dvaApp._store.dispatch({type:"error/updateState",payload:{normal501:a}}),dvaApp._store.dispatch(i["routerRedux"].push({pathname:"/exception/501"})),t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](1),e;case 12:t.next=15;break;case 14:throw e;case 15:case"end":return t.stop()}},t,null,[[1,9]])})),m.apply(this,arguments)}u["default"].config({placement:"bottomRight"});var w={Pragma:"no-cache","Cache-Control":"no-cache"};function v(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={credentials:"include",headers:w},n=a.beforeCatch,s=t.startsWith("/api")||t.startsWith("http")?t:"".concat(h["a"]).concat(t),o=Object(c["a"])({},r,e);if("POST"!==o.method&&"PUT"!==o.method&&"DELETE"!==o.method&&"PATCH"!==o.method||(o.body instanceof FormData?o.headers=Object(c["a"])({Accept:"application/json"},o.headers):(o.headers=Object(c["a"])({Accept:"application/json","Content-Type":"application/json; charset=utf-8"},o.headers),o.body=JSON.stringify(o.body))),o.query){var m=o.query;"GET"===o.method&&(m=Object(d["b"])(o.query)),s=Object(d["c"])(s,m)}var y=Object(d["d"])();y&&(o.headers=Object(c["a"])({},o.headers,{Authorization:"bearer ".concat(y)}));var O=p()(s,o).then(f).then(function(t){return 204===t.status?{}:"blob"===o.responseType?t.blob():"text"===o.responseType?t.text():t.json()});return n&&(O=O.catch(n)),O=O.catch(b).catch(function(t){var e=t.name,a=Object(d["n"])("isErrorFlag");if(a||Object(d["v"])("isErrorFlag",!1),401===e){var r=encodeURIComponent(window.location.toString());return y?void v("".concat(h["i"],"/public/token/kickoff"),{method:"POST",query:{access_token:y}}).then(function(t){1===t.kickoff?(dvaApp._store.dispatch(i["routerRedux"].push({pathname:"/public/kickoff"})),Object(d["v"])("redirectUrl",r),Object(d["v"])("isErrorFlag",!1)):(dvaApp._store.dispatch(i["routerRedux"].push({pathname:"/public/unauthorized"})),Object(d["v"])("isErrorFlag",!0),Object(d["v"])("redirectUrl",r))}):(Object(d["t"])(),Object(d["u"])(),-1!==s.indexOf(h["b"])?void(h["l"].includes("?")?(window.location.href="".concat(h["l"],"&redirect_uri=").concat(r),Object(d["v"])("isErrorFlag",!1),Object(d["v"])("redirectUrl",r)):(window.location.href="".concat(h["l"],"?redirect_uri=").concat(r),d["v"].apply("isErrorFlag",!1),Object(d["v"])("redirectUrl",r))):void(a||(dvaApp._store.dispatch(i["routerRedux"].push({pathname:"/public/unauthorized"})),Object(d["v"])("isErrorFlag",!0),Object(d["v"])("redirectUrl",r))))}if(-1!==s.indexOf(h["b"]))return t;"TypeError"!==e?u["default"].error({message:"".concat(e),description:t.message}):u["default"].error({message:l["a"].get("hzero.common.notification.network.typeError").d("\u7f51\u7edc\u8bf7\u6c42\u5f02\u5e38"),description:l["a"].get("hzero.common.notification.typeError.description").d("\u8bf7\u7a0d\u540e\u91cd\u8bd5")})}),O}},99:function(t,e,a){"use strict";a.r(e);var r=a(19),n=a(2),c=a.n(n),s=a(120),u=a(126),o=a(20),p=a(273),i=a(225),l="".concat(i["h"],"/v1"),h=Object(s["g"])(),d=Object(s["q"])();function f(t){return b.apply(this,arguments)}function b(){return b=Object(o["a"])(c.a.mark(function t(e){var a;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=Object(s["s"])(e),t.abrupt("return",Object(p["a"])(d?"".concat(l,"/").concat(h,"/message/templates"):"".concat(l,"/message/templates"),{method:"GET",query:a}));case 2:case"end":return t.stop()}},t)})),b.apply(this,arguments)}function m(t){return w.apply(this,arguments)}function w(){return w=Object(o["a"])(c.a.mark(function t(e){var a;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=Object(s["s"])(e),t.abrupt("return",Object(p["a"])("".concat(l,"/").concat(h,"/message/templates"),{method:"DELETE",body:a}));case 2:case"end":return t.stop()}},t)})),w.apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return y=Object(o["a"])(c.a.mark(function t(e){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p["a"])(d?"".concat(l,"/").concat(h,"/message/templates/").concat(e.templateId):"".concat(l,"/message/templates/").concat(e.templateId),{method:"GET"}));case 1:case"end":return t.stop()}},t)})),y.apply(this,arguments)}function O(t){return j.apply(this,arguments)}function j(){return j=Object(o["a"])(c.a.mark(function t(e){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p["a"])(d?"".concat(l,"/").concat(h,"/message/templates/").concat(e.templateId,"/copy"):"".concat(l,"/message/templates/").concat(e.templateId,"/copy"),{method:"GET"}));case 1:case"end":return t.stop()}},t)})),j.apply(this,arguments)}function x(t){return g.apply(this,arguments)}function g(){return g=Object(o["a"])(c.a.mark(function t(e){var a,r;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.templateId,r=Object(u["a"])(e,["templateId"]),t.abrupt("return",Object(p["a"])(d?"".concat(i["h"],"/v1/").concat(h,"/template-args/").concat(a):"".concat(i["h"],"/v1/template-args/").concat(a),{method:"GET",query:r}));case 2:case"end":return t.stop()}},t)})),g.apply(this,arguments)}function k(t){return E.apply(this,arguments)}function E(){return E=Object(o["a"])(c.a.mark(function t(e){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p["a"])(d?"".concat(i["h"],"/v1/").concat(h,"/template-args/init"):"".concat(i["h"],"/v1/template-args/init"),{method:"POST",query:e}));case 1:case"end":return t.stop()}},t)})),E.apply(this,arguments)}function T(t){return S.apply(this,arguments)}function S(){return S=Object(o["a"])(c.a.mark(function t(e){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p["a"])(d?"".concat(i["h"],"/v1/").concat(h,"/template-args"):"".concat(i["h"],"/v1/template-args"),{method:"DELETE",body:e}));case 1:case"end":return t.stop()}},t)})),S.apply(this,arguments)}function _(t){return P.apply(this,arguments)}function P(){return P=Object(o["a"])(c.a.mark(function t(e){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p["a"])(d?"".concat(i["h"],"/v1/").concat(h,"/template-args"):"".concat(i["h"],"/v1/template-args"),{method:"PUT",body:e}));case 1:case"end":return t.stop()}},t)})),P.apply(this,arguments)}function A(t){return G.apply(this,arguments)}function G(){return G=Object(o["a"])(c.a.mark(function t(e){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p["a"])(d?"".concat(l,"/").concat(h,"/message/templates"):"".concat(l,"/message/templates"),{method:"PUT",body:Object(r["a"])({},e)}));case 1:case"end":return t.stop()}},t)})),G.apply(this,arguments)}function U(t){return q.apply(this,arguments)}function q(){return q=Object(o["a"])(c.a.mark(function t(e){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p["a"])(d?"".concat(l,"/").concat(h,"/message/templates"):"".concat(l,"/message/templates"),{method:"POST",body:Object(r["a"])({},e)}));case 1:case"end":return t.stop()}},t)})),q.apply(this,arguments)}function C(t){return D.apply(this,arguments)}function D(){return D=Object(o["a"])(c.a.mark(function t(e){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p["a"])("".concat(i["j"],"/v1/lovs/value/tree"),{method:"GET",query:e}));case 1:case"end":return t.stop()}},t)})),D.apply(this,arguments)}function F(){return I.apply(this,arguments)}function I(){return I=Object(o["a"])(c.a.mark(function t(){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p["a"])("".concat(i["j"],"/v1/languages/list"),{method:"GET"}));case 1:case"end":return t.stop()}},t)})),I.apply(this,arguments)}e["default"]={namespace:"messageTemplate",state:{list:[],pagination:{},detail:{},categoryTree:[],language:[],paraList:[],paraPagination:{},copyDetail:{}},effects:{fetchType:c.a.mark(function t(e,a){var r,n,u;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=a.call,n=a.put,t.t0=s["l"],t.next=4,r(C,{"HMSG.MESSAGE_CATEGORY":1,"HMSG.MESSAGE_SUBCATEGORY":2});case 4:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.next=8,n({type:"updateState",payload:{categoryTree:u}});case 8:case"end":return t.stop()}},t)}),fetchLanguage:c.a.mark(function t(e,a){var r,n,s;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=a.call,n=a.put,t.next=3,r(F);case 3:return s=t.sent,t.next=6,n({type:"updateState",payload:{language:s}});case 6:case"end":return t.stop()}},t)}),fetchTemplate:c.a.mark(function t(e,a){var r,n,u,o;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,u=a.put,t.next=4,n(f,r);case 4:if(o=t.sent,o=Object(s["l"])(o),!o){t.next=9;break}return t.next=9,u({type:"updateState",payload:{list:o.content,pagination:Object(s["a"])(o),detail:{}}});case 9:case"end":return t.stop()}},t)}),fetchDetail:c.a.mark(function t(e,a){var r,n,u,o;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,u=a.put,t.next=4,n(v,r);case 4:return o=t.sent,o=Object(s["l"])(o),t.next=8,u({type:"updateState",payload:{detail:o}});case 8:return t.abrupt("return",o);case 9:case"end":return t.stop()}},t)}),deleteItem:c.a.mark(function t(e,a){var r,n,u;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,t.next=4,n(m,r);case 4:return u=t.sent,t.abrupt("return",Object(s["l"])(u));case 6:case"end":return t.stop()}},t)}),fetchCopyDetail:c.a.mark(function t(e,a){var r,n,u,o;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,u=a.put,t.next=4,n(O,r);case 4:return o=t.sent,o=Object(s["l"])(o),t.next=8,u({type:"updateState",payload:{copyDetail:o}});case 8:return t.abrupt("return",o);case 9:case"end":return t.stop()}},t)}),fetchDetailPara:c.a.mark(function t(e,a){var r,n,u,o,p;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,u=a.put,t.next=4,n(x,Object(s["s"])(r));case 4:return o=t.sent,p=Object(s["l"])(o),t.next=8,u({type:"updateState",payload:{paraList:p&&p.content,paraPagination:Object(s["a"])(p)}});case 8:return t.abrupt("return",p);case 9:case"end":return t.stop()}},t)}),initPara:c.a.mark(function t(e,a){var r,n,u;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,t.next=4,n(k,r);case 4:return u=t.sent,t.abrupt("return",Object(s["l"])(u));case 6:case"end":return t.stop()}},t)}),deletePara:c.a.mark(function t(e,a){var r,n,u;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,t.next=4,n(T,r);case 4:return u=t.sent,t.abrupt("return",Object(s["l"])(u));case 6:case"end":return t.stop()}},t)}),editPara:c.a.mark(function t(e,a){var r,n,u;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,t.next=4,n(_,r);case 4:return u=t.sent,t.abrupt("return",Object(s["l"])(u));case 6:case"end":return t.stop()}},t)}),updateTemplate:c.a.mark(function t(e,a){var r,n,u;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,t.next=4,n(A,r);case 4:return u=t.sent,t.abrupt("return",Object(s["l"])(u));case 6:case"end":return t.stop()}},t)}),addTemplate:c.a.mark(function t(e,a){var r,n,u;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,t.next=4,n(U,r);case 4:return u=t.sent,t.abrupt("return",Object(s["l"])(u));case 6:case"end":return t.stop()}},t)})},reducers:{updateState:function(t,e){var a=e.payload;return Object(r["a"])({},t,a)}}}}}]);