(window["webpackJsonppackages_hzero_front_hitf_name_"]=window["webpackJsonppackages_hzero_front_hitf_name_"]||[]).push([[40],{135:function(n,e,t){"use strict";var o=t(182),d=t.n(o);e["a"]=d.a,window.intl=d.a},141:function(n,e,t){n.exports=t(0)(1169)},144:function(n,e,t){n.exports=t(0)(198)},153:function(n,e,t){n.exports=t(0)(1161)},182:function(n,e,t){n.exports=t(123)(2648)},241:function(n,e,t){n.exports=t(0)(1974)},363:function(n,e,t){n.exports={"ant-dropdown":"ant-dropdown","ant-dropdown-wrap":"ant-dropdown-wrap","ant-btn":"ant-btn","anticon-down":"anticon-down","ant-dropdown-wrap-open":"ant-dropdown-wrap-open","ant-dropdown-hidden":"ant-dropdown-hidden","ant-dropdown-menu-hidden":"ant-dropdown-menu-hidden","ant-dropdown-menu":"ant-dropdown-menu","ant-dropdown-menu-item-group-title":"ant-dropdown-menu-item-group-title","ant-dropdown-menu-submenu-popup":"ant-dropdown-menu-submenu-popup","ant-dropdown-menu-item":"ant-dropdown-menu-item","ant-dropdown-menu-submenu-title":"ant-dropdown-menu-submenu-title",anticon:"anticon","ant-dropdown-menu-item-selected":"ant-dropdown-menu-item-selected","ant-dropdown-menu-submenu-title-selected":"ant-dropdown-menu-submenu-title-selected","ant-dropdown-menu-item-disabled":"ant-dropdown-menu-item-disabled","ant-dropdown-menu-submenu-title-disabled":"ant-dropdown-menu-submenu-title-disabled","ant-dropdown-menu-item-divider":"ant-dropdown-menu-item-divider","ant-dropdown-menu-submenu-title-divider":"ant-dropdown-menu-submenu-title-divider","ant-dropdown-menu-submenu-arrow":"ant-dropdown-menu-submenu-arrow","ant-dropdown-menu-submenu-vertical":"ant-dropdown-menu-submenu-vertical","ant-dropdown-menu-submenu":"ant-dropdown-menu-submenu","ant-dropdown-menu-submenu-disabled":"ant-dropdown-menu-submenu-disabled","slide-down-enter":"slide-down-enter","slide-down-enter-active":"slide-down-enter-active","ant-dropdown-placement-bottomLeft":"ant-dropdown-placement-bottomLeft","slide-down-appear":"slide-down-appear","slide-down-appear-active":"slide-down-appear-active","ant-dropdown-placement-bottomCenter":"ant-dropdown-placement-bottomCenter","ant-dropdown-placement-bottomRight":"ant-dropdown-placement-bottomRight",antSlideUpIn:"antSlideUpIn","slide-up-enter":"slide-up-enter","slide-up-enter-active":"slide-up-enter-active","ant-dropdown-placement-topLeft":"ant-dropdown-placement-topLeft","slide-up-appear":"slide-up-appear","slide-up-appear-active":"slide-up-appear-active","ant-dropdown-placement-topCenter":"ant-dropdown-placement-topCenter","ant-dropdown-placement-topRight":"ant-dropdown-placement-topRight",antSlideDownIn:"antSlideDownIn","slide-down-leave":"slide-down-leave","slide-down-leave-active":"slide-down-leave-active",antSlideUpOut:"antSlideUpOut","slide-up-leave":"slide-up-leave","slide-up-leave-active":"slide-up-leave-active",antSlideDownOut:"antSlideDownOut","ant-dropdown-trigger":"ant-dropdown-trigger","ant-dropdown-link":"ant-dropdown-link","anticon-ellipsis":"anticon-ellipsis","ant-dropdown-button":"ant-dropdown-button","ant-btn-group":"ant-btn-group","ant-dropdown-menu-dark":"ant-dropdown-menu-dark"}},369:function(n,e,t){"use strict";t(144),t(363),t(141)},83:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return m});t(170);var o=t(153),d=t(136),a=t(137),r=t(140),i=t(138),p=t(139),u=t(1),w=t.n(u),l=t(135),m=function(n){function e(){return Object(d["a"])(this,e),Object(r["a"])(this,Object(i["a"])(e).apply(this,arguments))}return Object(p["a"])(e,n),Object(a["a"])(e,[{key:"render",value:function(){var n=this.props,e=n.dataSource,t=n.loading,d=n.onFetch,a=n.pagination,r=n.onChange,i=[{title:l["a"].get("hzero.common.components.dataAudit.version").d("\u7248\u672c"),dataIndex:"entityVersion",width:200,render:function(n,e){var t=e.auditDataId;return w.a.createElement("a",{onClick:function(){return d(t)}},n)}},{title:l["a"].get("hzero.common.components.dataAudit.operationType").d("\u64cd\u4f5c\u7c7b\u578b"),dataIndex:"auditTypeMeaning",width:200},{title:l["a"].get("hzero.common.explain").d("\u8bf4\u660e"),dataIndex:"remark",width:100}];return w.a.createElement(o["default"],{rowKey:"auditDataId",bordered:!0,columns:i,dataSource:e,pagination:a,loading:t,onChange:function(n){return r(n)}})}}]),e}(u["PureComponent"])}}]);