(window["webpackJsonppackages_hzero_front_hrpt_name_"]=window["webpackJsonppackages_hzero_front_hrpt_name_"]||[]).push([[39,54],Array(63).concat([function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return y});r(149);var n,o,i,a=r(133),u=(r(233),r(148)),p=r(107),c=r(108),s=r(109),l=r(106),d=r(110),f=r(116),x=r(1),h=r.n(x),m=r(114),g=r(111),b=r(199),q=r(113),y=(n=Object(m["Bind"])(),o=Object(m["Bind"])(),i=function(e){function t(){return Object(p["a"])(this,t),Object(s["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(c["a"])(t,[{key:"handleDetail",value:function(e){this.props.onDetail(e)}},{key:"handleExport",value:function(e){this.props.onExport(e)}},{key:"render",value:function(){var e=this,t=this.props,r=t.tenantRoleLevel,n=t.loading,o=t.dataSource,i=t.pagination,p=t.onChange,c=[{title:g["a"].get("entity.tenant.tag").d("\u79df\u6237"),dataIndex:"tenantName",width:150},{title:g["a"].get("hrpt.reportRequest.model.reportRequest.reportCode").d("\u62a5\u8868\u4ee3\u7801"),dataIndex:"reportCode"},{title:g["a"].get("hrpt.reportRequest.model.reportRequest.reportName").d("\u62a5\u8868\u540d\u79f0"),dataIndex:"reportName",width:150},{title:g["a"].get("hrpt.reportRequest.model.reportRequest.requestStatus").d("\u8fd0\u884c\u72b6\u6001"),dataIndex:"requestStatusMeaning",width:100,render:function(e,t){var r="";switch(t.requestStatus){case"F":r=h.a.createElement(u["default"],{color:"green",style:{margin:0}},e);break;case"E":r=h.a.createElement(u["default"],{color:"red",style:{margin:0}},e);break;case"W":r=h.a.createElement(u["default"],{color:"gold",style:{margin:0}},e);break;case"R":r=h.a.createElement(u["default"],{color:"blue",style:{margin:0}},e);break;default:r=h.a.createElement(u["default"],{style:{margin:0}},e);break}return r}},{title:g["a"].get("hrpt.reportRequest.model.reportRequest.requester").d("\u8bf7\u6c42\u4eba\u540d\u79f0"),dataIndex:"requester",width:150},{title:g["a"].get("hrpt.reportRequest.model.reportRequest.startDate").d("\u5f00\u59cb\u65f6\u95f4"),width:150,dataIndex:"startDate",render:b["b"]},{title:g["a"].get("hrpt.reportRequest.model.reportRequest.endDate").d("\u7ed3\u675f\u65f6\u95f4"),width:150,dataIndex:"endDate",render:b["b"]},{title:g["a"].get("hzero.common.button.action").d("\u64cd\u4f5c"),dataIndex:"operator",width:130,fixed:"right",render:function(t,r){var n=[];return n.push({key:"detail",ele:h.a.createElement("a",{onClick:function(){return e.handleDetail(r)}},g["a"].get("hrpt.reportRequest.model.reportRequest.detail").d("\u8be6\u60c5")),len:2,title:g["a"].get("hrpt.reportRequest.model.reportRequest.detail").d("\u8be6\u60c5")}),r.fileUrl&&n.push({key:"export",ele:h.a.createElement("a",{onClick:function(){return e.handleExport(r)}},g["a"].get("hrpt.reportRequest.model.reportRequest.export").d("\u5bfc\u51fa\u7ed3\u679c")),len:4,title:g["a"].get("hrpt.reportRequest.model.reportRequest.export").d("\u5bfc\u51fa\u7ed3\u679c")}),Object(b["d"])(n)}}].filter(function(e){return!r||"tenantName"!==e.dataIndex});return h.a.createElement(a["default"],{bordered:!0,rowKey:"requestId",loading:n,columns:c,scroll:{x:Object(q["v"])(c)},dataSource:o,pagination:i,onChange:p})}}]),t}(x["PureComponent"]),Object(f["a"])(i.prototype,"handleDetail",[n],Object.getOwnPropertyDescriptor(i.prototype,"handleDetail"),i.prototype),Object(f["a"])(i.prototype,"handleExport",[o],Object.getOwnPropertyDescriptor(i.prototype,"handleExport"),i.prototype),i)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){e.exports=r(0)(198)},,,,,,,function(e,t,r){e.exports=r(0)(1169)},,function(e,t,r){e.exports=r(98)(2563)},,function(e,t,r){"use strict";function n(e,t,r,n,o){var i={};return Object.keys(n).forEach(function(e){i[e]=n[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}r.d(t,"a",function(){return n})},,function(e,t,r){e.exports=r(0)(82)},function(e,t,r){e.exports=r(0)(1168)},function(e,t,r){e.exports=r(0)(37)},function(e,t,r){e.exports=r(0)(116)},,,,function(e,t,r){e.exports=r(0)(34)},,,function(e,t,r){e.exports=r(0)(1167)},function(e,t,r){e.exports=r(0)(604)},function(e,t,r){e.exports=r(0)(1155)},function(e,t,r){e.exports=r(0)(829)},,function(e,t,r){e.exports=r(0)(1161)},function(e,t,r){e.exports=r(0)(182)},function(e,t,r){e.exports=r(0)(274)},,,,,,function(e,t,r){e.exports=r(0)(130)},function(e,t,r){e.exports=r(98)(2648)},,,,,,function(e,t,r){e.exports=r(0)(661)},,function(e,t,r){e.exports=r(0)(2092)},function(e,t,r){e.exports=r(0)(849)},function(e,t,r){e.exports=r(0)(328)},function(e,t,r){e.exports=r(0)(270)},function(e,t,r){e.exports=r(0)(170)},function(e,t,r){e.exports=r(0)(324)},function(e,t,r){e.exports=r(0)(386)},function(e,t,r){e.exports=r(0)(387)},,,function(e,t,r){e.exports=r(0)(2130)},,,function(e,t,r){e.exports=r(0)(325)},,function(e,t,r){e.exports=r(98)(2662)},function(e,t,r){e.exports=r(0)(241)},function(e,t,r){e.exports=r(0)(151)},function(e,t,r){e.exports=r(98)(1367)},function(e,t,r){e.exports=r(0)(127)},function(e,t,r){e.exports=r(0)(484)},function(e,t,r){e.exports=r(0)(2129)},function(e,t,r){e.exports=r(0)(235)},function(e,t,r){e.exports=r(0)(209)},function(e,t,r){e.exports=r(0)(868)},function(e,t,r){e.exports=r(0)(385)},function(e,t,r){e.exports=r(0)(156)},function(e,t,r){e.exports=r(0)(255)},function(e,t,r){e.exports=r(0)(1960)},function(e,t,r){e.exports=r(0)(298)},function(e,t,r){e.exports=r(0)(1132)},function(e,t,r){e.exports=r(0)(580)},function(e,t,r){e.exports=r(0)(582)},function(e,t,r){e.exports=r(0)(128)},function(e,t,r){e.exports=r(0)(108)},function(e,t,r){e.exports=r(0)(472)},function(e,t,r){e.exports=r(0)(873)},,,function(e,t,r){e.exports=r(0)(1974)}])]);