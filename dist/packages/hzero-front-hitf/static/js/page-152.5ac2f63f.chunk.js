(window["webpackJsonppackages_hzero_front_hitf_name_"]=window["webpackJsonppackages_hzero_front_hitf_name_"]||[]).push([[52],{135:function(e,t,n){"use strict";var a=n(182),r=n.n(a);t["a"]=r.a,window.intl=r.a},141:function(e,t,n){e.exports=n(0)(1169)},142:function(e,t,n){e.exports=n(123)(2563)},143:function(e,t,n){"use strict";function a(e,t,n,a,r){var o={};return Object.keys(a).forEach(function(e){o[e]=a[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,a){return a(e,t,n)||n},o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}n.d(t,"a",function(){return a})},144:function(e,t,n){e.exports=n(0)(198)},147:function(e,t,n){e.exports=n(0)(1147)},148:function(e,t,n){e.exports=n(0)(293)},150:function(e,t,n){"use strict";n(144),n(172),n(141)},151:function(e,t,n){e.exports=n(0)(1154)},152:function(e,t,n){e.exports=n(0)(164)},154:function(e,t,n){var a=n(194),r=n(195),o=n(196),i=n(165),l=n(197),c=n(198),s=n(199),u=n(200),d="[object Map]",f="[object Set]",p=Object.prototype,m=p.hasOwnProperty;function h(e){if(null==e)return!0;if(l(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||u(e)||o(e)))return!e.length;var t=r(e);if(t==d||t==f)return!e.size;if(s(e))return!a(e).length;for(var n in e)if(m.call(e,n))return!1;return!0}e.exports=h},155:function(e,t,n){"use strict";n(144),n(179)},156:function(e,t,n){e.exports=n(0)(261)},157:function(e,t,n){"use strict";n(144),n(179)},158:function(e,t,n){e.exports=n(0)(144)},161:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function r(e,t){if(null==e)return{};var n,r,o=a(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",function(){return r})},165:function(e,t,n){e.exports=n(0)(82)},172:function(e,t,n){e.exports={"ant-modal":"ant-modal","ant-modal-wrap":"ant-modal-wrap","ant-modal-title":"ant-modal-title","ant-modal-content":"ant-modal-content","ant-modal-close":"ant-modal-close","ant-modal-close-x":"ant-modal-close-x","ant-modal-header":"ant-modal-header","ant-modal-body":"ant-modal-body","ant-modal-footer":"ant-modal-footer","zoom-enter":"zoom-enter","zoom-appear":"zoom-appear","ant-modal-mask":"ant-modal-mask","ant-modal-mask-hidden":"ant-modal-mask-hidden","ant-modal-open":"ant-modal-open","vertical-center-modal":"vertical-center-modal","ant-confirm":"ant-confirm","ant-confirm-body-wrapper":"ant-confirm-body-wrapper","ant-confirm-body":"ant-confirm-body","ant-confirm-title":"ant-confirm-title","ant-confirm-content":"ant-confirm-content",anticon:"anticon","ant-confirm-btns":"ant-confirm-btns","ant-confirm-error":"ant-confirm-error","ant-confirm-warning":"ant-confirm-warning","ant-confirm-confirm":"ant-confirm-confirm","ant-confirm-info":"ant-confirm-info","ant-confirm-success":"ant-confirm-success"}},182:function(e,t,n){e.exports=n(123)(2648)},194:function(e,t,n){e.exports=n(0)(849)},195:function(e,t,n){e.exports=n(0)(328)},196:function(e,t,n){e.exports=n(0)(270)},197:function(e,t,n){e.exports=n(0)(170)},198:function(e,t,n){e.exports=n(0)(324)},199:function(e,t,n){e.exports=n(0)(386)},200:function(e,t,n){e.exports=n(0)(387)},63:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return _});n(150);var a,r,o,i,l,c,s,u,d=n(151),f=(n(146),n(148)),p=(n(155),n(156)),m=(n(157),n(158)),h=n(161),v=n(136),y=n(137),b=n(140),g=n(138),O=n(185),j=n(139),T=n(143),E=(n(168),n(152)),k=(n(149),n(147)),w=n(154),x=n.n(w),C=n(1),P=n.n(C),S=n(142),z=n(135),A=k["default"].Item,U=E["default"].Option,V={labelCol:{span:6},wrapperCol:{span:16}},_=(a=k["default"].create({fieldNameProp:null}),r=Object(S["Bind"])(),o=Object(S["Bind"])(),i=Object(S["Bind"])(),l=Object(S["Bind"])(),a((u=function(e){function t(e){var n;return Object(v["a"])(this,t),n=Object(b["a"])(this,Object(g["a"])(t).call(this,e)),n.defaultRowkey="id",n.state={isGrantTypeActive:!1},n.cancel=n.cancel.bind(Object(O["a"])(n)),n}return Object(j["a"])(t,e),Object(y["a"])(t,[{key:"componentDidMount",value:function(){var e=this.props.onRef;e&&e(this)}},{key:"ok",value:function(){var e=this.props,t=e.onOk,n=void 0===t?function(e){return e}:t,a=e.form.validateFields;a(function(e,t){x()(e)&&n(t)}),this.cancel()}},{key:"cancel",value:function(){var e=this.props.onCancel,t=void 0===e?function(e){return e}:e;t()}},{key:"handleChangeAuthType",value:function(){var e=this.props.form.setFieldsValue;e({grantType:void 0})}},{key:"onGrantTypeChange",value:function(){var e=this.props.form.setFieldsValue;e({accessTokenUrl:void 0,authUsername:void 0,authPassword:void 0,clientId:void 0,clientSecret:void 0}),this.setState({isGrantTypeActive:!0})}},{key:"render",value:function(){var e=this.props,t=(e.title,e.visible),n=(e.onCancel,e.onOk,e.dataSource),a=(e.loading,e.defaultSelectedRow,e.form),r=a.getFieldDecorator,o=void 0===r?function(e){return e}:r,i=a.getFieldValue,l=e.authTypes,c=e.grantTypes,s=Object(h["a"])(e,["title","visible","onCancel","onOk","dataSource","loading","defaultSelectedRow","form","authTypes","grantTypes"]),u=this.state.isGrantTypeActive,v=void 0!==u&&u,y=n.authType,b=n.grantType,g=n.authUsername,O=n.authPassword,j=n.clientSecret,T=n.clientId,w=n.accessTokenUrl,x=i("authType"),C=i("grantType"),S="BASIC"===x||"OAUTH2"===x&&"PASSWORD"===C,_="OAUTH2"===x&&"CLIENT"===C;return P.a.createElement(d["default"],Object.assign({title:z["a"].get("hitf.services.view.message.title.editor.authConfig").d("\u670d\u52a1\u8ba4\u8bc1\u914d\u7f6e"),visible:t,onOk:this.ok.bind(this),onCancel:this.cancel.bind(this),destroyOnClose:!0,width:680},s),P.a.createElement(k["default"],null,P.a.createElement(p["default"],null,P.a.createElement(m["default"],{span:12},P.a.createElement(A,Object.assign({label:z["a"].get("hitf.services.model.services.authType").d("\u8ba4\u8bc1\u6a21\u5f0f")},V),o("authType",{initialValue:y||"NONE",rules:[{required:!0,message:z["a"].get("hzero.common.validation.notNull",{name:z["a"].get("hitf.services.model.services.authType").d("\u8ba4\u8bc1\u6a21\u5f0f")})}]})(P.a.createElement(E["default"],{onChange:this.handleChangeAuthType},l.map(function(e){return P.a.createElement(U,{key:e.value,value:e.value},e.meaning)}))))),"OAUTH2"===i("authType")&&P.a.createElement(m["default"],{span:12},P.a.createElement(A,Object.assign({label:z["a"].get("hitf.services.model.services.grantType").d("\u6388\u6743\u6a21\u5f0f")},V),o("grantType",{initialValue:"OAUTH2"===y?b:void 0})(P.a.createElement(E["default"],{onChange:this.onGrantTypeChange},c.map(function(e){return P.a.createElement(U,{key:e.value,value:e.value},e.meaning)})))))),P.a.createElement(p["default"],null,S&&P.a.createElement(m["default"],{span:12},P.a.createElement(A,Object.assign({label:z["a"].get("hitf.services.model.services.authUsername").d("\u8ba4\u8bc1\u7528\u6237\u540d")},V),o("authUsername",{initialValue:v?null:g})(P.a.createElement(f["default"],null)))),S&&P.a.createElement(m["default"],{span:12},P.a.createElement(A,Object.assign({label:z["a"].get("hitf.services.model.services.authPassword").d("\u8ba4\u8bc1\u5bc6\u7801")},V),o("authPassword",{initialValue:v?null:O})(P.a.createElement(f["default"],null))))),P.a.createElement(p["default"],null,_&&P.a.createElement(m["default"],{span:12},P.a.createElement(A,Object.assign({label:z["a"].get("hitf.services.model.services.clientId").d("\u5ba2\u6237\u7aefID")},V),o("clientId",{initialValue:v?null:T})(P.a.createElement(f["default"],null)))),_&&P.a.createElement(m["default"],{span:12},P.a.createElement(A,Object.assign({label:z["a"].get("hitf.services.model.services.clientSecret").d("\u5ba2\u6237\u7aef\u5bc6\u94a5")},V),o("clientSecret",{initialValue:v?null:j})(P.a.createElement(f["default"],null))))),P.a.createElement(p["default"],null,_&&P.a.createElement(m["default"],{span:18},P.a.createElement(A,Object.assign({label:z["a"].get("hitf.services.model.services.accessTokenUrl").d("\u83b7\u53d6Token\u7684URL")},V),o("accessTokenUrl",{initialValue:v?null:w})(P.a.createElement(f["default"],null)))))))}}]),t}(C["PureComponent"]),s=u,Object(T["a"])(s.prototype,"ok",[r],Object.getOwnPropertyDescriptor(s.prototype,"ok"),s.prototype),Object(T["a"])(s.prototype,"cancel",[o],Object.getOwnPropertyDescriptor(s.prototype,"cancel"),s.prototype),Object(T["a"])(s.prototype,"handleChangeAuthType",[i],Object.getOwnPropertyDescriptor(s.prototype,"handleChangeAuthType"),s.prototype),Object(T["a"])(s.prototype,"onGrantTypeChange",[l],Object.getOwnPropertyDescriptor(s.prototype,"onGrantTypeChange"),s.prototype),c=s))||c)}}]);