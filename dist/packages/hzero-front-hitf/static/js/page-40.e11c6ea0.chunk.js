(window["webpackJsonppackages_hzero_front_hitf_name_"]=window["webpackJsonppackages_hzero_front_hitf_name_"]||[]).push([[78],{141:function(t,e,n){t.exports=n(0)(1169)},144:function(t,e,n){t.exports=n(0)(198)},153:function(t,e,n){t.exports=n(0)(1161)},159:function(t,e,n){t.exports=n(0)(116)},160:function(t,e,n){t.exports=n(0)(1155)},163:function(t,e,n){t.exports=n(0)(1168)},164:function(t,e,n){t.exports=n(0)(37)},165:function(t,e,n){t.exports=n(0)(82)},171:function(t,e,n){t.exports=n(0)(34)},174:function(t,e,n){t.exports=n(0)(130)},178:function(t,e,n){t.exports=n(0)(156)},181:function(t,e,n){t.exports=n(0)(274)},182:function(t,e,n){t.exports=n(123)(2648)},183:function(t,e,n){t.exports=n(0)(604)},184:function(t,e,n){t.exports=n(0)(1167)},187:function(t,e,n){t.exports=n(0)(829)},188:function(t,e,n){t.exports=n(0)(182)},190:function(t,e,n){t.exports=n(0)(2130)},191:function(t,e,n){t.exports=n(0)(661)},192:function(t,e,n){t.exports=n(0)(2092)},194:function(t,e,n){t.exports=n(0)(849)},195:function(t,e,n){t.exports=n(0)(328)},196:function(t,e,n){t.exports=n(0)(270)},197:function(t,e,n){t.exports=n(0)(170)},198:function(t,e,n){t.exports=n(0)(324)},199:function(t,e,n){t.exports=n(0)(386)},200:function(t,e,n){t.exports=n(0)(387)},204:function(t,e,n){t.exports=n(0)(325)},205:function(t,e,n){t.exports=n(0)(1132)},209:function(t,e,n){t.exports=n(123)(2662)},210:function(t,e,n){t.exports=n(0)(241)},211:function(t,e,n){t.exports=n(0)(151)},212:function(t,e,n){t.exports=n(123)(1367)},213:function(t,e,n){t.exports=n(0)(127)},214:function(t,e,n){t.exports=n(0)(484)},215:function(t,e,n){t.exports=n(0)(2129)},216:function(t,e,n){t.exports=n(0)(235)},217:function(t,e,n){t.exports=n(0)(209)},218:function(t,e,n){t.exports=n(0)(868)},219:function(t,e,n){t.exports=n(0)(385)},220:function(t,e,n){t.exports=n(0)(255)},221:function(t,e,n){t.exports=n(0)(1960)},222:function(t,e,n){t.exports=n(0)(298)},223:function(t,e,n){t.exports=n(0)(580)},224:function(t,e,n){t.exports=n(0)(582)},225:function(t,e,n){t.exports=n(0)(128)},226:function(t,e,n){t.exports=n(0)(108)},227:function(t,e,n){t.exports=n(0)(472)},228:function(t,e,n){t.exports=n(0)(873)},241:function(t,e,n){t.exports=n(0)(1974)},70:function(t,e,n){"use strict";n.r(e);n(170);var o=n(153),i=n(31),r=(n(371),n(205)),c=n(161),a=n(136),u=n(137),l=n(140),d=n(138),s=n(139),f=n(1),p=n.n(f),x=n(132),h=n(135),g=n(133),m=n(186),b=function(t){function e(){return Object(a["a"])(this,e),Object(l["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(u["a"])(e,[{key:"render",value:function(){var t=this.props,e=(t.code,t.dataSource),n=void 0===e?[]:e,a=t.loading,u=(t.organizationId,t.onListChange),l=void 0===u?function(t){return t}:u,d=t.tenantsMulti,s=t.openAuthEditor,f=void 0===s?function(){}:s,b=Object(c["a"])(t,["code","dataSource","loading","organizationId","onListChange","tenantsMulti","openAuthEditor"]),R=Object(x["t"])(),w=[{dataIndex:"name",title:h["a"].get("hitf.clientRole.model.clientRole.name").d("\u89d2\u8272\u540d\u79f0")},{dataIndex:"viewCode",title:h["a"].get("hitf.clientRole.model.clientRole.code").d("\u89d2\u8272\u7f16\u7801"),width:R?300:150},!g["n"]&&!R&&{dataIndex:"levelMeaning",title:h["a"].get("hitf.clientRole.model.clientRole.level").d("\u89d2\u8272\u5c42\u7ea7"),width:90},{dataIndex:"parentRoleName",title:h["a"].get("hitf.clientRole.model.clientRole.topRole").d("\u4e0a\u7ea7\u89d2\u8272"),width:150},!R&&{dataIndex:"roleSource",title:h["a"].get("hitf.clientRole.model.clientRole.roleSource").d("\u89d2\u8272\u6765\u6e90"),width:120,render:function(t,e){return e.roleSourceMeaning}},!g["n"]&&(!R||d)&&{dataIndex:"tenantName",title:h["a"].get("hitf.clientRole.model.clientRole.tenant").d("\u6240\u5c5e\u79df\u6237"),width:150},{dataIndex:"inheritedRoleName",title:h["a"].get("hitf.clientRole.model.clientRole.belong").d("\u7ee7\u627f\u81ea"),width:150},{dataIndex:"enabled",title:h["a"].get("hzero.common.status").d("\u72b6\u6001"),width:90,render:function(t,e){return p.a.createElement(r["default"],{status:e.enabled?"success":"error",text:e.enabled?h["a"].get("hzero.common.status.enable").d("\u542f\u7528"):h["a"].get("hzero.common.button.disable").d("\u7981\u7528")})}},{key:"operator",title:h["a"].get("hzero.common.button.action").d("\u64cd\u4f5c"),width:80,fixed:"right",render:function(t,e){var n=e.assignedFlag,o=e.adminFlag,i=e.haveAdminFlag,r=e.enabled,c=(1===n?4:0)+(1===o?2:0)+(1===i?1:0),a=[],u=[7,5,1],l=u.includes(c)&&r;return l&&a.push({key:"auth",ele:p.a.createElement("a",{onClick:function(){return f(e)}},h["a"].get("hitf.clientRole.view.button.auth").d("\u6388\u6743")),len:2,title:h["a"].get("hitf.clientRole.view.button.auth").d("\u6388\u6743")}),Object(m["d"])(a,e)}}].filter(Boolean),v=Object(i["a"])({dataSource:n,loading:a,columns:w,pagination:!1,bordered:!0,childrenColumnName:"childRoles",rowKey:this.defaultTableRowKey,scroll:{x:Object(x["y"])(w)},onChange:l},b);return p.a.createElement(o["default"],v)}}]),e}(f["PureComponent"]);e["default"]=b}}]);