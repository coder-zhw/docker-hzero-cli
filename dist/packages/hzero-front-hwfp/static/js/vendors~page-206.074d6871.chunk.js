(window["webpackJsonppackages_hzero_front_hwfp_name_"]=window["webpackJsonppackages_hzero_front_hwfp_name_"]||[]).push([[105],{154:function(e,t,r){"use strict";function o(e,t,r,o,a){var n={};return Object.keys(o).forEach(function(e){n[e]=o[e]}),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=r.slice().reverse().reduce(function(r,o){return o(e,t,r)||r},n),a&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(a):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(e,t,n),n=null),n}r.d(t,"a",function(){return o})},253:function(e,t,r){"use strict";var o=r(29),a=(r(238),r(167)),n=r(172),i=r(146);function c(e){var t=e||{},r=t.message,c=t.description,s=Object(n["a"])(t,["message","description"]);a["default"].success(Object(o["a"])({message:r||i["a"].get("hzero.common.notification.success").d("\u64cd\u4f5c\u6210\u529f"),description:c,duration:2.5,className:"success"},s))}function s(e){var t=e||{},r=t.message,c=t.description,s=Object(n["a"])(t,["message","description"]);a["default"].error(Object(o["a"])({message:r||i["a"].get("hzero.common.notification.error").d("\u64cd\u4f5c\u5931\u8d25"),description:c,duration:2.5,className:"error"},s))}function u(e){var t=e||{},r=t.message,c=t.description,s=Object(n["a"])(t,["message","description"]);a["default"].warning(Object(o["a"])({message:r||i["a"].get("hzero.common.notification.warn").d("\u64cd\u4f5c\u5f02\u5e38"),description:c,duration:2.5,className:"warn"},s))}function p(e){var t=e||{},r=t.message,i=t.description,c=Object(n["a"])(t,["message","description"]);a["default"].info(Object(o["a"])({message:r,description:i,duration:2.5,className:"info"},c))}t["a"]={success:c,error:s,warning:u,info:p}},3:function(e,t,r){"use strict";r.r(t);var o,a,n,i,c,s,u,p,d,l,f,y,m,b=r(29),v=r(147),h=r(148),O=r(150),j=r(149),g=r(151),w=r(1),k=r.n(w),P=r(321),z=r(142),E=r(146),C=r(154),B=r(152),D=r(303),M=(a=Object(B["Bind"])(),n=Object(B["Bind"])(),i=Object(B["Bind"])(),c=Object(B["Bind"])(),s=Object(B["Bind"])(),u=Object(B["Bind"])(),p=Object(B["Bind"])(),d=Object(B["Bind"])(),l=Object(B["Bind"])(),f=Object(B["Bind"])(),o=Symbol.iterator,m=function(){function e(t,r){var a=this;Object(v["a"])(this,e),this.module=void 0,this.feature=void 0,this[o]=function(){return D["a"][Symbol.iterator]({module:a.module,feature:a.feature})},this.feature=r,this.module=t}return Object(h["a"])(e,[{key:"get",value:function(e){return D["a"].get({module:this.module,feature:this.feature,key:e})}},{key:"set",value:function(e,t){return D["a"].set({module:this.module,feature:this.feature,key:e,data:t}),this}},{key:"clear",value:function(){return D["a"].clear({module:this.module,feature:this.feature})}},{key:"delete",value:function(e){return D["a"].delete({module:this.module,feature:this.feature,key:e})}},{key:"entries",value:function(){return D["a"].entries({module:this.module,feature:this.feature})}},{key:"forEach",value:function(e,t){return D["a"].forEach({module:this.module,feature:this.feature,fn:e,thisArg:t})}},{key:"has",value:function(e){return D["a"].has({module:this.module,feature:this.feature,key:e})}},{key:"keys",value:function(){return D["a"].keys({module:this.module,feature:this.feature})}},{key:"values",value:function(){return D["a"].values({module:this.module,feature:this.feature})}},{key:"size",value:function(){return D["a"].size({module:this.module,feature:this.feature})}}]),e}(),y=m,Object(C["a"])(y.prototype,"get",[a],Object.getOwnPropertyDescriptor(y.prototype,"get"),y.prototype),Object(C["a"])(y.prototype,"set",[n],Object.getOwnPropertyDescriptor(y.prototype,"set"),y.prototype),Object(C["a"])(y.prototype,"clear",[i],Object.getOwnPropertyDescriptor(y.prototype,"clear"),y.prototype),Object(C["a"])(y.prototype,"delete",[c],Object.getOwnPropertyDescriptor(y.prototype,"delete"),y.prototype),Object(C["a"])(y.prototype,"entries",[s],Object.getOwnPropertyDescriptor(y.prototype,"entries"),y.prototype),Object(C["a"])(y.prototype,"forEach",[u],Object.getOwnPropertyDescriptor(y.prototype,"forEach"),y.prototype),Object(C["a"])(y.prototype,"has",[p],Object.getOwnPropertyDescriptor(y.prototype,"has"),y.prototype),Object(C["a"])(y.prototype,"keys",[d],Object.getOwnPropertyDescriptor(y.prototype,"keys"),y.prototype),Object(C["a"])(y.prototype,"values",[l],Object.getOwnPropertyDescriptor(y.prototype,"values"),y.prototype),Object(C["a"])(y.prototype,"size",[f],Object.getOwnPropertyDescriptor(y.prototype,"size"),y.prototype),y);function F(e,t){return new M(e,t)}function _(e){var t=e.componentCode;return k.a.createElement("div",void 0,E["a"].get("hzero.common.error.message.sharedComponentError",{componentCode:t}).d("shared <".concat(t," /> \u7ec4\u4ef6\u52a0\u8f7d\u5931\u8d25")))}function L(e){var t=e.componentCode;return k.a.createElement("div",void 0,E["a"].get("hzero.common.error.message.sharedComponentLoading",{componentCode:t}).d("shared <".concat(t," /> \u7ec4\u4ef6\u52a0\u8f7d\u4e2d")))}function K(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"component",r=arguments.length>2?arguments[2]:void 0,o=r||{},a=o.NotFound,n=void 0===a?_:a,i=o.Loading,c=void 0===i?L:i,s=F(e,t),u=s.set,p=s.get;return{setComponent:function(e,t){return u(e,t)},SharedComponent:function(e){var t=e.componentCode,r=e.componentProps,o=k.a.useMemo(function(){return k.a.lazy(p(t)||function(){return Promise.resolve({__esModule:!0,default:function(){return k.a.createElement(n,{componentCode:t})}})})},[]);return k.a.createElement(k.a.Suspense,{fallback:k.a.createElement(c,{componentCode:t})},k.a.createElement(o,r))}}}function A(e){var t=e.componentCode;return k.a.createElement("div",null,E["a"].get("hzero.common.error.message.lowCodeComponentLoadError",{componentCode:t}).d("low-code <".concat(t," /> \u7ec4\u4ef6\u52a0\u8f7d\u5931\u8d25")))}function S(){return null}var x=K("hlcd","component",{NotFound:A,Loading:S}),N=(x.setComponent,x.SharedComponent),T=function(e){function t(){return Object(v["a"])(this,t),Object(O["a"])(this,Object(j["a"])(t).apply(this,arguments))}return Object(g["a"])(t,e),Object(h["a"])(t,[{key:"render",value:function(){var e=Object(z["h"])(),t=e.level,r=void 0===t?"site":t,o=Object(z["i"])(),a=o.tenantId,n=void 0===a?0:a,i=o.tenantName,c=Object(z["f"])(),s=c.replace("-","_"),u={currentLanguage:s,currentMenuType:{type:r,organizationId:n,id:n,name:i}};return k.a.createElement(P["Provider"],{AppState:u},k.a.createElement(N,{componentCode:"ModelProvider",componentProps:this.props}))}}]),t}(w["Component"]);r.d(t,"default",function(){return I});var I=function(e){function t(){return Object(v["a"])(this,t),Object(O["a"])(this,Object(j["a"])(t).apply(this,arguments))}return Object(g["a"])(t,e),Object(h["a"])(t,[{key:"render",value:function(){var e=this.props,t=e.code,r=e.type,o=void 0===r?"form":r,a=e.params,n=void 0===a?{}:a,i=e.id,c=e.onLoad;return k.a.createElement(T,{code:t,type:o,defaultParams:Object(b["a"])({},n,{key:i}),onLoad:c})}}]),t}(w["Component"])},303:function(e,t,r){"use strict";r.d(t,"a",function(){return w});var o,a,n,i,c,s,u,p,d,l,f,y,m,b=r(147),v=r(148),h=r(154),O=r(152),j=new Map,g=(a=Object(O["Bind"])(),n=Object(O["Bind"])(),i=Object(O["Bind"])(),c=Object(O["Bind"])(),s=Object(O["Bind"])(),u=Object(O["Bind"])(),p=Object(O["Bind"])(),d=Object(O["Bind"])(),l=Object(O["Bind"])(),f=Object(O["Bind"])(),o=Symbol.iterator,m=function(){function e(){Object(b["a"])(this,e),this[o]=function(e){var t,r=e.module,o=e.feature;if(j.has(r)){var a=j.get(r);a.has(o)?t=a.get(o):(t=new Map,a.set(o,t))}else{t=new Map;var n=new Map;j.set(r,n),n.set(o,t)}return t[Symbol.iterator]()}}return Object(v["a"])(e,[{key:"clear",value:function(e){var t=e.module,r=e.feature;if(j.has(t)){var o=j.get(t);o.has(r)&&o.get(r).clear()}}},{key:"delete",value:function(e){var t=e.module,r=e.feature,o=e.key;if(j.has(t)){var a=j.get(t);if(a.has(r)){var n=a.get(r);return n.delete(o)}}return!1}},{key:"entries",value:function(e){var t,r=e.module,o=e.feature;if(j.has(r)){var a=j.get(r);a.has(o)?t=a.get(o):(t=new Map,a.set(o,t))}else{t=new Map;var n=new Map;j.set(r,n),n.set(o,t)}return t.entries()}},{key:"forEach",value:function(e){var t=e.module,r=e.feature,o=e.fn,a=e.thisArg;if(j.has(t)){var n=j.get(t);n.has(r)&&n.get(r).forEach(o,a)}}},{key:"get",value:function(e){var t=e.module,r=e.feature,o=e.key;if(j.has(t)){var a=j.get(t);if(a.has(r)){var n=a.get(r);if(n.has(o))return n.get(o)}}}},{key:"has",value:function(e){var t=e.module,r=e.feature,o=e.key;if(j.has(t)){var a=j.get(t);if(a.has(r)){var n=a.get(r);return n.has(o)}}return!1}},{key:"keys",value:function(e){var t,r=e.module,o=e.feature;if(j.has(r)){var a=j.get(r);a.has(o)?t=a.get(o):(t=new Map,a.set(o,t))}else{t=new Map;var n=new Map;j.set(r,n),n.set(o,t)}return t.keys()}},{key:"set",value:function(e){var t,r=e.module,o=e.feature,a=e.key,n=e.data;if(j.has(r)){var i=j.get(r);i.has(o)?t=i.get(o):(t=new Map,i.set(o,t))}else{var c=new Map;j.set(r,c),t=new Map,c.set(o,t)}return t.set(a,n),this}},{key:"values",value:function(e){var t,r=e.module,o=e.feature;if(j.has(r)){var a=j.get(r);a.has(o)?t=a.get(o):(t=new Map,a.set(o,t))}else{t=new Map;var n=new Map;j.set(r,n),n.set(o,t)}return t.values()}},{key:"size",value:function(e){var t=e.module,r=e.feature;if(j.has(t)){var o=j.get(t);o.has(r)&&o.get(r).size()}return 0}}]),e}(),y=m,Object(h["a"])(y.prototype,"clear",[a],Object.getOwnPropertyDescriptor(y.prototype,"clear"),y.prototype),Object(h["a"])(y.prototype,"delete",[n],Object.getOwnPropertyDescriptor(y.prototype,"delete"),y.prototype),Object(h["a"])(y.prototype,"entries",[i],Object.getOwnPropertyDescriptor(y.prototype,"entries"),y.prototype),Object(h["a"])(y.prototype,"forEach",[c],Object.getOwnPropertyDescriptor(y.prototype,"forEach"),y.prototype),Object(h["a"])(y.prototype,"get",[s],Object.getOwnPropertyDescriptor(y.prototype,"get"),y.prototype),Object(h["a"])(y.prototype,"has",[u],Object.getOwnPropertyDescriptor(y.prototype,"has"),y.prototype),Object(h["a"])(y.prototype,"keys",[p],Object.getOwnPropertyDescriptor(y.prototype,"keys"),y.prototype),Object(h["a"])(y.prototype,"set",[d],Object.getOwnPropertyDescriptor(y.prototype,"set"),y.prototype),Object(h["a"])(y.prototype,"values",[l],Object.getOwnPropertyDescriptor(y.prototype,"values"),y.prototype),Object(h["a"])(y.prototype,"size",[f],Object.getOwnPropertyDescriptor(y.prototype,"size"),y.prototype),y),w=new g},36:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return j});var o,a,n,i,c=r(147),s=r(148),u=r(150),p=r(149),d=r(151),l=r(154),f=r(1),y=r.n(f),m=r(152),b=r(146),v=r(253),h=r(3),O=r(4),j=(o=Object(m["Bind"])(),a=Object(m["Bind"])(),i=function(e){function t(){var e,r;Object(c["a"])(this,t);for(var o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];return r=Object(u["a"])(this,(e=Object(p["a"])(t)).call.apply(e,[this].concat(a))),r.approveForm=void 0,r.formType="",r}return Object(d["a"])(t,e),Object(s["a"])(t,[{key:"submit",value:function(e){var t=this;switch(this.formType){case"include":var r=this.approveForm;r&&this.approveForm(e).then(function(e){var r=t.props.onAction;r(e).then(function(e){if(e)return e;v["a"].error({message:b["a"].get("hwfp.approveForm.view.message.notPass").d("\u5ba1\u6279\u8868\u5355\u4e0d\u901a\u8fc7")})})},function(e){return v["a"].error({message:b["a"].get("hwfp.approveForm.view.message.notPass").d("\u5ba1\u6279\u8868\u5355\u4e0d\u901a\u8fc7")}),e});break;case"http":case"https":case"relative":var o=this.approveForm,a={approveResult:e};o&&o.contentWindow.postMessage(JSON.stringify(a),"*"),this.props.onAction(a);break;case"low-code":var n=this.approveForm;n&&n.submit().then(function(e){if(e){var r=t.props.onAction;r(e)}});break;default:break}}},{key:"handleLoad",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,r=t.detail,o=t.disabled,a=void 0!==o&&o,n=r.formKey,i=void 0===n?"":n,c=r.processInstance;c=void 0===c?{}:c;var s=c.businessKey,u=void 0===s?"":s,p=null;if(i)switch(this.formType=i.substring(0,i.indexOf("://")),this.formType){case"http":case"https":p=i.indexOf("?")>0?"".concat(i,"&businessKey=").concat(u||r.businessKey,"&disabled=").concat(a):"".concat(i,"?businessKey=").concat(u||r.businessKey,"&disabled=").concat(a);break;case"relative":p=i.indexOf("?")>0?"//".concat(window.location.host).concat("/").concat(i.substr(11),"&businessKey=").concat(u||r.businessKey,"&disabled=").concat(a):"//".concat(window.location.host).concat("/").concat(i.substr(11),"?businessKey=").concat(u||r.businessKey,"&disabled=").concat(a);break;case"include":p=i.substr(10);break;case"low-code":p=i.substr(11);break;default:break}switch(this.formType){case"http":case"https":case"relative":return y.a.createElement("iframe",{id:"includeFrame",ref:function(t){e.approveForm=t},title:"iframe",src:p,height:"1000",width:"100%",frameBorder:"0"});case"low-code":return y.a.createElement(h["default"],{code:p,id:u||r.businessKey,type:"form",disabled:a,onLoad:function(t){var r=t.dataSet;e.approveForm=r}});case"include":return y.a.createElement(O["default"],{disabled:a,code:p,id:u||r.businessKey,onLoad:function(t){var r=t.submit;e.approveForm=r}});default:return null}}}]),t}(f["Component"]),n=i,Object(l["a"])(n.prototype,"submit",[o],Object.getOwnPropertyDescriptor(n.prototype,"submit"),n.prototype),Object(l["a"])(n.prototype,"handleLoad",[a],Object.getOwnPropertyDescriptor(n.prototype,"handleLoad"),n.prototype),n)},4:function(e,t,r){"use strict";r.r(t);r(241);var o=r(191),a=r(2),n=r.n(a),i=r(28),c=r(147),s=r(148),u=r(150),p=r(149),d=r(151),l=r(1),f=r.n(l),y=r(146),m=r(142),b=r(158),v=r.n(b),h=r(303);function O(e){return j.apply(this,arguments)}function j(){return j=Object(i["a"])(n.a.mark(function e(t){var r,o;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!h["a"].has({module:"hzero-front-hwfp",feature:"workflowApproveForm",key:t})){e.next=7;break}if(r=h["a"].get({module:"hzero-front-hwfp",feature:"workflowApproveForm",key:t}),!v()(r&&r.component)){e.next=7;break}return e.next=5,r.component();case 5:return o=e.sent,e.abrupt("return",o);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}},e)})),j.apply(this,arguments)}r.d(t,"default",function(){return g});var g=function(e){function t(e){var r;return Object(c["a"])(this,t),r=Object(u["a"])(this,Object(p["a"])(t).call(this,e)),r.state={},r.workflowApproveFormComponent=f.a.lazy(Object(i["a"])(n.a.mark(function t(){var r;return n.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O(e.code);case 2:return r=t.sent,t.abrupt("return",Promise.resolve({__esModule:!0,default:Object(m["z"])(r)||function(){return f.a.createElement("div",{style:{color:"grey"}},y["a"].get("hwfp.approveForm.view.message.title.notFound",{code:e.code}).d("\u672a\u627e\u5230\u5bf9\u5e94\u7f16\u7801\u4e3a\u201c".concat(e.code,"\u201d\u7684\u5ba1\u6279\u8868\u5355")))}}));case 4:case"end":return t.stop()}},t)}))),r}return Object(d["a"])(t,e),Object(s["a"])(t,[{key:"render",value:function(){var e=this.props,t=e.id,r=e.onLoad,a=e.params,n=e.disabled,i=this.workflowApproveFormComponent;return i?f.a.createElement(f.a.Suspense,{fallback:f.a.createElement(o["default"],{spinning:!0})},f.a.createElement(i,{id:t,disabled:n,params:a,onLoad:r})):null}}]),t}(f.a.Component)}}]);