(window["webpackJsonppackages_hzero_front_hcnf_name_"]=window["webpackJsonppackages_hzero_front_hcnf_name_"]||[]).push([[2],{171:function(t,e,r){"use strict";r.d(e,"a",function(){return O});var n=r(2),a=r.n(n),c=r(9),o=r(10),i=(r(182),r(95)),u=r(125),s=r.n(u),p=r(89),d=r(72),h=r(120),b=r(77);function l(t){if(t.status>=200&&t.status<300)return t;var e=t.statusText,r=new Error(e);throw r.name=t.status,r.response=t,r}function f(t){return m.apply(this,arguments)}function m(){return m=Object(o["a"])(a.a.mark(function t(e){var r;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(501!==e.name){t.next=14;break}return t.prev=1,t.next=4,e.response.json();case 4:r=t.sent,dvaApp._store.dispatch({type:"error/updateState",payload:{normal501:r}}),dvaApp._store.dispatch(p["routerRedux"].push({pathname:"/exception/501"})),t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](1),e;case 12:t.next=15;break;case 14:throw e;case 15:case"end":return t.stop()}},t,null,[[1,9]])})),m.apply(this,arguments)}i["default"].config({placement:"bottomRight"});var v={Pragma:"no-cache","Cache-Control":"no-cache"};function O(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n={credentials:"include",headers:v},a=r.beforeCatch,o=t.startsWith("/api")||t.startsWith("http")?t:"".concat(h["a"]).concat(t),u=Object(c["a"])({},n,e);if("POST"!==u.method&&"PUT"!==u.method&&"DELETE"!==u.method&&"PATCH"!==u.method||(u.body instanceof FormData?u.headers=Object(c["a"])({Accept:"application/json"},u.headers):(u.headers=Object(c["a"])({Accept:"application/json","Content-Type":"application/json; charset=utf-8"},u.headers),u.body=JSON.stringify(u.body))),u.query){var m=u.query;"GET"===u.method&&(m=Object(b["b"])(u.query)),o=Object(b["c"])(o,m)}var j=Object(b["d"])();j&&(u.headers=Object(c["a"])({},u.headers,{Authorization:"bearer ".concat(j)}));var y=s()(o,u).then(l).then(function(t){return 204===t.status?{}:"blob"===u.responseType?t.blob():"text"===u.responseType?t.text():t.json()});return a&&(y=y.catch(a)),y=y.catch(f).catch(function(t){var e=t.name,r=Object(b["m"])("isErrorFlag");if(r||Object(b["t"])("isErrorFlag",!1),401===e){var n=encodeURIComponent(window.location.toString());return j?void O("".concat(h["h"],"/public/token/kickoff"),{method:"POST",query:{access_token:j}}).then(function(t){1===t.kickoff?(dvaApp._store.dispatch(p["routerRedux"].push({pathname:"/public/kickoff"})),Object(b["t"])("redirectUrl",n),Object(b["t"])("isErrorFlag",!1)):(dvaApp._store.dispatch(p["routerRedux"].push({pathname:"/public/unauthorized"})),Object(b["t"])("isErrorFlag",!0),Object(b["t"])("redirectUrl",n))}):(Object(b["r"])(),Object(b["s"])(),-1!==o.indexOf(h["b"])?void(h["k"].includes("?")?(window.location.href="".concat(h["k"],"&redirect_uri=").concat(n),Object(b["t"])("isErrorFlag",!1),Object(b["t"])("redirectUrl",n)):(window.location.href="".concat(h["k"],"?redirect_uri=").concat(n),b["t"].apply("isErrorFlag",!1),Object(b["t"])("redirectUrl",n))):void(r||(dvaApp._store.dispatch(p["routerRedux"].push({pathname:"/public/unauthorized"})),Object(b["t"])("isErrorFlag",!0),Object(b["t"])("redirectUrl",n))))}if(-1!==o.indexOf(h["b"]))return t;"TypeError"!==e?i["default"].error({message:"".concat(e),description:t.message}):i["default"].error({message:d["a"].get("hzero.common.notification.network.typeError").d("\u7f51\u7edc\u8bf7\u6c42\u5f02\u5e38"),description:d["a"].get("hzero.common.notification.typeError.description").d("\u8bf7\u7a0d\u540e\u91cd\u8bd5")})}),y}},91:function(t,e,r){"use strict";var n=r(2),a=r.n(n),c=r(9),o=r(10),i=r(171),u=r(120),s=r(77);var p=r(110);function d(){var t=navigator,e=t.userAgent;return e.match(/rv:([\d.]+)\) like Gecko/)?11:e.match(/MSIE ([\d.]+)/)?e.match(/MSIE ([\d.]+)/)[1]:-1}function h(t){return b.apply(this,arguments)}function b(){return b=Object(o["a"])(a.a.mark(function t(e){var r,n,c,o;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.urls,n=Object(p["a"])(e,["urls"]),c=Object(s["g"])(),o=Object(s["p"])()?"".concat(u["c"],"/v1/").concat(c,"/files/delete-by-url"):"".concat(u["c"],"/v1/files/delete-by-url"),t.abrupt("return",Object(i["a"])(o,{method:"POST",body:r,query:Object(s["b"])(n)}));case 4:case"end":return t.stop()}},t)})),b.apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return f=Object(o["a"])(a.a.mark(function t(e){var r,n,c,o,i,p,h,b,l;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e||{},n=r.requestUrl,c=r.queryParams,o=r.method,i=n.startsWith("/api")||n.startsWith("http")?n:"".concat(u["a"]).concat(n),p="".concat(n).concat(Math.random()),h=document.createElement("iframe"),h.setAttribute("name",p),h.setAttribute("id",p),h.style.width="0px",h.style.height="0px",h.style.display="none",b=document.createElement("form"),-1===d()&&b.setAttribute("target",p),l=document.createElement("input"),l.setAttribute("type","hidden"),l.setAttribute("name","access_token"),l.setAttribute("value","".concat(Object(s["d"])())),"POST"===o&&(i="".concat(i,"?access_token=").concat(Object(s["d"])())),b.setAttribute("method",o),b.setAttribute("action",i),b.appendChild(l),c&&Array.isArray(c)&&c.forEach(function(t){var e=document.createElement("input");e.setAttribute("type","hidden"),e.setAttribute("name",t.name),e.setAttribute("value",t.value),b.appendChild(e)}),document.body.appendChild(h),document.body.appendChild(b),b.submit(),t.abrupt("return",!0);case 24:case"end":return t.stop()}},t)})),f.apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return v=Object(o["a"])(a.a.mark(function t(e){var r,n=arguments;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},t.abrupt("return",Object(i["a"])("".concat(u["i"],"/v1/").concat(Object(s["p"])()?"".concat(Object(s["g"])(),"/"):"","lovs/data"),{query:Object(c["a"])({lovCode:e},r)}));case 2:case"end":return t.stop()}},t)})),v.apply(this,arguments)}function O(t){return j.apply(this,arguments)}function j(){return j=Object(o["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i["a"])("".concat(u["i"],"/v1/").concat(Object(s["p"])()?"".concat(Object(s["g"])(),"/"):"","lovs/value/batch"),{query:e}));case 1:case"end":return t.stop()}},t)})),j.apply(this,arguments)}function y(t,e,r){return w.apply(this,arguments)}function w(){return w=Object(o["a"])(a.a.mark(function t(e,r,n){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i["a"])("".concat(u["i"],"/v1/").concat(e,"/prompt/").concat(r,"?promptKey=").concat(n)));case 1:case"end":return t.stop()}},t)})),w.apply(this,arguments)}function k(t){return g.apply(this,arguments)}function g(){return g=Object(o["a"])(a.a.mark(function t(e){var r;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=Object(i["a"])("".concat(u["i"],"/v1/").concat(Object(s["p"])()?"".concat(Object(s["g"])(),"/"):"","lov-view/info"),{method:"GET",query:e}),t.abrupt("return",Object(s["k"])(r));case 2:case"end":return t.stop()}},t)})),g.apply(this,arguments)}function x(t,e){return A.apply(this,arguments)}function A(){return A=Object(o["a"])(a.a.mark(function t(e,r){var n;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(i["a"])(e,{query:r}),t.abrupt("return",Object(s["k"])(n));case 2:case"end":return t.stop()}},t)})),A.apply(this,arguments)}r.d(e,"g",function(){return h}),r.d(e,"a",function(){return l}),r.d(e,"f",function(){return m}),r.d(e,"d",function(){return O}),r.d(e,"e",function(){return y}),r.d(e,"b",function(){return k}),r.d(e,"c",function(){return x})}}]);