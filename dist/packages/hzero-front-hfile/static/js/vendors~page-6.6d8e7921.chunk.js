(window["webpackJsonppackages_hzero_front_hfile_name_"]=window["webpackJsonppackages_hzero_front_hfile_name_"]||[]).push([[11],{112:function(t,e,n){t.exports={"ant-modal":"ant-modal","ant-modal-wrap":"ant-modal-wrap","ant-modal-title":"ant-modal-title","ant-modal-content":"ant-modal-content","ant-modal-close":"ant-modal-close","ant-modal-close-x":"ant-modal-close-x","ant-modal-header":"ant-modal-header","ant-modal-body":"ant-modal-body","ant-modal-footer":"ant-modal-footer","zoom-enter":"zoom-enter","zoom-appear":"zoom-appear","ant-modal-mask":"ant-modal-mask","ant-modal-mask-hidden":"ant-modal-mask-hidden","ant-modal-open":"ant-modal-open","vertical-center-modal":"vertical-center-modal","ant-confirm":"ant-confirm","ant-confirm-body-wrapper":"ant-confirm-body-wrapper","ant-confirm-body":"ant-confirm-body","ant-confirm-title":"ant-confirm-title","ant-confirm-content":"ant-confirm-content",anticon:"anticon","ant-confirm-btns":"ant-confirm-btns","ant-confirm-error":"ant-confirm-error","ant-confirm-warning":"ant-confirm-warning","ant-confirm-confirm":"ant-confirm-confirm","ant-confirm-info":"ant-confirm-info","ant-confirm-success":"ant-confirm-success"}},169:function(t,e,n){"use strict";n(69),n(237)},174:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",function(){return r})},176:function(t,e,n){"use strict";n.d(e,"a",function(){return y});var r=n(2),a=n.n(r),o=n(10),i=n(11),c=(n(218),n(104)),s=n(162),u=n.n(s),l=n(94),f=n(73),p=n(111),d=n(72);function h(t){if(t.status>=200&&t.status<300)return t;var e=t.statusText,n=new Error(e);throw n.name=t.status,n.response=t,n}function m(t){return b.apply(this,arguments)}function b(){return b=Object(i["a"])(a.a.mark(function t(e){var n;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(501!==e.name){t.next=14;break}return t.prev=1,t.next=4,e.response.json();case 4:n=t.sent,dvaApp._store.dispatch({type:"error/updateState",payload:{normal501:n}}),dvaApp._store.dispatch(l["routerRedux"].push({pathname:"/exception/501"})),t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](1),e;case 12:t.next=15;break;case 14:throw e;case 15:case"end":return t.stop()}},t,null,[[1,9]])})),b.apply(this,arguments)}c["default"].config({placement:"bottomRight"});var v={Pragma:"no-cache","Cache-Control":"no-cache"};function y(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={credentials:"include",headers:v},a=n.beforeCatch,i=t.startsWith("/api")||t.startsWith("http")?t:"".concat(p["a"]).concat(t),s=Object(o["a"])({},r,e);if("POST"!==s.method&&"PUT"!==s.method&&"DELETE"!==s.method&&"PATCH"!==s.method||(s.body instanceof FormData?s.headers=Object(o["a"])({Accept:"application/json"},s.headers):(s.headers=Object(o["a"])({Accept:"application/json","Content-Type":"application/json; charset=utf-8"},s.headers),s.body=JSON.stringify(s.body))),s.query){var b=s.query;"GET"===s.method&&(b=Object(d["b"])(s.query)),i=Object(d["c"])(i,b)}var g=Object(d["d"])();g&&(s.headers=Object(o["a"])({},s.headers,{Authorization:"bearer ".concat(g)}));var O=u()(i,s).then(h).then(function(t){return 204===t.status?{}:"blob"===s.responseType?t.blob():"text"===s.responseType?t.text():t.json()});return a&&(O=O.catch(a)),O=O.catch(m).catch(function(t){var e=t.name,n=Object(d["m"])("isErrorFlag");if(n||Object(d["u"])("isErrorFlag",!1),401===e){var r=encodeURIComponent(window.location.toString());return g?void y("".concat(p["h"],"/public/token/kickoff"),{method:"POST",query:{access_token:g}}).then(function(t){1===t.kickoff?(dvaApp._store.dispatch(l["routerRedux"].push({pathname:"/public/kickoff"})),Object(d["u"])("redirectUrl",r),Object(d["u"])("isErrorFlag",!1)):(dvaApp._store.dispatch(l["routerRedux"].push({pathname:"/public/unauthorized"})),Object(d["u"])("isErrorFlag",!0),Object(d["u"])("redirectUrl",r))}):(Object(d["s"])(),Object(d["t"])(),-1!==i.indexOf(p["b"])?void(p["k"].includes("?")?(window.location.href="".concat(p["k"],"&redirect_uri=").concat(r),Object(d["u"])("isErrorFlag",!1),Object(d["u"])("redirectUrl",r)):(window.location.href="".concat(p["k"],"?redirect_uri=").concat(r),d["u"].apply("isErrorFlag",!1),Object(d["u"])("redirectUrl",r))):void(n||(dvaApp._store.dispatch(l["routerRedux"].push({pathname:"/public/unauthorized"})),Object(d["u"])("isErrorFlag",!0),Object(d["u"])("redirectUrl",r))))}if(-1!==i.indexOf(p["b"]))return t;"TypeError"!==e?c["default"].error({message:"".concat(e),description:t.message}):c["default"].error({message:f["a"].get("hzero.common.notification.network.typeError").d("\u7f51\u7edc\u8bf7\u6c42\u5f02\u5e38"),description:f["a"].get("hzero.common.notification.typeError.description").d("\u8bf7\u7a0d\u540e\u91cd\u8bd5")})}),O}},179:function(t,e,n){var r=n(207),a=n(208),o=n(209),i=n(105),c=n(221),s=n(210),u=n(211),l=4294967295;function f(t,e,n){return n&&"number"!=typeof n&&i(t,e,n)&&(e=n=void 0),n=void 0===n?l:n>>>0,n?(t=u(t),t&&("string"==typeof e||null!=e&&!c(e))&&(e=r(e),!e&&o(t))?a(s(t),0,n):t.split(e,n)):[]}t.exports=f},212:function(t,e,n){"use strict";var r,a,o=n(1),i=n.n(o),c=n(88),s=n.n(c),u=(n(106),n(109)),l=(n(83),n(84)),f=n(12),p=(n(85),n(86)),d=n(64),h=n(65),m=n(68),b=n(66),v=n(67),y=n(77),g=n.n(y),O=n(14),w=n.n(O),j=n(179),k=n.n(j),_=n(94),E=n(73),x=Object(_["withRouter"])((a=function(t){function e(){var t,n;Object(d["a"])(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=Object(m["a"])(this,(t=Object(b["a"])(e)).call.apply(t,[this].concat(a))),n.onBackBtnClick=function(){var t=n.props,e=t.backPath,r=t.history,a=t.isChange,o=t.onBack;w()(e)?a?p["default"].confirm({title:E["a"].get("hzero.common.message.confirm.giveUpTip").d("\u4f60\u6709\u4fee\u6539\u672a\u4fdd\u5b58\uff0c\u662f\u5426\u786e\u8ba4\u79bb\u5f00\uff1f"),onOk:function(){n.linkToChange(n.props.backPath),g()(o)&&o()}}):(n.linkToChange(n.props.backPath),g()(o)&&o()):r.goBack()},n.linkToChange=function(t){var e=n.props.history,r=k()(t,"?"),a=Object(f["a"])(r,2),o=a[0],i=a[1];e.push({pathname:o,search:i,state:{_back:-1}})},n}return Object(v["a"])(e,t),Object(h["a"])(e,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.backPath,r=t.backTooltip,a=void 0===r?E["a"].get("hzero.common.button.back").d("\u8fd4\u56de"):r,o=t.children,c="";return n&&(c=i.a.createElement("div",{key:"page-head-back-btn",className:"page-head-back-btn"},i.a.createElement(u["default"],{title:a,placement:"bottom",getTooltipContainer:function(t){return t}},i.a.createElement(l["default"],{type:"arrow-left",className:"back-btn",onClick:this.onBackBtnClick})))),i.a.createElement("div",{className:"page-head"},c,e&&i.a.createElement("span",{key:"page-head-title",className:"page-head-title"},e),i.a.createElement("div",{key:"page-head-operator",className:"page-head-operator"},o))}}]),e}(o["Component"]),r=a))||r,S=function(t){var e=t.title,n=t.description,r=t.children,a=t.style,o=t.wrapperStyle,c=t.wrapperClassName,u=t.className,l=t.noCard,f=void 0!==l&&l,p=s()("page-content-wrap",c,{"page-content-wrap-no-card":f}),d=s()("page-content",u);return i.a.createElement("div",{className:p,style:o},i.a.createElement("div",{className:d,style:a},e||n?i.a.createElement("div",{className:"page-content-header",key:"page-content-header"},i.a.createElement("div",{className:"title"},e),i.a.createElement("div",{className:"description"},n)):null,i.a.createElement(i.a.Fragment,{key:"page-content-content"},r)))},T=S;n.d(e,"b",function(){return x}),n.d(e,"a",function(){return T})},223:function(t,e,n){"use strict";var r=n(256)();t.exports=function(t){return t!==r&&null!==t}},230:function(t,e,n){"use strict";var r=void 0;t.exports=function(t){return t!==r&&null!==t}},237:function(t,e,n){t.exports={"ant-spin":"ant-spin","ant-spin-spinning":"ant-spin-spinning","ant-spin-nested-loading":"ant-spin-nested-loading","ant-spin-dot":"ant-spin-dot","ant-spin-text":"ant-spin-text","ant-spin-show-text":"ant-spin-show-text","ant-spin-sm":"ant-spin-sm","ant-spin-lg":"ant-spin-lg","ant-spin-container":"ant-spin-container","ant-spin-blur":"ant-spin-blur","ant-spin-tip":"ant-spin-tip",antSpinMove:"antSpinMove","ant-spin-dot-spin":"ant-spin-dot-spin",antRotate:"antRotate"}},239:function(t,e,n){"use strict";n.d(e,"a",function(){return S}),n.d(e,"b",function(){return x});var r=n(10),a=(n(12),n(179),n(240),n(14)),o=n.n(a),i=n(226),c=n.n(i),s=(n(100),n(80),n(235)),u=n.n(s),l=(n(242),n(94)),f=(n(236),n(244)),p=n.n(f),d=n(228),h=n.n(d),m=(n(72),new p.a);new Map;function b(){var t=window.dvaApp._store.getState(),e=t.global;e=void 0===e?{}:e;var n=e.tabs,r=void 0===n?[]:n;return r}function v(t){var e=b(),n=null;return u()(e,function(e){if(e.key===t)return n=e,!1}),n}function y(){var t=window.dvaApp._store.getState(),e=t.global;e=void 0===e?{}:e;var n=e.activeTabKey;return n}function g(t){j(t),w(t.path,t.search)}function O(t){k(t),w(t.path,t.search)}function w(t,e){o()(t)&&window.dvaApp._store.dispatch(l["routerRedux"].push({pathname:t,search:e}))}function j(t){window.dvaApp._store.dispatch({type:"global/addTab",payload:{newTab:t}})}function k(t){window.dvaApp._store.dispatch({type:"global/replaceTab",payload:{newTab:t,tab:t}})}function _(t){var e=t||"/",n="",r="",a=e.indexOf("#");-1!==a&&(r=e.substr(a),e=e.substr(0,a));var o=e.indexOf("?");return-1!==o&&(n=e.substr(o),e=e.substr(0,o)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}function E(t){return c()(t)?t:h.a.parse(t)}function x(t){var e=t.key,n=t.path,a=void 0===n?e:n,o=t.title,i=t.icon,c=void 0===i?null:i,s=t.closable,u=void 0===s||s,l=t.search,f=t.type,p=y(),d=_(e),m=v(d.pathname),b=_(a),w=h.a.stringify(Object.assign(E(l),h.a.parse(b.search)));null===m?g({key:d.pathname,path:b.pathname,title:o,icon:c,closable:u,search:w,type:f}):p===m.key?k(m):O(Object(r["a"])({},m,t,{key:d.pathname,path:b.pathname,search:void 0===l?h.a.stringify(Object.assign({},E(m.search),h.a.parse(b.search))):w}))}function S(t){o()(t)&&window.dvaApp._store.dispatch({type:"global/removeTab",payload:t}).then(function(e){m.emit("close",{tabKey:t}),x({key:e})})}window.openTab=x,window.closeTab=S},240:function(t,e,n){var r=n(241),a=n(105),o=n(229);function i(t,e,n){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&a(t,e,n)?(e=0,n=i):(e=null==e?0:o(e),n=void 0===n?i:o(n)),r(t,e,n)):[]}t.exports=i},242:function(t,e,n){var r=n(243),a=n(108),o=n(229),i=Math.max;function c(t,e,n){var c=null==t?0:t.length;if(!c)return-1;var s=null==n?0:o(n);return s<0&&(s=i(c+s,0)),r(t,a(e,3),s)}t.exports=c},244:function(t,e,n){"use strict";var r,a,o,i,c,s,u,l=n(245),f=n(262),p=Function.prototype.apply,d=Function.prototype.call,h=Object.create,m=Object.defineProperty,b=Object.defineProperties,v=Object.prototype.hasOwnProperty,y={configurable:!0,enumerable:!1,writable:!0};r=function(t,e){var n;return f(e),v.call(this,"__ee__")?n=this.__ee__:(n=y.value=h(null),m(this,"__ee__",y),y.value=null),n[t]?"object"===typeof n[t]?n[t].push(e):n[t]=[n[t],e]:n[t]=e,this},a=function(t,e){var n,a;return f(e),a=this,r.call(this,t,n=function(){o.call(a,t,n),p.call(e,this,arguments)}),n.__eeOnceListener__=e,this},o=function(t,e){var n,r,a,o;if(f(e),!v.call(this,"__ee__"))return this;if(n=this.__ee__,!n[t])return this;if(r=n[t],"object"===typeof r)for(o=0;a=r[o];++o)a!==e&&a.__eeOnceListener__!==e||(2===r.length?n[t]=r[o?0:1]:r.splice(o,1));else r!==e&&r.__eeOnceListener__!==e||delete n[t];return this},i=function(t){var e,n,r,a,o;if(v.call(this,"__ee__")&&(a=this.__ee__[t],a))if("object"===typeof a){for(n=arguments.length,o=new Array(n-1),e=1;e<n;++e)o[e-1]=arguments[e];for(a=a.slice(),e=0;r=a[e];++e)p.call(r,this,o)}else switch(arguments.length){case 1:d.call(a,this);break;case 2:d.call(a,this,arguments[1]);break;case 3:d.call(a,this,arguments[1],arguments[2]);break;default:for(n=arguments.length,o=new Array(n-1),e=1;e<n;++e)o[e-1]=arguments[e];p.call(a,this,o)}},c={on:r,once:a,off:o,emit:i},s={on:l(r),once:l(a),off:l(o),emit:l(i)},u=b({},s),t.exports=e=function(t){return null==t?h(u):b(Object(t),s)},e.methods=c},245:function(t,e,n){"use strict";var r=n(230),a=n(246),o=n(250),i=n(258),c=n(259),s=t.exports=function(t,e){var n,a,s,u,l;return arguments.length<2||"string"!==typeof t?(u=e,e=t,t=null):u=arguments[2],r(t)?(n=c.call(t,"c"),a=c.call(t,"e"),s=c.call(t,"w")):(n=s=!0,a=!1),l={value:e,configurable:n,enumerable:a,writable:s},u?o(i(u),l):l};s.gs=function(t,e,n){var s,u,l,f;return"string"!==typeof t?(l=n,n=e,e=t,t=null):l=arguments[3],r(e)?a(e)?r(n)?a(n)||(l=n,n=void 0):n=void 0:(l=e,e=n=void 0):e=void 0,r(t)?(s=c.call(t,"c"),u=c.call(t,"e")):(s=!0,u=!1),f={get:e,set:n,configurable:s,enumerable:u},l?o(i(l),f):f}},246:function(t,e,n){"use strict";var r=n(247),a=/^\s*class[\s{\/}]/,o=Function.prototype.toString;t.exports=function(t){return!!r(t)&&!a.test(o.call(t))}},247:function(t,e,n){"use strict";var r=n(248);t.exports=function(t){if("function"!==typeof t)return!1;if(!hasOwnProperty.call(t,"length"))return!1;try{if("number"!==typeof t.length)return!1;if("function"!==typeof t.call)return!1;if("function"!==typeof t.apply)return!1}catch(e){return!1}return!r(t)}},248:function(t,e,n){"use strict";var r=n(249);t.exports=function(t){if(!r(t))return!1;try{return!!t.constructor&&t.constructor.prototype===t}catch(e){return!1}}},249:function(t,e,n){"use strict";var r=n(230),a={object:!0,function:!0,undefined:!0};t.exports=function(t){return!!r(t)&&hasOwnProperty.call(a,typeof t)}},250:function(t,e,n){"use strict";t.exports=n(251)()?Object.assign:n(252)},251:function(t,e,n){"use strict";t.exports=function(){var t,e=Object.assign;return"function"===typeof e&&(t={foo:"raz"},e(t,{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}},252:function(t,e,n){"use strict";var r=n(253),a=n(257),o=Math.max;t.exports=function(t,e){var n,i,c,s=o(arguments.length,2);for(t=Object(a(t)),c=function(r){try{t[r]=e[r]}catch(a){n||(n=a)}},i=1;i<s;++i)e=arguments[i],r(e).forEach(c);if(void 0!==n)throw n;return t}},253:function(t,e,n){"use strict";t.exports=n(254)()?Object.keys:n(255)},254:function(t,e,n){"use strict";t.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}}},255:function(t,e,n){"use strict";var r=n(223),a=Object.keys;t.exports=function(t){return a(r(t)?Object(t):t)}},256:function(t,e,n){"use strict";t.exports=function(){}},257:function(t,e,n){"use strict";var r=n(223);t.exports=function(t){if(!r(t))throw new TypeError("Cannot use null or undefined");return t}},258:function(t,e,n){"use strict";var r=n(223),a=Array.prototype.forEach,o=Object.create,i=function(t,e){var n;for(n in t)e[n]=t[n]};t.exports=function(t){var e=o(null);return a.call(arguments,function(t){r(t)&&i(Object(t),e)}),e}},259:function(t,e,n){"use strict";t.exports=n(260)()?String.prototype.contains:n(261)},260:function(t,e,n){"use strict";var r="razdwatrzy";t.exports=function(){return"function"===typeof r.contains&&(!0===r.contains("dwa")&&!1===r.contains("foo"))}},261:function(t,e,n){"use strict";var r=String.prototype.indexOf;t.exports=function(t){return r.call(this,t,arguments[1])>-1}},262:function(t,e,n){"use strict";t.exports=function(t){if("function"!==typeof t)throw new TypeError(t+" is not a function");return t}},64:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return r})},65:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",function(){return a})},66:function(t,e,n){"use strict";function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}n.d(e,"a",function(){return r})},67:function(t,e,n){"use strict";function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",function(){return a})},68:function(t,e,n){"use strict";function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var a=n(174);function o(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(a["a"])(t):e}n.d(e,"a",function(){return o})},71:function(t,e,n){"use strict";function r(t,e,n,r,a){var o={};return Object.keys(r).forEach(function(t){o[t]=r[t]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(t,e,n)||n},o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(t,e,o),o=null),o}n.d(e,"a",function(){return r})},85:function(t,e,n){"use strict";n(69),n(112),n(74)},9:function(t,e,n){"use strict";n.r(e);n(74);var r,a,o,i,c,s,u,l=n(76),f=n(64),p=n(65),d=n(68),h=n(66),m=n(67),b=n(71),v=n(1),y=n.n(v),g=n(130),O=n(70),w=(n(169),n(102)),j=n(2),k=n.n(j),_=n(11),E=n(87),x=n.n(E),S=n(176),T=n(73),z=n(111),C=n(72),R=(r=Object(O["Debounce"])(500),a=Object(O["Bind"])(),o=function(t){function e(t){var n;return Object(f["a"])(this,e),n=Object(d["a"])(this,Object(h["a"])(e).call(this,t)),n.state={loaded:!1,configErrorMessages:null,saving:!1},n.iframeRef=y.a.createRef(),n}return Object(m["a"])(e,t),Object(p["a"])(e,[{key:"componentDidMount",value:function(){this.loadOnlyOfficeData()}},{key:"componentWillUnmount",value:function(){this.triggerDocumentSave()}},{key:"triggerDocumentSave",value:function(){var t=Object(_["a"])(k.a.mark(function t(e){var n,r=this;return k.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=this.state.saving,!n){t.next=3;break}return t.abrupt("return");case 3:this.iframeRef.current&&(this.iframeRef.current.srcdoc="",this.setState({saving:!0}),setTimeout(function(){if(r.iframeRef.current){var t=r.state.srcdoc;r.iframeRef.current.srcdoc=t,r.setState({saving:!1},function(){e()})}},100));case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"loadOnlyOfficeData",value:function(){var t=this;if(this.checkConfigError()){var e=this.props,n=e.organizationId,r=void 0===n?Object(C["g"])():n,a=e.bucketName,o=e.storageCode,i=e.permission,c=e.url;Object(S["a"])("".concat(z["c"],"/v1/").concat(r,"/only-office/url"),{method:"POST",body:{bucketName:a,storageCode:o,permission:i,url:c},responseType:"text"}).then(function(e){"string"===typeof e&&t.setState({loaded:!0,srcdoc:e})})}}},{key:"checkConfigError",value:function(){var t=this.props,e=t.bucketName,n=t.permission,r=t.url,a=[];if(x()(e)&&a.push(T["a"].get("hzero.common.validation.notNull",{name:"bucketName"})),x()(n)&&a.push(T["a"].get("hzero.common.validation.notNull",{name:"permission"})),x()(r)&&a.push(T["a"].get("hzero.common.validation.notNull",{name:"url"})),a.length>0)return this.setState({configErrorMessages:a}),!1;var o=this.state.configErrors;return o&&this.setState({configErrorMessages:null}),!0}},{key:"render",value:function(){var t,e=this.props,n=e.width,r=e.height,a=e.url,o=this.state,i=o.loaded,c=o.srcdoc,s=o.configErrorMessages;return t=null!==s?y.a.createElement("div",{style:{width:n,height:r}},y.a.createElement("ul",null,s.map(function(t){return y.a.createElement("li",{key:t},t)}))):i?y.a.createElement("iframe",{ref:this.iframeRef,title:a,width:n,height:r,srcDoc:c}):y.a.createElement(w["default"],{width:n,height:r,spinning:!0}),t}}]),e}(y.a.PureComponent),Object(b["a"])(o.prototype,"triggerDocumentSave",[r,a],Object.getOwnPropertyDescriptor(o.prototype,"triggerDocumentSave"),o.prototype),o),P=n(212),A=n(239);n.d(e,"default",function(){return N});var N=(i=Object(g["connect"])(function(t){var e=t.fileAggregate,n=e.detailWordEditor;return{detailWordEditor:n}}),c=Object(O["Bind"])(),i((u=function(t){function e(t){var n;Object(f["a"])(this,e),n=Object(d["a"])(this,Object(h["a"])(e).call(this,t));var r=t.match.params.fileId,a=t.detailWordEditor,o=void 0===a?{}:a,i=o[r],c=void 0===i?{}:i;return n.onlyOfficeEditorRef=y.a.createRef(),n.state={saving:!1,onlyOfficeEditorConfig:{url:c.fileUrl,organizationId:c.tenantId,bucketName:c.bucketName,bucketDirectory:c.directory,storageCode:c.storageCode,autoFocus:!0,permission:{changeReview:!0,comment:!1,dealWithReview:!0,dealWithReviewOnly:!1,download:!0,edit:!0,print:!0,review:!0}}},n}return Object(m["a"])(e,t),Object(p["a"])(e,[{key:"handleTriggerOnlyOfficeEditorSave",value:function(){var t=this;this.onlyOfficeEditorRef.current&&(this.setState({saving:!0}),this.onlyOfficeEditorRef.current.triggerDocumentSave(function(){t.setState({saving:!1});var e=t.props.match.params.fileId;Object(A["a"])("/hfile/file-aggregate/word-editor/".concat(e))}))}},{key:"render",value:function(){var t=this.state,e=t.saving,n=void 0!==e&&e,r=t.onlyOfficeEditorConfig,a=void 0===r?{}:r;return y.a.createElement(y.a.Fragment,null,y.a.createElement(P["b"],null,y.a.createElement(l["default"],{loading:n,onClick:this.handleTriggerOnlyOfficeEditorSave},T["a"].get("hfile.fileAggregate.view.button.saveAndClose").d("\u4fdd\u5b58\u5e76\u5173\u95ed"))),y.a.createElement(P["a"],{style:{height:"100%"}},y.a.createElement(R,Object.assign({},a,{width:"100%",height:"100%",ref:this.onlyOfficeEditorRef}))))}}]),e}(v["Component"]),Object(b["a"])(u.prototype,"handleTriggerOnlyOfficeEditorSave",[c],Object.getOwnPropertyDescriptor(u.prototype,"handleTriggerOnlyOfficeEditorSave"),u.prototype),s=u))||s)}}]);