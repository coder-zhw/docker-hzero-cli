(window["webpackJsonppackages_hzero_front_hcnf_name_"]=window["webpackJsonppackages_hzero_front_hcnf_name_"]||[]).push([[10],{170:function(e,t,a){"use strict";a.d(t,"a",function(){return x});var n=a(2),o=a.n(n),i=a(12),r=a(10),l=a(67),c=a(68),s=a(70),u=a(69),p=a(71),d=a(13),m=a.n(d),f=a(83),h=a.n(f),v=a(1),g=a.n(v),b=a(106),y=a(77),O=a(72),j=a(91),k=new Map;function w(e){return e.displayName||e.name||"Component"}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.code,a=void 0===t?"":t;return function(e){var t=function(e,t,a){return Object(j["e"])(e,t,a)},n=function(n){function d(){var e,t;Object(l["a"])(this,d);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return t=Object(s["a"])(this,(e=Object(u["a"])(d)).call.apply(e,[this].concat(n))),t.state={localeLoaded:!1},t.loading=!1,t.currentLanguage=null,t}return Object(p["a"])(d,n),Object(c["a"])(d,[{key:"loadLocale",value:function(){var e=Object(r["a"])(o.a.mark(function e(n){var r,l,c,s,u;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!n||this.currentLanguage===n){e.next=24;break}if(this.currentLanguage=n,k.has(n)?r=k.get(n):(r=new Map,k.set(n,r)),l="",c=[],m()(a)?r.get(a)||(l=a,r.set(a,!0)):h()(a)&&(a.forEach(function(e){r.get(e)||(r.set(e,!0),c.push(e))}),l=c.join(",")),!l){e.next=23;break}return this.loading=!0,e.prev=8,s=Object(y["g"])(),e.next=12,t(s,n,l);case 12:if(u=e.sent,!u){e.next=16;break}return O["a"].load(Object(i["a"])({},n,u)),e.abrupt("return");case 16:h()(a)?a.forEach(function(e){r.delete(e)}):r.delete(a);case 17:return e.prev=17,this.loading=!1,this.setState({localeLoaded:!0}),e.finish(17);case 21:e.next=24;break;case 23:this.setState({localeLoaded:!0});case 24:case"end":return e.stop()}},e,this,[[8,,17,21]])}));function n(t){return e.apply(this,arguments)}return n}()},{key:"componentDidMount",value:function(){var e=this.props.language;this.loadLocale(e)}},{key:"componentDidUpdate",value:function(){this.loadLocale(this.props.language)}},{key:"shouldComponentUpdate",value:function(){return!this.loading}},{key:"render",value:function(){var t=this.state.localeLoaded;return t?g.a.createElement(e,Object.assign({intl:O["a"]},this.props)):null}}]),d}(g.a.Component);return n.displayName="IntlComponent(".concat(w(e),")"),Object(b["connect"])(function(e){var t=e.global,a=void 0===t?{}:t;return{language:a.language}})(n)}}},174:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o});var n=/^[a-zA-Z0-9][a-zA-Z0-9-_.\/]*$/,o=/^[A-Z0-9][A-Z0-9-_.\/]*$/},242:function(e,t,a){e.exports={"ant-upload":"ant-upload","ant-upload-btn":"ant-upload-btn","ant-upload-select":"ant-upload-select","ant-upload-select-picture-card":"ant-upload-select-picture-card","ant-upload-drag":"ant-upload-drag","ant-upload-drag-hover":"ant-upload-drag-hover","ant-upload-disabled":"ant-upload-disabled","ant-upload-drag-container":"ant-upload-drag-container","ant-upload-drag-icon":"ant-upload-drag-icon",anticon:"anticon","ant-upload-text":"ant-upload-text","ant-upload-hint":"ant-upload-hint","anticon-plus":"anticon-plus","ant-upload-list":"ant-upload-list","ant-upload-list-item":"ant-upload-list-item","ant-upload-list-item-name":"ant-upload-list-item-name","ant-upload-list-item-info":"ant-upload-list-item-info","anticon-loading":"anticon-loading","anticon-paper-clip":"anticon-paper-clip","anticon-cross":"anticon-cross","ant-upload-list-item-error":"ant-upload-list-item-error","ant-upload-list-item-progress":"ant-upload-list-item-progress","ant-upload-list-picture":"ant-upload-list-picture","ant-upload-list-picture-card":"ant-upload-list-picture-card","ant-upload-list-item-file-name":"ant-upload-list-item-file-name","ant-upload-list-item-uploading":"ant-upload-list-item-uploading","ant-upload-list-item-thumbnail":"ant-upload-list-item-thumbnail","ant-upload-list-item-icon":"ant-upload-list-item-icon","ant-upload-list-item-action-remove":"ant-upload-list-item-action-remove","ant-upload-list-item-picture-card":"ant-upload-list-item-picture-card","ant-upload-list-item-actions":"ant-upload-list-item-actions","anticon-eye-o":"anticon-eye-o","anticon-download":"anticon-download","anticon-upload":"anticon-upload","anticon-picture":"anticon-picture","ant-upload-list-item-uploading-text":"ant-upload-list-item-uploading-text","ant-upload-success-icon":"ant-upload-success-icon","ant-upload-animate-enter":"ant-upload-animate-enter","ant-upload-animate-leave":"ant-upload-animate-leave","ant-upload-animate-inline-enter":"ant-upload-animate-inline-enter","ant-upload-animate-inline-leave":"ant-upload-animate-inline-leave",uploadAnimateIn:"uploadAnimateIn",uploadAnimateOut:"uploadAnimateOut",uploadAnimateInlineIn:"uploadAnimateInlineIn",uploadAnimateInlineOut:"uploadAnimateInlineOut"}},246:function(e,t,a){var n=a(118);function o(e,t){return t="function"==typeof t?t:void 0,e&&e.length?n(e,void 0,t):[]}e.exports=o},247:function(e,t,a){var n=a(107),o=a(248);function i(e,t){var a=[];if(!e||!e.length)return a;var i=-1,r=[],l=e.length;t=n(t,3);while(++i<l){var c=e[i];t(c,i,e)&&(a.push(c),r.push(i))}return o(e,r),a}e.exports=i},248:function(e,t,a){var n=a(249),o=a(250),i=Array.prototype,r=i.splice;function l(e,t){var a=e?t.length:0,i=a-1;while(a--){var l=t[a];if(a==i||l!==c){var c=l;o(l)?r.call(e,l,1):n(e,l)}}return e}e.exports=l},251:function(e,t,a){"use strict";var n="undefined"!==typeof self?self:"undefined"!==typeof window?window:void 0,o=n.AbortController,i=n.AbortSignal;e.exports=o,e.exports.AbortSignal=i,e.exports.default=o},3:function(e,t,a){"use strict";a.r(t);a(90);var n,o,i,r,l,c,s,u=a(84),p=(a(172),a(102)),d=(a(74),a(78)),m=a(67),f=a(68),h=a(70),v=a(69),g=a(71),b=a(81),y=(a(87),a(80)),O=a(1),j=a.n(O),k=a(75),w=(a(73),a(242),a(244),a(103),a(245)),x=(a(76),a(79)),L=(a(85),a(86)),S=a(110),C=a(9),U=a(2),D=a.n(U),E=a(10),A=a(227),z=a(111),N=(a(182),a(95)),I=a(246),R=a.n(I),P=a(247),T=a.n(P),_=a(109),F=a.n(_),B=a(13),M=a.n(B),V=a(181),Z=a.n(V),q=a(251),J=a.n(q),$=a(72),G=a(171),H=a(77),K=a(120),Q=a(91);N["default"].config({placement:"bottomRight"});var W,X,Y,ee,te,ae,ne,oe=(n=Object(k["Bind"])(),o=Object(k["Bind"])(),i=Object(k["Bind"])(),r=Object(k["Bind"])(),l=Object(k["Bind"])(),c=Object(k["Bind"])(),s=function(e){function t(e){var a;Object(m["a"])(this,t),a=Object(h["a"])(this,Object(v["a"])(t).call(this,e));var n=a.props.onRef;return n&&n(Object(z["a"])(a)),a.state={fileList:null},a}return Object(g["a"])(t,e),Object(f["a"])(t,[{key:"setFileList",value:function(e){e&&this.setState({fileList:e})}},{key:"uploadData",value:function(e){var t=this.props,a=t.attachmentUUID,n=t.bucketName,o=t.uploadData,i=t.bucketDirectory,r=t.docType,l=t.storageCode,c=o?o(e):{};if(!(c instanceof FormData)){var s=c;c=new FormData,Z()(c)&&Object.keys(s).forEach(function(e){c.append(e,s[e])})}return F()(a)||c.append("attachmentUUID",a),F()(n)||c.append("bucketName",n),F()(r)||c.append("docType",r),F()(l)||c.append("storageCode",l),F()(i)||c.append("directory",i),c}},{key:"onChange",value:function(e){var t=e.file,a=e.fileList,n=this.props,o=n.single,i=void 0!==o&&o,r=n.tenantId,l=n.bucketName,c=n.bucketDirectory,s=Object(A["a"])(a);if("done"===t.status){var u=t.response;if(u&&!0===u.failed)this.onUploadError(t,a);else{if(i){if(a.length>1){var p=this.props.onRemove;Promise.all(a.slice(0,a.length-1).map(function(){var e=Object(E["a"])(D.a.mark(function e(t){var a,n;return D.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.url){e.next=20;break}if(!p){e.next=11;break}return e.prev=2,e.next=5,p(t);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](2);case 9:e.next=20;break;case 11:return a=t.url&&t.url.split("=")||[],n=a[a.length-1],e.prev=13,e.next=16,Object(Q["g"])({tenantId:r,bucketName:l,urls:[n]});case 16:e.next=20;break;case 18:e.prev=18,e.t1=e["catch"](13);case 20:case"end":return e.stop()}},e,null,[[2,7],[13,18]])}));return function(t){return e.apply(this,arguments)}}())).catch(function(){})}s=[{uid:t.uid,name:t.name,url:Object(H["e"])(t.response,l,r,c),thumbUrl:Object(H["e"])(t.response,l,r,c)}]}else s=a.map(function(e){return e.uid===t.uid&&(e.url=Object(H["e"])(e.response,l,r,c)),e});this.onUploadSuccess(t,s)}}else"error"===t.status&&(this.onUploadError(t,a),s=a.filter(function(e){return"error"!==e.status&&e.uid}));this.setState({fileList:R()(s,function(e,t){return e.uid===t.uid})})}},{key:"beforeUpload",value:function(e){var t=this.props,a=t.fileType,n=t.fileSize,o=void 0===n?31457280:n;if(a&&-1===a.indexOf(e.type)){e.status="error";var i={message:$["a"].get("hzero.common.upload.error.type",{fileType:a}).d("\u4e0a\u4f20\u6587\u4ef6\u7c7b\u578b\u5fc5\u987b\u662f\uff1a".concat(a))};return e.response=i,!1}if(e.size>o){e.status="error";var r={message:$["a"].get("hzero.common.upload.error.size",{fileSize:o/1048576}).d("\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7: ".concat(o/1048576," MB"))};return e.response=r,!1}return!0}},{key:"onRemove",value:function(e){var t=this,a=this.props,n=a.onRemove,o=a.bucketName,i=a.onRemoveSuccess,r=a.single,l=void 0!==r&&r,c=a.tenantId,s=this.state.fileList;if(e.url){if(n)return n(e);var u=e.url&&e.url.split("=")||[],p=u[u.length-1];return Object(Q["g"])({tenantId:c,bucketName:o,urls:[p]}).then(function(a){return!!Object(H["k"])(a)&&(i&&i(),l?t.setState({fileList:[]}):(T()(s,function(t){return t.uid===e.uid}),t.setState({fileList:s})),!0)})}this.setState({fileList:s.filter(function(t){return t.uid!==e.uid})})}},{key:"onUploadSuccess",value:function(e,t){var a=this.props.onUploadSuccess;a&&a(e,t)}},{key:"onUploadError",value:function(e,t){var a=this.props.onUploadError,n=!0;a&&(n=!1!==a(e,t)),n&&N["default"].error({message:$["a"].get("hzero.common.upload.status.error").d("\u4e0a\u4f20\u5931\u8d25"),description:e.response&&e.response.message})}},{key:"changeFileList",value:function(e){var t=this.props,a=t.bucketName,n=t.bucketDirectory,o=t.tenantId;if(e)return e.map(function(e){return Object(C["a"])({},e,{url:Object(H["e"])(e.url,a,o,n)})})}},{key:"handleAction",value:function(e){var t=e.file,a=e.onProgress,n=e.onSuccess,o=e.onError,i=new J.a,r=i.signal,l=this.props.action,c=l||(Object(H["p"])()?"".concat(K["c"],"/v1/").concat(Object(H["g"])(),"/files/multipart"):"".concat(K["c"],"/v1/files/multipart")),s="".concat(c),u=this.uploadData(t);return u.append("file",t,t.name),Object(G["a"])(s,{processData:!1,method:"POST",type:"FORM",body:u,responseType:"text",signal:r,onProgress:a?function(e){return a(e,t)}:null},{beforeCatch:function(e){if("AbortError"!==e.name)throw new Error(e)}}).then(function(e){M()(e)?n(e):Object(H["k"])(e)||o(e)}),{abort:function(){i.abort()}}}},{key:"render",value:function(){var e=this.props,t=e.fileList,a=e.fileType,n=(e.fileSize,e.single,e.text),o=void 0===n?$["a"].get("hzero.common.upload.txt").d("\u4e0a\u4f20"):n,i=e.listType,r=void 0===i?"picture":i,l=(e.bucketName,e.onUploadSuccess,e.onUploadError,e.viewOnly),c=void 0!==l&&l,s=e.showRemoveIcon,u=void 0===s||s,p=(e.docType,e.storageCode,e.children),d=Object(S["a"])(e,["fileList","fileType","fileSize","single","text","listType","bucketName","onUploadSuccess","onUploadError","viewOnly","showRemoveIcon","docType","storageCode","children"]),m=Object(H["d"])(),f=this.changeFileList(t),h={};m&&(h.Authorization="bearer ".concat(m));var v,g=a&&-1===a.indexOf(",")?a.split(";").join(","):a;return v="picture-card"===r?j.a.createElement("div",null,j.a.createElement(L["default"],{style:{fontSize:"32px",color:"#999"},type:"plus"})):j.a.createElement(x["default"],null,j.a.createElement(L["default"],{type:"upload"})," ",o),j.a.createElement(w["default"],Object.assign({name:"file",accept:g,fileList:this.state.fileList||f,data:this.uploadData,customRequest:this.handleAction,headers:h,onChange:this.onChange,listType:r,beforeUpload:this.beforeUpload,onRemove:this.onRemove,showUploadList:{showRemoveIcon:!c&&u}},d),p||!c&&v)}}]),t}(j.a.Component),Object(b["a"])(s.prototype,"uploadData",[n],Object.getOwnPropertyDescriptor(s.prototype,"uploadData"),s.prototype),Object(b["a"])(s.prototype,"onChange",[o],Object.getOwnPropertyDescriptor(s.prototype,"onChange"),s.prototype),Object(b["a"])(s.prototype,"beforeUpload",[i],Object.getOwnPropertyDescriptor(s.prototype,"beforeUpload"),s.prototype),Object(b["a"])(s.prototype,"onRemove",[r],Object.getOwnPropertyDescriptor(s.prototype,"onRemove"),s.prototype),Object(b["a"])(s.prototype,"changeFileList",[l],Object.getOwnPropertyDescriptor(s.prototype,"changeFileList"),s.prototype),Object(b["a"])(s.prototype,"handleAction",[c],Object.getOwnPropertyDescriptor(s.prototype,"handleAction"),s.prototype),s),ie=a(170),re=a(174),le=a(92);a.d(t,"default",function(){return se});var ce=y["default"].Item,se=(W=y["default"].create({fieldNameProp:null}),X=Object(ie["a"])({code:["hcnf.common"]}),Y=Object(k["Bind"])(),ee=Object(k["Bind"])(),te=Object(k["Bind"])(),W(ae=X((ne=function(e){function t(){return Object(m["a"])(this,t),Object(h["a"])(this,Object(v["a"])(t).apply(this,arguments))}return Object(g["a"])(t,e),Object(f["a"])(t,[{key:"handleCancel",value:function(){var e=this.props.onCancel,t=void 0===e?function(e){return e}:e;t()}},{key:"handleSaveService",value:function(){var e=this.props,t=e.form,a=e.onOk;t.validateFields(function(e,t){e||a(t)})}},{key:"onUploadSuccess",value:function(e){var t=this.props.form;e&&(t.registerField("serviceLogo"),t.setFieldsValue({serviceLogo:e.response}))}},{key:"render",value:function(){var e=this.props,t=e.form,a=e.initData,n=e.title,o=e.modalVisible,i=e.loading,r=e.initLoading,l=void 0!==r&&r,c=t.getFieldDecorator,s=a.serviceCode,m=a.serviceName,f=a.serviceLogo;return j.a.createElement(u["default"],{destroyOnClose:!0,wrapClassName:"ant-modal-sidebar-right",transitionName:"move-right",title:n,visible:o,confirmLoading:i,onCancel:this.handleCancel,onOk:this.handleSaveService},j.a.createElement(p["default"],{spinning:l},j.a.createElement(y["default"],null,j.a.createElement(ce,Object.assign({},le["m"],{label:$["a"].get("hcnf.common.model.common.serviceCode").d("\u670d\u52a1\u7f16\u7801")}),c("serviceCode",{initialValue:s,rules:[{required:!0,message:$["a"].get("hzero.common.validation.notNull",{name:$["a"].get("hcnf.common.model.common.serviceCode").d("\u670d\u52a1\u7f16\u7801")})},{max:30,message:$["a"].get("hzero.common.validation.max",{max:30})},{pattern:re["a"],message:$["a"].get("hzero.common.validation.code").d("\u5927\u5c0f\u5199\u53ca\u6570\u5b57\uff0c\u5fc5\u987b\u4ee5\u5b57\u6bcd\u3001\u6570\u5b57\u5f00\u5934\uff0c\u53ef\u5305\u542b\u201c-\u201d\u3001\u201c_\u201d\u3001\u201c.\u201d\u3001\u201c/\u201d")}]})(j.a.createElement(d["default"],{trim:!0,inputChinese:!1,disabled:!!s}))),j.a.createElement(ce,Object.assign({},le["m"],{label:$["a"].get("hcnf.common.model.common.serviceName").d("\u670d\u52a1\u540d\u79f0")}),c("serviceName",{initialValue:m,rules:[{required:!0,message:$["a"].get("hzero.common.validation.notNull",{name:$["a"].get("hcnf.common.model.common.serviceName").d("\u670d\u52a1\u540d\u79f0")})},{max:90,message:$["a"].get("hzero.common.validation.max",{max:90})}]})(j.a.createElement(d["default"],null))),j.a.createElement(ce,Object.assign({label:$["a"].get("hcnf.common.model.serviceCollect.serviceLogo").d("\u670d\u52a1\u56fe\u7247"),extra:$["a"].get("hcnf.common.model.upload.support").d("\u4e0a\u4f20\u683c\u5f0f\uff1a*.png;*.jpeg")},le["m"]),j.a.createElement(oe,{accept:".jpeg,.png",single:!0,fileList:f&&[{uid:"-1",name:m,status:"done",url:f}],bucketName:"public",onUploadSuccess:this.onUploadSuccess})))))}}]),t}(j.a.Component),Object(b["a"])(ne.prototype,"handleCancel",[Y],Object.getOwnPropertyDescriptor(ne.prototype,"handleCancel"),ne.prototype),Object(b["a"])(ne.prototype,"handleSaveService",[ee],Object.getOwnPropertyDescriptor(ne.prototype,"handleSaveService"),ne.prototype),Object(b["a"])(ne.prototype,"onUploadSuccess",[te],Object.getOwnPropertyDescriptor(ne.prototype,"onUploadSuccess"),ne.prototype),ae=ne))||ae)||ae)}}]);