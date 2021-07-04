(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{1020:function(t,_,v){"use strict";v.r(_);var r=v(4),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://time.geekbang.org/column/intro/189",target:"_blank",rel:"noopener noreferrer"}},[t._v("《透视HTTP协议》"),v("OutboundLink")],1),t._v("是 "),v("code",[t._v("罗剑锋")]),t._v(" （奇虎360技术专家）在极客时间开的一门专栏课，笔者记录一下学习笔记，仅供参考。")])]),t._v(" "),v("h2",{attrs:{id:"http-是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-是什么"}},[t._v("#")]),t._v(" HTTP 是什么")]),t._v(" "),v("blockquote",[v("p",[t._v("HTTP 就是超文本传输协议，也就是 "),v("code",[t._v("HyperText Transfer Protocol")]),t._v("。")])]),t._v(" "),v("h3",{attrs:{id:"协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协议"}},[t._v("#")]),t._v(" 协议")]),t._v(" "),v("p",[t._v("首先，HTTP 是一个协议。")]),t._v(" "),v("blockquote",[v("p",[t._v("HTTP 是一个用在计算机世界里的协议。它使用计算机能够理解的语言确立了一种计算机之间交流通信的规范，以及相关的各种控制和错误处理方式。")])]),t._v(" "),v("h3",{attrs:{id:"传输"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#传输"}},[t._v("#")]),t._v(" 传输")]),t._v(" "),v("blockquote",[v("p",[t._v("HTTP 是一个在计算机世界里专门用来在两点之间传输数据的约定和规范。")])]),t._v(" "),v("p",[t._v("HTTP 是一个"),v("code",[t._v("传输协议")]),t._v("，所谓的"),v("code",[t._v("传输（Transfer）")]),t._v("其实很好理解，就是把一堆东西从 A 点搬到 B 点，或者从 B 点搬到 A 点，即“A<===>B”。")]),t._v(" "),v("p",[v("strong",[t._v("第一点")]),t._v("：HTTP 协议是一个"),v("code",[t._v("双向协议")]),t._v("。")]),t._v(" "),v("p",[t._v("也就是说，数据在A和B之间是双向流动，（一个叫请求方，另一个叫响应方）。")]),t._v(" "),v("p",[v("strong",[t._v("第二点")]),t._v("：没有限制只有 A 和 B 这两个角色，允许中间有“中转”或者“接力”。")]),t._v(" "),v("p",[t._v("类似："),v("code",[t._v("A<=>X<=>Y<=>Z<=>B")]),t._v("，例如：安全认证、数据压缩、编码转换等等功能。")]),t._v(" "),v("h3",{attrs:{id:"超文本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#超文本"}},[t._v("#")]),t._v(" 超文本")]),t._v(" "),v("blockquote",[v("p",[t._v("HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范")])]),t._v(" "),v("p",[v("strong",[t._v("超文本")]),t._v("：文字、图片、音频和视频等的混合体，最关键的是含有“超链接”，能够从一个“超文本”跳跃到另一个“超文本”，形成复杂的非线性、网状的结构关系。")]),t._v(" "),v("h2",{attrs:{id:"http-不是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-不是什么"}},[t._v("#")]),t._v(" HTTP 不是什么")]),t._v(" "),v("p",[t._v("HTTP 是一个协议，是一种计算机间通信的规范，所以它不存在“单独的实体”。它不是浏览器、手机 APP 那样的应用程序，也不是 Windows、Linux 那样的操作系统，更不是 Apache、Nginx、Tomcat 那样的 Web 服务器。")]),t._v(" "),v("p",[v("strong",[t._v("HTTP 不是互联网。")])]),t._v(" "),v("p",[v("strong",[t._v("HTTP 不是编程语言。")])]),t._v(" "),v("p",[v("strong",[t._v("HTTP 不是 HTML。")])]),t._v(" "),v("p",[v("strong",[t._v("HTTP 不是一个孤立的协议。")])]),t._v(" "),v("blockquote",[v("p",[t._v("HTTP 通常跑在 TCP/IP 协议栈之上，依靠 IP 协议实现寻址和路由、TCP 协议实现可靠数据传输、DNS 协议实现域名查找、SSL/TLS 协议实现安全通信。")])]),t._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("1、HTTP 是一个用在计算机世界里的协议，它确立了一种计算机之间交流通信的规范，以及相关的各种控制和错误处理方式。")])]),t._v(" "),v("li",[v("p",[t._v("2、HTTP 专门用来在两点之间传输数据，不能用于广播、寻址或路由。")])]),t._v(" "),v("li",[v("p",[t._v("3、HTTP 传输的是文字、图片、音频、视频等超文本数据。")])]),t._v(" "),v("li",[v("p",[t._v("4、HTTP 是构建互联网的重要基础技术，它没有实体，依赖许多其他的技术来实现，但同时许多技术也都依赖于它。")])])]),t._v(" "),v("p",[v("code",[t._v("Chrono")]),t._v(" 画了一个思维导图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static001.geekbang.org/resource/image/27/cc/2781919e73f5d258ff1dc371af632acc.png",alt:"http思维导图"}})])])}),[],!1,null,null,null);_.default=a.exports}}]);