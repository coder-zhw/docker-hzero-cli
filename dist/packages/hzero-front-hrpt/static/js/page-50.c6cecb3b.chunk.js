(window["webpackJsonppackages_hzero_front_hrpt_name_"]=window["webpackJsonppackages_hzero_front_hrpt_name_"]||[]).push([[53,54,75],Array(31).concat([function(e,t,a){"use strict";a.r(t);a(323);var n=a(246),r=a.n(n),o=(a(237),a(258)),l=a.n(o),p=(a(304),a(273)),i=a.n(p),u=a(2),c=a.n(u),d=a(22),s=a(21),m=(a(305),a(243)),b=a.n(m),f=a(23),g=(a(240),a(241)),y=a.n(g),h=a(1),v=a.n(h),T=a(202),x=a.n(T),O=a(309),k=a(162),w=a(234),L=a(380),j=a.n(L);function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map(function(e){var t=e.value,a=e.meaning;return v.a.createElement(y.a.Option,{value:t,key:t},a)})}var N=function(e){var t=e.isCreate,a=void 0===t||t,n=e.initialData,o=e.interactedRef,p=v.a.useState(),u=Object(f["a"])(p,2),m=(u[0],u[1]),g=v.a.useMemo(function(){var e=Object(w["c"])(),t=new b.a(Object(s["a"])({},e.ds));return t.create(a?{shape:e.constants.shape.rectangle,type:e.constants.type.text,sourceType:e.constants.sourceType.text,width:100,height:100,text:"label text",param:"",src:""}:n),{ds:t,constants:e.constants,options:e.options,srcFileList:a?[]:[{url:n.src,uid:"-1",status:"done"}]}},[]),h=g.ds,T=g.options,L=g.constants,N=g.srcFileList,P=v.a.useCallback(function(e){h.current.set("src",e.response||e.url||e.thumbUrl)},[h]);v.a.useEffect(function(){var e=function(e){var t=e.name;["shape","type","sourceType"].includes(t)&&m(x()())};return h.addEventListener("update",e),function(){h.removeEventListener("update",e)}},[h]),v.a.useImperativeHandle(o,function(){return{getValidateData:function(){var e=Object(d["a"])(c.a.mark(function e(){var t,a,n,r;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=function(){if(!t.code)return!1;switch(t.sourceType){case L.sourceType.text:return!!t.text;case L.sourceType.param:return!!t.param;case L.sourceType.upload:return!!t.src;default:return!1}},n=function(){return t.width>0&&t.height>0},t=h.toData()[0],a=!1,e.t0=t.shape,e.next=e.t0===L.shape.horizontalLine?7:e.t0===L.shape.verticalLine?9:e.t0===L.shape.rectangle?11:e.t0===L.shape.circle?13:15;break;case 7:return n()&&(a=!0),e.abrupt("break",16);case 9:return n()&&(a=!0),e.abrupt("break",16);case 11:return n()&&r()&&(a=!0),e.abrupt("break",16);case 13:return n()&&r()&&(a=!0),e.abrupt("break",16);case 15:a=!1;case 16:if(!a){e.next=18;break}return e.abrupt("return",t);case 18:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}});var C=h.current.toData();return v.a.createElement(r.a,{columns:1,dataSet:h,className:j.a["label-editor"]},v.a.createElement(y.a,{key:"shape",name:"shape"},E(T.shape)),v.a.createElement(i.a,{key:"width",name:"width",min:1}),v.a.createElement(i.a,{key:"height",name:"height",min:1}),[L.shape.circle,L.shape.rectangle].includes(C.shape)&&[v.a.createElement(y.a,{key:"type",name:"type"},E(T.type)),v.a.createElement(l.a,{key:"code",name:"code"}),v.a.createElement(y.a,{key:"sourceType",name:"sourceType"},E(T.sourceType.filter(function(e){var t=e.value;return C.type===L.type.img||t!==L.sourceType.upload})))],[L.shape.circle,L.shape.rectangle].includes(C.shape)&&L.sourceType.text===C.sourceType&&v.a.createElement(l.a,{key:"text",name:"text"}),[L.shape.circle,L.shape.rectangle].includes(C.shape)&&L.sourceType.param===C.sourceType&&v.a.createElement(l.a,{key:"param",name:"param"}),[L.shape.circle,L.shape.rectangle].includes(C.shape)&&L.sourceType.upload===C.sourceType&&v.a.createElement(O["a"],{single:!0,key:"src",name:"src",fileType:"image/jpeg,image/png",onUploadSuccess:P,fileList:N,bucketName:k["c"]}))};t["default"]=N},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(0)(198)},function(e,t,a){"use strict";function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}a.d(t,"a",function(){return n})},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",function(){return n})},function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",function(){return r})},function(e,t,a){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var r=a(127);function o(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?Object(r["a"])(e):t}a.d(t,"a",function(){return o})},function(e,t,a){"use strict";function n(e,t){return n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",function(){return r})},,function(e,t,a){e.exports=a(0)(1169)},,function(e,t,a){e.exports=a(98)(2563)},,function(e,t,a){"use strict";function n(e,t,a,n,r){var o={};return Object.keys(n).forEach(function(e){o[e]=n[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=a.slice().reverse().reduce(function(a,n){return n(e,t,a)||a},o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}a.d(t,"a",function(){return n})},function(e,t,a){e.exports=a(0)(111)},function(e,t,a){e.exports=a(0)(82)},function(e,t,a){e.exports=a(0)(1168)},function(e,t,a){e.exports=a(0)(37)},function(e,t,a){e.exports=a(0)(116)},,,,function(e,t,a){e.exports=a(0)(34)},,function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",function(){return n})},function(e,t,a){e.exports=a(0)(1167)},function(e,t,a){e.exports=a(0)(604)},function(e,t,a){e.exports=a(0)(1155)},function(e,t,a){e.exports=a(0)(829)},,,function(e,t,a){e.exports=a(0)(182)},function(e,t,a){e.exports=a(0)(274)},,,,,,function(e,t,a){e.exports=a(0)(130)},function(e,t,a){e.exports=a(98)(2648)},,function(e,t,a){e.exports=a(0)(1852)},,,,function(e,t,a){e.exports=a(0)(661)},,function(e,t,a){e.exports=a(0)(2092)},function(e,t,a){e.exports=a(0)(849)},function(e,t,a){e.exports=a(0)(328)},function(e,t,a){e.exports=a(0)(270)},function(e,t,a){e.exports=a(0)(170)},function(e,t,a){e.exports=a(0)(324)},function(e,t,a){e.exports=a(0)(386)},function(e,t,a){e.exports=a(0)(387)},,,function(e,t,a){e.exports=a(0)(2130)},,,function(e,t,a){e.exports=a(0)(325)},,function(e,t,a){e.exports=a(98)(2662)},function(e,t,a){e.exports=a(0)(241)},function(e,t,a){e.exports=a(0)(151)},function(e,t,a){e.exports=a(98)(1367)},function(e,t,a){e.exports=a(0)(127)},function(e,t,a){e.exports=a(0)(484)},function(e,t,a){e.exports=a(0)(2129)},function(e,t,a){e.exports=a(0)(235)},function(e,t,a){e.exports=a(0)(209)},function(e,t,a){e.exports=a(0)(868)},function(e,t,a){e.exports=a(0)(385)},function(e,t,a){e.exports=a(0)(156)},function(e,t,a){e.exports=a(0)(255)},function(e,t,a){e.exports=a(0)(1960)},function(e,t,a){e.exports=a(0)(298)},function(e,t,a){e.exports=a(0)(1132)},function(e,t,a){e.exports=a(0)(580)},function(e,t,a){e.exports=a(0)(582)},function(e,t,a){e.exports=a(0)(128)},function(e,t,a){e.exports=a(0)(108)},function(e,t,a){e.exports=a(0)(472)},function(e,t,a){e.exports=a(0)(873)},,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(98)(2670)},,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(0)(1858)},,,,function(e,t,a){e.exports=a(0)(61)},,,,,,,,,,,,function(e,t,a){"use strict";a.d(t,"d",function(){return u}),a.d(t,"b",function(){return c}),a.d(t,"e",function(){return d}),a.d(t,"c",function(){return s}),a.d(t,"a",function(){return m}),a.d(t,"f",function(){return b});var n=a(21),r=a(111),o=a(162),l=a(113),p=Object(l["q"])(),i=Object(l["g"])(),u=function(){return{rowKey:"labelTemplateId",autoQuery:!0,selection:!1,queryFields:[{name:"tenantLov",type:"object",label:r["a"].get("entity.tenant.tag").d("\u79df\u6237"),lovCode:"HPFM.TENANT",ignore:"always"},{name:"tenantId",type:"number",bind:"tenantLov.tenantId"},{name:"enabledFlag",label:r["a"].get("hzero.common.status").d("\u72b6\u6001"),type:"single",lookupCode:"HPFM.ENABLED_FLAG"},{name:"templateCode",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.templateCode").d("\u6a21\u677f\u4ee3\u7801"),type:"string"},{name:"templateName",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.templateName").d("\u6a21\u677f\u540d\u79f0"),type:"string"},{name:"datasetName",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.datasetName").d("\u6570\u636e\u96c6\u540d\u79f0"),type:"string"}],fields:[{name:"tenantLov",type:"object",label:r["a"].get("entity.tenant.tag").d("\u79df\u6237"),lovCode:"HPFM.TENANT",ignore:"always",required:!0},{name:"tenantId",type:"number",bind:"tenantLov.tenantId"},{name:"tenantName",type:"string",bind:"tenantLov.tenantName"},{name:"templateCode",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.templateCode").d("\u6a21\u677f\u4ee3\u7801"),type:"string",required:!0},{name:"templateName",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.templateName").d("\u6a21\u677f\u540d\u79f0"),type:"string",required:!0},{name:"datasetLov",type:"object",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.dataset").d("\u6570\u636e\u96c6"),lovCode:"HRPT.DATASET",ignore:"always",required:!0,cascadeMap:{tenantId:"tenantId"}},{name:"datasetId",bind:"datasetLov.datasetId",type:"number"},{name:"datasetName",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.datasetName").d("\u6570\u636e\u96c6\u540d\u79f0"),bind:"datasetLov.datasetName"},{name:"enabledFlag",label:r["a"].get("hzero.common.status").d("\u72b6\u6001"),type:"single",lookupCode:"HPFM.ENABLED_FLAG",defaultValue:"1",required:!0,transformResponse:function(e){return 0===e?"0":"1"}},{name:"templateWidth",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.templateWidth").d("\u6a21\u677f\u5bbd\u5ea6"),type:"number",required:!0},{name:"templateHigh",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.templateHigh").d("\u6a21\u677f\u9ad8\u5ea6"),type:"number",required:!0}],transport:{read:function(e){var t=e.data,a=e.config;return Object(n["a"])({},a,{url:p?"".concat(o["l"],"/v1/").concat(i,"/label-templates"):"".concat(o["l"],"/v1/label-templates"),method:"GET",query:t})},create:function(e){var t=e.data,a=e.config;return Object(n["a"])({},a,{url:p?"".concat(o["l"],"/v1/").concat(i,"/label-templates"):"".concat(o["l"],"/v1/label-templates"),method:"POST",data:t[0]})},destroy:function(e){var t=e.data,a=e.config;return Object(n["a"])({},a,{url:p?"".concat(o["l"],"/v1/").concat(i,"/label-templates"):"".concat(o["l"],"/v1/label-templates"),method:"DELETE",data:t[0]})}}}},c=function(e,t){return{rowKey:"labelTemplateId",autoQuery:!0,paging:!1,fields:[{name:"tenantLov",type:"object",label:r["a"].get("entity.tenant.tag").d("\u79df\u6237"),lovCode:"HPFM.TENANT",ignore:"always",required:!0},{name:"tenantId",type:"number",bind:"tenantLov.tenantId"},{name:"tenantName",type:"string",bind:"tenantLov.tenantName"},{name:"templateCode",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.templateCode").d("\u6a21\u677f\u4ee3\u7801"),type:"string",required:!0},{name:"templateName",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.templateName").d("\u6a21\u677f\u540d\u79f0"),type:"string",required:!0},{name:"datasetLov",type:"object",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.dataset").d("\u6570\u636e\u96c6"),lovCode:"HRPT.DATASET",ignore:"always",required:!0,cascadeMap:{tenantId:"tenantId"}},{name:"datasetId",bind:"datasetLov.datasetId",type:"number"},{name:"datasetName",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.datasetName").d("\u6570\u636e\u96c6\u540d\u79f0"),bind:"datasetLov.datasetName"},{name:"enabledFlag",label:r["a"].get("hzero.common.status").d("\u72b6\u6001"),type:"single",lookupCode:"HPFM.ENABLED_FLAG",required:!0,defaultValue:"1",transformResponse:function(e){return 0===e?"0":"1"}},{name:"templateWidth",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.templateWidth").d("\u6a21\u677f\u5bbd\u5ea6"),type:"number",required:!0},{name:"templateHigh",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.templateHigh").d("\u6a21\u677f\u9ad8\u5ea6"),type:"number",required:!0},{name:"templateContent",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.templateContent").d("\u6a21\u677f\u5185\u5bb9"),type:"string"}],transport:{read:function(t){var a=t.config;return Object(n["a"])({},a,{url:p?"".concat(o["l"],"/v1/").concat(i,"/label-templates/").concat(e):"".concat(o["l"],"/v1/label-templates/").concat(e),method:"GET",query:{}})},update:function(e){var t=e.data,a=e.config;return Object(n["a"])({},a,{url:p?"".concat(o["l"],"/v1/").concat(i,"/label-templates"):"".concat(o["l"],"/v1/label-templates"),method:"PUT",data:t[0]})}},children:{labelParameterList:t}}},d=function(){return{rowKey:"labelParameterId",autoQuery:!1,paging:!1,selection:!1,fields:[{name:"parameterCode",label:r["a"].get("hrpt.labelTemplate.model.parameter.parameterCode").d("\u53c2\u6570\u4ee3\u7801"),type:"string",required:!0},{name:"parameterName",label:r["a"].get("hrpt.labelTemplate.model.parameter.parameterName").d("\u53c2\u6570\u540d\u79f0"),type:"string",required:!0},{name:"paramTypeCode",label:r["a"].get("hrpt.labelTemplate.model.parameter.parameterType").d("\u53c2\u6570\u7c7b\u578b"),type:"single",required:!0,lookupCode:"HRPT.LABEL_PARAM_TYPE"},{name:"textLength",label:r["a"].get("hrpt.labelTemplate.model.parameter.textLength").d("\u6587\u5b57\u957f\u5ea6"),type:"number"},{name:"maxRows",label:r["a"].get("hrpt.labelTemplate.model.parameter.maxRows").d("\u6700\u5927\u884c\u6570"),type:"number"},{name:"barCodeType",label:r["a"].get("hrpt.labelTemplate.model.parameter.barCodeType").d("\u6761\u7801\u7c7b\u578b"),type:"single",lookupCode:"HRPT.LABEL_BARCODE_TYPE"},{name:"characterEncoding",label:r["a"].get("hrpt.labelTemplate.model.parameter.characterEncoding").d("\u5b57\u7b26\u7f16\u7801"),type:"string",dynamicProps:{required:function(e){var t=e.record;return"BARCODE"===t.get("paramTypeCode")}},lookupCode:"HRPT.LABEL.CHARACTER_ENCODE"}],transport:{destroy:function(e){var t=e.data,a=e.config;return Object(n["a"])({},a,{url:p?"".concat(o["l"],"/v1/").concat(i,"/label-parameters"):"".concat(o["l"],"/v1/label-parameters"),method:"DELETE",data:t[0]})}}}},s=function(){return{constants:{shape:{circle:"1",rectangle:"2",horizontalLine:"4",verticalLine:"8"},type:{text:"1",img:"2",bar:"4",qr:"8"},sourceType:{text:"1",param:"2",upload:"4"}},options:{shape:[{value:"1",meaning:r["a"].get("hrpt.labelTemplate.view.option.cke.p.label.shape.circle").d("\u5706")},{value:"2",meaning:r["a"].get("hrpt.labelTemplate.view.option.cke.p.label.shape.rectangle").d("\u65b9\u5f62")},{value:"4",meaning:r["a"].get("hrpt.labelTemplate.view.option.cke.p.label.type.hL").d("\u6a2a\u7ebf")},{value:"8",meaning:r["a"].get("hrpt.labelTemplate.view.option.cke.p.label.type.verticalLine").d("\u7ad6\u7ebf")}],type:[{value:"1",meaning:r["a"].get("hrpt.labelTemplate.view.option.cke.p.label.type.text").d("\u6587\u672c")},{value:"2",meaning:r["a"].get("hrpt.labelTemplate.view.option.cke.p.label.type.img").d("\u56fe\u7247")},{value:"4",meaning:r["a"].get("hrpt.labelTemplate.view.option.cke.p.label.type.bar").d("\u6761\u7801")},{value:"8",meaning:r["a"].get("hrpt.labelTemplate.view.option.cke.p.label.type.qr").d("\u4e8c\u7ef4\u7801")}],sourceType:[{value:"1",meaning:r["a"].get("hrpt.labelTemplate.view.option.cke.p.label.sourceType.text").d("\u624b\u52a8\u8f93\u5165")},{value:"2",meaning:r["a"].get("hrpt.labelTemplate.view.option.cke.p.label.sourceType.param").d("\u8868\u8fbe\u5f0f")},{value:"4",meaning:r["a"].get("hrpt.labelTemplate.view.option.cke.p.label.sourceType.upload").d("\u4e0a\u4f20\u56fe\u7247")}]},ds:{fields:[{name:"shape",label:r["a"].get("hrpt.labelTemplate.model.cke.p.label.shape").d("\u5f62\u72b6"),required:!0},{name:"code",label:r["a"].get("hrpt.labelTemplate.model.cke.p.label.code").d("\u53c2\u6570"),required:!0},{name:"type",label:r["a"].get("hrpt.labelTemplate.model.cke.p.label.type").d("\u7c7b\u578b"),required:!0},{name:"sourceType",label:r["a"].get("hrpt.labelTemplate.model.cke.p.label.sourceType").d("\u8f93\u5165\u6e90"),required:!0,defaultValue:"1"},{name:"width",label:r["a"].get("hrpt.labelTemplate.model.cke.p.label.width").d("\u5bbd"),type:"number",required:!0},{name:"height",label:r["a"].get("hrpt.labelTemplate.model.cke.p.label.height").d("\u9ad8"),type:"number",required:!0},{name:"text",label:r["a"].get("hrpt.labelTemplate.model.cke.p.label.text").d("\u5185\u5bb9"),type:"string",required:!0},{name:"param",label:r["a"].get("hrpt.labelTemplate.model.cke.p.label.param").d("\u8868\u8fbe\u5f0f"),type:"string",required:!0},{name:"src",label:r["a"].get("hrpt.labelTemplate.model.cke.p.label.src").d("\u56fe\u7247URL"),type:"string",required:!0}]}}},m=function(e){return{autoQuery:!0,selection:!1,queryFields:[{name:"tenantLov",type:"object",label:r["a"].get("entity.tenant.tag").d("\u79df\u6237"),lovCode:"HPFM.TENANT",ignore:"always",disabled:!0},{name:"tenantId",type:"number",bind:"tenantLov.tenantId"},{name:"enabledFlag",label:r["a"].get("hzero.common.status").d("\u72b6\u6001"),type:"single",lookupCode:"HPFM.ENABLED_FLAG",disabled:!0},{name:"templateCode",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.templateCode").d("\u6a21\u677f\u4ee3\u7801"),type:"string",disabled:!0},{name:"templateName",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.templateName").d("\u6a21\u677f\u540d\u79f0"),type:"string"},{name:"datasetName",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.datasetName").d("\u6570\u636e\u96c6\u540d\u79f0"),type:"string"},{name:"datasetLov",type:"object",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.dataset").d("\u6570\u636e\u96c6"),lovCode:"HRPT.DATASET",ignore:"always",required:!0,cascadeMap:{tenantId:"tenantId"}},{name:"datasetId",bind:"datasetLov.datasetId",type:"number"},{name:"datasetName",label:r["a"].get("hrpt.labelTemplate.model.labelTemplate.datasetName").d("\u6570\u636e\u96c6\u540d\u79f0"),bind:"datasetLov.datasetName"}],fields:[{name:"tenantLov",type:"object",lovCode:"HPFM.TENANT",label:r["a"].get("entity.tenant.tag").d("\u79df\u6237"),ignore:"always",required:!0},{name:"tenantId",type:"number",bind:"tenantLov.tenantId"},{name:"tenantName",type:"string",bind:"tenantLov.tenantName"},{name:"roleLov",type:"object",lovCode:"HIAM.TENANT_ROLE",label:r["a"].get("hrpt.labelTemplate.model.labelPermissions.role").d("\u89d2\u8272"),cascadeMap:{tenantId:"tenantId"},ignore:"always",required:!0},{name:"roleId",type:"number",bind:"roleLov.id"},{name:"roleName",type:"string",bind:"roleLov.name"},{name:"startDate",type:"date",label:r["a"].get("hrpt.labelTemplate.model.labelPermissions.startDate").d("\u751f\u6548\u65e5\u671f"),dynamicProps:{max:function(e){var t=e.record;return t.get("endDate")}}},{name:"endDate",type:"date",label:r["a"].get("hrpt.labelTemplate.model.labelPermissions.endDate").d("\u5931\u6548\u65e5\u671f"),dynamicProps:{min:function(e){var t=e.record;return t.get("startDate")}}},{name:"remark",type:"string",label:r["a"].get("hrpt.labelTemplate.model.labelPermissions.remark").d("\u63cf\u8ff0")}],transport:{read:function(t){var a=t.params,r=t.config;return Object(n["a"])({},r,{url:p?"".concat(o["l"],"/v1/").concat(i,"/label-permissions"):"".concat(o["l"],"/v1/label-permissions"),method:"GET",params:Object(n["a"])({},a,{labelTemplateId:e.labelTemplateId})})},create:function(e){var t=e.data,a=e.config;return Object(n["a"])({},a,{url:p?"".concat(o["l"],"/v1/").concat(i,"/label-permissions"):"".concat(o["l"],"/v1/label-permissions"),method:"POST",data:t[0]})},update:function(e){var t=e.data,a=e.config;return Object(n["a"])({},a,{url:p?"".concat(o["l"],"/v1/").concat(i,"/label-permissions"):"".concat(o["l"],"/v1/label-permissions"),method:"PUT",data:t[0]})},destroy:function(e){var t=e.data,a=e.config;return Object(n["a"])({},a,{url:p?"".concat(o["l"],"/v1/").concat(i,"/label-permissions"):"".concat(o["l"],"/v1/label-permissions"),method:"DELETE",data:t[0]})}}}},b=function(e){return{autoQuery:!1,autoCreate:!0,paging:!1,fields:[{name:"paperSize",label:r["a"].get("hrpt.labelTemplate.model.print.paperSize").d("\u7eb8\u5f20\u5c3a\u5bf8"),lookupCode:"HRPT.LABEL.PAPER",type:"string",required:!0},{name:"paperWidth",label:r["a"].get("hrpt.labelTemplate.model.print.paperWidth").d("\u5bbd\u5ea6(mm)"),type:"number",required:!0,dynamicProps:{readOnly:function(e){var t=e.record;return"customize"!==t.get("paperSize")}}},{name:"paperHigh",label:r["a"].get("hrpt.labelTemplate.model.print.paperHigh").d("\u9ad8\u5ea6(mm)"),type:"number",dynamicProps:{readOnly:function(e){var t=e.record;return"customize"!==t.get("paperSize")||t.get("_paperNoLimit")},required:function(e){var t=e.record;return!t.get("_paperNoLimit")}}},{name:"_paperNoLimit",label:r["a"].get("hrpt.labelTemplate.model.print.paperNoLimit").d("\u65e0\u9650\u5236"),type:"boolean",trueValue:!0,falseValue:!1,defaultValue:!1,dynamicProps:{readOnly:function(e){var t=e.record;return"customize"!==t.get("paperSize")}}},{name:"printDirection",label:r["a"].get("hrpt.labelTemplate.model.print.printDirection").d("\u65b9\u5411"),type:"boolean",trueValue:0,falseValue:1,defaultValue:0},{name:"marginTop",label:r["a"].get("hrpt.labelTemplate.model.print.marginTop").d("\u4e0a(mm)"),type:"number",required:!0,defaultValue:0},{name:"marginRight",label:r["a"].get("hrpt.labelTemplate.model.print.marginRight").d("\u53f3(mm)"),type:"number",required:!0,defaultValue:0},{name:"marginBottom",label:r["a"].get("hrpt.labelTemplate.model.print.marginBottom").d("\u4e0b(mm)"),type:"number",defaultValue:0,dynamicProps:{readOnly:function(e){var t=e.record;return t.get("_paperNoLimit")},required:function(e){var t=e.record;return!t.get("_paperNoLimit")}}},{name:"marginLeft",label:r["a"].get("hrpt.labelTemplate.model.print.marginLeft").d("\u5de6(mm)"),type:"number",required:!0,defaultValue:0},{name:"wideQty",label:r["a"].get("hrpt.labelTemplate.model.print.wideQty").d("\u5bbd(\u4e2a)"),type:"number",required:!0,defaultValue:1},{name:"highQty",label:r["a"].get("hrpt.labelTemplate.model.print.highQty").d("\u9ad8(\u4e2a)"),type:"number",defaultValue:1,dynamicProps:{readOnly:function(e){var t=e.record;return t.get("_paperNoLimit")}}},{name:"highSpace",label:r["a"].get("hrpt.labelTemplate.model.print.highSpace").d("\u9ad8\u95f4\u8ddd(mm)"),type:"number",defaultValue:0,dynamicProps:{required:function(e){var t=e.record;return t.get("_paperNoLimit")}}}],transport:{read:function(t){var a=t.config;return Object(n["a"])({},a,{url:p?"".concat(o["l"],"/v1/").concat(i,"/label-prints/").concat(e.templateCode):"".concat(o["l"],"/v1/label-prints/").concat(e.templateCode),method:"GET",params:{tenantId:i}})},create:function(e){var t=e.data,a=e.config;return Object(n["a"])({},a,{url:p?"".concat(o["l"],"/v1/").concat(i,"/label-prints"):"".concat(o["l"],"/v1/label-prints"),method:"POST",data:t[0]})},update:function(e){var t=e.data,a=e.config;return Object(n["a"])({},a,{url:p?"".concat(o["l"],"/v1/").concat(i,"/label-prints"):"".concat(o["l"],"/v1/label-prints"),method:"POST",data:t[0]})}}}}},,,function(e,t,a){"use strict";a(132),a(266),a(242)},,,,function(e,t,a){e.exports=a(0)(2305)},,function(e,t,a){e.exports=a(0)(1258)},,,function(e,t,a){e.exports=a(0)(2224)},,,,,,,,,,,,function(e,t,a){e.exports=a(0)(2270)},,,,,,,,function(e,t,a){e.exports={"c7n-pro-input":"c7n-pro-input","c7n-pro-input-focused":"c7n-pro-input-focused","c7n-pro-input-disabled":"c7n-pro-input-disabled","c7n-pro-input-prefix":"c7n-pro-input-prefix","c7n-pro-input-suffix":"c7n-pro-input-suffix","c7n-pro-input-prefix-button":"c7n-pro-input-prefix-button","c7n-pro-input-suffix-button":"c7n-pro-input-suffix-button","c7n-pro-input-inner-button":"c7n-pro-input-inner-button","c7n-pro-input-not-editable":"c7n-pro-input-not-editable","c7n-pro-input-placeholder":"c7n-pro-input-placeholder","c7n-pro-input-rendered-value":"c7n-pro-input-rendered-value","c7n-pro-input-placeholder-inner":"c7n-pro-input-placeholder-inner","c7n-pro-input-rendered-value-inner":"c7n-pro-input-rendered-value-inner","c7n-pro-input-lg":"c7n-pro-input-lg","c7n-pro-input-sm":"c7n-pro-input-sm","c7n-pro-input-wrapper":"c7n-pro-input-wrapper","c7n-pro-field-label":"c7n-pro-field-label","c7n-pro-input-inner-button-clear-button":"c7n-pro-input-inner-button-clear-button","c7n-pro-input-clear-button":"c7n-pro-input-clear-button","c7n-pro-input-empty":"c7n-pro-input-empty","c7n-pro-input-multiple-value":"c7n-pro-input-multiple-value","c7n-pro-input-multiple-input":"c7n-pro-input-multiple-input","c7n-pro-input-multiple":"c7n-pro-input-multiple","c7n-pro-input-multiple-block":"c7n-pro-input-multiple-block","c7n-pro-input-multiple-block-invalid":"c7n-pro-input-multiple-block-invalid","c7n-pro-input-multiple-block-disabled":"c7n-pro-input-multiple-block-disabled",icon:"icon","c7n-pro-input-range-text":"c7n-pro-input-range-text","c7n-pro-input-range-start":"c7n-pro-input-range-start","c7n-pro-input-range-end":"c7n-pro-input-range-end","c7n-pro-input-range-split":"c7n-pro-input-range-split","c7n-pro-input-range-input":"c7n-pro-input-range-input","c7n-pro-input-group":"c7n-pro-input-group","c7n-pro-input-group-wrapper":"c7n-pro-input-group-wrapper","c7n-pro-input-group-before":"c7n-pro-input-group-before","c7n-pro-input-group-after":"c7n-pro-input-group-after","c7n-pro-input-group-help":"c7n-pro-input-group-help","c7n-pro-input-group-input":"c7n-pro-input-group-input","c7n-pro-input-required":"c7n-pro-input-required","c7n-pro-input-invalid":"c7n-pro-input-invalid","c7n-pro-input-underline":"c7n-pro-input-underline","c7n-pro-input-ripple":"c7n-pro-input-ripple","c7n-pro-input-float-label":"c7n-pro-input-float-label","c7n-pro-field-label-wrapper":"c7n-pro-field-label-wrapper","c7n-pro-input-float-label-group":"c7n-pro-input-float-label-group","c7n-pro-input-uppercase":"c7n-pro-input-uppercase","c7n-pro-input-lowercase":"c7n-pro-input-lowercase","c7n-pro-input-capitalize":"c7n-pro-input-capitalize"}},,function(e,t,a){"use strict";a(105),a(306),a(308),a(128)},function(e,t,a){e.exports=a(0)(1208)},,,,function(e,t,a){e.exports=a(0)(2271)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports={"ant-upload":"ant-upload","ant-upload-btn":"ant-upload-btn","ant-upload-select":"ant-upload-select","ant-upload-select-picture-card":"ant-upload-select-picture-card","ant-upload-drag":"ant-upload-drag","ant-upload-drag-hover":"ant-upload-drag-hover","ant-upload-disabled":"ant-upload-disabled","ant-upload-drag-container":"ant-upload-drag-container","ant-upload-drag-icon":"ant-upload-drag-icon",anticon:"anticon","ant-upload-text":"ant-upload-text","ant-upload-hint":"ant-upload-hint","anticon-plus":"anticon-plus","ant-upload-list":"ant-upload-list","ant-upload-list-item":"ant-upload-list-item","ant-upload-list-item-name":"ant-upload-list-item-name","ant-upload-list-item-info":"ant-upload-list-item-info","anticon-loading":"anticon-loading","anticon-paper-clip":"anticon-paper-clip","anticon-cross":"anticon-cross","ant-upload-list-item-error":"ant-upload-list-item-error","ant-upload-list-item-progress":"ant-upload-list-item-progress","ant-upload-list-picture":"ant-upload-list-picture","ant-upload-list-picture-card":"ant-upload-list-picture-card","ant-upload-list-item-file-name":"ant-upload-list-item-file-name","ant-upload-list-item-uploading":"ant-upload-list-item-uploading","ant-upload-list-item-thumbnail":"ant-upload-list-item-thumbnail","ant-upload-list-item-icon":"ant-upload-list-item-icon","ant-upload-list-item-action-remove":"ant-upload-list-item-action-remove","ant-upload-list-item-picture-card":"ant-upload-list-item-picture-card","ant-upload-list-item-actions":"ant-upload-list-item-actions","anticon-eye-o":"anticon-eye-o","anticon-download":"anticon-download","anticon-upload":"anticon-upload","anticon-picture":"anticon-picture","ant-upload-list-item-uploading-text":"ant-upload-list-item-uploading-text","ant-upload-success-icon":"ant-upload-success-icon","ant-upload-animate-enter":"ant-upload-animate-enter","ant-upload-animate-leave":"ant-upload-animate-leave","ant-upload-animate-inline-enter":"ant-upload-animate-inline-enter","ant-upload-animate-inline-leave":"ant-upload-animate-inline-leave",uploadAnimateIn:"uploadAnimateIn",uploadAnimateOut:"uploadAnimateOut",uploadAnimateInlineIn:"uploadAnimateInlineIn",uploadAnimateInlineOut:"uploadAnimateInlineOut"}},,function(e,t,a){e.exports=a(0)(2098)},function(e,t,a){"use strict";a.d(t,"a",function(){return W});a(268);var n,r,o,l,p,i,u,c=a(269),d=(a(112),a(117)),s=(a(119),a(120)),m=a(164),b=a(21),f=a(2),g=a.n(f),y=a(22),h=a(262),v=a(107),T=a(108),x=a(109),O=a(106),k=a(127),w=a(110),L=a(116),j=(a(238),a(130)),E=a(310),N=a.n(E),P=a(311),C=a.n(P),A=a(129),I=a.n(A),q=a(24),D=a.n(q),S=a(222),R=a.n(S),z=a(1),_=a.n(z),F=a(114),U=a(315),H=a.n(U),B=a(111),M=a(227),V=a(113),Q=a(162),G=a(158);j["default"].config({placement:"bottomRight"});var W=(n=Object(F["Bind"])(),r=Object(F["Bind"])(),o=Object(F["Bind"])(),l=Object(F["Bind"])(),p=Object(F["Bind"])(),i=Object(F["Bind"])(),u=function(e){function t(e){var a;Object(v["a"])(this,t),a=Object(x["a"])(this,Object(O["a"])(t).call(this,e));var n=a.props.onRef;return n&&n(Object(k["a"])(a)),a.state={fileList:null},a}return Object(w["a"])(t,e),Object(T["a"])(t,[{key:"setFileList",value:function(e){e&&this.setState({fileList:e})}},{key:"uploadData",value:function(e){var t=this.props,a=t.attachmentUUID,n=t.bucketName,r=t.uploadData,o=t.bucketDirectory,l=t.docType,p=t.storageCode,i=r?r(e):{};if(!(i instanceof FormData)){var u=i;i=new FormData,R()(i)&&Object.keys(u).forEach(function(e){i.append(e,u[e])})}return I()(a)||i.append("attachmentUUID",a),I()(n)||i.append("bucketName",n),I()(l)||i.append("docType",l),I()(p)||i.append("storageCode",p),I()(o)||i.append("directory",o),i}},{key:"onChange",value:function(e){var t=e.file,a=e.fileList,n=this.props,r=n.single,o=void 0!==r&&r,l=n.tenantId,p=n.bucketName,i=n.bucketDirectory,u=Object(h["a"])(a);if("done"===t.status){var c=t.response;if(c&&!0===c.failed)this.onUploadError(t,a);else{if(o){if(a.length>1){var d=this.props.onRemove;Promise.all(a.slice(0,a.length-1).map(function(){var e=Object(y["a"])(g.a.mark(function e(t){var a,n;return g.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.url){e.next=20;break}if(!d){e.next=11;break}return e.prev=2,e.next=5,d(t);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](2);case 9:e.next=20;break;case 11:return a=t.url&&t.url.split("=")||[],n=a[a.length-1],e.prev=13,e.next=16,Object(G["i"])({tenantId:l,bucketName:p,urls:[n]});case 16:e.next=20;break;case 18:e.prev=18,e.t1=e["catch"](13);case 20:case"end":return e.stop()}},e,null,[[2,7],[13,18]])}));return function(t){return e.apply(this,arguments)}}())).catch(function(){})}u=[{uid:t.uid,name:t.name,url:Object(V["e"])(t.response,p,l,i),thumbUrl:Object(V["e"])(t.response,p,l,i)}]}else u=a.map(function(e){return e.uid===t.uid&&(e.url=Object(V["e"])(e.response,p,l,i)),e});this.onUploadSuccess(t,u)}}else"error"===t.status&&(this.onUploadError(t,a),u=a.filter(function(e){return"error"!==e.status&&e.uid}));this.setState({fileList:N()(u,function(e,t){return e.uid===t.uid})})}},{key:"beforeUpload",value:function(e){var t=this.props,a=t.fileType,n=t.fileSize,r=void 0===n?31457280:n;if(a&&-1===a.indexOf(e.type)){e.status="error";var o={message:B["a"].get("hzero.common.upload.error.type",{fileType:a}).d("\u4e0a\u4f20\u6587\u4ef6\u7c7b\u578b\u5fc5\u987b\u662f\uff1a".concat(a))};return e.response=o,!1}if(e.size>r){e.status="error";var l={message:B["a"].get("hzero.common.upload.error.size",{fileSize:r/1048576}).d("\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7: ".concat(r/1048576," MB"))};return e.response=l,!1}return!0}},{key:"onRemove",value:function(e){var t=this,a=this.props,n=a.onRemove,r=a.bucketName,o=a.onRemoveSuccess,l=a.single,p=void 0!==l&&l,i=a.tenantId,u=this.state.fileList;if(e.url){if(n)return n(e);var c=e.url&&e.url.split("=")||[],d=c[c.length-1];return Object(G["i"])({tenantId:i,bucketName:r,urls:[d]}).then(function(a){return!!Object(V["k"])(a)&&(o&&o(),p?t.setState({fileList:[]}):(C()(u,function(t){return t.uid===e.uid}),t.setState({fileList:u})),!0)})}this.setState({fileList:u.filter(function(t){return t.uid!==e.uid})})}},{key:"onUploadSuccess",value:function(e,t){var a=this.props.onUploadSuccess;a&&a(e,t)}},{key:"onUploadError",value:function(e,t){var a=this.props.onUploadError,n=!0;a&&(n=!1!==a(e,t)),n&&j["default"].error({message:B["a"].get("hzero.common.upload.status.error").d("\u4e0a\u4f20\u5931\u8d25"),description:e.response&&e.response.message})}},{key:"changeFileList",value:function(e){var t=this.props,a=t.bucketName,n=t.bucketDirectory,r=t.tenantId;if(e)return e.map(function(e){return Object(b["a"])({},e,{url:Object(V["e"])(e.url,a,r,n)})})}},{key:"handleAction",value:function(e){var t=e.file,a=e.onProgress,n=e.onSuccess,r=e.onError,o=new H.a,l=o.signal,p=this.props.action,i=p||(Object(V["q"])()?"".concat(Q["f"],"/v1/").concat(Object(V["g"])(),"/files/multipart"):"".concat(Q["f"],"/v1/files/multipart")),u="".concat(i),c=this.uploadData(t);return c.append("file",t,t.name),Object(M["a"])(u,{processData:!1,method:"POST",type:"FORM",body:c,responseType:"text",signal:l,onProgress:a?function(e){return a(e,t)}:null},{beforeCatch:function(e){if("AbortError"!==e.name)throw new Error(e)}}).then(function(e){D()(e)?n(e):Object(V["k"])(e)||r(e)}),{abort:function(){o.abort()}}}},{key:"render",value:function(){var e=this.props,t=e.fileList,a=e.fileType,n=(e.fileSize,e.single,e.text),r=void 0===n?B["a"].get("hzero.common.upload.txt").d("\u4e0a\u4f20"):n,o=e.listType,l=void 0===o?"picture":o,p=(e.bucketName,e.onUploadSuccess,e.onUploadError,e.viewOnly),i=void 0!==p&&p,u=e.showRemoveIcon,b=void 0===u||u,f=(e.docType,e.storageCode,e.children),g=Object(m["a"])(e,["fileList","fileType","fileSize","single","text","listType","bucketName","onUploadSuccess","onUploadError","viewOnly","showRemoveIcon","docType","storageCode","children"]),y=Object(V["d"])(),h=this.changeFileList(t),v={};y&&(v.Authorization="bearer ".concat(y));var T,x=a&&-1===a.indexOf(",")?a.split(";").join(","):a;return T="picture-card"===l?_.a.createElement("div",null,_.a.createElement(s["default"],{style:{fontSize:"32px",color:"#999"},type:"plus"})):_.a.createElement(d["default"],null,_.a.createElement(s["default"],{type:"upload"})," ",r),_.a.createElement(c["default"],Object.assign({name:"file",accept:x,fileList:this.state.fileList||h,data:this.uploadData,customRequest:this.handleAction,headers:v,onChange:this.onChange,listType:l,beforeUpload:this.beforeUpload,onRemove:this.onRemove,showUploadList:{showRemoveIcon:!i&&b}},g),f||!i&&T)}}]),t}(_.a.Component),Object(L["a"])(u.prototype,"uploadData",[n],Object.getOwnPropertyDescriptor(u.prototype,"uploadData"),u.prototype),Object(L["a"])(u.prototype,"onChange",[r],Object.getOwnPropertyDescriptor(u.prototype,"onChange"),u.prototype),Object(L["a"])(u.prototype,"beforeUpload",[o],Object.getOwnPropertyDescriptor(u.prototype,"beforeUpload"),u.prototype),Object(L["a"])(u.prototype,"onRemove",[l],Object.getOwnPropertyDescriptor(u.prototype,"onRemove"),u.prototype),Object(L["a"])(u.prototype,"changeFileList",[p],Object.getOwnPropertyDescriptor(u.prototype,"changeFileList"),u.prototype),Object(L["a"])(u.prototype,"handleAction",[i],Object.getOwnPropertyDescriptor(u.prototype,"handleAction"),u.prototype),u)},function(e,t,a){var n=a(150);function r(e,t){return t="function"==typeof t?t:void 0,e&&e.length?n(e,void 0,t):[]}e.exports=r},function(e,t,a){var n=a(135),r=a(312);function o(e,t){var a=[];if(!e||!e.length)return a;var o=-1,l=[],p=e.length;t=n(t,3);while(++o<p){var i=e[o];t(i,o,e)&&(a.push(i),l.push(o))}return r(e,l),a}e.exports=o},function(e,t,a){var n=a(313),r=a(314),o=Array.prototype,l=o.splice;function p(e,t){var a=e?t.length:0,o=a-1;while(a--){var p=t[a];if(a==o||p!==i){var i=p;r(p)?l.call(e,p,1):n(e,p)}}return e}e.exports=p},function(e,t,a){e.exports=a(0)(2121)},function(e,t,a){e.exports=a(0)(242)},function(e,t,a){"use strict";var n="undefined"!==typeof self?self:"undefined"!==typeof window?window:void 0,r=n.AbortController,o=n.AbortSignal;e.exports=r,e.exports.AbortSignal=o,e.exports.default=r},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports={"label-editor":"hrpt-routes-label-template-components-label-ck-editor-plugins-label-template-styles-label-editor"}}])]);