(window["webpackJsonppackages_hzero_front_hwfp_name_"]=window["webpackJsonppackages_hzero_front_hwfp_name_"]||[]).push([[82],{143:function(t,e,n){t.exports=n(0)(198)},152:function(t,e,n){t.exports=n(127)(2563)},153:function(t,e,n){t.exports=n(0)(1169)},154:function(t,e,n){"use strict";function o(t,e,n,o,i){var r={};return Object.keys(o).forEach(function(t){r[t]=o[t]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=n.slice().reverse().reduce(function(n,o){return o(t,e,n)||n},r),i&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(i):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(t,e,r),r=null),r}n.d(e,"a",function(){return o})},158:function(t,e,n){t.exports=n(0)(116)},162:function(t,e,n){t.exports=n(0)(82)},164:function(t,e,n){t.exports=n(0)(1161)},165:function(t,e,n){t.exports=n(0)(1168)},166:function(t,e,n){t.exports=n(0)(37)},167:function(t,e,n){t.exports=n(0)(1155)},169:function(t,e,n){t.exports=n(0)(829)},173:function(t,e,n){t.exports=n(127)(2648)},174:function(t,e,n){t.exports=n(0)(34)},176:function(t,e,n){t.exports=n(0)(274)},177:function(t,e,n){t.exports=n(0)(1167)},180:function(t,e,n){t.exports=n(0)(604)},181:function(t,e,n){t.exports=n(0)(130)},184:function(t,e,n){t.exports=n(0)(182)},185:function(t,e,n){t.exports=n(0)(661)},195:function(t,e,n){t.exports=n(0)(849)},196:function(t,e,n){t.exports=n(0)(328)},197:function(t,e,n){t.exports=n(0)(270)},198:function(t,e,n){t.exports=n(0)(170)},199:function(t,e,n){t.exports=n(0)(324)},200:function(t,e,n){t.exports=n(0)(386)},201:function(t,e,n){t.exports=n(0)(387)},204:function(t,e,n){t.exports=n(0)(868)},205:function(t,e,n){t.exports=n(0)(2092)},207:function(t,e,n){t.exports=n(0)(325)},208:function(t,e,n){t.exports=n(0)(209)},209:function(t,e,n){t.exports=n(127)(2662)},210:function(t,e,n){t.exports=n(0)(241)},211:function(t,e,n){t.exports=n(0)(235)},212:function(t,e,n){t.exports=n(0)(151)},213:function(t,e,n){t.exports=n(127)(1367)},214:function(t,e,n){t.exports=n(0)(582)},215:function(t,e,n){t.exports=n(0)(127)},216:function(t,e,n){t.exports=n(0)(484)},217:function(t,e,n){t.exports=n(0)(2129)},218:function(t,e,n){t.exports=n(0)(385)},219:function(t,e,n){t.exports=n(0)(156)},220:function(t,e,n){t.exports=n(0)(255)},221:function(t,e,n){t.exports=n(0)(1960)},222:function(t,e,n){t.exports=n(0)(298)},223:function(t,e,n){t.exports=n(0)(1132)},224:function(t,e,n){t.exports=n(0)(580)},225:function(t,e,n){t.exports=n(0)(128)},226:function(t,e,n){t.exports=n(0)(108)},227:function(t,e,n){t.exports=n(0)(472)},228:function(t,e,n){t.exports=n(0)(873)},229:function(t,e,n){t.exports=n(0)(2130)},243:function(t,e,n){t.exports=n(0)(1974)},262:function(t,e,n){t.exports=n(0)(2094)},263:function(t,e,n){t.exports=n(0)(535)},55:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return v});n(193);var o,i,r,c=n(164),p=(n(262),n(263)),u=n(147),a=n(148),f=n(150),s=n(149),d=n(151),l=n(154),x=n(1),m=n.n(x),b=n(152),h=n(146),g=n(142),O=n(251),v=(o=Object(b["Bind"])(),i=Object(b["Bind"])(),r=function(t){function e(){return Object(u["a"])(this,e),Object(f["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),Object(a["a"])(e,[{key:"editOption",value:function(t){this.props.onEdit(t)}},{key:"deleteOption",value:function(t){this.props.onDelete(t)}},{key:"render",value:function(){var t=this,e=this.props,n=e.loading,o=e.predefined,i=e.dataSource,r=void 0===i?[]:i,u=[{title:h["a"].get("hwfp.common.model.common.variableName").d("\u5b57\u6bb5\u540d\u79f0"),dataIndex:"variableName",width:150},{title:h["a"].get("hwfp.common.model.common.variableType").d("\u5b57\u6bb5\u7c7b\u578b"),dataIndex:"variableTypeMeaning",width:150},{title:h["a"].get("hwfp.common.model.common.variableDescription").d("\u5b57\u6bb5\u63cf\u8ff0"),dataIndex:"description"},{title:h["a"].get("hwfp.common.model.common.requiredFlag").d("\u662f\u5426\u5fc5\u8f93"),dataIndex:"requiredFlag",width:100,render:O["i"]},{title:h["a"].get("hzero.common.button.action").d("\u64cd\u4f5c"),dataIndex:"option",width:120,render:function(e,n){var i=[{key:"edit",ele:m.a.createElement("a",{onClick:function(){return t.editOption(n)}},h["a"].get("hzero.common.button.edit").d("\u7f16\u8f91")),len:2,title:h["a"].get("hzero.common.button.edit").d("\u7f16\u8f91")},{key:"delete",ele:m.a.createElement(p["default"],{placement:"topRight",title:h["a"].get("hzero.common.message.confirm.delete").d("\u662f\u5426\u5220\u9664\u6b64\u6761\u8bb0\u5f55\uff1f"),onConfirm:function(){return t.deleteOption(n)}},m.a.createElement("a",null,h["a"].get("hzero.common.button.delete").d("\u5220\u9664"))),len:2,title:h["a"].get("hzero.common.button.delete").d("\u5220\u9664")}];if(!o)return Object(O["d"])(i,n)}}];return m.a.createElement(x["Fragment"],null,m.a.createElement(c["default"],{bordered:!0,scroll:{x:Object(g["B"])(u)},rowKey:function(t,e){return e+1},loading:n,columns:u,dataSource:r,pagination:!1}))}}]),e}(x["Component"]),Object(l["a"])(r.prototype,"editOption",[o],Object.getOwnPropertyDescriptor(r.prototype,"editOption"),r.prototype),Object(l["a"])(r.prototype,"deleteOption",[i],Object.getOwnPropertyDescriptor(r.prototype,"deleteOption"),r.prototype),r)}}]);