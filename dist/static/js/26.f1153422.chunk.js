(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{1328:function(e,t,n){"use strict";n.r(t);var r=n(48),a=n(49),o=n(53),c=n(52),i=n(54),u=(n(1479),n(1394)),l=n(229),s=n.n(l),f=n(0),d=n.n(f),h=n(1399),p=n.n(h),m=n(84),v=n(40),y=n(323),b=n.n(y),g=n(1480),w=n(5),k=n(96),j=(n(1329),u["default"].Content),E=function(){return null},O={},R={display:"none"},x=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(t&&t.children){for(var r=0;r<t.children.length;r++)e(t.children[r],n);return n}if(t&&t.path){var a=t.path.split("/");a[0]||(a=a.slice(1,a.length));for(var o="",c=function(e){o+="/".concat(a[e]);var t=o,r="".concat(o,"/").concat(a[e+1]),c=n.some(function(e){return e.from===t});c||n.push({from:t,to:r})},i=0;i<a.length-1;i++)c(i)}},D=function(e){function t(){var e,n;Object(r["a"])(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return n=Object(o["a"])(this,(e=Object(c["a"])(t)).call.apply(e,[this].concat(i))),n.getBashRedirect=function(){var e=new URL(window.location.href),t=e.searchParams.get("redirect");if(!t){var r=n.props.routerData,a=void 0===r?{}:r,o=Object.keys(a).find(function(e){return"/"!==e});return o}return e.searchParams.delete("redirect"),window.history.replaceState(null,"redirect",e.href),t},n}return Object(i["a"])(t,e),Object(a["a"])(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"global/publicLazyInit"}).then(function(){Object(k["k"])()});var t=Object(w["g"])();t&&"zh_CN"!==t&&(document.body.className="global-layout");var n=document.querySelector("#loader-wrapper");n&&(document.body.removeChild(n),b.a.setDefaultLoadingComponent(function(){return d.a.createElement(g["a"],null)}))}},{key:"render",value:function(){var e=this.props,t=e.routerData,n=e.menu,r=void 0===n?[]:n,a=e.activeTabKey,o=e.tabs,c=e.currentUser,i=void 0===c?{}:c,l=[{from:"/",to:"/workplace"}];r.forEach(function(e){x(e,l)});var f=this.getBashRedirect(),h=d.a.createElement(u["default"],{style:{height:"100vh",overflow:"hidden"}},d.a.createElement(v["Switch"],null,s()(l,function(e){return d.a.createElement(v["Redirect"],{key:e.from,exact:!0,from:e.from,to:e.to})}),f?d.a.createElement(v["Redirect"],{exact:!0,from:"/",to:f}):null,0===r.length?null:d.a.createElement(v["Route"],{render:E})),s()(o,function(e){return d.a.createElement(j,{key:e.key,className:"page-container",style:a===e.key?O:R},Object(w["o"])(e.key,t).map(function(e){return d.a.createElement(v["Route"],{key:e.key,path:e.path,exact:e.exact,component:e.component})}))}));return d.a.createElement(p.a,{title:i.title||""},h)}}]),t}(d.a.Component);t["default"]=Object(m["connect"])(function(e){var t=e.user,n=void 0===t?{}:t,r=e.global,a=void 0===r?{}:r;return{currentUser:n.currentUser,menu:a.menu,routerData:a.routerData,activeTabKey:a.activeTabKey,tabs:a.tabs,language:a.language}})(D)},1394:function(e,t,n){e.exports=n(3)(1151)},1400:function(e,t,n){e.exports=n(3)(77)}}]);