(window["webpackJsonppackages_hzero_front_hitf_name_"]=window["webpackJsonppackages_hzero_front_hitf_name_"]||[]).push([[48],Array(42).concat([function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return U});a(150);var n,o,i,r,l,c,s,u,p,d,m=a(151),f=(a(146),a(148)),h=a(31),v=a(136),b=a(137),g=a(140),y=a(138),O=a(139),x=a(143),j=(a(168),a(152)),w=(a(149),a(147)),E=a(154),k=a.n(E),D=a(1),C=a.n(D),S=a(142),T=a(250),V=a(284),L=a(135),P=a(166),z=a(133),R=w["default"].Item,I=j["default"].Option,U=(n=w["default"].create({fieldNameProp:null}),o=Object(S["Bind"])(),i=Object(S["Bind"])(),r=Object(S["Bind"])(),l=Object(S["Bind"])(),c=Object(S["Bind"])(),s=Object(S["Bind"])(),u=Object(S["Bind"])(),n((d=function(e){function t(e){var a;return Object(v["a"])(this,t),a=Object(g["a"])(this,Object(y["a"])(t).call(this,e)),a.scrollbars=C.a.createRef(),a.state={isEmptyFile:!1},a}return Object(O["a"])(t,e),Object(b["a"])(t,[{key:"handleClose",value:function(){var e=this.props.onCancel;e(),this.resetState()}},{key:"resetState",value:function(){this.setState({isEmptyFile:!1})}},{key:"handleOk",value:function(){var e=this,t=this.props,a=t.form,n=t.onSave,o=t.currentParamData,i=t.paramType,r=t.actionType,l=t.mimeType;a.validateFields(function(t,a){if(!t){var c=Object(h["a"])({requiredFlag:0,paramType:i,actionType:r},a);if(l&&(c.mimeType=l),k()(o))n({values:c,flag:"create",cb:e.resetState});else{var s=o.objectVersionNumber,u=o._token,p=o.paramId;c=Object(h["a"])({objectVersionNumber:s,paramId:p,_token:u},c),n({values:c,flag:"edit",cb:e.resetState})}}})}},{key:"onUploadSuccess",value:function(e){var t=this.props.form;e&&t.setFieldsValue({defaultValueLongtext:e.response})}},{key:"onCancelSuccess",value:function(e){var t=this.props.form;e&&t.setFieldsValue({defaultValueLongtext:""})}},{key:"handleChangeType",value:function(){var e=this.props.form.setFieldsValue,t=void 0===e?function(e){return e}:e;this.setState({isEmptyFile:!0}),t({defaultValueLongtext:""})}},{key:"renderDefaultValueItem",value:function(){var e=this.props,t=e.paramType,a=e.mimeType,n=e.currentParamData,o=e.form,i=o.getFieldDecorator,r=o.getFieldValue,l=!!a&&"FILE"===r("paramValueType"),c=!k()(n),s=this.state.isEmptyFile,u="BODY"===t&&!["xml","json","raw"].includes(a),p=l?{wrapperCol:{span:0,offset:7}}:{label:L["a"].get("hitf.services.model.services.defaultValue").d("\u9ed8\u8ba4\u503c"),labelCol:{span:6},wrapperCol:{span:16,offset:0}},d=[];return c&&!s&&n.defaultValueLongtext&&(d=[{uid:"-1",status:"done",name:n.defaultValueLongtext,url:n.defaultValueLongtext}]),"BODY"!==t?C.a.createElement(R,Object.assign({label:L["a"].get("hitf.services.model.services.defaultValue").d("\u9ed8\u8ba4\u503c")},P["s"]),i("defaultValue",{rules:[{required:"HEADER"===t,message:L["a"].get("hzero.common.validation.notNull",{name:L["a"].get("hitf.services.model.services.defaultValue").d("\u9ed8\u8ba4\u503c")})},{max:128,message:L["a"].get("hzero.common.validation.max",{max:128})}],initialValue:n.defaultValue})(C.a.createElement(f["default"],null))):l?C.a.createElement(R,Object.assign({label:L["a"].get("hitf.services.model.services.defaultValue").d("\u9ed8\u8ba4\u503c")},P["s"]),C.a.createElement(V["a"],{single:!0,bucketName:z["c"],bucketDirectory:"hitf01",onUploadSuccess:this.onUploadSuccess,fileList:d,onRemove:this.onCancelSuccess})):u?C.a.createElement(R,p,i("defaultValueLongtext",{initialValue:n.defaultValueLongtext})(l?C.a.createElement("div",null):C.a.createElement(f["default"],null))):void 0}},{key:"render",value:function(){var e=this.props,t=e.visible,a=e.actionType,n=e.mimeType,o=e.paramValueTypes,i=e.form.getFieldDecorator,r=e.confirmLoading,l=e.currentParamData,c=e.paramType,s=e.requestHeaderTypes,u=!k()(l),p=u?"isEdit":"isCreate",d={REQ:{HEADER:{isCreate:L["a"].get("hitf.document.view.title.create.requestHeader").d("\u65b0\u5efa\u8bf7\u6c42\u5934\u90e8\u53c2\u6570"),isEdit:L["a"].get("hitf.document.view.title.edit.requestHeader").d("\u7f16\u8f91\u8bf7\u6c42\u5934\u90e8\u53c2\u6570")},GET:{isCreate:L["a"].get("hitf.document.view.title.create.queryParams").d("\u65b0\u5efaGET/URL\u53c2\u6570"),isEdit:L["a"].get("hitf.document.view.title.edit.queryParams").d("\u7f16\u8f91GET/URL\u53c2\u6570")},PATH:{isCreate:L["a"].get("hitf.document.view.title.create.pathParams").d("\u65b0\u5efa\u8def\u5f84\u53c2\u6570"),isEdit:L["a"].get("hitf.document.view.title.edit.pathParams").d("\u7f16\u8f91\u8def\u5f84\u53c2\u6570")},BODY:{isCreate:L["a"].get("hitf.document.view.title.create.bodyParams").d("\u65b0\u5efaBODY\u53c2\u6570"),isEdit:L["a"].get("hitf.document.view.title.edit.bodyParams").d("\u7f16\u8f91BODY\u53c2\u6570")}},RESP:{HEADER:{isCreate:L["a"].get("hitf.document.view.title.create.respHeader").d("\u65b0\u5efa\u54cd\u5e94\u5934\u90e8\u53c2\u6570"),isEdit:L["a"].get("hitf.document.view.title.edit.respHeader").d("\u7f16\u8f91\u54cd\u5e94\u5934\u90e8\u53c2\u6570")},BODY:{isCreate:L["a"].get("hitf.document.view.title.create.respParams").d("\u65b0\u5efa\u54cd\u5e94\u7ed3\u679c\u53c2\u6570"),isEdit:L["a"].get("hitf.document.view.title.edit.respParams").d("\u7f16\u8f91\u54cd\u5e94\u7ed3\u679c\u53c2\u6570")}}},h=d[a][c][p],v=o.filter(function(e){return"STRING"===e.value||"FILE"===e.value}),b=o.filter(function(e){return"STRING"===e.value}),g=o;return"multipart/form-data"===n?g=v:"application/x-www-form-urlencoded"===n&&(g=b),C.a.createElement(m["default"],{destroyOnClose:!0,title:h,visible:t,onCancel:this.handleClose,onOk:this.handleOk,wrapClassName:"ant-modal-sidebar-right",transitionName:"move-right",confirmLoading:r},C.a.createElement(w["default"],null,C.a.createElement(R,Object.assign({label:L["a"].get("hitf.services.model.services.paramName").d("\u53c2\u6570\u540d")},P["s"]),i("paramName",{rules:[{required:!0,message:L["a"].get("hzero.common.validation.notNull",{name:L["a"].get("hitf.services.model.services.paramName").d("\u53c2\u6570\u540d")})},{max:128,message:L["a"].get("hzero.common.validation.max",{max:128})}],initialValue:u?l.paramName:void 0})("HEADER"===c?C.a.createElement(j["default"],{allowClear:!0},s.length&&s.map(function(e){var t=e.value,a=e.meaning;return C.a.createElement(I,{key:t,value:t},a)})):C.a.createElement(f["default"],null))),n&&C.a.createElement(R,Object.assign({label:L["a"].get("hitf.services.model.services.paramValueType").d("\u7c7b\u578b")},P["s"]),i("paramValueType",{rules:[{required:!0,message:L["a"].get("hzero.common.validation.notNull",{name:L["a"].get("hitf.services.model.services.paramValueType").d("\u7c7b\u578b")})},{max:30,message:L["a"].get("hzero.common.validation.max",{max:30})}],initialValue:"application/x-www-form-urlencoded"===n?"STRING":l.paramValueType})(C.a.createElement(j["default"],{allowClear:!0,onChange:this.handleChangeType},g.length&&g.map(function(e){var t=e.value;return C.a.createElement(I,{key:t,value:t},t)})))),"HEADER"!==c&&C.a.createElement(D["Fragment"],null,C.a.createElement(R,Object.assign({label:L["a"].get("hitf.services.model.services.requiredFlag").d("\u662f\u5426\u5fc5\u586b")},P["s"]),i("requiredFlag",{initialValue:u?l.requiredFlag:1})(C.a.createElement(T["a"],null))),C.a.createElement(R,Object.assign({label:L["a"].get("hitf.services.model.services.formatRegexp").d("\u683c\u5f0f\u9650\u5236")},P["s"]),i("formatRegexp",{initialValue:l.formatRegexp,rules:[{max:30,message:L["a"].get("hzero.common.validation.max",{max:30})}]})(C.a.createElement(f["default"],null))),C.a.createElement(R,Object.assign({label:L["a"].get("hitf.services.model.services.remark").d("\u8bf4\u660e")},P["s"]),i("remark",{initialValue:l.remark})(C.a.createElement(f["default"],null))),C.a.createElement(R,Object.assign({label:L["a"].get("hitf.services.model.services.demo").d("\u793a\u4f8b")},P["s"]),i("valueDemo",{initialValue:l.valueDemo})(C.a.createElement(f["default"],null)))),this.renderDefaultValueItem()))}}]),t}(D["PureComponent"]),Object(x["a"])(d.prototype,"handleClose",[o],Object.getOwnPropertyDescriptor(d.prototype,"handleClose"),d.prototype),Object(x["a"])(d.prototype,"resetState",[i],Object.getOwnPropertyDescriptor(d.prototype,"resetState"),d.prototype),Object(x["a"])(d.prototype,"handleOk",[r],Object.getOwnPropertyDescriptor(d.prototype,"handleOk"),d.prototype),Object(x["a"])(d.prototype,"onUploadSuccess",[l],Object.getOwnPropertyDescriptor(d.prototype,"onUploadSuccess"),d.prototype),Object(x["a"])(d.prototype,"onCancelSuccess",[c],Object.getOwnPropertyDescriptor(d.prototype,"onCancelSuccess"),d.prototype),Object(x["a"])(d.prototype,"handleChangeType",[s],Object.getOwnPropertyDescriptor(d.prototype,"handleChangeType"),d.prototype),Object(x["a"])(d.prototype,"renderDefaultValueItem",[u],Object.getOwnPropertyDescriptor(d.prototype,"renderDefaultValueItem"),d.prototype),p=d))||p)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(0)(1169)},function(e,t,a){e.exports=a(123)(2563)},function(e,t,a){"use strict";function n(e,t,a,n,o){var i={};return Object.keys(n).forEach(function(e){i[e]=n[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=a.slice().reverse().reduce(function(a,n){return n(e,t,a)||a},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}a.d(t,"a",function(){return n})},function(e,t,a){e.exports=a(0)(198)},function(e,t,a){e.exports=a(0)(111)},,function(e,t,a){e.exports=a(0)(1147)},function(e,t,a){e.exports=a(0)(293)},,function(e,t,a){"use strict";a(144),a(172),a(141)},function(e,t,a){e.exports=a(0)(1154)},function(e,t,a){e.exports=a(0)(164)},,,,,,,function(e,t,a){e.exports=a(0)(116)},function(e,t,a){e.exports=a(0)(1155)},,,function(e,t,a){e.exports=a(0)(1168)},function(e,t,a){e.exports=a(0)(37)},function(e,t,a){e.exports=a(0)(82)},,,,function(e,t,a){e.exports=a(0)(1852)},,function(e,t,a){e.exports=a(0)(34)},function(e,t,a){e.exports={"ant-modal":"ant-modal","ant-modal-wrap":"ant-modal-wrap","ant-modal-title":"ant-modal-title","ant-modal-content":"ant-modal-content","ant-modal-close":"ant-modal-close","ant-modal-close-x":"ant-modal-close-x","ant-modal-header":"ant-modal-header","ant-modal-body":"ant-modal-body","ant-modal-footer":"ant-modal-footer","zoom-enter":"zoom-enter","zoom-appear":"zoom-appear","ant-modal-mask":"ant-modal-mask","ant-modal-mask-hidden":"ant-modal-mask-hidden","ant-modal-open":"ant-modal-open","vertical-center-modal":"vertical-center-modal","ant-confirm":"ant-confirm","ant-confirm-body-wrapper":"ant-confirm-body-wrapper","ant-confirm-body":"ant-confirm-body","ant-confirm-title":"ant-confirm-title","ant-confirm-content":"ant-confirm-content",anticon:"anticon","ant-confirm-btns":"ant-confirm-btns","ant-confirm-error":"ant-confirm-error","ant-confirm-warning":"ant-confirm-warning","ant-confirm-confirm":"ant-confirm-confirm","ant-confirm-info":"ant-confirm-info","ant-confirm-success":"ant-confirm-success"}},,function(e,t,a){e.exports=a(0)(130)},,,,function(e,t,a){e.exports=a(0)(156)},,function(e,t,a){e.exports=a(0)(1858)},function(e,t,a){e.exports=a(0)(274)},function(e,t,a){e.exports=a(123)(2648)},function(e,t,a){e.exports=a(0)(604)},function(e,t,a){e.exports=a(0)(1167)},,,function(e,t,a){e.exports=a(0)(829)},function(e,t,a){e.exports=a(0)(182)},,function(e,t,a){e.exports=a(0)(2130)},function(e,t,a){e.exports=a(0)(661)},function(e,t,a){e.exports=a(0)(2092)},,function(e,t,a){e.exports=a(0)(849)},function(e,t,a){e.exports=a(0)(328)},function(e,t,a){e.exports=a(0)(270)},function(e,t,a){e.exports=a(0)(170)},function(e,t,a){e.exports=a(0)(324)},function(e,t,a){e.exports=a(0)(386)},function(e,t,a){e.exports=a(0)(387)},,,,function(e,t,a){e.exports=a(0)(325)},function(e,t,a){e.exports=a(0)(1132)},,,,function(e,t,a){e.exports=a(123)(2662)},function(e,t,a){e.exports=a(0)(241)},function(e,t,a){e.exports=a(0)(151)},function(e,t,a){e.exports=a(123)(1367)},function(e,t,a){e.exports=a(0)(127)},function(e,t,a){e.exports=a(0)(484)},function(e,t,a){e.exports=a(0)(2129)},function(e,t,a){e.exports=a(0)(235)},function(e,t,a){e.exports=a(0)(209)},function(e,t,a){e.exports=a(0)(868)},function(e,t,a){e.exports=a(0)(385)},function(e,t,a){e.exports=a(0)(255)},function(e,t,a){e.exports=a(0)(1960)},function(e,t,a){e.exports=a(0)(298)},function(e,t,a){e.exports=a(0)(580)},function(e,t,a){e.exports=a(0)(582)},function(e,t,a){e.exports=a(0)(128)},function(e,t,a){e.exports=a(0)(108)},function(e,t,a){e.exports=a(0)(472)},function(e,t,a){e.exports=a(0)(873)},,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a(144),a(258);var n=a(260),o=a(136),i=a(137),r=a(140),l=a(138),c=a(139),s=a(1),u=a.n(s);a.d(t,"a",function(){return p});var p=function(e){function t(){return Object(o["a"])(this,t),Object(r["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,[{key:"render",value:function(){return u.a.createElement(n["default"],Object.assign({},this.props,{unCheckedValue:0,checkedValue:1}))}}]),t}(u.a.Component);p.displayName="HzeroSwitch"},,,,,,,,function(e,t,a){e.exports={"ant-switch":"ant-switch","ant-switch-inner":"ant-switch-inner",loadingCircle:"loadingCircle","ant-switch-loading":"ant-switch-loading","ant-switch-checked":"ant-switch-checked","ant-switch-small":"ant-switch-small",AntSwitchSmallLoadingCircle:"AntSwitchSmallLoadingCircle","ant-switch-disabled":"ant-switch-disabled"}},,function(e,t,a){e.exports=a(0)(1160)},,,,,,,,,,,function(e,t,a){e.exports=a(0)(61)},,,,,,,,function(e,t,a){var n=a(181),o=a(286);function i(e,t){var a=[];if(!e||!e.length)return a;var i=-1,r=[],l=e.length;t=n(t,3);while(++i<l){var c=e[i];t(c,i,e)&&(a.push(c),r.push(i))}return o(e,r),a}e.exports=i},,function(e,t,a){"use strict";a(144),a(296),a(298),a(184)},function(e,t,a){e.exports=a(0)(1208)},,function(e,t,a){"use strict";a.d(t,"a",function(){return M});a(281);var n,o,i,r,l,c,s,u=a(282),p=(a(141),a(145)),d=(a(163),a(164)),m=a(161),f=a(31),h=a(2),v=a.n(h),b=a(32),g=a(246),y=a(136),O=a(137),x=a(140),j=a(138),w=a(185),E=a(139),k=a(143),D=(a(189),a(160)),C=a(301),S=a.n(C),T=a(279),V=a.n(T),L=a(183),P=a.n(L),z=a(35),R=a.n(z),I=a(271),U=a.n(I),A=a(1),F=a.n(A),N=a(142),B=a(302),q=a.n(B),H=a(135),_=a(134),G=a(132),Y=a(133),J=a(167);D["default"].config({placement:"bottomRight"});var M=(n=Object(N["Bind"])(),o=Object(N["Bind"])(),i=Object(N["Bind"])(),r=Object(N["Bind"])(),l=Object(N["Bind"])(),c=Object(N["Bind"])(),s=function(e){function t(e){var a;Object(y["a"])(this,t),a=Object(x["a"])(this,Object(j["a"])(t).call(this,e));var n=a.props.onRef;return n&&n(Object(w["a"])(a)),a.state={fileList:null},a}return Object(E["a"])(t,e),Object(O["a"])(t,[{key:"setFileList",value:function(e){e&&this.setState({fileList:e})}},{key:"uploadData",value:function(e){var t=this.props,a=t.attachmentUUID,n=t.bucketName,o=t.uploadData,i=t.bucketDirectory,r=t.docType,l=t.storageCode,c=o?o(e):{};if(!(c instanceof FormData)){var s=c;c=new FormData,U()(c)&&Object.keys(s).forEach(function(e){c.append(e,s[e])})}return P()(a)||c.append("attachmentUUID",a),P()(n)||c.append("bucketName",n),P()(r)||c.append("docType",r),P()(l)||c.append("storageCode",l),P()(i)||c.append("directory",i),c}},{key:"onChange",value:function(e){var t=e.file,a=e.fileList,n=this.props,o=n.single,i=void 0!==o&&o,r=n.tenantId,l=n.bucketName,c=n.bucketDirectory,s=Object(g["a"])(a);if("done"===t.status){var u=t.response;if(u&&!0===u.failed)this.onUploadError(t,a);else{if(i){if(a.length>1){var p=this.props.onRemove;Promise.all(a.slice(0,a.length-1).map(function(){var e=Object(b["a"])(v.a.mark(function e(t){var a,n;return v.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.url){e.next=20;break}if(!p){e.next=11;break}return e.prev=2,e.next=5,p(t);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](2);case 9:e.next=20;break;case 11:return a=t.url&&t.url.split("=")||[],n=a[a.length-1],e.prev=13,e.next=16,Object(J["g"])({tenantId:r,bucketName:l,urls:[n]});case 16:e.next=20;break;case 18:e.prev=18,e.t1=e["catch"](13);case 20:case"end":return e.stop()}},e,null,[[2,7],[13,18]])}));return function(t){return e.apply(this,arguments)}}())).catch(function(){})}s=[{uid:t.uid,name:t.name,url:Object(G["f"])(t.response,l,r,c),thumbUrl:Object(G["f"])(t.response,l,r,c)}]}else s=a.map(function(e){return e.uid===t.uid&&(e.url=Object(G["f"])(e.response,l,r,c)),e});this.onUploadSuccess(t,s)}}else"error"===t.status&&(this.onUploadError(t,a),s=a.filter(function(e){return"error"!==e.status&&e.uid}));this.setState({fileList:S()(s,function(e,t){return e.uid===t.uid})})}},{key:"beforeUpload",value:function(e){var t=this.props,a=t.fileType,n=t.fileSize,o=void 0===n?31457280:n;if(a&&-1===a.indexOf(e.type)){e.status="error";var i={message:H["a"].get("hzero.common.upload.error.type",{fileType:a}).d("\u4e0a\u4f20\u6587\u4ef6\u7c7b\u578b\u5fc5\u987b\u662f\uff1a".concat(a))};return e.response=i,!1}if(e.size>o){e.status="error";var r={message:H["a"].get("hzero.common.upload.error.size",{fileSize:o/1048576}).d("\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7: ".concat(o/1048576," MB"))};return e.response=r,!1}return!0}},{key:"onRemove",value:function(e){var t=this,a=this.props,n=a.onRemove,o=a.bucketName,i=a.onRemoveSuccess,r=a.single,l=void 0!==r&&r,c=a.tenantId,s=this.state.fileList;if(e.url){if(n)return n(e);var u=e.url&&e.url.split("=")||[],p=u[u.length-1];return Object(J["g"])({tenantId:c,bucketName:o,urls:[p]}).then(function(a){return!!Object(G["o"])(a)&&(i&&i(),l?t.setState({fileList:[]}):(V()(s,function(t){return t.uid===e.uid}),t.setState({fileList:s})),!0)})}this.setState({fileList:s.filter(function(t){return t.uid!==e.uid})})}},{key:"onUploadSuccess",value:function(e,t){var a=this.props.onUploadSuccess;a&&a(e,t)}},{key:"onUploadError",value:function(e,t){var a=this.props.onUploadError,n=!0;a&&(n=!1!==a(e,t)),n&&D["default"].error({message:H["a"].get("hzero.common.upload.status.error").d("\u4e0a\u4f20\u5931\u8d25"),description:e.response&&e.response.message})}},{key:"changeFileList",value:function(e){var t=this.props,a=t.bucketName,n=t.bucketDirectory,o=t.tenantId;if(e)return e.map(function(e){return Object(f["a"])({},e,{url:Object(G["f"])(e.url,a,o,n)})})}},{key:"handleAction",value:function(e){var t=e.file,a=e.onProgress,n=e.onSuccess,o=e.onError,i=new q.a,r=i.signal,l=this.props.action,c=l||(Object(G["t"])()?"".concat(Y["e"],"/v1/").concat(Object(G["h"])(),"/files/multipart"):"".concat(Y["e"],"/v1/files/multipart")),s="".concat(c),u=this.uploadData(t);return u.append("file",t,t.name),Object(_["a"])(s,{processData:!1,method:"POST",type:"FORM",body:u,responseType:"text",signal:r,onProgress:a?function(e){return a(e,t)}:null},{beforeCatch:function(e){if("AbortError"!==e.name)throw new Error(e)}}).then(function(e){R()(e)?n(e):Object(G["o"])(e)||o(e)}),{abort:function(){i.abort()}}}},{key:"render",value:function(){var e=this.props,t=e.fileList,a=e.fileType,n=(e.fileSize,e.single,e.text),o=void 0===n?H["a"].get("hzero.common.upload.txt").d("\u4e0a\u4f20"):n,i=e.listType,r=void 0===i?"picture":i,l=(e.bucketName,e.onUploadSuccess,e.onUploadError,e.viewOnly),c=void 0!==l&&l,s=e.showRemoveIcon,f=void 0===s||s,h=(e.docType,e.storageCode,e.children),v=Object(m["a"])(e,["fileList","fileType","fileSize","single","text","listType","bucketName","onUploadSuccess","onUploadError","viewOnly","showRemoveIcon","docType","storageCode","children"]),b=Object(G["e"])(),g=this.changeFileList(t),y={};b&&(y.Authorization="bearer ".concat(b));var O,x=a&&-1===a.indexOf(",")?a.split(";").join(","):a;return O="picture-card"===r?F.a.createElement("div",null,F.a.createElement(d["default"],{style:{fontSize:"32px",color:"#999"},type:"plus"})):F.a.createElement(p["default"],null,F.a.createElement(d["default"],{type:"upload"})," ",o),F.a.createElement(u["default"],Object.assign({name:"file",accept:x,fileList:this.state.fileList||g,data:this.uploadData,customRequest:this.handleAction,headers:y,onChange:this.onChange,listType:r,beforeUpload:this.beforeUpload,onRemove:this.onRemove,showUploadList:{showRemoveIcon:!c&&f}},v),h||!c&&O)}}]),t}(F.a.Component),Object(k["a"])(s.prototype,"uploadData",[n],Object.getOwnPropertyDescriptor(s.prototype,"uploadData"),s.prototype),Object(k["a"])(s.prototype,"onChange",[o],Object.getOwnPropertyDescriptor(s.prototype,"onChange"),s.prototype),Object(k["a"])(s.prototype,"beforeUpload",[i],Object.getOwnPropertyDescriptor(s.prototype,"beforeUpload"),s.prototype),Object(k["a"])(s.prototype,"onRemove",[r],Object.getOwnPropertyDescriptor(s.prototype,"onRemove"),s.prototype),Object(k["a"])(s.prototype,"changeFileList",[l],Object.getOwnPropertyDescriptor(s.prototype,"changeFileList"),s.prototype),Object(k["a"])(s.prototype,"handleAction",[c],Object.getOwnPropertyDescriptor(s.prototype,"handleAction"),s.prototype),s)},,function(e,t,a){var n=a(287),o=a(288),i=Array.prototype,r=i.splice;function l(e,t){var a=e?t.length:0,i=a-1;while(a--){var l=t[a];if(a==i||l!==c){var c=l;o(l)?r.call(e,l,1):n(e,l)}}return e}e.exports=l},function(e,t,a){e.exports=a(0)(2121)},function(e,t,a){e.exports=a(0)(242)},,,,,,,,function(e,t,a){e.exports={"ant-upload":"ant-upload","ant-upload-btn":"ant-upload-btn","ant-upload-select":"ant-upload-select","ant-upload-select-picture-card":"ant-upload-select-picture-card","ant-upload-drag":"ant-upload-drag","ant-upload-drag-hover":"ant-upload-drag-hover","ant-upload-disabled":"ant-upload-disabled","ant-upload-drag-container":"ant-upload-drag-container","ant-upload-drag-icon":"ant-upload-drag-icon",anticon:"anticon","ant-upload-text":"ant-upload-text","ant-upload-hint":"ant-upload-hint","anticon-plus":"anticon-plus","ant-upload-list":"ant-upload-list","ant-upload-list-item":"ant-upload-list-item","ant-upload-list-item-name":"ant-upload-list-item-name","ant-upload-list-item-info":"ant-upload-list-item-info","anticon-loading":"anticon-loading","anticon-paper-clip":"anticon-paper-clip","anticon-cross":"anticon-cross","ant-upload-list-item-error":"ant-upload-list-item-error","ant-upload-list-item-progress":"ant-upload-list-item-progress","ant-upload-list-picture":"ant-upload-list-picture","ant-upload-list-picture-card":"ant-upload-list-picture-card","ant-upload-list-item-file-name":"ant-upload-list-item-file-name","ant-upload-list-item-uploading":"ant-upload-list-item-uploading","ant-upload-list-item-thumbnail":"ant-upload-list-item-thumbnail","ant-upload-list-item-icon":"ant-upload-list-item-icon","ant-upload-list-item-action-remove":"ant-upload-list-item-action-remove","ant-upload-list-item-picture-card":"ant-upload-list-item-picture-card","ant-upload-list-item-actions":"ant-upload-list-item-actions","anticon-eye-o":"anticon-eye-o","anticon-download":"anticon-download","anticon-upload":"anticon-upload","anticon-picture":"anticon-picture","ant-upload-list-item-uploading-text":"ant-upload-list-item-uploading-text","ant-upload-success-icon":"ant-upload-success-icon","ant-upload-animate-enter":"ant-upload-animate-enter","ant-upload-animate-leave":"ant-upload-animate-leave","ant-upload-animate-inline-enter":"ant-upload-animate-inline-enter","ant-upload-animate-inline-leave":"ant-upload-animate-inline-leave",uploadAnimateIn:"uploadAnimateIn",uploadAnimateOut:"uploadAnimateOut",uploadAnimateInlineIn:"uploadAnimateInlineIn",uploadAnimateInlineOut:"uploadAnimateInlineOut"}},,function(e,t,a){e.exports=a(0)(2098)},,,function(e,t,a){var n=a(192);function o(e,t){return t="function"==typeof t?t:void 0,e&&e.length?n(e,void 0,t):[]}e.exports=o},function(e,t,a){"use strict";var n="undefined"!==typeof self?self:"undefined"!==typeof window?window:void 0,o=n.AbortController,i=n.AbortSignal;e.exports=o,e.exports.AbortSignal=i,e.exports.default=o}])]);