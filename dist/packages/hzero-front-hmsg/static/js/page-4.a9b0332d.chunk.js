(window["webpackJsonppackages_hzero_front_hmsg_name_"]=window["webpackJsonppackages_hzero_front_hmsg_name_"]||[]).push([[50,27],{110:function(e,t,n){e.exports=n(0)(198)},116:function(e,t,n){e.exports=n(98)(2563)},148:function(e,t,n){e.exports=n(0)(261)},149:function(e,t,n){e.exports=n(0)(144)},151:function(e,t,n){"use strict";n(110),n(214)},152:function(e,t,n){"use strict";n(110),n(214)},33:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return O});n(347);var a,s,i,m=n(348),r=(n(151),n(148)),o=(n(152),n(149)),l=n(111),c=n(112),u=n(114),d=n(113),g=n(115),p=n(117),f=n(1),h=n.n(f),y=n(116),b=n(400),v=n.n(b),k=n(338),w=n.n(k),O=(a=Object(y["Bind"])(),s=Object(y["Bind"])(),i=function(e){function t(){return Object(l["a"])(this,t),Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments))}return Object(g["a"])(t,e),Object(c["a"])(t,[{key:"componentDidMount",value:function(){var e=this.props.handleUserMessage,t=void 0===e?function(e){return e}:e;t("MSG")}},{key:"handleSkip",value:function(e){var t=this.props,n=t.handleRead,a=void 0===n?function(e){return e}:n,s=t.handleDetails,i=void 0===s?function(e){return e}:s;a(e,"message"),i(e,"message")}},{key:"renderColor",value:function(e,t){var n=this,a={0:"#0687ff",1:"#cb38ad",2:"#ffbc00",3:"#f02b2b"};return h.a.createElement(m["default"].Item,{key:e.messageId,color:a[t%4]},h.a.createElement(r["default"],{className:v.a["message-row"]},h.a.createElement(o["default"],{span:16,className:v.a["message-title"],onClick:function(){return n.handleSkip(e.userMessageId)}},e.subject),h.a.createElement(o["default"],{span:7,className:v.a["message-time"],onClick:function(){return n.handleSkip(e.userMessageId)}},e.creationDate)))}},{key:"render",value:function(){var e=this,t=this.props.systemMessageList;return t.length?h.a.createElement(m["default"],{className:v.a["message-overflow"]},t.map(function(t,n){return e.renderColor(t,n)})):h.a.createElement("div",{className:v.a["message-img-wrap"]},h.a.createElement("img",{src:w.a,alt:"",className:v.a["message-img"]}))}}]),t}(h.a.Component),Object(p["a"])(i.prototype,"handleSkip",[a],Object.getOwnPropertyDescriptor(i.prototype,"handleSkip"),i.prototype),Object(p["a"])(i.prototype,"renderColor",[s],Object.getOwnPropertyDescriptor(i.prototype,"renderColor"),i.prototype),i)},338:function(e,t,n){e.exports=n.p+"static/media/temporarily-no-data.f4fe106d.svg"},347:function(e,t,n){"use strict";n(110),n(353)},348:function(e,t,n){e.exports=n(0)(1175)},353:function(e,t,n){e.exports={"ant-timeline":"ant-timeline","ant-timeline-item":"ant-timeline-item","ant-timeline-item-tail":"ant-timeline-item-tail","ant-timeline-item-pending":"ant-timeline-item-pending","ant-timeline-item-head":"ant-timeline-item-head","ant-timeline-item-head-blue":"ant-timeline-item-head-blue","ant-timeline-item-head-red":"ant-timeline-item-head-red","ant-timeline-item-head-green":"ant-timeline-item-head-green","ant-timeline-item-head-custom":"ant-timeline-item-head-custom","ant-timeline-item-content":"ant-timeline-item-content","ant-timeline-item-last":"ant-timeline-item-last","ant-timeline-pending":"ant-timeline-pending","ant-timeline-reverse":"ant-timeline-reverse"}},400:function(e,t,n){e.exports={"message-row":"hmsg-routes-cards-message-system-message-row","message-title":"hmsg-routes-cards-message-system-message-title","message-time":"hmsg-routes-cards-message-system-message-time","message-close":"hmsg-routes-cards-message-system-message-close","message-img":"hmsg-routes-cards-message-system-message-img","message-img-wrap":"hmsg-routes-cards-message-system-message-img-wrap","title-font":"hmsg-routes-cards-message-system-title-font"}}}]);