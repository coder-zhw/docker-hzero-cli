(window["webpackJsonppackages_hzero_front_hpfm_name_"]=window["webpackJsonppackages_hzero_front_hpfm_name_"]||[]).push([[3],{522:function(t,e,r){"use strict";var n=r(2),a=r.n(n),c=r(131),u=r(134),o=r(648),i=r(631),s=r(504);var p=r(509);function h(){var t=navigator,e=t.userAgent;return e.match(/rv:([\d.]+)\) like Gecko/)?11:e.match(/MSIE ([\d.]+)/)?e.match(/MSIE ([\d.]+)/)[1]:-1}function d(t){return l.apply(this,arguments)}function l(){return l=Object(u["a"])(a.a.mark(function t(e){var r;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=Object(s["m"])(),t.abrupt("return",Object(o["a"])("".concat(i["e"],"/v1").concat(Object(s["A"])()?"/".concat(r,"/"):"/","files/").concat(e.attachmentUUID,"/file"),{method:"GET",query:e}));case 2:case"end":return t.stop()}},t)})),l.apply(this,arguments)}function b(t){return f.apply(this,arguments)}function f(){return f=Object(u["a"])(a.a.mark(function t(e){var r,n,c,u;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.urls,n=Object(p["a"])(e,["urls"]),c=Object(s["m"])(),u=Object(s["A"])()?"".concat(i["e"],"/v1/").concat(c,"/files/delete-by-url"):"".concat(i["e"],"/v1/files/delete-by-url"),t.abrupt("return",Object(o["a"])(u,{method:"POST",body:r,query:Object(s["g"])(n)}));case 4:case"end":return t.stop()}},t)})),f.apply(this,arguments)}function m(t){return O.apply(this,arguments)}function O(){return O=Object(u["a"])(a.a.mark(function t(e){var r,n,c,u;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.urls,n=Object(p["a"])(e,["urls"]),c=Object(s["m"])(),u=Object(s["A"])()?"".concat(i["e"],"/v1/").concat(c,"/files/delete-by-uuidurl"):"".concat(i["e"],"/v1/files/delete-by-uuidurl"),t.abrupt("return",Object(o["a"])(u,{method:"POST",body:r,query:Object(s["g"])(n)}));case 4:case"end":return t.stop()}},t)})),O.apply(this,arguments)}function j(t){return y.apply(this,arguments)}function y(){return y=Object(u["a"])(a.a.mark(function t(e){var r;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=Object(s["m"])(),t.abrupt("return",Object(o["a"])("".concat(i["e"],"/v1").concat(Object(s["A"])()?"/".concat(r,"/"):"/","files/uuid"),{method:"POST",query:e}));case 2:case"end":return t.stop()}},t)})),y.apply(this,arguments)}function v(t){return w.apply(this,arguments)}function w(){return w=Object(u["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(o["a"])("".concat(e.requestUrl),{method:e.method,query:{exportType:"COLUMN"}}));case 1:case"end":return t.stop()}},t)})),w.apply(this,arguments)}function k(t){return x.apply(this,arguments)}function x(){return x=Object(u["a"])(a.a.mark(function t(e){var r,n,c,u,o,p,d,l,b;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e||{},n=r.requestUrl,c=r.queryParams,u=r.method,o=n.startsWith("/api")||n.startsWith("http")?n:"".concat(i["a"]).concat(n),p="".concat(n).concat(Math.random()),d=document.createElement("iframe"),d.setAttribute("name",p),d.setAttribute("id",p),d.style.width="0px",d.style.height="0px",d.style.display="none",l=document.createElement("form"),-1===h()&&l.setAttribute("target",p),b=document.createElement("input"),b.setAttribute("type","hidden"),b.setAttribute("name","access_token"),b.setAttribute("value","".concat(Object(s["i"])())),"POST"===u&&(o="".concat(o,"?access_token=").concat(Object(s["i"])())),l.setAttribute("method",u),l.setAttribute("action",o),l.appendChild(b),c&&Array.isArray(c)&&c.forEach(function(t){var e=document.createElement("input");e.setAttribute("type","hidden"),e.setAttribute("name",t.name),e.setAttribute("value",t.value),l.appendChild(e)}),document.body.appendChild(d),document.body.appendChild(l),l.submit(),t.abrupt("return",!0);case 24:case"end":return t.stop()}},t)})),x.apply(this,arguments)}function g(t){return A.apply(this,arguments)}function A(){return A=Object(u["a"])(a.a.mark(function t(e){var r,n,c,u;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.requestUrl,n=e.queryParams,c=r.startsWith("/api")||r.startsWith("http")?r:"".concat(i["a"]).concat(r),n&&Object.keys(n).length>=1&&n.forEach(function(t){c+="".concat(c.indexOf("?")>=0?"&":"?").concat(t.name,"=").concat(t.value)}),u=Object(o["a"])(c,{method:"GET"}),t.abrupt("return",Object(s["u"])(u));case 5:case"end":return t.stop()}},t)})),A.apply(this,arguments)}function E(){return T.apply(this,arguments)}function T(){return T=Object(u["a"])(a.a.mark(function t(){var e;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=Object(o["a"])("".concat(i["k"],"/v1/tool/pass/public-key"),{method:"GET"}),t.abrupt("return",Object(s["u"])(e));case 2:case"end":return t.stop()}},t)})),T.apply(this,arguments)}function q(t){return _.apply(this,arguments)}function _(){return _=Object(u["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(o["a"])("".concat(i["k"],"/v1/multi-language"),{method:"GET",query:e}));case 1:case"end":return t.stop()}},t)})),_.apply(this,arguments)}function G(t){return C.apply(this,arguments)}function C(){return C=Object(u["a"])(a.a.mark(function t(e){var r,n=arguments;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},t.abrupt("return",Object(o["a"])("".concat(i["k"],"/v1/").concat(Object(s["A"])()?"".concat(Object(s["m"])(),"/"):"","lovs/data"),{query:Object(c["a"])({lovCode:e},r)}));case 2:case"end":return t.stop()}},t)})),C.apply(this,arguments)}function U(t){return P.apply(this,arguments)}function P(){return P=Object(u["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(o["a"])("".concat(i["k"],"/v1/").concat(Object(s["A"])()?"".concat(Object(s["m"])(),"/"):"","lovs/value"),{query:{lovCode:e}}));case 1:case"end":return t.stop()}},t)})),P.apply(this,arguments)}function S(t){return F.apply(this,arguments)}function F(){return F=Object(u["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(o["a"])("".concat(i["k"],"/v1/").concat(Object(s["A"])()?"".concat(Object(s["m"])(),"/"):"","lovs/value/batch"),{query:e}));case 1:case"end":return t.stop()}},t)})),F.apply(this,arguments)}function z(t){return R.apply(this,arguments)}function R(){return R=Object(u["a"])(a.a.mark(function t(e){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(o["a"])("".concat(i["f"],"/hzero/v1/menus/check-permissions"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t)})),R.apply(this,arguments)}function W(t,e,r){return I.apply(this,arguments)}function I(){return I=Object(u["a"])(a.a.mark(function t(e,r,n){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(o["a"])("".concat(i["k"],"/v1/").concat(e,"/prompt/").concat(r,"?promptKey=").concat(n)));case 1:case"end":return t.stop()}},t)})),I.apply(this,arguments)}function M(t){return D.apply(this,arguments)}function D(){return D=Object(u["a"])(a.a.mark(function t(e){var r;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=Object(o["a"])("".concat(i["k"],"/v1/").concat(Object(s["A"])()?"".concat(Object(s["m"])(),"/"):"","lov-view/info"),{method:"GET",query:e}),t.abrupt("return",Object(s["u"])(r));case 2:case"end":return t.stop()}},t)})),D.apply(this,arguments)}function J(t,e){return L.apply(this,arguments)}function L(){return L=Object(u["a"])(a.a.mark(function t(e,r){var n;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(o["a"])(e,{query:r}),t.abrupt("return",Object(s["u"])(n));case 2:case"end":return t.stop()}},t)})),L.apply(this,arguments)}r.d(e,"f",function(){return d}),r.d(e,"p",function(){return b}),r.d(e,"o",function(){return m}),r.d(e,"m",function(){return j}),r.d(e,"e",function(){return v}),r.d(e,"b",function(){return k}),r.d(e,"d",function(){return g}),r.d(e,"c",function(){return E}),r.d(e,"l",function(){return q}),r.d(e,"n",function(){return G}),r.d(e,"g",function(){return U}),r.d(e,"j",function(){return S}),r.d(e,"a",function(){return z}),r.d(e,"k",function(){return W}),r.d(e,"h",function(){return M}),r.d(e,"i",function(){return J})},648:function(t,e,r){"use strict";r.d(e,"a",function(){return j});var n=r(2),a=r.n(n),c=r(131),u=r(134),o=(r(664),r(537)),i=r(604),s=r.n(i),p=r(535),h=r(501),d=r(631),l=r(504);function b(t){if(t.status>=200&&t.status<300)return t;var e=t.statusText,r=new Error(e);throw r.name=t.status,r.response=t,r}function f(t){return m.apply(this,arguments)}function m(){return m=Object(u["a"])(a.a.mark(function t(e){var r;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(501!==e.name){t.next=14;break}return t.prev=1,t.next=4,e.response.json();case 4:r=t.sent,dvaApp._store.dispatch({type:"error/updateState",payload:{normal501:r}}),dvaApp._store.dispatch(p["routerRedux"].push({pathname:"/exception/501"})),t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](1),e;case 12:t.next=15;break;case 14:throw e;case 15:case"end":return t.stop()}},t,null,[[1,9]])})),m.apply(this,arguments)}o["default"].config({placement:"bottomRight"});var O={Pragma:"no-cache","Cache-Control":"no-cache"};function j(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n={credentials:"include",headers:O},a=r.beforeCatch,u=t.startsWith("/api")||t.startsWith("http")?t:"".concat(d["a"]).concat(t),i=Object(c["a"])({},n,e);if("POST"!==i.method&&"PUT"!==i.method&&"DELETE"!==i.method&&"PATCH"!==i.method||(i.body instanceof FormData?i.headers=Object(c["a"])({Accept:"application/json"},i.headers):(i.headers=Object(c["a"])({Accept:"application/json","Content-Type":"application/json; charset=utf-8"},i.headers),i.body=JSON.stringify(i.body))),i.query){var m=i.query;"GET"===i.method&&(m=Object(l["g"])(i.query)),u=Object(l["h"])(u,m)}var y=Object(l["i"])();y&&(i.headers=Object(c["a"])({},i.headers,{Authorization:"bearer ".concat(y)}));var v=s()(u,i).then(b).then(function(t){return 204===t.status?{}:"blob"===i.responseType?t.blob():"text"===i.responseType?t.text():t.json()});return a&&(v=v.catch(a)),v=v.catch(f).catch(function(t){var e=t.name,r=Object(l["w"])("isErrorFlag");if(r||Object(l["G"])("isErrorFlag",!1),401===e){var n=encodeURIComponent(window.location.toString());return y?void j("".concat(d["j"],"/public/token/kickoff"),{method:"POST",query:{access_token:y}}).then(function(t){1===t.kickoff?(dvaApp._store.dispatch(p["routerRedux"].push({pathname:"/public/kickoff"})),Object(l["G"])("redirectUrl",n),Object(l["G"])("isErrorFlag",!1)):(dvaApp._store.dispatch(p["routerRedux"].push({pathname:"/public/unauthorized"})),Object(l["G"])("isErrorFlag",!0),Object(l["G"])("redirectUrl",n))}):(Object(l["E"])(),Object(l["F"])(),-1!==u.indexOf(d["b"])?void(d["m"].includes("?")?(window.location.href="".concat(d["m"],"&redirect_uri=").concat(n),Object(l["G"])("isErrorFlag",!1),Object(l["G"])("redirectUrl",n)):(window.location.href="".concat(d["m"],"?redirect_uri=").concat(n),l["G"].apply("isErrorFlag",!1),Object(l["G"])("redirectUrl",n))):void(r||(dvaApp._store.dispatch(p["routerRedux"].push({pathname:"/public/unauthorized"})),Object(l["G"])("isErrorFlag",!0),Object(l["G"])("redirectUrl",n))))}if(-1!==u.indexOf(d["b"]))return t;"TypeError"!==e?o["default"].error({message:"".concat(e),description:t.message}):o["default"].error({message:h["a"].get("hzero.common.notification.network.typeError").d("\u7f51\u7edc\u8bf7\u6c42\u5f02\u5e38"),description:h["a"].get("hzero.common.notification.typeError.description").d("\u8bf7\u7a0d\u540e\u91cd\u8bd5")})}),v}}}]);